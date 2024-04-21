const companies = [
    "Apple Inc. (AAPL)",
    "Amazon.com Inc. (AMZN)",
    "Alphabet Inc. (GOOGL)",
    "Microsoft Corporation (MSFT)",
    "Tesla, Inc. (TSLA)",
    "Facebook, Inc. (FB)",
    "Netflix, Inc. (NFLX)",
    "NVIDIA Corporation (NVDA)",
    "Johnson & Johnson (JNJ)",
    "Procter & Gamble Company (PG)",
    // Add more companies here...
];

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResult = document.getElementById('searchResult');
const suggestionsContainer = document.getElementById('suggestions');
const buyOption = document.getElementById('buyOption');

function displaySuggestions() {
    const searchText = searchInput.value.toLowerCase();
    const filteredCompanies = companies.filter(company => company.toLowerCase().includes(searchText));

    suggestionsContainer.innerHTML = '';

    filteredCompanies.forEach(company => {
        const suggestion = document.createElement('div');
        suggestion.classList.add('suggestion');
        suggestion.textContent = company;
        suggestion.addEventListener('click', () => {
            searchInput.value = company;
            suggestionsContainer.innerHTML = '';
        });
        suggestionsContainer.appendChild(suggestion);
    });
}

function handleSearch() {
    const searchText = searchInput.value;
    searchResult.textContent = `You searched for: ${searchText}`;

    // Simulate current price and growth percentage
    const currentPrice = (Math.random() * 1000).toFixed(2);
    const growthPercentage = ((Math.random() * 20) - 10).toFixed(2);

    buyOption.innerHTML = `
        <p>Current Price: $${currentPrice}</p>
        <p>Today's Growth: ${growthPercentage}%</p>
        <button onclick="buyStock()">Buy</button>
    `;
    buyOption.style.display = 'block';
}

function buyStock() {
    // Placeholder function for buying the stock
    alert('Stock bought successfully!');
}

searchInput.addEventListener('input', displaySuggestions);
searchButton.addEventListener('click', handleSearch);
