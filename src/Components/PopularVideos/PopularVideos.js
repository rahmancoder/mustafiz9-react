import React from 'react';

const PopularVideos = () => {
    return (
        <div>

            <h1>Popular Course Video</h1>
            <div className="justify-content">
                <iframe className="mx-3" width="300" height="400" src="https://www.youtube.com/embed/Es9oXr0qXrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="mx-3" width="300" height="400" src="https://www.youtube.com/embed/2ObjAYV-1qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="mx-3" width="300" height="400" src="https://www.youtube.com/embed/2tPnZAn8NbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default PopularVideos;