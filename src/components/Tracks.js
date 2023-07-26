import React, { Component } from "react";

class Tracks extends Component {
  state = { playing: false, audio: null, playingPrevUrl: null };

  playAudio = (previewUrl) => () => {
    const audio = new Audio(previewUrl);

    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, audio, playingPrevUrl: previewUrl });
    } else {
      this.state.audio.pause();

      if (this.state.playingPrevUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ audio, playingPrevUrl: previewUrl });
      }
    }
  };

  trackIcon = (track) => {
    if (!track.preview_url) {
      return <span>N/A</span>;
    }

    if (this.state.playing && this.state.playingPrevUrl === track.preview_url) {
      return <span>||</span>;
    } else {
      return <span>&#9654;</span>;
    }
  };

  render() {
    const tracks = this.props.tracks;

    return (
      <div>
        {tracks.map((track) => {
          const { id, name, album, preview_url } = track;
          return (
            <div
              key={id}
              onClick={this.playAudio(preview_url)}
              className="track"
            >
              <img src={album.images[0].url} className="track-image" />
              <p className="track-name">{name}</p>
              <p className="track-icon">{this.trackIcon(track)}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tracks;
