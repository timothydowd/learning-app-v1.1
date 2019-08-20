import React, { Component } from 'react'
import QuestionMenu from './QuestionMenu'


export default class AntonymsStudy extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h2>Antonyms Study</h2>
                <div >
                <QuestionMenu data={this.props.data} synOrAnt={'antonyms'} />
                </div>
                
            </div>
                
            
        )
    }
}
