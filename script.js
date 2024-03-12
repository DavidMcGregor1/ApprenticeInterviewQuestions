  let questions = [];
  let usedQuestions = [];

  const portfolioQuestions = [
    "Talk to me about your company's approach to version / source control",
    "What are some of the roles and responsibilities within the SDLC",
    "You've mentioned you used a relational database. Can you talk to me about a non-relational database?",
    "How have you linked code to data sets?",
    "What are some of the organisational poliwcies to do with sensitive data?",
    "Can you give an example of how you have been committed to personal development?",
    "How does testing usually happen within your company?",
    "What is your company's apporach to deployment?",
    "What is your company's view / position on cloud services?",
    "What are some security policies in place in your company?",
    "You've mentioned CI/CD, can you give some advantages of using this?",
    "What are some of the responsibilities within your squad?",
    "What development methodology is used in your company, how does it differ from another methodology?",
    "Can you explain where you would use a non-relational database over a relational datebase?",
    "What are some skills you've learnt during your apprenticeship?",
    "Can you give an example of a time you created an analysis artefact?",
    "Can you give an example of a time you developed an effective user interface?",
    "Can you give an example of a time you implemented a design while remaining compliant with security requirements?",
    "What are your experiences with working independently vs collaboratively?",
    "Can you give some examples of when you have communicated effectively?",
  ];

  const projectQuestions = [
    "Can you describe some of the roles and resposibilities in the software development lifecycle and how they contribute to a project?",
    "Can you explain some ways that a development team could work effectively together?",
    "Can you provide an example of where you applied algorithms, logic and datastructures to solve a problem?",
    "How did you ensure the software development apporach you adopted was justified based on the functional specifications you provided?",
    "Can you provide an example of a situation where you had to make a decision regarding software design and development approach? How did you justify your choice based on the specifications?",
    "Can you explain the approach you took to create logical and maintainable code for this project?",
    "How did you ensure that your code was easy to understand and maintain by other developers?",
    "What considerations did you take into account when making decisions about the tools, frameworks, or design patterns to use in your code?",
    "Can you describe a situation where you analyzed unit testing results, found errors, and then corrected them? What was your process?",
    "Can you explain to me how you approach reviewing unit testing results to identify issues? How would you ensure those corrections are successfully implemented?",
    "How did you go about identifying the test scenarios for this project?",
    "Can you provide an example of a test scenario you created and explain how it satisfied the project specification?",
    "Can you describe a situation in which you encountered a problem or flaw in a code during a work-based project? How did you approach the issue and what structured techniques did you apply to identify and resolve the problem?",
    "Sometimes, coding errors can be difficult to detect and resolve. Can you share an experience in which you faced a particularly challenging coding issue? How did you apply structured problem-solving techniques to identify the root cause and successfully debug the flaw in the code?",
    "In your experience, what are the key considerations when reviewing your own contribution to code building, managing and deploying? How do you ensure these considerations align with the project specification?",
    "Can you walk me through the logical thinking process you followed while designing and implementing this software feature? How did you ensure that your decisions and reasoning were valid? How did you approach debugging and troubleshooting issues in the codebase?",
    "Can you provide an example where you used valid reasoning to identify and fix a bug? ",
    "Tell me about a time when you had to make a justified decision about the choice of technology, framework, or architecture while working on a project",
    "How did you prioritize maintaining a productive working environment throughout the project? Can you provide examples of specific actions you took to encourage productivity and ensure a positive team dynamic?",
    "In terms of maintaining a secure working environment, can you discuss any steps you took to protect sensitive information or ensure data privacy during the project? How did you manage potential security risks or vulnerabilities within the software or infrastructure?",
  ];

  function toggleToPortfolioQuestions() {
    questions = portfolioQuestions.slice();
    usedQuestions = [];
    displayRandomQuestion();
    document.getElementById('portfolio-button').classList.add('selected');
    document.getElementById('project-button').classList.remove('selected');
  }

  function toggleToProjectQuestions() {
    questions = projectQuestions.slice();
    usedQuestions = [];
    displayRandomQuestion();
    document.getElementById('project-button').classList.add('selected');
    document.getElementById('portfolio-button').classList.remove('selected');
  }

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

  const nextButton = document.getElementById('next-question-button')
  nextButton.addEventListener('click', () => {
    displayRandomQuestion();
  });
  const portfolioButton = document.getElementById('portfolio-button')
  portfolioButton.addEventListener('click', () => {
    portfolioButton.classList.add("clicked")
    projectButton.classList.remove("clicked")
    toggleToPortfolioQuestions();
  })
  
  const projectButton = document.getElementById('project-button')
  projectButton.addEventListener('click', () => {
    projectButton.classList.add("clicked")
    portfolioButton.classList.remove("clicked")
    toggleToProjectQuestions();
  });

  portfolioButton.click();
