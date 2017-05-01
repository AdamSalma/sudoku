import './App.sass'
import Board from '../Board'

import {h, Component} from 'preact'

export default class App extends Component {
    render() {
        return (
            <div class={this.props.class}>
                <Board />
            </div>
        )
    }
}
