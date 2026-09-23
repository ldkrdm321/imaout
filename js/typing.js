document.querySelectorAll(".typing-text").forEach((element) => {
    const lines = JSON.parse(element.dataset.lines);

    let line = 0;
    let character = 0;
    let deleting = false;

    function type() {
        const text = lines[line];

        if (!deleting) {
            character++;
            element.textContent = text.slice(0, character);

            if (character === text.length) {
                deleting = true;
                setTimeout(type, 1800);
                return;
            }
        } else {
            character--;
            element.textContent = text.slice(0, character);

            if (character === 0) {
                deleting = false;
                line = (line + 1) % lines.length;
            }
        }

        setTimeout(type, deleting ? 30 : 60);
    }

    type();
});