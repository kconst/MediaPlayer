import Playlist from './Playlist';

class MediaPlayer {
    constructor(args) {
        this.playlist = new Playlist(args.playlist || []);
        this.type = args.type || 'video';
        this.container = args.element || document.createElement('div');
        this.player = document.createElement(this.type);
        this.poster = args.poster || false;
        this.disableScrubbing = args.disableScrubbing || false;
        
        this.init();
    }
    
    init() {
        const currentItem = this.playlist.doNext();
        
        this.container.appendChild(this.player);
    }
}

export default MediaPlayer;