async function makeRequest (url) {
    const response = await fetch(url);
    return response.json();
} 

module.exports = {
    makeRequest
}
