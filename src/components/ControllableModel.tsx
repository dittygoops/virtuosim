import React from 'react';

const ControllableModel: React.FC = () => {
    return (
        <div className="video-container">
            <video
            src='public/2024-10-20 23-31-51.mp4'
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg shadow-md"
            ></video>
        </div>
    );
};

export default ControllableModel;
