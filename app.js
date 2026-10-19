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
    "id": "pcs",
    "category": "Professional Conduct Standards (PCS v4.0)",
    "shortTitle": "PCS v4.0 Conduct Rules",
    "ref": "Section 19(2)(i) of Actuaries Act 2006",
    "icon": "⚖️",
    "desc": "Ethical standards, client confidentiality exceptions, conflict of interest, change of advisor & 10-day handover rule.",
    "briefHtml": "\n      <div class=\"study-guide-intro\">\n        <h4>📖 Foundational Concept: What is the PCS and Why Does It Exist?</h4>\n        <p>If you have never studied professional ethics before, think of the <strong>Professional Conduct Standards (PCS)</strong> as the ethical constitution governing every actuary in India. Actuaries do not just calculate formulas in isolation—they determine the financial security of life insurance policyholders, general insurance claimants, and millions of elderly citizens relying on retirement pension funds. Because non-actuaries (clients, company directors, and the general public) cannot easily verify complex mathematical models, the actuarial profession rests entirely upon <strong>absolute public trust</strong>. Issued by the Council of the Institute of Actuaries of India (IAI) under <strong>Section 19(2)(i) of the Actuaries Act, 2006</strong>, Version 4.0 of the PCS took effect on <strong>04 September 2021</strong>, superseding all previous versions.</p>\n      </div>\n\n      <div class=\"study-toc\">\n        <a href=\"#pcs-sec1\">1. Scope & Primacy of Law</a>\n        <a href=\"#pcs-sec2\">2. Core Ethical Principles</a>\n        <a href=\"#pcs-sec3\">3. Confidentiality & 3 Exceptions</a>\n        <a href=\"#pcs-sec4\">4. Conflicts of Interest</a>\n        <a href=\"#pcs-sec5\">5. Change of Advisor (10-Day Rule)</a>\n        <a href=\"#pcs-sec6\">6. Fees & Commercial Conduct</a>\n        <a href=\"#pcs-sec7\">7. Misconduct Reporting</a>\n        <a href=\"#pcs-sec8\">8. Crucial Exam Traps</a>\n      </div>\n\n      <div class=\"pill-stat-grid\">\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">v4.0</span><span class=\"stat-label\">Effective 04.09.2021</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">10 Days</span><span class=\"stat-label\">Handover Response Window</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">3 Exceptions</span><span class=\"stat-label\">Strict Confidentiality Carve-Outs</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">Law Prevails</span><span class=\"stat-label\">Overrides PCS & Contracts</span></div>\n      </div>\n\n      <div class=\"study-section\" id=\"pcs-sec1\">\n        <h3>1. Statutory Authority, Universal Scope & Primacy of Law</h3>\n        <h4>A. Legal Origin & Council Mandate</h4>\n        <p>The PCS is not merely an optional best-practice recommendation; it is subordinate statutory legislation enacted under the powers conferred upon the Council by Section 19(2)(i) of the Actuaries Act, 2006. Any breach of the PCS constitutes prima facie professional misconduct under the Schedules of the Act.</p>\n        <h4>B. Universal Scope (Para 1.1)</h4>\n        <p>The PCS applies unconditionally to <strong>all classes of members</strong> of the Institute of Actuaries of India:</p>\n        <ul>\n          <li><strong>Fellows (FIAI):</strong> Fully qualified actuaries holding fellowship.</li>\n          <li><strong>Associates (AIAI):</strong> Members who have achieved associate qualification.</li>\n          <li><strong>Students:</strong> Registered student members studying for examinations.</li>\n          <li><strong>Affiliates & Honorary Members:</strong> Overseas or honorary members registered with IAI.</li>\n          <li><strong>Employment Status Invariant:</strong> Applies whether the member is an employee, consultant, sole practitioner, corporate director, academician, or government regulator.</li>\n          <li><strong>Geographical Invariant:</strong> Applies to Indian actuaries practicing in India or abroad, and overseas actuaries practicing in India.</li>\n        </ul>\n        <div class=\"statutory-callout\">\n          <strong>Para 1.2 — The Principle of Primacy of Law:</strong>\n          Where professional guidance, PCS provisions, employer instructions, or contractual terms conflict with statutory legislation or judicial case law, <strong>the requirements of law strictly prevail</strong>. An actuary can never claim contractual duty to an employer or adherence to PCS as an excuse for violating Indian statutory law.\n        </div>\n        <p><strong>Para 5.1 — Strict Prohibition of the Ignorance Defense:</strong> Ignorance of the PCS, the Actuaries Act, or relevant Actuarial Practice Standards (APSs) cannot be pleaded as a defense or mitigating circumstance in any disciplinary proceeding.</p>\n      </div>\n\n      <div class=\"study-section\" id=\"pcs-sec2\">\n        <h3>2. Core Ethical Principles & Duty of Care (Para 2)</h3>\n        <p>The PCS establishes four foundational pillars that govern all professional work:</p>\n        <ul>\n          <li><strong>1. Integrity & Honesty (Para 2.1):</strong> Members must act with honesty, fairness, and highest professional integrity. They must never knowingly mislead, conceal material facts, or engage in conduct that brings the actuarial profession or the Institute into disrepute.</li>\n          <li><strong>2. Objectivity & Independence:</strong> Advice must be impartial and unbiased. Actuaries must resist commercial, organizational, or political pressures seeking to dictate technical results. Actuaries must prioritize <em>substance over form</em>—complying mechanically with a regulatory formula while ignoring known adverse realities constitutes misconduct.</li>\n          <li><strong>3. Competence & Due Care:</strong> A member must only accept professional work if they possess the requisite training, domain experience, and technical resources. If specialized knowledge is lacking, the actuary must either obtain expert assistance with client consent or decline the engagement.</li>\n          <li><strong>4. Courtesy & Professional Respect:</strong> Actuaries must conduct interactions with clients, regulators, colleagues, and the public with dignity, fairness, and professional courtesy.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"pcs-sec3\">\n        <h3>3. Duty of Confidentiality & The Three Strict Exceptions (Para 3)</h3>\n        <p>Confidentiality is an absolute legal and ethical duty. All data, client strategies, policyholder records, and financial assessments learned in a professional capacity are strictly confidential. <strong>Crucial Rule:</strong> The duty of confidentiality continues indefinitely even after the client relationship or employment terminates!</p>\n        \n        <h4>The Three Exclusive Exceptions Permitting Disclosure (Para 3.2):</h4>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>Exception</th>\n                <th>Legal Basis</th>\n                <th>Procedural Pre-Requisites</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>1. Statutory / Judicial Compulsion</strong></td>\n                <td>Compelled by a court of law, statutory regulator (IRDAI), or tribunal exercising powers of a civil court.</td>\n                <td>Verify that the summons/order is legally valid and issued by a competent authority. Disclose only the specific information required by law.</td>\n              </tr>\n              <tr>\n                <td><strong>2. Public Interest Whistleblowing</strong></td>\n                <td>Where non-disclosure would permit serious financial crime, widespread fraud, money laundering, or grave public harm.</td>\n                <td><strong>MANDATORY:</strong> The actuary must seek formal, independent legal counsel before disclosing to ensure the whistleblowing criteria are satisfied.</td>\n              </tr>\n              <tr>\n                <td><strong>3. Professional Self-Defense</strong></td>\n                <td>Defending oneself against formal disciplinary charges before IAI or legal proceedings where client conduct is at issue.</td>\n                <td>Disclose only documents and communications strictly necessary to establish the actuary's defense.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"study-section\" id=\"pcs-sec4\">\n        <h3>4. Conflicts of Interest & Informed Consent (Para 4)</h3>\n        <p>A conflict of interest arises whenever an actuary owes professional duties to two or more parties whose interests clash, or where the actuary's personal/commercial interests conflict with their duty to a client.</p>\n        <h4>The Three-Step Protocol:</h4>\n        <ol>\n          <li><strong>Proactive Identification:</strong> Before accepting an engagement (and continuously throughout), the actuary must actively assess actual, potential, and perceived conflicts.</li>\n          <li><strong>Immediate Full Written Disclosure:</strong> The nature and extent of the conflict must be formally disclosed in writing to all affected parties.</li>\n          <li><strong>Explicit Informed Consent:</strong> The actuary may ONLY proceed if <strong>all</strong> affected parties explicitly grant written informed consent after being made aware of the implications.</li>\n        </ol>\n        <p><strong>Organizational Safeguards:</strong> Where informed consent is granted, the actuary/firm must implement structural safeguards: Chinese walls (information barriers), separate engagement teams, and independent peer review actuaries. If safeguards cannot guarantee objective advice, the actuary <strong>must decline or withdraw</strong> from the assignment.</p>\n      </div>\n\n      <div class=\"study-section\" id=\"pcs-sec5\">\n        <h3>5. Change of Actuarial Advisor: The 10-Day Handover Rule (Para 7)</h3>\n        <p>This is one of the most heavily tested areas on the Fellowship exam. Understand the logic from the ground up:</p>\n        <h4>A. Client Autonomy (Para 7.1)</h4>\n        <p>A client has an absolute, unrestricted right to choose, replace, or terminate professional advisors at their sole discretion. An incumbent actuary has zero proprietary right over an engagement.</p>\n        \n        <h4>B. The Successor Actuary's Duties (Para 7.2)</h4>\n        <ul>\n          <li><strong>Request Client Permission:</strong> The newly approached actuary must ask the prospective client for written permission to write to the incumbent actuary.</li>\n          <li><strong>MANDATORY REFUSAL RULE (Para 7.3):</strong> If the prospective client refuses permission to contact the incumbent actuary, the newly approached actuary <strong>MUST DECLINE the appointment unconditionally</strong>. There are no exceptions!</li>\n          <li><strong>Written Inquiry:</strong> Upon receiving client permission, the successor must immediately write to the incumbent actuary inquiring whether there are any professional reasons why the appointment should not be accepted.</li>\n        </ul>\n\n        <h4>C. The Incumbent Actuary's Duties & The 10-Day Clock (Para 7.4)</h4>\n        <ul>\n          <li><strong>The 10-Day Timeline:</strong> The incumbent actuary <strong>must reply in writing within exactly 10 calendar days</strong> of receiving the successor's letter.</li>\n          <li><strong>Professional Matters to Disclose:</strong> The incumbent must disclose any professional reasons (e.g., client attempted to coerce improper reserve understatement, illegal activity, or unethical practices).</li>\n          <li><strong>Unpaid Fees are NOT a Bar:</strong> An outstanding fee dispute between client and incumbent is a commercial matter, not a professional reason to block the successor. The incumbent cannot withhold statutory data or files to blackmail the client for fees!</li>\n          <li><strong>Zero Obstruction:</strong> The incumbent must cooperate professionally and make no attempt to delay, obstruct, or penalize the transition.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"pcs-sec6\">\n        <h3>6. Commercial Practice, Fees & Advertising (Paras 6 & 8)</h3>\n        <ul>\n          <li><strong>Terms of Reference in Writing:</strong> Scope, deliverables, assumptions, and fee basis must be agreed upon in writing before work begins.</li>\n          <li><strong>Contingency Fees Prohibition:</strong> Fee arrangements contingent on the outcome (e.g., paying a higher fee if liabilities come out lower, or if an M&A deal closes) are strictly forbidden where they impair objectivity in actuarial certifications, statutory reserving, or solvency reporting.</li>\n          <li><strong>Commission & Fee-Sharing Bans:</strong> Actuaries cannot pay referral commissions or share fees with non-members for procuring actuarial engagements (First Schedule Misconduct).</li>\n          <li><strong>Advertising & Publicity (Para 8):</strong> Permissible publicity must be informative, objective, and truthful. Actuaries cannot make exaggerated claims, disparage competitors, publish misleading statistics, or claim special official influence with IAI or IRDAI.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"pcs-sec7\">\n        <h3>7. Misconduct Reporting & Cross-Border Reciprocity (Para 5)</h3>\n        <ul>\n          <li><strong>Self-Reporting Mandate (Para 5.2):</strong> A member who commits an unrectifiable material professional breach must immediately self-report to the IAI.</li>\n          <li><strong>Peer Misconduct Protocol (Para 5.3):</strong> Upon discovering apparent misconduct by another member:\n            <ol>\n              <li>First, attempt informal discussion with the peer to seek clarification and prompt rectification (unless inappropriate, prejudicial, or involving fraud).</li>\n              <li>If unresolved, or if serious fraud/misconduct is involved, promptly lodge a formal complaint with the Director (Discipline).</li>\n            </ol>\n          </li>\n          <li><strong>Cross-Border Disciplinary Reciprocity:</strong> If an IAI member is disciplined, fined, or suspended by any overseas actuarial body (IFoA, SOA, CAS, etc.) or financial regulator, they must report this in writing to the IAI Council within <strong>30 days</strong>.</li>\n        </ul>\n      </div>\n\n      <div class=\"exam-trap-box\" id=\"pcs-sec8\">\n        <strong>🚨 CRITICAL EXAM TRAPS & PITFALLS (PCS v4.0):</strong>\n        <ul>\n          <li><strong>Trap 1:</strong> \"The client forbids contacting the previous actuary due to a commercial dispute.\" &rarr; <em>Exam Answer:</em> You MUST refuse the engagement unconditionally. Client refusal = automatic decline.</li>\n          <li><strong>Trap 2:</strong> \"The incumbent actuary refuses to reply within 10 days.\" &rarr; <em>Exam Answer:</em> If no response is received after 10 days and reasonable follow-up, the successor may proceed after notifying IAI, but the incumbent has committed professional misconduct.</li>\n          <li><strong>Trap 3:</strong> \"Employer contract specifies non-compliance with PCS.\" &rarr; <em>Exam Answer:</em> Primacy of Law. PCS overrides employer contracts. If law conflicts with PCS, Law overrides PCS.</li>\n          <li><strong>Trap 4:</strong> \"Public interest disclosure without legal advice.\" &rarr; <em>Exam Answer:</em> Whistleblowing requires independent legal advice prior to disclosure to verify lawful exemption.</li>\n        </ul>\n      </div>\n\n      <div class=\"key-takeaway-box\">\n        <strong>🎯 Executive Key Takeaways:</strong>\n        Law always beats PCS; PCS always beats client/employer contracts. Client refusal to contact incumbent = mandatory refusal. Incumbent has 10 calendar days to reply. Confidentiality is permanent with exactly 3 exceptions (Law, Public Interest, Defense).\n      </div>\n    "
  },
  {
    "id": "act",
    "category": "Actuaries Act 2006 & Statutory Framework",
    "shortTitle": "Actuaries Act 2006 & Statutory Law",
    "ref": "Statutory Act of Parliament No. 35 of 2006",
    "icon": "🏛️",
    "desc": "Statutory incorporation of IAI, Council composition (Sec 12), Certificate of Practice (Sec 9), and Quality Review Board (Sec 43).",
    "briefHtml": "\n      <div class=\"study-guide-intro\">\n        <h4>📖 Foundational Concept: How is the Actuarial Profession Governed in India?</h4>\n        <p>Prior to 2006, the actuarial profession in India operated as a private registered society called the <strong>Actuarial Society of India (ASI)</strong>, founded in 1944. With the opening up of the Indian insurance sector in 2000 under IRDAI, the need arose for a statutory body created by an Act of Parliament—similar to the Institute of Chartered Accountants of India (ICAI) or the Institute of Company Secretaries of India (ICSI). The Parliament of India enacted <strong>Act No. 35 of 2006 (The Actuaries Act, 2006)</strong>, which received Presidential assent on <strong>27 August 2006</strong> and was officially commenced on <strong>10 November 2006</strong>. This Act dissolved the ASI and incorporated the statutory <strong>Institute of Actuaries of India (IAI)</strong>.</p>\n      </div>\n\n      <div class=\"study-toc\">\n        <a href=\"#act-sec1\">1. Enactment & Scope</a>\n        <a href=\"#act-sec2\">2. Key Definitions (Sec 2)</a>\n        <a href=\"#act-sec3\">3. IAI Incorporation (Sec 3-5)</a>\n        <a href=\"#act-sec4\">4. Membership & COP (Sec 6-11)</a>\n        <a href=\"#act-sec5\">5. Council Composition (Sec 12)</a>\n        <a href=\"#act-sec6\">6. QRB (Sec 43-44)</a>\n        <a href=\"#act-sec7\">7. Offences & Penalties (Sec 38-41)</a>\n        <a href=\"#act-sec8\">8. Crucial Exam Traps</a>\n      </div>\n\n      <div class=\"pill-stat-grid\">\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">Act 35</span><span class=\"stat-label\">Enacted in 2006</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">10 Nov 2006</span><span class=\"stat-label\">Statutory Inception Date</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">Max 16</span><span class=\"stat-label\">Council Members (3-Yr Term)</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">Sec 9 COP</span><span class=\"stat-label\">Mandatory License to Practice</span></div>\n      </div>\n\n      <div class=\"study-section\" id=\"act-sec1\">\n        <h3>1. Legislative Origin, Enactment & Territorial Scope</h3>\n        <ul>\n          <li><strong>Parliamentary Enactment:</strong> Act No. 35 of 2006 was passed by both Houses of Parliament to regulate and develop the profession of Actuaries in India.</li>\n          <li><strong>Presidential Assent:</strong> 27 August 2006.</li>\n          <li><strong>Official Gazette Notification & Commencement:</strong> <strong>10 November 2006</strong>.</li>\n          <li><strong>Territorial Jurisdiction (Section 1(2)):</strong> It extends to the <strong>whole of India</strong>.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"act-sec2\">\n        <h3>2. Key Statutory Definitions (Section 2)</h3>\n        <p>Section 2 provides the statutory definitions upon which multiple exam questions are based:</p>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>Section</th>\n                <th>Term</th>\n                <th>Exact Statutory Definition / Scope</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Sec 2(1)(a)</strong></td>\n                <td><strong>\"Actuary\"</strong></td>\n                <td>A person skilled in determining the present effects of future contingent events or in finance modelling and risk analysis in different areas of financial, or other business, or socio-economic problems and for insurance and pension, and who is a <strong>Fellow member</strong> of the Institute.</td>\n              </tr>\n              <tr>\n                <td><strong>Sec 2(1)(b)</strong></td>\n                <td><strong>\"Appointed Actuary\"</strong></td>\n                <td>An actuary appointed by an insurer in accordance with regulations made by the Insurance Regulatory and Development Authority (IRDAI).</td>\n              </tr>\n              <tr>\n                <td><strong>Sec 2(1)(c)</strong></td>\n                <td><strong>\"Authority\"</strong></td>\n                <td>The Insurance Regulatory and Development Authority of India (IRDAI) established under Section 3(1) of the IRDA Act, 1999.</td>\n              </tr>\n              <tr>\n                <td><strong>Sec 2(1)(g)</strong></td>\n                <td><strong>\"Council\"</strong></td>\n                <td>The Council of the Institute constituted under Section 12.</td>\n              </tr>\n              <tr>\n                <td><strong>Sec 2(1)(h)</strong></td>\n                <td><strong>\"Fellow\"</strong></td>\n                <td>A Fellow member of the Institute of Actuaries of India.</td>\n              </tr>\n              <tr>\n                <td><strong>Sec 2(2)</strong></td>\n                <td><strong>\"Being in Practice\"</strong></td>\n                <td>A member is deemed to be in practice when, individually or in partnership with actuaries, for remuneration: (i) engages in actuarial science; (ii) offers to perform actuarial services; (iii) renders professional service/advice in actuarial matters; or (iv) renders other permitted services prescribed by Council.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"study-section\" id=\"act-sec3\">\n        <h3>3. Incorporation of IAI & Dissolution of ASI (Sections 3–5)</h3>\n        <ul>\n          <li><strong>Section 3 (Body Corporate):</strong> Establishes the <strong>Institute of Actuaries of India (IAI)</strong> as a body corporate having perpetual succession and a common seal, with power to acquire, hold, and dispose of property, and to sue or be sued in its name. Head office located in Mumbai (Seawoods Grand Central, Navi Mumbai).</li>\n          <li><strong>Section 4 (Dissolution of ASI):</strong> On the appointed day (10 November 2006), the erstwhile Actuarial Society of India was formally dissolved. All assets, rights, debts, liabilities, contracts, and employees of ASI were transferred to and vested in the statutory IAI.</li>\n          <li><strong>Section 5 (Transfer of Employees):</strong> Every employee of ASI became an employee of IAI with identical remuneration, tenure, and retirement terms.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"act-sec4\">\n        <h3>4. Membership Classes & Mandatory Certificate of Practice (Sections 6–11)</h3>\n        <h4>A. Classes of Members (Section 6)</h4>\n        <p>The Register of Members maintains two primary voting classes: <strong>Fellows</strong> and <strong>Associates</strong>, alongside non-voting student, honorary, and affiliate categories.</p>\n\n        <h4>B. Mandatory Certificate of Practice (COP - Section 9)</h4>\n        <div class=\"statutory-callout\">\n          <strong>Section 9(1) — Mandatory License:</strong>\n          No member of the Institute shall be entitled to practice actuarial science in India unless they hold a valid annual <strong>Certificate of Practice (COP)</strong> granted by the Council. Practicing without a valid COP is a criminal offence under Section 38!\n        </div>\n\n        <h4>C. Removal from Register of Members (Section 11)</h4>\n        <p>The Council must remove from the Register the name of any member who:</p>\n        <ol>\n          <li>Is deceased;</li>\n          <li>Applies for voluntary removal;</li>\n          <li>Has defaulted on payment of prescribed annual membership subscriptions;</li>\n          <li>Has been declared to be of <strong>unsound mind</strong> by a court of competent jurisdiction;</li>\n          <li>Is an <strong>undischarged insolvent</strong>;</li>\n          <li>Has been convicted by a court of an offence involving <strong>moral turpitude</strong> or punishable with imprisonment; or</li>\n          <li>Has been ordered to be removed/expelled pursuant to a disciplinary inquiry under Chapter IV.</li>\n        </ol>\n      </div>\n\n      <div class=\"study-section\" id=\"act-sec5\">\n        <h3>5. Council: Composition, Election & Powers (Sections 12–20)</h3>\n        <h4>A. Composition of Council (Section 12)</h4>\n        <p>The Council is the supreme administrative and governing body of the Institute, capped at a maximum of <strong>16 members</strong>:</p>\n        <ul>\n          <li><strong>Elected Members:</strong> A minimum of <strong>9 members</strong> elected by Fellows and Associates from among themselves through postal/electronic ballot.</li>\n          <li><strong>Central Government Nominees:</strong> Up to <strong>4 members nominated by the Central Government</strong> (representing the Ministry of Finance, IRDAI, or leaders in insurance/banking).</li>\n          <li><strong>Nominated / Ex-Officio:</strong> Up to <strong>3 members</strong> nominated by Council or ex-officio.</li>\n        </ul>\n        <h4>B. Term of Office (Section 14)</h4>\n        <p>Council holds office for a term of <strong>3 years</strong> from the date of its constitution.</p>\n        <h4>C. Office Bearers (Section 17)</h4>\n        <p>The Council elects from among its <em>elected</em> members: a <strong>President</strong>, a <strong>Vice-President</strong>, and an <strong>Honorary Secretary</strong> for a 1-year term (eligible for re-election during their Council tenure).</p>\n        <h4>D. Powers and Duties of Council (Section 19)</h4>\n        <p>Prescribe educational curriculum, conduct examinations, grant COP, prescribe Actuarial Practice Standards (APSs), manage Institute finances, and formulate <strong>Regulations with the prior approval of the Central Government</strong>.</p>\n      </div>\n\n      <div class=\"study-section\" id=\"act-sec6\">\n        <h3>6. Quality Review Board (QRB - Sections 43 & 44)</h3>\n        <p>The QRB is an independent statutory supervisory body designed to ensure high standards of actuarial practice in India.</p>\n        <ul>\n          <li><strong>Constitution (Section 43):</strong> Established directly by the <strong>Central Government</strong>.</li>\n          <li><strong>Composition:</strong> A Chairperson (eminent public figure) + <strong>4 other members</strong> (2 nominated by Central Government, 2 nominated by Council). Tenure: 3 years.</li>\n          <li><strong>Three Statutory Functions (Section 44):</strong>\n            <ol>\n              <li>To <strong>fix standards</strong> for services provided by members of the Institute.</li>\n              <li>To <strong>review the quality of services</strong> provided by members, including actuarial audit services.</li>\n              <li>To <strong>guide members</strong> on improving service quality and statutory/regulatory compliance.</li>\n            </ol>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"act-sec7\">\n        <h3>7. Offences & Penalties (Sections 38, 39 & 41)</h3>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>Section</th>\n                <th>Nature of Offence</th>\n                <th>Statutory Penalties</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Section 38</strong></td>\n                <td>Penalty for falsely claiming to be an Actuary or practicing without a valid COP</td>\n                <td>\n                  <strong>First Conviction:</strong> Fine up to <strong>Rs. 1,000</strong>.<br>\n                  <strong>Subsequent Conviction:</strong> Imprisonment up to <strong>6 months</strong>, or fine up to <strong>Rs. 5,000</strong>, or both.\n                </td>\n              </tr>\n              <tr>\n                <td><strong>Section 39</strong></td>\n                <td>Misuse of Institute name, unauthorized awarding of diplomas or degrees in actuarial science</td>\n                <td>Fine up to <strong>Rs. 10,000</strong>.</td>\n              </tr>\n              <tr>\n                <td><strong>Section 41</strong></td>\n                <td>Cognizance of offences</td>\n                <td>No court shall take cognizance of any offence under this Act except on a complaint made by or under the order of the <strong>Council or the Central Government</strong>. Tried by a Metropolitan Magistrate or Judicial Magistrate of the First Class.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"exam-trap-box\" id=\"act-sec8\">\n        <strong>🚨 CRITICAL EXAM TRAPS & PITFALLS (Actuaries Act 2006):</strong>\n        <ul>\n          <li><strong>Trap 1:</strong> \"Who appoints the Quality Review Board?\" &rarr; <em>Exam Answer:</em> The <strong>Central Government</strong> appoints the QRB (not the IAI President or Council).</li>\n          <li><strong>Trap 2:</strong> \"What is the penalty for practicing without a COP on subsequent conviction?\" &rarr; <em>Exam Answer:</em> Imprisonment up to 6 months, or fine up to Rs. 5,000, or both (First conviction is Rs. 1,000 fine).</li>\n          <li><strong>Trap 3:</strong> \"How many elected members in Council?\" &rarr; <em>Exam Answer:</em> Minimum <strong>9</strong> out of a maximum of 16. Term is <strong>3 years</strong>.</li>\n          <li><strong>Trap 4:</strong> \"Does Council make regulations independently?\" &rarr; <em>Exam Answer:</em> No! Regulations require <strong>prior approval of the Central Government</strong> under Section 56.</li>\n        </ul>\n      </div>\n\n      <div class=\"key-takeaway-box\">\n        <strong>🎯 Executive Key Takeaways:</strong>\n        Act No. 35 of 2006 commenced 10 Nov 2006. Council has max 16 members (min 9 elected, up to 4 Govt nominees); 3-year term. Practicing without COP is a criminal offence under Sec 38. QRB is created by Central Govt (5 members, 3-year term).\n      </div>\n    "
  },
  {
    "id": "gov",
    "category": "IAI Governance, Committees & QRB",
    "shortTitle": "IAI Governance & Council Guidelines",
    "ref": "IAI Website Governance & Council Guidelines",
    "icon": "👔",
    "desc": "Institutional governance, Council powers under Sec 19, 8 Section 21 Committees, 12 Advisory Groups, and Council Guidelines.",
    "briefHtml": "\n      <div class=\"study-guide-intro\">\n        <h4>📖 Foundational Concept: How Does the IAI Operate Day-to-Day?</h4>\n        <p>The Institute of Actuaries of India is not just a building; it is a multi-tiered regulatory and professional machinery. At the top sits the <strong>Council</strong> (16 members). But because Council members are senior leaders who meet periodically, the operational work of formulating standards, running exams, reviewing practice domains, and enforcing ethics is delegated to <strong>Section 21 Standing Committees</strong>, <strong>Practice Advisory Groups (PAGs)</strong>, and <strong>Working Groups (WGs)</strong>. Meanwhile, public oversight is maintained by the independent <strong>Quality Review Board (QRB)</strong>. This module covers the administrative apparatus tested in the Fellowship exam.</p>\n      </div>\n\n      <div class=\"study-toc\">\n        <a href=\"#gov-sec1\">1. Council Leadership</a>\n        <a href=\"#gov-sec2\">2. Sec 21 Standing Committees</a>\n        <a href=\"#gov-sec3\">3. The 12 Advisory Groups</a>\n        <a href=\"#gov-sec4\">4. Specialized Working Groups</a>\n        <a href=\"#gov-sec5\">5. Quality Review Board Setup</a>\n        <a href=\"#gov-sec6\">6. Council Guidelines & AGM</a>\n        <a href=\"#gov-sec7\">7. Crucial Exam Traps</a>\n      </div>\n\n      <div class=\"pill-stat-grid\">\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">6 Active</span><span class=\"stat-label\">Sec 21 Standing Committees</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">12 Groups</span><span class=\"stat-label\">Practice Advisory Groups (PAGs)</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">4 Groups</span><span class=\"stat-label\">Specialized Working Groups</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">QRB</span><span class=\"stat-label\">Sec 43 Independent Oversight</span></div>\n      </div>\n\n      <div class=\"study-section\" id=\"gov-sec1\">\n        <h3>1. The Council & Executive Leadership</h3>\n        <ul>\n          <li><strong>Statutory Mandate:</strong> Sections 12, 14 & 19 of the Actuaries Act, 2006. Council is elected for a <strong>3-year term</strong>.</li>\n          <li><strong>Current Office Bearers:</strong>\n            <ul>\n              <li><strong>President:</strong> K S Gopalakrishnan</li>\n              <li><strong>Vice President:</strong> Pravir Chandra</li>\n              <li><strong>Honorary Secretary:</strong> Kartikey Kandoi</li>\n            </ul>\n          </li>\n          <li><strong>Central Government Nominees (Section 12(1)(b)):</strong>\n            <ul>\n              <li>Shri Debasish Prusty (Notification dated 11/06/2026)</li>\n              <li>Ms. Girija Subramanian (Notification dated 19/08/2025)</li>\n              <li>Shri R. Doraiswamy (Notification dated 19/08/2025)</li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"gov-sec2\">\n        <h3>2. Active Standing Committees Constituted under Section 21</h3>\n        <p>Section 21 of the Act empowers Council to constitute executive standing committees. There are currently <strong>6 active Section 21 Committees</strong>:</p>\n        <ol>\n          <li><strong>Professionalism Committee:</strong> Custodian of ethical standards. Reviews PCS interpretations, advises members on ethical dilemmas, monitors compliance with guidance notes, and reviews disciplinary trends.</li>\n          <li><strong>Audit Committee:</strong> Ensures fiscal integrity, oversees statutory audits, reviews internal controls, and reports directly to Council on risk management.</li>\n          <li><strong>Finance, HR, IT and Admin Committee:</strong> Oversees annual budget preparation, staff human resources at the Secretariat, IT infrastructure, and facilities.</li>\n          <li><strong>Education and Examination Committee:</strong> Oversees syllabus modernization, examination delivery, examiner appointment, paper setting security, and pass benchmarks.</li>\n          <li><strong>Research and Innovation Committee:</strong> Drives empirical actuarial research, mortality/morbidity investigations in India, and emerging tech methodologies.</li>\n          <li><strong>Student Growth and Success Committee:</strong> Focuses on candidate welfare, pass rate analytics, mentoring programs, and academic support.</li>\n        </ol>\n      </div>\n\n      <div class=\"study-section\" id=\"gov-sec3\">\n        <h3>3. The 12 Practice Advisory Groups (PAGs)</h3>\n        <p>PAGs are technical domain-specific think-tanks that draft Guidance Notes, organize seminars, and interface with industry regulators:</p>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>No.</th>\n                <th>Advisory Group</th>\n                <th>Primary Focus Area & Regulatory Interface</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr><td>1</td><td><strong>Examination</strong></td><td>Exam operations, online proctoring standards, and scoring.</td></tr>\n              <tr><td>2</td><td><strong>Education</strong></td><td>Curriculum updates, IFoA syllabus alignment, textbook development.</td></tr>\n              <tr><td>3</td><td><strong>Life Insurance</strong></td><td>Reserving (APS 2), pricing, solvency margins, dynamic hedging.</td></tr>\n              <tr><td>4</td><td><strong>General Insurance</strong></td><td>Non-life reserving (IBNR/IBNER), pricing, claims triangles, Motor TP.</td></tr>\n              <tr><td>5</td><td><strong>Health Care Insurance</strong></td><td>Health indemnity pricing, medical inflation, underwriting rules.</td></tr>\n              <tr><td>6</td><td><strong>Pension & Social Security</strong></td><td>Ind AS 19 / AS 15 valuations, gratuity, public pension solvency.</td></tr>\n              <tr><td>7</td><td><strong>Sustainable Dev & Micro Insurance</strong></td><td>Financial inclusion, low-ticket microinsurance products.</td></tr>\n              <tr><td>8</td><td><strong>Risk Management</strong></td><td>Enterprise Risk Management (ERM), ORSA, risk-based capital (RBC).</td></tr>\n              <tr><td>9</td><td><strong>Banking, Finance & Investments</strong></td><td>Actuarial modeling in banking, ALM, credit risk, IFRS 9 ECL models.</td></tr>\n              <tr><td>10</td><td><strong>Communication</strong></td><td>Actuary India magazine, member newsletters, public relations.</td></tr>\n              <tr><td>11</td><td><strong>Agriculture & Rural Risk</strong></td><td>PMFBY (crop insurance) yield modeling, weather index claims.</td></tr>\n              <tr><td>12</td><td><strong>Professionalism, Ethics & Conduct</strong></td><td>Professional standards advisory, peer reviews, ethical dilemma support.</td></tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"study-section\" id=\"gov-sec4\">\n        <h3>4. Specialized Working Groups (WGs)</h3>\n        <p>Formed on an ad-hoc basis by Council to tackle high-priority, time-sensitive national reforms:</p>\n        <ul>\n          <li><strong>Working Group on IFRS 17 (Ind AS 117):</strong> Financial reporting transition, discount yield curves, GMM/PAA modeling standards.</li>\n          <li><strong>Working Group on AI & Data Science:</strong> Big data analytics, algorithmic transparency, and ethical AI in actuarial pricing.</li>\n          <li><strong>Actuarial Job Placement Working Group (WG-AJP):</strong> Campus recruitment, industry placement, non-traditional actuarial roles.</li>\n          <li><strong>Working Group on Climate Risk & Sustainable Finance:</strong> Scenario testing for transition risk, ESG disclosures, green investments.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"gov-sec5\">\n        <h3>5. Quality Review Board (QRB) Deep Dive</h3>\n        <ul>\n          <li><strong>Statutory Origin:</strong> Section 43(1) of Actuaries Act, 2006. Rules: Actuaries Quality Review Board Rules, 2008.</li>\n          <li><strong>Current Composition:</strong>\n            <ul>\n              <li><strong>Chairperson:</strong> Supratim Bandyopadhyay (Nominated by Central Government)</li>\n              <li><strong>Central Govt Nominees:</strong> Sanjeev Kumar Pujari, G. Ramaswamy</li>\n              <li><strong>Council Nominees:</strong> Gopal Kumar Vishwanath Roy, Padmaja Raghunathan</li>\n            </ul>\n          </li>\n          <li><strong>Tenure:</strong> 3-year part-time appointments.</li>\n          <li><strong>Operating Process:</strong> The QRB selects completed actuarial valuation reports and actuarial audit working files, assigns them to independent Technical Reviewers, evaluates quality against APSs, and submits formal review reports to the Council and the Central Government.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"gov-sec6\">\n        <h3>6. Key Council Guidelines & AGM Procedures</h3>\n        <ul>\n          <li><strong>Conducting AGM Guidelines (Approved 02 March 2013):</strong> Mandates <strong>21 clear days' notice</strong> for Annual General Meetings. Governs quorum, voting by show of hands/ballot, and proxy submission rules.</li>\n          <li><strong>Standard Setting Due Process (Versions 3, 4, 5):</strong> Standardized due process for drafting Actuarial Practice Standards:\n            <ol>\n              <li>Draft prepared by relevant Advisory Group;</li>\n              <li>Exposure Draft published on IAI website for <strong>30 to 60 days</strong> public consultation;</li>\n              <li>Feedback review and redrafting by Advisory Group;</li>\n              <li>Review by Professionalism Committee;</li>\n              <li>Final adoption and enactment by Council under Section 19(2)(i).</li>\n            </ol>\n          </li>\n          <li><strong>Social Media Usage Guidelines:</strong> Holding members strictly accountable for online commentary, LinkedIn posts, or public statements that disparage the Institute, violate confidentiality, or bring the profession into disrepute.</li>\n        </ul>\n      </div>\n\n      <div class=\"exam-trap-box\" id=\"gov-sec7\">\n        <strong>🚨 CRITICAL EXAM TRAPS & PITFALLS (Governance & Committees):</strong>\n        <ul>\n          <li><strong>Trap 1:</strong> \"Who is the Chairperson of the QRB?\" &rarr; <em>Exam Answer:</em> Supratim Bandyopadhyay (appointed by the Central Government).</li>\n          <li><strong>Trap 2:</strong> \"How many Section 21 Standing Committees exist?\" &rarr; <em>Exam Answer:</em> <strong>6 active committees</strong> (Professionalism, Audit, Finance/HR/IT, Education/Exam, Research/Innovation, Student Growth).</li>\n          <li><strong>Trap 3:</strong> \"How many Advisory Groups exist?\" &rarr; <em>Exam Answer:</em> Exactly <strong>12 Practice Advisory Groups</strong>.</li>\n          <li><strong>Trap 4:</strong> \"What is the exposure draft consultation window for a new APS?\" &rarr; <em>Exam Answer:</em> Typically <strong>30 to 60 days</strong> for public comments.</li>\n        </ul>\n      </div>\n\n      <div class=\"key-takeaway-box\">\n        <strong>🎯 Executive Key Takeaways:</strong>\n        Council leads (3-year term). 6 active Sec 21 Committees handle operations. 12 PAGs provide technical domain guidance. 4 specialized WGs tackle immediate national reforms. QRB (Chair + 4 members) provides independent external oversight under Sec 43.\n      </div>\n    "
  },
  {
    "id": "disc",
    "category": "Disciplinary Process & Misconduct",
    "shortTitle": "Disciplinary Process & 2008 Rules",
    "ref": "Sections 26-31 of Act & Disciplinary Rules 2008",
    "icon": "🔨",
    "desc": "Director (Discipline) prima facie opinion, First Schedule (Board of Discipline) vs Second Schedule (Disciplinary Committee).",
    "briefHtml": "\n      <div class=\"study-guide-intro\">\n        <h4>📖 Foundational Concept: How Does IAI Discipline Members?</h4>\n        <p>Self-regulation only works if a profession has a rigorous, fair, and legally binding disciplinary mechanism. If an actuary is accused of incompetence, falsifying reserves, stealing client data, or ethical lapses, how is the case investigated? Chapter IV (Sections 26 to 36) of the Actuaries Act, 2006 and the <strong>Actuaries (Procedure for Enquiry of Professional and Other Misconduct) Rules, 2008</strong> establish a comprehensive <strong>quasi-judicial tribunal system</strong>. It separates investigation from judgment, complies with the principles of natural justice (audi alteram partem — right to be heard), and exercises the powers of a Civil Court.</p>\n      </div>\n\n      <div class=\"study-toc\">\n        <a href=\"#disc-sec1\">1. Disciplinary Directorate</a>\n        <a href=\"#disc-sec2\">2. Symmetrical 21-Day Pleadings</a>\n        <a href=\"#disc-sec3\">3. Board of Discipline (1st Sched)</a>\n        <a href=\"#disc-sec4\">4. Disciplinary Committee (2nd Sched)</a>\n        <a href=\"#disc-sec5\">5. First vs Second Schedule</a>\n        <a href=\"#disc-sec6\">6. Civil Court Powers (Sec 31)</a>\n        <a href=\"#disc-sec7\">7. Appellate Authority (Sec 36)</a>\n        <a href=\"#disc-sec8\">8. Crucial Exam Traps</a>\n      </div>\n\n      <div class=\"pill-stat-grid\">\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">21 Days</span><span class=\"stat-label\">Defense & Rejoinder Window</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">60 Days</span><span class=\"stat-label\">Director Prima Facie Opinion</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">Rs. 1 Lakh</span><span class=\"stat-label\">Board of Discipline Fine Cap</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">Rs. 5 Lakhs</span><span class=\"stat-label\">Disciplinary Committee Fine Cap</span></div>\n      </div>\n\n      <div class=\"study-section\" id=\"disc-sec1\">\n        <h3>1. The Disciplinary Directorate & Director (Discipline) (Section 28)</h3>\n        <ul>\n          <li><strong>Statutory Origin:</strong> Established under Section 28 of the Act, headed by the <strong>Director (Discipline)</strong> appointed by the Council.</li>\n          <li><strong>Role:</strong> Acts as the investigative gatekeeper. Receives all complaints and information regarding misconduct.</li>\n          <li><strong>Suo Motu Inquiries:</strong> The Director can also initiate investigations <em>suo motu</em> upon instructions from the Council.</li>\n          <li><strong>Filing Requirements:</strong> A formal complaint must be filed in <strong>Form I</strong>, verified by affidavit, and accompanied by the prescribed fee.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"disc-sec2\">\n        <h3>2. The Symmetrical 21-Day Pleadings Procedure</h3>\n        <p>The 2008 Disciplinary Rules mandate a strict, symmetrical timetable to guarantee procedural fairness:</p>\n        <ol>\n          <li><strong>Notice to Respondent:</strong> Within 21 days of receipt, Director sends a copy of the complaint to the respondent actuary.</li>\n          <li><strong>Written Statement of Defense:</strong> The respondent actuary must submit their written statement of defense within <strong>21 days</strong> of receipt (extendable by Director up to 15 days for exceptional reasons).</li>\n          <li><strong>Rejoinder:</strong> The defense is served on the complainant, who has <strong>21 days</strong> to submit a written rejoinder.</li>\n          <li><strong>Prima Facie Opinion:</strong> Within <strong>60 days</strong> of receiving the pleadings, the Director (Discipline) must formulate a written <em>prima facie opinion</em> stating whether the member is guilty of misconduct, and whether the misconduct falls under the First Schedule or Second Schedule.</li>\n        </ol>\n      </div>\n\n      <div class=\"study-section\" id=\"disc-sec3\">\n        <h3>3. Board of Discipline (First Schedule Misconduct - Section 29)</h3>\n        <ul>\n          <li><strong>Composition (3 Members):</strong>\n            <ul>\n              <li>A Council member as <strong>Presiding Officer</strong>;</li>\n              <li>One elected Council member;</li>\n              <li>One person nominated by the Central Government.</li>\n            </ul>\n          </li>\n          <li><strong>Jurisdiction:</strong> Handles professional or other misconduct specified exclusively in the <strong>First Schedule</strong> (relatively minor offences).</li>\n          <li><strong>Statutory Penalties (Section 29(2)):</strong>\n            <ol>\n              <li><strong>Reprimand</strong> of the member;</li>\n              <li><strong>Suspension</strong> of member from practice/membership for up to <strong>3 months</strong>;</li>\n              <li><strong>Fine</strong> up to <strong>Rs. 1,00,000 (Rupees One Lakh)</strong>.</li>\n            </ol>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"disc-sec4\">\n        <h3>4. Disciplinary Committee (Second Schedule Misconduct - Section 30)</h3>\n        <ul>\n          <li><strong>Composition (5 Members):</strong>\n            <ul>\n              <li><strong>President or Vice-President</strong> of Council as Presiding Officer;</li>\n              <li>Two elected Council members;</li>\n              <li>Two external experts nominated by the Central Government.</li>\n            </ul>\n          </li>\n          <li><strong>Jurisdiction:</strong> Handles severe misconduct specified in the <strong>Second Schedule</strong>, OR cases involving a mix of both First and Second Schedules.</li>\n          <li><strong>Statutory Penalties (Section 30(2)):</strong>\n            <ol>\n              <li><strong>Reprimand</strong> of the member;</li>\n              <li><strong>Suspension</strong> for any period or <strong>Permanent Removal</strong> of the member's name from the Register;</li>\n              <li><strong>Fine</strong> up to <strong>Rs. 5,00,000 (Rupees Five Lakhs)</strong>.</li>\n            </ol>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"disc-sec5\">\n        <h3>5. Comparative Breakdown: First Schedule vs Second Schedule</h3>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>Attribute</th>\n                <th>First Schedule (Minor)</th>\n                <th>Second Schedule (Severe / Grave)</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Adjudicating Body</strong></td>\n                <td><strong>Board of Discipline</strong> (3 members)</td>\n                <td><strong>Disciplinary Committee</strong> (5 members)</td>\n              </tr>\n              <tr>\n                <td><strong>Presiding Officer</strong></td>\n                <td>Council Member</td>\n                <td>President or Vice-President of IAI</td>\n              </tr>\n              <tr>\n                <td><strong>Max Suspension</strong></td>\n                <td>Up to <strong>3 months</strong></td>\n                <td>Any duration or <strong>Permanent Expulsion</strong></td>\n              </tr>\n              <tr>\n                <td><strong>Monetary Fine Cap</strong></td>\n                <td>Up to <strong>Rs. 1,00,000</strong> (1 Lakh)</td>\n                <td>Up to <strong>Rs. 5,00,000</strong> (5 Lakhs)</td>\n              </tr>\n              <tr>\n                <td><strong>Typical Misconduct Examples</strong></td>\n                <td>\n                  - Soliciting clients directly (touting)<br>\n                  - Improper advertising or firm letterheads<br>\n                  - Fee-splitting with non-members<br>\n                  - Failing to respond to 10-day handover letter\n                </td>\n                <td>\n                  - Gross professional negligence in reserving<br>\n                  - Certifying reports without verifying data<br>\n                  - Breach of client confidentiality<br>\n                  - Embezzlement, fraud, or moral turpitude\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"study-section\" id=\"disc-sec6\">\n        <h3>6. Powers of Civil Court & Natural Justice (Section 31)</h3>\n        <p>The Board of Discipline and Disciplinary Committee are vested with the same powers as a <strong>Civil Court under the Code of Civil Procedure, 1908 (CPC)</strong> in respect of:</p>\n        <ul>\n          <li>Summoning and enforcing the attendance of any person and examining them on oath;</li>\n          <li>Requiring the discovery and production of documents and accounting records;</li>\n          <li>Receiving evidence on affidavits;</li>\n          <li>Issuing commissions for the examination of witnesses or documents.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"disc-sec7\">\n        <h3>7. Statutory Appeals to Appellate Authority (Section 36)</h3>\n        <ul>\n          <li><strong>Statutory Right of Appeal:</strong> Any member or complainant aggrieved by an order of the Board of Discipline or Disciplinary Committee has an unconditional right to appeal to the <strong>Appellate Authority</strong>.</li>\n          <li><strong>Limitation Period:</strong> Exactly <strong>90 days</strong> from the date on which the order is communicated.</li>\n          <li><strong>Powers of Appellate Authority:</strong> Can confirm, modify, or set aside the order, reduce or enhance the penalty, or remit the matter back for fresh inquiry.</li>\n        </ul>\n      </div>\n\n      <div class=\"exam-trap-box\" id=\"disc-sec8\">\n        <strong>🚨 CRITICAL EXAM TRAPS & PITFALLS (Disciplinary Process):</strong>\n        <ul>\n          <li><strong>Trap 1:</strong> \"A complaint involves both First and Second Schedule misconduct. Who hears it?\" &rarr; <em>Exam Answer:</em> The <strong>Disciplinary Committee</strong> hears cases involving both schedules!</li>\n          <li><strong>Trap 2:</strong> \"What is the maximum fine the Board of Discipline can levy?\" &rarr; <em>Exam Answer:</em> <strong>Rs. 1,00,000</strong> (Board of Discipline); <strong>Rs. 5,00,000</strong> (Disciplinary Committee).</li>\n          <li><strong>Trap 3:</strong> \"Can the Board of Discipline expel a member permanently?\" &rarr; <em>Exam Answer:</em> No! Only the Disciplinary Committee can expel or suspend beyond 3 months.</li>\n          <li><strong>Trap 4:</strong> \"Limitation window for appeal to Appellate Authority?\" &rarr; <em>Exam Answer:</em> Exactly <strong>90 days</strong> under Section 36.</li>\n        </ul>\n      </div>\n\n      <div class=\"key-takeaway-box\">\n        <strong>🎯 Executive Key Takeaways:</strong>\n        Director (Discipline) investigates (21 days defense, 21 days rejoinder, 60 days prima facie opinion). First Schedule &rarr; Board of Discipline (3 members, max 3 mo suspension, max Rs. 1L fine). Second Schedule &rarr; Disciplinary Committee (5 members, expulsion, max Rs. 5L fine). Appeal within 90 days to Appellate Authority.\n      </div>\n    "
  },
  {
    "id": "std",
    "category": "Student Code of Conduct",
    "shortTitle": "Student Code of Conduct (2026)",
    "ref": "IAI Student Code (Effective 17.01.2026)",
    "icon": "🎓",
    "desc": "Student Disciplinary Committee (SDC), Rs. 1,000 complaint fee, 15-day mediation, 21-day defense/rejoinder, Rs. 20,000 fine cap.",
    "briefHtml": "\n      <div class=\"study-guide-intro\">\n        <h4>📖 Foundational Concept: Why Do Students Have a Separate Code of Conduct?</h4>\n        <p>While qualified Fellows and Associates are governed by the PCS, actuarial students are in training. But actuarial exams are high-stakes professional assessments where cheating, leaking questions, using AI tools during proctored exams, or falsely styling oneself as an \"Actuary\" can ruin the credibility of the entire qualification. To address emerging technological threats (remote examination fraud, online impersonation, social media harassment), the IAI Council enacted the <strong>Code of Conduct for Student of the IAI</strong>, taking effect on <strong>17 January 2026</strong>. It establishes a dedicated student disciplinary mechanism.</p>\n      </div>\n\n      <div class=\"study-toc\">\n        <a href=\"#std-sec1\">1. Scope & Applicability</a>\n        <a href=\"#std-sec2\">2. Prohibited Misconducts</a>\n        <a href=\"#std-sec3\">3. SDC Composition</a>\n        <a href=\"#std-sec4\">4. Complaint & Mediation</a>\n        <a href=\"#std-sec5\">5. Sanctions Hierarchy</a>\n        <a href=\"#std-sec6\">6. Appeals to President</a>\n        <a href=\"#std-sec7\">7. Crucial Exam Traps</a>\n      </div>\n\n      <div class=\"pill-stat-grid\">\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">17.01.2026</span><span class=\"stat-label\">Effective Date</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">Rs. 1,000</span><span class=\"stat-label\">Complaint Fee (Triplicate)</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">15 Days</span><span class=\"stat-label\">Mediation Window</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">Rs. 20,000</span><span class=\"stat-label\">Maximum Monetary Fine</span></div>\n      </div>\n\n      <div class=\"study-section\" id=\"std-sec1\">\n        <h3>1. Scope, Applicability & Foundational Duty (Clauses 1–3)</h3>\n        <ul>\n          <li><strong>Effective Date:</strong> Takes effect on <strong>17 January 2026</strong>.</li>\n          <li><strong>Universal Student Scope:</strong> Applies to all registered student members of IAI, candidates appearing for examinations, students attending webinars/seminars, and qualified Associates/Fellows when sitting for specialist exam papers.</li>\n          <li><strong>Core Standard:</strong> Students are prospective actuaries and must conduct themselves with absolute honesty, integrity, academic discipline, and respect for the Institute and peers.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"std-sec2\">\n        <h3>2. Prohibited Student Misconducts</h3>\n        <p>The Code classifies student misconduct into three main categories:</p>\n        <h4>A. Examination & Academic Integrity Infractions</h4>\n        <ul>\n          <li>Possession or use of unauthorized electronic devices (smartphones, smartwatches, second screens) during physical or remote proctored examinations.</li>\n          <li>Using Generative AI, automated solvers, or unauthorized reference materials during exams.</li>\n          <li>Impersonation, identity fraud, or arranging a proxy candidate.</li>\n          <li>Leaking, recording, copying, or distributing IAI examination questions (copyright violation).</li>\n          <li>Collusion with other candidates during exam diets.</li>\n        </ul>\n        <h4>B. Title Usurpation & Misrepresentation</h4>\n        <div class=\"statutory-callout\">\n          <strong>Strict Prohibition on Actuary Title:</strong>\n          Students are strictly forbidden from styling themselves as \"Actuary\", \"Consulting Actuary\", \"Associate Actuary\", or appending post-nominals like \"FIAI\" or \"AIAI\" to their names before formal admission to membership. Misrepresenting oneself as an actuary is a criminal offence punishable under Section 38 of the Act!\n        </div>\n        <h4>C. Behavioral Misconduct & Harassment</h4>\n        <ul>\n          <li>Defamatory, abusive, or unprofessional commentary on social media (LinkedIn, WhatsApp groups, forums) against IAI, examiners, or staff.</li>\n          <li>Bullying, discrimination, sexual harassment, or physical violence at IAI premises or events.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"std-sec3\">\n        <h3>3. Student Disciplinary Committee (SDC - Clause 9)</h3>\n        <ul>\n          <li><strong>Constitution:</strong> Appointed by the Council to investigate and adjudicate student misconduct.</li>\n          <li><strong>Composition:</strong> Minimum of <strong>three members</strong> appointed by Council, chaired by a Council member, and including senior Fellow members.</li>\n          <li><strong>Summary Procedure:</strong> Operates under summary inquiry procedures while strictly observing natural justice (right to written defense, right to be heard).</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"std-sec4\">\n        <h3>4. Complaint Filing, Mediation & Investigation Timelines</h3>\n        <ul>\n          <li><strong>Complaint Filing:</strong> Must be submitted in <strong>triplicate</strong>, verified by affidavit, and accompanied by a non-refundable fee of <strong>Rs. 1,000</strong> to the Executive Director / Head of Examination.</li>\n          <li><strong>Suo Motu Inquiries:</strong> The Institute or Head of Examination can initiate proceedings <em>suo motu</em> without an external complaint (e.g., automated AI-proctoring alerts, exam room CCTV recordings).</li>\n          <li><strong>Mediation Window (Clause 11):</strong> Within <strong>15 working days</strong> of complaint receipt, informal mediation/conciliation may be attempted if both parties grant consent.</li>\n          <li><strong>Symmetrical 21-Day Pleadings:</strong>\n            <ul>\n              <li>Respondent student must file written defense within <strong>21 days</strong>.</li>\n              <li>Complainant has <strong>21 days</strong> to submit a rejoinder.</li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"std-sec5\">\n        <h3>5. Scale of Sanctions (Schedule II)</h3>\n        <p>The SDC is empowered to order any of the following statutory sanctions:</p>\n        <ol>\n          <li><strong>Written Admonition / Reprimand</strong> placed on the candidate's permanent student record;</li>\n          <li><strong>Monetary Fine</strong> up to a maximum cap of <strong>Rs. 20,000</strong>;</li>\n          <li><strong>Cancellation of Examination Results</strong> for the relevant session and forfeiture of examination fees;</li>\n          <li><strong>Debarment</strong> from appearing in IAI examinations for a period of up to <strong>5 years</strong>;</li>\n          <li><strong>Permanent Cancellation</strong> of student registration / expulsion from the Institute.</li>\n        </ol>\n      </div>\n\n      <div class=\"study-section\" id=\"std-sec6\">\n        <h3>6. Statutory Appeals</h3>\n        <ul>\n          <li><strong>Appellate Forum:</strong> Any student aggrieved by an order of the SDC may appeal to the <strong>President of the Institute</strong>.</li>\n          <li><strong>Limitation Window:</strong> The appeal must be filed within <strong>90 days</strong> of the date of communication of the SDC order.</li>\n        </ul>\n      </div>\n\n      <div class=\"exam-trap-box\" id=\"std-sec7\">\n        <strong>🚨 CRITICAL EXAM TRAPS & PITFALLS (Student Code 2026):</strong>\n        <ul>\n          <li><strong>Trap 1:</strong> \"Who does a student appeal to against an SDC order?\" &rarr; <em>Exam Answer:</em> The <strong>President of the Institute</strong> (not the Appellate Authority under Sec 36, which is for members!).</li>\n          <li><strong>Trap 2:</strong> \"What is the maximum monetary fine the SDC can impose?\" &rarr; <em>Exam Answer:</em> <strong>Rs. 20,000</strong>.</li>\n          <li><strong>Trap 3:</strong> \"What is the non-refundable complaint fee?\" &rarr; <em>Exam Answer:</em> <strong>Rs. 1,000</strong> (submitted in triplicate).</li>\n          <li><strong>Trap 4:</strong> \"Can a student use the title 'Actuary' on LinkedIn if they have passed all core exams?\" &rarr; <em>Exam Answer:</em> NO! Strictly prohibited until admitted as a Fellow under Section 6. Criminal offence under Sec 38.</li>\n        </ul>\n      </div>\n\n      <div class=\"key-takeaway-box\">\n        <strong>🎯 Executive Key Takeaways:</strong>\n        Takes effect 17 Jan 2026. SDC has min 3 members. Complaint fee = Rs. 1,000 in triplicate. Mediation = 15 working days; Defense/Rejoinder = 21 days each. Max fine = Rs. 20,000; max debarment = 5 years. Appeal lies to IAI President within 90 days.\n      </div>\n    "
  },
  {
    "id": "aps9",
    "category": "APS 9: Continuing Professional Development (CPD)",
    "shortTitle": "APS 9: Professional Development",
    "ref": "APS 9 (v4.00) under Section 19(2)(i)",
    "icon": "📖",
    "desc": "Mandatory 24h CPD for COP holders (15 tech + 6 prof + 3 other), +8h per extra area, Category 2 (15h), 5-yr records & 1st July web listing.",
    "briefHtml": "\n      <div class=\"study-guide-intro\">\n        <h4>📖 Foundational Concept: Why is CPD Mandatory for Actuaries?</h4>\n        <p>Actuarial science is not static. Regulations change (e.g. Ind AS 117), mortality patterns shift, dynamic solvency models evolve, and new risks like cyber and climate change emerge. An actuary who qualified 10 years ago and never refreshed their skills is dangerous to the public interest. <strong>Actuarial Practice Standard 9 (APS 9 v4.00)</strong> mandates annual <strong>Continuing Professional Development (CPD)</strong> under Section 19(2)(i) of the Actuaries Act, 2006. It ensures that every actuary signing public certificates maintains contemporary technical and ethical competence. The CPD compliance year runs from <strong>1st April to 31st March</strong>.</p>\n      </div>\n\n      <div class=\"study-toc\">\n        <a href=\"#aps9-sec1\">1. Statutory Basis & Year</a>\n        <a href=\"#aps9-sec2\">2. Membership Categories</a>\n        <a href=\"#aps9-sec3\">3. Category 1 Breakdown (24h)</a>\n        <a href=\"#aps9-sec4\">4. Additional Practice Area Rule</a>\n        <a href=\"#aps9-sec5\">5. Daily Conversion Scale</a>\n        <a href=\"#aps9-sec6\">6. Compliance Deadlines</a>\n        <a href=\"#aps9-sec7\">7. Crucial Exam Traps</a>\n      </div>\n\n      <div class=\"pill-stat-grid\">\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">24 Hours</span><span class=\"stat-label\">COP Holder (Cat 1) Annual Total</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">+8 Hours</span><span class=\"stat-label\">Per Additional Practice Area</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">6 Hours</span><span class=\"stat-label\">Maximum Daily Credit (&ge;5.5h)</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">1st July</span><span class=\"stat-label\">Public Website Default Listing</span></div>\n      </div>\n\n      <div class=\"study-section\" id=\"aps9-sec1\">\n        <h3>1. Statutory Authority & Annual Compliance Cycle</h3>\n        <ul>\n          <li><strong>Statutory Origin:</strong> Mandated by Council under Section 19(2)(i) of the Actuaries Act, 2006. Version 4.00 took effect on 1st April 2021.</li>\n          <li><strong>Annual Compliance Year:</strong> Runs annually from <strong>1st April to 31st March</strong>.</li>\n          <li><strong>Core Philosophy:</strong> Learning must be <em>verifiable</em> (supported by objective proof like certificates, attendance logs, or recordings).</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"aps9-sec2\">\n        <h3>2. Membership Categories & Required Annual Hours (Section 4)</h3>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>Category</th>\n                <th>Target Membership Profile</th>\n                <th>Mandatory Verifiable CPD Requirement</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Category 1</strong></td>\n                <td><strong>Fellows holding a Certificate of Practice (COP Holders)</strong><br>Actuaries in active professional practice or signing statutory reports.</td>\n                <td>\n                  <strong>Minimum 24 hours per year:</strong><br>\n                  &bull; Min <strong>15 hours</strong> technical in primary practice area.<br>\n                  &bull; Min <strong>6 hours</strong> professional conduct & ethics.<br>\n                  &bull; Max <strong>3 hours</strong> other verifiable development.\n                </td>\n              </tr>\n              <tr>\n                <td><strong>Category 2</strong></td>\n                <td><strong>Active Fellows without COP</strong><br>Actuaries employed in corporate/academic roles who do not sign statutory certifications.</td>\n                <td>\n                  <strong>Minimum 15 hours per year:</strong><br>\n                  &bull; Min <strong>9 hours</strong> technical CPD.<br>\n                  &bull; Min <strong>3 hours</strong> professional conduct.<br>\n                  &bull; Max <strong>3 hours</strong> other verifiable learning.\n                </td>\n              </tr>\n              <tr>\n                <td><strong>Category 3</strong></td>\n                <td><strong>Inactive / Fully Retired Fellows</strong><br>Members who have completely ceased actuarial practice but retain FIAI title.</td>\n                <td>\n                  <strong>Exempt from annual CPD.</strong><br>\n                  Must apply in writing at least <strong>3 months prior</strong> to membership year-end. If resuming practice, must complete catch-up CPD before COP issue.\n                </td>\n              </tr>\n              <tr>\n                <td><strong>Category 4</strong></td>\n                <td><strong>Associates & Affiliates</strong></td>\n                <td>Encouraged to follow CPD framework; mandatory if prescribed for specific roles.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"study-section\" id=\"aps9-sec3\">\n        <h3>3. Deep Dive: Category 1 (COP Holders) Requirements</h3>\n        <p>A Category 1 actuary must satisfy <strong>all three</strong> sub-minimums within their 24 hours:</p>\n        <ul>\n          <li><strong>1. Verifiable Technical CPD (&ge; 15 Hours):</strong> Specialized actuarial topics in the member's designated primary practice area (Life, General, Health, Pensions, Banking, ERM). Examples: stochastic reserving models, IFRS 17 contract boundaries, dynamic solvency, longevity risk.</li>\n          <li><strong>2. Professional Conduct & Ethics (&ge; 6 Hours):</strong> Sessions on the PCS, Actuaries Act, conflict resolution, whistleblowing, ethical case studies, India Fellowship Seminar (IFS).</li>\n          <li><strong>3. Other Verifiable Learning (&le; 3 Hours):</strong> Soft skills, leadership, taxation updates, business communication.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"aps9-sec4\">\n        <h3>4. The Multiple Practice Areas Rule (Section 4.1.4)</h3>\n        <div class=\"statutory-callout\">\n          <strong>Crucial Mathematical Rule for Exam:</strong>\n          Any Category 1 COP holder who practices in <strong>more than one practice area</strong> (for example, signing both Life and Health valuations, or General Insurance and Pensions) must complete an <strong>additional 8 verifiable technical CPD hours for EACH supplementary practice area</strong>!\n        </div>\n        <p><em>Example:</em> An actuary holding a COP for Life Insurance who also practices in Health Insurance needs: 24 base hours (including 15 Life technical + 6 professional) + <strong>8 Health technical hours</strong> = <strong>32 total verifiable hours</strong>!</p>\n      </div>\n\n      <div class=\"study-section\" id=\"aps9-sec5\">\n        <h3>5. Verifiable Learning & The Discrete Daily Conversion Scale (Section 9.2)</h3>\n        <p>You cannot just count raw minutes. Section 9.2 provides a strict discrete mathematical conversion bracket:</p>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>Actual Duration of Formal Event (Excluding Breaks)</th>\n                <th>Verifiable CPD Credit Awarded</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr><td>Less than 0.5 hour (&lt; 30 minutes)</td><td><strong>0 CPD hours</strong></td></tr>\n              <tr><td>0.5 hour to less than 1.5 hours (30–89 mins)</td><td><strong>1 CPD hour</strong></td></tr>\n              <tr><td>1.5 hours to less than 2.5 hours (90–149 mins)</td><td><strong>2 CPD hours</strong></td></tr>\n              <tr><td>2.5 hours to less than 3.5 hours (150–209 mins)</td><td><strong>3 CPD hours</strong></td></tr>\n              <tr><td>3.5 hours to less than 4.5 hours (210–269 mins)</td><td><strong>4 CPD hours</strong></td></tr>\n              <tr><td>4.5 hours to less than 5.5 hours (270–329 mins)</td><td><strong>5 CPD hours</strong></td></tr>\n              <tr><td><strong>5.5 hours or more (&ge; 330 mins)</strong></td><td><strong>6 CPD hours (ABSOLUTE DAILY CAP)</strong></td></tr>\n            </tbody>\n          </table>\n        </div>\n        <p><strong>Note on Exclusions:</strong> Meal breaks (lunch/dinner), registration, tea breaks, and social receptions are strictly excluded from the calculation!</p>\n      </div>\n\n      <div class=\"study-section\" id=\"aps9-sec6\">\n        <h3>6. Compliance Deadlines, Record Retention & Enforcement Cascade</h3>\n        <ul>\n          <li><strong>Self-Attestation Deadline:</strong> Annual CPD self-attestation must be submitted through the IAI online portal no later than <strong>31st May</strong> (within 2 months of year-end).</li>\n          <li><strong>5-Year Document Retention:</strong> Members must preserve original proof (certificates, webinar confirmation emails, presentation slides) for at least <strong>5 years</strong>.</li>\n          <li><strong>Annual Audit:</strong> Council randomly selects a sample of members annually for audit verification.</li>\n          <li><strong>Public Defaulter Listing (1st July):</strong> Names of members who fail to complete CPD or submit attestation are published on the <strong>official IAI website on 1st July</strong>.</li>\n          <li><strong>Enforcement Sanctions:</strong> Defaulters face immediate non-renewal of COP, suspension of practice rights, and referral to the Director (Discipline) under the First Schedule!</li>\n        </ul>\n      </div>\n\n      <div class=\"exam-trap-box\" id=\"aps9-sec7\">\n        <strong>🚨 CRITICAL EXAM TRAPS & PITFALLS (APS 9 v4.00):</strong>\n        <ul>\n          <li><strong>Trap 1:</strong> \"An actuary attended a 7-hour full-day conference including a 1.5-hour lunch break.\" &rarr; <em>Exam Answer:</em> Net time = 5.5 hours. Credit = <strong>6 CPD hours</strong> (Daily Cap). If lunch was 2 hours, net time = 5.0h &rarr; only <strong>5 CPD hours</strong>!</li>\n          <li><strong>Trap 2:</strong> \"How many hours for a COP holder practicing in Life and General?\" &rarr; <em>Exam Answer:</em> <strong>32 hours</strong> (24 base + 8 additional technical).</li>\n          <li><strong>Trap 3:</strong> \"How long must CPD evidence be preserved?\" &rarr; <em>Exam Answer:</em> Exactly <strong>5 years</strong>.</li>\n          <li><strong>Trap 4:</strong> \"When are defaulters listed on the website?\" &rarr; <em>Exam Answer:</em> <strong>1st July</strong> (Attestation deadline is 31st May).</li>\n        </ul>\n      </div>\n\n      <div class=\"key-takeaway-box\">\n        <strong>🎯 Executive Key Takeaways:</strong>\n        Cat 1 (COP) = 24h (min 15 tech + 6 prof + max 3 other); +8h per extra practice area. Cat 2 (Active no COP) = 15h. Daily max cap = 6h (&ge;5.5h net). Attestation by 31 May; Web listing on 1 July; Retain proof for 5 years.\n      </div>\n    "
  },
  {
    "id": "aps34",
    "category": "APS 34: General Actuarial Practice Standard",
    "shortTitle": "APS 34: General Practice Standard",
    "ref": "APS 34 (ISAP 1) Effective 29 Dec 2021",
    "icon": "📑",
    "desc": "General practice definitions ('Must' vs 'Should'), data quality, model governance, peer review, documentation retention, and the 11 mandatory report disclosures.",
    "briefHtml": "\n      <div class=\"study-guide-intro\">\n        <h4>📖 Foundational Concept: What is APS 34 and Why Does It Apply to Everything?</h4>\n        <p>If you perform any actuarial work—whether reserving for an insurance company, pricing a micro-insurance plan, valuing a pension scheme, or building a machine learning credit risk model for a bank—which standard governs your general working methodology? The answer is <strong>Actuarial Practice Standard 34 (APS 34)</strong>. Modeled word-for-word on the International Standard of Actuarial Practice 1 (<strong>ISAP 1</strong>) issued by the International Actuarial Association (IAA), APS 34 was adopted by the IAI Council on 4 September 2021 and officially notified by President Subhendu Bal on <strong>29 December 2021</strong>. It is the foundational quality standard for every actuarial calculation, model, peer review, and formal report in India.</p>\n      </div>\n\n      <div class=\"study-toc\">\n        <a href=\"#aps34-sec1\">1. Scope & ISAP 1 Pedigree</a>\n        <a href=\"#aps34-sec2\">2. Language Hierarchy (Must vs Should)</a>\n        <a href=\"#aps34-sec3\">3. Appropriate Practices (Data/Models)</a>\n        <a href=\"#aps34-sec4\">4. Peer Replicability Test</a>\n        <a href=\"#aps34-sec5\">5. The 11 Mandatory Disclosures</a>\n        <a href=\"#aps34-sec6\">6. Crucial Exam Traps</a>\n      </div>\n\n      <div class=\"pill-stat-grid\">\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">ISAP 1</span><span class=\"stat-label\">Global IAA Benchmark</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">29.12.2021</span><span class=\"stat-label\">Effective Date in India</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">11 Items</span><span class=\"stat-label\">Mandatory Report Disclosures</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">Replicability</span><span class=\"stat-label\">Documentation Legal Test</span></div>\n      </div>\n\n      <div class=\"study-section\" id=\"aps34-sec1\">\n        <h3>1. Legislative Origin, Global Pedigree & Universal Applicability</h3>\n        <ul>\n          <li><strong>Enactment & Effective Date:</strong> Approved by Council under Section 19(2)(i) on 4 September 2021; issued on <strong>29 December 2021</strong>.</li>\n          <li><strong>Global Convergence:</strong> Directly converges with <strong>ISAP 1 (General Actuarial Practice)</strong> published by the International Actuarial Association (IAA).</li>\n          <li><strong>Universal Scope:</strong> Applies to <strong>all actuarial services</strong> performed by members of the IAI.</li>\n          <li><strong>Conflict Hierarchy:</strong> If guidance in APS 34 conflicts with a standard specific to a particular practice area (e.g., APS 2 for Life Insurance, APS 9 for CPD), the <strong>specific practice standard takes precedence</strong> over APS 34.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"aps34-sec2\">\n        <h3>2. Language Hierarchy & Gateways to Full Compliance (Section 1.6)</h3>\n        <p>APS 34 defines a strict three-tier semantic hierarchy that governs how obligations are worded:</p>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>Keyword</th>\n                <th>Legal Nature</th>\n                <th>Permissible Deviation & Requisite Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>\"Must\"</strong></td>\n                <td><strong>Absolute, unconditional requirement.</strong></td>\n                <td>Departure is NEVER permitted unless adhering to it would be unlawful under statutory legislation or a judicial court order.</td>\n              </tr>\n              <tr>\n                <td><strong>\"Should\"</strong></td>\n                <td><strong>Standard actuarial practice with a rebuttable presumption.</strong></td>\n                <td>The actuary must follow it unless doing so would produce an inappropriate or misleading result. If departing, the actuary <strong>must document the rationale and disclose the nature and effect of the departure in the report</strong>.</td>\n              </tr>\n              <tr>\n                <td><strong>\"May\"</strong></td>\n                <td><strong>Permissible discretionary practice.</strong></td>\n                <td>Indicates a recommended or optional course of action.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <h4>The Three Gateways to Full Compliance:</h4>\n        <p>An actuary who departs from specific guidance in APS 34 is still in 100% full compliance if:</p>\n        <ol>\n          <li>The departure is compelled by conflicting statutory law/regulation; or</li>\n          <li>The departure is compelled by a specific practice-area APS; or</li>\n          <li>The actuary departs from a 'should' requirement, documents the justification, and discloses the departure and its financial effect in the report.</li>\n        </ol>\n      </div>\n\n      <div class=\"study-section\" id=\"aps34-sec3\">\n        <h3>3. Appropriate Practices Framework (Section 2)</h3>\n        \n        <h4>A. Terms of Reference (ToR - Para 2.1)</h4>\n        <p>The actuary must confirm written terms of reference with the principal before starting work. The ToR must clearly define: scope, intended users, role of actuary, access to data, and fee basis.</p>\n\n        <h4>B. Reliance on Others & Disclaimers (Para 2.3)</h4>\n        <p>An actuary may rely on information, data, projections, or subject matter opinions provided by the client, auditor, or independent specialists. <strong>Mandatory Rule:</strong> If the actuary relies on others without independent verification or disclaims responsibility for such reliance, the actuary <strong>must explicitly disclose the reliance and disclaimer in the report</strong>.</p>\n\n        <h4>C. Materiality (Para 2.4)</h4>\n        <p>Materiality is judged strictly from the perspective of the <strong>intended users</strong>. An omission, understatement, or overstatement is material if it could reasonably influence the decisions or assessments of intended users.</p>\n\n        <h4>D. Data Quality & Outlier Adjustments (Para 2.5)</h4>\n        <ul>\n          <li>Actuary should review data for completeness, accuracy, and consistency.</li>\n          <li>If data contains deficiencies or outliers, the actuary should consider adjustments.</li>\n          <li><strong>Mandatory Disclosure:</strong> Any material data adjustments, modifications, or unresolved data deficiencies must be explicitly disclosed in the report.</li>\n        </ul>\n\n        <h4>E. Assumptions & Methodology (Paras 2.6–2.9)</h4>\n        <ul>\n          <li><strong>Actuary-Set Assumptions:</strong> Must be justifiable individually AND <strong>reasonable in the aggregate</strong>. Multiple individually conservative margins must not compound into an absurd aggregate distortion.</li>\n          <li><strong>Prescribed Assumptions (by Client/Principal):</strong> If the client mandates an assumption that the actuary cannot professionally support, the actuary <strong>must disclose that fact, identify who prescribed it, disclose their rationale, and state the impact</strong>.</li>\n          <li><strong>Mandated by Law:</strong> Disclose that the assumption/methodology was mandated by statute and whether it limits relevance for other purposes.</li>\n        </ul>\n\n        <h4>F. Model Governance & Controls (Para 2.10)</h4>\n        <p>Applies to all decision-support models (from Excel sheets to complex Prophet/MoSes platforms):</p>\n        <ul>\n          <li><strong>Independent Validation:</strong> Model validation must be conducted by individuals <strong>independent of model development</strong>.</li>\n          <li><strong>Change Control:</strong> Formal change control procedures must prevent unauthorized edits, log modifications, and allow <strong>complete reversal</strong>.</li>\n          <li><strong>Model Limitations & Assumed Management Actions:</strong> Must be understood and disclosed in the report.</li>\n        </ul>\n\n        <h4>G. Peer Review (Para 2.12)</h4>\n        <p>Actuary should consider whether peer review is appropriate. The peer reviewer must be independent of the engagement and experienced in the practice area.</p>\n\n        <h4>H. Subsequent Events (Para 2.13)</h4>\n        <p>Events occurring between the calculation/valuation date and report signature date that materially alter financial reality must be evaluated and disclosed.</p>\n      </div>\n\n      <div class=\"study-section\" id=\"aps34-sec4\">\n        <h3>4. Retention of Documentation & The Peer Replicability Test (Para 2.14)</h3>\n        <p>Working papers, calculations, models, and correspondence must be preserved for a reasonable period. What is the legal standard of documentation sufficiency?</p>\n        <div class=\"statutory-callout\">\n          <strong>The Statutory Legal Benchmark for Actuarial Documentation:</strong>\n          Actuarial documentation is sufficient ONLY IF <strong>another actuary qualified in the same practice area can review the files, understand the methodology, replicate the calculations, and evaluate the reasonableness of all professional judgments</strong>.\n        </div>\n      </div>\n\n      <div class=\"study-section\" id=\"aps34-sec5\">\n        <h3>5. The 11 Mandatory Disclosures in an Actuarial Report (Section 3.2.2)</h3>\n        <p>Section 3.2.2 of APS 34 states that an actuary issuing a report must disclose the following <strong>11 specific items</strong> whenever applicable:</p>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>Clause</th>\n                <th>Mandatory Disclosure Item</th>\n                <th>Cross Reference</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr><td><strong>(a)</strong></td><td>Any material deviation from guidance in APS 34</td><td>Para 1.3.3</td></tr>\n              <tr><td><strong>(b)</strong></td><td>Any reliance on others for which the actuary disclaims responsibility</td><td>Para 2.3.3</td></tr>\n              <tr><td><strong>(c)</strong></td><td>Any material omissions, understatements, or overstatements</td><td>Para 2.4</td></tr>\n              <tr><td><strong>(d)</strong></td><td>Any data validation, adjustments, modifications, or deficiencies</td><td>Paras 2.5.2–2.5.5</td></tr>\n              <tr><td><strong>(e)</strong></td><td>Any margins for adverse deviations in assumptions or methodology</td><td>Para 2.7.3</td></tr>\n              <tr><td><strong>(f)</strong></td><td>Any material inconsistency between assumptions and methodology used</td><td>Para 2.7.6</td></tr>\n              <tr><td><strong>(g)</strong></td><td>Assumptions/methodology prescribed by another party that actuary does not support</td><td>Paras 2.8.2–2.8.3</td></tr>\n              <tr><td><strong>(h)</strong></td><td>Assumptions/methodology mandated by statute or regulation</td><td>Para 2.9</td></tr>\n              <tr><td><strong>(i)</strong></td><td>Model limitations and uncertainties and their broad implications</td><td>Para 2.10.3</td></tr>\n              <tr><td><strong>(j)</strong></td><td>Management actions or responses assumed within any model and their implications</td><td>Para 2.10.6(e)</td></tr>\n              <tr><td><strong>(k)</strong></td><td>Any material subsequent event occurring after the valuation date</td><td>Para 2.13</td></tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"exam-trap-box\" id=\"aps34-sec6\">\n        <strong>🚨 CRITICAL EXAM TRAPS & PITFALLS (APS 34):</strong>\n        <ul>\n          <li><strong>Trap 1:</strong> \"What is the legal test for adequate actuarial documentation?\" &rarr; <em>Exam Answer:</em> Another actuary in the same practice area can replicate the calculations and evaluate judgments (Peer Replicability Test).</li>\n          <li><strong>Trap 2:</strong> \"How many mandatory disclosure categories exist under Section 3.2.2?\" &rarr; <em>Exam Answer:</em> Exactly <strong>11 categories</strong> (items a through k).</li>\n          <li><strong>Trap 3:</strong> \"Does APS 34 override APS 2 (Life)?\" &rarr; <em>Exam Answer:</em> NO! Specific practice standards (APS 2, APS 9) take precedence over general guidance in APS 34.</li>\n          <li><strong>Trap 4:</strong> \"Can model validation be performed by the developer if checked by a colleague?\" &rarr; <em>Exam Answer:</em> NO! Model validation must be conducted by individuals <strong>independent of model development</strong>.</li>\n        </ul>\n      </div>\n\n      <div class=\"key-takeaway-box\">\n        <strong>🎯 Executive Key Takeaways:</strong>\n        APS 34 = ISAP 1; effective 29 Dec 2021; universal across all fields. 'Must' is mandatory; 'Should' requires documented departure. Documentation test = peer replicability. Section 3.2.2 mandates 11 distinct disclosure categories. Model validation must be independent.\n      </div>\n    "
  },
  {
    "id": "ftign31",
    "category": "FT-IGN 31: Auditing Actuary & Financial Reporting",
    "shortTitle": "FT-IGN 31: Auditing Actuary (Ind AS 117)",
    "ref": "FT-IGN 31 (SA 620 & Ind AS 117 / IFRS 17)",
    "icon": "📊",
    "desc": "Auditing Actuary under SA 620, Ind AS 117 valuation (GMM, PAA, VFA), cooling-off (1 yr), 4-yr rotation, access asymmetry & 5-stage dispute escalation.",
    "briefHtml": "\n      <div class=\"study-guide-intro\">\n        <h4>📖 Foundational Concept: What is an Auditing Actuary and Why Do We Need One?</h4>\n        <p>When an insurance company prepares its annual financial balance sheet, its liabilities (the promises made to pay future claims) are mathematically complex stochastic reserves calculated by the company's <strong>Appointed Actuary (AA)</strong>. Under statutory law, the insurance company must be audited by an independent Chartered Accountant (Statutory Auditor under ICAI). But how can a chartered accountant independently verify complex actuarial liabilities, discount curves, stochastic mortality models, and IFRS 17 contract margins? They cannot do it alone. The statutory auditor hires an independent <strong>Auditing Actuary</strong> who operates as an <strong>Auditor's Expert under ICAI Standard on Auditing SA 620</strong>. <strong>FT-IGN 31</strong> is the comprehensive guide governing the Auditing Actuary's role under <strong>Ind AS 117 (Insurance Contracts)</strong>.</p>\n      </div>\n\n      <div class=\"study-toc\">\n        <a href=\"#audit-sec1\">1. Statutory Auditor's Expert (SA 620)</a>\n        <a href=\"#audit-sec2\">2. Independence Safeguards & Cooling-Off</a>\n        <a href=\"#audit-sec3\">3. Working Paper Access Asymmetry</a>\n        <a href=\"#audit-sec4\">4. 5-Stage Dispute Escalation</a>\n        <a href=\"#audit-sec5\">5. Ind AS 117 Measurement Models</a>\n        <a href=\"#audit-sec6\">6. 7-Year Audit File Retention</a>\n        <a href=\"#audit-sec7\">7. Crucial Exam Traps</a>\n      </div>\n\n      <div class=\"pill-stat-grid\">\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">SA 620</span><span class=\"stat-label\">Auditor's Expert Framework</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">1 Year</span><span class=\"stat-label\">Mandatory Cooling-Off Prior</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">4 Years</span><span class=\"stat-label\">Max Tenure (3-Yr Rotation)</span></div>\n        <div class=\"pill-stat-card\"><span class=\"stat-val\">7 Years</span><span class=\"stat-label\">Retention under SA 230</span></div>\n      </div>\n\n      <div class=\"study-section\" id=\"audit-sec1\">\n        <h3>1. The Auditor's Expert Framework (ICAI SA 620 & SA 220)</h3>\n        <ul>\n          <li><strong>Technical Origin:</strong> Fast Track Ind AS Guidance Note 31 (FT-IGN 31) issued by IAI for actuaries supporting statutory audits under Ind AS 117.</li>\n          <li><strong>Role under SA 620:</strong> The Auditing Actuary operates as an <strong>Auditor's Expert</strong> under ICAI Standard on Auditing <strong>SA 620</strong>.</li>\n          <li><strong>Sole Responsibility of Statutory Auditor:</strong> The statutory financial auditor retains sole legal responsibility for the overall audit opinion. However, the auditor relies upon the Auditing Actuary's technical evaluation of actuarial balances.</li>\n          <li><strong>Engagement Quality Control Reviewer (EQCR - SA 220):</strong> Mandatory independent partner review required for significant public interest insurance audits prior to report issuance.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"audit-sec2\">\n        <h3>2. Independence Threats & Mandatory Safeguards (Paras 3.2.4 & 3.2.5)</h3>\n        <p>The Auditing Actuary must be strictly independent of the insurer being audited:</p>\n        <h4>A. The Five Core Independence Threats:</h4>\n        <ol>\n          <li><strong>Self-Review Threat:</strong> Auditing liabilities, reserves, or valuation software previously built or advised by the actuary's own firm.</li>\n          <li><strong>Advocacy Threat:</strong> Acting as advocate for the insurer in tax appeals or judicial litigation.</li>\n          <li><strong>Familiarity Threat:</strong> Long association leading to over-trusting management representations.</li>\n          <li><strong>Self-Interest Threat:</strong> Financial investments in the insurer or contingent audit fees.</li>\n          <li><strong>Intimidation Threat:</strong> Pressure from insurer management to accept aggressive reserve releases.</li>\n        </ol>\n\n        <h4>B. Mandatory Safeguards & Cooling-Off Rules:</h4>\n        <ul>\n          <li><strong>1-Year Prior Cooling-Off:</strong> An actuary cannot serve as Auditing Actuary if within the preceding <strong>1 year</strong> they:\n            <ul>\n              <li>Were an employee of the insurer;</li>\n              <li>Served as the Appointed Actuary or signing review actuary;</li>\n              <li>Provided external reserving, pricing, or valuation consulting to the insurer; or</li>\n              <li>Configured core valuation software used in financial reporting.</li>\n            </ul>\n          </li>\n          <li><strong>Mandatory Partner Rotation:</strong> An Auditing Actuary can hold office for a maximum of <strong>4 consecutive financial years</strong>, followed by a mandatory <strong>3-year cooling-off period</strong> before reappointment.</li>\n          <li><strong>Concurrent Cap:</strong> An individual Auditing Actuary cannot concurrently serve as lead signing actuary for more than <strong>3 insurance companies</strong>.</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"audit-sec3\">\n        <h3>3. Working Paper Access Asymmetry (Para 3.19.5)</h3>\n        <div class=\"statutory-callout\">\n          <strong>Fundamental Distinction Tested in Exams:</strong>\n          <ul>\n            <li><strong>The Statutory Auditor:</strong> Full, unfettered access to all Auditing Actuary working papers, challenge memos, audit programs, and sensitivity calculations.</li>\n            <li><strong>Insurer Management:</strong> Has <strong>RESTRICTED ACCESS</strong>. Insurer management has no statutory right to inspect internal challenge memos, working papers, or confidential communications exchanged between the Auditing Actuary and the statutory auditor!</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"study-section\" id=\"audit-sec4\">\n        <h3>4. Five-Stage Dispute Escalation Protocol (Para 3.23)</h3>\n        <p>When material disagreements arise between the Auditing Actuary and the Appointed Actuary regarding liability valuation, assumptions, or methodology under Ind AS 117:</p>\n        <div class=\"study-table-container\">\n          <table class=\"study-table\">\n            <thead>\n              <tr>\n                <th>Stage</th>\n                <th>Forum / Level</th>\n                <th>Action & Statutory Consequence</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr><td><strong>Level 1</strong></td><td><strong>Working Level</strong></td><td>Direct technical dialogue between Auditing Actuary and Appointed Actuary to achieve consensus.</td></tr>\n              <tr><td><strong>Level 2</strong></td><td><strong>Audit Partner Level</strong></td><td>Formal meeting between Statutory Audit Engagement Partner and the Insurer's Person Responsible for Ind AS 117.</td></tr>\n              <tr><td><strong>Level 3</strong></td><td><strong>Governance Review</strong></td><td>Escalation to Engagement Quality Control Reviewer (EQCR) and the Audit Committee of the Board.</td></tr>\n              <tr><td><strong>Level 4</strong></td><td><strong>Board of Directors</strong></td><td>Formal presentation to the Board of Directors / Those Charged With Governance (TCWG).</td></tr>\n              <tr><td><strong>Level 5</strong></td><td><strong>Statutory Regulators</strong></td><td>Escalation to <strong>IRDAI and IAI Disciplinary Directorate</strong>. In this stage, <em>client confidentiality is legally overridden in the public interest</em>!</td></tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"study-section\" id=\"audit-sec5\">\n        <h3>5. Technical Valuation Architecture under Ind AS 117</h3>\n        <ul>\n          <li><strong>General Measurement Model (GMM):</strong> Default building block model:\n            <ul>\n              <li><strong>Best Estimate Liability (BEL):</strong> Probability-weighted present value of future cash flows.</li>\n              <li><strong>Risk Adjustment for Non-Financial Risk (RA):</strong> Compensation required for bearing uncertainty (confidence level disclosure required under Para 119).</li>\n              <li><strong>Contractual Service Margin (CSM):</strong> Unearned profit recognized over the coverage period.</li>\n            </ul>\n          </li>\n          <li><strong>Premium Allocation Approach (PAA):</strong> Simplified model for short-duration contracts. <strong>Safe Harbour (Para 53(b)):</strong> Strictly requires contract coverage period &le; 1 year. Artificially splitting multi-year policies into 1-year tranches is strictly illegal!</li>\n          <li><strong>Variable Fee Approach (VFA):</strong> Applied to direct participating contracts.</li>\n          <li><strong>Prescribed Discount Yield Curve:</strong> Must strictly utilize the CCIL (Clearing Corporation of India Limited) Zero-Coupon Yield Curve as mandated by IRDAI.</li>\n          <li><strong>Loss Component & Onerous Contracts:</strong> Must be recognized immediately in profit or loss; cannot be deferred against future CSM.</li>\n          <li><strong>Directly Attributable Expenses (Para B65):</strong> Acquisition costs directly attributable to contract portfolio; corporate general overheads cannot be deferred!</li>\n        </ul>\n      </div>\n\n      <div class=\"study-section\" id=\"audit-sec6\">\n        <h3>6. Documentation Retention & Cold Quality Reviews (ICAI SA 230)</h3>\n        <ul>\n          <li><strong>7-Year Audit File Retention:</strong> All working papers, challenge memos, and models must be retained for at least <strong>7 years</strong> under ICAI SA 230.</li>\n          <li><strong>Hot Reviews (SA 220):</strong> EQCR performed prior to signing the audit report.</li>\n          <li><strong>Cold Reviews (SQC 1):</strong> Annual inspection of completed audit files conducted by independent partners after issuance.</li>\n        </ul>\n      </div>\n\n      <div class=\"exam-trap-box\" id=\"audit-sec7\">\n        <strong>🚨 CRITICAL EXAM TRAPS & PITFALLS (FT-IGN 31 & Audit):</strong>\n        <ul>\n          <li><strong>Trap 1:</strong> \"Does client management have a right to inspect the Auditing Actuary's challenge memos?\" &rarr; <em>Exam Answer:</em> NO! Access Asymmetry (restricted access). Only statutory auditor has full access.</li>\n          <li><strong>Trap 2:</strong> \"What is the partner rotation timeline for an Auditing Actuary?\" &rarr; <em>Exam Answer:</em> Maximum <strong>4 consecutive years</strong>, followed by a <strong>3-year cooling-off period</strong>.</li>\n          <li><strong>Trap 3:</strong> \"How long is the prior cooling-off period before accepting an Auditing Actuary role?\" &rarr; <em>Exam Answer:</em> Exactly <strong>1 year</strong> (prior employee, AA, or consultant).</li>\n          <li><strong>Trap 4:</strong> \"How long must audit files be retained?\" &rarr; <em>Exam Answer:</em> Exactly <strong>7 years</strong> under ICAI SA 230.</li>\n        </ul>\n      </div>\n\n      <div class=\"key-takeaway-box\">\n        <strong>🎯 Executive Key Takeaways:</strong>\n        Auditing Actuary = Auditor's Expert under ICAI SA 620. 1-year prior cooling-off; max 4 years tenure with 3-year cooling-off. Management cannot inspect challenge memos. 5-stage dispute escalation ends with IRDAI/IAI reporting. 7-year audit retention.\n      </div>\n    "
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

  const standardPalette = document.getElementById("standardPaletteHud");
  const hearingHud = document.getElementById("hearingModeHud");
  const blitzHud = document.getElementById("blitzModeHud");

  if (standardPalette) standardPalette.style.display = (isSurvival || isBlitz) ? "none" : "block";
  if (hearingHud) hearingHud.style.display = isSurvival ? "flex" : "none";
  if (blitzHud) blitzHud.style.display = isBlitz ? "flex" : "none";

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
      timerDisplay.textContent = `Charges: ${AppState.survivalCount || 0}`;
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
    const blitzHudTimer = document.getElementById("blitzHudTimer");
    if (blitzHudTimer) blitzHudTimer.textContent = `${AppState.timeRemainingSec}s`;

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

  const isSurvival = AppState.examMode === "survival";
  const isBlitz = AppState.examMode === "blitz";

  const indicator = document.getElementById("currentQuestionIndicator");
  if (indicator) {
    if (isSurvival) {
      indicator.textContent = `Inquest Charge #${(AppState.survivalCount || 0) + 1} • Disciplinary Hearing (1 Life)`;
    } else if (isBlitz) {
      indicator.textContent = `Blitz Scenario #${(AppState.blitzScore || 0) + 1} • Speed Sprint`;
    } else {
      indicator.textContent = `Question ${AppState.currentQuestionIndex + 1} of ${total}`;
    }
  }

  document.getElementById("qCategoryBadge").textContent = q.category;
  const sourceEl = document.getElementById("qSourceBadge");
  if (sourceEl) {
    sourceEl.textContent = `Source: ${q.source || q.category}`;
  }
  document.getElementById("activeQuestionText").textContent = q.question;

  // Flag and Previous button visibility: In Sudden Death & Blitz, there is no jumping back or flagging
  const flagBtn = document.getElementById("flagQuestionBtn");
  if (flagBtn) {
    flagBtn.style.display = (isSurvival || isBlitz) ? "none" : "flex";
  }
  const flagText = document.getElementById("flagBtnText");
  const isFlagged = !!AppState.flaggedQuestions[q.id];
  if (flagBtn) {
    if (isFlagged) {
      flagBtn.classList.add("flagged");
      if (flagText) flagText.textContent = "Flagged";
    } else {
      flagBtn.classList.remove("flagged");
      if (flagText) flagText.textContent = "Flag for Review";
    }
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
      const letters = ["A", "B", "C", "D"];
      const correctLetter = letters[q.correctIndex];
      const distractorLetters = letters.filter((_, idx) => idx !== q.correctIndex);
      const selectedLetter = letters[selectedIdx];
      let distractorText = (q.explanationIncorrect || "").replace(/^Distractor\s+analysis:\s*/i, "");

      instantCard.innerHTML = `
        <div class="instant-card ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}">
          <div class="instant-badge-bar">
            <span class="instant-status-pill ${isCorrect ? 'pill-correct' : 'pill-incorrect'}">
              ${isCorrect ? `✓ Correct Answer (Option ${correctLetter})` : `✕ Incorrect Selection (You Chose Option ${selectedLetter})`}
            </span>
            <span class="q-source-badge">Source: ${q.source || q.category}</span>
          </div>
          ${!isCorrect ? `
            <div class="user-selection-callout" style="margin-bottom: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 6px; background: rgba(239, 68, 68, 0.08); border-left: 3px solid var(--danger); font-size: 0.85rem; color: var(--text-main);">
              <strong>Your Selection (Option ${selectedLetter}):</strong> The correct answer is <strong>Option ${correctLetter}</strong>. Review the professional rationale and distractor analysis below.
            </div>
          ` : ''}
          <div class="instant-explanation-block">
            <strong>Why Option ${correctLetter} is Correct:</strong>
            <p>${q.explanationCorrect}</p>
          </div>
          <div class="instant-explanation-block distractor-block">
            <strong>Distractor & Misconception Analysis (Options ${distractorLetters.join(", ")}):</strong>
            <p>${distractorText}</p>
          </div>
        </div>
      `;
      instantCard.style.display = "block";
    } else {
      instantCard.innerHTML = "";
      instantCard.style.display = "none";
    }
  }

  // Navigation button states: Hide Previous button in Sudden Death & Blitz
  const prevBtn = document.getElementById("prevQuestionBtn");
  if (prevBtn) {
    prevBtn.style.display = (isSurvival || isBlitz) ? "none" : "inline-flex";
    prevBtn.disabled = AppState.currentQuestionIndex === 0;
  }
  
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
      if (timerDisplay) timerDisplay.textContent = `Charges: ${AppState.survivalCount}`;

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
        alert(`🚨 DISCIPLINARY COMMITTEE ORDER: You made an error under ${q.source}. Your Certificate of Practice (COP) is immediately suspended! You defended ${AppState.survivalCount || 0} consecutive charges before sanction.`);
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
  const isSurvival = AppState.examMode === "survival";
  const isBlitz = AppState.examMode === "blitz";

  // In Disciplinary Hearing or Speed Blitz: Update dedicated HUD instead of rendering 2,598 buttons!
  if (isSurvival) {
    const survivalVal = document.getElementById("hearingSurvivalVal");
    const recordVal = document.getElementById("hearingRecordVal");
    if (survivalVal) survivalVal.textContent = AppState.survivalCount || 0;
    if (recordVal) recordVal.textContent = GamificationState.survivalBest || 0;
    return;
  }

  if (isBlitz) {
    const solvedVal = document.getElementById("blitzSolvedVal");
    const recordVal = document.getElementById("blitzRecordVal");
    const blitzHudTimer = document.getElementById("blitzHudTimer");
    if (solvedVal) solvedVal.textContent = AppState.blitzScore || 0;
    if (recordVal) recordVal.textContent = GamificationState.blitzBest || 0;
    if (blitzHudTimer) blitzHudTimer.textContent = `${AppState.timeRemainingSec}s`;
    return;
  }

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
                Distractor & Misconception Analysis (Options ${letters.filter((_, idx) => idx !== q.correctIndex).join(', ')}):
              </div>
              <p>${(q.explanationIncorrect || '').replace(/^Distractor\s+analysis:\s*/i, '')}</p>
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
