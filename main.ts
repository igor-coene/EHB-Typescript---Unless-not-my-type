type Question = {
  given: string;
  answer: string;
};
 
const question: Question = {
  given: "const index = 0",
  answer: "const index: number = 0",
};
 
const textArea = document.getElementById("quiz-input") as HTMLTextAreaElement;
const checkAnswerButton = document.getElementById("check-answer") as HTMLButtonElement;
 
textArea.value = question.given;
 
checkAnswerButton.addEventListener("click", () => {
  checkAnswer(textArea.value);
});
 
function cleanString(str: string): string {
  return str.replace(/\s+/g, "").toLowerCase();
}
 
function checkAnswer(userInput: string) {
  if (cleanString(userInput) === cleanString(question.answer)) {
    alert("YES");
  } else {
    alert("NO");
  }
}