// questions.js


let question1 = {
  question_text: "What is the cat in Scratch?",
  question_type: "multiple_choice",
  options: ["Sprite", "Block", "Variable", "Avatar",],
  correct_option: 0,
  correct_explanation: "The cat in Scratch is a sprite.",
  
}

let question2 = {
  question_text: "What does git checkout do?",
  question_type: "multiple_choice",
  options: ["Navigate to a different branch", "Creates a branch", "Deletes a branch", "Merges branches",],
  correct_option: 0,
  correct_explanation: "Git checkout navigates to a different branch.",
  
}

let question3 = {
  question_text: "Which one is these isn't in the Chris learning retrieval?",
  question_type: "multiple_choice",
  options: ["Instinct", "Challenge", "Hunger", "Retrieval",],
  correct_option: 0,
  correct_explanation: "Instinct is not in the Chris learning retrieval. The I in Chris was interleaved practice",

}

let question4 = {
  question_text: "Which of these isn't a Disney Ideation room?",
  question_type: "multiple_choice",
  options: ["Dream", "Realist", "Critic", "Creative",],
  correct_option: 3,
  correct_explanation: "Creative is not a Disney Ideation room.",

}

let question5 = {
  question_text: "Neurons that _____ together _____ together?",
  question_type: "multiple_choice",
  options: ["Fire + wire", "Play + Stay", "Fuse + Use", "Go + Flow ",],
  correct_option: 0,
  correct_explanation: "Neurons that fire together wire together!",
  
}

let question6 = {
  question_text: "Which of these is not part of a high performance routine?",
  question_type: "multiple_choice",
  options: ["Preparation", "Focus", "Recovery", "Hunger"],
  correct_option: 3,
  correct_explanation: "Hunger is not part of a high performance routine!",
  
}

let question7 = {
  question_text: "Complete the phrase, Memory...?",
  question_type: "multiple_choice",
  options: ["Palace", "Castle", "Hotel", "Mansion",],
  correct_option: 0,
  correct_explanation: "It's called Memory Palace!",
  
}

let question8 = {
  question_text: "Which isn't part of Computational Thinking?",
  question_type: "multiple_choice",
  options: ["Add complexity", "Understand the Problem", "Look for Patterns", "Abstract Away"],
  correct_option: 0,
  correct_explanation: "Adding complexity would make the problem worse!",
  
}

let question9 = {
  question_text: "What is the first of the 12 principles of the Agile Manifesto ? ",
  question_type: "multiple_choice",
  options: [  "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software",
  "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.",
  "Deliver working software frequently, from a couple of weeks to a couple of months, with preference to the shorter timescale.",
  "Business people and developers must work together daily throughout the project."],
  correct_option: 0,
  correct_explanation: "It was the first one!",
  
}

let question10 = {
  question_text: "Which character did we try to get the secret password from in that game we played to learn AI prompt hacking/engineering? ",
  question_type: "multiple_choice",
  options: ["Thor", "Darth Vader", "Winnie the Pooh", "Gandalf",],
  correct_option: 3,
  correct_explanation: "Gandalf was the wizard in the game",
  
}
const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

module.exports = questions;

//question_text: This is a string that contains the text of the question you want to ask.
//question_type: This should always be the string "multiple_choice" for this task.
//options: This is an array of strings, where each string is a possible answer to the question. You should provide four options.
//correct_option: This is a number that represents the index of the correct answer in the options array. The index is 0-based, meaning the first option is 0, the second is 1, and so on.
//correct_explanation: This is a string that explains why the correct answer is correct. This helps learners understand the reasoning behind the answer.

// Don't worry about this, we're just exporting the questions

 // Add your questions here
  // 1. What is the cat in Scratch? Sprite, Block, Variable, Avatar
  // 2. What does git checkout do? Navigate to a different branch, Creates a branch, Deletes a branch, Merges branches
  // 3. Which one is these isn't in the Chris learning retrieval? Instinct, Challenge, Hunger, Retrieval
  // 4. Which of these isn't a Disney Ideation room? Dream, Realist, Critic, Creative
  // 5. Neurons that _____ together _____ together? Fire + wire, Play + Stay, Fuse + Use, Go + Flow 
  // 6. Which of these is not part of a high performance routine? Preparation, Focus, Recovery, Hunger
  // 7. Complete the phrase, Memory...? Palace, Castle, Hotel, Mansion
  // 8. Which isn't part of Computational Thinking? Add complexity, Understand the Problem, Look for Patterns, Abstract Away
  // 9. What is the first of the 12 principles of the Agile Manifesto ? 
    // Our highest priority is to satisfy the customer
    // through early and continuous delivery
    // of valuable software. — this one 

    // Welcome changing requirements, even late in
    // development. Agile processes harness change for
    // the customer's competitive advantage.

    // Welcome changing requirements, even late in
    // development. Agile processes harness change for
    // the customer's competitive advantage.

    // Business people and developers must work
    // together daily throughout the project.
  // 10. 
