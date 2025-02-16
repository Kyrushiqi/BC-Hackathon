import './VideoResources.css';

function VideoResources ({ videoUrl, thumbnailUrl, title}) {
    
    const videoId = new URL(videoUrl).searchParams.get("v");
    
    return (
        <div id="video">
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <img src={thumbnailUrl} alt={title} width="200" />
            </a>
            <div id="title">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default VideoResources;