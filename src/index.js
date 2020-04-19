import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

class App extends React.Component {
    state = {
        counter: 0
    }

    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 10
        })
    }

    decreaseCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    resetCounter = () => {
        this.setState({
            counter: this.state.counter * 0
        })
    }

    render() {
        return <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.decreaseCounter}>
                -
            </button>
            <button onClick={this.increaseCounter}>
                +
            </button>
            <br></br>
            <button onClick={this.resetCounter}>
                Reset
            </button>
        </div>
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)

    