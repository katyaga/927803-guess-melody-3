import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

const GenreQuestion = (props) => {
  const {onChangeInput, onPlayButtonClick, answers, answer, i, isPlaying} = props;
  const {answers: userAnswers} = answers;

  return (
    <div className="track">
      <AudioPlayer
        isPlaying={isPlaying}
        src={answer.src}
        onPlayButtonClick={onPlayButtonClick}
      />
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
  onPlayButtonClick: PropTypes.func.isRequired,
  answers: PropTypes.shape({
    answers: PropTypes.array.isRequired,
  }).isRequired,
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  i: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default GenreQuestion;
