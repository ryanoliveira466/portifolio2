document.addEventListener("DOMContentLoaded", () => {
    const welcomeSVG = document.getElementById('welcomeSVG');
    const notes = document.querySelectorAll('.notes');
    const theme = document.body.getAttribute('data-bs-theme');


    welcomeSVG.classList.remove('animate-stroke-light', 'animate-stroke-black');
    notes.forEach(note => {
        note.classList.remove('animate-stroke-black-notes');
        note.classList.remove('animate-stroke-light-notes');
    });

    if (theme === 'light') {
        welcomeSVG.classList.add('animate-stroke-black-welcome');
        notes.forEach(note => {
            note.classList.add('animate-stroke-black-notes');
        });
    } else {
        welcomeSVG.classList.add('animate-stroke-light-welcome');
        notes.forEach(note => {
            note.classList.add('animate-stroke-light-notes');
        });
    }
});



function zoomInOut(e) {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const totalHeight = documentHeight - windowHeight


    //
    const text = document.getElementById("text");
    const text2 = document.getElementById("text2");
    const text3 = document.getElementById("text3");
    const text4 = document.getElementById("text4");
    const text5 = document.getElementById("text5");
    const text6 = document.getElementById("text6");
    const text7 = document.getElementById("text7");
    const text8 = document.getElementById("text8");

    const scrollStart1 = 0;
    const scrollEnd1 = 0.10 * totalHeight;

    const scrollStart2 = scrollEnd1;
    const scrollEnd2 = 0.20 * totalHeight;

    const scrollStart3 = scrollEnd2;
    const scrollEnd3 = 0.30 * totalHeight;

    const scrollStart4 = scrollEnd3;
    const scrollEnd4 = 0.40 * totalHeight;

    const scrollStart5 = scrollEnd4;
    const scrollEnd5 = 0.50 * totalHeight;

    const scrollStart6 = scrollEnd5;
    const scrollEnd6 = 0.60 * totalHeight;

    const scrollStart7 = scrollEnd6;
    const scrollEnd7 = 0.70 * totalHeight;

    const scrollStart8 = scrollEnd7;
    const scrollEnd8 = 0.80 * totalHeight;



    // TEXT 1
    if (scrollTop >= scrollStart1 && scrollTop <= scrollEnd1) {
        const progress = (scrollTop - scrollStart1) / (scrollEnd1 - scrollStart1);
        const opacity = parseFloat((1 - progress).toFixed(1));
        text.style.opacity = opacity;

    }

    else {
        text.style.opacity = 0
    }


    // TEXT 2
    if (scrollTop >= scrollStart2 && scrollTop <= scrollEnd2) {
        const half = (scrollStart2 + scrollEnd2) / 2;
        const minFontSize = 16;
        const maxFontSize = 45;

        if (scrollTop < half) {
            const progress = (scrollTop - scrollStart2) / (half - scrollStart2);
            const opacity2 = parseFloat(progress.toFixed(1));
            text2.style.opacity = opacity2;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * progress;
            text2.style.fontSize = `${fontSize}px`;
        }

        if (scrollTop > half) {
            const progress = (scrollTop - half) / (scrollEnd2 - half);
            const opacity2 = parseFloat((1 - progress).toFixed(1));
            text2.style.opacity = opacity2;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * (1 - progress);
            text2.style.fontSize = `${fontSize}px`;
        }
    }

    else {
        text2.style.opacity = 0;
        text2.style.fontSize = "16px";
    }





    // TEXT 3
    if (scrollTop >= scrollStart3 && scrollTop <= scrollEnd3) {
        const progress = (scrollTop - scrollStart3) / (scrollEnd3 - scrollStart3);
        const half = (scrollStart3 + scrollEnd3) / 2;
        const minFontSize = 16;
        const maxFontSize = 45;

        if (scrollTop < half) {
            const progress = (scrollTop - scrollStart3) / (half - scrollStart3);
            const opacity3 = parseFloat((progress).toFixed(1));
            text3.style.opacity = opacity3;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * progress;
            text3.style.fontSize = `${fontSize}px`;
        }

        if (scrollTop > half) {
            const progress = (scrollTop - half) / (scrollEnd3 - half);
            const opacity3 = parseFloat((1 - progress).toFixed(1));
            text3.style.opacity = opacity3;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * (1 - progress);
            text3.style.fontSize = `${fontSize}px`;
        }

    }

    else {
        text3.style.opacity = 0;
        text3.style.fontSize = "16px";
    }


    // TEXT 4
    if (scrollTop >= scrollStart4 && scrollTop <= scrollEnd4) {
        const progress = (scrollTop - scrollStart4) / (scrollEnd4 - scrollStart4);
        const half = (scrollStart4 + scrollEnd4) / 2;
        const minFontSize = 16;
        const maxFontSize = 35;

        if (scrollTop < half) {
            const progress = (scrollTop - scrollStart4) / (half - scrollStart4);
            const opacity4 = parseFloat((progress).toFixed(1));
            text4.style.opacity = opacity4;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * progress;
            text4.style.fontSize = `${fontSize}px`;
        }

        if (scrollTop > half) {
            const progress = (scrollTop - half) / (scrollEnd4 - half);
            const opacity4 = parseFloat((1 - progress).toFixed(1));
            text4.style.opacity = opacity4;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * (1 - progress);
            text4.style.fontSize = `${fontSize}px`;
        }

    }

    else {
        text4.style.opacity = 0;
        text4.style.fontSize = "16px";
    }

    // TEXT 5
    if (scrollTop >= scrollStart5 && scrollTop <= scrollEnd5) {
        const progress = (scrollTop - scrollStart5) / (scrollEnd5 - scrollStart5);
        const half = (scrollStart5 + scrollEnd5) / 2;
        const minFontSize = 16;
        const maxFontSize = 35;

        text5.style.pointerEvents = 'all'

        if (scrollTop < half) {
            const progress = (scrollTop - scrollStart5) / (half - scrollStart5);
            const opacity5 = parseFloat((progress).toFixed(1));
            text5.style.opacity = opacity5;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * progress;
            text5.style.fontSize = `${fontSize}px`;
        }

        if (scrollTop > half) {
            const progress = (scrollTop - half) / (scrollEnd5 - half);
            const opacity5 = parseFloat((1 - progress).toFixed(1));
            text5.style.opacity = opacity5;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * (1 - progress);
            text5.style.fontSize = `${fontSize}px`;
        }

    }

    else {
        text5.style.opacity = 0;
        text5.style.fontSize = "16px";
        document.getElementById("text5").style.setProperty("pointer-events", "none", "important");
      
    }




    // TEXT 6
    if (scrollTop >= scrollStart6 && scrollTop <= scrollEnd6) {
        const progress = (scrollTop - scrollStart6) / (scrollEnd6 - scrollStart6);
        const half = (scrollStart6 + scrollEnd6) / 2;
        const minFontSize = 16;
        const maxFontSize = 35;

        text6.style.pointerEvents = 'all'

        if (scrollTop < half) {
            const progress = (scrollTop - scrollStart6) / (half - scrollStart6);
            const opacity6 = parseFloat((progress).toFixed(1));
            text6.style.opacity = opacity6;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * progress;
            text6.style.fontSize = `${fontSize}px`;
        }

        if (scrollTop > half) {
            const progress = (scrollTop - half) / (scrollEnd6 - half);
            const opacity6 = parseFloat((1 - progress).toFixed(1));
            text6.style.opacity = opacity6;

            const fontSize = minFontSize + (maxFontSize - minFontSize) * (1 - progress);
            text6.style.fontSize = `${fontSize}px`;
        }

    }

    else {
        text6.style.opacity = 0;
        text6.style.fontSize = "16px";
        document.getElementById("text6").style.setProperty("pointer-events", "none", "important");
         
    }





    // TEXT 7
    if (scrollTop >= scrollStart7 && scrollTop <= scrollEnd7) {
        const progress = (scrollTop - scrollStart7) / (scrollEnd7 - scrollStart7);
        const half = (scrollStart7 + scrollEnd7) / 2;
        const middleLonger = scrollTop > (half) - ((scrollStart7 - scrollEnd7) * -0.1) && scrollTop < (half) + ((scrollStart7 - scrollEnd7) * -0.1)
        const minFontSize = 16;
        const maxFontSize = 35;

        text7.style.pointerEvents = 'all'

        const notes = document.querySelectorAll('.notes');
        if (scrollTop < half) {
            notes.forEach(note => {
                note.classList.add('img-slide-up');
                note.addEventListener('animationend', () => {
                    note.classList.add('float');
                });
            });
        }

        if (scrollTop < half) {
            const progress = (scrollTop - scrollStart7) / (half - scrollStart7);
            const opacity7 = parseFloat((progress).toFixed(1));
            text7.style.opacity = opacity7;

            text7.style.transform = `scale(1) rotate(0)`;
        }

    
        //middle
        if (middleLonger) {
            text7.style.transform = `scale(1) rotate(0)`; 
        }


        if(scrollTop > half && middleLonger == false) {
            const progress = (scrollTop - half) / (scrollEnd7 - half);
            const opacity7 = parseFloat((1 - progress).toFixed(1));
            text7.style.opacity = opacity7;

            const scale7 = parseFloat((1 + progress * 3).toFixed(1));
            const rotate7 = parseFloat((0 + progress * 90).toFixed(1));
            text7.style.transform = `scale(${scale7}) rotate(${rotate7}deg)`;
        }


    }

    else {
        text7.style.opacity = 0;
        text7.style.transform = `scale(1)`
        text7.style.transform = `rotate(0)deg`
        document.getElementById("text7").style.setProperty("pointer-events", "none", "important");
        const notes = document.querySelectorAll('.notes');


        notes.forEach(note => {
            note.classList.remove('img-slide-up');
            note.classList.remove('float');
        });

    }





     // TEXT 8
     if (scrollTop >= scrollStart8 && scrollTop <= scrollEnd8) {
        const progress = (scrollTop - scrollStart8) / (scrollEnd8 - scrollStart8);
        const half = (scrollStart8 + scrollEnd8) / 2;
        const middleLonger = scrollTop > (half) - ((scrollStart8 - scrollEnd8) * -0.1) && scrollTop < (half) + ((scrollStart8 - scrollEnd8) * -0.1)
        const minFontSize = 16;
        const maxFontSize = 35;

        text8.style.pointerEvents = 'all'

      
        if (scrollTop < half) {
            const progress = (scrollTop - scrollStart8) / (half - scrollStart8);
            const opacity8 = parseFloat((progress).toFixed(1));
            text8.style.opacity = opacity8;

            text8.style.transform = `scale(1) rotate(0)`;
        }

    
        if(scrollTop > half) {
            const progress = (scrollTop - half) / (scrollEnd8 - half);
            const opacity8 = parseFloat((1 - progress).toFixed(1));
            text8.style.opacity = opacity8;
     
        }


    }

    else {
        text8.style.opacity = 0;
        document.getElementById("text8").style.setProperty("pointer-events", "none", "important");
    }



}

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            zoomInOut();
            ticking = false;
        });
        ticking = true;
    }
});

