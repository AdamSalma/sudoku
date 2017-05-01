import styles from './Board.sass'
import SudokuGenerator from '../../logic/generator'

import {h, Component} from 'preact'

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.sudoku = new SudokuGenerator({size: 9})

    }

    render() {
                // <input type="button" value="Generate" onClick={this.update} class={styles.button}/>
        return (
            <table class={styles.component}>
                {this.renderMatrix()}
            </table>
        )
    }

    renderMatrix() {
        const matrix = this.sudoku.createRandomMatrix();
        console.info("Rendering matrix", matrix);

        const size = 9
        const groupSize = 3
        const rows = []


        for (var j = 0; j < groupSize; j++) {

            for (var i = 0; i < groupSize; i++) {
                // every horizontal group
                let f1 = matrix[i].slice(0).splice(i*groupSize, groupSize)
                let f2 = matrix[i+1].slice(0).splice(i*groupSize, groupSize)
                let f3 = matrix[i+2].slice(0).splice(i*groupSize, groupSize)
                console.info(f1, f2, f3);

                rows.push(
                    <div class={styles.group}>
                        <div class={styles.subrow}>
                            {f1.map(el => <div class={styles.cell}>{el}</div>)}
                        </div>
                        <div class={styles.subrow}>
                            {f2.map(el => <div class={styles.cell}>{el}</div>)}
                        </div>
                        <div class={styles.subrow}>
                            {f3.map(el => <div class={styles.cell}>{el}</div>)}
                        </div>
                    </div>
                )
            }
        }

        const _ROWS = []
        for (var i = 0; i < groupSize; i++) {
            _ROWS.push(
                <tr class={styles.row}>
                    {rows.splice(0, groupSize)}
                </tr>
            )
        }

        return _ROWS

        // for (var k = 0; k < size/groupSize; k++) {
        //     var group = [];
        //     var values;
        //     var i = groupSize;
        //     while (i--) {
        //         values = matrix[i].slice(0).splice(k, groupSize*(k+1))
        //     }
        // }

        return matrix.map( row => {
            return (
                <div class={styles.row}>
                    {row.map( cell => {
                        return <span class={styles.cell}>{cell}</span>
                    })}
                </div>
            )
        })
    }
}
