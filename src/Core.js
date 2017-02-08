import Playlist from './Playlist';

class MediaPlayer {
    constructor(args) {
        this.playlist = new Playlist(args.playlist || []);
        this.type = args.type || 'video';
        this.container = args.container || document.createElement('div');
        this.player = document.createElement(this.type);
        this.poster = args.poster;
        this.disableScrubbing = args.disableScrubbing || false;
        this.autoplay = args.autoplay || false;
        
        this.init();
    }
    
    init() {
        this.player.setAttribute('controls', true);
        
        if (this.autoplay) {
            this.player.setAttribute('autoplay', true);
        }
        
        if (this.poster) {
            this.player.setAttribute('poster', this.poster);
        }
        
        if (this.disableScrubbing) {
            this.player.addEventListener('timeupdate', event => {
                console.warn(event)
                debugger
            });
            
            this.player.addEventListener('seeked', event => {
                debugger;
            });
        }
        
        this.setSource(this.playlist.getActive());
        
        this.player.addEventListener('click', this.player.play());
        this.player.addEventListener('ended', this.playNext.bind(this));
        this.player.addEventListener('error', error => console.warn(error));
        this.player.addEventListener('stalled', error => console.warn(error));
        
        this.container.appendChild(this.player);
    }
    
    setSource(srcObj) {
        this.player.src = srcObj.src;
    }
    
    playNext() {
        console.log('playing next track');
        this.setSource(this.playlist.doNext());
        
        this.player.play();
    }
    
    playPrevious() {
        console.log('playing previous track');
        
        this.setSource(this.playlist.doPrevious());
        
        this.player.play();
    }
}

export default MediaPlayer;