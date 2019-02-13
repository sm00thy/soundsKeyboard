let playSounds,
    audio = [], audio1 = [],audio2 = [], audio3 = [],
    startTime,
    fullTime, fullTime1, fullTime2, fullTime3,
    recordButton = document.querySelector("#record"),
    recordButton1 = document.querySelector('#record1'),
    recordButton2 = document.querySelector('#record2'),
    recordButton3 = document.querySelector('#record3'),
    playButton = document.querySelector('#play'),
    playButton1 = document.querySelector('#play1'),
    playButton2 = document.querySelector('#play2'),
    playButton3 = document.querySelector('#play3'),
    clearButton = document.querySelector('#clear'),
    clearButton1 = document.querySelector('#clear1'),
    clearButton2 = document.querySelector('#clear2'),
    clearButton3 = document.querySelector('#clear3'),
    playAll = document.querySelector('#playall'),
    clearAll = document.querySelector('#clearall'),
    isRecording = true;
    
document.body.addEventListener('keypress',(e) => {
    let boom = document.querySelector('#boom'),
    clap = document.querySelector('#clap'),
    tink = document.querySelector('#tink'),
    kick = document.querySelector('#kick'),
    hihat = document.querySelector('#hihat'),
    ride = document.querySelector('#ride');

    switch(e.key) {
        case 'q':
        boom.currentTime = 0
        boom.play()
        record.bind(null, audio, boom);
            break;
        case 'w':
        clap.currentTime = 0
        clap.play()
        record.bind(null, audio, clap);
            break;
        case 'e':
        tink.currentTime = 0
        tink.play();    
        record.bind(null, audio, tink);
            break;
        case 'r':
        kick.currentTime = 0
        kick.play();    
        record.bind(null, audio, kick);
            break;
        case 't':
        hihat.currentTime = 0  
        hihat.play(); 
        record.bind(null, audio, hihat);
            break;
        case 'y':    
        ride.currentTime = 0
        ride.play();   
        record.bind(null, audio, ride); 
            break;
    }
});

function startRecording(track) {
    console.log("recording")
    console.log(track.length)
    if (isRecording) {
        
        startTime = Date.now();
        document.body.addEventListener('keypress',(e) => {    
            switch (e.key) {
                case 'q':
                track.push(boom);
                fullTime = Date.now() - startTime;
                break;
                case 'w':
                track.push(clap);
                fullTime = Date.now() - startTime;
                console.log("mess")
                break;
                case 'e':
                track.push(tink);
                fullTime = Date.now() - startTime;
                break;
                case 'r':
                track.push(kick);
                fullTime = Date.now() - startTime;
                break;
                case 't':
                track.push(hihat);
                fullTime = Date.now() - startTime;
                break;
                case 'y':
                track.push(ride);
                fullTime = Date.now() - startTime;
                break;
            }
        });
        if(isRecording){
            console.log(track.length)
        }
    }
};

function stopRecording() {
    isRecording = false;
    console.log("stop recording")
};

function playTrack(track /*,time*/) {
    console.log("play track" + track)
    for (let i = 0; i < track.length; i++) {
        track[i].play();
        setTimeout(() => {
            track[i].play()
        }, 1000);
    }
}

playAll.addEventListener('click', function(e) {
    console.log(audio.length)
});

clearAll.addEventListener('click', function(e) {
    audio.length = 0;
    audio1.length = 0;
    audio2.length = 0;
    audio3.length = 0;
    console.log(audio.length)
});

recordButton.addEventListener('click', startRecording.bind(null,audio), false);
recordButton1.addEventListener('click', startRecording.bind(null,audio1))
recordButton2.addEventListener('click', startRecording.bind(null,audio2))
recordButton3.addEventListener('click', startRecording.bind(null,audio3))

let stopRecord = document.querySelector('#stop');
stopRecord.addEventListener('click', stopRecording);
playButton.addEventListener('click', playTrack.bind(null, audio));