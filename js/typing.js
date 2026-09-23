document.querySelectorAll(".typing-text").forEach((element) => {
    const lines = JSON.parse(element.dataset.lines);

    let line = 0;
    let character = 0;
    let started = false;

    function type() {
        const text = lines[line];

        character++;
        element.textContent = text.slice(0, character);

        if (character < text.length) {
            // Typing speed
            setTimeout(type, 12);
        } else {
            // Keep completed sentence visible for 5 seconds
            setTimeout(() => {
                element.textContent = "";
                character = 0;
                line = (line + 1) % lines.length;

                // Short pause before next sentence
                setTimeout(type, 300);
            }, 7500);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !started) {
                started = true;
                type();
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.25
    });

    observer.observe(element);
});