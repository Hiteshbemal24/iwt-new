const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {   question: "Who is the founder of Microsoft?",
        options: ["Bill Gates", "Steve Jobs", "Steve Wozniak", "Mark Zuckerberg"],
        answer: "Bill Gates"
    },
    {   question: "What is the largest country in the world?",
        options: ["Russia", "Canada", "China", "United States"],
        answer: "Russia"
    },
    {   question: "What is the largest animal in the world?",
        options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {   question: "What is the capital of India?",
        options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "New Delhi"
    },
    {   question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
    },
    {   question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Brasilia", "Sao Paulo", "Salvador"],
        answer: "Brasilia"
    },
    {   question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {   question: "What is the capital of China?",
        options: ["Shanghai", "Beijing", "Hong Kong", "Shenzhen"],
        answer: "Beijing"
    },
    {   question: "What is the capital of Egypt?",
        options: ["Alexandria", "Cairo", "Giza", "Luxor"],
        answer: "Cairo"
    },
    {   question: "What is the capital of Germany?",
        options: ["Munich", "Berlin", "Hamburg", "Frankfurt"],
        answer: "Berlin"
    },
    {   question: "What is the capital of Greece?",
        options: ["Athens", "Thessaloniki", "Patras", "Heraklion"],
        answer: "Athens"
    },
    {   question: "What is the capital of Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        answer: "Jakarta"
    },
    {   question: "What is the capital of Italy?",
        options: ["Milan", "Rome", "Naples", "Turin"],
        answer: "Rome"
    },
    {   question: "What is the capital of Japan?",
        options: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
        answer: "Tokyo"
    },
    {   question: "What is the capital of Mexico?",
        options: ["Guadalajara", "Monterrey", "Puebla", "Mexico City"],
        answer: "Mexico City"
    },
    {   question: "What is the capital of Norway?",
        options: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
        answer: "Oslo"
    },
    {   question: "What is the capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Faisalabad"],
        answer: "Islamabad"
    },
    {   question: "What is the capital of Russia?",
        options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
        answer: "Moscow"
    },
    {   question: "What is the capital of South Africa?",
        options: ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
        answer: "Pretoria"
    },
    {   question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Valencia", "Seville"],
        answer: "Madrid"
    },
    {   question: "What is the capital of Thailand?",
        options: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
        answer: "Bangkok"
    },
    {   question: "What is the capital of United Kingdom?",
        options: ["London", "Manchester", "Birmingham", "Liverpool"],
        answer: "London"
    },
    {   question: "What is the capital of United States?",
        options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
        answer: "Washington D.C."
    },
    {   question: "What is the capital of Vietnam?",
        options: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Can Tho"],
        answer: "Hanoi"
    },
    {   question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
        answer: "Buenos Aires"
    },
    {   question: "What is the capital of Bangladesh?",
        options: ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
        answer: "Dhaka"
    },
    {   question: "What is the capital of Belgium?",
        options: ["Brussels", "Antwerp", "Ghent", "Charleroi"],
        answer: "Brussels"
    },
    {   question: "What is the capital of Chile?",
        options: ["Santiago", "Valparaiso", "Concepcion", "Antofagasta"],
        answer: "Santiago"
    },
    {   question: "What is the capital of Colombia?",
        options: ["Bogota", "Medellin", "Cali", "Barranquilla"],
        answer: "Bogota"
    },
];

const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-button');
const scoreDisplay = document.getElementById('score');

let score = 0;

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');

        question.options.forEach((option, optionIndex) => {
            const optionItem = document.createElement('li');
            const optionInput = document.createElement('input');
            optionInput.setAttribute('type', 'radio');
            optionInput.setAttribute('name', `q${index}`);
            optionInput.setAttribute('value', option);
            optionInput.addEventListener('change', () => {
                if (option === question.answer) {
                    score++;
                }
            });

            optionItem.appendChild(optionInput);
            optionItem.appendChild(document.createTextNode(option));
            optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsList);
        quizForm.appendChild(questionDiv);
    });
}

function calculateScore() {
    scoreDisplay.textContent = `Your score: ${score}/${questions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', () => {
    calculateScore();
    submitButton.disabled = true;
});