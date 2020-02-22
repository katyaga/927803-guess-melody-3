import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import GenreQuestion from "../genre-question/genre-question.jsx";
import {GameType} from "../../const.js";

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._onChangeInput = this._onChangeInput.bind(this);

    this.state = {
      // activePlayer: 0,
      answers: [false, false, false, false],
    };
  }

  _onChangeInput(index, answers, userAnswers) {
    return (evt) => {
      const value = evt.target.checked;

      this.setState({
        answers: [
          ...userAnswers.slice(0, index),
          value,
          ...userAnswers.slice(index + 1)],
      });
    };
  }

  render() {
    // const {onAnswer, question} = this.props;
    // const {answers: userAnswers, activePlayer} = this.state;
    const {onAnswer, question, renderPlayer} = this.props;
    const {answers: userAnswers} = this.state;
    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>

        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.answers);
          }}
        >
          {answers.map((answer, i) => (
            <GenreQuestion
              key={`${i}-${answer.src}`}
              answers={this.state}
              answer={answer}
              i={i}
              onChangeInput={this._onChangeInput(i, answers, userAnswers)}
              onPlayButtonClick={() => {
                this.setState({
                  activePlayer: activePlayer === i ? -1 : i,
                });
              }}
              isPlaying={i === activePlayer}
            />
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

export default GenreQuestionScreen;
