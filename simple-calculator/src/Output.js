import React, { Component } from 'react'

class Output extends Component {
    render() {
        return (
            <div>
                <input value={this.props.result} placeholder='Output' readOnly/>
            </div>
        )
    }
}

export default Output
