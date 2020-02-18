import React from "react";
import PropTypes from "prop-types";

const GenreQuestion = (props) => {
  const {onChangeInput, answers, answer, i} = props;
  const {answers: userAnswers} = answers;

  return (
    <div className="track">
      <button className="track__button track__button--play" type="button"/>
      <div className="track__status">
        <audio src={answer.src}/>
      </div>
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`}
          id={`answer-${i}`}
          checked={userAnswers[i]}
          onChange={onChangeInput}
        />
        <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
      </div>
    </div>
  );
};

GenreQuestion.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  answers: PropTypes.shape({
    answers: PropTypes.array.isRequired,
  }).isRequired,
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  i: PropTypes.number.isRequired
};

export default GenreQuestion;
