document.getElementById('eligibility-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const income = document.getElementById('income').value;
    const occupation = document.getElementById('occupation').value;

    const submitBtn = e.target.querySelector('button');
    submitBtn.innerText = 'Checking...';
    submitBtn.disabled = true;

    fetch(`${API_BASE_URL}/schemes/check-eligibility`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ age, gender, income, occupation })
    })
        .then(response => response.json())
        .then(schemes => {
            submitBtn.innerText = 'Check Eligibility';
            submitBtn.disabled = false;

            displayResults(schemes);
        })
        .catch(err => {
            console.error(err);
            submitBtn.innerText = 'Check Eligibility';
            submitBtn.disabled = false;
            alert('Something went wrong. Please try again.');
        });
});

function displayResults(schemes) {
    const resultsDiv = document.getElementById('results');
    const listDiv = document.getElementById('results-list');

    resultsDiv.style.display = 'block';
    listDiv.innerHTML = '';

    if (schemes.length === 0) {
        listDiv.innerHTML = '<p style="text-align: center; width: 100%;">No specific schemes matched your exact criteria, but you may browse all schemes.</p>';
        return;
    }

    schemes.forEach(scheme => {
        const card = document.createElement('div');
        card.classList.add('scheme-card');
        card.innerHTML = `
            <span class="category">${scheme.category}</span>
            <h3>${scheme.name}</h3>
            <p>${scheme.description.substring(0, 100)}...</p>
            <a href="scheme-details.html?id=${scheme.id}" class="btn" style="margin-top: 10px; font-size: 0.9rem;">View Details</a>
        `;
        listDiv.appendChild(card);
    });
}
