/******/ (() => { // webpackBootstrap
/*!******************!*\
  !*** ./index.js ***!
  \******************/
//import css from "file.css"

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMmUxZmFjM2JjMzZlNjE4ZDBlNy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBjc3MgZnJvbSBcImZpbGUuY3NzXCJcclxuXHJcbmNvbnN0IHZvbHVtZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWVTbGlkZXInKTtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9ucyBidXR0b24nKTtcclxuICAgIGNvbnN0IHN1bW1lckF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1lckF1ZGlvJyk7XHJcbiAgICBjb25zdCByYWluQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbkF1ZGlvJyk7XHJcbiAgICBjb25zdCB3aW50ZXJBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW50ZXJBdWRpbycpO1xyXG4gICAgbGV0IGN1cnJlbnRBdWRpbyA9IG51bGw7XHJcblxyXG5cclxuICAgIHZvbHVtZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHN1bW1lckF1ZGlvLnZvbHVtZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgcmFpbkF1ZGlvLnZvbHVtZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgd2ludGVyQXVkaW8udm9sdW1lID0gdGhpcy52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzb3VuZCA9IHRoaXMuZGF0YXNldC5zb3VuZDtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChzb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3VtbWVyJzpcclxuICAgICAgICAgICAgICAgICAgICBhdWRpbyA9IHN1bW1lckF1ZGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gJ3N1bW1lci1iZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyYWluJzpcclxuICAgICAgICAgICAgICAgICAgICBhdWRpbyA9IHJhaW5BdWRpbztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdyYWluLWJnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3dpbnRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW8gPSB3aW50ZXJBdWRpbztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICd3aW50ZXItYmcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudEF1ZGlvID09PSBhdWRpbykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QXVkaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEF1ZGlvID0gYXVkaW87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==