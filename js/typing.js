document.querySelectorAll(".typing-text").forEach((element) => {
    const lines = JSON.parse(element.dataset.lines);

    let line = 0;
    let character = 0;
    let started = false;

    function type() {
        const current = lines[line];
        const text = current.text;

        character++;

        element.innerHTML =
            '<a href="' + current.url + '" target="_blank" rel="noopener noreferrer">' +
            text.slice(0, character) +
            '</a>';

        if (character < text.length) {
            // Typing speed
            setTimeout(type, 15);
        } else {
            // Keep completed quote visible for 5 seconds
            setTimeout(() => {
                element.innerHTML = "";
                character = 0;
                line = (line + 1) % lines.length;

                // Short pause before next quote
                setTimeout(type, 300);
            }, 5000);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !started) {
                started = true;

                // Wait 800ms after becoming visible
                setTimeout(() => {
                    type();
                }, 800);

                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.25
    });

    observer.observe(element);
});