/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw,
  Trophy,
  BrainCircuit,
  Terminal,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Question {
  id: string;
  unit: 1 | 2 | 3;
  question: string;
  options: string[];
  correctIndex: number;
  type: 'simple' | 'logical';
  explanation: string;
}

type View = 'landing' | 'loading' | 'test' | 'result';

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionSource, setQuestionSource] = useState<'ai' | 'bank' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [testStats, setTestStats] = useState({
    correct: 0,
    wrong: 0,
    skipped: 0
  });

  const startTest = async () => {
    setIsLoading(true);
    setView('loading');
    try {
      const res = await fetch('/api/questions', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.error || `Server error: ${res.status}`);
      }
      
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('No questions received from AI');
      }

      const source = res.headers.get('X-Question-Source');
      if (source !== 'ai' && source !== 'bank') {
        throw new Error('The server did not identify the question source');
      }
      
      setQuestions(data);
      setQuestionSource(source);
      setCurrentIndex(0);
      setScore(0);
      setAnswers(new Array(data.length).fill(null));
      setTestStats({ correct: 0, wrong: 0, skipped: 0 });
      setView('test');
    } catch (error) {
      console.error('Error starting test:', error);
      alert(`Oops! Something went wrong:\n\n${error instanceof Error ? error.message : 'Unknown error'}`);
      setView('landing');
    } finally {
      setIsLoading(false);
    }
  };

  const finishTest = useCallback(() => {
    setView('result');
  }, []);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const submitTest = () => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    let finalScore = 0;

    answers.forEach((ans, i) => {
      if (ans === null) {
        skipped++;
      } else if (ans === questions[i].correctIndex) {
        correct++;
        finalScore += 1;
      } else {
        wrong++;
        finalScore -= 0.25;
      }
    });

    setScore(finalScore);
    setTestStats({ correct, wrong, skipped });
    setView('result');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
            Java Master <span className="text-indigo-600">LPU</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
          <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Units 1-3</span>
          <span className="flex items-center gap-1.5"><BrainCircuit className="w-4 h-4" /> AI Powered</span>
        </nav>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setView('landing')}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                  Crack Your Java Midterm
                </h1>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                  Practice tests based on LPU CAP392 Units 1-3. Gemini generates
                  fresh questions when configured; otherwise, use the built-in bank.
                  30 questions (10 per unit) with negative marking.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: Zap, label: "Unlimited Time", desc: "Focus on learning without pressure" },
                  { icon: AlertCircle, label: "Negative Marking", desc: "-0.25 for every wrong answer" },
                  { icon: BrainCircuit, label: "LPU Standard", desc: "Questions matched to LPU exam level" }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
                    <item.icon className="w-6 h-6 text-indigo-600" />
                    <h3 className="font-bold text-slate-900">{item.label}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
                <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    Syllabus Coverage
                  </h2>
                </div>
                <div className="p-8 grid md:grid-cols-3 gap-8">
                  {[
                    { unit: "Unit 1", topics: ["Basics", "Control Flow", "OOP", "Arrays"] },
                    { unit: "Unit 2", topics: ["Classes", "Constructors", "Polymorphism"] },
                    { unit: "Unit 3", topics: ["Inheritance", "Abstract Classes", "Interfaces"] }
                  ].map((u, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="font-bold text-indigo-600">{u.unit}</h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        {u.topics.map((t, ti) => (
                          <li key={ti} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-slate-300 rounded-full" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button 
                  onClick={startTest}
                  disabled={isLoading}
                  className="group relative px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-xl shadow-indigo-200"
                >
                  Start Practice Test
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

          {view === 'loading' && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 space-y-6"
            >
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-indigo-100 rounded-full" />
                <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin" />
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">Preparing Questions...</h2>
                <p className="text-slate-500">Building your 30-question test from Units 1-3</p>
              </div>
            </motion.div>
          )}

          {view === 'test' && (
            <motion.div 
              key="test"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              {/* Question Progress Bar */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  className="h-full bg-indigo-600"
                />
              </div>
              <p className="text-xs text-slate-400" aria-live="polite">
                {questionSource === 'ai'
                  ? 'AI-generated questions · 10 from each unit'
                  : 'Local question bank · 10 from each unit'}
              </p>

              <div className="flex items-center justify-between text-sm font-medium text-slate-500">
                <span>Question {currentIndex + 1} of {questions.length}</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] tracking-wider font-bold">
                    Unit {questions[currentIndex].unit}
                  </span>
                  <span className={`px-2 py-0.5 rounded uppercase text-[10px] tracking-wider font-bold ${questions[currentIndex].type === 'logical' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                    {questions[currentIndex].type}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-2xl font-bold leading-tight text-slate-900">
                  {questions[currentIndex].question.split('\n').map((line, i) => {
                    const isCode = line.startsWith('    ') || line.startsWith('```') || (line.includes('(') && line.includes('{'));
                    return (
                      <div 
                        key={i} 
                        className={isCode ? 'font-mono text-base bg-slate-900 text-slate-100 p-4 my-3 rounded-xl border-l-4 border-indigo-500 overflow-x-auto shadow-inner' : 'mb-2'}
                      >
                        {line.replace(/```/g, '')}
                      </div>
                    );
                  })}
                </div>

                <div className="grid gap-3">
                  {questions[currentIndex].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all group relative ${
                        answers[currentIndex] === i 
                          ? 'border-indigo-600 bg-indigo-50/50' 
                          : 'border-slate-200 hover:border-indigo-400 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-colors ${
                          answers[currentIndex] === i 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </div>
                        <span className={`font-medium transition-colors ${
                          answers[currentIndex] === i ? 'text-indigo-900' : 'text-slate-700'
                        }`}>
                          {option}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 gap-4 border-t border-slate-100">
                <button 
                  onClick={prevQuestion}
                  disabled={currentIndex === 0}
                  className="flex-1 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Back
                </button>
                
                {currentIndex === questions.length - 1 ? (
                  <button 
                    onClick={submitTest}
                    className="flex-[2] px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
                  >
                    Submit Test
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                ) : (
                  <button 
                    onClick={nextQuestion}
                    className="flex-1 px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {view === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600" />
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="w-10 h-10 text-indigo-600" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Test Completed!</h2>
                  <p className="text-slate-500">Here's how you performed on Units 1-3</p>
                </div>
                <div className="flex justify-center items-baseline gap-1">
                  <span className={`text-6xl font-black ${score >= (questions.length * 0.6) ? 'text-emerald-600' : 'text-indigo-600'}`}>
                    {score.toFixed(2)}
                  </span>
                  <span className="text-slate-400 font-bold">/ {questions.length}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-emerald-50 rounded-2xl">
                    <div className="text-emerald-600 font-black text-xl">{testStats.correct}</div>
                    <div className="text-emerald-700/60 text-xs font-bold uppercase tracking-wider">Correct</div>
                  </div>
                  <div className="p-4 bg-red-50 rounded-2xl">
                    <div className="text-red-600 font-black text-xl">{testStats.wrong}</div>
                    <div className="text-red-700/60 text-xs font-bold uppercase tracking-wider">Wrong</div>
                  </div>
                  <div className="p-4 bg-slate-100 rounded-2xl">
                    <div className="text-slate-600 font-black text-xl">{testStats.skipped}</div>
                    <div className="text-slate-600/60 text-xs font-bold uppercase tracking-wider">Skipped</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold px-2">Question Review</h3>
                <div className="space-y-4">
                  {questions.map((q, i) => (
                    <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="font-bold text-slate-900 leading-tight">{q.question}</div>
                        {answers[i] === q.correctIndex ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-slate-500 font-medium">Correct Answer: <span className="text-emerald-600 font-bold">{q.options[q.correctIndex]}</span></div>
                        {answers[i] !== null && answers[i] !== q.correctIndex && (
                          <div className="text-sm text-slate-500 font-medium">Your Answer: <span className="text-red-500 font-bold">{q.options[answers[i]!]}</span></div>
                        )}
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl text-sm text-slate-600 border border-slate-100">
                        <span className="font-bold text-indigo-600 uppercase text-[10px] tracking-wider block mb-1">Explanation</span>
                        {q.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center pb-8">
                <button 
                  onClick={() => setView('landing')}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Try Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
