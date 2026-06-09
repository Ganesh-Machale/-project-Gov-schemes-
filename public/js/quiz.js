document.addEventListener('DOMContentLoaded', () => {
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    const quizBox = document.getElementById('quiz-box');
    const questionText = document.getElementById('question-text');
    const optionsDiv = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');
    const resultArea = document.getElementById('result-area');
    const questionArea = document.getElementById('question-area');
    const loadingDiv = document.getElementById('loading');

    fetch(`${API_BASE_URL}/quiz`)
        .then(res => res.json())
        .then(data => {
            questions = data;
            loadingDiv.style.display = 'none';
            if (questions.length > 0) {
                questionArea.style.display = 'block';
                loadQuestion();
            } else {
                quizBox.innerHTML = '<p>No questions available at the moment.</p>';
            }
        })
        .catch(err => {
            loadingDiv.innerText = 'Error loading quiz.';
        });

    function loadQuestion() {
        const q = questions[currentQuestionIndex];
        questionText.innerText = `${currentQuestionIndex + 1}. ${q.question_text}`;
        optionsDiv.innerHTML = '';
        nextBtn.style.display = 'none';

        const opts = [
            { key: 'A', text: q.option_a },
            { key: 'B', text: q.option_b },
            { key: 'C', text: q.option_c },
            { key: 'D', text: q.option_d }
        ];

        opts.forEach(opt => {
            const btn = document.createElement('div');
            btn.classList.add('option');
            btn.innerText = opt.text;
            btn.onclick = () => selectOption(btn, opt.key);
            optionsDiv.appendChild(btn);
        });
    }

    function selectOption(btn, key) {
        // Disable all options
        const allOpts = optionsDiv.querySelectorAll('.option');
        allOpts.forEach(o => o.style.pointerEvents = 'none');

        // Highlight selected
        btn.classList.add('selected');

        // Check Answer (For immediate feedback, we assume client doesn't know correct answer yet, 
        // but let's check with server or if we fetched it?)
        // In our API /quiz endpoint, we (intentionally or not) didn't return 'correct_option' to prevent cheating if inspecting network.
        // So we must validate with server OR we should have sent it if we want instant client-side check.
        // For simplicity in this demo, let's assume valid answer validation happens at the end OR we actually send a validate request.

        // Let's do a simple "Validate" call for this question
        fetch(`${API_BASE_URL}/quiz/validate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ questionId: questions[currentQuestionIndex].id, selectedOption: key })
        })
            .then(res => res.json())
            .then(data => {
                if (data.isCorrect) {
                    score++;
                    btn.style.backgroundColor = '#d4edda'; // green
                    btn.style.borderColor = '#c3e6cb';
                } else {
                    btn.style.backgroundColor = '#f8d7da'; // red
                    btn.style.borderColor = '#f5c6cb';

                    // Highlight correct one? Logic would require finding the text of correct option.
                }
                nextBtn.style.display = 'block';
            });
    }

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    });

    function showResult() {
        questionArea.style.display = 'none';
        resultArea.style.display = 'block';
        document.getElementById('score').innerText = score;
        document.getElementById('total').innerText = questions.length;

        const msg = document.getElementById('awareness-msg');
        const percentage = (score / questions.length) * 100;

        if (percentage >= 80) msg.innerText = "Excellent Awareness! You know your rights well.";
        else if (percentage >= 50) msg.innerText = "Good Awareness! Keep learning about new schemes.";
        else msg.innerText = "You should explore the schemes more to know your rights!";

        // Save result
        fetch(`${API_BASE_URL}/quiz/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ score, total: questions.length })
        });
    }
});
