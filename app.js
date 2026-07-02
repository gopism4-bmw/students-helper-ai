// Show selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}

// AI Chat (Demo)
function chatAI() {
    const input = document.getElementById("userInput").value.trim().toLowerCase();
    const output = document.getElementById("chatOutput");

    if (input === "") {
        output.innerHTML = "⚠️ Please enter a question.";
        return;
    }

    let response = "";

    if (input.includes("artificial intelligence") || input.includes("ai")) {
        response = "Artificial Intelligence (AI) enables computers to perform tasks that normally require human intelligence.";
    } else if (input.includes("machine learning")) {
        response = "Machine Learning is a branch of AI where computers learn from data without being explicitly programmed.";
    } else if (input.includes("python")) {
        response = "Python is one of the most popular programming languages for AI and Data Science.";
    } else if (input.includes("hello")) {
        response = "Hello! 👋 How can I help you today?";
    } else {
        response = "I'm a demo AI assistant. In the full version, I can answer many more questions using an AI API.";
    }

    output.innerHTML = `<strong>AI:</strong> ${response}`;
}

// Quiz Generator
function generateQuiz() {
    const topic = document.getElementById("quizTopic").value.trim();
    const output = document.getElementById("quizOutput");

    if (topic === "") {
        output.innerHTML = "⚠️ Please enter a topic.";
        return;
    }

    output.innerHTML = `
        <h3>${topic} Quiz</h3>
        <ol>
            <li>What is ${topic}?</li>
            <li>Why is ${topic} important?</li>
            <li>Give one real-life example of ${topic}.</li>
            <li>List two advantages of ${topic}.</li>
            <li>Write a short summary of ${topic}.</li>
        </ol>
    `;
}

// Notes Summarizer
function summarizeNotes() {
    const notes = document.getElementById("notesInput").value.trim();
    const output = document.getElementById("summaryOutput");

    if (notes === "") {
        output.innerHTML = "⚠️ Please paste some notes.";
        return;
    }

    const words = notes.split(" ").slice(0, 40).join(" ");

    output.innerHTML = `
        <strong>Summary:</strong><br><br>
        ${words}...
    `;
}

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️ Light Mode";
    } else {
        themeBtn.innerHTML = "🌙 Dark Mode";
    }
});
