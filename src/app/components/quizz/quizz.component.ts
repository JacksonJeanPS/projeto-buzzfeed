import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';
import { QuizzData, QuizzQuestion } from './quizz.types';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title: string = "";

  questions: QuizzQuestion[] = [];
  questionSelected: QuizzQuestion | null = null;

  answers: string[] = [];
  answersSelected: string = "";

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  constructor() {}

  ngOnInit(): void {
    const data: QuizzData = quizz_questions as QuizzData;

    if (data) {
      this.finished = false;
      this.title = data.title;

      this.questions = data.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoose(value: string): void {
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep(): Promise<void> {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      const finalAnswer: string = await this.checkResult(this.answers);
      this.finished = true;
      this.answersSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results];
    }
  }

  async checkResult(answers: string[]): Promise<string> {
    if (answers.length === 0) {
      return '';
    }

    return new Promise<string>((resolve) => {
      const counts: Record<string, number> = {};
      answers.forEach(answer => {
        counts[answer] = (counts[answer] || 0) + 1;
      });

      let maxCount = 0;
      let mostCommon = '';
      Object.keys(counts).forEach(key => {
        if (counts[key] > maxCount) {
          maxCount = counts[key];
          mostCommon = key;
        }
      });

      resolve(mostCommon);
    });
  }

  restartQuiz(): void {
    this.finished = false;
    this.answers = [];
    this.answersSelected = "";
    this.questionIndex = 0;
    this.questionSelected = this.questions[0];
  }
}
