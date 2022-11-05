    import {save, load,} from "./localStorage.js"
    import Player from '@vimeo/player';
    var throttle = require('lodash.throttle');
    
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    // player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time"))).then(function(seconds) {
        player.setCurrentTime(load("videoplayer-current-time")).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });


    const onTimeUpdate = function(data){
        // localStorage.setItem("videoplayer-current-time",JSON.stringify(data.seconds))
        save("videoplayer-current-time",JSON.stringify(data.seconds))
    }


    player.on('timeupdate', throttle(onTimeUpdate, 1000));