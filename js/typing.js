document.querySelectorAll(".typing-text").forEach((element) => {
    const lines = JSON.parse(element.dataset.lines);

    let line = 0;
    let character = 0;

    function type() {
        const text = lines[line];

        character++;
        element.textContent = text.slice(0, character);

        if (character < text.length) {
            setTimeout(type, 12);
        } else {
            // Keep the completed sentence visible for 2 seconds
            setTimeout(() => {
                // Clear it instantly and start the next sentence
                element.textContent = "";
                character = 0;
                line = (line + 1) % lines.length;

                // Short pause before typing the next sentence
                setTimeout(type, 300);
            }, 5000);
        }
    }

    type();
});