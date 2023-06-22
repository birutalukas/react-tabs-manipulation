import React, { useRef, useState, useEffect } from "react";

import playIcon from "../assets/images/playIcon.svg";
import pauseIcon from "../assets/images/pauseIcon.svg";

const LovedVideo = ({ video, poster }) => {
    const videoElement = useRef(null);

    const [playerState, setPlayerState] = useState(false);

    const togglePlay = () => {
        setPlayerState((playerState) => !playerState);
    };

    useEffect(() => {
        playerState
            ? videoElement.current.play()
            : videoElement.current.pause();
    }, [playerState, videoElement]);

    useEffect(() => {
        videoElement && setPlayerState(true);
    }, []);

    return (
        <div className="video-wrapper">
            <video
                src={video}
                ref={videoElement}
                poster={poster}
                muted="muted"
            />
            <div className="controls">
                <button onClick={togglePlay} className="control-btn">
                    {!playerState ? (
                        <img
                            src={playIcon}
                            alt="Play"
                            className="play"
                            width="16"
                            height="16"
                        />
                    ) : (
                        <img
                            src={pauseIcon}
                            alt="Pause"
                            className="pause"
                            width="16"
                            height="16"
                        />
                    )}
                </button>
            </div>
        </div>
    );
};

export default LovedVideo;
