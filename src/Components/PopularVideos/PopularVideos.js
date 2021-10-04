import React from 'react';

const PopularVideos = () => {
    return (
        <div className="mt-4 mb-5">

            <h1 className="mb-4 mt-4 text-warning">Popular Course Video</h1>
            <div className="justify-content mt-5">
                <iframe className="mx-3" width="300" height="400" src="https://www.youtube.com/embed/Es9oXr0qXrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="mx-3" width="300" height="400" src="https://www.youtube.com/embed/2ObjAYV-1qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="mx-3" width="300" height="400" src="https://www.youtube.com/embed/2tPnZAn8NbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default PopularVideos;