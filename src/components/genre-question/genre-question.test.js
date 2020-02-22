import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestion from './genre-question.jsx';

const answer = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

const answers = {
  answers: [true, false]
};

const i = 2;

it(`GenreQuestion is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestion
      i={i}
      isPlaying={true}
      answers={answers}
      answer={answer}
      onChangeInput={() => {}}
      onPlayButtonClick={() => {}}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
