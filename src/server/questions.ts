import {questionBank, type Question} from '../data/questionBank.js';

export type QuestionSource = 'bank';

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleOptions(question: Question): Question {
  const options = shuffleArray(
    question.options.map((option, index) => ({option, index}))
  );

  return {
    ...question,
    options: options.map(item => item.option),
    correctIndex: options.findIndex(item => item.index === question.correctIndex),
  };
}

export function getQuestions(): {questions: Question[]; source: QuestionSource} {
  const selectedQuestions = [1, 2, 3].flatMap(unit => {
    const unitQuestions = questionBank.filter(question => question.unit === unit);
    if (unitQuestions.length < 10) {
      throw new Error(`Question bank must contain at least 10 questions for Unit ${unit}`);
    }
    return shuffleArray([...unitQuestions]).slice(0, 10).map(shuffleOptions);
  });

  return {questions: shuffleArray(selectedQuestions), source: 'bank'};
}
