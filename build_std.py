# -*- coding: utf-8 -*-
"""
build_std.py - Module 5: Student Code of Conduct
Authentic, high-difficulty Fellowship MCQs covering:
- Effective date (17 January 2026) & universal student scope
- Academic integrity & remote proctoring violations (AI tools, electronic devices, screen recording)
- Strict prohibition on title usurpation ('Actuary', 'FIAI', 'AIAI' before admission)
- Student Disciplinary Committee (SDC - Clause 9): composition, quorum, summary powers
- Formal complaint procedures: Rs. 1,000 fee, triplicate, affidavit, suo motu alerts
- 15-day mediation window & 21-day defense/rejoinder timetable
- Schedule II scale of penalties: Rs. 20,000 fine cap, 5-year debarment, expulsion
- Statutory appeals: Appeal lies to the President of the Institute (90 days)
- Impersonation, group collusion, question leaks, falsified exemption credentials
"""

CAT = "Student Code of Conduct"

def get_std_questions():
    qs = []

    def add(src, q, opts, c_idx, exp_c, exp_w):
        qs.append({
            "category": CAT,
            "source": src,
            "question": q,
            "options": opts,
            "correctIndex": c_idx,
            "explanationCorrect": exp_c,
            "explanationIncorrect": exp_w
        })

    # 1
    add(
        "Student Code of Conduct (2026), Clause 1 & Scope",
        "On what date does the Code of Conduct for Students of the Institute of Actuaries of India officially come into force, and what is its operational scope?",
        [
            "It comes into force on 17 January 2026, applying universally to all enrolled student members, exam candidates, seminar attendees, and qualified members sitting for specialist exam papers.",
            "It came into force on 10 November 2006, applying exclusively to students enrolled in full-time university actuarial programs.",
            "It comes into force on 1 April 2027, applying only to students who have passed at least ten actuarial examinations.",
            "It applies solely to student members employed within registered Indian life insurance companies."
        ],
        0,
        "The IAI Student Code takes effect on 17 January 2026, applying comprehensively to all enrolled student members, examination candidates, seminar participants, and qualified members sitting for additional papers.",
        "The Code addresses contemporary digital exam integrity, online conduct, and title protection across the entire student body."
    )

    # 2
    add(
        "Student Code of Conduct (2026), Title Usurpation & Misrepresentation",
        "A student member who has cleared all Core Principles and Core Practices exams updates their LinkedIn profile and email signature to read: 'Consulting Actuary (AIAI)'. Under the Student Code and the Actuaries Act 2006, how is this conduct evaluated?",
        [
            "It is strictly prohibited misconduct and a statutory offence under Section 38 of the Act; students are forbidden from styling themselves as an 'Actuary' or appending professional designations before formal admission by Council.",
            "It is permissible professional branding provided the student has completed at least three years of corporate actuarial work experience.",
            "It is lawful provided the student includes an explanatory footnote indicating that formal election to Associate status is pending Council approval.",
            "It is treated as an informal commercial resume embellishment that falls outside the disciplinary jurisdiction of the Institute."
        ],
        0,
        "Under Schedule I Clause 4 of the Student Code and Section 38 of the Actuaries Act 2006, falsely styling oneself as an Actuary or using post-nominals before formal Council admission is strictly prohibited and an offence.",
        "Passing examination papers does not confer professional title until formal admission to Associate or Fellow membership by the Council."
    )

    # 3
    add(
        "Student Code of Conduct (2026), Clause 9 (SDC Composition)",
        "Under Clause 9 of the Student Code of Conduct (2026), what is the statutory composition of the Student Disciplinary Committee (SDC)?",
        [
            "A committee of at least three (3) members appointed by the Council, chaired by a Council member, and including experienced Fellow members.",
            "A sole presiding officer who must be a sitting judge of the High Court appointed by the Central Government.",
            "A committee composed entirely of senior student representatives elected by the student body during the Annual General Meeting.",
            "The Quality Review Board acting ex officio with the Head of Examination serving as Secretary."
        ],
        0,
        "Clause 9 establishes the Student Disciplinary Committee (SDC) with a minimum of 3 members appointed by Council, chaired by a Council member, and following summary inquiry under natural justice.",
        "The SDC operates as the dedicated quasi-judicial tribunal for students, distinct from the member Board of Discipline."
    )

    # 4
    add(
        "Student Code of Conduct (2026), Clause 10(2) (Filing Format & Fees)",
        "What are the mandatory procedural requirements for lodging a formal complaint alleging misconduct against an actuarial student under Clause 10(2) of the 2026 Student Code?",
        [
            "The complaint must be submitted in triplicate, verified by an affidavit, and accompanied by a non-refundable fee of Rs. 1,000 addressed to the Executive Director or Head of Examination.",
            "The complaint must be lodged verbally with the Chairperson of the Education Committee within seven days of the incident.",
            "The complaint must be filed electronically on a public grievance portal without any verification or fee.",
            "The complaint must be signed by at least five Fellow actuaries and accompanied by a security deposit of Rs. 25,000."
        ],
        0,
        "Clause 10(2) mandates that complaints against students must be filed in triplicate, verified by affidavit, and accompanied by a non-refundable fee of Rs. 1,000 addressed to the Executive Director / Head of Examination.",
        "Triplicate filing with affidavit ensures frivolous, unverified, or malicious complaints are filtered out."
    )

    # 5
    add(
        "Student Code of Conduct (2026), Suo Motu Examination Investigations",
        "During an online proctored examination, automated AI monitoring software detects a student candidate using a secondary smartphone and communicating with an external third party. Can the Institute initiate disciplinary inquiry without an external complaint?",
        [
            "Yes; the Institute or Head of Examination may initiate suo motu disciplinary proceedings based on automated proctor alerts, CCTV records, or exam logs.",
            "No; the Institute can only act if another student candidate submits a formal written complaint with the prescribed statutory fee.",
            "No; electronic system logs and remote video recordings are inadmissible without prior permission from a magistrate.",
            "Yes, but only if the candidate provides a written confession acknowledging the malpractice within forty-eight hours."
        ],
        0,
        "Under Clause 10(1), the Institute has express authority to initiate suo motu inquiries based on proctoring reports, system telemetry, or internal audit evidence without requiring an outside complainant.",
        "Exam security requires proactive institutional enforcement against cheating and malpractice."
    )

    # 6
    add(
        "Student Code of Conduct (2026), Clause 11 (Mediation Window)",
        "Where a student misconduct complaint involves behavioral friction or non-academic interpersonal disputes, within what timeframe may informal conciliation/mediation be attempted under Clause 11?",
        [
            "Within fifteen (15) working days of receipt of the complaint, provided both parties grant written consent.",
            "Within forty-five (45) calendar days, during which all examination results of the student are placed on hold.",
            "Within sixty (60) days, aligning with the Director (Discipline)'s prima facie timetable.",
            "Mediation is strictly prohibited under the Student Code; all complaints must proceed to a formal evidentiary hearing."
        ],
        0,
        "Clause 11 provides a 15-working-day conciliation/mediation window where both parties consent, allowing appropriate resolution of minor disputes without full adversarial proceedings.",
        "15 working days allows constructive dispute resolution for behavioral grievances while preserving formal inquiry if mediation fails."
    )

    # 7
    add(
        "Student Code of Conduct (2026), Clause 12 (Defense & Rejoinder Timetable)",
        "Under Clause 12 of the 2026 Student Code, what is the timetable for the respondent student to submit their written defense upon receipt of notice from the SDC?",
        [
            "Within twenty-one (21) days of receipt of the complaint, followed by twenty-one (21) days for the complainant to submit a rejoinder.",
            "Within seven (7) days of receipt, with an automatic ex parte order if the deadline is exceeded.",
            "Within thirty (30) days for the defense, with zero opportunity for the complainant to file a rejoinder.",
            "Within ninety (90) days, matching the appellate limitation window."
        ],
        0,
        "The Student Code adheres to the symmetrical 21-day pleading schedule: 21 days for the student's written statement of defense, and 21 days for the complainant's rejoinder.",
        "Symmetrical 21-day pleadings guarantee full compliance with natural justice (audi alteram partem)."
    )

    # 8
    add(
        "Student Code of Conduct (2026), Schedule II (Monetary Fine Ceiling)",
        "Under Schedule II of the Student Code of Conduct (2026), what is the maximum monetary fine that the Student Disciplinary Committee (SDC) may impose upon a student found guilty of misconduct?",
        [
            "A monetary fine up to a maximum cap of twenty thousand rupees (Rs. 20,000).",
            "A monetary fine up to one lakh rupees (Rs. 1,00,000), matching the Board of Discipline limit.",
            "A monetary fine up to five lakh rupees (Rs. 5,00,000), matching the Disciplinary Committee ceiling.",
            "Monetary fines are strictly prohibited against students; only academic debarment may be ordered."
        ],
        0,
        "Schedule II establishes the scale of sanctions for students, capping monetary fines at a maximum of Rs. 20,000.",
        "A common exam trap: confusing the student fine cap (Rs. 20,000) with the Board of Discipline cap (Rs. 1 Lakh) or Disciplinary Committee cap (Rs. 5 Lakhs)."
    )

    # 9
    add(
        "Student Code of Conduct (2026), Schedule II (Debarment Maximum Period)",
        "Where a student is found guilty of severe examination malpractice (such as hiring an impersonator to sit for an exam), for what maximum period may the SDC debar the student from appearing in IAI examinations under Schedule II?",
        [
            "Debarment from appearing in IAI examinations for a period of up to five (5) years, or permanent expulsion from the Institute.",
            "Debarment for a maximum of one examination diet (six months).",
            "Debarment for up to ten (10) years, but without authority to permanently expel.",
            "Debarment is not permitted; the SDC may only cancel the marks of the single examination paper in question."
        ],
        0,
        "Under Schedule II, sanctions for severe malpractice include cancellation of results, debarment from examinations for up to 5 years, or permanent cancellation of student registration.",
        "A 5-year debarment reflects the severe gravity of academic fraud in professional qualifying exams."
    )

    # 10
    add(
        "Student Code of Conduct (2026), Clause 15 (Appellate Forum)",
        "A student aggrieved by an order of the Student Disciplinary Committee (SDC) imposing a 3-year exam debarment wishes to file an appeal. Under Clause 15, to which authority does the appeal lie, and within what timeline?",
        [
            "To the President of the Institute, within ninety (90) days of the date of communication of the SDC order.",
            "To the Appellate Authority constituted under Section 32 of the Actuaries Act 2006, within 90 days.",
            "To the Council of the Institute sitting in full plenary session, within 30 days.",
            "To the Board of Discipline, within forty-five (45) days of receipt of the order."
        ],
        0,
        "Under Clause 15, appeals against SDC orders lie to the President of the Institute, and must be submitted within 90 days of communication of the order.",
        "CRITICAL EXAM TRAP: Member appeals go to the Appellate Authority under Sec 36; student appeals go to the President of the Institute under Clause 15!"
    )

    # 11
    add(
        "Student Code of Conduct (2026), Schedule I (Examination Leaks & Copyright)",
        "A student secretly captures proprietary examination questions on their computer screen during a live proctored exam and distributes them on a Telegram study group. How is this classified under the Student Code?",
        [
            "It is severe academic and professional misconduct involving intellectual property theft and breach of exam confidentiality under Schedule I, justifying immediate result cancellation and multi-year debarment.",
            "It is permissible peer collaboration provided the questions are shared only after 50% of the exam time has elapsed.",
            "It is treated as fair dealing under the Indian Copyright Act 1957 provided no commercial subscription fee was charged.",
            "It is an administrative irregularity punishable solely by a written warning from the examination supervisor."
        ],
        0,
        "Distributing live exam questions violates copyright, non-disclosure undertakings, and academic integrity under Schedule I Clauses 5 & 6, warranting severe disciplinary sanctions.",
        "Exam questions are confidential property of the Institute; sharing them compromises exam diet validity."
    )

    # 12
    add(
        "Student Code of Conduct (2026), Use of Generative AI during Exams",
        "During an online proctored examination, a candidate uses an unauthorized browser extension powered by a large language model to generate answers for descriptive questions. How does the 2026 Student Code treat this action?",
        [
            "It constitutes prohibited academic fraud under Schedule I, resulting in immediate invalidation of the exam session and referral to the SDC for disciplinary sanctions.",
            "It is permitted in open-book examinations provided the candidate cites the model version in an appendix.",
            "It is treated as a computational aid similar to an approved actuarial scientific calculator.",
            "It is permissible as long as the AI prompt does not exceed two hundred words."
        ],
        0,
        "The 2026 Student Code strictly forbids unauthorized electronic aids, AI assistants, and automated solvers during proctored exams. Unauthorized AI assistance constitutes deliberate cheating.",
        "Actuarial assessments evaluate human professional judgment and competence; unauthorized algorithmic proxying is severe malpractice."
    )

    # 13
    add(
        "Student Code of Conduct (2026), Social Media Harassment of Examiners",
        "Following the release of examination results, an unsuccessful student posts defamatory, abusive remarks targeting the Chief Examiner and Head of Examination on public LinkedIn posts. How is this behavior governed under the Student Code?",
        [
            "It constitutes actionable student misconduct under Schedule I (bringing the Institute into disrepute and harassment), punishable by reprimand, fine, or exam debarment.",
            "It is constitutionally protected speech that falls outside the disciplinary purview of the Institute.",
            "It is treated as an informal grievance that must be referred to the Institute's public relations committee.",
            "It is actionable only if the student uses the official trademarked logo of the Institute in the posting."
        ],
        0,
        "Under Schedule I Clause 6 and Part II Clause 8, defamatory or abusive public communications directed at Institute examiners, officers, or peers constitutes professional misconduct.",
        "Candidates have legitimate channels for marks verification; public abuse and harassment violate professional conduct standards."
    )

    # 14
    add(
        "Student Code of Conduct (2026), Falsification of Academic Marksheets",
        "An applicant submits a forged university degree certificate to claim subject exemptions from actuarial core exam papers. How does the SDC handle this under Schedule I Clause 3?",
        [
            "It is grave academic fraud resulting in permanent cancellation of student registration, forfeiture of all fees, and potential criminal referral under the Bharatiya Nyaya Sanhita / Indian Penal Code.",
            "The applicant is denied exemptions but allowed to register for all papers by paying standard examination fees.",
            "The applicant is suspended from examinations for a mandatory period of exactly six months.",
            "The matter is referred to the university authorities, with the Institute taking no independent disciplinary action."
        ],
        0,
        "Falsification of academic records or forged transcripts is grave misconduct under Schedule I Clause 3, warranting permanent expulsion from the Institute and statutory criminal referral.",
        "Honesty and integrity at admission are foundational prerequisites for entry into the actuarial profession."
    )

    # 15
    add(
        "Student Code of Conduct (2026), Natural Justice & Summary Procedure",
        "While Clause 9 empowers the SDC to follow summary inquiry procedures to dispose of student cases expeditiously, which fundamental legal principle must strictly be observed?",
        [
            "The Principles of Natural Justice (audi alteram partem — the right to receive notice of allegations, submit a written defense, and be heard before an adverse order is passed).",
            "The strict evidentiary rules of the Indian Evidence Act requiring oral cross-examination in all cases.",
            "Trial procedures prescribed under the Code of Criminal Procedure for non-cognizable offences.",
            "The doctrine of unfettered executive discretion without granting a right of hearing."
        ],
        0,
        "Even under summary procedures, quasi-judicial bodies must strictly uphold the Principles of Natural Justice: the right to know the charges, review evidence, and present a defense before penalties are imposed.",
        "Natural justice is a non-derogable constitutional guarantee in Indian administrative and professional law."
    )

    # 16
    add(
        "Student Code of Conduct (2026), Remote Proctoring Environment Violations",
        "During a home-based online examination, a student repeatedly looks away from the screen, operates a secondary unmonitored laptop, and allows an unauthorized person into the room. Under the Student Code, what action may the proctor and SDC take?",
        [
            "The proctor may issue warnings and terminate the exam session; the SDC may subsequently cancel exam results and impose debarment under Schedule I & II.",
            "The proctor can only record an observation note, and the student's paper must be graded normally without penalty.",
            "The incident is treated as a technical environment anomaly requiring a free re-sit in the next diet.",
            "The proctor has no authority to intervene unless the candidate verbally acknowledges external assistance."
        ],
        0,
        "Remote exam guidelines require a secure, isolated testing environment. Breaching visual field restrictions, using unmonitored devices, or unauthorized room entry constitute examination malpractice.",
        "Proctors have authority to terminate compromised sessions, followed by formal SDC adjudication."
    )

    # 17
    add(
        "Student Code of Conduct (2026), Screen Recording & Identity Verification Refusal",
        "A candidate refuses to perform the mandatory 360-degree room scan and disables webcam screen-sharing during an online examination diet. What are the disciplinary consequences?",
        [
            "Refusal to comply with identity verification and proctoring surveillance constitutes examination misconduct, resulting in immediate voiding of the session and disciplinary inquiry.",
            "The candidate is allowed to complete the exam offline and email their answer script within one hour.",
            "The candidate is penalised by deducting ten marks from their final calculated score.",
            "No action can be taken because webcam monitoring is legally classified as voluntary."
        ],
        0,
        "Compliance with proctoring protocols, identity checks, and room scans is a mandatory condition of exam enrollment. Refusal invalidates the exam session and triggers misconduct proceedings.",
        "Integrity verification is non-negotiable in remote proctored professional qualifications."
    )

    # 18
    add(
        "Student Code of Conduct (2026), Group Collusion & Synchronized Submissions",
        "Statistical forensic analysis of examination scripts reveals that five candidates from the same study group submitted identical, character-for-character responses including idiosyncratic typos in numerical workings. Under the Student Code:",
        [
            "This provides conclusive evidence of unauthorized collusion under Schedule I, empowering the SDC to cancel results and debar all involved candidates.",
            "Collusion cannot be established through statistical or forensic script analysis without an eyewitness confession.",
            "The highest-scoring candidate is awarded a pass, while the other four candidates are issued written cautions.",
            "Group collaboration in study groups creates a legal presumption of innocence for all members."
        ],
        0,
        "Forensic script analysis establishing identical text, errors, or synchronized uploads is legally recognised evidence of collusion, warranting cancellation and multi-year debarment.",
        "Actuarial exams test individual mastery; collusive submissions undermine the validity of qualifications."
    )

    # 19
    add(
        "Student Code of Conduct (2026), Candidate Impersonation",
        "A registered student arranges for an overseas qualified actuary to log into their testing portal and complete their specialized fellowship examination. How does the 2026 Student Code treat both individuals?",
        [
            "The student faces permanent expulsion, result voiding, and criminal complaint; the qualified actuary is referred to the Disciplinary Directorate for Second Schedule misconduct.",
            "Both individuals are issued a joint fine of Rs. 20,000 without suspension of credentials.",
            "The student is debarred for one exam diet, while the qualified actuary is immune from disciplinary action.",
            "The matter is resolved by requiring both individuals to submit a joint written apology to Council."
        ],
        0,
        "Impersonation is the gravest form of academic fraud. The student faces permanent expulsion, while the qualified actuary who assisted faces Second Schedule prosecution for bringing disrepute.",
        "Impersonation strikes at the core of professional qualification integrity."
    )

    # 20
    add(
        "Student Code of Conduct (2026), Unauthorized Access to IAI Systems",
        "A student member exploits an API vulnerability in the Institute's web portal to download confidential question banks and examiner mark schemes prior to the examination date. Under Schedule I, this constitutes:",
        [
            "Grave misconduct involving unauthorized access to electronic records, cyber security breach, and compromise of examination integrity.",
            "Constructive ethical security research that should be rewarded by the Education Committee.",
            "A minor administrative infraction governed exclusively by the Institute's website terms of service.",
            "Misconduct only if the student attempted to sell the downloaded materials for financial profit."
        ],
        0,
        "Unauthorized access to examination databases, question banks, or member records is severe misconduct under Schedule I, resulting in expulsion and criminal referral under the Information Technology Act.",
        "Compromising institutional IT infrastructure is a severe breach of professional conduct."
    )

    # 21
    add(
        "Student Code of Conduct (2026), Workplace Misconduct & Data Theft",
        "An actuarial student employed as an analyst at a life insurance firm steals proprietary pricing models and client policyholder data to use in their academic research paper. Under the Student Code, is this actionable?",
        [
            "Yes; student members are bound by professional standards of integrity, confidentiality, and lawful conduct in their actuarial employment under Schedule I.",
            "No; the Student Code applies strictly to examination hall conduct and has zero jurisdiction over workplace actions.",
            "No; employers must resolve all data breaches through civil courts without involving the Institute.",
            "Yes, but only if the employer is an official corporate sponsor of the Institute."
        ],
        0,
        "The Student Code governs broader professional conduct, including integrity in actuarial employment, respect for employer confidentiality, and lawful data handling.",
        "Professional ethics apply to student members in their professional work, not merely inside exam halls."
    )

    # 22
    add(
        "Student Code of Conduct (2026), Misuse of Institute Logo & Trademarks",
        "A group of students creates a commercial coaching academy and uses the official IAI crest and logo on their website, claiming to be the 'Official Certified Preparation Centre of the IAI'. Under Schedule I, this constitutes:",
        [
            "Misconduct for unauthorised use of the Institute's name, logo, or trademarks, and falsely implying official endorsement.",
            "Permissible educational fair use provided they prepare candidates for Institute examinations.",
            "A commercial trademark dispute that can only be heard by the Commercial Court.",
            "Lawful commercial promotion provided 20% of their coaching fees are donated to the IAI library fund."
        ],
        0,
        "Misusing the Institute's logo, seal, or asserting false institutional affiliation or endorsement violates Schedule I of the Student Code.",
        "Only the Council has legal authority to authorize use of the Institute's intellectual property."
    )

    # 23
    add(
        "Student Code of Conduct (2026), Criminal Conviction of a Student",
        "A registered student member is convicted by a criminal court of corporate financial embezzlement and sentenced to two years of rigorous imprisonment. Under the Student Code, what action follows?",
        [
            "The conviction constitutes conduct involving moral turpitude, empowering the Council or SDC to cancel the student's registration permanently.",
            "No action can be taken because criminal convictions do not affect student membership in educational bodies.",
            "The student's membership is frozen during imprisonment but automatically reinstated upon release.",
            "The student may continue writing actuarial examinations from prison provided proctoring software is installed."
        ],
        0,
        "Conviction for an offence involving moral turpitude or serious financial dishonesty fundamentally disqualifies an individual from membership under the Act and the Student Code.",
        "Professional bodies cannot harbor individuals convicted of grave financial crimes."
    )

    # 24
    add(
        "Student Code of Conduct (2026), Non-Payment of Dues vs Disciplinary Removal",
        "A student fails to pay their annual membership renewal fee for two consecutive years. How is their removal from the student rolls legally classified?",
        [
            "It is an administrative removal under the Actuaries Act and Council regulations for non-payment of subscription dues, distinct from a disciplinary expulsion by the SDC.",
            "It is classified as professional misconduct under Schedule I, resulting in a mandatory fine of Rs. 20,000.",
            "It is treated as academic failure that requires the student to retake all cleared core exam papers upon re-registration.",
            "It is an unappealable forfeiture that permanently debars the individual from ever studying actuarial science in India."
        ],
        0,
        "Removal for non-payment of annual fees is an administrative process governed by the Act and Council regulations; it does not carry the moral opprobrium of disciplinary sanction.",
        "Distinguishing between administrative lapse and disciplinary misconduct is a crucial legal principle."
    )

    # 25
    add(
        "Student Code of Conduct (2026), SDC Standard of Proof",
        "What standard of proof governs the Student Disciplinary Committee (SDC) when adjudicating allegations of examination malpractice or misconduct?",
        [
            "Preponderance of probabilities (the civil standard applicable to domestic and professional disciplinary tribunals), rather than proof beyond reasonable doubt.",
            "Proof beyond reasonable doubt, strictly matching the standard applied in criminal sessions trials.",
            "Absolute mathematical certainty verified through cryptographic hash validation.",
            "Subjective executive discretion without requiring any corroborating evidence."
        ],
        0,
        "Disciplinary inquiries by professional bodies are quasi-judicial domestic proceedings governed by the civil standard of 'preponderance of probabilities'.",
        "The strict criminal standard of proof beyond reasonable doubt does not apply to domestic professional inquiries."
    )

    # 26
    add(
        "Student Code of Conduct (2026), Readmission Following Disciplinary Expulsion",
        "A former student whose registration was cancelled by the SDC for examination fraud applies for fresh student admission three years later. Under what authority may readmission be considered?",
        [
            "Readmission is at the sole discretion of the Council, which may establish conditions, require a minimum cooling-off period, or refuse admission permanently.",
            "The candidate has an automatic statutory right to re-enroll upon paying the Rs. 20,000 fine.",
            "Readmission is decided solely by the Head of Examination without reference to Council.",
            "A student expelled for misconduct can never be considered for readmission under any circumstances."
        ],
        0,
        "Readmission of a student expelled for misconduct requires specific Council approval, which evaluates rehabilitation, cooling-off duration, and risk to the profession.",
        "Expulsion strips all membership rights; readmission is a discretionary privilege, not an entitlement."
    )

    # 27
    add(
        "Student Code of Conduct (2026), SDC Quorum & Decision-Making",
        "Under Clause 9 of the 2026 Student Code, what is the quorum required for a meeting of the Student Disciplinary Committee, and how are decisions arrived at?",
        [
            "A minimum quorum of two (2) members, with decisions made by a majority vote of members present and voting (the Chair having a casting vote in the event of a tie).",
            "A full attendance of all appointed members, requiring unanimous agreement on all penalties.",
            "A single presiding member sitting alone constitutes valid quorum for all final debarment orders.",
            "A quorum of five members including at least one representative from the Ministry of Corporate Affairs."
        ],
        0,
        "Clause 9 specifies a working quorum of 2 members for the SDC, with decisions reached by majority vote and a casting vote for the Chair in case of equality of votes.",
        "Operational quorum ensures timely inquiry without paralysis if a single committee member is indisposed."
    )

    # 28
    add(
        "Student Code of Conduct (2026), Interim Suspension of Exam Privileges",
        "Where a student is implicated in an ongoing high-profile investigation involving widespread question paper leaks, what interim power does the Institute possess pending final SDC inquiry?",
        [
            "The SDC or Council may place the student's examination registration and booking privileges under interim suspension pending the outcome of the inquiry.",
            "The Institute has no interim powers and must allow the candidate to sit for all scheduled exams until a final order is signed.",
            "The Institute can only request the student to voluntarily withdraw from the upcoming examination diet.",
            "The Institute must obtain an interim injunction from the High Court before suspending exam booking access."
        ],
        0,
        "To protect the integrity of upcoming examinations, the SDC/Council possesses interim powers to suspend examination privileges during the pendency of a grave inquiry.",
        "Interim protective measures prevent ongoing risk to examination diets while preserving natural justice in the main inquiry."
    )

    # 29
    add(
        "Student Code of Conduct (2026), Conflict of Interest & Recusal",
        "An SDC member discovers that a student facing charges of examination malpractice is an actuarial analyst employed in their own direct corporate reporting line. What is the mandatory ethical requirement?",
        [
            "The SDC member must disclose the conflict of interest immediately and recuse themselves from all deliberations and hearings concerning that student.",
            "The SDC member should proceed with the hearing but write a confidential dissent note.",
            "The SDC member may continue as long as they promise to judge the student more strictly than other candidates.",
            "The SDC member must resign from the Council and all Institute committees permanently."
        ],
        0,
        "Nemo judex in causa sua (no one should be a judge in their own cause) is a core rule of natural justice. Any direct employment or personal relationship requires prompt disclosure and recusal.",
        "Recusal ensures the tribunal remains impartial and free from real or perceived bias."
    )

    # 30
    add(
        "Student Code of Conduct (2026), Relationship with Actuaries Act 2006",
        "What is the statutory basis empowering the Council of the Institute to formulate and enforce the Student Code of Conduct (2026)?",
        [
            "The overarching statutory powers of the Council under Section 19 and Section 56 of the Actuaries Act 2006 to regulate the education, training, and discipline of students.",
            "An executive notification issued directly by the University Grants Commission.",
            "A delegation of authority from the Central Board of Secondary Education.",
            "The Indian Contract Act 1872 governing private tuition contracts."
        ],
        0,
        "The Student Code derives statutory legitimacy from Section 19 and Section 56 of the Actuaries Act 2006, empowering Council to regulate the education, examinations, and disciplinary control over candidates.",
        "The Actuaries Act 2006 provides the plenary statutory foundation for all student conduct regulations."
    )

    return qs

if __name__ == "__main__":
    qs = get_std_questions()
    print(f"Generated {len(qs)} Student questions successfully.")
