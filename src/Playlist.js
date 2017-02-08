'use strict';

class Playlist {
    constructor(items) {
        // this.playlist = items || [];
        this.current = 0;
        
        if (!Array.isArray(items)) {
            items = [items];
        }
        
        this.playlist = items.map(item => {
            return {
                playing: false,
                src: item.src || item,
                callback: item.callback
            };
        });
    }
    
    doNext() {
        return this.playlist[this.current += 1];
    }
    
    doPrevious() {
        return this.playlist[this.current -= 1];
    }
}

export default Playlist;