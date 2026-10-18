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
        <li><strong>Universal Scope:</strong> Applies to <em>all</em> categories of members — Fellows (FIAI), Associates (AIAI), Students, and Affiliates — regardless of practice area or geographic location.</li>
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
        <li><strong>Contingency & Success Fees:</strong> Excessive contingency fees or success-dependent fee structures that compromise actuarial objectivity and independence violate PCS.</li>
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
    shortTitle: "Actuaries Act 2006 & QRB",
    ref: "Statutory Act of Parliament No. 35 of 2006",
    icon: "🏛️",
    desc: "Statutory incorporation of IAI, Council composition (Sec 12), Certificate of Practice (Sec 9), and Quality Review Board (Sec 43).",
    briefHtml: `
      <h4>1. Legislative Origin & Incorporation</h4>
      <ul>
        <li><strong>Enactment:</strong> Act No. 35 of 2006, enacted by the Parliament of India, received Presidential assent on 27 August 2006 and took effect on <strong>10 November 2006</strong>.</li>
        <li><strong>Body Corporate:</strong> Section 3 incorporated the <strong>Institute of Actuaries of India (IAI)</strong> as a statutory body with perpetual succession and common seal, dissolving and succeeding the erstwhile Actuarial Society of India (ASI, est. 1944).</li>
        <li><strong>Headquarters:</strong> Mumbai (statutory registered office).</li>
      </ul>

      <h4>2. Membership Classes & Register (Sections 6, 9 & 10)</h4>
      <ul>
        <li><strong>Classes of Members:</strong> Fellows (FIAI), Associates (AIAI), Students, and Affiliates/Honorary members.</li>
        <li><strong>Mandatory Certificate of Practice (COP - Section 9):</strong> No member can practice actuarial science in India — whether as a sole practitioner, partner, or signing appointed actuary — without holding a valid annual COP granted by the Council.</li>
        <li><strong>Removal from Register (Section 11):</strong> The Council shall remove the name of any member who:
          <ul>
            <li>Has died.</li>
            <li>Has failed to pay the prescribed annual membership subscription fee within the specified time.</li>
            <li>Has become of unsound mind by a court order.</li>
            <li>Has been adjudged an undischarged insolvent.</li>
            <li>Has been expelled or removed from membership pursuant to an order of the Disciplinary Committee or Appellate Authority.</li>
          </ul>
        </li>
      </ul>

      <h4>3. Composition & Term of Council (Sections 12 & 14)</h4>
      <ul>
        <li><strong>Council Composition:</strong> Maximum of <strong>16 members</strong>:
          <ul>
            <li>Minimum of <strong>9 members</strong> elected by Fellows and Associates from among themselves.</li>
            <li>Maximum of <strong>4 members nominated by the Central Government</strong> representing the Ministry of Finance, IRDAI, or insurance/financial sector.</li>
            <li>Up to <strong>3 members</strong> nominated or ex-officio.</li>
          </ul>
        </li>
        <li><strong>Term of Office:</strong> Elected and nominated members hold office for a period of <strong>three years</strong> from the date of constitution.</li>
        <li><strong>Office Bearers:</strong> The Council elects from among its elected members a President, Vice-President, and Honorary Secretary.</li>
      </ul>

      <h4>4. Quality Review Board (QRB - Sections 43 & 44)</h4>
      <ul>
        <li><strong>Establishment:</strong> Constituted by the <strong>Central Government</strong> under Section 43 as an independent statutory supervisory body.</li>
        <li><strong>Composition:</strong> Chairperson (a person of high eminence) + <strong>4 other members</strong> (2 nominated by Central Government and 2 nominated by the Council).</li>
        <li><strong>Statutory Functions (Section 44):</strong>
          <ol>
            <li>To fix standards for the services provided by the members of the Institute.</li>
            <li>To review the quality of services provided by the members, including audit and consulting actuarial assignments.</li>
            <li>To guide the Council on the lines on which quality of services should be improved.</li>
          </ol>
        </li>
      </ul>

      <h4>5. Criminal Offenses & Monetary Penalties (Section 38 & 39)</h4>
      <ul>
        <li><strong>Section 38 (False Claim / Unlawful Practice):</strong> Any person falsely claiming to be a member of the Institute or practicing without a COP is guilty of a criminal offense:
          <ul>
            <li><strong>First Conviction:</strong> Fine up to <strong>Rs. 1,000</strong>.</li>
            <li><strong>Subsequent Convictions:</strong> Imprisonment for a term up to <strong>6 months</strong>, or fine up to <strong>Rs. 5,00,0</strong> (or both).</li>
          </ul>
        </li>
        <li><strong>Section 39 (Misuse of Institute Name/Title):</strong> Unauthorized use of the name of the Institute or award of actuarial degrees/diplomas punishable with fine up to <strong>Rs. 10,000</strong>.</li>
      </ul>

      <h4>6. Statutory Appellate Authority (Section 36)</h4>
      <ul>
        <li>Any member or complainant aggrieved by an order of the Board of Discipline or Disciplinary Committee imposing a penalty may appeal to the <strong>Appellate Authority</strong>.</li>
        <li><strong>Limitation Period:</strong> Appeal must be preferred within <strong>90 days</strong> from the date on which the order is communicated.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>Act 35 of 2006 took effect 10 Nov 2006.</li>
          <li>Council has max 16 members; 3-year term of office.</li>
          <li>QRB is established by Central Government (Chairperson + 4 members).</li>
          <li>Appellate Authority appeal window = Exactly 90 days.</li>
          <li>Practice without COP = Criminal offense under Section 38.</li>
        </ul>
      </div>
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
      <h4>1. Council Powers & Regulatory Authority (Section 19)</h4>
      <ul>
        <li><strong>Rule-Making Power:</strong> The Council is the supreme administrative body empowered under Section 19 to formulate regulations with the prior approval of the Central Government.</li>
        <li><strong>Professional Standards Issuance:</strong> Council prescribes mandatory Actuarial Practice Standards (APSs), Guidance Notes (GNs), and Continuing Professional Development (CPD) requirements.</li>
        <li><strong>Financial Governance:</strong> Approves the annual budget, appoints statutory auditors, and submits audited accounts and annual reports to the Central Government and Parliament.</li>
      </ul>

      <h4>2. Practice Advisory Groups (PAGs)</h4>
      <ul>
        <li><strong>Specialized Technical Bodies:</strong> PAGs exist for Life Insurance, General Insurance, Health Insurance, Pensions & Social Security, Enterprise Risk Management (ERM), and Banking.</li>
        <li><strong>Core Functions:</strong>
          <ul>
            <li>Monitor technical and regulatory shifts (e.g. Ind AS 117, Risk-Based Capital / RBC).</li>
            <li>Draft new actuarial practice standards and guidance notes for Council approval.</li>
            <li>Conduct capacity-building seminars, peer review workshops, and technical webinars.</li>
          </ul>
        </li>
      </ul>

      <h4>3. Key Standing Statutory Committees</h4>
      <ul>
        <li><strong>Executive Committee:</strong> Oversees day-to-day administrative affairs between Council sessions.</li>
        <li><strong>Examination Committee:</strong> Manages curriculum syllabus, question paper secrecy, online examination security, and pass mark determinations.</li>
        <li><strong>Finance & Audit Committee:</strong> Ensures budgetary controls, fiscal compliance, and external statutory audit coordination.</li>
        <li><strong>Professionalism & Ethics Committee:</strong> Advises members on ethical dilemmas and reviews updates to PCS v4.0.</li>
      </ul>

      <h4>4. India Fellowship Seminar (IFS)</h4>
      <ul>
        <li><strong>Mandatory Transition Seminar:</strong> A compulsory residential or intensive seminar designed for actuarial candidates prior to being admitted as Fellows of the Institute (FIAI).</li>
        <li><strong>Educational Mission:</strong> Focuses on professional judgment, ethics under pressure, public interest primacy, communication with non-actuarial boards, and peer accountability.</li>
        <li><strong>MCQ Examination Benchmark:</strong> 30 Multiple Choice Questions in 60 minutes with a strict <strong>60% passing benchmark (18 out of 30 marks)</strong> with no negative marking.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>Council regulations require prior approval of the Central Government.</li>
          <li>PAGs advise on practice standards but only Council has power to enact APSs.</li>
          <li>IFS pass mark = 60% (18 marks out of 30); 60-minute duration.</li>
        </ul>
      </div>
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
      <h4>1. The Disciplinary Directorate & Director (Discipline) (Section 28)</h4>
      <ul>
        <li><strong>Administrative Head:</strong> Headed by the <strong>Director (Discipline)</strong> appointed by the Council under Section 28.</li>
        <li><strong>Receipt of Complaints:</strong> Any complaint or information alleging misconduct against any Fellow or Associate is received by the Director.</li>
        <li><strong>Symmetrical 21-Day Pleadings:</strong>
          <ul>
            <li>Director forwards complaint to respondent actuary, who must file a written defense within <strong>21 days</strong>.</li>
            <li>Defense is provided to the complainant, who has <strong>21 days</strong> to submit a rejoinder.</li>
          </ul>
        </li>
        <li><strong>Prima Facie Opinion:</strong> Director examines all evidence and forms a <em>prima facie opinion</em> within <strong>60 days</strong> as to whether the member is guilty of misconduct, classifying it under the First or Second Schedule.</li>
      </ul>

      <h4>2. First Schedule Misconduct & Board of Discipline (Section 26 & 29)</h4>
      <ul>
        <li><strong>Composition:</strong> A Council member as Presiding Officer + <strong>2 other members</strong> (one Council member, one eminent external nominee).</li>
        <li><strong>Jurisdiction:</strong> Professional or other misconduct of relatively minor nature (e.g., fee-splitting with non-members, soliciting clients directly, unauthorized letterheads).</li>
        <li><strong>Scale of Penalties (Section 29):</strong>
          <ol>
            <li><strong>Reprimand</strong> of the member.</li>
            <li><strong>Suspension</strong> from membership for up to <strong>three months</strong>.</li>
            <li><strong>Fine</strong> up to <strong>Rs. 1,00,000 (Rupees One Lakh)</strong>.</li>
          </ol>
        </li>
      </ul>

      <h4>3. Second Schedule Misconduct & Disciplinary Committee (Section 26 & 30)</h4>
      <ul>
        <li><strong>Composition:</strong> President or Vice-President as Presiding Officer + <strong>2 Council members</strong> + <strong>2 external experts nominated by Central Government</strong> (Total: 5 members).</li>
        <li><strong>Jurisdiction:</strong> Severe professional misconduct (gross negligence, certifying actuarial valuations without verifying data, embezzlement, moral turpitude, breach of statutory duties).</li>
        <li><strong>Scale of Penalties (Section 30):</strong>
          <ol>
            <li><strong>Reprimand</strong> of the member.</li>
            <li><strong>Suspension</strong> or <strong>Permanent Removal</strong> of the member's name from the Register.</li>
            <li><strong>Fine</strong> up to <strong>Rs. 5,00,000 (Rupees Five Lakhs)</strong>.</li>
          </ol>
        </li>
      </ul>

      <h4>4. Appeals to the Appellate Authority (Section 36)</h4>
      <ul>
        <li>Any member penalised by the Board of Discipline or Disciplinary Committee has a statutory right of appeal.</li>
        <li>Appeal must be filed within <strong>90 days</strong> from the date of communication of the order.</li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>Director (Discipline) forms prima facie opinion within 60 days.</li>
          <li>Board of Discipline max suspension = 3 months; max fine = Rs. 1 Lakh.</li>
          <li>Disciplinary Committee max penalty = Permanent removal; max fine = Rs. 5 Lakhs.</li>
          <li>Appellate Authority limitation period = Exactly 90 days.</li>
        </ul>
      </div>
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
      <h4>1. Scope, Purpose & Applicability (Clauses 1–3)</h4>
      <ul>
        <li><strong>Effective Date:</strong> Takes effect on <strong>17 January 2026</strong>, governing all registered student members, exam candidates, seminar attendees, and Associates/Fellows when taking examinations.</li>
        <li><strong>Foundational Philosophy:</strong> Students are prospective actuaries and must demonstrate the highest ethical standards of integrity, respect, academic honesty, and collegiality.</li>
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
        <li><strong>Appeal:</strong> Appeal lies to the <strong>President of the Institute</strong> within <strong>90 days</strong> of order communication.</li>
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
    shortTitle: "APS 9: CPD Regulations",
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
    category: "APS 34 & FT-IGN 31: Practice & Audit Standards",
    shortTitle: "APS 34 & FT-IGN 31 (Ind AS 117)",
    ref: "APS 34 (ISAP 1) & FT-IGN 31 (Audit under Ind AS 117)",
    icon: "📊",
    desc: "General practice definitions ('Must' vs 'Should'), Auditing Actuary cooling-off (1 yr), 4-yr rotation, access asymmetry & 5-step escalation.",
    briefHtml: `
      <h4>1. APS 34: General Actuarial Practice (aligned with ISAP 1)</h4>
      <ul>
        <li><strong>Foundational Practice Standard:</strong> Applies to all actuarial services performed by members of the IAI unless superseded by a specific practice standard.</li>
        <li><strong>Mandatory Drafting Language Conventions:</strong>
          <ul>
            <li><strong>'Must':</strong> Absolute, unconditional requirement. Departure is only permissible if directly conflicting with statutory law.</li>
            <li><strong>'Should':</strong> Standard actuarial practice with rebuttable presumption. Departure requires explicit disclosure of reasons and impact.</li>
            <li><strong>'May':</strong> Permissible practice; discretionary choice.</li>
          </ul>
        </li>
        <li><strong>Documentation Sufficiency Standard:</strong> Working papers and reports must be documented with sufficient clarity that <strong>another actuary qualified in the same practice area</strong> can review the work, understand the methodology, replicate the calculations, and evaluate the reasonableness of all judgments.</li>
        <li><strong>Materiality:</strong> Evaluated from the perspective of the intended user's economic decision-making.</li>
      </ul>

      <h4>2. FT-IGN 31: The Auditing Actuary under Ind AS 117 (Oct 2026)</h4>
      <ul>
        <li><strong>Auditor's Expert Role:</strong> The Auditing Actuary acts as an Auditor's Expert under ICAI Standard on Auditing <strong>SA 620</strong> to support the statutory financial statement auditor under Ind AS 117.</li>
        <li><strong>Independence & Cooling-off Safeguards (Para 3.2.4):</strong>
          <ul>
            <li>Cannot be an employee of the insurance company within the past <strong>1 year</strong>.</li>
            <li>Mandatory <strong>1-year cooling-off period</strong> if previously acted as Appointed Actuary, external reserving consultant, or vendor of key actuarial valuation software to the company.</li>
          </ul>
        </li>
        <li><strong>Mandatory Partner Rotation (Para 3.2.5):</strong> Maximum tenure of <strong>4 consecutive years</strong> as Auditing Actuary, followed by a mandatory <strong>3-year cooling-off period</strong>. Maximum <strong>3 concurrent audit engagements</strong>.</li>
        <li><strong>Working Paper Access Asymmetry (Para 3.19.5):</strong>
          <ul>
            <li>The statutory auditor has full, unrestricted access to all actuarial challenge memos, models, and working papers.</li>
            <li>The insurance company management has <strong>restricted access</strong> and no statutory right to inspect internal challenge memos exchanged between the auditing actuary and the auditor.</li>
          </ul>
        </li>
        <li><strong>Five-Step Disagreement Escalation Pathway (Para 3.23):</strong>
          <ol>
            <li><strong>Level 1:</strong> Engagement-level resolution between Auditing Actuary and Appointed Actuary.</li>
            <li><strong>Level 2:</strong> Audit Engagement Partner & Person Responsible for Ind AS 117.</li>
            <li><strong>Level 3:</strong> Engagement Quality Control Reviewer (EQCR under SA 220) & Audit Committee.</li>
            <li><strong>Level 4:</strong> Board of Directors / Those Charged With Governance (TCWG).</li>
            <li><strong>Level 5:</strong> Regulators (IRDAI & IAI) — <strong>Confidentiality is legally overridden in the public interest</strong>.</li>
          </ol>
        </li>
        <li><strong>Technical Safeguards & Rules:</strong>
          <ul>
            <li><strong>PAA Eligibility:</strong> Safe harbour (Para 53(b)) strictly requires coverage period of the whole contract &le; 1 year; artificially carving multi-year policies into annual tranches is strictly prohibited.</li>
            <li><strong>Discount Curve:</strong> Must utilize the IRDAI-prescribed CCIL Zero-Coupon Yield Curve.</li>
            <li><strong>Retention of Audit Working Papers:</strong> Retained for a minimum of <strong>7 years</strong> under ICAI SA 230.</li>
          </ul>
        </li>
      </ul>

      <div style="background: var(--bg-subtle); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
        <strong style="color: var(--primary);">Crucial Points to Remember for Fellowship Exam:</strong>
        <ul style="margin-bottom: 0; padding-left: 1.15rem; font-size: 0.85rem;">
          <li>'Must' = mandatory; 'Should' = standard practice requiring justification if departed.</li>
          <li>Auditing Actuary cooling-off = 1 year; Max consecutive tenure = 4 years (followed by 3-yr cooling-off).</li>
          <li>Disagreement escalation has 5 distinct levels ending with Regulator disclosure.</li>
          <li>Management CANNOT inspect internal audit challenge memos (Access Asymmetry).</li>
          <li>Audit working papers retention = Exactly 7 years (under SA 230).</li>
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

  // Randomize 25 questions per topic practice session from the 105 unique scenario pool
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
  
  const isMock = mode === "mock";
  const finishTopBtn = document.getElementById("finishExamTopBtn");
  const submitBottomBtn = document.getElementById("submitExamBottomBtn");
  const timerBox = document.getElementById("examTimerBox");

  if (isMock) {
    if (finishTopBtn) finishTopBtn.style.display = "inline-flex";
    if (submitBottomBtn) submitBottomBtn.style.display = "block";
    if (timerBox) timerBox.style.display = "flex";
    updateTimerDisplay();
    startTimer();
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
