    const volumeSlider = document.getElementById('volumeSlider') as HTMLInputElement;
    const buttons = document.querySelectorAll('.buttons button') as NodeListOf<HTMLButtonElement>;
    const summerAudio = document.getElementById('summerAudio') as HTMLAudioElement;
    const rainAudio = document.getElementById('rainAudio') as HTMLAudioElement;
    const winterAudio = document.getElementById('winterAudio') as HTMLAudioElement;
    let currentAudio: HTMLAudioElement | null = null;
    let audio: HTMLAudioElement;


    volumeSlider.addEventListener('input', function() {
        summerAudio.volume = parseFloat(this.value);
        rainAudio.volume = parseFloat(this.value);
        winterAudio.volume = parseFloat(this.value);
    });

    buttons.forEach(button => {
        button.addEventListener('click', function(): void {
            const sound = this.dataset.sound;

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