document.onreadystatechange = updateClock()

function updateClock() {
    const date = new Date()
    document.getElementById("current-time-text").innerText = date.toLocaleTimeString([], { hour12: true })
    const hour = date.getHours()
    if (hour < 5 || hour >= 18) {
        document.getElementById("time-greeting").innerText = "Good evening."
    }
    else if (hour < 12) {
        document.getElementById("time-greeting").innerText = "Good morning."
    }
    else {
        document.getElementById("time-greeting").innerText = "Good afternoon."
    }
}

setInterval(updateClock, 1000)

function doSearch() {
    const query = document.getElementById('search-input').value
    switch (document.getElementById("search-engine-select").value) {
        case 'google':
            window.location.href = `https://www.google.com/search?q=${query}`
            break;
        case 'brave':
            window.location.href = `https://search.brave.com/search?q=${query}`
    }
}

const searchInput = document.getElementById("search-input")
searchInput.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("search-button").click();
    }
});
