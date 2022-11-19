const subtitleContainer = document.querySelectorAll('.question__subtitle-container');

subtitleContainer.forEach((button)=> {
  const activeQuestion = button.closest('.question');
  button.addEventListener('click', () => {
    showAnswer(activeQuestion);
  });
});

function showAnswer (question){
  const activeBtn = question.querySelector('.question__show-btn');
  const activeAnswer = question.querySelector('.question__answer-container');
  activeAnswer.classList.toggle('question_type_answer-visible');
  activeBtn.classList.toggle('question_type_button-pressed');
}
