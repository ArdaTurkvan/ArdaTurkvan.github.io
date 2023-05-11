// Component to allow embedded youtube videos!
// courtesy of this dev.to post: https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

import React from "react";
import PropTypes from "prop-types";
import '../style/project.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube video"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;