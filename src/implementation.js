import MediaPlayer from './Core';

const player = new MediaPlayer({
    playlist: ['http://mediadownloads.mlb.com/mlbam/mp4/2016/10/15/1206411983/1476503245282/asset_1200K.mp4', 'http://mediadownloads.mlb.com/mlbam/mp4/2016/10/15/1206372683/1476500631007/asset_1200K.mp4'],
    container: document.querySelector('main'),
    autoplay: true
});

console.log(player);