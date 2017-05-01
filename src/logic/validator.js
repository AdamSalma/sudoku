class SudokuMatrixValidator {
    /* Public */
    validate(matrix) {
        this.validateRows(matrix)
        // this.validateColumns(matrix)
        // this.validateBlocks(matrix)
    }

    /* Private */
    validateRows(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            const seen = [];
            matrix[i].map((entry, index) => {
                if (!entry in seen) {
                    throw new Error(`Invalid row ${i}::@${index}`, matrix[i].join(' '))
                }
            })
        }
    }
}

export default SudokuMatrixValidator
