import React, { Component } from 'react'

class InputBox extends Component {

    render() {
        const { type , placeholder, onChange} = this.props
        return (
            <div>
                <input type={type} onChange={onChange} placeholder={placeholder} />
            </div>
        )
    }
}

export default InputBox
