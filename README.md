# IAI IFS Professionalism MCQ Simulator

A high-performance, 100% client-side static web application and examination engine built for actuarial candidates preparing for the **IAI India Fellowship Seminar (IFS) Professionalism Exam**.

Zero backend required. Engineered exclusively for execution and hosting on **GitHub Pages**.

---

## 🛠️ Technical Stack & Architecture

- **Core Engine:** Vanilla ECMAScript 2022+ (No heavy frontend frameworks, zero bundlers, 0 npm runtime dependencies).
- **Styling & Design System:** Modern CSS3 with HSL/Tailored color design tokens, CSS variables, native light/dark theme toggles, and responsive grid/flexbox layouts.
- **Audio Subsystem:** Mathematical sound synthesis implemented via the **Web Audio API** (`AudioContext`, `OscillatorNode`, `GainNode`). Runs completely offline with zero external audio assets.
- **Visual FX Subsystem:** Real-time physics particle confetti engine rendered on an HTML5 `<canvas>` via `requestAnimationFrame`.
- **Data Layer:** 2,598 scenario-based questions served as a single optimized JSON document (`questions.json`) fetched asynchronously via browser `fetch()` API.
- **Persistence Layer:** Client-side persistence using `localStorage`:
  - `iai_ifs_gamification`: User XP, mastery milestone, study streaks, achievement unlocks, combo stats, and mode bests.
  - `iai_ifs_attempts`: History of completed mock exam attempts and score breakdowns (limited to last 15 sessions).
  - `iai_ifs_theme`: Active color theme (`light` or `dark`).

---

## 📦 Project File Structure

```
IFS-MCQ-prep/
├── index.html           # Semantic HTML5 single-page application structure
├── styles.css           # CSS design system, typography, dark/light themes & responsive layout
├── app.js               # Application state machine, exam logic, gamification & analytics
├── questions.json       # Master database: 2,598 verified scenario MCQs (3.5 MB JSON)
├── README.md            # Technical documentation and deployment guide
│
├── [Source Standards & Guidance Reference Documents]
├── Actuaries Act 2006.pdf
├── APS9.docx / APS9.pdf
├── APS34.docx / APS34.pdf
├── Code of Conduct for Student of the IAI.docx / .pdf
├── FT-IGN 31 Guidance Note for Actuaries Supporting Audit.docx / .pdf
└── Professional Code of Conduct v4.docx / .pdf
```

---

## 📊 Data Schema (`questions.json`)

The questions database contains 2,598 distinct scenario questions conforming strictly to the following schema:

```json
{
  "id": 1,
  "category": "Professional Conduct Standards (PCS v4.0)",
  "source": "PCS v4.0, Para 1.2 (Conflict with Legal Requirements)",
  "question": "A consulting actuary advising an Indian life insurer is instructed...",
  "options": [
    "Option text string A",
    "Option text string B",
    "Option text string C",
    "Option text string D"
  ],
  "correctIndex": 3,
  "explanationCorrect": "Detailed technical rationale citing specific legal/practice standard clauses.",
  "explanationIncorrect": "Distractor analysis identifying common misconceptions in options A, B, and C."
}
```

### Option Distribution Metrics
- **Total Questions:** 2,598
- **Duplicate Stems:** 0 (100% unique)
- **Option Key Balance:**
  - Option A: 669 (25.75%)
  - Option B: 641 (24.67%)
  - Option C: 625 (24.06%)
  - Option D: 663 (25.52%)

---

## ⚙️ Core Application Modules (`app.js`)

### 1. State Machine (`AppState` & `GamificationState`)
- **`AppState`**: Tracks the active quiz session, active question index, candidate selections (`userAnswers`), review flags (`flaggedQuestions`), countdown timer interval, and filter views.
- **`GamificationState`**: Tracks earned XP, combo counter (1.1x–1.5x multiplier), study streaks, unlocked achievements, and mode personal bests.

### 2. Examination Engine
- **Full Mock Mode:** Randomizes 30 questions from the 2,598 pool. Initiates a 60-minute countdown timer (`startTimer()`), tracks answer states, and displays a question navigation palette.
- **Topic Drill Mode:** Generates a 25-question focused drill for a single syllabus category. Provides instant feedback upon selection and exposes dual explanations (correct rationale + distractor analysis).
- **Evaluation & Scoring:** Evaluates score upon submission, checks against the 60% passing benchmark (18/30 marks), computes category-level accuracy breakdown (Strong / Moderate / Critical Focus), and stores results to `localStorage`.
- **Smart Retry Engine:** Isolates all unattempted or incorrect questions from the last session for focused practice without re-testing answered items.

### 3. Specialized Game Modes
- **Disciplinary Hearing (Sudden Death):** Evaluates every answer instantly. A single incorrect answer immediately terminates the session with an alert citing the broken rule. Tracks survival high scores.
- **Rapid-Fire Speed Blitz (Full Syllabus):** 60-second time-attack drawing dynamically from all 2,598 questions across the entire question bank. Correct answers award +5s bonus time; incorrect answers apply a -3s penalty.
- **Weakness Boss Battle:** Dynamically constructs a 15-question adaptive assessment targeting the candidate's historical mistakes and lowest-accuracy domains. Successfully clearing the inquest awards a +500 XP bounty.

### 4. Audio Synthesizer (`ActuarialAudio`)
Built using pure mathematical frequency generation via Web Audio API:
- `click`: 1000 Hz &rarr; 400 Hz exponential drop (sine wave, 30ms).
- `correct`: 523.25 Hz (C5) &rarr; 659.25 Hz (E5) ascending chime (triangle wave, 280ms).
- `incorrect`: 220 Hz &rarr; 140 Hz descending buzz (sawtooth wave, 160ms).
- `fanfare / levelup`: 4-note ascending major arpeggio [C5, E5, G5, C6] (triangle wave, 600ms).

---

## ⌨️ Keyboard Shortcuts

| Key | Action | View |
| :--- | :--- | :--- |
| `ArrowLeft` / `ArrowRight` | Navigate to previous / next question | Exam View |
| `1`, `2`, `3`, `4` | Select options A, B, C, or D | Exam View |
| `A`, `B`, `C`, `D` | Select options A, B, C, or D (case-insensitive) | Exam View |
| `F` | Toggle Flag question for review | Exam View |

---

## 🔗 Live Application

Access and practice directly in your browser:

👉 **[https://naveenkrishna88.github.io/IFS-MCQ-prep/](https://naveenkrishna88.github.io/IFS-MCQ-prep/)**

*(Runs 100% client-side with offline question loading, local score history, and zero installation or account creation required.)*
