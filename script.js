document.addEventListener('DOMContentLoaded', function() {
  const questions = [
    "Tell me about yourself.",
    "What are your strengths and weaknesses?",
    "Why do you want to work for this company?",
    "Can you describe a difficult work situation and how you overcame it?",
    "Where do you see yourself in five years?",
    "Why should we hire you?",
    "What do you know about our company?",
    "Do you have any questions for us?",
    "Tell me about a time when you had to work with a difficult coworker or manager.",
    "What motivates you?",
    "How do you handle stress and pressure?",
    "Describe a time when you failed and how you handled it.",
    "What are your salary expectations?",
    "How do you stay organized and manage your time?",
    "What do you enjoy doing outside of work?",
    "Describe your ideal work environment."
  ];

  let usedQuestions = [];

  function displayRandomQuestion() {
    if (questions.length === 0) {
      alert("You've answered all the questions!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    document.getElementById('question').innerText = question;
    usedQuestions.push(question);
    questions.splice(randomIndex, 1);
  }

  document.getElementById('show-definition-button').addEventListener('click', displayRandomQuestion);

  displayRandomQuestion();
});
