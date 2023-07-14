def parse_list(data):
    i = 0
    rows = []

    while i < len(data):
        if (data[i] == '('):
            row = ""
            y = find_closing_bracket(data, i)
            for j in range(i, y + 1):
                row = row + data[j]

            i = y
            col = []
            k = 1
            temp = ""
            pre = 0

            while k < len(row):
                if (row[k] == ',' or k == len(row) - 1):
                    temp = ""
                    for kk in range(pre, k):
                        temp = temp + row[kk]
                    pre = k + 1

                    col.append(temp.strip())
                    k = k + 1
                    continue
                if (row[k] == '('):
                    k = find_closing_bracket(row, k)

                else:
                    k = k + 1

            rows.append(col)
            i = y



        else:
            i = i + 1

    return rows

if __name__ == "__main__":
    data = "[(datetime.datetime(2023, 5, 29, 0, 0, tzinfo=<DstTzInfo 'Asia/Kolkata' IST+5:30:00 STD>), 15622158, 2457827, 15.732954435616387), (datetime.datetime(2023, 6, 5, 0, 0, tzinfo=<DstTzInfo 'Asia/Kolkata' IST+5:30:00 STD>), 23234721, 3737922, 16.08765605577962), (datetime.datetime(2023, 6, 12, 0, 0, tzinfo=<DstTzInfo 'Asia/Kolkata' IST+5:30:00 STD>), 22933892, 3541556, 15.442455209957384), (datetime.datetime(2023, 6, 19, 0, 0, tzinfo=<DstTzInfo 'Asia/Kolkata' IST+5:30:00 STD>), 22765963, 3457534, 15.187295173940148), (datetime.datetime(2023, 6, 26, 0, 0, tzinfo=<DstTzInfo 'Asia/Kolkata' IST+5:30:00 STD>), 17670104, 2373428, 13.431884724617355)]"
    rows = parse_list(data)

    print(rows)

    x = [row[0] for row in rows]
    print(x)
