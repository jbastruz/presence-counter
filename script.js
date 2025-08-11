class PresenceCounter {
    constructor() {
        this.counter = 0;
        this.counterElement = document.getElementById('counter');
        this.incrementBtn = document.getElementById('increment');
        this.decrementBtn = document.getElementById('decrement');

        this.init();
    }

    init() {
        this.loadCounter();
        this.updateDisplay();
        this.bindEvents();
    }

    loadCounter() {
        const saved = localStorage.getItem('presenceCounter');
        if (saved !== null) {
            this.counter = parseInt(saved, 10);
        }
    }

    saveCounter() {
        localStorage.setItem('presenceCounter', this.counter.toString());
    }

    updateDisplay() {
        this.counterElement.textContent = this.counter;
        this.decrementBtn.disabled = this.counter === 0;
    }

    increment() {
        this.counter++;
        this.saveCounter();
        this.updateDisplay();
    }

    decrement() {
        if (this.counter > 0) {
            this.counter--;
            this.saveCounter();
            this.updateDisplay();
        }
    }

    bindEvents() {
        this.incrementBtn.addEventListener('click', () => this.increment());
        this.decrementBtn.addEventListener('click', () => this.decrement());

        document.addEventListener('keydown', (e) => {
            if (e.key === '+' || e.key === '=') {
                this.increment();
            } else if (e.key === '-') {
                this.decrement();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PresenceCounter();
});
