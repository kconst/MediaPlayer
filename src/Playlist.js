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
                callback: item.callback || (() => {})
            };
        });
    }
    
    doNext() {
        this.playlist[this.current].callback();
        
        this.current += 1;
        
        // return last played and do not fire callback if we reached the limit
        if (!this.playlist[this.current]) {
            this.current -= 1;
            return false;
        }
        
        return this.playlist[this.current];
    }
    
    doPrevious() {
        this.playlist[this.current].callback();
        
        this.current -= 1;
        
        // return last played and do not fire callback if we reached the limit
        if (!this.playlist[this.current]) {
            this.current += 1;
            return false;
        }
        
        return this.playlist[this.current];
    }
    
    getActive() {
        return this.playlist[this.current];
    }
}

export default Playlist;