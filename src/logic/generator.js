import SudokuMatrixValidator from './validator'

function random(max, min=0) {
    Math.floor(Math.random() * max) + min
}

Array.prototype.move = function (old_index, new_index) {
    while (old_index < 0) {
        old_index += this.length;
    }
    while (new_index < 0) {
        new_index += this.length;
    }
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};

class SudokuMatrixGenerator {
    constructor (props) {
        if (!props.size || props.size < 0) {
            throw new Error('Invalid matrix size')
        }

        this.size = props.size

        let i = 0
        this.chars = []
        while (props.size--) {
            this.chars.push(++i);
        }

        this.matrixValidator = new SudokuMatrixValidator();
    }

    getInitialMatrix () {
        let matrix = new Array(this.size);

        console.log('Before initialisation', matrix[0])

        for (var i = 0; i < this.size; i++) {
            matrix[i] = this.chars.slice(0)
        }

        return matrix;
    }

    getKey() {
        return {
            value: Math.upper(Math.random() * this.size),  // TODO: this.getRandomValue
            pos: {
                x: Math.floor(Math.random() * this.size),
                y: Math.floor(Math.random() * this.size)
            }
        }
    }

    createRandomMatrix ({maxTries=-1, size}) {
        let matrix = this.getInitialMatrix();

        let attempts = 0
        let invalid = true
        const key = this.getKey()

        while (invalid) {
            if (!isNaN(maxTries) && atteampt >= maxTries ) {
                break
            }
            attempts++

            matrix = this.shuffleMatrix(matrix)

            try {
                // this.matrixValidator.validate(matrix)
                invalid = false
            } catch (e) { return }
        }

        return matrix
    }

    shuffleMatrix (matrix) {
        const chars = this.chars.slice(0);
        for (var i = 0; i < matrix.length; i++) {

        }

        // this.matrixValidator.validate(matrix)

        return matrix;
    }

    shiftColumn(matrix, from_index, to_index) {
        for (var i = 0; i < matrix.length; i++) {
            matrix[i].move(from_index, to_index)
        }
    }

}


export default SudokuMatrixGenerator;
