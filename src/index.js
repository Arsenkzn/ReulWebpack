const volumeSlider = document.getElementById('volumeSlider');
    const buttons = document.querySelectorAll('.buttons button');
    const summerAudio = document.getElementById('summerAudio');
    const rainAudio = document.getElementById('rainAudio');
    const winterAudio = document.getElementById('winterAudio');
    let currentAudio = null;


    volumeSlider.addEventListener('input', function() {
        summerAudio.volume = this.value;
        rainAudio.volume = this.value;
        winterAudio.volume = this.value;
    });

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sound = this.dataset.sound;
            let audio;

            switch (sound) {
                case 'summer':
                    audio = summerAudio;
                    document.body.className = 'summer-bg';
                    break;
                case 'rain':
                    audio = rainAudio;
                    document.body.className = 'rain-bg';
                    break;
                case 'winter':
                    audio = winterAudio;
                    document.body.className = 'winter-bg';
                    break;
            }

            if (currentAudio === audio) {
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            } else {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                audio.play();
                currentAudio = audio;
            }
        });
    });