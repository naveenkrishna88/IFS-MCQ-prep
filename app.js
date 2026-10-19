/**
 * IAI IFS Professionalism MCQ Simulator - Core Application Logic
 * 100% Static Client-Side Architecture (Vanilla JS)
 * Optimized for GitHub Pages Deployment
 */

// =============================================================================
// Syllabus Knowledge Base & Topic Meta (Comprehensive Study Guides)
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
      <h4>1. Legal Authority, Scope & Primacy of Law</h4>
      <ul>
        <li><strong>Statutory Authority:</strong> Issued by the IAI Council under Section 19(2)(i) of the Actuaries Act, 2006. Version 4.0 took effect on <strong>04 September 2021</strong>.</li>
        <li><strong>Universal Scope:</strong> Applies to <em>all</em> categories of members — Fellows (FIAI), Associates (AIAI), Students, and Affiliates — regardless of practice area, employment status, or geographic location.</li>
        <li><strong>Primacy of Statutory Law (Para 1.2):</strong> Where professional guidance, PCS, or internal employer standards conflict with statutory or judicial legal requirements, <strong>the requirements of law strictly prevail</strong>.</li>
        <li><strong>Ignorance Defense Prohibited (Para 5.1):</strong> Ignorance of the PCS, Actuaries Act, or relevant guidance notes cannot justify or excuse professional misconduct.</li>
      </ul>

      <h4>2. Integrity, Objectivity & Duty of Care</h4>
      <ul>
        <li><strong>High Standard of Conduct:</strong> Members must act with honesty, competence, and highest professional integrity, upholding the reputation of the profession and never bringing the Institute into disrepute (Para 2.1).</li>
        <li><strong>Objectivity & Professional Independence:</strong> Actuarial advice must be impartial, unbiased, and free from improper commercial or personal influence.</li>
        <li><strong>Substance over Form:</strong> Complying merely with technical formulas while disregarding economic reality or misleading users constitutes misconduct.</li>
      </ul>

      <h4>3. Duty of Confidentiality & Three Permissible Exceptions (Para 3.2)</h4>
      <ul>
        <li><strong>Legal Duty:</strong> Client and former client affairs are strictly confidential as a matter of law. Information obtained in a professional capacity must never be disclosed or used for personal advantage.</li>
        <li><strong>Three Strict Exceptions to Confidentiality:</strong>
          <ol>
            <li><strong>Legal or Statutory Obligation:</strong> Compelled by a competent court of law, statutory regulator (IRDAI, ED, Tax Authority), or under express statutory provisions.</li>
            <li><strong>Public Interest Disclosure:</strong> Where non-disclosure would permit fraud, major financial illegality, or grave public harm (actuary must seek independent legal counsel before disclosure).</li>
            <li><strong>Own Professional Protection:</strong> Defending oneself in official disciplinary proceedings or legal suits where client conduct is directly at issue.</li>
          </ol>
        </li>
      </ul>

      <h4>4. Conflict of Interest & Informed Consent (Para 4)</h4>
      <ul>
        <li><strong>Identification:</strong> Members must proactively identify any actual, potential, or perceived conflicts of interest before accepting or continuing an engagement.</li>
        <li><strong>Full Disclosure:</strong> Immediate written disclosure of the nature and extent of the conflict to all affected parties.</li>
        <li><strong>Informed Consent & Safeguards:</strong> Actuary can only act if all parties explicitly grant informed written consent <em>and</em> robust organizational safeguards (e.g. independent review actuaries, information barriers / Chinese walls) ensure objectivity.</li>
      </ul>

      <h4>5. Change of Actuarial Advisor & The Mandatory 10-Day Handover Rule (Para 7.2)</h4>
      <ul>
        <li><strong>Client Autonomy:</strong> Clients have an absolute, unconditional right to choose, replace, or terminate professional advisors at their sole discretion.</li>
        <li><strong>Mandatory Written Inquiry:</strong> A newly approached actuary <strong>must write to the incumbent actuary</strong> as early as possible before formally accepting the appointment, asking whether there are any professional reasons why the appointment should not be accepted.</li>
        <li><strong>Incumbent's 10-Day Obligation:</strong> The incumbent actuary <strong>must respond in writing no later than 10 days</strong> from receipt of the letter. The incumbent must disclose all professional matters relevant to the successor and must make <strong>zero attempt to obstruct, delay, or penalize</strong> the client's transition.</li>
        <li><strong>Mandatory Refusal if Client Withholds Consent (Para 7.3):</strong> If the prospective client refuses permission to write to the incumbent actuary, the newly approached actuary <strong>MUST decline the appointment unconditionally</strong>.</li>
      </ul>

      <h4>6. Misconduct Reporting & Mutual Notification (Para 5.2 - 5.5)</h4>
      <ul>
        <li><strong>Self-Reporting Duty:</strong> A member who realizes they have committed an unrectifiable material professional breach must immediately self-report to the IAI.</li>
        <li><strong>Peer Misconduct Protocol:</strong> Upon discovering apparent misconduct by another member:
          <ol>
            <li>Discuss directly with the peer to seek clarification and explore immediate rectification (if appropriate and non-prejudicial).</li>
            <li>If unresolved, inappropriate, or involving fraud/material misconduct, promptly lodge a formal complaint with the Director (Discipline).</li>
          </ol>
        </li>
        <li><strong>Cross-Border Reciprocity:</strong> Any disciplinary sanction, conviction, or suspension imposed on an IAI member by a foreign actuarial body (IFoA, SOA, CAS, etc.) or regulatory court must be immediately notified in writing to the IAI Council.</li>
      </ul>

      <h4>7. Commercial Practices, Fees & Advertising (Para 6.7 & 8)</h4>
      <ul>
        <li><strong>Contingency & Success Fees:</strong> Contingency fees or success-dependent fee structures that compromise actuarial objectivity and independence violate PCS.</li>
        <li><strong>Permissible Publicity:</strong> An actuary or firm may publish informative descriptions of services, experience, and fee bases.</li>
        <li><strong>Prohibited Advertising:</strong> False or exaggerated claims of superiority, disparaging comparisons with competitors, breach of peer confidentiality, or misleadingly implying official IAI endorsement.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>Law ALWAYS overrides PCS and employer policies.</li>
          <li>Refusal of client consent to contact incumbent = Mandatory refusal of appointment.</li>
          <li>Incumbent response timeline = Exactly 10 calendar days.</li>
          <li>Confidentiality survives client termination; only 3 exceptions exist (Statute, Public Interest, Legal Defense).</li>
        </ul>
      </div>
    `
  },
  {
    id: "act",
    category: "Actuaries Act 2006 & Statutory Framework",
    shortTitle: "Actuaries Act 2006 & Statutory Law",
    ref: "Statutory Act of Parliament No. 35 of 2006",
    icon: "🏛️",
    desc: "Statutory incorporation of IAI, Council composition (Sec 12), Certificate of Practice (Sec 9), and Quality Review Board (Sec 43).",
    briefHtml: `
      <h4>1. Legislative Origin & Incorporation (Sections 1–5)</h4>
      <ul>
        <li><strong>Enactment:</strong> Act No. 35 of 2006 enacted by Parliament; received Presidential assent on 27 August 2006 and came into force on <strong>10 November 2006</strong>.</li>
        <li><strong>Statutory Body Corporate (Section 3):</strong> Establishes the <strong>Institute of Actuaries of India (IAI)</strong> with perpetual succession and common seal. Headquartered in Mumbai (currently Seawoods Grand Central, Navi Mumbai).</li>
        <li><strong>Dissolution of ASI (Section 4):</strong> The erstwhile Actuarial Society of India (ASI, founded 1944) was formally dissolved, transferring all assets, liabilities, records, and employees to the statutory IAI.</li>
      </ul>

      <h4>2. Membership Classes & Register (Sections 6–11)</h4>
      <ul>
        <li><strong>Classes of Members (Section 6):</strong> Fellows (FIAI), Associates (AIAI), Students, and Honorary/Affiliate members.</li>
        <li><strong>Mandatory Certificate of Practice (COP - Section 9):</strong> No member can engage in actuarial practice in India — whether in individual practice, as a partner in an actuarial firm, or as a signing Appointed Actuary — without holding an active annual COP issued by the Council.</li>
        <li><strong>Removal from Register (Section 11):</strong> The Council must remove a member upon death, failure to pay annual subscription fees, declaration of unsound mind by a competent court, undischarged insolvency, or expulsion pursuant to a Disciplinary order.</li>
      </ul>

      <h4>3. Council Composition & Term of Office (Sections 12–14)</h4>
      <ul>
        <li><strong>Maximum Size:</strong> Council consists of a maximum of <strong>16 members</strong>:
          <ul>
            <li>At least <strong>9 members</strong> elected by Fellows and Associates from among themselves.</li>
            <li>Up to <strong>4 members nominated by the Central Government</strong> (representing Ministry of Finance, IRDAI, or insurance/financial sector).</li>
            <li>Up to <strong>3 members</strong> nominated or ex-officio.</li>
          </ul>
        </li>
        <li><strong>Term:</strong> Council holds office for a period of <strong>3 years</strong> from the date of constitution.</li>
        <li><strong>Office Bearers (Section 17):</strong> President, Vice-President, and Honorary Secretary elected by Council from among its elected members.</li>
      </ul>

      <h4>4. Powers and Duties of Council (Section 19)</h4>
      <ul>
        <li>Prescribe syllabus, conduct examinations, admit members, and grant Certificates of Practice.</li>
        <li>Formulate Regulations with the <strong>prior approval of the Central Government</strong>.</li>
        <li>Prescribe mandatory Actuarial Practice Standards (APSs), Guidance Notes (GNs), and CPD requirements.</li>
      </ul>

      <h4>5. Quality Review Board (QRB - Sections 43 & 44)</h4>
      <ul>
        <li><strong>Constitution:</strong> Established by the <strong>Central Government</strong> under Section 43(1).</li>
        <li><strong>Composition:</strong> Chairperson (eminent person) + <strong>4 other members</strong> (2 nominated by Central Government, 2 nominated by Council). Tenure is 3 years.</li>
        <li><strong>Three Statutory Functions (Section 44):</strong>
          <ol>
            <li>To fix standards for services provided by members of the Institute.</li>
            <li>To review the quality of services provided by members, including actuarial audit services.</li>
            <li>To guide members on improving quality and statutory/regulatory adherence.</li>
          </ol>
        </li>
      </ul>

      <h4>6. Penalties & Offences (Sections 38, 39 & 41)</h4>
      <ul>
        <li><strong>Section 38 (False Claim of Membership / Practicing without COP):</strong>
          <ul>
            <li>First Conviction: Fine up to <strong>Rs. 1,000</strong>.</li>
            <li>Subsequent Convictions: Imprisonment up to <strong>6 months</strong>, or fine up to <strong>Rs. 5,000</strong>, or both.</li>
          </ul>
        </li>
        <li><strong>Section 39 (Misuse of Institute Name / Awarding Fake Diplomas):</strong> Fine up to <strong>Rs. 10,000</strong>.</li>
      </ul>

      <h4>7. Statutory Appellate Authority (Section 36)</h4>
      <ul>
        <li>Any member or complainant aggrieved by an order of the Board of Discipline or Disciplinary Committee may appeal to the Appellate Authority.</li>
        <li><strong>Limitation Period:</strong> Exactly <strong>90 days</strong> from the date the order is communicated.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>Act 35 of 2006 took effect 10 Nov 2006 (repealed ASI).</li>
          <li>Council has max 16 members (min 9 elected, max 4 Govt nominees); 3-year term.</li>
          <li>QRB is appointed by Central Govt (Chair + 4 members); 3-year term.</li>
          <li>Appellate Authority limitation window = Exactly 90 days.</li>
          <li>Section 38 penalizes unlawful practice / false membership claim.</li>
        </ul>
      </div>
    `
  },
  {
    id: "gov",
    category: "IAI Governance, Committees & QRB",
    shortTitle: "IAI Governance & Council Guidelines",
    ref: "IAI Website Governance & Council Guidelines",
    icon: "👔",
    desc: "Institutional governance, Council powers under Sec 19, 8 Section 21 Committees, 12 Advisory Groups, and Council Guidelines.",
    briefHtml: `
      <h4>1. Council Powers & Institutional Architecture (Section 19)</h4>
      <ul>
        <li><strong>Administrative Apex:</strong> Council governs the Institute, manages its assets, conducts elections, and regulates actuarial education, admission, and discipline.</li>
        <li><strong>Subordinate Legislation:</strong> Council makes regulations with prior approval of the Central Government. All regulations must be laid before both Houses of Parliament.</li>
      </ul>

      <h4>2. Statutory Standing Committees under Section 21</h4>
      <p>Under Section 21 of the Act, Council constitutes specialized executive committees to discharge core responsibilities:</p>
      <ul>
        <li><strong>1. Professionalism Committee:</strong> Oversees professional ethics, PCS reviews, and guidance interpretation.</li>
        <li><strong>2. Audit Committee:</strong> Ensures fiscal integrity, internal controls, and statutory audit compliance.</li>
        <li><strong>3. Finance, HR, IT and Admin Committee:</strong> Budgetary administration, secretariat staff, and technology infrastructure.</li>
        <li><strong>4. Education and Examination Committee:</strong> Examination curriculum, paper setting secrecy, center logistics, and pass standards.</li>
        <li><strong>5. Wider Fields Committee:</strong> Promotes actuarial employment in non-traditional domains (data science, climate risk, analytics).</li>
        <li><strong>6. Research and Innovation Committee:</strong> Fosters empirical actuarial research and working group publications.</li>
        <li><strong>7. Student Growth and Success Committee:</strong> Student support schemes, mentorship, and career counseling.</li>
        <li><strong>8. External Affairs and Research Committee:</strong> Liaison with international actuarial bodies (IAA) and financial regulators.</li>
      </ul>

      <h4>3. Practice Advisory Groups (PAGs / AGs)</h4>
      <p>Technical advisory groups providing domain-specific expertise across 12 disciplines:</p>
      <ol>
        <li>Life Insurance</li>
        <li>General Insurance</li>
        <li>Health Care Insurance</li>
        <li>Pension & Other Employee Benefits & Social Security</li>
        <li>Sustainable Development & Micro Insurance</li>
        <li>Risk Management (ERM)</li>
        <li>Banking, Finance & Investments</li>
        <li>Agriculture & Rural Risk Management</li>
        <li>Professionalism, Ethics & Conduct</li>
        <li>Education</li>
        <li>Examination</li>
        <li>Communication</li>
      </ol>

      <h4>4. Quality Review Board (QRB - Section 43 & 2008 Rules)</h4>
      <ul>
        <li><strong>Composition:</strong> Chairperson (Supratim Bandyopadhyay) + 4 members (2 Central Govt nominees: Sanjeev Kumar Pujari, G. Ramaswamy; 2 Council nominees: Gopal Kumar Vishwanath Roy, Padmaja Raghunathan).</li>
        <li><strong>Part-time appointment:</strong> 3-year tenure governed by the Actuaries QRB Rules, 2008.</li>
        <li><strong>Mandate:</strong> Fix service standards, review service quality (including statutory actuarial audits), and advise Council on quality enhancement.</li>
      </ul>

      <h4>5. Key Council Guidelines Published on IAI Portal</h4>
      <ul>
        <li><strong>Procedure of Conducting AGM:</strong> Approved by Council on 2 March 2013; governs notice, quorum, and voting.</li>
        <li><strong>Video Conferencing Meetings:</strong> Formal protocol for virtual Council and Committee deliberations.</li>
        <li><strong>Permitted Other Services (Sec 2(2)(iii)):</strong> Specifies non-actuarial commercial services a practicing member may render without breach.</li>
        <li><strong>Clarification on Section 39:</strong> Regulates the use of 'Actuary' titles and institutional logos.</li>
        <li><strong>Principles & Procedures for Issuance of APSs/GNs (Versions 3, 4, 5):</strong> Standardized due process for drafting, public exposure draft consultation, PAG review, and Council enactment.</li>
        <li><strong>Social Media Usage:</strong> Professionalism guidelines holding members accountable for online commentary damaging the profession.</li>
      </ul>

      <h4>6. India Fellowship Seminar (IFS)</h4>
      <ul>
        <li><strong>Mandatory Prerequisite:</strong> Compulsory transition seminar required before admission as a Fellow (FIAI).</li>
        <li><strong>Exam Benchmark:</strong> 30 scenario MCQs in 60 minutes with a strict <strong>60% passing benchmark (18 out of 30 marks)</strong> with no negative marking.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>Section 21 establishes 8 statutory committees of the Council.</li>
          <li>12 Advisory Groups cover traditional insurance, ERM, banking, and agriculture.</li>
          <li>QRB consists of Chair + 4 members (2 Govt + 2 Council); 3-year term.</li>
          <li>IFS examination requires 60% (18/30) to qualify for Fellowship admission.</li>
        </ul>
      </div>
    `
  },
  {
    id: "disc",
    category: "Disciplinary Process & Misconduct",
    shortTitle: "Disciplinary Process & 2008 Rules",
    ref: "Sections 26-31 of Act & Disciplinary Rules 2008",
    icon: "🔨",
    desc: "Director (Discipline) prima facie opinion, First Schedule (Board of Discipline) vs Second Schedule (Disciplinary Committee).",
    briefHtml: `
      <h4>1. The Disciplinary Directorate & Director (Discipline) (Section 28)</h4>
      <ul>
        <li><strong>Administrative Custodian:</strong> Headed by the <strong>Director (Discipline)</strong> appointed by the Council under Section 28.</li>
        <li><strong>Receipt of Information / Complaints:</strong> Receives complaints in prescribed format along with evidence. Director can also initiate investigations <em>suo motu</em> on Council instructions.</li>
        <li><strong>Symmetrical 21-Day Pleadings:</strong>
          <ul>
            <li>Director sends complaint to respondent actuary, who must file a written statement of defense within <strong>21 days</strong>.</li>
            <li>Defense is provided to the complainant, who has <strong>21 days</strong> to submit a rejoinder.</li>
          </ul>
        </li>
        <li><strong>Prima Facie Opinion:</strong> Director examines all pleadings and delivers a <em>prima facie opinion</em> within <strong>60 days</strong> classifying misconduct under the First or Second Schedule.</li>
      </ul>

      <h4>2. First Schedule Misconduct & Board of Discipline (Sections 26 & 29)</h4>
      <ul>
        <li><strong>Composition:</strong> Council member as Presiding Officer + <strong>2 other members</strong> (one Council member, one external nominee).</li>
        <li><strong>Jurisdiction:</strong> Professional misconduct of relatively minor nature (e.g. soliciting clients directly, unauthorized letterheads, fee-splitting with non-members, failing to reply to 10-day handover inquiry).</li>
        <li><strong>Statutory Penalties (Section 29):</strong>
          <ol>
            <li><strong>Reprimand</strong> of the member.</li>
            <li><strong>Suspension</strong> from membership for up to <strong>three months</strong>.</li>
            <li><strong>Fine</strong> up to <strong>Rs. 1,00,000 (Rupees One Lakh)</strong>.</li>
          </ol>
        </li>
      </ul>

      <h4>3. Second Schedule Misconduct & Disciplinary Committee (Sections 26 & 30)</h4>
      <ul>
        <li><strong>Composition:</strong> President or Vice-President as Presiding Officer + <strong>2 Council members</strong> + <strong>2 external experts nominated by Central Government</strong> (Total: 5 members).</li>
        <li><strong>Jurisdiction:</strong> Severe professional or other misconduct (gross negligence, certifying reserves without verifying data, embezzlement, moral turpitude, breach of statutory duties).</li>
        <li><strong>Statutory Penalties (Section 30):</strong>
          <ol>
            <li><strong>Reprimand</strong> of the member.</li>
            <li><strong>Suspension</strong> or <strong>Permanent Removal</strong> of the member's name from the Register.</li>
            <li><strong>Fine</strong> up to <strong>Rs. 5,00,000 (Rupees Five Lakhs)</strong>.</li>
          </ol>
        </li>
      </ul>

      <h4>4. Powers of Civil Court & Natural Justice (Section 31)</h4>
      <ul>
        <li>The Board of Discipline and Disciplinary Committee have the same powers as a <strong>Civil Court under the Code of Civil Procedure, 1908</strong> in respect of:
          <ul>
            <li>Summoning and enforcing attendance of witnesses and examining them on oath.</li>
            <li>Discovery and production of documents.</li>
            <li>Receiving evidence on affidavits.</li>
            <li>Issuing commissions for examination of witnesses.</li>
          </ul>
        </li>
      </ul>

      <h4>5. Statutory Appeals to the Appellate Authority (Section 36)</h4>
      <ul>
        <li>Aggrieved members or complainants have an unconditional statutory right to appeal against any order of the Board of Discipline or Disciplinary Committee.</li>
        <li><strong>Limitation Period:</strong> Exactly <strong>90 days</strong> from the date of communication of the order.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>Director (Discipline) forms prima facie opinion within 60 days.</li>
          <li>Pleadings timeline: 21 days for defense, 21 days for rejoinder.</li>
          <li>Board of Discipline: max 3 months suspension; max Rs. 1 Lakh fine.</li>
          <li>Disciplinary Committee: permanent removal; max Rs. 5 Lakhs fine.</li>
          <li>Appellate Authority limitation window = Exactly 90 days.</li>
        </ul>
      </div>
    `
  },
  {
    id: "std",
    category: "Student Code of Conduct",
    shortTitle: "Student Code of Conduct (2026)",
    ref: "IAI Student Code (Effective 17.01.2026)",
    icon: "🎓",
    desc: "Student Disciplinary Committee (SDC), Rs. 1,000 complaint fee, 15-day mediation, 21-day defense/rejoinder, Rs. 20,000 fine cap.",
    briefHtml: `
      <h4>1. Scope, Purpose & Applicability (Clauses 1–3)</h4>
      <ul>
        <li><strong>Effective Date:</strong> Takes effect on <strong>17 January 2026</strong>, governing all registered student members, exam candidates, seminar attendees, and Associates/Fellows when taking examinations.</li>
        <li><strong>Foundational Standard:</strong> Students are prospective actuaries and must demonstrate the highest ethical standards of integrity, respect, academic honesty, and collegiality.</li>
      </ul>

      <h4>2. Student Disciplinary Committee (SDC - Clause 9)</h4>
      <ul>
        <li><strong>Composition:</strong> Minimum of <strong>three members</strong> appointed by Council (including at least one Council member who chairs, and senior Fellows).</li>
        <li><strong>Procedure:</strong> Summary inquiry in accordance with the Principles of Natural Justice (audi alteram partem — right to be heard).</li>
      </ul>

      <h4>3. Complaint Filing, Mediation & Investigation Timelines</h4>
      <ul>
        <li><strong>Complaint Format:</strong> Must be submitted in <strong>triplicate</strong>, verified by affidavit, accompanied by a non-refundable fee of <strong>Rs. 1,000</strong> to the Executive Director / Head of Examination.</li>
        <li><strong>Suo Motu Inquiries:</strong> The Institute or Head of Examination may initiate proceedings <em>suo motu</em> without an external complaint (e.g. proctoring AI alerts, leaked exam questions).</li>
        <li><strong>Mediation Window (Clause 11):</strong> Within <strong>15 working days</strong>, informal conciliation/mediation may be attempted if both parties consent.</li>
        <li><strong>Symmetrical 21-Day Investigation:</strong>
          <ul>
            <li>Respondent student has <strong>21 days</strong> to submit a written statement of defense.</li>
            <li>Complainant has <strong>21 days</strong> to file a rejoinder.</li>
          </ul>
        </li>
      </ul>

      <h4>4. Prohibited Student Misconducts</h4>
      <ul>
        <li><strong>Cheating & Collusion:</strong> Possession of prohibited devices, impersonation, using AI tools during exams, unauthorized collaboration.</li>
        <li><strong>Unlawful Title Usage:</strong> Falsely claiming to be an 'Actuary', using 'FIAI' or 'AIAI' before admission to membership.</li>
        <li><strong>Harassment & Defamation:</strong> Bullying peers, disparaging examiners on social media, or threatening staff.</li>
      </ul>

      <h4>5. Penalties & Appellate Hierarchy (Schedule II)</h4>
      <ul>
        <li><strong>Scale of Penalties:</strong>
          <ol>
            <li>Written reprimand / admonition.</li>
            <li>Fine up to a maximum cap of <strong>Rs. 20,000</strong>.</li>
            <li>Cancellation of examination results / forfeiture of examination fees.</li>
            <li>Debarment from taking IAI examinations for up to <strong>5 years</strong>.</li>
            <li>Permanent cancellation of student registration.</li>
          </ol>
        </li>
        <li><strong>Appeals:</strong> Appeal lies to the <strong>President of the Institute</strong> within <strong>90 days</strong> of order communication.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>Complaint fee = Rs. 1,000 non-refundable; submitted in triplicate.</li>
          <li>Mediation window = 15 working days; Defense & Rejoinder = 21 days each.</li>
          <li>SDC maximum monetary fine = Rs. 20,000.</li>
          <li>Appeals lie to the President of IAI within 90 days.</li>
        </ul>
      </div>
    `
  },
  {
    id: "aps9",
    category: "APS 9: Continuing Professional Development (CPD)",
    shortTitle: "APS 9: Professional Development",
    ref: "APS 9 (v4.00) under Section 19(2)(i)",
    icon: "📖",
    desc: "Mandatory 24h CPD for COP holders (15 tech + 6 prof + 3 other), +8h per extra area, Category 2 (15h), 5-yr records & 1st July web listing.",
    briefHtml: `
      <h4>1. Core Purpose & Legal Authority</h4>
      <ul>
        <li><strong>Statutory Origin:</strong> Issued under Section 19(2)(i) of the Actuaries Act, 2006. Version 4.00 ensures all actuaries maintain contemporary professional and technical competence.</li>
        <li><strong>Compliance Year:</strong> Runs annually from <strong>1st April to 31st March</strong>.</li>
      </ul>

      <h4>2. Fellowship Categories & Mandatory Annual Hours (Section 4)</h4>
      <ul>
        <li><strong>Category 1: Fellow with Certificate of Practice (COP Holders):</strong>
          <ul>
            <li>Minimum total: <strong>24 verifiable CPD hours per year</strong>.</li>
            <li>At least <strong>15 hours</strong> must be verifiable technical CPD in their primary practice area (Life, GI, Health, Pensions).</li>
            <li>At least <strong>6 hours</strong> must be verifiable professional conduct and ethics CPD.</li>
            <li>Maximum 3 hours of other verifiable development.</li>
            <li><strong>Additional Practice Area Rule:</strong> Any COP holder practicing in more than one area must complete an <strong>additional 8 technical CPD hours</strong> for each supplementary area!</li>
          </ul>
        </li>
        <li><strong>Category 2: Active Fellows without COP:</strong>
          <ul>
            <li>Minimum total: <strong>15 verifiable CPD hours per year</strong> (at least 9 technical, at least 3 professional, max 3 other).</li>
            <li>Mutual recognition exemption: If compliant with CPD rules of a recognized overseas body (IFoA, SOA, etc.), full exemption is granted upon submitting evidence.</li>
          </ul>
        </li>
        <li><strong>Category 3: Inactive Fellows:</strong>
          <ul>
            <li>Members who have fully retired from professional actuarial practice but wish to retain the FIAI title.</li>
            <li>Must apply in writing at least <strong>3 months prior</strong> to the end of the membership year. Exempt from annual CPD.</li>
          </ul>
        </li>
      </ul>

      <h4>3. Verifiable Learning & Daily Conversion Scale (Section 9)</h4>
      <ul>
        <li><strong>Verifiable Criteria:</strong> Organized learning with verified attendance, certificates, syllabus notes, or official recording (webinars, IFS, conferences).</li>
        <li><strong>Strict Daily Conversion Brackets:</strong>
          <ul>
            <li>Under 0.5 hour = <strong>0 CPD hours</strong>.</li>
            <li>0.5 to &lt; 1.5 hours = <strong>1 CPD hour</strong>.</li>
            <li>1.5 to &lt; 2.5 hours = <strong>2 CPD hours</strong>.</li>
            <li>2.5 to &lt; 3.5 hours = <strong>3 CPD hours</strong>.</li>
            <li>3.5 to &lt; 4.5 hours = <strong>4 CPD hours</strong>.</li>
            <li>4.5 to &lt; 5.5 hours = <strong>5 CPD hours</strong>.</li>
            <li><strong>5.5 hours or more = 6 CPD hours (Maximum credit per day)</strong>. Excludes meal breaks.</li>
          </ul>
        </li>
      </ul>

      <h4>4. Self-Attestation, Audits & Non-Compliance Listing (Sections 10–12)</h4>
      <ul>
        <li><strong>Self-Attestation Deadline:</strong> Annual self-attestation must be submitted online by <strong>31st May</strong> (within 2 months of year-end).</li>
        <li><strong>5-Year Record Retention:</strong> Members must preserve original CPD evidence, logs, and certificates for at least <strong>5 years</strong> (e.g., FY 2020-21 records kept until FY 2025-26).</li>
        <li><strong>Random Audit:</strong> Council selects a random sample of members annually for audit verification.</li>
        <li><strong>Public Listing of Defaulters:</strong> Names of non-compliant members are publicly posted on the IAI website on <strong>1st July</strong> each year; repeat defaults result in COP revocation and disciplinary referral.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>COP Holder = 24 hours (min 15 technical + 6 professional); +8h per extra practice area.</li>
          <li>Active Fellow without COP = 15 hours (min 9 tech + 3 prof).</li>
          <li>Max CPD credit per single calendar day = Exactly 6 hours (&ge; 5.5h).</li>
          <li>Attestation deadline = 31st May; Public website listing = 1st July.</li>
          <li>CPD records retention = Exactly 5 years.</li>
        </ul>
      </div>
    `
  },
  {
    id: "aps34",
    category: "APS 34: General Actuarial Practice Standard",
    shortTitle: "APS 34: General Practice Standard",
    ref: "APS 34 (ISAP 1) Effective 29 Dec 2021",
    icon: "📑",
    desc: "General practice definitions ('Must' vs 'Should'), data quality, model governance, peer review, documentation retention, and the 11 mandatory report disclosures.",
    briefHtml: `
      <h4>1. Legislative Authority, Purpose & Universal Scope</h4>
      <ul>
        <li><strong>Statutory Origin:</strong> Approved and adopted by the Council of the Institute of Actuaries of India on 4 September 2021 under Section 19(2)(i) of the Actuaries Act, 2006. Effective from <strong>29 December 2021</strong>.</li>
        <li><strong>Global Alignment:</strong> Modeled directly on the International Standard of Actuarial Practice 1 (<strong>ISAP 1</strong>) issued by the International Actuarial Association (IAA).</li>
        <li><strong>Universal Applicability:</strong> Applies to <em>all</em> actuarial services performed by members of the IAI across all practice areas (Life, GI, Health, Pensions, Banking, ERM). Specific practice standards (e.g. APS 2, APS 9) take precedence over general guidance in APS 34 in case of conflict.</li>
      </ul>

      <h4>2. Drafting Language Conventions & Compliance Gateways (Section 1.6)</h4>
      <ul>
        <li><strong>'Must':</strong> An absolute, unconditional requirement. Departure is only permissible if directly conflicting with statutory law or judicial order.</li>
        <li><strong>'Should':</strong> Standard actuarial practice with a rebuttable presumption. Departure is permitted only if following it would produce an inappropriate or misleading result, provided the actuary discloses the nature, rationale, and impact of the departure.</li>
        <li><strong>'May':</strong> Permissible practice; indicates a discretionary course of action.</li>
        <li><strong>Gateways to Full Compliance:</strong> An actuary who departs from specific guidance in APS 34 is still in full compliance if:
          <ol>
            <li>The departure is compelled by conflicting statutory law/regulation; or</li>
            <li>The departure is compelled by a specific practice-area APS; or</li>
            <li>The actuary departs from a 'should' requirement, documents the justification, and discloses the departure and its effect in the report.</li>
          </ol>
        </li>
      </ul>

      <h4>3. Appropriate Practices Framework (Section 2)</h4>
      <ul>
        <li><strong>2.1 Acceptance of Assignment:</strong> Actuary must confirm competence, professional indemnity, clarity of terms of reference, and absence of unmitigated conflicts before accepting work.</li>
        <li><strong>2.3 Reliance on Others & Disclaimers:</strong> An actuary may rely on data, projections, or subject matter expert opinions provided by the principal or third parties. If the actuary does not verify or disclaims responsibility for such reliance, the actuary <strong>must disclose the reliance and disclaimer in the report</strong>.</li>
        <li><strong>2.4 Materiality:</strong> Judged from the perspective of the intended users. An omission, understatement, or overstatement is material if it could reasonably influence the decisions or actions of intended users.</li>
        <li><strong>2.5 Data Quality:</strong> Actuary should review data for completeness, accuracy, and consistency. Material data deficiencies, adjustments, and modifications must be explicitly disclosed.</li>
        <li><strong>2.6 - 2.9 Assumptions & Methodology:</strong>
          <ul>
            <li><strong>Actuary-set assumptions:</strong> Must be justifiable individually and reasonable in the aggregate (prudence in multiple individual assumptions must not cause an unreasonable aggregate distortion).</li>
            <li><strong>Prescribed assumptions (by Principal/Client):</strong> If actuary cannot support the prescribed assumption, the actuary must disclose that fact, the party who prescribed it, and the reason why that party set it.</li>
            <li><strong>Mandated by Law:</strong> Disclose that the assumption/methodology was mandated by statute and whether it limits relevance for other purposes.</li>
            <li><strong>Discontinuities & Sensitivities:</strong> Consider internal/external discontinuities and perform sensitivity testing on key assumptions.</li>
          </ul>
        </li>
        <li><strong>2.10 Model Governance:</strong> Applies to all decision-support models (from simple spreadsheets to complex stochastic platforms):
          <ul>
            <li>Model validation must be performed by individuals <strong>independent of model development</strong>.</li>
            <li>Change control procedures must prevent unauthorized changes, document impact, and allow complete reversal.</li>
            <li>Actuary must understand model limitations and disclose management actions/responses assumed in models.</li>
          </ul>
        </li>
        <li><strong>2.12 Peer Review:</strong> Actuary should consider whether independent peer review is appropriate. The reviewer must be independent of the engagement and experienced in the practice area.</li>
        <li><strong>2.13 Subsequent Events:</strong> Actuary must consider and disclose any event occurring between the valuation date and report date that would materially affect results.</li>
        <li><strong>2.14 Documentation Retention:</strong> Actuary must retain working papers for a reasonable period. Documentation is legally sufficient when <strong>another actuary qualified in the same practice area can review the work, understand the methodology, replicate the calculations, and evaluate the reasonableness of all judgments</strong>.</li>
      </ul>

      <h4>4. The 11 Mandatory Disclosures in an Actuarial Report (Section 3.2.2)</h4>
      <p>Under Section 3.2.2 of APS 34, an actuary issuing a report must disclose the following 11 items whenever applicable:</p>
      <ol>
        <li><strong>a. Material Deviations:</strong> Any material deviation from guidance in APS 34 (1.3.3).</li>
        <li><strong>b. Reliances with Disclaimed Responsibility:</strong> Any reliance on others for which the actuary disclaims responsibility (2.3.3).</li>
        <li><strong>c. Material Omissions/Distortions:</strong> Any material omissions, understatements, or overstatements (2.4).</li>
        <li><strong>d. Data Adjustments & Deficiencies:</strong> Any data validation, adjustments, modifications, or deficiencies (2.5.2 - 2.5.5).</li>
        <li><strong>e. Margins for Adverse Deviations:</strong> Any margins for adverse deviations in assumptions or methodology (2.7.3).</li>
        <li><strong>f. Material Inconsistencies:</strong> Any material inconsistency in assumptions and methodology used across components (2.7.6).</li>
        <li><strong>g. Prescribed Assumptions Not Supported:</strong> Assumptions/methodology prescribed by another party that the actuary does not support (2.8.2 & 2.8.3).</li>
        <li><strong>h. Assumptions Mandated by Law:</strong> Assumptions/methodology mandated by statute/regulation (2.9).</li>
        <li><strong>i. Model Limitations & Uncertainties:</strong> Limitations and uncertainties of any model used and their broad implications (2.10.3).</li>
        <li><strong>j. Assumed Management Actions:</strong> Management actions or responses assumed within any model and their implications (2.10.6.e).</li>
        <li><strong>k. Subsequent Events:</strong> Any material subsequent event occurring after the valuation date (2.13).</li>
      </ol>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>APS 34 = ISAP 1; effective 29 Dec 2021; universal across all actuarial work.</li>
          <li>'Must' = mandatory; 'Should' = standard practice requiring documented departure.</li>
          <li>Documentation test = Another actuary in same practice area can replicate and evaluate judgments.</li>
          <li>Section 3.2.2 mandates exactly 11 distinct disclosure categories.</li>
          <li>Model validation must be performed by independent individuals; change controls must allow reversal.</li>
        </ul>
      </div>
    `
  },
  {
    id: "ftign31",
    category: "FT-IGN 31: Auditing Actuary & Financial Reporting",
    shortTitle: "FT-IGN 31: Auditing Actuary (Ind AS 117)",
    ref: "FT-IGN 31 (SA 620 & Ind AS 117 / IFRS 17)",
    icon: "📊",
    desc: "Auditing Actuary under SA 620, Ind AS 117 valuation (GMM, PAA, VFA), cooling-off (1 yr), 4-yr rotation, access asymmetry & 5-stage dispute escalation.",
    briefHtml: `
      <h4>1. Legislative Authority & Auditor's Expert Framework</h4>
      <ul>
        <li><strong>Technical Origin:</strong> Fast Track Ind AS Guidance Note 31 (FT-IGN 31) issued by IAI to provide authoritative guidance for actuaries supporting statutory audits of insurance companies under <strong>Ind AS 117 (Insurance Contracts)</strong>, aligned with IFRS 17.</li>
        <li><strong>Auditor's Expert Role (ICAI SA 620):</strong> The Auditing Actuary operates as an Auditor's Expert under ICAI Standard on Auditing <strong>SA 620 (Using the Work of an Auditor's Expert)</strong>. The statutory auditor remains solely responsible for the audit opinion, but relies on the Auditing Actuary's technical evaluation of actuarial balances.</li>
        <li><strong>Quality Management (ICAI SA 220):</strong> Significant audit engagements require an Engagement Quality Control Reviewer (EQCR) under SA 220.</li>
      </ul>

      <h4>2. Independence Safeguards & Mandatory Cooling-Off (Para 3.2.4 & 3.2.5)</h4>
      <ul>
        <li><strong>1-Year Cooling-Off Period:</strong> An actuary cannot serve as Auditing Actuary if within the preceding <strong>1 year</strong> they:
          <ul>
            <li>Were an employee of the insurer.</li>
            <li>Served as the Appointed Actuary or signing review actuary.</li>
            <li>Provided external reserving or valuation consulting services to the insurer.</li>
            <li>Supplied or configured core actuarial valuation software used in the company's financial reporting.</li>
          </ul>
        </li>
        <li><strong>Mandatory Partner Rotation:</strong> An Auditing Actuary can hold office for a maximum of <strong>4 consecutive financial years</strong>, followed by a mandatory <strong>3-year cooling-off period</strong> before reappointment.</li>
        <li><strong>Concurrent Engagement Cap:</strong> An individual Auditing Actuary cannot concurrently serve as primary signing auditing actuary for more than <strong>3 insurance companies</strong>.</li>
      </ul>

      <h4>3. Working Paper Access Asymmetry (Para 3.19.5)</h4>
      <ul>
        <li><strong>Statutory Auditor:</strong> Full, unfettered access to all of the Auditing Actuary's working papers, audit programs, challenge memos, and sensitivity analyses.</li>
        <li><strong>Client Management / Insurer:</strong> Has <strong>restricted access</strong>. Insurer management has no statutory right to inspect internal challenge memos, working papers, or confidential communications exchanged between the Auditing Actuary and the statutory auditor.</li>
      </ul>

      <h4>4. Five-Stage Dispute Escalation Protocol (Para 3.23)</h4>
      <p>When material disagreements arise between the Auditing Actuary and the Appointed Actuary regarding liability valuation, assumptions, or methodology under Ind AS 117:</p>
      <ol>
        <li><strong>Level 1 (Working Level):</strong> Technical dialogue between Auditing Actuary and Appointed Actuary to achieve consensus.</li>
        <li><strong>Level 2 (Audit Partner Level):</strong> Formal meeting between Statutory Audit Engagement Partner and the Insurer's Person Responsible for Ind AS 117.</li>
        <li><strong>Level 3 (Governance Review):</strong> Escalation to Engagement Quality Control Reviewer (EQCR under SA 220) and the Audit Committee of the Board.</li>
        <li><strong>Level 4 (Board of Directors):</strong> Formal presentation to the Board of Directors / Those Charged With Governance (TCWG).</li>
        <li><strong>Level 5 (Regulators):</strong> Escalation to statutory regulators — <strong>IRDAI and IAI Disciplinary Directorate</strong>. In this stage, <em>client confidentiality is legally overridden in the public interest</em>!</li>
      </ol>

      <h4>5. Technical Valuation Standards under Ind AS 117</h4>
      <ul>
        <li><strong>Measurement Models:</strong>
          <ul>
            <li><strong>General Measurement Model (GMM):</strong> Default building block approach: Best Estimate Liability (BEL) + Risk Adjustment for non-financial risk (RA) + Contractual Service Margin (CSM).</li>
            <li><strong>Premium Allocation Approach (PAA):</strong> Simplified approach for short-duration contracts. <strong>Safe Harbour (Para 53(b)):</strong> Strictly requires coverage period of the whole contract &le; 1 year. Artificially splitting multi-year policies into 1-year tranches is strictly forbidden!</li>
            <li><strong>Variable Fee Approach (VFA):</strong> Applied to direct participating contracts.</li>
          </ul>
        </li>
        <li><strong>Discount Curves:</strong> Must strictly utilize the CCIL (Clearing Corporation of India Limited) Zero-Coupon Yield Curve as prescribed by IRDAI.</li>
        <li><strong>Loss Component & Onerous Contracts:</strong> Must be recognized immediately in profit or loss; cannot be deferred against future CSM.</li>
      </ul>

      <h4>6. Documentation Retention & Cold Quality Reviews (ICAI SA 230)</h4>
      <ul>
        <li><strong>7-Year Audit File Retention:</strong> All working papers, challenge memos, and models must be retained for at least <strong>7 years</strong> under ICAI SA 230.</li>
        <li><strong>Cold Quality Review:</strong> Annual internal quality inspection of completed audit files conducted by partners independent of the engagement.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>Auditing Actuary operates as Auditor's Expert under ICAI SA 620.</li>
          <li>1-year cooling-off for prior employees/consultants; max 4 years tenure (3-year cooling-off).</li>
          <li>Management CANNOT inspect internal audit challenge memos (Access Asymmetry).</li>
          <li>5-stage dispute escalation ends with IRDAI/IAI regulatory reporting (overrides confidentiality).</li>
          <li>Audit documentation retention = Exactly 7 years under SA 230.</li>
        </ul>
      </div>
    `
  }
];

// =============================================================================
// Comprehensive Statutory & Actuarial Abbreviations Dataset
// =============================================================================

const ABBREVIATIONS = [
  { abbr: "AA", term: "Appointed Actuary / Appellate Authority", category: "Governance & Discipline", desc: "Statutory actuarial head of an insurer under IRDAI regulations; also the quasi-judicial tribunal hearing appeals against Disciplinary orders under Section 36." },
  { abbr: "AIAI", term: "Associate of the Institute of Actuaries of India", category: "Membership Class", desc: "Associate-level qualification awarded by IAI under Section 6 of the Actuaries Act, 2006." },
  { abbr: "APS", term: "Actuarial Practice Standard", category: "Professional Standards", desc: "Mandatory practice standards issued by the IAI Council under Section 19 of the Actuaries Act 2006." },
  { abbr: "APS 9", term: "Continuing Professional Development (CPD v4.00)", category: "Professional Standards", desc: "Mandatory annual CPD standard specifying 24 hours for COP holders and 15 hours for active Fellows." },
  { abbr: "APS 34", term: "General Actuarial Practice", category: "Professional Standards", desc: "Core standard governing actuarial judgment, documentation replicability, and reporting (aligned with ISAP 1)." },
  { abbr: "BEL", term: "Best Estimate Liability", category: "Financial Reporting", desc: "Present value of probability-weighted future cash flows under Ind AS 117 / Solvency II." },
  { abbr: "BOD", term: "Board of Discipline", category: "Disciplinary Process", desc: "Quasi-judicial body inquiring into First Schedule professional misconduct under Section 29." },
  { abbr: "CCIL", term: "Clearing Corporation of India Limited", category: "Financial Reporting", desc: "Prescribed source of the risk-free Zero-Coupon Yield Curve for discounting under Ind AS 117." },
  { abbr: "COP", term: "Certificate of Practice", category: "Statutory Law", desc: "Mandatory statutory license granted under Section 9 of Actuaries Act 2006 required to practice as an actuary in India." },
  { abbr: "CPD", term: "Continuing Professional Development", category: "Professional Currency", desc: "Verifiable technical, professional, and ethical learning hours required annually to maintain actuarial currency." },
  { abbr: "CSM", term: "Contractual Service Margin", category: "Ind AS 117 / IFRS 17", desc: "Component of insurance liability representing unearned profit to be recognized over the coverage period." },
  { abbr: "DC", term: "Disciplinary Committee", category: "Disciplinary Process", desc: "High-level disciplinary body inquiring into Second Schedule professional or other misconduct under Section 30." },
  { abbr: "EQCR", term: "Engagement Quality Control Reviewer", category: "Audit Standards", desc: "Independent partner review mandated under ICAI SA 220 for significant actuarial audit engagements." },
  { abbr: "ERM", term: "Enterprise Risk Management", category: "Risk Governance", desc: "Holistic framework for identifying, quantifying, and mitigating organizational risks." },
  { abbr: "FIAI", term: "Fellow of the Institute of Actuaries of India", category: "Membership Class", desc: "Highest professional qualification awarded by IAI under Section 6 of Actuaries Act 2006." },
  { abbr: "FT-IGN", term: "Fast Track Ind AS Guidance Note", category: "Practice Guidance", desc: "Technical guidance issued by IAI, notably FT-IGN 31 for the Auditing Actuary supporting statutory audits." },
  { abbr: "GMM", term: "General Measurement Model", category: "Ind AS 117 / IFRS 17", desc: "The standard default building block approach under Ind AS 117 (BEL + RA + CSM)." },
  { abbr: "IAA", term: "International Actuarial Association", category: "Global Bodies", desc: "Worldwide association of recognized actuarial bodies; issuing body of ISAP standards." },
  { abbr: "IAI", term: "Institute of Actuaries of India", category: "Statutory Body", desc: "Statutory body corporate established under Section 3 of the Actuaries Act, 2006 (repealing ASI)." },
  { abbr: "ICAI", term: "Institute of Chartered Accountants of India", category: "Statutory Bodies", desc: "Statutory accounting and auditing body; author of Standards on Auditing (SA 220, SA 230, SA 620)." },
  { abbr: "IFS", term: "India Fellowship Seminar", category: "IAI Governance", desc: "Compulsory professionalism seminar for candidates transitioning to Fellowship, featuring the 60% pass mark MCQ exam." },
  { abbr: "Ind AS 117", term: "Indian Accounting Standard 117 (Insurance Contracts)", category: "Financial Reporting", desc: "Indian accounting standard aligned with IFRS 17 governing measurement, presentation, and disclosure of insurance." },
  { abbr: "IRDAI", term: "Insurance Regulatory and Development Authority of India", category: "Statutory Regulators", desc: "Apex statutory regulatory body supervising and developing the insurance and reinsurance industry in India." },
  { abbr: "ISAP", term: "International Standard of Actuarial Practice", category: "Global Standards", desc: "Model practice standards published by IAA; basis of APS 34 (aligned with ISAP 1)." },
  { abbr: "PAA", term: "Premium Allocation Approach", category: "Ind AS 117 / IFRS 17", desc: "Simplified measurement approach under Ind AS 117 for short-duration insurance contracts (&le; 1 year)." },
  { abbr: "PAG", term: "Practice Advisory Group", category: "IAI Committees", desc: "Specialist advisory bodies within IAI covering Life, General, Health, Pensions, Risk Management, and Banking." },
  { abbr: "PCS", term: "Professional Conduct Standards (v4.0)", category: "Ethics & Conduct", desc: "Code of professional ethics and conduct governing all IAI members under Section 19(2)(i)." },
  { abbr: "QRB", term: "Quality Review Board", category: "Statutory Framework", desc: "Independent supervisory board appointed by Central Government under Section 43 of Actuaries Act 2006." },
  { abbr: "RA", term: "Risk Adjustment for Non-Financial Risk", category: "Ind AS 117 / IFRS 17", desc: "Compensation required for bearing the uncertainty regarding the amount and timing of insurance cash flows." },
  { abbr: "RBC", term: "Risk-Based Capital", category: "Prudential Regulation", desc: "Regulatory capital framework assessing required solvency margins based on individual asset-liability risk profiles." },
  { abbr: "SA 230", term: "Audit Documentation Standard", category: "Audit Standards", desc: "ICAI auditing standard mandating a minimum 7-year retention period for audit working papers." },
  { abbr: "SA 620", term: "Auditor's Expert Standard", category: "Audit Standards", desc: "ICAI auditing standard defining the role, objectivity, competence, and challenge documentation of the Auditing Actuary." },
  { abbr: "SDC", term: "Student Disciplinary Committee", category: "Disciplinary Process", desc: "Council-constituted committee investigating complaints under the Student Code of Conduct (2026)." },
  { abbr: "TCWG", term: "Those Charged With Governance", category: "Corporate Governance", desc: "The Board of Directors and Audit Committee responsible for strategic oversight and financial reporting." },
  { abbr: "VFA", term: "Variable Fee Approach", category: "Ind AS 117 / IFRS 17", desc: "Measurement approach under Ind AS 117 for insurance contracts with direct participation features." }
];

// =============================================================================
// Gamification Engine: XP, Study Mastery Levels, Streaks & Audio Synthesizer
// =============================================================================

const MASTERY_LEVELS = [
  { level: 1, name: "Syllabus Initiate", shortName: "Initiate", minXP: 0, maxXP: 500, icon: "📘", tier: "Study Milestone 1" },
  { level: 2, name: "Concept Builder", shortName: "Builder", minXP: 500, maxXP: 1500, icon: "📜", tier: "Study Milestone 2" },
  { level: 3, name: "Knowledge Navigator", shortName: "Navigator", minXP: 1500, maxXP: 3500, icon: "🧭", tier: "Study Milestone 3" },
  { level: 4, name: "Scenario Strategist", shortName: "Strategist", minXP: 3500, maxXP: 6500, icon: "🔍", tier: "Study Milestone 4" },
  { level: 5, name: "Case Analyst", shortName: "Analyst", minXP: 6500, maxXP: 10000, icon: "🏛️", tier: "Study Milestone 5" },
  { level: 6, name: "Exam Grandmaster", shortName: "Grandmaster", minXP: 10000, maxXP: 999999, icon: "🏆", tier: "Study Milestone 6" }
];
const CAREER_LEVELS = MASTERY_LEVELS; // Backward-compatibility alias

const ACHIEVEMENTS_DEF = [
  { id: "first_step", title: "First Steps", icon: "🏁", desc: "Complete your first practice drill or mock exam.", req: "Complete 1 session" },
  { id: "statutory_eagle", title: "Statutory Eagle Eye", icon: "🦅", desc: "Achieve 100% score in an Actuaries Act 2006 practice drill (min 15 Qs).", req: "100% on Actuaries Act" },
  { id: "ten_day_master", title: "10-Day Rule Master", icon: "⏱️", desc: "Correctly answer 10 PCS Handover / Transition questions without a single mistake.", req: "10 PCS Handover streak" },
  { id: "disciplinary_shield", title: "Disciplinary Shield", icon: "⚖️", desc: "Score 100% in a Disciplinary Process & Misconduct session.", req: "100% on Disciplinary" },
  { id: "auditor_expert", title: "SA 620 Auditor's Expert", icon: "🔍", desc: "Score 80%+ accuracy on FT-IGN 31 Auditing Actuary.", req: "80%+ on FT-IGN 31" },
  { id: "fellowship_benchmark", title: "Fellowship Benchmark", icon: "🏆", desc: "Pass a full 30-Question Mock Exam with 18+ marks (60%+).", req: "Pass 30-Q Mock" },
  { id: "apex_distinction", title: "Apex Distinction", icon: "🌟", desc: "Score 90%+ (27/30) on an official full Mock Exam.", req: "27/30 on Mock" },
  { id: "speed_actuary", title: "Speed Actuary", icon: "⚡", desc: "Pass a 30-Question Mock Exam in under 25 minutes.", req: "Pass Mock in <25 mins" },
  { id: "error_eraser", title: "Error Eraser", icon: "🧹", desc: "Complete a Retry Missed Questions session with 100% accuracy.", req: "100% on Retry session" },
  { id: "hearing_survivor", title: "Hearing Survivor", icon: "🛡️", desc: "Survive 10+ consecutive questions in Disciplinary Sudden Death mode.", req: "Survive 10+ in Sudden Death" },
  { id: "blitz_master", title: "Rapid-Fire Blitz Master", icon: "⏳", desc: "Score 15+ correct answers in 60-Second Speed Blitz mode across all syllabus topics (unrestricted).", req: "Score 15+ in Full Blitz" },
  { id: "boss_slayer", title: "Inquest Conqueror", icon: "👹", desc: "Defeat a Weakness Boss Battle with 80%+ score.", req: "Win Weakness Boss Battle" }
];

let GamificationState = {
  xp: 0,
  level: 1,
  streakDays: 1,
  lastActiveDate: null,
  dailyGoalProgress: 0,
  dailyGoalTarget: 10,
  currentCombo: 0,
  maxCombo: 0,
  soundEnabled: true,
  survivalBest: 0,
  blitzBest: 0,
  unlockedAchievements: {},
  stats: {
    totalAnswered: 0,
    totalCorrect: 0,
    mocksCompleted: 0,
    mocksPassed: 0,
    bossesDefeated: 0,
    tenDayStreak: 0
  }
};

// Web Audio API Synthesizer (Offline mathematical sound synthesis)
class ActuarialAudio {
  constructor() {
    this.ctx = null;
  }
  
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  play(type) {
    if (!GamificationState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.03);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.03);
        osc.start(now);
        osc.stop(now + 0.03);
      } else if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.07);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.28);
      } else if (type === 'incorrect') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.16);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.16);
      } else if (type === 'fanfare' || type === 'levelup') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
          const noteOsc = this.ctx.createOscillator();
          const noteGain = this.ctx.createGain();
          noteOsc.connect(noteGain);
          noteGain.connect(this.ctx.destination);
          noteOsc.type = 'triangle';
          noteOsc.frequency.setValueAtTime(freq, now + i * 0.09);
          noteGain.gain.setValueAtTime(0.15, now + i * 0.09);
          noteGain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.35);
          noteOsc.start(now + i * 0.09);
          noteOsc.stop(now + i * 0.09 + 0.35);
        });
      }
    } catch (e) {
      // AudioContext policy
    }
  }
}
const audioFX = new ActuarialAudio();

function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#1e3a8a", "#0f766e", "#f59e0b", "#ec4899", "#8b5cf6", "#10b981", "#3b82f6"];
  const particles = Array.from({ length: 80 }, () => ({
    x: canvas.width / 2,
    y: canvas.height * 0.45,
    vx: (Math.random() - 0.5) * 16,
    vy: (Math.random() - 0.8) * 14,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 10,
    alpha: 1
  }));

  let animId;
  const startTime = Date.now();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elapsed = Date.now() - startTime;
    if (elapsed > 2800) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animId);
      return;
    }

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.alpha = Math.max(0, 1 - (elapsed / 2800));

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    animId = requestAnimationFrame(animate);
  }

  animate();
}

function initGamification() {
  try {
    const saved = localStorage.getItem("iai_ifs_gamification");
    if (saved) {
      const parsed = JSON.parse(saved);
      GamificationState = { ...GamificationState, ...parsed };
      if (!GamificationState.stats) GamificationState.stats = {};
      if (!GamificationState.unlockedAchievements) GamificationState.unlockedAchievements = {};
    }
  } catch (e) {
    console.error("Error reading gamification state:", e);
  }

  // Update daily study streak
  const todayStr = new Date().toISOString().slice(0, 10);
  if (GamificationState.lastActiveDate) {
    const lastDate = new Date(GamificationState.lastActiveDate);
    const today = new Date(todayStr);
    const diffDays = Math.round((today - lastDate) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      // Streak continues!
    } else if (diffDays > 1) {
      // Streak broken, reset to 1
      GamificationState.streakDays = 1;
      GamificationState.dailyGoalProgress = 0;
    }
  } else {
    GamificationState.streakDays = 1;
  }
  GamificationState.lastActiveDate = todayStr;

  saveGamification();
  updateGamificationHUD();
  updateSoundIcon();
}

function saveGamification() {
  try {
    localStorage.setItem("iai_ifs_gamification", JSON.stringify(GamificationState));
  } catch (e) {
    console.error("Error saving gamification:", e);
  }
}

function getCurrentRank() {
  const xp = GamificationState.xp || 0;
  for (let i = CAREER_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= CAREER_LEVELS[i].minXP) {
      return CAREER_LEVELS[i];
    }
  }
  return CAREER_LEVELS[0];
}

function getNextRank() {
  const current = getCurrentRank();
  const nextIdx = CAREER_LEVELS.findIndex(r => r.level === current.level) + 1;
  return nextIdx < CAREER_LEVELS.length ? CAREER_LEVELS[nextIdx] : null;
}

function addXP(amount, reason = "") {
  const comboMult = 1 + (Math.min(GamificationState.currentCombo || 0, 5) * 0.1);
  const totalEarned = Math.round(amount * comboMult);
  const oldRank = getCurrentRank();

  GamificationState.xp = (GamificationState.xp || 0) + totalEarned;

  const newRank = getCurrentRank();
  if (newRank.level > oldRank.level) {
    GamificationState.level = newRank.level;
    openLevelUpModal(newRank);
    audioFX.play('levelup');
    launchConfetti();
  }

  saveGamification();
  updateGamificationHUD();
}

function unlockAchievement(badgeId) {
  if (GamificationState.unlockedAchievements && GamificationState.unlockedAchievements[badgeId]) {
    return; // Already unlocked
  }
  const badgeDef = ACHIEVEMENTS_DEF.find(b => b.id === badgeId);
  if (!badgeDef) return;

  if (!GamificationState.unlockedAchievements) GamificationState.unlockedAchievements = {};
  GamificationState.unlockedAchievements[badgeId] = new Date().toISOString();

  // Bonus XP on achievement unlock
  GamificationState.xp = (GamificationState.xp || 0) + 150;
  saveGamification();
  updateGamificationHUD();
  audioFX.play('fanfare');

  // Mini toast or visual indicator
  console.log(`🏆 Fellowship Badge Unlocked: ${badgeDef.title}`);
}

function updateGamificationHUD() {
  const rank = getCurrentRank();
  const nextRank = getNextRank();

  // Header pills
  const streakCountEl = document.getElementById("headerStreakCount");
  if (streakCountEl) streakCountEl.textContent = GamificationState.streakDays || 1;

  const headerRankIcon = document.getElementById("headerRankIcon");
  if (headerRankIcon) headerRankIcon.textContent = rank.icon;

  const headerRankTitle = document.getElementById("headerRankTitle");
  if (headerRankTitle) headerRankTitle.textContent = rank.shortName || rank.name.split(" ")[0];

  const headerXpBadge = document.getElementById("headerXpBadge");
  if (headerXpBadge) headerXpBadge.textContent = `${GamificationState.xp || 0} XP`;

  // Dashboard HUD card
  const hudAvatar = document.getElementById("hudRankAvatar");
  if (hudAvatar) hudAvatar.textContent = rank.icon;

  const hudTier = document.getElementById("hudRankTier");
  if (hudTier) hudTier.textContent = rank.tier;

  const hudName = document.getElementById("hudRankName");
  if (hudName) hudName.textContent = rank.name;

  const hudFill = document.getElementById("hudXpFill");
  const hudNumbers = document.getElementById("hudXpNumbers");
  if (nextRank) {
    const range = nextRank.minXP - rank.minXP;
    const progress = Math.max(0, Math.min(range, (GamificationState.xp || 0) - rank.minXP));
    const pct = ((progress / range) * 100).toFixed(0);
    if (hudFill) hudFill.style.width = `${pct}%`;
    if (hudNumbers) hudNumbers.textContent = `${GamificationState.xp || 0} / ${nextRank.minXP} XP to ${nextRank.name}`;
  } else {
    if (hudFill) hudFill.style.width = "100%";
    if (hudNumbers) hudNumbers.textContent = `${GamificationState.xp || 0} XP (Apex Preparation Milestone Reached!)`;
  }

  // Daily Practice Target
  const goalProg = GamificationState.dailyGoalProgress || 0;
  const goalTarget = GamificationState.dailyGoalTarget || 10;
  const hudGoalText = document.getElementById("hudDailyGoalText") || document.getElementById("hudCpdText");
  if (hudGoalText) hudGoalText.textContent = `${Math.min(goalProg, goalTarget)} / ${goalTarget}`;

  // Trophy count
  const unlockedCount = Object.keys(GamificationState.unlockedAchievements || {}).length;
  const hudTrophyCount = document.getElementById("hudTrophyCount");
  if (hudTrophyCount) hudTrophyCount.textContent = `${unlockedCount}/${ACHIEVEMENTS_DEF.length}`;

  // Mode Bests
  const survBest = document.getElementById("survivalBestVal");
  if (survBest) survBest.textContent = `${GamificationState.survivalBest || 0} Qs`;

  const blitzBest = document.getElementById("blitzBestVal");
  if (blitzBest) blitzBest.textContent = `${GamificationState.blitzBest || 0} Qs`;
}

function updateSoundIcon() {
  const icon = document.getElementById("soundIcon");
  if (icon) {
    icon.textContent = GamificationState.soundEnabled ? "🔊" : "🔇";
  }
}

window.toggleSound = function() {
  GamificationState.soundEnabled = !GamificationState.soundEnabled;
  saveGamification();
  updateSoundIcon();
  if (GamificationState.soundEnabled) audioFX.play('click');
};

function renderTrophyCabinet() {
  const container = document.getElementById("trophyGridContainer");
  if (!container) return;

  const unlockedMap = GamificationState.unlockedAchievements || {};

  container.innerHTML = ACHIEVEMENTS_DEF.map(badge => {
    const isUnlocked = !!unlockedMap[badge.id];
    return `
      <div class="trophy-card ${isUnlocked ? 'unlocked' : 'locked'}">
        <div class="trophy-top">
          <div class="trophy-icon">${badge.icon}</div>
          <div class="trophy-title">${badge.title}</div>
        </div>
        <div class="trophy-desc">${badge.desc}</div>
        <div class="trophy-status-bar">
          <span class="trophy-req">${badge.req}</span>
          <span class="${isUnlocked ? 'trophy-status-unlocked' : 'trophy-status-locked'}">
            ${isUnlocked ? '✓ Unlocked' : '🔒 Locked'}
          </span>
        </div>
      </div>
    `;
  }).join("");
}

window.openTrophyModal = function() {
  renderTrophyCabinet();
  document.getElementById("trophyModal").classList.add("open");
  audioFX.play('click');
};

window.closeTrophyModal = function() {
  document.getElementById("trophyModal").classList.remove("open");
};

function openLevelUpModal(newRank) {
  document.getElementById("levelUpCrownIcon").textContent = newRank.icon;
  document.getElementById("levelUpRankName").textContent = newRank.name;
  document.getElementById("levelUpDesc").textContent = `Congratulations! Your dedicated study and practice have advanced you to ${newRank.tier}: ${newRank.name}. Keep mastering the syllabus towards the 60% exam benchmark!`;
  document.getElementById("levelUpModal").classList.add("open");
}

window.closeLevelUpModal = function() {
  document.getElementById("levelUpModal").classList.remove("open");
};

// =============================================================================
// Application State Machine
// =============================================================================

const AppState = {
  allQuestions: [],
  activeQuizQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: {},       // questionId -> selectedOptionIndex
  flaggedQuestions: {},  // questionId -> boolean
  examMode: "mock",      // "mock" | "topic" | "retry" | "survival" | "blitz" | "boss"
  activeCategory: null,
  timerInterval: null,
  timeRemainingSec: 3600, // 60 mins for 30 questions
  timeElapsedSec: 0,
  isSubmitted: false,
  lastCompletedSession: null,
  reviewFilter: "all",
  survivalCount: 0,
  blitzScore: 0
};

// =============================================================================
// Initialization & Data Loading
// =============================================================================

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  initGamification();
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
// Abbreviations Glossary Modal Logic
// =============================================================================

window.openAbbreviationsModal = function() {
  renderAbbreviationsTable("");
  const input = document.getElementById("abbrSearchInput");
  if (input) input.value = "";
  document.getElementById("abbreviationsModal").classList.add("open");
};

window.closeAbbreviationsModal = function() {
  document.getElementById("abbreviationsModal").classList.remove("open");
};

function renderAbbreviationsTable(query = "") {
  const tbody = document.getElementById("abbrTableBody");
  if (!tbody) return;

  const q = (query || "").trim().toLowerCase();
  const filtered = ABBREVIATIONS.filter(item => 
    item.abbr.toLowerCase().includes(q) ||
    item.term.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
          No abbreviations match "<strong>${query}</strong>". Try searching for "QRB", "PAA", "COP", or "Ind AS".
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => `
    <tr>
      <td><span class="abbr-code">${item.abbr}</span></td>
      <td><strong>${item.term}</strong></td>
      <td><span class="abbr-badge">${item.category}</span></td>
      <td style="color: var(--text-muted); font-size: 0.825rem; line-height: 1.4;">${item.desc}</td>
    </tr>
  `).join("");
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
  if (window.closeMobileSidebar) window.closeMobileSidebar();
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
  if (window.closeMobileSidebar) window.closeMobileSidebar();

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
  if (window.closeMobileSidebar) window.closeMobileSidebar();

  AppState.activeCategory = category;
  renderSidebarNav();

  // Randomize 25 questions per topic practice session
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.min(25, shuffled.length));

  // Allow 2 minutes per question in topic practice mode
  const durationSec = selected.length * 120;
  setupQuizSession(selected, "topic", `Topic Drill (25 Qs): ${category}`, durationSec);
};

window.startSurvivalMode = function() {
  if (AppState.allQuestions.length === 0) {
    alert("Questions are still loading, please wait a moment.");
    return;
  }
  if (window.closeMobileSidebar) window.closeMobileSidebar();
  AppState.survivalCount = 0;
  GamificationState.currentCombo = 0;
  const shuffled = [...AppState.allQuestions].sort(() => 0.5 - Math.random());
  setupQuizSession(shuffled, "survival", "🚨 Disciplinary Hearing (Sudden Death)", 0);
};

window.startBlitzMode = function() {
  if (AppState.allQuestions.length === 0) {
    alert("Questions are still loading, please wait a moment.");
    return;
  }
  if (window.closeMobileSidebar) window.closeMobileSidebar();
  AppState.blitzScore = 0;
  GamificationState.currentCombo = 0;
  // Draw dynamically across all 2,598 syllabus questions with no restriction!
  const shuffled = [...AppState.allQuestions].sort(() => 0.5 - Math.random());
  setupQuizSession(shuffled, "blitz", "⚡ Rapid-Fire Speed Blitz: Full Syllabus (60s)", 60);
};

window.startBossBattle = function() {
  if (AppState.allQuestions.length === 0) {
    alert("Questions are still loading, please wait a moment.");
    return;
  }
  if (window.closeMobileSidebar) window.closeMobileSidebar();

  let missedPool = [];
  if (AppState.lastCompletedSession && AppState.lastCompletedSession.missedQuestions) {
    missedPool = [...AppState.lastCompletedSession.missedQuestions];
  }
  const remainingNeeded = Math.max(0, 15 - missedPool.length);
  const shuffledAll = [...AppState.allQuestions].sort(() => 0.5 - Math.random());
  const fillers = shuffledAll.filter(q => !missedPool.some(m => m.id === q.id)).slice(0, remainingNeeded);
  const bossQuestions = [...missedPool, ...fillers].slice(0, 15).sort(() => 0.5 - Math.random());

  GamificationState.currentCombo = 0;
  setupQuizSession(bossQuestions, "boss", "👹 Weakness Boss Battle (15 Qs)", 1800);
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
  
  const isMock = mode === "mock";
  const isBoss = mode === "boss";
  const isBlitz = mode === "blitz";
  const isSurvival = mode === "survival";
  const finishTopBtn = document.getElementById("finishExamTopBtn");
  const submitBottomBtn = document.getElementById("submitExamBottomBtn");
  const timerBox = document.getElementById("examTimerBox");
  const timerDisplay = document.getElementById("timerDisplay");
  const comboBanner = document.getElementById("quizComboBanner");

  if (comboBanner) comboBanner.style.display = "none";

  if (isMock || isBoss) {
    if (finishTopBtn) finishTopBtn.style.display = "inline-flex";
    if (submitBottomBtn) submitBottomBtn.style.display = "block";
    if (timerBox) timerBox.style.display = "flex";
    updateTimerDisplay();
    startTimer();
  } else if (isBlitz) {
    if (finishTopBtn) finishTopBtn.style.display = "none";
    if (submitBottomBtn) submitBottomBtn.style.display = "none";
    if (timerBox) timerBox.style.display = "flex";
    updateTimerDisplay();
    startBlitzTimer();
  } else if (isSurvival) {
    if (finishTopBtn) finishTopBtn.style.display = "none";
    if (submitBottomBtn) submitBottomBtn.style.display = "none";
    if (timerBox) {
      timerBox.style.display = "flex";
      timerDisplay.textContent = `Survives: ${AppState.survivalCount || 0}`;
    }
  } else {
    // Topic Drill / Practice mode: NO submit button! Instant feedback!
    if (finishTopBtn) finishTopBtn.style.display = "none";
    if (submitBottomBtn) submitBottomBtn.style.display = "none";
    if (timerBox) {
      timerBox.style.display = "flex";
      document.getElementById("timerDisplay").textContent = "Practice Mode";
    }
  }

  renderQuestionPalette();
  renderActiveQuestion();

  showView("examView");
}

function startBlitzTimer() {
  const timerBox = document.getElementById("examTimerBox");
  timerBox.classList.remove("timer-warning");

  AppState.timerInterval = setInterval(() => {
    AppState.timeRemainingSec--;
    AppState.timeElapsedSec++;

    updateTimerDisplay();

    if (AppState.timeRemainingSec <= 10) {
      timerBox.classList.add("timer-warning");
    } else {
      timerBox.classList.remove("timer-warning");
    }

    if (AppState.timeRemainingSec <= 0) {
      clearInterval(AppState.timerInterval);
      audioFX.play('incorrect');
      alert(`⚡ Time's Up! You scored ${AppState.blitzScore || 0} correct answers in Rapid-Fire Speed Blitz.`);
      if ((AppState.blitzScore || 0) > (GamificationState.blitzBest || 0)) {
        GamificationState.blitzBest = AppState.blitzScore;
        saveGamification();
        updateGamificationHUD();
      }
      showDashboard();
    }
  }, 1000);
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
  const isTopicMode = AppState.examMode !== "mock";
  const selectedIdx = AppState.userAnswers[q.id];

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
  const optionsContainer = document.getElementById("activeOptionsList");
  const optionLetters = ["A", "B", "C", "D"];

  optionsContainer.innerHTML = q.options.map((opt, idx) => {
    let itemClasses = ["option-item"];
    if (selectedIdx === idx) itemClasses.push("selected");

    // In Topic Practice mode, reveal correct/incorrect status immediately once answered!
    if (isTopicMode && selectedIdx !== undefined) {
      if (idx === q.correctIndex) {
        itemClasses.push("option-correct");
      } else if (idx === selectedIdx) {
        itemClasses.push("option-incorrect");
      }
    }

    return `
      <div class="${itemClasses.join(' ')}" onclick="selectOption(${idx})">
        <div class="option-marker">${optionLetters[idx]}</div>
        <div class="option-label">${opt}</div>
      </div>
    `;
  }).join("");

  // Instant Feedback & Explanations Card (Topic Practice)
  const instantCard = document.getElementById("activeInstantFeedback");
  if (instantCard) {
    if (isTopicMode && selectedIdx !== undefined) {
      const isCorrect = selectedIdx === q.correctIndex;
      instantCard.innerHTML = `
        <div class="instant-card ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}">
          <div class="instant-badge-bar">
            <span class="instant-status-pill ${isCorrect ? 'pill-correct' : 'pill-incorrect'}">
              ${isCorrect ? '✓ Correct Answer' : '✕ Incorrect Selection'}
            </span>
            <span class="q-source-badge">Source: ${q.source || q.category}</span>
          </div>
          <div class="instant-explanation-block">
            <strong>Why this is correct:</strong>
            <p>${q.explanationCorrect}</p>
          </div>
          <div class="instant-explanation-block distractor-block">
            <strong>Distractor & Misconception Analysis:</strong>
            <p>${q.explanationIncorrect}</p>
          </div>
        </div>
      `;
      instantCard.style.display = "block";
    } else {
      instantCard.innerHTML = "";
      instantCard.style.display = "none";
    }
  }

  // Navigation button states
  document.getElementById("prevQuestionBtn").disabled = AppState.currentQuestionIndex === 0;
  
  const nextBtn = document.getElementById("nextQuestionBtn");
  if (AppState.currentQuestionIndex === total - 1) {
    if (isTopicMode) {
      nextBtn.innerHTML = `Complete Drill & View Score <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      nextBtn.onclick = () => finalizeExamSubmission();
    } else {
      nextBtn.innerHTML = `Finish Exam <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      nextBtn.onclick = openSubmitConfirmModal;
    }
  } else {
    nextBtn.innerHTML = `Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
    nextBtn.onclick = () => navigateQuestion(1);
  }

  updatePaletteHighlight();
}

window.selectOption = function(optionIndex) {
  const q = AppState.activeQuizQuestions[AppState.currentQuestionIndex];
  if (!q) return;

  audioFX.play('click');
  AppState.userAnswers[q.id] = optionIndex;

  const isInstant = AppState.examMode !== "mock" && AppState.examMode !== "boss";
  const isCorrect = optionIndex === q.correctIndex;

  if (isInstant) {
    if (isCorrect) {
      audioFX.play('correct');
      GamificationState.currentCombo = (GamificationState.currentCombo || 0) + 1;
      if (GamificationState.currentCombo > (GamificationState.maxCombo || 0)) {
        GamificationState.maxCombo = GamificationState.currentCombo;
      }
      addXP(15, "Correct Practice Answer");

      // Check 10-day handover achievement
      if (q.source && (q.source.includes("7.2") || q.question.toLowerCase().includes("10-day") || q.question.toLowerCase().includes("handover"))) {
        GamificationState.stats.tenDayStreak = (GamificationState.stats.tenDayStreak || 0) + 1;
        if (GamificationState.stats.tenDayStreak >= 10) unlockAchievement("ten_day_master");
      }
    } else {
      audioFX.play('incorrect');
      GamificationState.currentCombo = 0;
      GamificationState.stats.tenDayStreak = 0;
    }

    // Update combo banner
    const comboBanner = document.getElementById("quizComboBanner");
    const comboText = document.getElementById("comboMultiplierText");
    if (comboBanner && comboText) {
      if (GamificationState.currentCombo >= 2) {
        comboBanner.style.display = "inline-flex";
        comboText.textContent = `${GamificationState.currentCombo}x Combo!`;
      } else {
        comboBanner.style.display = "none";
      }
    }
  }

  // Handle Specialized Game Modes
  if (AppState.examMode === "survival") {
    if (isCorrect) {
      AppState.survivalCount = (AppState.survivalCount || 0) + 1;
      if (AppState.survivalCount > (GamificationState.survivalBest || 0)) {
        GamificationState.survivalBest = AppState.survivalCount;
        saveGamification();
        updateGamificationHUD();
      }
      addXP(30, "Survived Disciplinary Inquest");
      if (AppState.survivalCount >= 10) unlockAchievement("hearing_survivor");

      const timerDisplay = document.getElementById("timerDisplay");
      if (timerDisplay) timerDisplay.textContent = `Survives: ${AppState.survivalCount}`;

      renderActiveQuestion();
      renderQuestionPalette();

      setTimeout(() => {
        if (AppState.examMode === "survival") {
          navigateQuestion(1);
        }
      }, 700);
      return;
    } else {
      audioFX.play('incorrect');
      renderActiveQuestion();
      renderQuestionPalette();
      setTimeout(() => {
        alert(`🚨 DISCIPLINARY COMMITTEE ORDER: You made an error violating ${q.source}. Your license is suspended! You survived ${AppState.survivalCount || 0} consecutive scenarios.`);
        showDashboard();
      }, 400);
      return;
    }
  }

  if (AppState.examMode === "blitz") {
    if (isCorrect) {
      AppState.timeRemainingSec += 5; // +5 seconds bonus!
      AppState.blitzScore = (AppState.blitzScore || 0) + 1;
      if (AppState.blitzScore > (GamificationState.blitzBest || 0)) {
        GamificationState.blitzBest = AppState.blitzScore;
        saveGamification();
        updateGamificationHUD();
      }
      addXP(20, "Blitz Scenario Solved");
      if (AppState.blitzScore >= 15) unlockAchievement("blitz_master");

      renderActiveQuestion();
      renderQuestionPalette();

      setTimeout(() => {
        if (AppState.examMode === "blitz") navigateQuestion(1);
      }, 350);
      return;
    } else {
      AppState.timeRemainingSec = Math.max(0, AppState.timeRemainingSec - 3); // -3s penalty
      renderActiveQuestion();
      renderQuestionPalette();

      setTimeout(() => {
        if (AppState.examMode === "blitz") navigateQuestion(1);
      }, 450);
      return;
    }
  }

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
  const isTopicMode = AppState.examMode !== "mock";

  let html = "";
  for (let i = 0; i < total; i++) {
    const q = AppState.activeQuizQuestions[i];
    const isAnswered = AppState.userAnswers[q.id] !== undefined;
    const isFlagged = !!AppState.flaggedQuestions[q.id];
    const isCurrent = i === AppState.currentQuestionIndex;

    if (isAnswered) answeredCount++;

    let classes = ["palette-btn"];
    if (isCurrent) classes.push("current");

    if (isAnswered) {
      if (isTopicMode) {
        if (AppState.userAnswers[q.id] === q.correctIndex) {
          classes.push("correct");
        } else {
          classes.push("incorrect");
        }
      } else {
        classes.push("answered");
      }
    }
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

  // Gamification: XP, Achievements, Daily Practice Tracking
  unlockAchievement("first_step");
  addXP(correctCount * 30, "Exam Questions Solved");

  GamificationState.dailyGoalProgress = (GamificationState.dailyGoalProgress || 0) + total;
  saveGamification();
  updateGamificationHUD();

  if (isPass) {
    addXP(250, "Official Fellowship Benchmark Passed");
    unlockAchievement("fellowship_benchmark");
    launchConfetti();
    audioFX.play('fanfare');
  } else {
    audioFX.play('incorrect');
  }

  if (parseFloat(percentage) >= 90.0) {
    unlockAchievement("apex_distinction");
    addXP(400, "Apex Fellowship Distinction");
  }

  if (AppState.timeElapsedSec < 1500 && isPass && AppState.examMode === "mock") {
    unlockAchievement("speed_actuary");
  }

  if (AppState.examMode === "boss" && parseFloat(percentage) >= 80.0) {
    unlockAchievement("boss_slayer");
    addXP(500, "Boss Defeated Bounty");
    launchConfetti();
    audioFX.play('fanfare');
  }

  if (AppState.examMode === "retry" && parseFloat(percentage) === 100.0) {
    unlockAchievement("error_eraser");
  }

  // Category specific achievements
  if (categoryStats["Actuaries Act 2006 & Statutory Framework"] && 
      categoryStats["Actuaries Act 2006 & Statutory Framework"].total >= 15 && 
      categoryStats["Actuaries Act 2006 & Statutory Framework"].correct === categoryStats["Actuaries Act 2006 & Statutory Framework"].total) {
    unlockAchievement("statutory_eagle");
  }
  if (categoryStats["Disciplinary Process & Misconduct"] && 
      categoryStats["Disciplinary Process & Misconduct"].total >= 15 && 
      categoryStats["Disciplinary Process & Misconduct"].correct === categoryStats["Disciplinary Process & Misconduct"].total) {
    unlockAchievement("disciplinary_shield");
  }
  if (categoryStats["FT-IGN 31: Auditing Actuary & Financial Reporting"] && 
      categoryStats["FT-IGN 31: Auditing Actuary & Financial Reporting"].total >= 10 && 
      (categoryStats["FT-IGN 31: Auditing Actuary & Financial Reporting"].correct / categoryStats["FT-IGN 31: Auditing Actuary & Financial Reporting"].total) >= 0.8) {
    unlockAchievement("auditor_expert");
  }

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

  // Sidebar Toggle (Supports Desktop Collapsing and Mobile Drawer)
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  const sidebar = document.getElementById("appSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");

  window.closeSidebar = () => {
    if (!sidebar) return;
    if (window.innerWidth <= 860) {
      sidebar.classList.remove("open");
      if (overlay) overlay.classList.remove("active");
    } else {
      sidebar.classList.add("collapsed");
    }
  };

  window.toggleSidebar = () => {
    if (!sidebar) return;
    if (window.innerWidth <= 860) {
      const willOpen = !sidebar.classList.contains("open");
      sidebar.classList.toggle("open", willOpen);
      if (overlay) overlay.classList.toggle("active", willOpen);
    } else {
      sidebar.classList.toggle("collapsed");
    }
  };

  // Backwards compatible alias
  window.closeMobileSidebar = window.closeSidebar;

  if (sidebarToggleBtn) {
    sidebarToggleBtn.onclick = (e) => {
      e.preventDefault();
      window.toggleSidebar();
    };
  }
  if (closeSidebarBtn) {
    closeSidebarBtn.onclick = (e) => {
      e.preventDefault();
      window.closeSidebar();
    };
  }
  if (overlay) {
    overlay.onclick = (e) => {
      e.preventDefault();
      window.closeSidebar();
    };
  }

  // Logo Click
  document.getElementById("brandHomeBtn").addEventListener("click", showDashboard);

  // Hero & Header Buttons
  document.getElementById("topStartMockBtn").addEventListener("click", startFullMockExam);
  document.getElementById("heroStartMockBtn").addEventListener("click", startFullMockExam);
  document.getElementById("heroBrowseSyllabusBtn").addEventListener("click", () => {
    openSyllabusModal("pcs");
  });

  // Abbreviations Glossary Handlers
  const sidebarAbbrBtn = document.getElementById("sidebarAbbrBtn");
  const heroAbbrBtn = document.getElementById("heroAbbrBtn");
  const closeAbbrModalBtn = document.getElementById("closeAbbrModalBtn");
  const closeAbbrModalBtn2 = document.getElementById("closeAbbrModalBtn2");
  const abbrSearchInput = document.getElementById("abbrSearchInput");

  if (sidebarAbbrBtn) sidebarAbbrBtn.addEventListener("click", openAbbreviationsModal);
  if (heroAbbrBtn) heroAbbrBtn.addEventListener("click", openAbbreviationsModal);
  if (closeAbbrModalBtn) closeAbbrModalBtn.addEventListener("click", closeAbbreviationsModal);
  if (closeAbbrModalBtn2) closeAbbrModalBtn2.addEventListener("click", closeAbbreviationsModal);
  if (abbrSearchInput) {
    abbrSearchInput.addEventListener("input", (e) => {
      renderAbbreviationsTable(e.target.value);
    });
  }

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

  // Gamification Controls
  const soundToggleBtn = document.getElementById("soundToggleBtn");
  if (soundToggleBtn) soundToggleBtn.addEventListener("click", toggleSound);

  const headerTrophyBtn = document.getElementById("headerTrophyBtn");
  if (headerTrophyBtn) headerTrophyBtn.addEventListener("click", openTrophyModal);

  const hudTrophyBtn = document.getElementById("hudTrophyBtn");
  if (hudTrophyBtn) hudTrophyBtn.addEventListener("click", openTrophyModal);

  const closeTrophyBtn = document.getElementById("closeTrophyModalBtn");
  const closeTrophyBtn2 = document.getElementById("closeTrophyModalBtn2");
  if (closeTrophyBtn) closeTrophyBtn.addEventListener("click", closeTrophyModal);
  if (closeTrophyBtn2) closeTrophyBtn2.addEventListener("click", closeTrophyModal);

  const confirmLevelUpBtn = document.getElementById("confirmLevelUpBtn");
  if (confirmLevelUpBtn) confirmLevelUpBtn.addEventListener("click", closeLevelUpModal);

  // Specialized Game Mode Buttons
  const startSurvivalBtn = document.getElementById("startSurvivalModeBtn");
  if (startSurvivalBtn) startSurvivalBtn.addEventListener("click", startSurvivalMode);

  const startBlitzBtn = document.getElementById("startBlitzModeBtn");
  if (startBlitzBtn) startBlitzBtn.addEventListener("click", startBlitzMode);

  const startBossBtn = document.getElementById("startBossBattleBtn");
  if (startBossBtn) startBossBtn.addEventListener("click", startBossBattle);

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
