# -*- coding: utf-8 -*-
"""
build_disc.py - Module 4: Disciplinary Process & Misconduct
Authentic, high-difficulty Fellowship MCQs covering:
- Statutory framework: Chapter IV of Act & 2008 Disciplinary Rules
- Disciplinary Directorate & Director (Discipline) prima facie opinion (Sec 28)
- Symmetrical 21-day pleadings timetable & 60-day prima facie deadline
- Board of Discipline (BOD - Sec 29): 3 members, First Schedule, max 3-mo suspension, max Rs. 1L fine
- Disciplinary Committee (DC - Sec 30): 5 members, Second Schedule, permanent expulsion, max Rs. 5L fine
- Mixed First & Second Schedule jurisdiction (heard by Disciplinary Committee)
- Powers of Civil Court under CPC 1908 (Sec 31)
- Statutory appeals to Appellate Authority under Section 36 (90 days)
- First Schedule clauses: Touting, advertising, fee-sharing, predecessor communication, contingent fees
- Second Schedule clauses: Gross negligence, non-disclosure, unauthorized certification, conflict of interest
"""

CAT = "Disciplinary Process & Misconduct"

def get_disc_questions():
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
        "Actuaries Act 2006, Section 28 (Disciplinary Directorate & Director)",
        "Under Section 28 of the Actuaries Act 2006, what is the statutory role and mandate of the Director (Discipline) upon receiving a complaint or information regarding professional misconduct?",
        [
            "The Director heads the Disciplinary Directorate, examines the complaint, supervises the exchange of written pleadings, and arrives at a prima facie opinion as to whether the member is guilty of misconduct.",
            "The Director acts as a sole arbitrator with plenary authority to immediately cancel the member's Certificate of Practice and impose monetary penalties.",
            "The Director is an external judicial officer from the High Court whose sole role is to conduct formal trial cross-examinations in open court.",
            "The Director forwards the complaint unexamined directly to the Central Government for administrative adjudication under the Companies Act."
        ],
        0,
        "Section 28 creates the Disciplinary Directorate headed by the Director (Discipline) to investigate, manage the formal exchange of pleadings, and formulate an objective prima facie opinion before referral to a bench.",
        "The Director is an investigative gatekeeper and cannot unilaterally impose penalties or cancel certificates."
    )

    # 2
    add(
        "Disciplinary Rules 2008, Rule 3 & 4 (Complaint Filing Requirements)",
        "Under the Actuaries (Procedure for Enquiry of Professional and Other Misconduct) Rules 2008, what are the mandatory legal prerequisites for instituting a valid formal complaint against an actuary?",
        [
            "The complaint must be filed in Form I, verified by an affidavit by the complainant, and accompanied by the prescribed statutory fee (unless filed by a Government ministry or IRDAI).",
            "The complaint may be made through an informal verbal submission to the Honorary Secretary during an Annual General Meeting.",
            "The complaint must be submitted as a public grievance petition signed by at least ten Fellows of the Institute.",
            "The complaint must first be adjudicated by an independent commercial ombudsman before the Institute can take cognisance."
        ],
        0,
        "Rules 3 and 4 require complaints to be submitted in Form I, supported by an affidavit verifying the facts, and accompanied by the prescribed fee, with statutory exemptions for Central/State Governments and regulatory bodies.",
        "Informal complaints, verbal representations, or unverified submissions lack evidentiary standing in quasi-judicial disciplinary law."
    )

    # 3
    add(
        "Disciplinary Rules 2008, Rule 5 (Symmetrical Pleadings Timetable)",
        "Under Rule 5 of the 2008 Disciplinary Rules, what is the statutory timeframe within which a respondent actuary must submit their written statement of defense after receiving a copy of the complaint?",
        [
            "Within twenty-one (21) days of receipt of the notice, extendable by the Director (Discipline) by up to fifteen (15) additional days upon good cause shown.",
            "Within seven (7) calendar days of service, with no provision for extension under any circumstances.",
            "Within sixty (60) days, aligning with the Director's overall prima facie reporting deadline.",
            "Within ninety (90) days, matching the statutory limitation period for filing an appeal to the Appellate Authority."
        ],
        0,
        "Rule 5(1) mandates that the respondent must submit their written statement of defense within 21 days of notice, with the Director empowered to grant an extension of up to 15 days for valid cause.",
        "21 days provides a balanced, symmetrical window for initial defense pleadings under the rules."
    )

    # 4
    add(
        "Disciplinary Rules 2008, Rule 5 (Complainant Rejoinder Window)",
        "Upon receiving the respondent actuary's written statement of defense, what is the statutory deadline for the complainant to file a written rejoinder under Rule 5(4)?",
        [
            "Within twenty-one (21) days of receipt of the copy of the written statement of defense.",
            "Within forty-five (45) days of receipt, provided the complainant deposits an additional hearing fee.",
            "Within ten (10) working days, failing which the complaint is automatically deemed abandoned.",
            "Rejoinders are not permitted under the Disciplinary Rules; only the initial complaint and defense form the pleadings record."
        ],
        0,
        "Rule 5(4) grants the complainant exactly 21 days from receipt of the respondent's written statement to submit a written rejoinder, completing the symmetrical pleadings cycle.",
        "The 21-day rejoinder window ensures both parties have equal procedural opportunity to place evidence on record."
    )

    # 5
    add(
        "Disciplinary Rules 2008, Rule 9 (Prima Facie Opinion Deadline)",
        "Under the 2008 Disciplinary Rules, within what timeframe must the Director (Discipline) place their prima facie opinion before the Board of Discipline or Disciplinary Committee?",
        [
            "Within sixty (60) days of the receipt of the complaint, or completion of the pleadings (written statement and rejoinder).",
            "Within fifteen (15) days of the complaint being registered on the Institute's records.",
            "Within one hundred and eighty (180) days after holding preliminary witness hearings.",
            "Within thirty (30) days from the end of the financial year in which the complaint was initiated."
        ],
        0,
        "Rule 9 mandates that the Director (Discipline) submit the prima facie opinion within 60 days following the receipt of the complaint or completion of pleadings, ensuring expeditious disposal.",
        "60 days prevents prolonged uncertainty and reputational prejudice to the member."
    )

    # 6
    add(
        "Actuaries Act 2006, Section 29 (Board of Discipline Composition)",
        "Under Section 29(1) of the Actuaries Act 2006, what is the statutory composition of the Board of Discipline?",
        [
            "Three (3) members: a Council member as Presiding Officer, one elected member of the Council, and one person nominated by the Central Government.",
            "Five (5) members: the President of the Institute, two actuaries in full-time practice, and two senior advocates nominated by the Chief Justice.",
            "Three (3) members: the Executive Director, the Director (Discipline), and the Chairperson of the Quality Review Board.",
            "Four (4) members: two Fellows from Life Insurance and two Fellows from General Insurance."
        ],
        0,
        "Section 29(1) defines the Board of Discipline as a 3-member bench: a Council member (Presiding Officer), one elected Council member, and one Central Government nominee.",
        "Candidates frequently confuse the 3-member Board of Discipline with the 5-member Disciplinary Committee."
    )

    # 7
    add(
        "Actuaries Act 2006, Section 29 (Board of Discipline Jurisdiction)",
        "Which matters fall within the exclusive adjudicatory jurisdiction of the Board of Discipline under Section 29 of the Actuaries Act 2006?",
        [
            "Allegations of professional or other misconduct specified exclusively in the First Schedule to the Act.",
            "Allegations of professional or other misconduct specified in the Second Schedule to the Act.",
            "Complaints involving a combination of both First Schedule and Second Schedule allegations.",
            "Appeals against examination malpractice sanctions imposed by the Education Committee."
        ],
        0,
        "Under Section 29, the Board of Discipline has jurisdiction strictly over First Schedule misconduct (procedural/administrative professional infractions such as touting, improper advertising, or failure to communicate with previous actuary).",
        "Second Schedule and mixed-schedule allegations must be heard by the Disciplinary Committee."
    )

    # 8
    add(
        "Actuaries Act 2006, Section 29(2) (Board of Discipline Penalties)",
        "Where the Board of Discipline finds a member guilty of First Schedule misconduct under Section 29(2), what is the statutory ceiling of penalties it is empowered to impose?",
        [
            "Reprimand the member; suspend the member from practice for up to three (3) months; or impose a monetary fine up to one lakh rupees (Rs. 1,00,000).",
            "Reprimand the member; suspend the member for up to one (1) year; or impose a monetary fine up to five lakh rupees (Rs. 5,00,000).",
            "Order permanent removal of the member's name from the Register of Members and confiscate all client fees.",
            "Direct the member to complete 100 hours of unverified CPD and pay a penalty of Rs. 25,000 to the complainant."
        ],
        0,
        "Section 29(2) sets the ceiling: (a) reprimand, (b) suspension up to 3 months, or (c) fine up to Rs. 1,00,000. It cannot impose longer suspensions or permanent removal.",
        "Permanent removal and fines up to Rs. 5 Lakhs are reserved exclusively for the Disciplinary Committee under Section 30(2)."
    )

    # 9
    add(
        "Actuaries Act 2006, Section 30 (Disciplinary Committee Composition)",
        "Under Section 30(1) of the Actuaries Act 2006, how is the Disciplinary Committee constituted?",
        [
            "Five (5) members: the President or Vice-President as Presiding Officer, two elected Council members, and two persons nominated by the Central Government.",
            "Three (3) members: a retired High Court Judge as Presiding Officer and two Fellow actuaries in continuous practice for at least 15 years.",
            "Five (5) members: the entire Executive Committee of the Council of the Institute.",
            "Seven (7) members: three Council members, two IRDAI representatives, and two representatives of policyholder advocacy groups."
        ],
        0,
        "Section 30(1) mandates a 5-member tribunal: President or VP (Presiding Officer), 2 elected Council members, and 2 Central Government nominees possessing expertise in law, finance, or economics.",
        "The external Central Government nominees ensure independent regulatory scrutiny on serious misconduct matters."
    )

    # 10
    add(
        "Actuaries Act 2006, Section 30 (Disciplinary Committee Jurisdiction)",
        "In which of the following scenarios does the Disciplinary Committee have statutory jurisdiction to conduct an inquiry?",
        [
            "Where the allegations relate to Second Schedule misconduct, OR where the complaint involves a combination of both First Schedule and Second Schedule allegations.",
            "Where the allegations relate exclusively to minor advertising infractions under Part I of the First Schedule.",
            "Where an employer wishes to dismiss an actuarial student for failing examination papers within three consecutive attempts.",
            "Where an overseas actuarial body requests an advisory interpretation on local Indian mortality tables."
        ],
        0,
        "Section 30 covers all Second Schedule cases and mixed First/Second Schedule cases. A complaint spanning both schedules cannot be bifurcated; it must be heard in its entirety by the Disciplinary Committee.",
        "First-Schedule-only complaints are dealt with by the Board of Discipline."
    )

    # 11
    add(
        "Actuaries Act 2006, Section 30(2) (Disciplinary Committee Penalties)",
        "Where the Disciplinary Committee finds a member guilty of Second Schedule misconduct under Section 30(2), which statutory penalties can it order?",
        [
            "Reprimand the member; suspend the member for any period or permanently remove their name from the Register; and impose a fine extending up to five lakh rupees (Rs. 5,00,000).",
            "Impose a maximum suspension of six (6) months and a maximum fine of two lakh rupees (Rs. 2,00,000).",
            "Order mandatory criminal prosecution in a sessions court and civil damages up to fifty lakh rupees.",
            "Cancel the Certificate of Practice for a maximum of 30 days without authority to levy monetary fines."
        ],
        0,
        "Section 30(2) gives the Disciplinary Committee broad sanctioning power: reprimand, suspension for any duration, permanent removal from the Register, and/or a fine up to Rs. 5,00,000.",
        "The Disciplinary Committee possesses the statutory authority to permanently expel a member from the profession."
    )

    # 12
    add(
        "Actuaries Act 2006, Section 31 (Powers of Civil Court)",
        "Under Section 31 of the Actuaries Act 2006, what legal powers are vested in the Disciplinary Directorate, Board of Discipline, and Disciplinary Committee during an inquiry?",
        [
            "The same powers as are vested in a Civil Court under the Code of Civil Procedure, 1908 (CPC) regarding summoning witnesses, examining them on oath, and requiring discovery and production of documents.",
            "The powers of an investigative criminal agency under the Code of Criminal Procedure, 1973 to conduct warrantless arrests and confiscate personal passports.",
            "The powers of an appellate tax tribunal to attach immovable assets and freeze corporate bank accounts directly.",
            "They possess no statutory evidentiary powers; all attendance and production of working papers are strictly voluntary."
        ],
        0,
        "Section 31 vests disciplinary bodies with Civil Court powers under CPC 1908: summoning witnesses, administering oaths, discovery and inspection of books/records, and issuing commissions.",
        "Disciplinary inquiries are formal quasi-judicial proceedings with legally binding document production powers."
    )

    # 13
    add(
        "Actuaries Act 2006, Section 36 (Appeals to Appellate Authority Limitation)",
        "A Fellow actuary is aggrieved by an order of the Disciplinary Committee imposing a 2-year suspension and a fine of Rs. 3,00,000. Under Section 36 of the Act, to which authority does an appeal lie, and within what limitation period?",
        [
            "To the Appellate Authority constituted under Section 32, within ninety (90) days from the date on which the order is communicated to the member.",
            "To the Council of the Institute, within thirty (30) days from the date of the order.",
            "To the High Court having territorial jurisdiction, within forty-five (45) days of the order.",
            "To the Quality Review Board, within sixty (60) days from the receipt of the penalty demand notice."
        ],
        0,
        "Section 36 provides an express statutory right of appeal to the Appellate Authority within 90 days from the date of communication of the disciplinary order.",
        "The limitation period is 90 days (not 30 or 45 days), and the appeal lies to the Appellate Authority, not the Council."
    )

    # 14
    add(
        "Actuaries Act 2006, Section 36 (Appellate Authority Jurisdiction & Powers)",
        "Under Section 36 of the Actuaries Act 2006, what actions is the Appellate Authority legally empowered to take upon hearing an appeal against a disciplinary sanction?",
        [
            "It may confirm, modify, or set aside the order; impose, enhance, or reduce any penalty; or remit the matter back to the Disciplinary Committee or Board of Discipline for fresh inquiry.",
            "It is restricted solely to affirming the Disciplinary Committee's findings and cannot reduce or set aside the penalty.",
            "It can only dismiss the appeal if the appellant has not deposited 100% of the disputed fine in an escrow bank account.",
            "It must automatically refer all technical actuarial issues to the International Actuarial Association for binding advice."
        ],
        0,
        "Section 36 grants comprehensive appellate jurisdiction: the Appellate Authority may confirm, modify, reverse, reduce, enhance penalties, or remand the case for reconsideration.",
        "The Appellate Authority functions as an independent judicial review body with plenary appellate powers."
    )

    # 15
    add(
        "Disciplinary Rules 2008, Rule 8 (Council / Board Disagreement with Director)",
        "Under Rule 8 of the 2008 Disciplinary Rules, what occurs if the Director (Discipline) forms a prima facie opinion that the member is NOT guilty, but the Board of Discipline or Disciplinary Committee disagrees with that opinion?",
        [
            "The Board of Discipline or Disciplinary Committee may advise the Director to investigate further, or may proceed directly to conduct an inquiry into the matter themselves.",
            "The complaint is automatically dismissed because the Director's prima facie finding is binding and unchallengeable.",
            "The matter must be referred to the Central Government for an administrative ruling on whether an inquiry is warranted.",
            "The complainant must file a fresh civil suit in a district court to compel the Institute to proceed."
        ],
        0,
        "Rule 8 provides that the adjudicatory bench is not bound by the Director's negative opinion; it may direct further investigation or proceed with a full inquiry itself.",
        "The Director's prima facie opinion is an advisory screening mechanism, not a final veto over disciplinary proceedings."
    )

    # 16
    add(
        "Actuaries Act 2006, First Schedule, Part I, Clause 1 (Unauthorised Practice)",
        "An actuary in practice allows an unqualified commercial broker to issue mortality valuation certificates using the actuary's official letterhead and digital signature. Under First Schedule, Part I, Clause 1, what constitutes this misconduct?",
        [
            "Allowing any person to practice in the actuary's name as an actuary unless such person is also an actuary and in partnership with or employed by them.",
            "Failure to disclose material underwriting assumptions to reinsurance counterparties.",
            "Engaging in commercial business operations without the prior written approval of the Council.",
            "Accepting professional fees directly from a commercial client without routing them through an escrow account."
        ],
        0,
        "Clause 1 prohibits a practitioner from allowing any person to practice in their name unless that person is a qualified actuary and is a partner or employee of the firm.",
        "Lending one's professional name or credentials to unqualified persons undermines public trust and constitutes professional misconduct."
    )

    # 17
    add(
        "Actuaries Act 2006, First Schedule, Part I, Clause 2 (Fee Sharing & Profit Splitting)",
        "A consulting actuary enters into an agreement with a corporate law firm to pay them a 20% commission on all professional fees earned from pension clients referred by the law firm. Under First Schedule, Part I, Clause 2, is this arrangement permissible?",
        [
            "No; an actuary in practice is guilty of misconduct if they pay or agree to pay, directly or indirectly, any share, commission, or brokerage in the fees of professional business to any person other than a member or recognised partner.",
            "Yes, provided the commission payment is clearly recorded in the audited financial statements of the actuarial partnership.",
            "Yes, because lawyers and actuaries are both recognised statutory professionals under Indian corporate legislation.",
            "No, unless the referral commission is capped at 10% of the net actuarial surplus generated by the scheme."
        ],
        0,
        "Clause 2 strictly prohibits paying or sharing professional fees, commissions, or brokerage with non-members, barring partnerships with recognised professional bodies under Council regulations.",
        "Sharing professional fees with non-actuarial referral sources compromises professional independence."
    )

    # 18
    add(
        "Actuaries Act 2006, First Schedule, Part I, Clause 4 (Partnership Restrictions)",
        "Under Part I, Clause 4 of the First Schedule to the Actuaries Act 2006, with whom is an actuary in practice legally permitted to enter into an actuarial professional partnership?",
        [
            "Only with another actuary in practice or with such other persons possessing prescribed qualifications as may be permitted by Council regulations.",
            "With any registered company or limited liability partnership regardless of its objects or owners.",
            "With any foreign financial consultant provided they hold an overseas university degree in business analytics.",
            "With insurance intermediaries and corporate brokerage directors to create integrated financial advisory services."
        ],
        0,
        "Clause 4 prohibits entering into partnership with any person other than an actuary in practice or a person belonging to permitted recognised professional disciplines under Council regulations.",
        "Partnerships with commercial corporate brokers or unqualified consultants violate statutory practice standards."
    )

    # 19
    add(
        "Actuaries Act 2006, First Schedule, Part I, Clause 5 (Canvassing & Intermediaries)",
        "A consulting actuary hires a marketing agency and agrees to pay them a fixed monthly fee plus incentive bonuses for securing actuarial valuation mandates from listed companies. Under First Schedule, Part I, Clause 5, how is this conduct viewed?",
        [
            "It is professional misconduct because an actuary in practice must not secure professional business through the services of a person who is not an employee or partner.",
            "It is acceptable modern marketing practice provided the marketing agency does not provide technical actuarial advice.",
            "It is permissible as long as the marketing agency signs a non-disclosure agreement regarding client financial data.",
            "It is permitted only if the commercial mandate is valued at less than Rs. 10 Lakhs per annum."
        ],
        0,
        "Clause 5 prohibits securing any professional business through the services of an intermediary or agent who is not a partner or employee, preventing commercial canvassing.",
        "Employing third-party canvassers or marketing intermediaries compromises professional dignity and ethics."
    )

    # 20
    add(
        "Actuaries Act 2006, First Schedule, Part I, Clause 6 (Soliciting & Advertising)",
        "An actuary circulates an unsolicited mass marketing email to the CFOs of 200 corporate firms highlighting superior reserving methodologies and offering a 30% discount on statutory pension valuation fees. Under First Schedule, Part I, Clause 6, this constitutes:",
        [
            "Professional misconduct for soliciting professional work through mass circulars, advertisements, or personal communications not in response to a genuine tender.",
            "Legitimate commercial business promotion protected under freedom of trade provisions of the Constitution of India.",
            "Permissible competitive advertising provided the discount does not lead to negative operating margins.",
            "A minor administrative infraction that can only be penalised by a written caution from the Membership Committee."
        ],
        0,
        "Clause 6 treats soliciting clients or professional work by circulars, advertisements, or personal communications as misconduct, except where applying to formal competitive tenders or complying with Council publicity rules.",
        "Mass unsolicited emails with fee discounting constitute clear soliciting and touting."
    )

    # 21
    add(
        "Actuaries Act 2006, First Schedule, Part I, Clause 7 (Advertising Professional Attainments)",
        "A consulting actuary publishes an advertisement in a national business daily claiming their firm is 'India's most accurate and undisputed leader in ALM modeling, outperforming all competitors.' Under First Schedule, Part I, Clause 7, why is this prohibited?",
        [
            "An actuary in practice must not advertise their professional attainments or services, nor make claims of superiority over other members in public media.",
            "Advertisements in national newspapers are permitted only if co-signed by an independent statutory auditor.",
            "The advertisement is valid provided the claims can be statistically validated through historical stochastic simulations.",
            "Such advertisements are permitted as long as the name of the Institute of Actuaries of India is not printed in bold font."
        ],
        0,
        "Clause 7 prohibits advertising professional attainments, services, or making comparative superiority claims, which degrades professional dignity and misleads the public.",
        "Comparative superiority claims and self-laudatory publicity in commercial media violate statutory conduct rules."
    )

    # 22
    add(
        "Actuaries Act 2006, First Schedule, Part I, Clause 8 (Predecessor Actuary Communication)",
        "An actuary is offered an appointment to conduct the annual statutory valuation of an insurer, replacing the existing Appointed Actuary. Under First Schedule, Part I, Clause 8, what is the mandatory ethical duty prior to accepting the assignment?",
        [
            "The incoming actuary must communicate in writing with the previous actuary to ascertain whether there are any professional or ethical reasons why the appointment should not be accepted.",
            "The incoming actuary must obtain written clearance from the Quality Review Board before reviewing the previous valuation files.",
            "The incoming actuary must request the client to pay all outstanding professional fees owed to the predecessor.",
            "No communication with the predecessor is required unless the predecessor initiated formal litigation against the client."
        ],
        0,
        "Clause 8 states that an actuary in practice is guilty of misconduct if they accept an appointment without first communicating with the previous actuary in writing.",
        "Prior written communication with the incumbent/predecessor is a foundational ethical requirement to detect scope limitations or professional friction."
    )

    # 23
    add(
        "Actuaries Act 2006, First Schedule, Part I, Clause 9 (Contingent & Success Fees)",
        "A consulting actuary agrees to value an insurer's M&A transaction under a fee structure where the firm receives a base fee of Rs. 10 Lakhs, plus an additional success fee of 1% of the final agreed transaction value. Under First Schedule, Part I, Clause 9, is this permitted?",
        [
            "No; an actuary in practice is guilty of misconduct if they charge or accept fees that are contingent upon the findings, conclusions, or results of their professional work, unless permitted by Council regulations.",
            "Yes, because success-based incentive fees are standard commercial practice in corporate investment banking.",
            "Yes, provided the success fee does not exceed 50% of the total professional fee payable on the engagement.",
            "No, unless the transaction valuation is reviewed and endorsed by an independent peer reviewer."
        ],
        0,
        "Clause 9 prohibits contingent fees where remuneration is tied to specific findings, results, or transactional outcomes, as this creates a direct financial incentive to bias actuarial valuations.",
        "Contingent fee arrangements fundamentally compromise actuarial objectivity and independence."
    )

    # 24
    add(
        "Actuaries Act 2006, First Schedule, Part IV (Other Misconduct - 6 Month Threshold)",
        "Under Part IV of the First Schedule to the Actuaries Act 2006, what constitutes 'Other Misconduct' punishable by the Board of Discipline?",
        [
            "Conduct which brings disrepute to the profession or the Institute, OR conviction by a competent court for an offence punishable with imprisonment for a term not exceeding six (6) months.",
            "Conviction for an economic offence carrying mandatory imprisonment exceeding seven (7) years.",
            "Failure to attend three consecutive Annual General Meetings of the Institute without an approved leave of absence.",
            "Disagreeing with a public policy paper published by the Insurance Regulatory and Development Authority of India."
        ],
        0,
        "Part IV of the First Schedule defines 'Other Misconduct' as conduct bringing disrepute to the Institute or offences punishable with imprisonment up to 6 months.",
        "Offences punishable with imprisonment exceeding 6 months fall under the Second Schedule (Part III)."
    )

    # 25
    add(
        "Actuaries Act 2006, Second Schedule, Part I, Clause 1 (Client Confidentiality)",
        "A consulting actuary conducting an appraisal of an employee benefits scheme shares detailed demographic data and employee salary records with an external corporate recruiter without the client's consent. Under Second Schedule, Part I, Clause 1, this constitutes:",
        [
            "Grave professional misconduct for disclosing confidential information acquired in the course of professional engagement to any third party without client consent, unless required by law.",
            "An acceptable commercial cross-referral practice provided the actuary does not receive a placement fee.",
            "A minor procedural oversight that can be resolved by issuing a retrospective consent form to the employer.",
            "A civil breach of contract governed strictly by the Indian Contract Act, falling outside the disciplinary remit of the IAI."
        ],
        0,
        "Clause 1 of Part I of the Second Schedule makes unauthorized disclosure of confidential client information grave misconduct, punishable with suspension or permanent expulsion.",
        "Confidentiality is an absolute duty; disclosure without client consent is permissible only under explicit legal compulsion."
    )

    # 26
    add(
        "Actuaries Act 2006, Second Schedule, Part I, Clause 2 (Examination & Verification of Reports)",
        "A senior actuarial partner signs and submits a statutory solvency valuation report to the regulator without reviewing the underlying cash flow projections or verifying that the calculations were performed by firm staff. Under Second Schedule, Part I, Clause 2, this is:",
        [
            "Professional misconduct for certifying or submitting in their name an actuarial report without personal examination or examination by a partner/employee who is an actuary.",
            "Acceptable delegation of routine computational tasks to junior actuarial analysts.",
            "Permitted provided the junior analyst who prepared the spreadsheet has passed at least five actuarial examinations.",
            "A matter of internal administrative practice that does not warrant disciplinary scrutiny."
        ],
        0,
        "Clause 2 prohibits signing or certifying actuarial reports without personal examination or supervision by a qualified actuary within the firm.",
        "Signing off blindly on unverified actuarial work is grave misconduct subject to Second Schedule sanctions."
    )

    # 27
    add(
        "Actuaries Act 2006, Second Schedule, Part I, Clause 4 (Substantial Interest / Conflict of Interest)",
        "An actuary in practice holds a 35% equity stake in a financial services company and agrees to serve as its independent statutory actuary to value policy liabilities. Under Second Schedule, Part I, Clause 4, how is this evaluated?",
        [
            "The actuary is guilty of misconduct for expressing an opinion on financial statements or actuarial liabilities of an enterprise in which they or their firm have a substantial interest.",
            "The appointment is lawful provided the equity ownership is disclosed in an explanatory footnote to the valuation report.",
            "The actuary may accept the assignment if the statutory valuation is certified by an external audit committee.",
            "The conflict of interest is cured if the actuary places their voting shares into a revocable family trust."
        ],
        0,
        "Clause 4 strictly prohibits expressing an opinion on actuarial liabilities of any enterprise where the actuary or their firm has a substantial interest, as independence is irrevocably compromised.",
        "Holding substantial equity interest while certifying actuarial solvency is an irreconcilable conflict of interest."
    )

    # 28
    add(
        "Actuaries Act 2006, Second Schedule, Part I, Clause 7 (Gross Negligence & Due Diligence)",
        "An Appointed Actuary calculates life insurance policy reserves using an erroneous discount rate formula that underestimates statutory liabilities by Rs. 250 Crores, failing to perform standard reconciliation checks. Under Second Schedule, Part I, Clause 7, this constitutes:",
        [
            "Professional misconduct for gross negligence in the conduct of professional duties and failure to exercise due diligence.",
            "An inadvertent arithmetic mistake that is completely protected from disciplinary action under professional indemnity insurance.",
            "A routine modeling variance that must be amortized over the subsequent fifteen financial reporting years.",
            "A computational error falling exclusively under the administrative oversight of the internal IT software vendor."
        ],
        0,
        "Clause 7 penalises gross negligence or failure to exercise due diligence in discharging professional duties as serious Second Schedule misconduct.",
        "Underestimating statutory reserves by hundreds of crores through lack of due diligence constitutes gross professional negligence."
    )

    # 29
    add(
        "Actuaries Act 2006, Second Schedule, Part I, Clause 8 (Failure to Obtain Sufficient Information)",
        "An actuary issues an unqualified solvency valuation certificate for a general insurer without obtaining verified claims data or assessing IBNR development triangles. Under Second Schedule, Part I, Clause 8, this conduct is:",
        [
            "Grave misconduct for failing to obtain sufficient information to warrant the expression of an actuarial opinion or for making gross departures from standard actuarial practice.",
            "Lawful exercise of professional judgement under the Principle of Proportionality when claims data is difficult to retrieve.",
            "Permitted provided the actuary includes a standard broad disclaimer stating that all client data was assumed accurate.",
            "Acceptable as long as the insurance company's board of directors passes a unanimous resolution accepting the report."
        ],
        0,
        "Clause 8 classifies expressing an opinion without obtaining sufficient information or departing from established guidance notes/standards as Second Schedule misconduct.",
        "Actuaries cannot issue valuation certificates based on conjecture or unverified claims data without adequate factual foundations."
    )

    # 30
    add(
        "Actuaries Act 2006, Second Schedule, Part III (Other Misconduct - >6 Month Sentence)",
        "Under Part III of the Second Schedule to the Actuaries Act 2006, what criminal threshold triggers mandatory Disciplinary Committee jurisdiction under 'Other Misconduct'?",
        [
            "Conviction by a competent court for an offence punishable with imprisonment for a term exceeding six (6) months.",
            "Conviction for any traffic violation or municipal fine exceeding Rs. 5,000.",
            "Being named as a respondent in any civil property partition suit in a state civil court.",
            "Receiving a show-cause notice from the Income Tax Department regarding delayed personal tax return filing."
        ],
        0,
        "Part III of the Second Schedule deals with criminal convictions carrying imprisonment exceeding 6 months, vesting jurisdiction directly in the Disciplinary Committee.",
        "Offences with sentences up to 6 months fall under the First Schedule; sentences exceeding 6 months elevate the misconduct to the Second Schedule."
    )

    return qs

if __name__ == "__main__":
    qs = get_disc_questions()
    print(f"Generated {len(qs)} Disciplinary questions successfully.")
