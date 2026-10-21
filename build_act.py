# -*- coding: utf-8 -*-
"""
build_act.py - Module 2: Actuaries Act 2006 & Statutory Framework
Authentic, high-difficulty Fellowship MCQs covering:
- Legislative enactment, dates & scope (Act 35 of 2006, 10 Nov 2006)
- Statutory definitions under Section 2 (Actuary, AA, Authority, Practice)
- Incorporation of IAI & dissolution of ASI (Sec 3-5)
- Membership classes & mandatory COP under Section 9
- Removal from Register under Section 11 (grounds & procedure)
- Council composition, election, tenure & powers (Sec 12, 14, 17, 19, 56)
- Quality Review Board (QRB) constitution & functions (Sec 43, 44)
- Offences & criminal penalties (Sec 38, 39, 41)
"""

CAT = "Actuaries Act 2006 & Statutory Framework"

def get_act_questions():
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
        "Actuaries Act 2006, Section 1(2) & Enactment",
        "Which of the following statements regarding the legislative enactment and territorial commencement of the Actuaries Act, 2006 is legally accurate?",
        [
            "It is Act No. 35 of 2006 passed by Parliament, received Presidential assent on 27 August 2006, was officially notified to commence on 10 November 2006, and extends to the whole of India.",
            "It is a state enactment passed by the Maharashtra Legislative Assembly that took effect on 1 January 2000 and applies only to financial institutions in Mumbai.",
            "It was enacted in 1944 under British colonial rule and applies exclusively to life insurance actuaries.",
            "It is a delegated circular issued directly by IRDAI without parliamentary legislation."
        ],
        0,
        "The Actuaries Act, 2006 is Act No. 35 of 2006 enacted by the Parliament of India. It received Presidential assent on 27 August 2006, commenced on 10 November 2006, and extends to the whole of India.",
        "The Act is primary Central parliamentary legislation, not a state law, historical colonial code, or regulatory circular."
    )

    # 2
    add(
        "Actuaries Act 2006, Section 2(1)(a) (Definition of Actuary)",
        "Under Section 2(1)(a) of the Actuaries Act 2006, what is the precise statutory definition of an 'Actuary'?",
        [
            "A person skilled in determining the present effects of future contingent events or in finance modelling and risk analysis in different areas of financial, or other business, or socio-economic problems and for insurance and pension, and who is a Fellow member of the Institute.",
            "Any individual who has cleared at least ten professional examination papers of the Institute of Actuaries of India.",
            "Any graduate with a master's degree in statistics or applied mathematics working in an insurance company.",
            "A corporate executive appointed by the Board of Directors to manage underwriting margins."
        ],
        0,
        "Under Section 2(1)(a), an 'actuary' is statutorily defined as a person skilled in contingent financial modeling and risk analysis across finance, insurance, and pensions, AND who is a Fellow member (FIAI) of the Institute.",
        "Passing exam papers (Option B) or academic degrees (Option C) does not confer the statutory status of an Actuary without Fellowship admission."
    )

    # 3
    add(
        "Actuaries Act 2006, Section 2(1)(b) (Definition of Appointed Actuary)",
        "How does Section 2(1)(b) of the Actuaries Act 2006 define an 'Appointed Actuary'?",
        [
            "An actuary appointed by an insurer in accordance with the regulations made by the Insurance Regulatory and Development Authority (IRDAI).",
            "An actuary elected by the Council of the Institute to supervise student examinations.",
            "A senior partner appointed by an audit firm to perform statutory financial accounting audits.",
            "An actuary nominated by the Central Government to serve on the Appellate Authority."
        ],
        0,
        "Section 2(1)(b) defines 'Appointed Actuary' specifically as an actuary appointed by an insurer in accordance with regulations made by the Authority (IRDAI).",
        "The Appointed Actuary is an insurer-specific statutory appointment governed by IRDAI Appointed Actuary Regulations."
    )

    # 4
    add(
        "Actuaries Act 2006, Section 2(2) (Being in Practice)",
        "Under Section 2(2) of the Actuaries Act 2006, when is a member deemed to be 'in practice'?",
        [
            "When, individually or in partnership with other actuaries, for remuneration, the member engages in actuarial science, offers to perform actuarial services, or renders professional service in actuarial matters.",
            "Only when the member is a full-time corporate employee of an insurance company receiving a monthly salary.",
            "Only when the member has registered as an advocate before the High Court.",
            "Whenever a member reads actuarial textbooks or attends academic seminars."
        ],
        0,
        "Under Section 2(2), a member is deemed to be in practice if, in consideration of remuneration, they engage in actuarial science, offer actuarial services to the public, or render professional actuarial advice individually or in partnership.",
        "Full-time salaried employment (Option B) is distinct from public practice under Section 2(2)."
    )

    # 5
    add(
        "Actuaries Act 2006, Section 3 & 4 (Incorporation & Dissolution of ASI)",
        "What was the legal effect of Sections 3 and 4 of the Actuaries Act 2006 on the appointed day (10 November 2006)?",
        [
            "The erstwhile Actuarial Society of India (ASI) was dissolved, and its assets, rights, liabilities, and contracts were statutorily transferred to and vested in the incorporated Institute of Actuaries of India (IAI).",
            "The Actuarial Society of India continued to operate as an independent competing regulatory body.",
            "The IAI was established as an unlisted private commercial company under the Companies Act 1956.",
            "The Ministry of Finance took direct operational ownership of all member insurance liabilities."
        ],
        0,
        "Under Sections 3 and 4, the statutory body corporate (IAI) was created with perpetual succession and common seal, while the pre-existing Actuarial Society of India (ASI) was dissolved, vesting all properties and liabilities into IAI.",
        "IAI is a statutory body created by an Act of Parliament, not a private company, and ASI ceased to exist upon statutory commencement."
    )

    # 6
    add(
        "Actuaries Act 2006, Section 9(1) (Mandatory Certificate of Practice)",
        "Under Section 9(1) of the Actuaries Act 2006, what is the mandatory statutory prerequisite for any member of the Institute to practice actuarial science in India?",
        [
            "The member must hold a valid, current Certificate of Practice (COP) granted by the Council.",
            "The member must obtain a municipal commercial trade permit from the local civic corporation.",
            "The member only needs to have passed the Fellowship examination and be current on annual subscription dues.",
            "The member must register as an investment advisor with SEBI."
        ],
        0,
        "Section 9(1) states: 'No member of the Institute shall be entitled to practice unless he has obtained from the Council a certificate of practice.'",
        "Practicing without a valid COP issued by Council is an illegal act that attracts criminal prosecution under Section 38."
    )

    # 7
    add(
        "Actuaries Act 2006, Section 11 (Removal from Register of Members)",
        "Under Section 11 of the Actuaries Act 2006, which of the following is NOT a mandatory ground for the Council to remove a member's name from the Register of Members?",
        [
            "The member expresses a dissenting professional opinion regarding a draft Guidance Note during an AGM debate.",
            "The member is declared to be of unsound mind by a court of competent jurisdiction.",
            "The member is an undischarged insolvent.",
            "The member has been convicted by a competent court of an offence involving moral turpitude."
        ],
        0,
        "Section 11 mandates removal for death, voluntary resignation, non-payment of dues, unsound mind, undischarged insolvency, conviction for moral turpitude/imprisonment, or disciplinary expulsion. Expressing dissenting professional opinions is legitimate debate and cannot be a ground for removal.",
        "Options B, C, and D are express statutory grounds for removal under Section 11(1)."
    )

    # 8
    add(
        "Actuaries Act 2006, Section 12 (Council Composition)",
        "Under Section 12 of the Actuaries Act 2006, what is the maximum statutory size of the Council and its mandated composition?",
        [
            "Not more than 16 members: at least 9 elected by Fellows and Associates, up to 4 nominated by the Central Government, and up to 3 nominated/ex-officio members.",
            "Exactly 25 members, all appointed directly by the Minister of Finance.",
            "10 members, consisting exclusively of Appointed Actuaries from state-owned insurers.",
            "5 members, elected annually by student examinees."
        ],
        0,
        "Under Section 12, the Council is capped at a maximum of 16 members, with a democratic majority of at least 9 members elected by members, supplemented by up to 4 Central Government nominees and up to 3 Council nominees.",
        "Options B, C, and D misrepresent the statutory democratic and regulatory balance of the Council."
    )

    # 9
    add(
        "Actuaries Act 2006, Section 14 (Council Term of Office)",
        "What is the statutory duration of the term of office for elected and nominated members of the Council under Section 14 of the Actuaries Act 2006?",
        [
            "Three years (3 years) from the date of constitution of the Council.",
            "Five years, matching the term of the Lok Sabha.",
            "One year, requiring annual nation-wide re-elections.",
            "A permanent lifetime appointment unless removed by impeachment."
        ],
        0,
        "Under Section 14, Council members hold office for a term of 3 years from the date on which the Council is constituted.",
        "Office bearers (President, VP, Hon Secretary) serve 1-year terms under Sec 17, but the Council body as a whole serves a 3-year term under Sec 14."
    )

    # 10
    add(
        "Actuaries Act 2006, Section 17 (Election of Office Bearers)",
        "Under Section 17 of the Actuaries Act 2006, how are the President, Vice-President, and Honorary Secretary of the Institute chosen?",
        [
            "They are elected by the Council from among its elected members for a term of one year.",
            "They are appointed directly by the Prime Minister's Office for a 5-year tenure.",
            "They are selected by a random lottery of all practicing Fellows.",
            "They are nominated exclusively by the Central Government nominees on the Council."
        ],
        0,
        "Section 17 provides that the Council shall, at its first meeting, elect from among its elected members a President, a Vice-President, and an Honorary Secretary for a term of one year.",
        "Central Government nominees cannot be elected as President or Vice-President; these office bearers must come from the democratically elected member pool."
    )

    # 11
    add(
        "Actuaries Act 2006, Section 43 (Constitution of Quality Review Board)",
        "Under Section 43 of the Actuaries Act 2006, who has the statutory authority to establish the Quality Review Board (QRB), and what is its composition?",
        [
            "The Central Government constitutes the QRB, consisting of a Chairperson and 4 other members (2 nominated by Central Government, 2 nominated by Council).",
            "The President of the IAI establishes the QRB, consisting of 10 Fellows chosen at their sole discretion.",
            "The Supreme Court of India appoints the QRB as a judicial bench of retired judges.",
            "The IRDAI Chairperson constitutes the QRB from among insurance brokers."
        ],
        0,
        "Section 43(1) & (2) mandates that the Central Government shall constitute a Quality Review Board consisting of a Chairperson (an eminent person) and 4 other members (2 appointed by Central Govt, 2 appointed by Council).",
        "A common exam trap is assuming the IAI President or Council appoints the QRB. The QRB is an independent statutory body created directly by the Central Government."
    )

    # 12
    add(
        "Actuaries Act 2006, Section 44 (Functions of the Quality Review Board)",
        "Which of the following is a primary statutory function of the Quality Review Board under Section 44 of the Actuaries Act 2006?",
        [
            "To review the quality of services provided by members of the Institute (including actuarial audit services), fix standards, and guide members on improving quality.",
            "To set examination papers and establish passing percentages for student members.",
            "To levy criminal imprisonment penalties on actuaries convicted of fraud.",
            "To negotiate commercial fee schedules between actuarial consulting firms and corporate clients."
        ],
        0,
        "Section 44 assigns three core functions to the QRB: (a) fix standards for services provided by members, (b) review service quality, including actuarial audit services, and (c) guide members on improving quality and statutory compliance.",
        "Examinations are handled by the Examination Committee, criminal punishment is judicial, and fee negotiation is a commercial matter outside QRB scope."
    )

    # 13
    add(
        "Actuaries Act 2006, Section 38 (Penalty for Practicing Without COP)",
        "An individual whose application for a Certificate of Practice was rejected continues to sign actuarial valuation reports claiming to be a practicing actuary. Upon first conviction under Section 38, what statutory penalty may the court impose?",
        [
            "A fine which may extend to one thousand rupees (Rs. 1,000).",
            "Mandatory capital punishment.",
            "A monetary fine of Rs. 50,00,000 and seizure of all personal assets.",
            "A reprimand by the local police station with zero judicial record."
        ],
        0,
        "Section 38 provides that any person falsely claiming to be an actuary or practicing without a COP shall be punishable on first conviction with a fine up to Rs. 1,000.",
        "First conviction carries a statutory fine cap of Rs. 1,000; the harsher penalty of imprisonment up to 6 months and/or fine up to Rs. 5,000 applies only on subsequent conviction."
    )

    # 14
    add(
        "Actuaries Act 2006, Section 38 (Subsequent Conviction Penalty)",
        "Under Section 38 of the Actuaries Act 2006, what is the maximum criminal penalty for a person convicted of practicing without a COP on a second or subsequent conviction?",
        [
            "Imprisonment for a term which may extend to six months, or with a fine which may extend to five thousand rupees, or with both.",
            "Life imprisonment without possibility of parole.",
            "Community service for 48 hours without any monetary fine.",
            "A permanent ban on visiting the city of Mumbai."
        ],
        0,
        "Section 38 explicitly provides that on any subsequent conviction, the offender shall be punishable with imprisonment up to 6 months, or fine up to Rs. 5,000, or both.",
        "Subsequent conviction introduces potential custodial jail time (up to 6 months), escalating beyond the simple fine of the first conviction."
    )

    # 15
    add(
        "Actuaries Act 2006, Section 39 (Penalty for Misuse of Institute Name)",
        "Under Section 39 of the Actuaries Act 2006, what penalty may be imposed on an unaccredited private commercial coaching institute that awards a 'Diploma in Actuarial Science' falsely implying affiliation with or authorization from the IAI?",
        [
            "A fine which may extend to ten thousand rupees (Rs. 10,000).",
            "The coaching institute is automatically acquired by the Central Government.",
            "Zero penalty, because commercial educational institutes are exempt from professional statutes.",
            "A mandatory fine of Rs. 1,00,000 per enrolled student."
        ],
        0,
        "Section 39 prohibits unauthorized use of the Institute's name, common seal, or awarding degrees/diplomas implying IAI accreditation, punishable with a fine up to Rs. 10,000.",
        "Commercial educational ventures cannot usurp the statutory monopoly of IAI in granting actuarial titles and diplomas."
    )

    # 16
    add(
        "Actuaries Act 2006, Section 41 (Cognizance of Offences)",
        "Under Section 41 of the Actuaries Act 2006, which court may try offences under the Act, and on whose complaint may cognizance be taken?",
        [
            "No court inferior to that of a Metropolitan Magistrate or a Judicial Magistrate of the first class, and only on a complaint made by or under the order of the Council or the Central Government.",
            "Any village Panchayat court, on a verbal complaint by any citizen.",
            "Exclusively the Supreme Court of India on a Public Interest Litigation (PIL).",
            "A commercial consumer dispute forum, on a complaint by an insurance policyholder."
        ],
        0,
        "Section 41 mandates that only a Metropolitan Magistrate or Judicial Magistrate of the First Class can try statutory offences, and courts can only take cognizance upon a formal complaint from the Council or Central Government.",
        "Private individuals cannot initiate direct criminal prosecution under the Act without Council or Central Government authorization."
    )

    # 17
    add(
        "Actuaries Act 2006, Section 56 (Regulations Making Power)",
        "Under Section 56 of the Actuaries Act 2006, can the Council make regulations altering examination structures, fees, or membership procedures independently?",
        [
            "No; the Council makes regulations by notification in the Official Gazette, but strictly with the prior approval of the Central Government.",
            "Yes; the Council is an autonomous sovereign body and requires no government approval for regulations.",
            "Yes, provided 100% of Fellow members vote in favor in a national referendum.",
            "No; regulations can only be drafted and enacted directly by the Reserve Bank of India."
        ],
        0,
        "Section 56(1) states: 'The Council may, by notification in the Official Gazette, make regulations with the prior approval of the Central Government to carry out the provisions of this Act.'",
        "A critical statutory check and balance: Council cannot promulgate binding subordinate regulations without prior Central Government approval."
    )

    # 18
    add(
        "Actuaries Act 2006, Section 19(2)(i) (Power to Prescribe Standards)",
        "Which specific provision of the Actuaries Act 2006 confers legal authority upon the Council to issue mandatory Actuarial Practice Standards (APSs) and the Professional Conduct Standards (PCS)?",
        [
            "Section 19(2)(i), empowering Council to prescribe professional standards and codes of conduct.",
            "Section 38, governing criminal penalties for designation misuse.",
            "Section 2(1)(a), defining the skills of an actuary.",
            "Section 43, establishing the Quality Review Board."
        ],
        0,
        "Section 19(2)(i) is the specific statutory anchor authorizing Council to establish, maintain, and enforce professional and technical standards, including PCS v4.0 and all Actuarial Practice Standards.",
        "Breach of standards issued under Section 19(2)(i) constitutes professional misconduct under the Schedules of the Act."
    )

    # 19
    add(
        "Actuaries Act 2006, Section 7 (Register of Members Voting Rights)",
        "Under the Actuaries Act 2006, which classes of members are legally entitled to vote in Council elections under Section 12?",
        [
            "Fellows and Associates whose names are entered on the Register of Members.",
            "Exclusively Fellows holding a Certificate of Practice (COP).",
            "All registered members, including student members and honorary affiliates.",
            "Only corporate insurance companies that contribute annual sponsorship fees."
        ],
        0,
        "Under Section 12(1)(a) and Section 6, the electorate for Council comprises Fellows and Associates. Students, honorary, and affiliate members do not possess statutory voting rights in Council elections.",
        "A common trap is assuming only COP holders vote. Both non-COP Fellows and Associates have statutory voting rights."
    )

    # 20
    add(
        "Actuaries Act 2006, Section 11(2) (Restoration to Register of Members)",
        "A member whose name was removed from the Register for non-payment of annual membership fees pays all arrears and the prescribed penalty. How is the member restored under Section 11(2)?",
        [
            "The Council may, on an application made by the member and on payment of the prescribed arrears and fees, restore the member's name to the Register.",
            "The member must re-sit and clear all actuarial examination papers from the beginning.",
            "Restoration requires a special statutory order issued directly by the Parliament of India.",
            "The member's name can never be restored under any circumstances once removed."
        ],
        0,
        "Section 11(2) empowers Council to restore a member's name to the Register upon formal application, clearance of unpaid subscription arrears, and payment of the prescribed restoration fee.",
        "Re-sitting exams or parliamentary bills are absurd; administrative restoration is standard upon debt clearance."
    )

    # 21
    add(
        "Actuaries Act 2006, Section 8 (Qualifications for Entry in Register)",
        "Under Section 8 of the Actuaries Act 2006, what is required for an individual to have their name entered in the Register of Members as a Fellow?",
        [
            "The individual must have passed the prescribed examinations conducted by the Institute (or recognized equivalent examinations) and satisfied the requisite criteria of practical actuarial work experience.",
            "The individual only needs to be a graduate of an Indian university with mathematics as an elective subject.",
            "The individual must pay an admission fee of Rs. 10 Lakhs without sitting for any examinations.",
            "The individual must be appointed as a director of an Indian insurance company."
        ],
        0,
        "Section 8 specifies the professional qualification criteria: passing prescribed professional examinations and satisfying the practical work experience requirement stipulated by Council regulations.",
        "Fellowship is an earned credential requiring exam success and practical experience, not an honorary title or commercial purchase."
    )

    # 22
    add(
        "Actuaries Act 2006, Section 13 (Resignation of Council Members)",
        "Under Section 13 of the Actuaries Act 2006, to whom must an elected Council member submit their written resignation if they wish to resign from Council, and when does it take effect?",
        [
            "To the President of the Council, and it takes effect on the date on which it is accepted by the Council.",
            "To the Chief Election Commissioner of India, taking effect immediately upon posting.",
            "To the local police commissioner within 24 hours.",
            "Council members are statutorily prohibited from ever resigning during their 3-year term."
        ],
        0,
        "Section 13 provides that a member of the Council may resign their seat by giving notice in writing to the President, taking effect when accepted by the Council.",
        "Resignation is an orderly statutory procedure addressed to the President of the Council."
    )

    # 23
    add(
        "Actuaries Act 2006, Section 14 (Casual Vacancies in Council)",
        "When an elected Council member dies or resigns midway through their 3-year term, creating a casual vacancy, how is the seat filled under Section 14 of the Act?",
        [
            "The Council fills the casual vacancy by nomination from amongst the members of the Institute who are eligible for election, and the appointed member holds office for the remainder of the term.",
            "A nation-wide general election must be conducted within 48 hours.",
            "The seat remains permanently vacant until the next 3-year election cycle.",
            "The President's eldest family member automatically inherits the Council seat."
        ],
        0,
        "Section 14(3) empowers Council to fill casual vacancies among elected seats by nominating an eligible member from the Register, who serves out the unexpired portion of the 3-year term.",
        "Mid-term casual vacancies do not trigger costly nation-wide general elections."
    )

    # 24
    add(
        "Actuaries Act 2006, Section 15 (Meetings of Council & Quorum)",
        "Under Section 15 of the Actuaries Act 2006 and Council Regulations, what is the statutory frequency of Council meetings and the quorum required?",
        [
            "The Council must meet at least once in every three months, and the quorum for a meeting is one-third of the total number of members of the Council.",
            "The Council meets once every five years with a quorum of two members.",
            "The Council meets daily, with 100% attendance mandatory.",
            "Meetings are only convened if summoned by the President of India."
        ],
        0,
        "Section 15 and regulations mandate regular quarterly governance meetings (at least once every 3 months), requiring a one-third quorum of Council members to transact business lawfully.",
        "Quarterly meetings ensure ongoing executive oversight over examination, standard-setting, and disciplinary functions."
    )

    # 25
    add(
        "Actuaries Act 2006, Section 24 (Finances & Statutory Audit)",
        "Under Section 24 of the Actuaries Act 2006, how are the annual financial accounts of the Institute audited?",
        [
            "The accounts must be audited annually by a Chartered Accountant in practice holding a valid COP from the ICAI, appointed annually by the Council.",
            "The accounts are audited internally by actuarial students sitting for core exams.",
            "The accounts are exempt from all financial audit requirements under sovereign prerogative.",
            "The accounts are audited by an insurance loss assessor appointed by IRDAI."
        ],
        0,
        "Section 24(2) mandates that the accounts of the Institute shall be audited annually by a Chartered Accountant in practice, ensuring independent external verification of Institute funds.",
        "Statutory accounting audits require independent Chartered Accountants under ICAI standards."
    )

    # 26
    add(
        "Actuaries Act 2006, Section 35 (Bar of Jurisdiction of Civil Courts)",
        "Under Section 35 of the Actuaries Act 2006, can a member facing disciplinary inquiry file a civil lawsuit in a local municipal court seeking an injunction to stop the Disciplinary Committee from meeting?",
        [
            "No; Section 35 explicitly bars the jurisdiction of Civil Courts to entertain any suit or proceeding in respect of any matter which the Council, Board of Discipline, or Disciplinary Committee is empowered to determine.",
            "Yes; any civil judge can issue a stay order halting actuarial disciplinary proceedings at will.",
            "Yes, provided the member pays a court fee of Rs. 100.",
            "Civil courts automatically supersede all statutory professional tribunals in India."
        ],
        0,
        "Section 35 creates a statutory bar on civil court intervention: civil courts have no jurisdiction over matters entrusted by Parliament to the Disciplinary Directorate, Board of Discipline, or Disciplinary Committee.",
        "Disciplinary decisions can only be challenged through the statutory appellate mechanism (Section 36) and constitutional writ jurisdiction."
    )

    # 27
    add(
        "Actuaries Act 2006, Section 42 (Protection of Action Taken in Good Faith)",
        "If a member who was reprimanded by the Board of Discipline attempts to sue the individual members of the Board of Discipline for personal monetary damages in tort, how does Section 42 protect the Board members?",
        [
            "Section 42 provides complete statutory immunity: no suit, prosecution, or legal proceeding shall lie against the Council, Board of Discipline, Disciplinary Committee, or officers for anything done in good faith under the Act.",
            "Board members must personally pay damages from their personal bank accounts.",
            "Statutory immunity only applies if the member was acquitted.",
            "Protection applies only if the Board members are also advocates registered with the Bar Council."
        ],
        0,
        "Section 42 contains the classic statutory protection clause: officers, Council members, and disciplinary tribunal members enjoy complete legal immunity for actions taken in good faith in discharge of their statutory duties.",
        "Statutory immunity ensures disciplinary authorities can adjudicate without fear of personal retaliatory lawsuits."
    )

    # 28
    add(
        "Actuaries Act 2006, Section 55 (Central Government Directions)",
        "Under Section 55 of the Actuaries Act 2006, what is the legal effect of a policy directive issued by the Central Government to the Council of the Institute?",
        [
            "The Council must, in the exercise of its functions, be guided by such directions on questions of policy as may be given to it in writing by the Central Government, and the decision of the Central Government on whether a question is one of policy is final.",
            "The Council may discard government policy directions if 51% of members vote against them.",
            "Central Government directions are merely non-binding informal recommendations with zero legal force.",
            "The Council can only follow directions if approved by the International Actuarial Association."
        ],
        0,
        "Section 55 affirms sovereign parliamentary supremacy: the Central Government may issue binding policy directives in writing, and its determination of whether a matter constitutes policy is final.",
        "Professional self-regulation operates within the statutory boundaries established by the Central Government."
    )

    # 29
    add(
        "Actuaries Act 2006, Section 19(2)(d) (Management of Institute Funds)",
        "Under Section 19(2)(d) of the Actuaries Act 2006, how must the Council manage and invest the surplus funds of the Institute?",
        [
            "In accordance with investment guidelines and prudent trustee standards in securities of the Central Government or approved scheduled commercial banks.",
            "By investing in speculative cryptocurrency derivatives on overseas exchanges.",
            "By lending money to corporate insurance companies at high interest rates.",
            "Council members may distribute surplus funds as personal annual cash dividends among themselves."
        ],
        0,
        "Section 19(2)(d) mandates prudent management and safe investment of Institute funds in approved securities and government-backed avenues, preserving the Institute's financial security.",
        "Institute funds are public statutory property dedicated to advancing the actuarial profession, not for speculative trading or member dividends."
    )

    # 30
    add(
        "Actuaries Act 2006, Section 37 (Maintenance of Register of Members)",
        "Who is statutorily responsible for maintaining the Register of Members of the Institute under Section 6 and Chapter II of the Act?",
        [
            "The Council of the Institute, acting through its Secretariat and designated officers.",
            "The Insurance Regulatory and Development Authority (IRDAI) head office in Hyderabad.",
            "The Ministry of Corporate Affairs in New Delhi.",
            "A private third-party recruitment staffing agency."
        ],
        0,
        "Chapter II of the Act establishes that the Register of Members is maintained directly by the Council of the Institute of Actuaries of India.",
        "Custodianship of the roll of professionals is a defining attribute of the statutory self-regulatory body."
    )

    return qs

if __name__ == "__main__":
    qs = get_act_questions()
    print(f"Generated {len(qs)} Act questions successfully.")

