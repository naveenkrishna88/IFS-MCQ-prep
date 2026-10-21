# -*- coding: utf-8 -*-
"""
build_pcs.py - Module 1: Professional Conduct Standards (PCS v4.0)
High-difficulty, authentic Fellowship scenario questions covering:
- Primacy of Law (Para 1.2)
- Universal Scope & Council Dispensation (Para 1.1, 1.6)
- Integrity, Substance over Form & Competence (Para 2)
- Confidentiality & 3 Permissible Exceptions (Para 3)
- Conflicts of Interest Protocol & Safeguards (Para 4)
- Misconduct Reporting, Self-Reporting & Reciprocity (Para 5)
- Commercial Practice, Contingency Fees & Fee-Sharing (Para 6)
- Change of Actuarial Advisor & 10-Day Handover Rule (Para 7)
- Advertising, Publicity & Social Media (Para 8)
"""

CAT = "Professional Conduct Standards (PCS v4.0)"

def get_pcs_questions():
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
        "PCS v4.0, Para 1.2 (Primacy of Law)",
        "A consulting actuary advising an Indian life insurer is instructed by company management to adopt an internal corporate valuation guideline that directly conflicts with a legally binding IRDAI circular. Under PCS v4.0 Para 1.2, how must the actuary proceed?",
        [
            "The actuary must comply with the IRDAI circular, because statutory legislation and judicial legal requirements strictly override professional guidance notes and employer instructions.",
            "The actuary must follow the internal corporate guideline because an actuary's primary legal duty of loyalty is to their paying employer.",
            "The actuary must seek formal written dispensation from the President of the Institute before complying with the statutory circular.",
            "The actuary may choose either standard at their discretion, provided the choice is prominently disclosed in a footnote to the valuation report."
        ],
        0,
        "Under PCS v4.0 Para 1.2, professional guidance is not intended to require members to act in breach of law. Where professional guidance or employer instructions conflict with statutory or judicial legal requirements, the requirements of law strictly prevail.",
        "Option B is wrong because employer loyalty cannot justify violating the law. Option C is wrong because Council dispensation under Para 1.6 cannot exempt a member from statutory law. Option D is wrong because compliance with law is non-discretionary."
    )

    # 2
    add(
        "PCS v4.0, Para 1.1 & 1.3 (Universal Scope)",
        "Which of the following correctly describes the scope of application of the Professional Conduct Standards (PCS v4.0)?",
        [
            "The PCS applies unconditionally to all classes of members of the IAI—Fellows, Associates, Students, and Affiliates—whether practicing in India or abroad, and whether employed, consulting, or retired.",
            "The PCS applies strictly to Fellows holding a Certificate of Practice (COP); students and associates without a COP are exempt.",
            "The PCS applies only to actuaries practicing within India; Indian actuaries working abroad are governed exclusively by local foreign law.",
            "The PCS applies only to Appointed Actuaries and signing consulting actuaries; corporate actuarial employees are exempt."
        ],
        0,
        "Under PCS v4.0 Para 1.1, the PCS applies to all members of the Institute of Actuaries of India regardless of membership class (Fellows, Associates, Students, Affiliates), practice area, employment status, or geographical location.",
        "Options B, C, and D are common exam misconceptions. The PCS is universal across all membership grades, employment arrangements, and jurisdictions."
    )

    # 3
    add(
        "PCS v4.0, Para 1.6 (Council Dispensation)",
        "Under what conditions may an actuary be granted dispensation from complying with a specific provision of the Professional Conduct Standards (PCS v4.0)?",
        [
            "Only in exceptional circumstances, upon formal written application to the Council, and granted strictly in writing by the Council of the Institute.",
            "Upon verbal approval from the Appointed Actuary of the insurer being advised.",
            "Automatically, if following the provision would result in commercial loss or breach of a private client contract.",
            "Upon submitting a unilateral disclaimer in the actuarial valuation report."
        ],
        0,
        "Under PCS v4.0 Para 1.6, dispensation from compliance with any provision of the PCS can only be granted by the Council in exceptional circumstances, upon formal written application, and must be evidenced in writing.",
        "Neither employer consent, client disclaimers, nor Appointed Actuary approval can dispense with PCS obligations; only the statutory Council has this power."
    )

    # 4
    add(
        "PCS v4.0, Para 2.1 (Integrity & Substance over Form)",
        "An actuary calibrating liability reserves for an insurer discovers that applying the minimum regulatory mathematical formula produces a reserve that is clearly inadequate to meet expected future policyholder claims. How does PCS v4.0 govern the actuary's duty?",
        [
            "The actuary must prioritize substance over form and ensure the reserves are genuinely sufficient, as mechanically following a minimum regulatory formula while knowing it produces inadequate reserves breaches professional integrity.",
            "The actuary is legally immune from criticism as long as the mathematical calculation complies with the minimum regulatory formula.",
            "The actuary must report the minimum regulatory figure to the regulator and maintain a private set of internal accounts for the Board.",
            "The actuary should adopt the inadequate reserve but reduce their professional fees to compensate the insurer."
        ],
        0,
        "Under PCS v4.0 Para 2.1, actuaries must uphold professional integrity and prioritize substance over form. Complying with the letter of a regulatory formula while ignoring known adverse realities constitutes professional misconduct.",
        "Option B inverts the principle of substance over form. Option C proposes misleading regulatory disclosures, which is severe misconduct. Option D does not cure reserve insufficiency."
    )

    # 5
    add(
        "PCS v4.0, Para 2.1 (Professional Competence & Due Care)",
        "A Fellow with 15 years of exclusive expertise in life insurance valuation is requested by a client to certify a complex marine reinsurance catastrophic excess-of-loss pricing model. The actuary has never worked in non-life reinsurance. Under PCS v4.0 Para 2.1, how must the actuary proceed?",
        [
            "The actuary must decline the assignment, or only accept it if they collaborate with an experienced general insurance actuary and disclose this arrangement to the client.",
            "The actuary may accept the assignment alone because holding a Fellowship (FIAI) legally certifies universal competence across all actuarial fields.",
            "The actuary should accept the work and rely completely on automated commercial catastrophe software without independent review.",
            "The actuary may accept if they charge a discounted fee to reflect their lack of experience."
        ],
        0,
        "Under PCS v4.0 Para 2.1, actuaries must only accept work that is within their professional competence. If specialized knowledge is lacking, the actuary must either obtain appropriate support from a qualified specialist with client consent, or decline the appointment.",
        "Fellowship denotes professional qualification, not omnicompetence across all specialized domains. Software outputs must be validated by competent professional judgment."
    )

    # 6
    add(
        "PCS v4.0, Para 3.1 & 3.2 (Confidentiality & Statutory Compulsion)",
        "The Enforcement Directorate (ED), exercising powers of a Civil Court under the Prevention of Money Laundering Act (PMLA), serves a formal statutory summon directing an actuary to provide client cash-flow projections. The client strictly instructs the actuary not to disclose any records. What must the actuary do?",
        [
            "Comply with the statutory summon and disclose the required records, as statutory or judicial legal compulsion is an explicit exception to confidentiality under Para 3.2.",
            "Refuse disclosure to the statutory authority until the client gives express written consent.",
            "Resign immediately from the client engagement to avoid having to comply with either the client or the ED.",
            "Disclose only fabricated or redacted models to protect client trade secrets."
        ],
        0,
        "Under PCS v4.0 Para 3.2, client confidentiality is subject to three strict exceptions, the first being statutory or judicial compulsion by a court or authority possessing competent legal powers. Client consent is not required.",
        "Option B incorrectly subordinates the law to client instructions. Resignation (Option C) does not extinguish a valid statutory summons. Fabricating data (Option D) is a criminal offense."
    )

    # 7
    add(
        "PCS v4.0, Para 3.2 (Public Interest Whistleblowing)",
        "During a statutory valuation, an actuary discovers incontrovertible evidence that company directors are actively siphoning policyholder funds, creating a catastrophic insolvency risk. Management refuses to rectify the matter. Under PCS v4.0 Para 3.2, what is the mandatory procedural step before the actuary discloses this to the regulator without client consent?",
        [
            "The actuary must seek independent legal advice to verify that the public interest disclosure is legally protected and justified before disclosing without client consent.",
            "The actuary may disclose immediately to the press and social media without taking legal counsel.",
            "The actuary must obtain written permission from the company's Board Audit Committee.",
            "The actuary cannot disclose under any circumstances, because client confidentiality is absolute and permanent."
        ],
        0,
        "Under PCS v4.0 Para 3.2, public interest whistleblowing to prevent serious crime, fraud, or grave public harm is permissible, but the actuary is mandatorily advised to obtain independent legal counsel prior to disclosure to verify statutory protection.",
        "Disclosing to the press (Option B) violates professional confidentiality. Board permission (Option C) is unachievable in management fraud. Confidentiality is not absolute (Option D)."
    )

    # 8
    add(
        "PCS v4.0, Para 3.2 (Confidentiality Exception: Self-Defense)",
        "A former client files a formal complaint with the IAI Disciplinary Directorate alleging that an actuary committed gross professional negligence in valuing pension obligations. To defend against the charge, the actuary must disclose confidential scheme asset registers and internal client emails. Is this disclosure permissible under PCS v4.0?",
        [
            "Yes, disclosing confidential client information is permitted to the extent reasonably necessary to defend oneself against a formal lawsuit or official disciplinary proceeding.",
            "No, client confidentiality continues indefinitely and can never be breached, even to defend against professional misconduct charges.",
            "Yes, but only if the actuary pays an arbitration penalty of Rs. 25,000 to the Institute.",
            "Yes, but only if the complainant client grants prior written consent to using their files."
        ],
        0,
        "Under PCS v4.0 Para 3.2, the third recognized exception to client confidentiality is self-defense: members may disclose confidential material strictly to the extent necessary to defend themselves against formal disciplinary charges or legal claims.",
        "Client consent is not required when defending against charges brought by that very client. Fictitious arbitration penalties (Option C) do not exist."
    )

    # 9
    add(
        "PCS v4.0, Para 3.1 (Duration of Confidentiality Duty)",
        "An actuary resigns as Appointed Actuary of an insurance company after 7 years of service. Three years after resignation, an investment analyst asks the actuary for confidential historical loss-ratio data from the former employer. How does PCS v4.0 govern this request?",
        [
            "The duty of confidentiality continues indefinitely, even after the professional relationship or employment has terminated, unless an exception under Para 3.2 applies.",
            "The duty of confidentiality expires exactly 1 year after the termination of employment.",
            "The actuary may disclose the data provided they do not receive financial payment for the information.",
            "The actuary may disclose the information once the insurer publishes its annual audited accounts."
        ],
        0,
        "Under PCS v4.0 Para 3.1, the duty of confidentiality is permanent and continues indefinitely even after the member has ceased to act for or be employed by the client.",
        "Confidentiality does not have a 1-year sunset clause, nor does non-payment or subsequent general public accounts extinguish unpublished confidential background data."
    )

    # 10
    add(
        "PCS v4.0, Para 4.1 & 4.2 (Conflict of Interest Protocol)",
        "An actuarial consulting firm is approached by Company B (the bidder in a hostile takeover) to value the target company, Company T. The firm already serves as the Appointed Actuary and statutory valuation advisor to Company T. What is the mandatory professional course of action under PCS v4.0 Para 4?",
        [
            "The firm must identify the actual and perceived conflict of interest, disclose it fully in writing to both Company B and Company T, and may only proceed if both parties grant explicit informed consent with robust structural safeguards (Chinese walls).",
            "The firm may freely accept the assignment from Company B without informing Company T, provided different junior analysts work on the spreadsheets.",
            "The firm must accept Company B's offer immediately because competition law encourages consultants to serve multiple industry competitors.",
            "The firm must resign immediately from Company T before talking to Company B."
        ],
        0,
        "Under PCS v4.0 Para 4, the mandatory 3-step conflict protocol requires: proactive identification, full written disclosure to all affected parties, and explicit informed consent. If consent cannot be obtained or safeguards cannot preserve objectivity, the engagement must be declined.",
        "Failing to disclose conflicts (Option B) is severe misconduct under the Second Schedule. Competition law (Option C) does not override ethical conflict rules."
    )

    # 11
    add(
        "PCS v4.0, Para 4.4 (Chinese Walls & Structural Safeguards)",
        "Where two competing corporate clients grant informed consent for an actuarial consultancy to advise both on a joint venture, what structural measures must the firm establish under PCS v4.0?",
        [
            "Physical and electronic information barriers (Chinese walls), separate engagement teams, independent peer reviewers, and strict data partitioning.",
            "A verbal agreement among team members not to discuss client work in public cafeterias.",
            "The assignment must be handled entirely by an uncredentialed student trainee without partner oversight.",
            "The firm must double its consulting billing rate to reflect the added ethical risk."
        ],
        0,
        "Under PCS v4.0 Para 4.4, when managing conflicts with informed consent, firms must institute robust, verifiable safeguards including Chinese walls, dedicated segregated personnel, distinct servers/passwords, and independent review.",
        "Informal verbal pacts (Option B) are legally insufficient. Omitting partner oversight (Option C) violates competence rules. Rate hikes (Option D) are irrelevant."
    )

    # 12
    add(
        "PCS v4.0, Para 7.1 & 7.2 (Change of Actuarial Advisor - Client Autonomy)",
        "An insurance client informs its existing consulting actuary (Actuary X) that it has decided to terminate their contract and appoint Actuary Y. Actuary X refuses to accept the termination and threatens to withhold historical valuation data. How does PCS v4.0 evaluate Actuary X's position?",
        [
            "Actuary X is acting in breach of PCS; clients have an unrestricted right to choose and change their professional advisors, and the incumbent actuary must make no attempt to obstruct the transition.",
            "Actuary X is legally entitled to block the appointment until the client renews the contract for at least one more valuation cycle.",
            "Actuary X can withhold statutory valuation files indefinitely if there is an ongoing commercial dispute over unpaid consulting fees.",
            "Actuary X may block the successor actuary if Actuary Y has fewer years of post-qualification experience."
        ],
        0,
        "Under PCS v4.0 Para 7.1 and 7.4, client autonomy is fundamental: clients have an absolute right to choose and replace their advisors. The incumbent actuary must not obstruct the transition and cannot use client data as leverage in commercial fee disputes.",
        "Unpaid fees are a commercial debt to be pursued through civil courts, not a professional justification to withhold statutory data or block client handover."
    )

    # 13
    add(
        "PCS v4.0, Para 7.2 & 7.4 (The 10-Day Handover Rule)",
        "Actuary A is approached by a corporate client to take over the annual employee gratuity valuation previously handled by Actuary B. Actuary A writes to Actuary B requesting professional clearance. Under PCS v4.0 Para 7.4, within what timeframe must Actuary B respond?",
        [
            "Actuary B must reply in writing as soon as possible, but no later than 10 calendar days from receipt of the communication.",
            "Actuary B has 30 working days to respond under standard commercial practice.",
            "Actuary B has 21 days, matching the pleading timetable of the Disciplinary Directorate.",
            "Actuary B is not required to respond unless the corporate client pays an official transition fee."
        ],
        0,
        "Under PCS v4.0 Para 7.4, the incumbent actuary must provide the required professional handover information as soon as possible, and no later than 10 days from receipt of the inquiry.",
        "The 10-day rule is a strict professional obligation. Failing to reply within 10 days without valid justification constitutes professional misconduct under the First Schedule."
    )

    # 14
    add(
        "PCS v4.0, Para 7.3 (Mandatory Refusal if Client Withholds Consent)",
        "A prospective client approaches Actuary P to perform a statutory liability valuation, replacing the incumbent actuary. When Actuary P informs the client that professional standards require writing to the incumbent actuary to inquire about professional reasons, the client adamantly refuses permission, citing confidential commercial fallout. What MUST Actuary P do under PCS v4.0 Para 7.3?",
        [
            "Actuary P MUST decline the appointment unconditionally.",
            "Actuary P may accept the appointment provided the client signs an indemnity bond protecting Actuary P against future claims.",
            "Actuary P may proceed with the valuation as long as a prominent disclaimer stating 'No contact with prior actuary' is included in the report.",
            "Actuary P should accept the engagement and secretly send a copy of the final report to the IAI President."
        ],
        0,
        "PCS v4.0 Para 7.3 is strict, unequivocal, and unconditional: 'If the client refuses permission to contact the incumbent actuary, the newly approached actuary MUST decline the appointment.' There are no exceptions, disclaimers, or indemnity carve-outs.",
        "Proceeding without contacting the incumbent actuary after client refusal is a cardinal ethical violation under PCS v4.0."
    )

    # 15
    add(
        "PCS v4.0, Para 7.4 (Professional Reasons vs Fee Disputes)",
        "When an incumbent actuary replies to a successor actuary's 10-day inquiry letter under Para 7.4, which of the following represents a valid 'professional reason' that should be disclosed?",
        [
            "The client repeatedly coerced the incumbent actuary to understate claim reserves and threatened termination when the actuary insisted on prudent assumptions.",
            "The client has an outstanding balance of unpaid consulting fees from the previous quarter.",
            "The client is shifting to a consulting firm that quoted lower hourly rates.",
            "The client's Chief Risk Officer is personally disagreeable to work with."
        ],
        0,
        "Under PCS v4.0 Para 7.4, professional reasons concern matters of integrity, regulatory compliance, coercion, or unethical practices that could impact the successor's decision to accept the appointment.",
        "Commercial fee disputes, fee undercutting, and personal friction are commercial or interpersonal matters, not professional grounds that impede appointment."
    )

    # 16
    add(
        "PCS v4.0, Para 5.2 (Duty to Self-Report Professional Breaches)",
        "An actuary discovers that an actuarial report certified two years ago contained a catastrophic mathematical formula error that resulted in material underfunding of a pension trust. The error cannot be rectified without public disclosure. What is the actuary's duty under PCS v4.0 Para 5.2?",
        [
            "The actuary must immediately self-report the unrectifiable material professional breach in writing to the IAI, and inform affected stakeholders.",
            "The actuary should remain silent because the three-year commercial statute of limitations has not yet expired.",
            "The actuary should destroy the original working models and blame the software vendor.",
            "The actuary is only required to report the breach if a third party files a formal police complaint."
        ],
        0,
        "Under PCS v4.0 Para 5.2, an actuary who realizes they have committed an unrectifiable material professional breach has an affirmative mandatory duty to self-report the matter to the Institute promptly.",
        "Concealing known material errors or destroying records compounds the violation into gross professional misconduct under the Second Schedule."
    )

    # 17
    add(
        "PCS v4.0, Para 5.3 & 5.4 (Peer Misconduct Protocol)",
        "Actuary M discovers that Actuary N (a peer consultant) has issued an insurance pricing certificate based on deliberately fabricated claim settlement ratios. What is the correct initial course of action for Actuary M under PCS v4.0 Para 5.3?",
        [
            "Actuary M should first discuss the matter directly with Actuary N to seek clarification and explore rectification, unless doing so would be inappropriate, prejudice client confidentiality, or involve serious fraud; if unresolved or involving serious fraud, report promptly to the Director (Discipline).",
            "Actuary M must immediately publish an open warning letter on social media naming Actuary N.",
            "Actuary M must remain silent because actuaries have no duty regarding peer conduct.",
            "Actuary M must contact Actuary N's employer and demand that Actuary N be dismissed immediately."
        ],
        0,
        "Under PCS v4.0 Para 5.3, the peer misconduct protocol requires informal direct discussion first where appropriate to allow clarification or rectification; if serious fraud is involved or the peer refuses rectification, a formal complaint must be lodged with the Director (Discipline).",
        "Public shaming (Option B) violates publicity and confidentiality rules. Remaining silent on known fraud (Option C) breaches collective professional integrity."
    )

    # 18
    add(
        "PCS v4.0, Para 5.5 (Cross-Border Disciplinary Reporting)",
        "An Indian Fellow (FIAI) who also holds fellowship in an overseas actuarial body (IFoA) is formally reprimanded and fined by the IFoA for negligence in UK pension calculations. Under PCS v4.0 Para 5.5, what is the member's obligation to the IAI?",
        [
            "The member must report the overseas disciplinary finding in writing to the IAI Council within 30 days of the order.",
            "The member has no obligation to inform IAI because the misconduct occurred outside Indian territorial jurisdiction.",
            "The member only needs to report if the fine exceeds GBP 50,000.",
            "The member must surrender their Indian fellowship permanently within 24 hours."
        ],
        0,
        "Under PCS v4.0 Para 5.5 (Cross-Border Reciprocity), any member subjected to disciplinary sanctions, fines, or suspensions by an overseas professional body or financial regulator must notify the IAI Council in writing within 30 days.",
        "Jurisdictional boundaries do not shield members from ethical reporting obligations to their home institute."
    )

    # 19
    add(
        "PCS v4.0, Para 6.1 & 6.2 (Written Terms of Reference)",
        "Before commencing an actuarial valuation engagement for a new client, what must an actuary ensure under PCS v4.0 Section 6?",
        [
            "Written terms of reference are agreed upon with the client, defining the scope, deliverables, intended users, access to data, and basis of remuneration.",
            "The client pays 100% of the estimated professional fees into an escrow account.",
            "The engagement terms are registered with the local Registrar of Companies.",
            "A verbal understanding with the client's finance manager is reached via phone."
        ],
        0,
        "Under PCS v4.0 Para 6.1, members must ensure that the scope of the assignment, the intended users, constraints, and the basis of remuneration are clearly established in writing in the Terms of Reference before beginning work.",
        "Verbal agreements (Option D) lead to scope ambiguity and ethical disputes. 100% escrow deposits (Option B) and ROC registration (Option C) are not statutory professional requirements."
    )

    # 20
    add(
        "PCS v4.0, Para 6.7 (Contingency & Success Fees)",
        "An insurer offers an actuary a consulting contract to determine statutory solvency reserves where the fee is agreed as: 'A base fee of Rs. 5 Lakhs, plus a bonus of Rs. 10 Lakhs if the calculated solvency margin exceeds 180%'. How is this arrangement evaluated under PCS v4.0 Para 6.7?",
        [
            "It is strictly prohibited; contingency or success fee arrangements that compromise an actuary's objectivity or create financial incentives to bias statutory reserving or solvency certifications are unethical.",
            "It is fully acceptable as standard commercial performance-based remuneration.",
            "It is permissible provided the Board Audit Committee signs a waiver acknowledging the bonus structure.",
            "It is permissible as long as the bonus percentage does not exceed 50% of the total fee."
        ],
        0,
        "Under PCS v4.0 Para 6.7, fee arrangements contingent on the outcome or results of actuarial calculations are strictly forbidden where they threaten objectivity in statutory reserving, solvency reporting, or financial certifications.",
        "Contingency fees on regulatory reserves create an irreconcilable conflict of interest between commercial greed and policyholder security."
    )

    # 21
    add(
        "PCS v4.0, Para 6.8 & First Schedule (Referral Commissions & Fee-Splitting)",
        "An insurance marketing agent offers to refer all corporate gratuity valuation clients to an actuarial firm, on the condition that the actuary pays the agent a 20% referral commission on all client fees collected. How does the ethical framework govern this proposal?",
        [
            "It is strictly prohibited professional misconduct; sharing fees or paying referral commissions to non-members for procuring actuarial engagements violates the First Schedule of the Actuaries Act and PCS v4.0.",
            "It is permissible provided the 20% commission is deducted from gross revenues before tax.",
            "It is acceptable if the corporate clients sign an acknowledgement acknowledging the referral commission.",
            "It is legal as long as the marketing agent is licensed as an insurance broker by IRDAI."
        ],
        0,
        "Under the First Schedule, Part I, Clause 2 & 3 of the Actuaries Act 2006 and PCS v4.0, paying referral commissions, finder's fees, or splitting professional fees with non-members is strictly prohibited misconduct.",
        "Client disclosures or broker licenses cannot legalize prohibited fee-splitting under statutory actuarial legislation."
    )

    # 22
    add(
        "PCS v4.0, Para 8.1 - 8.4 (Advertising & Professional Publicity)",
        "An actuarial firm launches an advertising campaign in national newspapers claiming: 'We guarantee 30% lower reserve liabilities than any other actuarial consulting firm in India.' Under PCS v4.0 Section 8, how is this publicity classified?",
        [
            "It constitutes professional misconduct; publicity must be truthful, factual, and dignified, and must not disparage competitors, make unsubstantiated claims, or promise predetermined mathematical outcomes.",
            "It is permissible commercial marketing under the Consumer Protection Act.",
            "It is acceptable provided the firm has actually delivered lower reserves for at least three past clients.",
            "It is permissible as long as the advertisement clearly displays the firm's registration number."
        ],
        0,
        "Under PCS v4.0 Section 8 and the First Schedule of the Actuaries Act 2006, advertising must be informative, objective, and dignified. Promising lower reserves or disparaging peer firms is strictly prohibited touting and misconduct.",
        "Guaranteed lower reserves imply compromised technical standards and violate the fundamental principle of professional objectivity."
    )

    # 23
    add(
        "PCS v4.0, Para 8.4 (Social Media Conduct & Public Commentary)",
        "An actuary writes a viral post on LinkedIn alleging that the Appointed Actuary of a prominent insurer intentionally certified fraudulent liabilities in an active, ongoing regulatory investigation. How does PCS v4.0 govern such public statements?",
        [
            "Actuaries must refrain from making public or social media statements that disparage peers, prejudge ongoing sub judice or regulatory matters, or bring the actuarial profession into disrepute.",
            "Actuaries have an absolute constitutional right to free speech on social media that overrides Institute conduct rules.",
            "The post is acceptable provided the actuary includes a standard disclaimer stating 'Views are personal'.",
            "The post is permissible if it receives more than 5,000 likes from insurance industry professionals."
        ],
        0,
        "Under PCS v4.0 Para 8.4 and Council Social Media Guidelines, public commentary that attacks peers, discusses sub judice inquiries, or tarnishes professional standing constitutes professional misconduct.",
        "Disclaimers like 'views are personal' do not insulate members from ethical accountability for public disparagement."
    )

    # 24
    add(
        "PCS v4.0, Para 2.2 (Clear Communication & Jargon)",
        "When issuing an actuarial report intended for a non-actuarial Board of Directors, what is the actuary's duty regarding technical terminology under PCS v4.0 Para 2.2?",
        [
            "The actuary must present the results in clear, intelligible language, explaining the methodology, material assumptions, uncertainties, and practical implications so that intended users can make informed decisions.",
            "The actuary should maximize complex stochastic formulas to demonstrate mathematical superiority to the Board.",
            "The actuary is prohibited from explaining assumptions to non-actuaries to protect intellectual property.",
            "The actuary must omit all references to uncertainty to avoid causing panic among company directors."
        ],
        0,
        "Under PCS v4.0 Para 2.2, actuaries must communicate with clarity and transparency, translating technical concepts into actionable, understandable advice for intended users.",
        "Concealing uncertainty or using deliberate obscurantism breaches the fundamental duty of care."
    )

    # 25
    add(
        "PCS v4.0, Para 5.1 (Ignorance Defense Prohibition)",
        "In a formal disciplinary proceeding, a newly qualified Fellow pleads that they were unaware of the 10-day handover rule under Para 7.4 because they had not read PCS v4.0 since passing their exams. How is this defense treated under PCS v4.0 Para 5.1?",
        [
            "Ignorance of the PCS, the Actuaries Act, or Actuarial Practice Standards can never be pleaded as a defense or mitigating factor in disciplinary proceedings.",
            "Ignorance is accepted as a complete defense if the member has been qualified for less than three years.",
            "Ignorance converts Second Schedule misconduct into a minor First Schedule reprimand automatically.",
            "The Disciplinary Committee must dismiss the charges and mandate a 2-hour refresher seminar instead."
        ],
        0,
        "Under PCS v4.0 Para 5.1, every member is strictly presumed to know and understand the conduct standards. The plea of ignorance of professional rules is completely barred.",
        "Professional self-regulation requires members to maintain currency with their ethical obligations at all times."
    )

    # 26
    add(
        "PCS v4.0, Para 2.1 (Gifts, Hospitality & Inducements)",
        "An actuarial software vendor bidding for a multi-crore valuation software contract with an insurer invites the Appointed Actuary and their family on an all-expenses-paid luxury holiday to Switzerland. How does PCS v4.0 govern the acceptance of such hospitality?",
        [
            "The actuary must decline the holiday, because accepting lavish gifts or hospitality that could be perceived as compromising objectivity and professional independence breaches Para 2.1.",
            "The actuary may accept provided they disclose the holiday in their personal income tax return.",
            "The actuary may accept if the software vendor guarantees that their software has zero bugs.",
            "The actuary may accept provided they travel during approved annual leave."
        ],
        0,
        "Under PCS v4.0 Para 2.1, members must preserve objectivity and avoid accepting gifts, hospitality, or inducements that could reasonably be seen by an objective observer as compromising their professional judgment.",
        "Tax disclosures or personal leave do not sanitize a clear conflict of interest and threat to professional independence."
    )

    # 27
    add(
        "PCS v4.0, Para 2.1 (Delegation & Supervision)",
        "A senior consulting actuary delegates complex stochastic liability calculations to a junior trainee and signs the statutory report without reviewing the trainee's formulas or validating the outputs. An error of Rs. 50 Crores is later discovered. Who is liable under PCS v4.0?",
        [
            "The senior actuary retains ultimate personal responsibility for all work issued under their name, and is guilty of professional misconduct for failing to adequately supervise and review delegated work.",
            "Only the junior trainee is liable because they physically entered the incorrect spreadsheet formulas.",
            "Neither is liable because corporate delegation legally transfers all professional liability away from the actuary.",
            "Only the software vendor who created the spreadsheet application is liable."
        ],
        0,
        "Under PCS v4.0 Para 2.1, an actuary who delegates work must ensure adequate supervision and validation; delegation does NOT abrogate or transfer the actuary's ultimate personal professional responsibility.",
        "Actuaries cannot hide behind subordinates; signing a professional report certifies personal responsibility for its technical integrity."
    )

    # 28
    add(
        "PCS v4.0, Para 2.3 (Courtesy & Professional Respect)",
        "In a peer review report submitted to an insurer's Board, Actuary K describes the work of predecessor Actuary L as 'the amateurish scribbles of an incompetent fraudster'. How does PCS v4.0 evaluate Actuary K's conduct?",
        [
            "Actuary K has committed professional misconduct; members must show courtesy, fairness, and professional respect toward colleagues, expressing disagreements objectively and professionally without derogatory personal attacks.",
            "Actuary K is protected because peer reviewers have absolute legal immunity to use any language they wish.",
            "Actuary K is acting properly because harsh language ensures the Board pays attention to actuarial risks.",
            "Actuary K's language is permissible as long as the peer review report is marked 'Strictly Confidential'."
        ],
        0,
        "Under PCS v4.0 Para 2.3, members must treat colleagues, clients, and the public with dignity, courtesy, and professional respect. Professional critique must be evidence-based and objective, avoiding abusive personal disparagement.",
        "Confidentiality markers do not exempt an actuary from the ethical duty of professional courtesy."
    )

    # 29
    add(
        "PCS v4.0, Para 6.4 (Professional Indemnity Insurance)",
        "Under PCS v4.0 Para 6.4, what is the mandatory requirement for actuaries who offer actuarial consulting services to the public in an independent capacity?",
        [
            "They should maintain adequate and appropriate Professional Indemnity Insurance (PII) cover, or ensure they are covered by an employer's policy, to protect clients against financial loss arising from professional negligence.",
            "They must maintain a minimum personal cash balance of Rs. 10 Crores in a nationalized bank.",
            "PII is strictly forbidden under Indian insurance law as an illegal bet on professional failure.",
            "They only need insurance if their consulting fees exceed Rs. 1 Crore per client."
        ],
        0,
        "Under PCS v4.0 Para 6.4, practitioners must ensure appropriate Professional Indemnity Insurance (PII) is in place, commensurate with the scale and risks of the assignments undertaken, to safeguard public and client interests.",
        "PII is a fundamental risk management safeguard in public practice, ensuring financial recourse in cases of inadvertent error."
    )

    # 30
    add(
        "PCS v4.0, Para 7.2 (Successor Requesting Predecessor's Workpapers)",
        "Actuary S succeeds Actuary P as the Appointed Actuary of a life insurer. Actuary S writes to Actuary P demanding all of Actuary P's internal working models and confidential client memos. How must Actuary P handle this request under PCS v4.0?",
        [
            "Actuary P must cooperate professionally in the transition, but proprietary working papers belong to the firm/client; Actuary P should provide necessary handover explanations and cannot disclose client confidential records without client consent.",
            "Actuary P must immediately mail all original hard-drive backups to Actuary S without asking the client.",
            "Actuary P must refuse to speak with Actuary S and block all email correspondence.",
            "Actuary P should demand a fee of Rs. 50 Lakhs from Actuary S before answering any technical questions."
        ],
        0,
        "Under PCS v4.0 Para 7.2 and 7.4, the incumbent must cooperate and provide relevant professional information regarding the handover, while respecting client confidentiality and proprietary working paper rights.",
        "Handover cooperation requires professional assistance without unlawfully disclosing proprietary or unconsented client records."
    )

    return qs

if __name__ == "__main__":
    qs = get_pcs_questions()
    print(f"Generated {len(qs)} PCS questions successfully.")

