
// Sample function to fetch airports data
function fetchAirports() {
    // Assuming this function returns a Promise that resolves with airport data
    return new Promise((resolve, reject) => {
        // Mock data for demonstration
        const airports = [
            { code: "JFK", name: "John F. Kennedy International Airport" },
            { code: "LAX", name: "Los Angeles International Airport" },
            { code: "ORD", name: "O'Hare International Airport" },
            // Add more airports as needed
        ];
        resolve(airports);
    });
}

// Populate select options with airports data
function populateAirportsSelect(airports, selectElement) {
    airports.forEach(airport => {
        const option = document.createElement("option");
        option.value = airport.code;
        option.textContent = `${airport.name} (${airport.code})`;
        selectElement.appendChild(option);
    });
}

// Populate source and destination select elements
async function populateSelectOptions() {
    try {
        const airports = await fetchAirports();
        const sourceSelect = document.getElementById("source");
        const destinationSelect = document.getElementById("destination");
        populateAirportsSelect(airports, sourceSelect);
        populateAirportsSelect(airports, destinationSelect);
    } catch (error) {
        console.error("Error fetching airports data:", error);
    }
}

// Event listener for form submission
document.getElementById("flight-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Here, you would implement logic to handle form submission
    // For this example, let's assume we just log the selected source and destination
    const sourceAirport = document.getElementById("source").value;
    const destinationAirport = document.getElementById("destination").value;
    console.log("Source Airport:", sourceAirport);
    console.log("Destination Airport:", destinationAirport);
});

// Call the function to populate select options when the page loads
populateSelectOptions();
