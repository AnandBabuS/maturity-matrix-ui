import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export default class MaturityLevel extends React.Component {

    render() {
        const data = {
            labels: [
                'Matured',
                'Gap',
            ],
            datasets: [{
                data: [this.props.matured, this.props.gap],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                ]
            }],
            height: '100px',
            width: '50px',
        };
        
        return (
          <div>
              <Doughnut data={data} />
          </div>
        );
      }
}