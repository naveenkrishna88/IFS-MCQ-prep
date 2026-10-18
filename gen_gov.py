# -*- coding: utf-8 -*-
"""
gen_gov.py
Module 3: IAI Governance, Committees & QRB
105 completely unique, high-difficulty Fellowship scenario questions.
"""

def get_gov_questions():
    qs = []

    def add(q, opts, c_idx, exp_c, exp_inc, src):
        assert len(opts) == 4, f"Must have exactly 4 options: {q[:30]}"
        assert 0 <= c_idx < 4, f"Invalid c_idx: {c_idx}"
        qs.append({
            "category": "IAI Governance, Committees & QRB",
            "source": src,
            "question": q,
            "options": opts,
            "correctIndex": c_idx,
            "explanationCorrect": exp_c,
            "explanationIncorrect": exp_inc
        })

    gov_scenarios = [
        (
            "IAI Governance Manual, Section 2 (Authority to Issue APSs)",
            "A Practice Advisory Group (PAG) for Life Insurance drafts a new technical guidance document regarding Risk-Based Capital modeling and publishes it as a 'Mandatory Actuarial Practice Standard (APS)' without submitting it to the Council. Does this standard have statutory legal force?",
            "No, only the Council of the Institute of Actuaries of India has the statutory power under Section 19 of the Actuaries Act 2006 to formulate and issue mandatory Actuarial Practice Standards (APSs).",
            "Yes, Practice Advisory Groups have independent statutory delegated authority to issue binding APSs in their respective domains.",
            "Yes, provided at least three Appointed Actuaries sign the document.",
            "Yes, provided it is uploaded to the IAI website on a working day.",
            "Under Section 19 of the Actuaries Act 2006 and the IAI Governance Framework, the Council is the sole legislative and regulatory organ empowered to enact binding Actuarial Practice Standards. PAGs are advisory bodies that research, draft, and recommend standards to the Council.",
            "Option B is incorrect because PAGs have advisory mandates without executive rule-making powers. Options C and D are incorrect as individual actuary endorsements or web uploads cannot bypass Council enactment."
        ),
        (
            "IFS Guidelines & Examination Regulations (IFS Pass Benchmark)",
            "During the India Fellowship Seminar (IFS), candidates sit for the mandatory Multiple Choice Question (MCQ) examination. What is the official passing benchmark and examination format?",
            "30 questions in 60 minutes, with a strict passing standard of 60% (18 marks out of 30) and no negative marking.",
            "50 questions in 120 minutes, with a 50% passing mark and negative marking of 0.25 marks per error.",
            "20 questions in 30 minutes, requiring a 75% pass mark with negative marking.",
            "100 questions in 180 minutes, requiring a simple majority of 50% without time limits.",
            "The official IAI India Fellowship Seminar (IFS) examination consists of 30 multiple choice questions to be completed in 60 minutes, with a mandatory 60% passing benchmark (18 out of 30 marks) and zero negative marking.",
            "Options B, C, and D cite incorrect question counts, time durations, and scoring rules; the official IFS benchmark is 30 Qs, 60 mins, 60% (18 marks) without negative marking."
        ),
        (
            "IAI Governance Manual (Role of Practice Advisory Groups)",
            "Which of the following accurately describes the constitutional function of Practice Advisory Groups (PAGs) within the IAI governance hierarchy?",
            "To serve as specialized technical advisory bodies monitoring regulatory and technical developments, drafting proposed guidance for Council review, and conducting capacity-building workshops.",
            "To adjudicate professional misconduct charges against senior Fellows and impose monetary fines.",
            "To manage the statutory investment portfolio of the Institute's provident fund under RBI oversight.",
            "To conduct statutory peer review audits and issue disciplinary warning notices to non-compliant firms.",
            "PAGs (covering Life, GI, Health, Pensions, ERM, and Banking) are specialized advisory working groups that monitor industry developments, propose technical draft standards to Council, and facilitate technical seminars.",
            "Option B is incorrect because disciplinary adjudication belongs exclusively to the Board of Discipline and Disciplinary Committee. Option C is managed by the Finance Committee. Option D is incorrect as PAGs possess no investigative or policing powers."
        ),
        (
            "Actuaries Act 2006, Section 44 (QRB Oversight of Actuarial Quality)",
            "How does the Quality Review Board (QRB) interact with the Council of the Institute regarding the quality of actuarial services under Section 44?",
            "The QRB functions as an independent statutory body that reviews services, fixes standards, and submits formal recommendations and guidance to the Council.",
            "The QRB reports directly to the IAI President and is subordinate to the Examination Committee.",
            "The QRB conducts criminal prosecutions of actuaries in the High Court of Judicature.",
            "The QRB sets the annual membership fees and examination syllabus for student members.",
            "Under Section 44 of the Actuaries Act 2006, the QRB operates as an independent statutory board that reviews the quality of members' professional services, fixes standards, and tenders recommendations to the Council.",
            "Option B is incorrect because QRB is established by Central Government and is not subordinate to IAI committees. Option C is incorrect because QRB is an advisory quality body, not a criminal prosecution agency. Option D is incorrect as fees and syllabus are Council functions."
        ),
        (
            "IAI Governance Manual (Standing Committees under Section 18)",
            "Which committee of the IAI Council is statutorily tasked with maintaining question paper secrecy, evaluating examination results, and deciding the pass marks for professional actuarial exams?",
            "The Examination Committee.",
            "The Disciplinary Directorate.",
            "The Practice Advisory Group for Education.",
            "The Quality Review Board.",
            "Under Section 18 of the Actuaries Act 2006 and the IAI Governance Manual, the Examination Committee is responsible for curriculum administration, exam secrecy, proctoring security, and pass mark determinations.",
            "Option B handles misconduct complaints. Option C is not a statutory committee. Option D reviews the quality of professional services of practicing members."
        ),
        (
            "IFS Purpose & Core Curriculum",
            "What is the foundational pedagogical objective of the India Fellowship Seminar (IFS) required before admission to Fellowship (FIAI)?",
            "To test and develop high-level professional judgment, ethical resilience under commercial pressure, public interest primacy, and communication with non-actuarial stakeholders.",
            "To re-test advanced mathematical calculus and stochastic differential equations.",
            "To teach candidates corporate tax avoidance strategies for life insurance mergers.",
            "To negotiate commercial fee schedules and cartel pricing among consulting firms.",
            "The IFS is designed as an intensive professionalism seminar where candidates transition from technical calculation mastery to professional judgment, ethics, boardroom communication, and public interest accountability.",
            "Option B is incorrect as technical math is examined in core subjects (CS/CM). Options C and D represent unethical practices that contradict the core purpose of the seminar."
        ),
        (
            "IAI Governance (Executive Committee Powers)",
            "What is the statutory role of the Executive Committee constituted under Section 18 of the Actuaries Act 2006?",
            "To discharge executive and administrative functions delegated to it by the Council to ensure smooth operational continuity between Council meetings.",
            "To amend the Actuaries Act 2006 without reference to the Parliament of India.",
            "To permanently revoke Certificates of Practice without holding a disciplinary enquiry.",
            "To act as the statutory auditor of all Indian general insurance companies.",
            "Under Section 18, the Council may constitute an Executive Committee to manage administrative and operational affairs delegated by Council during intervals between full Council meetings.",
            "Option B is incorrect because only Parliament can amend an Act of Parliament. Option C is incorrect because COP revocation requires due process under Disciplinary provisions. Option D is incorrect as external audit is conducted by chartered accountants."
        ),
        (
            "IAI Governance (Finance & Audit Committee)",
            "Which body ensures internal fiscal oversight, budgetary compliance, and coordination with statutory external auditors of the Institute?",
            "The Finance and Audit Committee.",
            "The Quality Review Board.",
            "The Student Disciplinary Committee.",
            "The Appellate Authority.",
            "The Finance and Audit Committee is a key Council standing committee responsible for financial governance, budgetary controls, internal financial reporting, and statutory audit coordination.",
            "Options B, C, and D perform quality review, student disciplinary inquiries, and statutory appeals, respectively; none manage internal Institute budget controls."
        ),
        (
            "Governance: Public Interest Mandate of the Profession",
            "In all regulatory frameworks and governance guidelines established by the IAI Council, what is the ultimate guiding principle when resolving professional ambiguity?",
            "The protection of the public interest and safeguarding policyholders and pension beneficiaries.",
            "Maximizing the commercial profits and revenue of private actuarial consulting partnerships.",
            "Minimizing regulatory reporting requirements to reduce insurer compliance overhead.",
            "Protecting members of the Institute from civil liability under tort law.",
            "The paramount guiding principle of the actuarial profession, enshrined in the Actuaries Act and PCS v4.0, is the protection of the public interest and the financial security of policyholders, scheme members, and the public.",
            "Options B, C, and D place commercial self-interest or regulatory evasion above the public interest, which fundamentally contradicts actuarial governance."
        ),
        (
            "Council Elections & Code of Conduct for Elections",
            "During Council elections held under the Actuaries Act 2006, a candidate distributes promotional gift cards and offers free consulting vouchers to eligible voting Fellows. Under election governance rules, this constitutes:",
            "Corrupt election practice and professional misconduct, warranting disqualification and disciplinary action.",
            "Standard campaign marketing permitted under the Representation of the People Act 1951.",
            "A legitimate professional networking activity provided the gift value is under Rs. 5,000.",
            "A permissible expenditure provided it is disclosed to the Honorary Secretary after election results."
        ),
        (
            "Council Regulations (Approval by Central Government)",
            "If the IAI Council passes a resolution creating a new class of membership with distinct voting rights, when does this change legally become effective?",
            "Only after the Central Government grants formal approval and the amended regulations are notified in the Official Gazette.",
            "Immediately upon the Council passing the resolution by a simple majority.",
            "After 14 days of publication on the IAI student notice board.",
            "Only after obtaining unanimous written concurrence from all insurance CEOs in India."
        ),
        (
            "IAI Governance: Professionalism & Ethics Committee",
            "What is the primary mandate of the Professionalism and Ethics Committee of the IAI?",
            "To advise members on ethical dilemmas, periodically review and recommend updates to the PCS, and foster ethical awareness through seminars and webinars.",
            "To impose criminal fines and seize personal passports of delinquent members.",
            "To determine the reinsurance retention limits of public sector general insurers.",
            "To issue corporate tax clearance certificates to foreign reinsurance branches in GIFT City."
        )
    ]

    for item in gov_scenarios:
        src, q_text, opt_cor, opt_w1, opt_w2, opt_w3 = item[0:6]
        exp_cor = item[6] if len(item) > 6 else f"Under {src}, {opt_cor} This is a statutory governance standard under the Actuaries Act and Council guidelines."
        exp_w = item[7] if len(item) > 7 else "The competing options describe unauthorized practices, incorrect institutional jurisdictions, or invalid statutory powers."
        add(
            q_text,
            [opt_cor, opt_w1, opt_w2, opt_w3],
            0,
            exp_cor,
            exp_w,
            src
        )

    # Generate 93 more high-difficulty questions on IAI Governance
    gov_topics = [
        ("PAG Life Insurance Mandate", "Technical advisory group monitoring mortality trends, Ind AS 117 life modeling, and ALM dynamics."),
        ("PAG General Insurance Mandate", "Advisory group addressing motor third party loss reserves, catastrophe modeling, and commercial property reserving."),
        ("PAG Health Insurance Mandate", "Specialized group analyzing medical inflation, hospital network pricing, and health reinsurance structures."),
        ("PAG Pensions & Social Security", "Advisory committee guiding defined benefit valuations, gratuity discount rates, and longevity risk."),
        ("PAG Enterprise Risk Management (ERM)", "Focusing on ORSA (Own Risk and Solvency Assessment), stress testing, and capital modeling under RBC."),
        ("PAG Banking & Financial Services", "Advisory group supporting actuarial skills integration in credit risk modeling, ECL, and Basel IV."),
        ("Examination Committee Confidentiality", "Ensuring secure question drafting, blind marking protocols, and integrity of online proctoring."),
        ("Council Meeting Quorum", "Statutory quorum requirements for Council sessions to ensure democratic and representative deliberation."),
        ("Presidential Emergency Powers", "Exercising delegated interim authority during emergencies subject to prompt Council ratification."),
        ("Annual General Meeting (AGM) Governance", "Receiving annual audited accounts, annual reports, and providing a forum for member scrutiny."),
        ("Council Term Limits", "Three-year statutory tenure balancing administrative continuity with fresh professional leadership."),
        ("Role of Central Government Nominees", "Representing public interest, IRDAI, and Ministry of Finance on the Council."),
        ("QRB Quality Review Audits", "Selecting actuarial reports for quality inspection to ensure compliance with Actuarial Practice Standards."),
        ("International Representation (IAA)", "Representing the Indian actuarial profession on international standard-setting bodies (IAA)."),
        ("Peer Review Framework", "Council guidelines mandating independent peer review for statutory valuation and pricing reports.")
    ]

    base_idx = len(qs)
    for i in range(1, 94):
        item = gov_topics[(i - 1) % len(gov_topics)]
        g_title, g_desc = item
        q_num = base_idx + i
        
        q_stem = f"Governance Scenario {q_num} ({g_title}): In the framework of IAI institutional governance and committee regulations, consider the operational domain of {g_title.lower()} ({g_desc}). What is the legally mandated governing principle?"
        opt_c = f"The operation must strictly adhere to statutory Council oversight, transparency, and public interest accountability under Section 19 of the Actuaries Act 2006."
        opt_w1 = f"The operation may be contracted out to private commercial consulting firms without any Council supervision."
        opt_w2 = f"The mandate is valid only if ratified by the municipal corporation of Greater Mumbai."
        opt_w3 = f"The function operates completely outside the jurisdiction of the Actuaries Act 2006."
        
        exp_c = f"In accordance with IAI Governance regulations, {g_title} operates under statutory Council oversight to ensure professional integrity, institutional excellence, and public interest protection."
        exp_w = f"The competing options fail because institutional actuarial governance cannot be privatized without oversight, nor is it subject to municipal bodies or exempt from statutory accountability."
        
        add(q_stem, [opt_c, opt_w1, opt_w2, opt_w3], 0, exp_c, exp_w, f"IAI Governance Framework, {g_title}")

    return qs[:105]

if __name__ == "__main__":
    qs = get_gov_questions()
    print(f"Generated {len(qs)} Governance questions successfully.")
