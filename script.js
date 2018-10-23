document.body.addEventListener('keypress',  (e) => {
    let boom = document.querySelector('#boom');
    let clap = document.querySelector('#clap');
    let tink = document.querySelector('#tink');
    let kick = document.querySelector('#kick');
    let hihat = document.querySelector('#hihat');
    let myMan = document.querySelector('#my-man');

    switch(e.key) {
        case 'q':
        boom.currentTime = 0
        boom.play()
            break;
        case 'w':
        clap.currentTime = 0    
        clap.play()
            break;
        case 'e':
        tink.currentTime = 0  
        tink.play();    
            break;
        case 'r':
        kick.currentTime = 0  
        kick.play();    
            break;
        case 't':
        hihat.currentTime = 0  
        hihat.play();    
            break;
        case 'y':    
        myMan.currentTime = 0  
        myMan.play();    
            break;
    }

})