// Story generation script - creating diverse genre-based stories
// This creates the foundation that will be imported into TrackerView

const genres = {
    'Comedy': 15,
    'Crime': 15,
    'Thriller': 15,
    'Romance': 15,
    'Classic': 15,
    'Adventure': 15,
    'Mystery': 15,
    'Fantasy': 15
};

// Helper to generate story ID
let storyId = 1;

// Sample story templates for each genre
const storyTemplates = {
    Comedy: [
        { title: "The Absent-Minded Professor", lesson: "Organization and focus prevent embarrassing mishaps." },
        { title: "The Talking Parrot", lesson: "Sometimes honesty isn't always the best policy in social situations." },
        { title: "The Wrong Bus", lesson: "Always double-check your directions before embarking on a journey." },
        // ... more templates
    ],
    Crime: [
        { title: "The Missing Diamond", lesson: "The simplest explanation is often the correct one." },
        { title: "The Perfect Alibi", lesson: "Truth always finds a way to surface." },
        { title: "The Silent Witness", lesson: "Observation is more powerful than assumption." },
        // ... more templates
    ],
    // ... more genres
};

console.log('Story library structure created');
console.log('Total planned stories:', Object.values(genres).reduce((a, b) => a + b, 0));
