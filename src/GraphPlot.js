import React, { useRef } from 'react';
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
import Plotly from 'plotly.js/dist/plotly-cartesian';

export default class GraphPlot extends React.Component {


    constructor(props) {
        super((props));
        // this.state = {plotData: []};

    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({plotData: [
    //         {
    //           type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
    //           x: this.props.scatterx,     // more about "x": #scatter-x
    //           y: this.props.scattery,     // #scatter-y
    //           marker: {         // marker is an object, valid marker keys: #scatter-marker
    //             color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
    //           }
    //         },
    //         {
    //           type: 'bar',      // all "bar" chart attributes: #bar
    //           x: this.props.barx,     // more about "x": #bar-x
    //           y: this.props.bary,     // #bar-y
    //           name: 'bar chart example' // #bar-name
    //         }
    //       ]});
    //   }

    componentDidMount() {
        console.log('x data')
        console.log(this.props.scatterx)
        console.log('y data')
        console.log(this.props.scattery)
        // this.setState({plotData: [
        //     {
        //       type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
        //       x: this.props.scatterx,     // more about "x": #scatter-x
        //       y: this.props.scattery,     // #scatter-y
        //       marker: {         // marker is an object, valid marker keys: #scatter-marker
        //         color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
        //       }
        //     },
        //     {
        //       type: 'bar',      // all "bar" chart attributes: #bar
        //       x: this.props.barx,     // more about "x": #bar-x
        //       y: this.props.bary,     // #bar-y
        //       name: 'bar chart example' // #bar-name
        //     }
        //   ]});
    }

    render() {
        const PlotlyComponent = createPlotlyComponent(Plotly);

        let plotData = [
            {
              type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
              x: this.props.scatterx,     // more about "x": #scatter-x
              y: this.props.scattery,     // #scatter-y
              marker: {         // marker is an object, valid marker keys: #scatter-marker
                color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
              }
            },
            {
              type: 'bar',      // all "bar" chart attributes: #bar
              x: this.props.barx,     // more about "x": #bar-x
              y: this.props.bary,     // #bar-y
              name: 'bar chart example' // #bar-name
            }
          ];

        let layout = {                     // all "layout" attributes: #layout
            title: 'simple example',  // more about "layout.title": #layout-title
            xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
              title: 'time',         // more about "layout.xaxis.title": #layout-xaxis-title
              type: 'category'
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
            <div>
                <PlotlyComponent className="whatever" data={plotData} layout={layout} config={config}/>
            </div>
          )
          
    }


}