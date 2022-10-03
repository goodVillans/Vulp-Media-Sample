export default class AudioPlayer {
    
    constructor(selector = '.audio-player', audio = []){
        //get html container
        this.playerElem = document.querySelector(selector);
        //Holds list of audio
        this.audio = audio;
        //current Audio playing
        this.currentAudio = null;
        // create html elements
        this.createPlayerElements();
        // holds ref to audio for visualizer
        this.audioContext = null;
    }

    createPlayerElements(){
        //html Audio tags
        this.audioElement = document.createElement('audio');
        // audioItems to be played
        const playlistElement = document.createElement('div');
        // assign classlist to playlist container
        playlistElement.classList.add('playlist');
        //append playlist child (audio element)
        this.playerElem.appendChild(this.audioElement);
        this.playerElem.appendChild(playlistElement);
        this.createPlaylistElement(playlistElement);
    }

    createPlaylistElement(playlistElement){
        // for each audio element create a link and instantiate icons and Track names
        this.audio.forEach(audio => {
            const audioItem = document.createElement('a');
            audioItem.classList.add('each-audio');
            audioItem.href = audio.url;
            audioItem.innerHTML = `
                <div class = "audio-in-container">
                <i class = "fa-solid fa-play play-pause"></i>
                </div>
                <div class = "audio-name-container">
                ${audio.name}
                </div>`;
            //call event listener for each audio item
            this.setEventListener(audioItem);
            playlistElement.appendChild(audioItem);
        });
    }

        setEventListener(audioItem){
            audioItem.addEventListener('click', (e)=> {
                e.preventDefault();


                // determines if is the current audio either playing or paused 
                const isCurrentAudio = audioItem.getAttribute('href') === (this.currentAudio && this.currentAudio.getAttribute('href'));
                
                // determine whether audio element being played is paused /played
                if (isCurrentAudio && !this.audioElement.paused){
                    this.setPlayIcon(this.currentAudio);
                    this.audioElement.pause();
                } else if (isCurrentAudio && this.currentAudio.paused){
                    this.setPauseIcon(this.currentAudio);
                    this.audioElement.play();
                } else {
                    if(this.currentAudio) {
                        this.setPlayIcon(this.currentAudio);
                    }
                    this.currentAudio = audioItem;
                    this.setPauseIcon(this.currentAudio);
                    this.audioElement.src = this.currentAudio.getAttribute('href');
                    this.audioElement.play();
                }
            });
        }

        setPlayIcon(element){
            const icon = element.querySelector('i');
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }

        setPauseIcon(element){
            const icon = element.querySelector('i');
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        }
        

}