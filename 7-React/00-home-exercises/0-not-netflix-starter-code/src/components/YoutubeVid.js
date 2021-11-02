import React from "react";

class YoutubeVid extends React.Component {
  componentDidUpdate(prevProps) {
    console.log(prevProps, "<--- previous propss");
  }

  render() {
    return (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${this.props.vidKey}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }
}

export default YoutubeVid;