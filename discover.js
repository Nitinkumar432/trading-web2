document.addEventListener("DOMContentLoaded", function() {
    // Simulate updating Nifty and Sensex values
    setInterval(updateValues, 3000);
    updateValues(); // Update values immediately on page load
});

function updateValues() {
    // Simulate random Nifty and Sensex values for demonstration
    let previousNiftyValue = parseFloat(document.getElementById("nifty-value").dataset.previousValue) || 0;
    let niftyValue = Math.random() * 10000; // Example random value for Nifty
    let niftyChangePercentage = calculatePercentageChange(previousNiftyValue, niftyValue);
    let niftyDisplay = document.getElementById("nifty-value");
    niftyDisplay.textContent = niftyValue.toFixed(2);
    niftyDisplay.dataset.previousValue = niftyValue;

    let previousSensexValue = parseFloat(document.getElementById("sensex-value").dataset.previousValue) || 0;
    let sensexValue = Math.random() * 50000; // Example random value for Sensex
    let sensexChangePercentage = calculatePercentageChange(previousSensexValue, sensexValue);
    let sensexDisplay = document.getElementById("sensex-value");
    sensexDisplay.textContent = sensexValue.toFixed(2);
    sensexDisplay.dataset.previousValue = sensexValue;

    // Update text color based on percentage change
    updateTextColor(niftyDisplay, niftyChangePercentage);
    updateTextColor(sensexDisplay, sensexChangePercentage);

    // Update percentage change display
    document.getElementById("nifty-percentage").textContent = `${niftyChangePercentage.toFixed(2)}%`;
    document.getElementById("sensex-percentage").textContent = `${sensexChangePercentage.toFixed(2)}%`;
}

function calculatePercentageChange(previousValue, currentValue) {
    return ((currentValue - previousValue) / previousValue) * 100;
}

function updateTextColor(element, percentageChange) {
    element.classList.remove("red", "green");
    if (percentageChange > 1) {
        element.classList.add("green");
    } else if (percentageChange < -1) {
        element.classList.add("red");
    }
}
/* for comany buy*/
const companyNames = document.querySelectorAll('.company-name');

// Add event listener to each company name cell for hover effect and show buttons
companyNames.forEach(companyName => {
    companyName.addEventListener('mouseenter', showButtons);
    companyName.addEventListener('mouseleave', hideButtons);
});

// Get buy and sell buttons
const buyButton = document.querySelector('.buy-button');
const sellButton = document.querySelector('.sell-button');

// Function to show buy and sell buttons
function showButtons(event) {
    const buttonContainer = document.querySelector('.button-container');
    const rect = event.target.getBoundingClientRect();
    buttonContainer.style.top = `${rect.top}px`;
    buttonContainer.style.left = `${rect.right}px`;
    buttonContainer.classList.add('show');
}

// Function to hide buy and sell buttons
function hideButtons() {
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.classList.remove('show');
}

// Placeholder functions for buy and sell
function buy() {
    console.log('Buy button clicked');
}

function sell() {
    console.log('Sell button clicked');
}
const top20Companies = [
    { name: "Apple Inc. (AAPL)", currentPrice: 179.99, prevYearGrowth: 15.5, todayGrowth: 1.2, expectedGrowth: 10 },
    { name: "Amazon.com Inc. (AMZN)", currentPrice: 3123.15, prevYearGrowth: 20.2, todayGrowth: -0.5, expectedGrowth: 15 },
    { name: "Alphabet Inc. (GOOGL)", currentPrice: 2567.75, prevYearGrowth: 18.9, todayGrowth: 2.8, expectedGrowth: 12 },
    { name: "Apple Inc. (AAPL)", currentPrice: 179.99, prevYearGrowth: 15.5, todayGrowth: 1.2, expectedGrowth: 10 },
    { name: "Amazon.com Inc. (AMZN)", currentPrice: 3123.15, prevYearGrowth: 20.2, todayGrowth: -0.5, expectedGrowth: 15 },
    { name: "Alphabet Inc. (GOOGL)", currentPrice: 2567.75, prevYearGrowth: 18.9, todayGrowth: 2.8, expectedGrowth: 12 },
    { name: "Apple Inc. (AAPL)", currentPrice: 179.99, prevYearGrowth: 15.5, todayGrowth: 1.2, expectedGrowth: 10 },
    { name: "Amazon.com Inc. (AMZN)", currentPrice: 3123.15, prevYearGrowth: 20.2, todayGrowth: -0.5, expectedGrowth: 15 },
    { name: "Alphabet Inc. (GOOGL)", currentPrice: 2567.75, prevYearGrowth: 18.9, todayGrowth: 2.8, expectedGrowth: 12 },
    { name: "Apple Inc. (AAPL)", currentPrice: 179.99, prevYearGrowth: 15.5, todayGrowth: 1.2, expectedGrowth: 10 },
    { name: "Amazon.com Inc. (AMZN)", currentPrice: 3123.15, prevYearGrowth: 20.2, todayGrowth: -0.5, expectedGrowth: 15 },
    { name: "Alphabet Inc. (GOOGL)", currentPrice: 2567.75, prevYearGrowth: 18.9, todayGrowth: 2.8, expectedGrowth: 12 },
    { name: "Apple Inc. (AAPL)", currentPrice: 179.99, prevYearGrowth: 15.5, todayGrowth: 1.2, expectedGrowth: 10 },
    { name: "Amazon.com Inc. (AMZN)", currentPrice: 3123.15, prevYearGrowth: 20.2, todayGrowth: -0.5, expectedGrowth: 15 },
    { name: "Alphabet Inc. (GOOGL)", currentPrice: 2567.75, prevYearGrowth: 18.9, todayGrowth: 2.8, expectedGrowth: 12 },
    { name: "Apple Inc. (AAPL)", currentPrice: 179.99, prevYearGrowth: 15.5, todayGrowth: 1.2, expectedGrowth: 10 },
    { name: "Amazon.com Inc. (AMZN)", currentPrice: 3123.15, prevYearGrowth: 20.2, todayGrowth: -0.5, expectedGrowth: 15 },
    { name: "Alphabet Inc. (GOOGL)", currentPrice: 2567.75, prevYearGrowth: 18.9, todayGrowth: 2.8, expectedGrowth: 12 },
    { name: "Apple Inc. (AAPL)", currentPrice: 179.99, prevYearGrowth: 15.5, todayGrowth: 1.2, expectedGrowth: 10 },
    { name: "Amazon.com Inc. (AMZN)", currentPrice: 3123.15, prevYearGrowth: 20.2, todayGrowth: -0.5, expectedGrowth: 15 },
    { name: "Alphabet Inc. (GOOGL)", currentPrice: 2567.75, prevYearGrowth: 18.9, todayGrowth: 2.8, expectedGrowth: 12 },
    { name: "Apple Inc. (AAPL)", currentPrice: 179.99, prevYearGrowth: 15.5, todayGrowth: 1.2, expectedGrowth: 10 },
    { name: "Amazon.com Inc. (AMZN)", currentPrice: 3123.15, prevYearGrowth: 20.2, todayGrowth: -0.5, expectedGrowth: 15 },
    { name: "Alphabet Inc. (GOOGL)", currentPrice: 2567.75, prevYearGrowth: 18.9, todayGrowth: 2.8, expectedGrowth: 12 },
    // Add more companies here...
];

const companiesContainer = document.getElementById('companiesContainer');
const toggleViewButton = document.getElementById('toggleViewButton');

function generateCompanyRow(company) {
    const companyElement = document.createElement('div');
    companyElement.classList.add('company');

    let growthIconClass = '';
    if (company.todayGrowth >= 0) {
        growthIconClass = 'positive-icon';
    } else {
        growthIconClass = 'negative-icon';
    }

    companyElement.innerHTML = `
        <div class="company-name">${company.name}</div>
        <div class="company-details">
            <div class="company-price">Price: <span>$${company.currentPrice.toFixed(2)}</span></div>
            <div class="company-growth">Growth (Prev Year): <span>${company.prevYearGrowth.toFixed(2)}%</span> | Today: <span class="${growthIconClass}">${company.todayGrowth.toFixed(2)}%</span></div>
            <div class="company-expected-growth">Expected Growth: <span>${company.expectedGrowth.toFixed(2)}%</span></div>
            <div class="company-buy"><button onclick="buyStock()">Buy</button></div>
        </div>
    `;

    return companyElement;
}

function displayTop20Companies() {
    top20Companies.forEach(company => {
        companiesContainer.appendChild(generateCompanyRow(company));
    });
}

function toggleView() {
    companiesContainer.classList.toggle('condensed-view');
}

toggleViewButton.addEventListener('click', toggleView);

displayTop20Companies();

function buyStock() {
    // Placeholder function for buying the stock
    alert('Stock bought successfully!');
}
