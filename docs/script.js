// ASCII Art text (simple version)
const asciiArt = `
X O P S   R O C K S !
`;

document.getElementById('ascii-art').textContent = asciiArt;

// Function to fetch a random joke
async function fetchJoke() {
  const jokeElement = document.getElementById('joke-container'); // match HTML
  jokeElement.textContent = "Loading a random joke...";
  
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    jokeElement.textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    jokeElement.textContent = "Oops! Could not fetch a joke.";
    console.error(error);
  }
}

// Fetch a joke on page load
fetchJoke();

// Fetch a new joke when button is clicked
document.getElementById('joke-button').addEventListener('click', fetchJoke); // match HTML