import MediaPlayer from './Core';

const player = new MediaPlayer({
    playlist: [{
        src: 'http://mediadownloads.mlb.com/mlbam/mp4/2016/10/15/1206411983/1476503245282/asset_1200K.mp4',
        callback: () => { alert('first one played') }
    },
    {
        src: 'http://mediadownloads.mlb.com/mlbam/mp4/2016/10/15/1206372683/1476500631007/asset_1200K.mp4',
        callback: () => { alert('second one played') }
    }],
    container: document.querySelector('main'),
    autoplay: true
});

console.log(player);