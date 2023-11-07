import './NavBar.css';
import { Link } from 'react-router-dom';
import React from 'react';

function NavBar() {
  const videoRef = React.useRef(null);

  // Set the playback speed
  const setPlaybackSpeed = () => {
      if (videoRef.current) {
          videoRef.current.playbackRate = 0.5; // Adjust the playback speed as needed
      }
  };
  return (
    <div>
        <nav>
            <Link to="/home">
                <div className="logo-container">
                    <video
                        autoPlay
                        loop={false}
                        muted
                        className="logo"
                        onLoadedMetadata={setPlaybackSpeed} // Set the playback speed once the metadata is loaded
                        ref={videoRef}
                    >
                        <source src={process.env.PUBLIC_URL + '/assets/logo-animation.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Link>
            <Link to="/menu">Menu</Link>
            <Link to="/order">Order</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </nav>
    </div>
  );
}

export default NavBar;
