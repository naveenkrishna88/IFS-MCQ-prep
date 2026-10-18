# IAI IFS Professionalism MCQ Simulator

> A high-performance, production-ready, 100% static web application designed for actuarial candidates preparing for the **Institute of Actuaries of India (IAI) India Fellowship Seminar (IFS) Professionalism MCQ Examination**.

Zero backend required. Fully optimized for instant deployment on **GitHub Pages**.

---

## 🎯 Exam Structure & IAI Passing Benchmark

- **Total Questions:** Exactly **30 Multiple-Choice Questions (MCQs)** selected dynamically from the master question bank.
- **Duration:** **60 Minutes** (Live countdown timer with under-5-minute alert).
- **Passing Benchmark:** **60% (18 marks out of 30)** matching official IAI Fellowship Seminar criteria.
- **Marking Scheme:** +1 mark per correct answer, 0 for incorrect or unattempted (no negative marking).

---

## 📚 Core Syllabus Modules Covered

The question bank and syllabus briefs are strictly grounded in official statutory acts, standards, and regulatory frameworks:

1. **Professional Conduct Standards (PCS v4.0):**
   - Statutory authority under Section 19(2)(i) of the Actuaries Act 2006.
   - Precedence of statutory law over professional guidance (Para 1.2).
   - Duty of confidentiality & legal/public interest exceptions (Para 3.2).
   - Client transition & the mandatory **10-day handover response rule** (Para 7.2).
   - Mandatory refusal to act if client denies consent to contact incumbent actuary (Para 7.3).
   - Duty to self-report unrectifiable misconduct (Para 5.2).
   - Restrictions on excessive contingency/success fees (Para 6.7) and advertising rules (Para 8).

2. **The Actuaries Act, 2006 & Statutory Framework:**
   - Incorporation of the Institute of Actuaries of India (Section 3).
   - Composition and 3-year term of the Council (Sections 12 & 14).
   - Mandatory Certificate of Practice (COP) to practice in India (Section 9).
   - Establishment, composition, and functions of the **Quality Review Board (QRB)** under Section 43 & 44.
   - Criminal penalties for unauthorized use of designations (Section 38).

3. **IAI Governance, Committees & QRB:**
   - Regulatory powers of the Council under Section 19.
   - Role of Practice Advisory Groups (Life, General, Health, Pensions, Risk Management).
   - Purpose and prerequisites of the India Fellowship Seminar (IFS).

4. **Disciplinary Process & 2008 Rules:**
   - Disciplinary Directorate headed by the Director (Discipline) under Section 28.
   - **First Schedule Misconduct:** Inquired into by the **Board of Discipline** (Max penalty: reprimand, suspension up to 3 months, fine up to Rs. 1,00,000).
   - **Second Schedule Misconduct:** Inquired into by the **Disciplinary Committee** (Max penalty: permanent removal, fine up to Rs. 5,00,000).
   - Appellate Authority appeals process under Section 36 (90-day limitation period).

5. **Student Code of Conduct (2026):**
   - Student Disciplinary Committee (SDC) composition (at least 3 members) and summary natural justice procedure.
   - Filing complaints in triplicate with Rs. 1,000 non-refundable fee.
   - Suo motu inquiry powers of the Institute / Head of Examination.
   - 15 working days mediation counseling window.
   - Symmetrical 21-day defense statement and 21-day rejoinder timelines.
   - Appeals to the President of the Institute within 90 days.
   - Monetary fine cap of Rs. 20,000 and debarment/registration cancellation penalties.

6. **APS 9: Continuing Professional Development (CPD v4.00):**
   - **Category 1 (COP Holders):** 24 CPD hours/year (min 15 verifiable technical, min 6 verifiable professional, max 3 other). Additional practice areas require **+8 technical hours each**.
   - **Category 2 (Active Fellows without COP):** 15 CPD hours/year (min 9 technical, min 3 professional, max 3 other).
   - **Category 3 (Inactive retaining FIAI):** Application 3 months prior to membership year end; exempt from annual CPD.
   - Daily credit conversion brackets (&ge; 5.5 hours = 6 CPD hours max per day).
   - Mandatory **5-year record retention** (Section 10.2).
   - Self-attestation by **31st May**; public listing of non-compliant members on **1st July**.

7. **APS 34 (ISAP 1) & FT-IGN 31 (Auditing Actuary under Ind AS 117):**
   - Distinction between 'Must' (mandatory), 'Should' (normal practice), and 'May' (permissible).
   - Standard of documentation sufficiency (competent peer actuary replication test).
   - Auditing Actuary acting as Auditor's Expert under ICAI SA 620.
   - Pre-engagement cooling-off of 1 year; mandatory rotation after 4 consecutive years (followed by 3-year cooling-off); max 3 concurrent audit engagements.
   - **Working Paper Access Asymmetry:** Auditor has broad access to challenge memos; insurance company has restricted access.
   - **5-Step Disagreement Escalation Pathway:** Engagement level &rarr; Engagement Partner &rarr; EQCR & Audit Committee &rarr; Board/TCWG &rarr; IRDAI & IAI (confidentiality overridden in public interest).
   - PAA 1-year safe harbour at whole-contract level (carving multi-year contracts prohibited).
   - IRDAI-prescribed CCIL Zero-Coupon Yield Curve for discounting.
   - Audit working papers retention for **7 years** under SA 230.

---

## 🚀 Key Features

- **Full Mock Exam Mode:** Real-time 30-question randomized mock exam matching the actual IAI exam environment with interactive question palette navigator (Answered, Unanswered, Flagged).
- **Topic Practice Mode:** Focus on individual syllabus modules with instant score evaluation.
- **Dual Explanation Engine:** Detailed feedback for every question showing:
  - *Why the correct answer is right* (with specific paragraph and section citations).
  - *Distractor & Misconception Analysis* explaining why common alternatives are wrong.
- **Pure Client-Side Analytics:** Automatic computation of strength and weakness breakdown by syllabus category (Strong / Moderate / Critical Focus Area) with visual progress bars.
- **Smart Retry Engine:** One-click **"Retry Missed Questions"** button that isolates only the questions the candidate got wrong or skipped.
- **Candidate Performance History:** Tracks past attempts and high scores via browser `localStorage`.
- **Keyboard Shortcuts:**
  - `ArrowLeft` / `ArrowRight` : Navigate questions.
  - `1`, `2`, `3`, `4` or `A`, `B`, `C`, `D` : Select options.
  - `F` : Flag / Unflag question for review.
- **Hosted on GitHub Pages:** Pure static web architecture with zero server requirements. Fast, asynchronous loading of `questions.json`.

---

## 📁 File Structure

```
IFS-MCQ-prep/
├── index.html           # Main semantic HTML5 single-page application
├── styles.css           # Premium actuarial CSS design system & responsive layout
├── app.js               # Core application logic, quiz engine & client-side analytics
├── questions.json       # Master question bank (2,500 structured MCQs in JSON)
├── build_full_bank.py   # Deterministic question bank generation engine
└── README.md            # Comprehensive documentation & syllabus guide
```

---

## 🌐 Free GitHub Pages Deployment

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy IAI IFS MCQ Prep Web App"
   git branch -M main
   git remote add origin https://github.com/<your-username>/IFS-MCQ-prep.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
4. Set branch to `main` and folder to `/ (root)`. Click **Save**.
5. Your app will be live within 60 seconds at `https://<your-username>.github.io/IFS-MCQ-prep/`.

---

## 💻 Local Preview

Run any lightweight local server or open `index.html` directly in your browser:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```
Navigate to `http://localhost:8000`.
