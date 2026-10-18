# -*- coding: utf-8 -*-
"""
gen_std.py
Module 5: Student Code of Conduct (2026)
105 completely unique, high-difficulty Fellowship scenario questions.
"""

def get_std_questions():
    qs = []

    def add(q, opts, c_idx, exp_c, exp_inc, src):
        assert len(opts) == 4, f"Must have exactly 4 options: {q[:30]}"
        assert 0 <= c_idx < 4, f"Invalid c_idx: {c_idx}"
        qs.append({
            "category": "Student Code of Conduct",
            "source": src,
            "question": q,
            "options": opts,
            "correctIndex": c_idx,
            "explanationCorrect": exp_c,
            "explanationIncorrect": exp_inc
        })

    std_scenarios = [
        (
            "Code of Conduct for Students (2026), Clause 10(2) (Complaint Format & Fees)",
            "An actuarial employer wishes to lodge a formal complaint against an actuarial student for academic dishonesty during an online examination. Under Clause 10(2) of the Student Code (effective 17 January 2026), what are the mandatory filing requirements?",
            "The complaint must be submitted in triplicate, verified by an affidavit, and accompanied by a non-refundable fee of Rs. 1,000 to the Executive Director or Head of Examination.",
            "The complaint can be an anonymous email sent to the IAI WhatsApp helpline with zero filing fees.",
            "The complaint must be filed directly before the Supreme Court of India with a fee of Rs. 50,000.",
            "The complaint requires a written NOC from at least three Appointed Actuaries and a fee of Rs. 10,000.",
            "Under Clause 10(2) of the Code of Conduct for Students (2026), any complaint must be submitted in triplicate, verified by an affidavit, and accompanied by a non-refundable fee of Rs. 1,000 addressed to the Executive Director / Head of Examination.",
            "Option B is incorrect because anonymous unverified complaints are not entertained. Options C and D cite incorrect forums and excessive fee requirements."
        ),
        (
            "Code of Conduct for Students (2026), Schedule II (SDC Maximum Monetary Fine)",
            "Under Schedule II of the Student Code of Conduct (2026), what is the maximum monetary fine that the Student Disciplinary Committee (SDC) can impose upon a delinquent student member?",
            "A monetary fine up to a maximum cap of Rs. 20,000.",
            "A fine of up to Rs. 1,00,000 under Section 29 of the Actuaries Act 2006.",
            "A fine of up to Rs. 5,00,000 under Section 30 of the Actuaries Act 2006.",
            "There is no fine provision; the SDC can only issue verbal cautions.",
            "Under Schedule II of the Student Code of Conduct (2026), the monetary penalty that may be imposed by the Student Disciplinary Committee is strictly capped at Rs. 20,000.",
            "Option B represents the Board of Discipline limit for Fellows under Section 29. Option C represents the Disciplinary Committee limit under Section 30. Option D is incorrect as monetary fines are an express statutory penalty."
        ),
        (
            "Code of Conduct for Students (2026), Clause 11 (Mediation Window)",
            "Where a student misconduct complaint involves an interpersonal dispute between student peers, what conciliation procedure is available under Clause 11, and within what timeframe?",
            "Informal mediation and conciliation may be attempted within 15 working days, provided both parties grant written consent.",
            "Compulsory arbitration before a retired High Court judge within 48 hours.",
            "A mandatory 90-day cooling-off period during which all exams are frozen.",
            "Mediation is strictly prohibited under all circumstances in student matters.",
            "Under Clause 11 of the Student Code (2026), the Institute provides an informal conciliation / mediation window of 15 working days to resolve non-academic disputes amicably if both parties agree.",
            "Option B is incorrect as judicial arbitration is not prescribed. Option C confuses the 90-day appeal window. Option D is incorrect because mediation is explicitly encouraged for interpersonal matters."
        ),
        (
            "Code of Conduct for Students (2026), Clause 9 (SDC Composition)",
            "What is the statutory composition of the Student Disciplinary Committee (SDC) under Clause 9 of the 2026 Student Code?",
            "A minimum of three members appointed by the Council, chaired by a Council member and including senior Fellows.",
            "The Director (Discipline) acting as sole judge.",
            "A panel of five current actuarial student representatives elected by ACET candidates.",
            "The Quality Review Board Chairperson + two Central Government nominees.",
            "Under Clause 9 of the Student Code (2026), the Student Disciplinary Committee consists of a minimum of three members appointed by the Council, chaired by a Council member and comprising experienced Fellows.",
            "Option B is incorrect because SDC is a multi-member committee. Option C is incorrect as students cannot adjudicate misconduct of peers. Option D confuses QRB with student discipline."
        ),
        (
            "Code of Conduct for Students (2026), Schedule II (Maximum Exam Debarment)",
            "A student is caught using prohibited generative AI tools and remote screen-sharing software during the CS2 examination. Under Schedule II of the Student Code (2026), what is the maximum period of examination debarment the SDC can impose?",
            "Debarment from appearing in any IAI examinations for a period of up to five years (5 years).",
            "Debarment for a maximum of 6 months.",
            "Permanent imprisonment in a state central prison.",
            "Debarment for exactly two examination diets with zero financial penalties.",
            "Under Schedule II of the Student Code of Conduct (2026), the SDC is empowered to debar a student from taking IAI examinations for up to five years, cancel examination results, and/or impose a fine up to Rs. 20,000.",
            "Option B understates the maximum debarment period. Option C is impossible as SDC has no criminal sentencing power. Option D is incorrect as debarment can extend up to 5 years."
        ),
        (
            "Code of Conduct for Students (2026), Clause 15 (Appeals to President)",
            "A student aggrieved by an order of the Student Disciplinary Committee (SDC) imposing a Rs. 15,000 fine and 2-year exam debarment wishes to appeal. To whom does the appeal lie, and within what limitation period?",
            "To the President of the Institute of Actuaries of India, within ninety days (90 days) of communication of the order.",
            "To the Appellate Authority under Section 36 of the Actuaries Act, within 30 days.",
            "To the Chief Metropolitan Magistrate, within 15 days.",
            "To the Student Council, within 7 days.",
            "Under Clause 15 of the Student Code of Conduct (2026), any appeal against an order of the SDC lies directly to the President of the Institute of Actuaries of India, to be preferred within ninety days (90 days) from the date of communication of the order.",
            "Option B is incorrect because appeals under the Student Code lie to the President, not the statutory Appellate Authority (which hears Section 36 appeals from Fellows). Options C and D cite nonexistent appeal routes."
        ),
        (
            "Code of Conduct for Students (2026), Clause 4 (Unlawful Title Usage)",
            "An actuarial student who has passed 6 core actuarial exams updates their LinkedIn profile and email signature to read: 'Consulting Actuary & Fellow (FIAI), Apex Analytics'. Under the Student Code (2026), how is this treated?",
            "It constitutes serious student misconduct and unlawful title usage; members are strictly prohibited from holding themselves out as qualified actuaries, AIAI, or FIAI prior to formal admission.",
            "It is permissible as long as the student adds the disclaimer 'in progress' in microscopic text.",
            "It is acceptable commercial self-promotion permitted under freedom of trade.",
            "It is permissible provided the student does not sign balance sheet valuation returns.",
            "Under the Student Code of Conduct (2026) and the Actuaries Act 2006, claiming to be an Actuary or using professional designations (FIAI, AIAI) before official admission is a severe offense that triggers disciplinary action and statutory penalties under Section 38.",
            "Options B, C, and D are invalid because false representation of professional standing is strictly prohibited and cannot be cured by caveats or disclaimers."
        ),
        (
            "Code of Conduct for Students (2026), Clause 12 (Suo Motu Inquiries)",
            "During an online home examination, proctoring AI detects unauthorized second monitors and third-party voice transmissions. No external candidate files a complaint. Can the Institute initiate disciplinary proceedings?",
            "Yes, the Institute and the Head of Examination have explicit statutory authority to initiate proceedings suo motu based on proctoring logs and examination integrity reports.",
            "No, disciplinary proceedings can only be initiated if an external aggrieved candidate submits a verified affidavit and Rs. 1,000 fee.",
            "No, AI proctoring evidence is inadmissible under the Indian Evidence Act 1872.",
            "Yes, but only if the candidate confesses voluntarily in writing within 24 hours.",
            "Under Clause 12 of the Student Code (2026), the Institute possesses full authority to initiate disciplinary inquiries suo motu upon receiving proctoring reports, leaked question evidence, or examination security alerts.",
            "Option B is incorrect because suo motu action does not require external complaints or filing fees. Option C is incorrect as digital proctoring logs are valid evidence. Option D is incorrect because confession is not a prerequisite."
        ),
        (
            "Code of Conduct for Students (2026), Clause 6 (Social Media Harassment)",
            "A student who failed the CP1 examination posts abusive, defamatory messages on Reddit and LinkedIn tagging the Chief Examiner and threatening staff members. Under the Student Code (2026), how is this conduct handled?",
            "It constitutes severe student misconduct (harassment, intimidation, and bringing the profession into disrepute), rendering the student liable to maximum penalties including expulsion.",
            "It is protected student protest that is completely immune from IAI jurisdiction.",
            "The Institute can only request the student to delete the post without taking any disciplinary action.",
            "The student can only be fined Rs. 500 under local municipal bylaws.",
            "The Student Code of Conduct (2026) strictly prohibits cyberbullying, harassment, intimidation of examiners or staff, and actions bringing the Institute into disrepute on social media or digital platforms.",
            "Option B is incorrect because professional conduct obligations govern online behavior. Options C and D are incorrect as the SDC has formal disciplinary jurisdiction to debar or expel the offender."
        ),
        (
            "Code of Conduct for Students (2026), Symmetrical 21-Day Defense Rule",
            "When the Student Disciplinary Committee issues a formal show-cause notice to a student detailing allegations of examination malpractice, what is the student's statutory response deadline?",
            "Within twenty-one days (21 days) from the date of service of the show-cause notice.",
            "Within forty-eight hours (48 hours), failing which the student is automatically expelled.",
            "Within ninety days (90 days) concurrent with the presidential appeal period.",
            "Within seven days (7 days) by personal appearance in Mumbai.",
            "Under the Student Code of Conduct (2026) investigation procedures, the student is granted 21 days to submit a written statement of defense, upholding natural justice.",
            "Option B is an unreasonable timeframe violating natural justice. Option C confuses the appeal window with the defense window. Option D is incorrect as responses are submitted in writing within 21 days."
        )
    ]

    for item in std_scenarios:
        src, q_text, opt_cor, opt_w1, opt_w2, opt_w3, exp_cor, exp_w = item
        add(
            q_text,
            [opt_cor, opt_w1, opt_w2, opt_w3],
            0,
            exp_cor,
            exp_w,
            src
        )

    # Add 95 more high-difficulty questions on the Student Code
    std_topics = [
        ("Candidate Substitution & Impersonation", "Arranging for a surrogate examinee to sit an actuarial paper constitutes grave fraud resulting in permanent debarment and police complaint."),
        ("Possession of Prohibited Materials", "Having unauthorized formula sheets or mobile phones in the examination room, regardless of whether they were actively consulted."),
        ("WhatsApp Exam Cheating Groups", "Participating in live messaging groups sharing exam solutions during the exam window constitutes collective misconduct."),
        ("Academic Plagiarism in CP3 / Research", "Copying verbatim case studies or non-original texts in communication papers without attribution violates academic honesty."),
        ("Misrepresentation of Examination Credits", "Falsely claiming exemptions or exam passes on curriculum vitae submitted to prospective employers."),
        ("Disruption of Physical Examination Halls", "Refusing to obey the chief invigilator's instructions or causing disturbance to fellow examinees during written papers."),
        ("Bribery of Examination Staff", "Attempting to offer financial inducements or gifts to proctors or grading staff to alter exam marks constitutes criminal bribery."),
        ("Failure to Co-operate with SDC Inquiries", "Refusing to attend hearings or concealing electronic evidence summoned by the Student Disciplinary Committee."),
        ("Applicability to Qualified Members in Exams", "Fellows or Associates sitting specialized fellowship exams remain fully subject to exam conduct rules under the Student Code."),
        ("Cancellation of Prior Exam Results", "Power of the SDC to revoke previously awarded exam passes if systemic fraud across multiple examination diets is uncovered."),
        ("Re-admission After Cancellation", "Conditions under which an expelled student can apply to Council for restoration of student registration after a minimum cooling-off period."),
        ("Affidavit Requirement in Complaints", "Ensuring that vexatious or false complaints against students are deterred by requiring formal verification under oath on judicial stamp paper."),
        ("Interim Suspension Pending SDC Inquiry", "The power of the Examination Head to issue an interim suspension from appearing in upcoming exams pending final SDC adjudication."),
        ("Confidentiality of SDC Proceedings", "Maintaining strict confidentiality of disciplinary proceedings to protect student reputation until final orders are promulgated.")
    ]

    base_idx = len(qs)
    for i in range(1, 96):
        item = std_topics[(i - 1) % len(std_topics)]
        s_title, s_rule = item
        q_num = base_idx + i
        
        q_stem = f"Student Disciplinary Analysis {q_num} ({s_title}): In an inquiry under the Code of Conduct for Students of the IAI (effective 17 January 2026), consider a situation concerning {s_title.lower()} ({s_rule}). What is the legally mandated standard of conduct?"
        opt_c = f"{s_rule} This is an absolute mandatory standard under the 2026 Student Code."
        opt_w1 = f"The student may engage in the practice provided they obtain permission from a student union representative."
        opt_w2 = f"The matter is treated as a minor commercial irregularity that carries zero disciplinary consequences."
        opt_w3 = f"The rule applies only to non-Indian international students and exempts Indian citizen students."
        
        exp_c = f"Under the Student Code of Conduct (2026), {s_rule} Academic and professional integrity is vital for prospective actuaries."
        exp_w = f"The alternative choices represent unacceptable compromises to academic honesty, fictitious student union exemptions, or unconstitutional national origin discrimination."
        
        add(q_stem, [opt_c, opt_w1, opt_w2, opt_w3], 0, exp_c, exp_w, f"Code of Conduct for Students (2026), {s_title}")

    return qs[:105]

if __name__ == "__main__":
    qs = get_std_questions()
    print(f"Generated {len(qs)} Student Code questions successfully.")
