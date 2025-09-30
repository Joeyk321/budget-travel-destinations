// Load and display destinations
async function loadDestinations() {
    try {
        const response = await fetch('/api/destinations');
        const destinations = await response.json();
        displayDestinations(destinations);
    } catch (error) {
        console.error('Error loading destinations:', error);
    }
}

function displayDestinations(destinations) {
    const grid = document.getElementById('destinations-grid');
    grid.className = 'destinations-grid';
    
    grid.innerHTML = destinations.map(destination => `
        <article class="destination-card" onclick="goToDestination('${destination.destination_id}')">
            <img src="${destination.image}" alt="${destination.name}" class="destination-image">
            <div class="destination-content">
                <div class="destination-header">
                    <div>
                        <h3 class="destination-title">${destination.name}</h3>
                        <p class="destination-location">${destination.location}</p>
                    </div>
                    <span class="destination-cost">${destination.estimated_cost}</span>
                </div>
                <p class="destination-description">${destination.description}</p>
                <div class="destination-details">
                    <span class="detail-badge">📅 ${destination.best_season}</span>
                    <span class="detail-badge difficulty-${destination.difficulty_level.toLowerCase()}">${destination.difficulty_level}</span>
                </div>
            </div>
        </article>
    `).join('');
}

function goToDestination(id) {
    window.location.href = `/destinations/${id}`;
}

// Load destinations when page loads
document.addEventListener('DOMContentLoaded', loadDestinations);