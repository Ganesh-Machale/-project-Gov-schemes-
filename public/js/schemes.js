document.addEventListener('DOMContentLoaded', () => {
    const schemesList = document.getElementById('schemes-list');
    const searchBar = document.getElementById('search-bar');
    let allSchemes = [];

    // Fetch Schemes
    fetch(`${API_BASE_URL}/schemes`)
        .then(response => response.json())
        .then(data => {
            allSchemes = data;
            renderSchemes(allSchemes);

            // Handle URL Query Params for Category Filtering
            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('category');
            if (category) {
                searchBar.value = category;
                filterSchemes(category);
            }
        })
        .catch(err => {
            schemesList.innerHTML = `<p class="error">Error loading schemes: ${err.message}</p>`;
        });

    // Search Functionality
    searchBar.addEventListener('input', (e) => {
        filterSchemes(e.target.value);
    });

    function filterSchemes(query) {
        const lowerQuery = query.toLowerCase();
        const filtered = allSchemes.filter(scheme =>
            scheme.name.toLowerCase().includes(lowerQuery) ||
            scheme.category.toLowerCase().includes(lowerQuery)
        );
        renderSchemes(filtered);
    }

    function renderSchemes(schemes) {
        schemesList.innerHTML = '';
        if (schemes.length === 0) {
            schemesList.innerHTML = '<p>No schemes found matching your criteria.</p>';
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
            schemesList.appendChild(card);
        });
    }
});
