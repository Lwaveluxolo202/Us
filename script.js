// Quiz calculation
function calculateQuizScore() {
    const answers = document.querySelectorAll('#quiz-form input[type="radio"]:checked');
    let score = 0;
    answers.forEach(answer => {
        if (answer.value === 'correct') score++;
    });

    let resultMessage;
    if (score < 8) {
        resultMessage = "No ways you actually hate me 😂";
    } else {
        resultMessage = `Your love score is: ${score} out of ${answers.length}`;
    }

    document.getElementById('quiz-result').textContent = resultMessage;
}

// Random Love Letters
const loveLetters = [
    "I love you not only for what you are but for what I am when I am with you. — Elizabeth Barrett Browning",
    "You are my sun, my moon, and all my stars. — E.E. Cummings",
    "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love. — Gabriela Mistral",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine. — Maya Angelou",
    "I loved you yesterday, I love you still, I always have, I always will. — Anonymous",
    "You make me want to be a better man. — Melvin Udall, As Good As It Gets",
    "I fell in love with you because of the million things you never knew you were doing.",
    "You are the best thing that’s ever been mine. — Taylor Swift",
    "Love is composed of a single soul inhabiting two bodies. — Aristotle",
    "Ngiyakuthanda Mzilikazii ka Mashobane.",  // Added missing comma
    "To love and be loved is to feel the sun from both sides. — David Viscott",
    "I look at you and see the rest of my life in front of my eyes.",
    "If I know what love is, it is because of you. — Hermann Hesse",
    "I wish I could turn back the clock. I’d find you sooner and love you longer.",
    "Every love story is beautiful, but ours is my favorite.",
    "You are my today and all of my tomorrows.",
    "I may not be your first love, but I want to be your last.",
    "My love for you is a journey; starting at forever, and ending at never. — Anonymous",
    "You are the piece of me I didn’t know was missing.",
    "I knew I loved you before I met you. — Savage Garden",
    "You are my heart, my life, my one and only thought. — Arthur Rimbaud"
];

function generateLoveLetter() {  // Removed the semicolon
    const randomLetter = loveLetters[Math.floor(Math.random() * loveLetters.length)];
    document.getElementById('love-letter').textContent = randomLetter;
}


let slideIndex = 0; // Start from the first slide
showSlides(); // Call function to display slides

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    // Hide all slides by default
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');  // Remove active class
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    // Show the current slide
    slides[slideIndex - 1].classList.add('active');  // Add active class to current slide
    
    // Change slide every 7 seconds
    setTimeout(showSlides, 7000);
}

// Optional: Function to manually change slide (if you want next/prev buttons)
function changeSlide(n) {
    const slides = document.getElementsByClassName("slide");

    slideIndex += n;

    // Wrap around if index goes out of bounds
    if (slideIndex < 1) {
        slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Hide all slides and show the selected slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active'); // Remove active class
    }
    slides[slideIndex - 1].classList.add('active'); // Add active class to selected slide
}

