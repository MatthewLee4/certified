import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'

function QuestionCount() {
    return (
        <div className="questionCount">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    )
}

QuestionCount.prototypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}
export default QuestionCount
