// document.addEventListener("DOMContentLoaded", function() {
//     // Simulate updating Nifty and Sensex values
//     setInterval(updateValues, 3000);
//     updateValues(); // Update values immediately on page load
// });

// function updateValues() {
//     // Simulate random Nifty and Sensex values for demonstration
//     let niftyValue = Math.random() * 10000; // Example random value for Nifty
//     let sensexValue = Math.random() * 50000; // Example random value for Sensex

//     // Update Nifty value display
//     let niftyDisplay = document.getElementById("nifty-value");
//     niftyDisplay.textContent = niftyValue.toFixed(2);

//     // Update Sensex value display
//     let sensexDisplay = document.getElementById("sensex-value");
//     sensexDisplay.textContent = sensexValue.toFixed(2);

//     // Check if values go up or down and update text color accordingly
//     updateTextColor(niftyDisplay, parseFloat(niftyDisplay.dataset.previousValue), niftyValue);
//     updateTextColor(sensexDisplay, parseFloat(sensexDisplay.dataset.previousValue), sensexValue);
// }

// function updateTextColor(element, previousValue, currentValue) {
//     if (currentValue > previousValue) {
//         element.classList.remove("red");
//         element.classList.add("green");
//     } else if (currentValue < previousValue) {
//         element.classList.remove("green");
//         element.classList.add("red");
//     }
//     // Store current value for comparison in the next iteration
//     element.dataset.previousValue = currentValue;
// }
document.addEventListener("DOMContentLoaded", function() {
    // Simulate updating Nifty and Sensex values
    setInterval(updateValues, 851);
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
/*footer*/
document.addEventListener("DOMContentLoaded", function() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const subscribeForm = document.getElementById('subscribeForm');
    
    subscribeBtn.addEventListener('click', function() {
        subscribeForm.style.display = 'flex';
        subscribeForm.scrollIntoView({ behavior: 'smooth' });
    });
});
/*top 10 header*/
document.addEventListener("DOMContentLoaded", function() {
    const companies = [
        { rank: 1, name: "Apple Inc.", owner: "Tim Cook", marketCap: "$2.47T", currentPrice: "$171.14" },
        { rank: 2, name: "Microsoft Corporation", owner: "Satya Nadella", marketCap: "$2.43T", currentPrice: "$319.86" },
        { rank: 3, name: "Amazon.com Inc.", owner: "Andy Jassy", marketCap: "$1.61T", currentPrice: "$3,296.40" },
        { rank: 4, name: "Alphabet Inc.", owner: "Sundar Pichai", marketCap: "$1.53T", currentPrice: "$2,267.79" },
        { rank: 5, name: "Meta Platforms Inc.", owner: "Mark Zuckerberg", marketCap: "$1.09T", currentPrice: "$347.79" },
        // Add more companies as needed
    ];

    const tableBody = document.getElementById("companyTableBody");

    companies.forEach(company => {
        const row = document.createElement("tr");
        row.classList.add("company-row");
        row.innerHTML = `
            <td class="company-cell">${company.rank}</td>
            <td class="company-cell">${company.name}</td>
            <td class="company-cell">${company.owner}</td>
            <td class="company-cell">${company.marketCap}</td>
            <td class="company-cell">${company.currentPrice}</td>
            <td class="company-cell"><button class="buy-button" data-name="${company.name}">Buy</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Buy button functionality
    document.querySelectorAll(".buy-button").forEach(button => {
        button.addEventListener("click", function() {
            const companyName = this.dataset.name;
            alert(`You have chosen to buy shares of ${companyName}`);
        });
    });
});

