import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

const ArtistQuestion = (props) => {
  const {onPlayButtonClick, answer, isPlaying} = props;

  return (
    <div className="track">
      <AudioPlayer
        isPlaying={isPlaying}
        src={answer.src}
        onPlayButtonClick={onPlayButtonClick}
      />
    </div>
  );
};

ArtistQuestion.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default ArtistQuestion;
