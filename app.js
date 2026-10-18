/**
 * IAI IFS Professionalism MCQ Simulator - Core Application Logic
 * 100% Static Client-Side Architecture (Vanilla JS)
 * Optimized for GitHub Pages Deployment
 */

// =============================================================================
// Syllabus Knowledge Base & Topic Meta
// =============================================================================

const SYLLABUS_MODULES = [
  {
    id: "pcs",
    category: "Professional Conduct Standards (PCS v4.0)",
    shortTitle: "PCS v4.0 Conduct Rules",
    ref: "Section 19(2)(i) of Actuaries Act 2006",
    icon: "⚖️",
    desc: "Ethical standards, client confidentiality exceptions, conflict of interest, change of advisor & 10-day handover rule.",
    briefHtml: `
      <h4>Legal Precedence & Scope</h4>
      <p>PCS v4.0 (effective 04/09/2021) governs all members of the Institute. Where professional guidance conflicts with legal requirements, <strong>legal requirements strictly prevail</strong> (Para 1.2). Ignorance of rules cannot justify misconduct (Para 5.1).</p>
      
      <h4>Duty of Confidentiality & Exceptions (Para 3.2)</h4>
      <ul>
        <li>Client information is strictly confidential as a matter of law.</li>
        <li><strong>Exceptions:</strong> When obliged by statutory or judicial authority, or free to disclose in the <strong>public interest</strong> or for the actuary's own protection (legal counsel advised).</li>
      </ul>

      <h4>Client Transition & The 10-Day Handover Rule (Para 7.2)</h4>
      <ul>
        <li>Clients have an indisputable right to choose and change advisors.</li>
        <li>A newly approached actuary <strong>must write to the incumbent actuary</strong> as early as possible to inquire if there are professional reasons to decline.</li>
        <li>The incumbent actuary <strong>must respond no later than 10 days</strong> and make no attempt to obstruct the client.</li>
        <li>If the client refuses consent to contact the incumbent actuary, <strong>the appointment MUST be declined</strong> (Para 7.3).</li>
      </ul>

      <h4>Misconduct Reporting (Para 5.2 - 5.5)</h4>
      <ul>
        <li>A member who believes they committed an unrectifiable misconduct <strong>must self-report</strong> to the IAI.</li>
        <li>When discovering another member's misconduct: in the first instance, consider discussing directly to seek clarification or explore rectification. If inappropriate or unresolved, refer under the 2008 Disciplinary Rules.</li>
        <li>Members found guilty of misconduct must immediately notify any other actuarial bodies where they hold membership, and vice versa.</li>
      </ul>

      <h4>Commercial Conduct & Publicity (Para 6.7 & 8)</h4>
      <ul>
        <li>Large contingency or success fees can threaten objectivity and violate PCS.</li>
        <li>Publicizing areas of work and charging bases is permissible; claiming unfair professional advantage, disparaging peers, or falsely implying official IAI endorsement is prohibited.</li>
      </ul>
    `
  },
  {
    id: "act",
    category: "Actuaries Act 2006 & Statutory Framework",
    shortTitle: "Actuaries Act 2006 & QRB",
    ref: "Statutory Act of Parliament No. 35 of 2006",
    icon: "🏛️",
    desc: "Statutory incorporation of IAI, Council composition (Sec 12), Certificate of Practice (Sec 9), and Quality Review Board (Sec 43).",
    briefHtml: `
      <h4>Statutory Foundation & Council</h4>
      <ul>
        <li><strong>Section 3 & 12:</strong> The Institute of Actuaries of India is a statutory body corporate. The Council consists of elected Fellows/Associates and nominees of the Central Government.</li>
        <li><strong>Section 14:</strong> The term of office for Council members is <strong>three years</strong>.</li>
        <li><strong>Section 9 (COP):</strong> No member can practice actuarial science in India without a Certificate of Practice (COP) issued by the Council.</li>
      </ul>

      <h4>Quality Review Board (QRB - Section 43 & 44)</h4>
      <ul>
        <li>Established by the <strong>Central Government</strong>.</li>
        <li>Consists of a Chairperson and members nominated by the Central Government and Council.</li>
        <li><strong>Functions:</strong> Review the quality of services provided by IAI members, provide guidance on compliance, and make recommendations to the Council.</li>
      </ul>

      <h4>Appellate Authority (Section 36)</h4>
      <ul>
        <li>Appeals against disciplinary orders lie with the statutory Appellate Authority constituted under the Chartered Accountants / Actuaries Acts within <strong>90 days</strong>.</li>
      </ul>

      <h4>Offenses & Penalties (Section 38)</h4>
      <ul>
        <li>Falsely claiming to be an actuary or misusing designations is a criminal offense: punishable by fine up to Rs. 1,000 on first conviction, and imprisonment up to 6 months or fine up to Rs. 5,000 or both on subsequent convictions.</li>
      </ul>
    `
  },
  {
    id: "gov",
    category: "IAI Governance, Committees & QRB",
    shortTitle: "IAI Governance & Seminars",
    ref: "IAI Governance Manual & Regulation Framework",
    icon: "👔",
    desc: "Institutional governance, Council powers under Sec 19, Practice Advisory Groups, and India Fellowship Seminar prerequisites.",
    briefHtml: `
      <h4>IAI Governance Hierarchy</h4>
      <ul>
        <li><strong>Council:</strong> Supreme executive body empowered under Section 19 to frame regulations, issue guidance notes (GNs), and prescribe Actuarial Practice Standards (APSs).</li>
        <li><strong>Office Bearers:</strong> President, Vice-President, and Honorary Secretary elected by Council members.</li>
        <li><strong>Executive Directorate:</strong> Headed by the Executive Director, administering daily operations and the examination department.</li>
      </ul>

      <h4>Advisory Groups & Committees</h4>
      <ul>
        <li>Practice Advisory Groups (Life, General, Health, Pensions, Risk Management, Banking) advise Council on emerging market regulations and professional standard updates.</li>
        <li>Statutory committees include the Executive Committee, Examination Committee, Board of Discipline, and Disciplinary Committee.</li>
      </ul>

      <h4>The India Fellowship Seminar (IFS)</h4>
      <ul>
        <li>Mandatory professionalism seminar for candidates transitioning to Fellowship.</li>
        <li>Focuses on public interest stewardship, actuarial ethics, Indian statutory framework, conflict resolution, and peer accountability.</li>
        <li><strong>Exam Benchmark:</strong> 30 MCQs in 60 minutes with a 60% passing benchmark (18 marks).</li>
      </ul>
    `
  },
  {
    id: "disc",
    category: "Disciplinary Process & Misconduct",
    shortTitle: "Disciplinary Process & 2008 Rules",
    ref: "Sections 26-31 of Act & Disciplinary Rules 2008",
    icon: "⚖️",
    desc: "Director (Discipline) prima facie opinion, First Schedule (Board of Discipline) vs Second Schedule (Disciplinary Committee).",
    briefHtml: `
      <h4>Statutory Disciplinary Directorate (Section 28)</h4>
      <ul>
        <li>Headed by the <strong>Director (Discipline)</strong>.</li>
        <li>Upon receipt of any complaint or information, the Director conducts an initial inquiry and forms a <strong>prima facie opinion</strong> on whether the member is guilty of misconduct.</li>
      </ul>

      <h4>First Schedule Misconduct (Board of Discipline - Section 29)</h4>
      <ul>
        <li>Applies to professional misconduct of lesser gravity (e.g. allowing unauthorized persons to practice in one's name, improper fees sharing).</li>
        <li><strong>Penalties:</strong> Reprimand, suspension from membership for up to <strong>3 months</strong>, or fine up to <strong>Rs. 1,00,000 (1 Lakh)</strong>.</li>
      </ul>

      <h4>Second Schedule Misconduct (Disciplinary Committee - Section 30)</h4>
      <ul>
        <li>Applies to serious professional misconduct (gross negligence, certifying unverified calculations, moral turpitude).</li>
        <li><strong>Penalties:</strong> Reprimand, permanent removal of name or for any specified period, and/or fine up to <strong>Rs. 5,00,000 (5 Lakhs)</strong>.</li>
      </ul>

      <h4>Statutory Timelines</h4>
      <ul>
        <li>Right of appeal to the Appellate Authority within <strong>90 days</strong> of order communication.</li>
      </ul>
    `
  },
  {
    id: "std",
    category: "Student Code of Conduct",
    shortTitle: "Student Code of Conduct (2026)",
    ref: "IAI Student Code of Conduct (Effective 17.01.2026)",
    icon: "🎓",
    desc: "Student Disciplinary Committee (SDC), Rs. 1,000 complaint fee, 15-day mediation, 21-day defense/rejoinder, Rs. 20,000 fine cap.",
    briefHtml: `
      <h4>Scope & Applicability (Clause 1-3)</h4>
      <p>Applies to all registered students, examination candidates, seminar attendees, and even Associates or Fellows when taking examinations.</p>

      <h4>Student Disciplinary Committee (SDC - Clause 9)</h4>
      <ul>
        <li>Comprises at least <strong>three members</strong> appointed by Council.</li>
        <li>Follows summary disposal in accordance with Principles of Natural Justice.</li>
      </ul>

      <h4>Disciplinary Workflow & Strict Timelines (Clause 10-14 & Table 2)</h4>
      <ul>
        <li><strong>Complaint Filing:</strong> Must be in <strong>triplicate</strong> with a non-refundable fee of <strong>Rs. 1,000</strong> to the Executive Director / Head of Examination.</li>
        <li><strong>Suo Motu Power:</strong> Head of Examination can initiate proceedings without external complaint based on exam logs or proctor evidence.</li>
        <li><strong>Mediation:</strong> Within <strong>15 working days</strong>, attempts counseling for amicable settlement.</li>
        <li><strong>Investigation:</strong> Respondent student has <strong>21 days</strong> to submit written defense; Complainant has <strong>21 days</strong> to file a rejoinder.</li>
        <li><strong>Appeals:</strong> Aggrieved student may appeal to the <strong>President of the Institute</strong> (Appellate Authority) within <strong>90 days</strong>.</li>
      </ul>

      <h4>Key Misconducts & Scale of Penalties (Schedule I & II)</h4>
      <ul>
        <li><strong>Improper Designations:</strong> Calling oneself 'Actuary' or using 'AIAI'/'FIAI' before qualifying is strictly prohibited.</li>
        <li><strong>Cheating & Plagiarism:</strong> Impersonation, exam collusion, unauthorized materials.</li>
        <li><strong>Penalties:</strong> Written reprimand, fine up to <strong>Rs. 20,000</strong>, forfeiture of exam fees, exam debarment, or permanent cancellation of student registration.</li>
      </ul>
    `
  },
  {
    id: "aps9",
    category: "APS 9: Continuing Professional Development (CPD)",
    shortTitle: "APS 9: CPD Regulations",
    ref: "APS 9 (v4.00) under Section 19(2)(i)",
    icon: "📖",
    desc: "Mandatory 24h CPD for COP holders (15 tech + 6 prof + 3 other), +8h per extra area, Category 2 (15h), 5-yr records & 1st July web listing.",
    briefHtml: `
      <h4>Fellow Member Categories & Hours (Section 4)</h4>
      <ul>
        <li><strong>Category 1 (COP Holders):</strong> Minimum <strong>24 CPD hours/year</strong>:
          <ul>
            <li>At least <strong>15 verifiable technical CPD hours</strong> in specific practice area.</li>
            <li>At least <strong>6 verifiable professional CPD hours</strong>.</li>
            <li>Maximum 3 hours of other verifiable CPD.</li>
            <li><strong>Additional Practice Area:</strong> Requires an extra <strong>8 technical CPD hours</strong> per additional area!</li>
          </ul>
        </li>
        <li><strong>Category 2 (Active Fellows without COP):</strong> Minimum <strong>15 CPD hours/year</strong> (at least 9 technical, at least 3 professional, max 3 other). Mutual recognition exemption permitted if compliant with recognized foreign body.</li>
        <li><strong>Category 3 (Inactive retaining FIAI):</strong> Apply 3 months prior to membership year end; pay fee; exempt from annual CPD.</li>
      </ul>

      <h4>Daily Conversion Rule (Section 9.2)</h4>
      <ul>
        <li>&lt; 0.5 hr = 0 CPD</li>
        <li>0.5 to &lt; 1.5 hr = 1 CPD</li>
        <li>1.5 to &lt; 2.5 hr = 2 CPD</li>
        <li>2.5 to &lt; 3.5 hr = 3 CPD</li>
        <li>3.5 to &lt; 4.5 hr = 4 CPD</li>
        <li>4.5 to &lt; 5.5 hr = 5 CPD</li>
        <li>&ge; 5.5 hr = 6 CPD (Maximum per day, excludes lunch break)</li>
      </ul>

      <h4>Compliance & Enforcement (Section 10-12)</h4>
      <ul>
        <li><strong>Record Retention:</strong> Preserve CPD records for at least <strong>5 years</strong> (e.g. FY 20-21 kept up to FY 25-26).</li>
        <li><strong>Self-Attestation Deadline:</strong> By <strong>31st May</strong> (within 2 months of year-end).</li>
        <li><strong>Public Listing:</strong> Non-compliant members' names uploaded on IAI website on <strong>1st July</strong> each year.</li>
      </ul>
    `
  },
  {
    id: "aps34",
    category: "APS 34 & FT-IGN 31: Practice & Audit Standards",
    shortTitle: "APS 34 & FT-IGN 31 (Ind AS 117)",
    ref: "APS 34 (ISAP 1) & FT-IGN 31 (Audit under Ind AS 117)",
    icon: "📊",
    desc: "General practice definitions ('Must' vs 'Should'), Auditing Actuary cooling-off (1 yr), 4-yr rotation, access asymmetry & 5-step escalation.",
    briefHtml: `
      <h4>APS 34: General Actuarial Practice (ISAP 1)</h4>
      <ul>
        <li><strong>Language conventions:</strong> 'Must' is mandatory (only depart if conflict with law); 'Should' is standard practice (depart only with disclosure and justification); 'May' is permissible.</li>
        <li><strong>Documentation Sufficiency:</strong> Must allow another actuary qualified in the same practice area to understand the work and assess judgments.</li>
        <li><strong>Materiality:</strong> Judged from the perspective of the intended user's decision-making.</li>
      </ul>

      <h4>FT-IGN 31: Auditing Actuary under Ind AS 117 (Oct 2026)</h4>
      <ul>
        <li><strong>Role:</strong> Actuary acts as an Auditor's Expert under ICAI SA 620.</li>
        <li><strong>Independence & Cooling-off:</strong> Cannot be former employee within 1 year; <strong>1-year cooling-off</strong> if acted as Appointed Actuary, consultant, or model vendor (Para 3.2.4).</li>
        <li><strong>Rotation:</strong> Maximum <strong>4 consecutive years</strong> as Auditing Actuary, followed by a <strong>3-year cooling-off period</strong> (Para 3.2.5). Maximum <strong>3 concurrent engagements</strong>.</li>
        <li><strong>Working Paper Access Asymmetry (Para 3.19.5):</strong> Statutory auditor has broad access to challenge memos; the insurance company has restricted access and no right to inspect internal challenge memos.</li>
        <li><strong>Five-Step Disagreement Escalation (Para 3.23):</strong>
          <ol>
            <li>Engagement-level resolution.</li>
            <li>Engagement Partner & Person Responsible for Ind AS 117.</li>
            <li>EQCR (SA 220) & Audit Committee.</li>
            <li>Board of Directors / TCWG.</li>
            <li>Regulators (IRDAI & IAI) — <strong>Confidentiality is overridden in public interest</strong>.</li>
          </ol>
        </li>
        <li><strong>Key Technical Safeguards:</strong>
          <ul>
            <li><strong>PAA Eligibility:</strong> Safe harbour (Para 53(b)) strictly requires whole-contract &le; 1 year; carving multi-year policies is prohibited.</li>
            <li><strong>Discount Curve:</strong> Must use IRDAI-prescribed CCIL Zero-Coupon Yield Curve.</li>
            <li><strong>Risk Adjustment (RA):</strong> Non-nil on reinsurance held; diversification claimed in RA cannot exceed diversification in pricing (Asymmetry Direction A).</li>
            <li><strong>Retention:</strong> Audit working papers retained for at least <strong>7 years</strong> under SA 230.</li>
          </ul>
        </li>
      </ul>
    `
  }
];

// =============================================================================
// Application State Machine
// =============================================================================

const AppState = {
  allQuestions: [],
  activeQuizQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: {},       // questionId -> selectedOptionIndex
  flaggedQuestions: {},  // questionId -> boolean
  examMode: "mock",      // "mock" | "topic" | "retry"
  activeCategory: null,
  timerInterval: null,
  timeRemainingSec: 3600, // 60 mins for 30 questions
  timeElapsedSec: 0,
  isSubmitted: false,
  lastCompletedSession: null,
  reviewFilter: "all"
};

// =============================================================================
// Initialization & Data Loading
// =============================================================================

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  setupEventListeners();
  renderSidebarNav();
  renderCategoryCards();
  loadAttemptHistory();
  
  await loadQuestionBank();
});

function initTheme() {
  const savedTheme = localStorage.getItem("iai_ifs_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById("themeIcon");
  if (iconSpan) {
    iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

async function loadQuestionBank() {
  try {
    const res = await fetch("questions.json");
    if (!res.ok) {
      throw new Error(`Failed to load questions.json (status: ${res.status})`);
    }
    AppState.allQuestions = await res.json();
  } catch (err) {
    console.error("Error loading questions.json:", err);
  }

  // Update total question count in dashboard stats
  const totalCountEl = document.getElementById("statTotalQCount");
  if (totalCountEl) totalCountEl.textContent = AppState.allQuestions.length;

  renderCategoryCards();
  renderSidebarNav();
}

// =============================================================================
// Sidebar Navigation & Topic Cards Rendering
// =============================================================================

function renderSidebarNav() {
  const navContainer = document.getElementById("sidebarNav");
  if (!navContainer) return;

  let html = `
    <button class="nav-item ${!AppState.activeCategory ? 'active' : ''}" onclick="showDashboard()">
      <span class="nav-icon">🏠</span>
      <div class="nav-content">
        <div class="nav-title">
          <span>All Syllabus Modules</span>
          <span class="nav-badge">${AppState.allQuestions.length} Qs</span>
        </div>
        <div class="nav-desc">Dashboard & Full Mock Engine</div>
      </div>
    </button>
  `;

  SYLLABUS_MODULES.forEach(mod => {
    const qCount = AppState.allQuestions.filter(q => q.category === mod.category).length;
    const isActive = AppState.activeCategory === mod.category;
    html += `
      <div class="nav-item ${isActive ? 'active' : ''}" style="cursor: pointer;">
        <span class="nav-icon">${mod.icon}</span>
        <div class="nav-content" onclick="startTopicQuiz('${mod.category}')">
          <div class="nav-title">
            <span>${mod.shortTitle}</span>
            <span class="nav-badge">${qCount}</span>
          </div>
          <div class="nav-desc">${mod.ref}</div>
        </div>
        <button class="btn btn-sm" onclick="event.stopPropagation(); openSyllabusModal('${mod.id}')" title="Study Topic Brief" style="padding: 0.2rem 0.4rem; color: var(--primary);">
          ℹ️
        </button>
      </div>
    `;
  });

  navContainer.innerHTML = html;
}

function renderCategoryCards() {
  const grid = document.getElementById("categoryCardsGrid");
  if (!grid) return;

  grid.innerHTML = SYLLABUS_MODULES.map(mod => {
    const qCount = AppState.allQuestions.filter(q => q.category === mod.category).length;
    return `
      <div class="category-card">
        <div class="cat-top">
          <span class="cat-badge">${mod.ref}</span>
          <h4 class="cat-title">${mod.icon} ${mod.shortTitle}</h4>
          <p class="cat-desc">${mod.desc}</p>
        </div>
        <div class="cat-meta">
          <span class="cat-count">${qCount} Questions Available</span>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="openSyllabusModal('${mod.id}')">
              Study Brief
            </button>
            <button class="btn btn-primary btn-sm" onclick="startTopicQuiz('${mod.category}')">
              Practice Quiz
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// =============================================================================
// Syllabus Modal Logic
// =============================================================================

window.openSyllabusModal = function(moduleId) {
  const mod = SYLLABUS_MODULES.find(m => m.id === moduleId);
  if (!mod) return;

  document.getElementById("syllabusModalTitle").textContent = `${mod.icon} ${mod.shortTitle}`;
  document.getElementById("syllabusModalRef").textContent = mod.ref;
  document.getElementById("syllabusModalBody").innerHTML = mod.briefHtml;
  
  const startBtn = document.getElementById("startTopicQuizFromModalBtn");
  startBtn.onclick = () => {
    closeSyllabusModal();
    startTopicQuiz(mod.category);
  };

  document.getElementById("syllabusModal").classList.add("open");
};

function closeSyllabusModal() {
  document.getElementById("syllabusModal").classList.remove("open");
}

// =============================================================================
// Exam & Quiz Engine
// =============================================================================

function showView(viewId) {
  document.getElementById("dashboardView").style.display = viewId === "dashboardView" ? "block" : "none";
  document.getElementById("examView").style.display = viewId === "examView" ? "block" : "none";
  document.getElementById("resultsView").style.display = viewId === "resultsView" ? "block" : "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.showDashboard = function() {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
  AppState.activeCategory = null;
  renderSidebarNav();
  showView("dashboardView");
  loadAttemptHistory();
};

window.startFullMockExam = function() {
  if (AppState.allQuestions.length === 0) {
    alert("Questions are still loading, please wait a moment.");
    return;
  }

  // Shuffle and pick exactly 30 questions matching official IAI format
  const shuffled = [...AppState.allQuestions].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 30);

  setupQuizSession(selected, "mock", "Full Mock Exam (30 Questions)", 3600);
};

window.startTopicQuiz = function(category) {
  const filtered = AppState.allQuestions.filter(q => q.category === category);
  if (filtered.length === 0) {
    alert("No questions found for this topic.");
    return;
  }

  AppState.activeCategory = category;
  renderSidebarNav();

  // Randomize 25 questions per topic practice session from the 350+ pool
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.min(25, shuffled.length));

  // Allow 2 minutes per question in topic practice mode
  const durationSec = selected.length * 120;
  setupQuizSession(selected, "topic", `Topic Drill (25 Qs): ${category}`, durationSec);
};

window.retryMissedQuestions = function() {
  if (!AppState.lastCompletedSession || !AppState.lastCompletedSession.missedQuestions) {
    alert("No missed questions recorded in current session.");
    return;
  }

  const missed = AppState.lastCompletedSession.missedQuestions;
  if (missed.length === 0) {
    alert("You got 100% correct in your last session! No missed questions to retry.");
    return;
  }

  const durationSec = missed.length * 120;
  setupQuizSession(missed, "retry", `Retry Mode (${missed.length} Missed Questions)`, durationSec);
};

function setupQuizSession(questions, mode, modeLabel, durationSec) {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);

  AppState.activeQuizQuestions = questions;
  AppState.currentQuestionIndex = 0;
  AppState.userAnswers = {};
  AppState.flaggedQuestions = {};
  AppState.examMode = mode;
  AppState.timeRemainingSec = durationSec;
  AppState.timeElapsedSec = 0;
  AppState.isSubmitted = false;

  document.getElementById("examModeBadge").textContent = modeLabel;
  updateTimerDisplay();
  startTimer();

  renderQuestionPalette();
  renderActiveQuestion();

  showView("examView");
}

function startTimer() {
  const timerBox = document.getElementById("examTimerBox");
  timerBox.classList.remove("timer-warning");

  AppState.timerInterval = setInterval(() => {
    AppState.timeRemainingSec--;
    AppState.timeElapsedSec++;

    updateTimerDisplay();

    // Pulse warning if less than 5 minutes remaining in mock mode
    if (AppState.timeRemainingSec <= 300) {
      timerBox.classList.add("timer-warning");
    }

    if (AppState.timeRemainingSec <= 0) {
      clearInterval(AppState.timerInterval);
      alert("Time is up! Your exam will now be submitted automatically.");
      finalizeExamSubmission();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(AppState.timeRemainingSec / 60);
  const secs = AppState.timeRemainingSec % 60;
  document.getElementById("timerDisplay").textContent = 
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderActiveQuestion() {
  const q = AppState.activeQuizQuestions[AppState.currentQuestionIndex];
  if (!q) return;

  const total = AppState.activeQuizQuestions.length;
  document.getElementById("currentQuestionIndicator").textContent = 
    `Question ${AppState.currentQuestionIndex + 1} of ${total}`;
  document.getElementById("qCategoryBadge").textContent = q.category;
  const sourceEl = document.getElementById("qSourceBadge");
  if (sourceEl) {
    sourceEl.textContent = `Source: ${q.source || q.category}`;
  }
  document.getElementById("activeQuestionText").textContent = q.question;

  // Flag button state
  const isFlagged = !!AppState.flaggedQuestions[q.id];
  const flagBtn = document.getElementById("flagQuestionBtn");
  const flagText = document.getElementById("flagBtnText");
  if (isFlagged) {
    flagBtn.classList.add("flagged");
    flagText.textContent = "Flagged";
  } else {
    flagBtn.classList.remove("flagged");
    flagText.textContent = "Flag for Review";
  }

  // Render 4 options
  const selectedIdx = AppState.userAnswers[q.id];
  const optionsContainer = document.getElementById("activeOptionsList");
  const optionLetters = ["A", "B", "C", "D"];

  optionsContainer.innerHTML = q.options.map((opt, idx) => {
    const isSelected = selectedIdx === idx;
    return `
      <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption(${idx})">
        <div class="option-marker">${optionLetters[idx]}</div>
        <div class="option-label">${opt}</div>
      </div>
    `;
  }).join("");

  // Navigation button states
  document.getElementById("prevQuestionBtn").disabled = AppState.currentQuestionIndex === 0;
  
  const nextBtn = document.getElementById("nextQuestionBtn");
  if (AppState.currentQuestionIndex === total - 1) {
    nextBtn.innerHTML = `Finish <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    nextBtn.onclick = openSubmitConfirmModal;
  } else {
    nextBtn.innerHTML = `Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
    nextBtn.onclick = () => navigateQuestion(1);
  }

  updatePaletteHighlight();
}

window.selectOption = function(optionIndex) {
  const q = AppState.activeQuizQuestions[AppState.currentQuestionIndex];
  if (!q) return;

  AppState.userAnswers[q.id] = optionIndex;
  renderActiveQuestion();
  renderQuestionPalette();
};

window.clearCurrentAnswer = function() {
  const q = AppState.activeQuizQuestions[AppState.currentQuestionIndex];
  if (!q) return;

  delete AppState.userAnswers[q.id];
  renderActiveQuestion();
  renderQuestionPalette();
};

window.toggleFlagQuestion = function() {
  const q = AppState.activeQuizQuestions[AppState.currentQuestionIndex];
  if (!q) return;

  AppState.flaggedQuestions[q.id] = !AppState.flaggedQuestions[q.id];
  renderActiveQuestion();
  renderQuestionPalette();
};

function navigateQuestion(delta) {
  const newIndex = AppState.currentQuestionIndex + delta;
  if (newIndex >= 0 && newIndex < AppState.activeQuizQuestions.length) {
    AppState.currentQuestionIndex = newIndex;
    renderActiveQuestion();
  }
}

window.jumpToQuestion = function(index) {
  if (index >= 0 && index < AppState.activeQuizQuestions.length) {
    AppState.currentQuestionIndex = index;
    renderActiveQuestion();
  }
};

// =============================================================================
// Question Navigator Palette
// =============================================================================

function renderQuestionPalette() {
  const grid = document.getElementById("questionPaletteGrid");
  if (!grid) return;

  const total = AppState.activeQuizQuestions.length;
  let answeredCount = 0;

  let html = "";
  for (let i = 0; i < total; i++) {
    const q = AppState.activeQuizQuestions[i];
    const isAnswered = AppState.userAnswers[q.id] !== undefined;
    const isFlagged = !!AppState.flaggedQuestions[q.id];
    const isCurrent = i === AppState.currentQuestionIndex;

    if (isAnswered) answeredCount++;

    let classes = ["palette-btn"];
    if (isCurrent) classes.push("current");
    if (isAnswered) classes.push("answered");
    if (isFlagged) classes.push("flagged");

    html += `
      <button class="${classes.join(' ')}" onclick="jumpToQuestion(${i})">
        ${i + 1}
      </button>
    `;
  }

  grid.innerHTML = html;
  document.getElementById("paletteAnsweredCount").textContent = `${answeredCount} / ${total}`;
}

function updatePaletteHighlight() {
  const buttons = document.querySelectorAll(".palette-btn");
  buttons.forEach((btn, idx) => {
    if (idx === AppState.currentQuestionIndex) {
      btn.classList.add("current");
    } else {
      btn.classList.remove("current");
    }
  });
}

// =============================================================================
// Submit Confirmation Modal
// =============================================================================

function openSubmitConfirmModal() {
  const total = AppState.activeQuizQuestions.length;
  let answeredCount = 0;
  let flaggedCount = 0;

  AppState.activeQuizQuestions.forEach(q => {
    if (AppState.userAnswers[q.id] !== undefined) answeredCount++;
    if (AppState.flaggedQuestions[q.id]) flaggedCount++;
  });

  const unanswered = total - answeredCount;

  document.getElementById("modalAnsweredCount").textContent = answeredCount;
  document.getElementById("modalUnansweredCount").textContent = unanswered;
  document.getElementById("modalFlaggedCount").textContent = flaggedCount;

  document.getElementById("submitConfirmModal").classList.add("open");
}

function closeSubmitConfirmModal() {
  document.getElementById("submitConfirmModal").classList.remove("open");
}

// =============================================================================
// Results Evaluation & Pure Client-Side Analytics Engine
// =============================================================================

function finalizeExamSubmission() {
  closeSubmitConfirmModal();
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);

  AppState.isSubmitted = true;
  const questions = AppState.activeQuizQuestions;
  const total = questions.length;

  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  const missedQuestions = [];

  // Group metrics by syllabus category
  const categoryStats = {};

  questions.forEach(q => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { total: 0, correct: 0, incorrect: 0, unattempted: 0 };
    }
    categoryStats[q.category].total++;

    const userAns = AppState.userAnswers[q.id];
    if (userAns === undefined) {
      unattemptedCount++;
      categoryStats[q.category].unattempted++;
      missedQuestions.push(q);
    } else if (userAns === q.correctIndex) {
      correctCount++;
      categoryStats[q.category].correct++;
    } else {
      incorrectCount++;
      categoryStats[q.category].incorrect++;
      missedQuestions.push(q);
    }
  });

  const percentage = ((correctCount / total) * 100).toFixed(1);
  const isPass = percentage >= 60.0; // Official 60% IAI Fellowship Benchmark

  // Record session
  const sessionResult = {
    date: new Date().toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    mode: AppState.examMode,
    total,
    score: correctCount,
    percentage: parseFloat(percentage),
    isPass,
    timeTakenSec: AppState.timeElapsedSec,
    categoryStats,
    missedQuestions
  };

  AppState.lastCompletedSession = sessionResult;
  saveAttemptToStorage(sessionResult);

  // Render Results Card
  renderResultsView(sessionResult);
  showView("resultsView");
}

function renderResultsView(res) {
  const statusBadge = document.getElementById("resultStatusBadge");
  const scoreDisplay = document.getElementById("resultScoreDisplay");
  const benchmarkText = document.getElementById("resultBenchmarkText");

  if (res.isPass) {
    statusBadge.className = "result-status-badge pass";
    statusBadge.innerHTML = `✓ PASS (IAI 60% BENCHMARK MET)`;
    benchmarkText.innerHTML = `Outstanding work! You scored <strong>${res.score}/${res.total} (${res.percentage}%)</strong>, passing the mandatory 60% benchmark (minimum 18/30 marks).`;
  } else {
    statusBadge.className = "result-status-badge fail";
    statusBadge.innerHTML = `✗ NOT YET PASSED`;
    benchmarkText.innerHTML = `You scored <strong>${res.score}/${res.total} (${res.percentage}%)</strong>. The IAI Fellowship passing threshold is <strong>60% (18/30 marks)</strong>. Practice missed topics below.`;
  }

  scoreDisplay.textContent = `${res.score} / ${res.total}`;
  document.getElementById("resultPercentage").textContent = `${res.percentage}%`;
  document.getElementById("resultCorrectCount").textContent = res.score;
  document.getElementById("resultIncorrectCount").textContent = res.total - res.score;

  // Format time taken
  const mins = Math.floor(res.timeTakenSec / 60);
  const secs = res.timeTakenSec % 60;
  document.getElementById("resultTimeTaken").textContent = `${mins}m ${secs}s`;

  // Retry missed questions button state
  const retryBtn = document.getElementById("retryIncorrectBtn");
  if (res.missedQuestions.length > 0) {
    retryBtn.style.display = "inline-flex";
    document.getElementById("retryBtnText").textContent = `Retry ${res.missedQuestions.length} Missed Questions`;
  } else {
    retryBtn.style.display = "none";
  }

  // Render Strength & Weakness Breakdown Table
  renderAnalyticsTable(res.categoryStats);

  // Render Question Review with Explanations
  renderReviewList();
}

function renderAnalyticsTable(stats) {
  const tbody = document.getElementById("analyticsTableBody");
  if (!tbody) return;

  const rows = Object.keys(stats).map(cat => {
    const s = stats[cat];
    const acc = s.total > 0 ? ((s.correct / s.total) * 100).toFixed(0) : 0;
    
    let statusClass = "low";
    let statusLabel = "Critical Weakness";
    if (acc >= 75) {
      statusClass = "high";
      statusLabel = "Strong / Mastered";
    } else if (acc >= 50) {
      statusClass = "mid";
      statusLabel = "Moderate Competency";
    }

    return `
      <tr>
        <td><strong>${cat}</strong></td>
        <td>${s.correct} / ${s.total}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div class="progress-track">
              <div class="progress-fill ${statusClass}" style="width: ${acc}%"></div>
            </div>
            <span style="font-weight: 700; font-size: 0.8rem;">${acc}%</span>
          </div>
        </td>
        <td>
          <span style="font-size: 0.8rem; font-weight: 600; color: ${statusClass === 'high' ? 'var(--success)' : statusClass === 'mid' ? 'var(--warning)' : 'var(--danger)'};">
            ${statusLabel}
          </span>
        </td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="startTopicQuiz('${cat}')">
            Practice
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = rows.join("");
}

// =============================================================================
// Review List with Dual Explanations (Correct + Distractor)
// =============================================================================

function renderReviewList() {
  const container = document.getElementById("reviewQuestionsList");
  if (!container) return;

  const questions = AppState.activeQuizQuestions;
  const filter = AppState.reviewFilter;
  const letters = ["A", "B", "C", "D"];

  let correctCount = 0;
  let incorrectCount = 0;
  let flaggedCount = 0;

  questions.forEach(q => {
    const userAns = AppState.userAnswers[q.id];
    if (userAns === q.correctIndex) correctCount++;
    else incorrectCount++;
    if (AppState.flaggedQuestions[q.id]) flaggedCount++;
  });

  document.getElementById("filterAllCount").textContent = questions.length;
  document.getElementById("filterCorrectCount").textContent = correctCount;
  document.getElementById("filterIncorrectCount").textContent = incorrectCount;
  document.getElementById("filterFlaggedCount").textContent = flaggedCount;

  // Filter questions
  const filtered = questions.filter(q => {
    const userAns = AppState.userAnswers[q.id];
    const isCorrect = userAns === q.correctIndex;
    const isFlagged = !!AppState.flaggedQuestions[q.id];

    if (filter === "correct") return isCorrect;
    if (filter === "incorrect") return !isCorrect;
    if (filter === "flagged") return isFlagged;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted);">No questions match the selected filter.</div>`;
    return;
  }

  container.innerHTML = filtered.map((q, idx) => {
    const userAns = AppState.userAnswers[q.id];
    const isCorrect = userAns === q.correctIndex;
    const isSkipped = userAns === undefined;

    let itemClass = isCorrect ? "correct-item" : isSkipped ? "skipped-item" : "incorrect-item";

    const optionsHtml = q.options.map((opt, oIdx) => {
      const isRightOpt = oIdx === q.correctIndex;
      const isUserChoice = oIdx === userAns;

      let optClass = "neutral";
      let statusBadge = "";

      if (isRightOpt) {
        optClass = "correct-choice";
        statusBadge = " ✓ Correct Answer";
      } else if (isUserChoice) {
        optClass = "user-wrong-choice";
        statusBadge = " ✗ Your Selection";
      }

      return `
        <div class="review-option ${optClass}">
          <strong>${letters[oIdx]}.</strong>
          <span>${opt} ${statusBadge ? `<em>(${statusBadge})</em>` : ''}</span>
        </div>
      `;
    }).join("");

    return `
      <div class="review-item-card ${itemClass}">
        <div class="question-header">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <span class="q-number-badge">${q.category}</span>
            <span class="q-source-badge">Source: ${q.source || q.category}</span>
          </div>
          <span style="font-size: 0.8rem; font-weight: 700; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
            ${isCorrect ? '✓ Correct (+1 Mark)' : isSkipped ? '⚠ Unattempted' : '✗ Incorrect (0 Marks)'}
          </span>
        </div>

        <div style="font-weight: 600; font-size: 1.05rem; margin-bottom: 1rem; color: var(--text-main);">
          ${q.question}
        </div>

        <div style="margin-bottom: 1rem;">
          ${optionsHtml}
        </div>

        <div class="explanation-box">
          <div class="exp-section-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Why Option ${letters[q.correctIndex]} is Correct:
          </div>
          <p>${q.explanationCorrect}</p>

          ${q.explanationIncorrect ? `
            <div class="exp-distractor">
              <div class="exp-section-title" style="color: var(--danger); font-size: 0.825rem;">
                Distractor & Misconception Analysis:
              </div>
              <p>${q.explanationIncorrect}</p>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join("");
}

// =============================================================================
// LocalStorage Persistence & History
// =============================================================================

function saveAttemptToStorage(res) {
  try {
    const history = JSON.parse(localStorage.getItem("iai_ifs_attempts") || "[]");
    history.unshift({
      date: res.date,
      mode: res.mode,
      score: res.score,
      total: res.total,
      percentage: res.percentage,
      isPass: res.isPass,
      timeTakenSec: res.timeTakenSec
    });

    // Keep last 15 attempts
    if (history.length > 15) history.pop();
    localStorage.setItem("iai_ifs_attempts", JSON.stringify(history));
  } catch (e) {
    console.error("Could not write to localStorage", e);
  }
}

function loadAttemptHistory() {
  try {
    const history = JSON.parse(localStorage.getItem("iai_ifs_attempts") || "[]");
    const totalAttemptsEl = document.getElementById("statTotalAttempts");
    const bestScoreEl = document.getElementById("statBestScore");
    const bestScoreSubEl = document.getElementById("statBestScoreSub");
    const historyCard = document.getElementById("recentHistoryCard");
    const historyList = document.getElementById("recentHistoryList");

    if (totalAttemptsEl) totalAttemptsEl.textContent = history.length;

    if (history.length > 0) {
      const mockAttempts = history.filter(h => h.mode === "mock");
      if (mockAttempts.length > 0) {
        const best = Math.max(...mockAttempts.map(h => h.percentage));
        if (bestScoreEl) bestScoreEl.textContent = `${best}%`;
        if (bestScoreSubEl) {
          bestScoreSubEl.textContent = best >= 60 ? "✓ Met 60% Benchmark" : "Benchmark: 60% required";
        }
      }

      if (historyCard && historyList) {
        historyCard.style.display = "block";
        historyList.innerHTML = history.slice(0, 5).map(h => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.65rem 0; border-bottom: 1px solid var(--border); font-size: 0.85rem;">
            <div>
              <strong>${h.mode === 'mock' ? '30-Q Mock Exam' : 'Topic Quiz'}</strong>
              <span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 0.5rem;">${h.date}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-weight: 700; color: ${h.isPass ? 'var(--success)' : 'var(--danger)'};">
                ${h.score}/${h.total} (${h.percentage}%)
              </span>
              <span class="cat-badge" style="background: ${h.isPass ? 'var(--success-bg)' : 'var(--danger-bg)'}; color: ${h.isPass ? 'var(--success)' : 'var(--danger)'};">
                ${h.isPass ? 'PASS' : 'FAIL'}
              </span>
            </div>
          </div>
        `).join("");
      }
    } else {
      if (historyCard) historyCard.style.display = "none";
    }
  } catch (e) {
    console.error("Error reading localStorage", e);
  }
}

// =============================================================================
// Event Handlers & Keyboard Shortcuts
// =============================================================================

function setupEventListeners() {
  // Theme Toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("iai_ifs_theme", next);
      updateThemeIcon(next);
    });
  }

  // Sidebar Mobile Toggle
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  const sidebar = document.getElementById("appSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");

  const toggleSidebar = () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  };

  if (sidebarToggleBtn) sidebarToggleBtn.addEventListener("click", toggleSidebar);
  if (overlay) overlay.addEventListener("click", toggleSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", toggleSidebar);

  // Logo Click
  document.getElementById("brandHomeBtn").addEventListener("click", showDashboard);

  // Hero & Header Buttons
  document.getElementById("topStartMockBtn").addEventListener("click", startFullMockExam);
  document.getElementById("heroStartMockBtn").addEventListener("click", startFullMockExam);
  document.getElementById("heroBrowseSyllabusBtn").addEventListener("click", () => {
    openSyllabusModal("pcs");
  });

  // Active Exam Controls
  document.getElementById("flagQuestionBtn").addEventListener("click", toggleFlagQuestion);
  document.getElementById("clearAnswerBtn").addEventListener("click", clearCurrentAnswer);
  document.getElementById("prevQuestionBtn").addEventListener("click", () => navigateQuestion(-1));
  document.getElementById("exitExamBtn").addEventListener("click", () => {
    if (confirm("Are you sure you want to exit the exam? Your progress will be lost.")) {
      showDashboard();
    }
  });
  document.getElementById("finishExamTopBtn").addEventListener("click", openSubmitConfirmModal);
  document.getElementById("submitExamBottomBtn").addEventListener("click", openSubmitConfirmModal);

  // Submit Modal Handlers
  document.getElementById("cancelSubmitModalBtn").addEventListener("click", closeSubmitConfirmModal);
  document.getElementById("returnToExamBtn").addEventListener("click", closeSubmitConfirmModal);
  document.getElementById("confirmSubmitFinalBtn").addEventListener("click", finalizeExamSubmission);

  // Syllabus Modal Handlers
  document.getElementById("closeSyllabusModalBtn").addEventListener("click", closeSyllabusModal);
  document.getElementById("closeSyllabusModalBtn2").addEventListener("click", closeSyllabusModal);

  // Results Controls
  document.getElementById("retryIncorrectBtn").addEventListener("click", retryMissedQuestions);
  document.getElementById("newMockFromResultsBtn").addEventListener("click", startFullMockExam);
  document.getElementById("backToDashFromResultsBtn").addEventListener("click", showDashboard);

  // Filter Pills for Review List
  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", (e) => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      AppState.reviewFilter = pill.getAttribute("data-filter");
      renderReviewList();
    });
  });

  // Clear History
  const clearHistBtn = document.getElementById("clearHistoryBtn");
  if (clearHistBtn) {
    clearHistBtn.addEventListener("click", () => {
      if (confirm("Reset and clear all saved mock attempt history?")) {
        localStorage.removeItem("iai_ifs_attempts");
        loadAttemptHistory();
      }
    });
  }

  // Keyboard Shortcuts for Rapid Candidate Practice
  document.addEventListener("keydown", (e) => {
    // Only in active exam view
    if (document.getElementById("examView").style.display !== "block") return;
    if (document.getElementById("submitConfirmModal").classList.contains("open")) return;
    if (document.getElementById("syllabusModal").classList.contains("open")) return;

    if (e.key === "ArrowLeft") {
      navigateQuestion(-1);
    } else if (e.key === "ArrowRight") {
      navigateQuestion(1);
    } else if (e.key.toLowerCase() === "f") {
      toggleFlagQuestion();
    } else if (["1", "2", "3", "4"].includes(e.key)) {
      selectOption(parseInt(e.key, 10) - 1);
    } else if (["a", "b", "c", "d"].includes(e.key.toLowerCase())) {
      const map = { a: 0, b: 1, c: 2, d: 3 };
      selectOption(map[e.key.toLowerCase()]);
    }
  });
}
