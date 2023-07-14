import time
import json
from flask import make_response, abort
from flask import jsonify, request
from flask_login import logout_user
from app import app, db
from app.models import User, Note
import requests
import re

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/journal/api/notes', methods=['GET'])
def get_all_notes():
    user = User.query.filter(User.username=='ruturaj').first()
    notes = user.notes.all()
    notesData = convert_to_json(notes)
    return construct_response(notesData)

@app.route('/journal/api/notes/<int:note_id>', methods=['GET'])
def get_note_by_id(note_id):
    note = Note.query.get(note_id)
    if note is None: abort(404)
    noteData = convert_to_json([note])
    return construct_response(noteData)

@app.route('/journal/api/notes/<int:note_id>', methods=['PUT'])
def update_note_by_id(note_id):
    if not request.json:
        abort(400)
    update_request = {Note.body:request.json['body']}
    res = db.session.query(Note).filter_by(id=note_id)
    if res.first() is None:
        abort(400)
    res.update(update_request)
    db.session.commit()
    return make_response({}, 204)

@app.route('/journal/api/notes', methods=['POST'])
def create_note():
    if not request.json:
        abort(400)
    user = User.query.filter(User.username=='ruturaj').first()
    note = Note(body=request.json['body'], author=user)
    db.session.add(note)
    db.session.commit()
    return make_response({}, 204)

@app.route('/journal/api/notes/<int:note_id>', methods=['DELETE'])
def delete_note_by_id(note_id):
    note = Note.query.get(note_id)
    if not note:
        abort(404)
    db.session.delete(note)
    db.session.commit()
    return make_response({},204)

@app.route('/nocode/question', methods=['POST'])
def post_question():
    if not request.json:
        abort(400)
    print(request.json)
    question = request.json['question']
    print(question)
    payload = {
    'statement': question
    }
    Headers = { 'Content-Type' : 'application/json'}
    print(payload)
    url_post = "http://172.31.40.186:8080/question"
    post_response = requests.post(url_post, json=payload, headers=Headers)
    print(post_response.json())
    #post_response_json = post_response.json()
    #print(post_response_json)
    user = User.query.filter(User.username=='ruturaj').first()
    result_body = construct_result_summary(post_response.json())
    
    # note = Note(body=result_body, author=user)
    # db.session.add(note)
    # db.session.commit()

    return result_body
    # return make_response({},204)

@app.route('/journal/logout')
def logout():
    logout_user()
    return

@app.errorhandler(400)
def not_found(error):
    return make_response(jsonify( { 'error': 'Bad request' } ), 400)

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

def convert_to_json(alchemyResults):
    return json.dumps([convert_to_dict(result) for result in alchemyResults], default=alchemy_encoder)

def construct_response(data):
    response = make_response(data)
    response.headers['Content-Type'] = 'json'
    return response

def alchemy_encoder(obj):
        """JSON encoder function for SQLAlchemy special classes."""
        if isinstance(obj, datetime.date):
            return obj.isoformat()
        elif isinstance(obj, decimal.Decimal):
            return float(obj)

def convert_to_dict(row):
        d = {}
        for column in row.__table__.columns:
            d[column.name] = str(getattr(row, column.name))
        return d


def construct_result_summary(json_response) :
    d = []
    query_result = json_response['query_result']
    result_description = json_response['query_result_description']
    result_list = query_result[1:len(query_result)-1]


    curly_subs = getSubstringBetweenTwoChars('{','}',result_description)
    # col_list = curly_subs.split(',')
    col_list = [x.strip() for x in curly_subs.split(',')]



    res = re.split(r',\s*(?![^()]*\))', result_list)
 
    dims = []
    # printing result
    sublist = []
    for (i,s) in enumerate(res):
        sub = re.split(r',\s*(?![^()]*\))', s[1:len(s)-1])
        sublist.append(sub)
    
    print(sublist)
    # print(d)
    
    k = 0
    dic = {}
    for (j, ele) in enumerate(sublist):
      dic[col_list[k]] = ele[0]
      k += 1
      if (k == len(col_list)):
        k = 0
        d.append(dic)
        dic = {}
    
    print ('------')
    print(d)
    #return d
    return json.dumps(d)

def getSubstringBetweenTwoChars(ch1,ch2,s):
      return s[s.find(ch1)+1:s.find(ch2)]

# def processCellElement(String cell):



# def construct_result_summary(json_response) :
#     d = []
#     query_result = json_response['query_result']
#     result_description = json_response['query_result_description']
#     result_list = query_result[1:len(query_result)-1]


#     curly_subs = getSubstringBetweenTwoChars('{','}',result_description)
#     col_list = curly_subs.split(',')



#     res = re.split(r',\s*(?![^()]*\))', result_list)
 
#     dims = []
#     # printing result
#     for s in res:
#         sub = re.split(r',\s*(?![^()]*\))', s[1:len(s)-1])
#         dic = {}
#         for (i,su) in enumerate(sub):
#             dic[col_list[i]] = su
#         d.append(dic)
    
#     return d 

# def getSubstringBetweenTwoChars(ch1,ch2,s):
#     return s[s.find(ch1)+1:s.find(ch2)]


    # result = ""
    # result += 'Query : '
    # result += json_response['query']
    # result += '\nQuery result : '
    # result += json_response['query_result']
    # result += '\nResult description : '
    # result += json_response['query_result_description']
    