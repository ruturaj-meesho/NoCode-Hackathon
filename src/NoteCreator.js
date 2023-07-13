import React from 'react';
import './noteCreator.css';
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);
 

export default class NoteCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        this.props.onNoteSubmit(this.state.value);
        this.setState({value: ''})
    }
    
    render() {
        let data = [
            {
              type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
              x: [1, 2, 3],     // more about "x": #scatter-x
              y: [6, 2, 3],     // #scatter-y
              marker: {         // marker is an object, valid marker keys: #scatter-marker
                color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
              }
            },
            {
              type: 'bar',      // all "bar" chart attributes: #bar
              x: [1, 2, 3],     // more about "x": #bar-x
              y: [6, 2, 3],     // #bar-y
              name: 'bar chart example' // #bar-name
            }
          ];
          let layout = {                     // all "layout" attributes: #layout
            title: 'simple example',  // more about "layout.title": #layout-title
            xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
              title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
            },
            annotations: [            // all "annotation" attributes: #layout-annotations
              {
                text: 'simple annotation',    // #layout-annotations-text
                x: 0,                         // #layout-annotations-x
                xref: 'paper',                // #layout-annotations-xref
                y: 0,                         // #layout-annotations-y
                yref: 'paper'                 // #layout-annotations-yref
              }
            ]
          };
          let config = {
            showLink: false,
            displayModeBar: true
          };
        return (
            <div className='creator-container'>
                <textarea 
                placeholder="Enter your prompt here and click submit"
                value={this.state.value}
                onChange={this.handleChange} 
                className='textarea-style' />
                <div>
                    <button 
                    onClick={this.handleSubmit}
                    className='creator-action-bar'>
                        Submit
                    </button>
                </div>
                {/* <div>
                <PlotlyComponent className="whatever" data={data} layout={layout} config={config}/>
                </div> */}
            </div>
        )
    }
}