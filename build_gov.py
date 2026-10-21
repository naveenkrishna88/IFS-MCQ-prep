# -*- coding: utf-8 -*-
"""
build_gov.py - Module 3: IAI Governance, Committees & QRB
Authentic, high-difficulty Fellowship MCQs covering:
- Council executive leadership & statutory office bearers
- Active Section 21 Standing Committees (6 core committees)
- 12 Practice Advisory Groups (PAGs) & technical remits
- Specialized Working Groups (IFRS 17, AI/Data Science, Climate Risk)
- Quality Review Board (QRB) composition & operating methodology
- Council Guidelines: AGM Notice (21 clear days), Standard-Setting Due Process (30-60 days)
- Social Media & Public Communication Guidelines
"""

CAT = "IAI Governance, Committees & QRB"

def get_gov_questions():
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
        "IAI Governance, Section 21 Standing Committees",
        "Under Section 21 of the Actuaries Act 2006, how many active executive Standing Committees are currently constituted by the Council to manage the operational and policy functions of the Institute?",
        [
            "Six (6) active Standing Committees: Professionalism, Audit, Finance/HR/IT/Admin, Education and Examination, Research and Innovation, and Student Growth and Success.",
            "Twelve (12) standing committees corresponding to each of the Practice Advisory Groups.",
            "Only three committees: an Executive Committee, an Examination Committee, and a Disciplinary Committee.",
            "Eight (8) regional standing committees managing state-level chapters across India."
        ],
        0,
        "The Council operates through 6 active Section 21 Standing Committees: (1) Professionalism, (2) Audit, (3) Finance, HR, IT & Admin, (4) Education & Examination, (5) Research & Innovation, and (6) Student Growth & Success.",
        "The 6 Section 21 Standing Committees form the administrative executive engine of the Institute."
    )

    # 2
    add(
        "IAI Governance, Section 21 Professionalism Committee",
        "Which Section 21 Standing Committee acts as the custodian of professional conduct, reviews interpretations of PCS v4.0, and monitors compliance with ethical guidance notes across the Institute?",
        [
            "The Professionalism Committee.",
            "The Audit Committee.",
            "The Student Growth and Success Committee.",
            "The Practice Advisory Group on Banking and Investments."
        ],
        0,
        "The Professionalism Committee is the specific Section 21 executive standing committee charged with overseeing professional standards, ethical interpretations of PCS, and guidance notes.",
        "The Audit Committee oversees internal financial controls, Student Growth focuses on candidate mentoring, and PAGs are advisory think-tanks."
    )

    # 3
    add(
        "IAI Governance, Section 21 Audit Committee",
        "What is the statutory and operational responsibility of the Audit Committee constituted by Council under Section 21?",
        [
            "Overseeing the financial reporting integrity of the Institute, reviewing internal financial controls, supervising statutory external audits, and assessing enterprise risk management.",
            "Auditing policyholder reserves of commercial insurance companies on behalf of the IRDAI.",
            "Conducting forensic investigations into allegations of student examination cheating.",
            "Fixing statutory premium tariffs for general insurance third-party motor liability."
        ],
        0,
        "The Audit Committee is an internal oversight committee ensuring fiscal integrity, reviewing internal financial controls, and supervising the annual statutory audit of the Institute itself.",
        "Commercial insurance reserves are audited by statutory financial auditors and reviewed by the QRB, not the IAI internal Audit Committee."
    )

    # 4
    add(
        "IAI Governance, Practice Advisory Groups (PAGs) Count & Function",
        "How many Practice Advisory Groups (PAGs) are established under the IAI governance framework to provide domain-specific technical leadership and advice?",
        [
            "Exactly twelve (12) Practice Advisory Groups spanning specialized technical areas such as Life, General Insurance, Health, Pensions, Banking, and Risk Management.",
            "Six (6) advisory groups matching the number of Section 21 Standing Committees.",
            "Twenty-four (24) advisory groups covering each distinct actuarial examination subject.",
            "Four (4) advisory groups corresponding to the four primary insurance licensing classes."
        ],
        0,
        "There are currently 12 Practice Advisory Groups (PAGs) serving as domain-specific technical think-tanks, drafting guidance notes, and advising Council on regulatory policy.",
        "12 PAGs provide specialized coverage across Life, GI, Health, Pensions, ERM, Banking, Agriculture, and broader domains."
    )

    # 5
    add(
        "IAI Governance, PAG on Life Insurance Remit",
        "Which Practice Advisory Group is primarily responsible for drafting Guidance Notes and Actuarial Practice Standards on statutory reserving (APS 2), solvency margin monitoring, and participating with-profits management?",
        [
            "The Practice Advisory Group on Life Insurance.",
            "The Practice Advisory Group on Banking, Finance & Investments.",
            "The Practice Advisory Group on Risk Management.",
            "The Practice Advisory Group on Sustainable Development and Microinsurance."
        ],
        0,
        "The Life Insurance PAG focuses on technical standards, valuation regulations, product pricing guidelines, and asset-liability matching for life insurers.",
        "Other PAGs focus on non-life reserving, banking models, or general enterprise risk management."
    )

    # 6
    add(
        "IAI Governance, PAG on General Insurance Remit",
        "Which Practice Advisory Group leads technical research on IBNR/IBNER reserving methodologies, claims development triangles, and pricing models for non-life lines?",
        [
            "The Practice Advisory Group on General Insurance.",
            "The Practice Advisory Group on Agriculture and Rural Risk.",
            "The Practice Advisory Group on Health Care Insurance.",
            "The Practice Advisory Group on Communication."
        ],
        0,
        "The General Insurance PAG provides technical leadership on non-life reserving, stochastic claims triangulation, catastrophic risk modeling, and motor third-party pools.",
        "The GI PAG advises both Council and IRDAI on property and casualty technical regulations."
    )

    # 7
    add(
        "IAI Governance, Specialized Working Groups Mandate",
        "How do Specialized Working Groups (WGs)—such as the Working Group on IFRS 17 (Ind AS 117) and the Working Group on AI & Data Science—differ from permanent Standing Committees?",
        [
            "Working Groups are task-oriented, cross-functional expert bodies formed by Council to address urgent emerging regulatory, accounting, or technological shifts.",
            "Working Groups have statutory powers under the Actuaries Act to issue legally binding penal sanctions against members.",
            "Working Groups are composed entirely of external government officials from the Ministry of Finance.",
            "Working Groups operate completely independently of Council and report directly to Parliament."
        ],
        0,
        "Working Groups are ad-hoc or specialized bodies formed to resolve complex, emerging industry transitions (e.g. Ind AS 117 implementation, algorithmic AI ethics, climate risk).",
        "They advise Council and produce technical guidance, but do not possess independent statutory regulatory power."
    )

    # 8
    add(
        "IAI Governance, Working Group on IFRS 17 (Ind AS 117)",
        "What is the primary technical objective of the IAI Working Group on IFRS 17 (Ind AS 117)?",
        [
            "Formulating actuarial guidance on transition methods, contract boundaries, discounting yield curves, and liability measurement models in convergence with Indian accounting standards.",
            "Administering corporate tax compliance for general insurance underwriting pools.",
            "Auditing the commercial software licensing agreements of domestic insurance companies.",
            "Setting statutory interest rates for national small savings schemes."
        ],
        0,
        "The IFRS 17 Working Group focuses on actuarial technicalities under Ind AS 117: discount curve determination (CCIL curve), risk adjustment percentiles, PAA eligibility, and CSM emergence.",
        "It liaises directly with ICAI, IRDAI, and industry bodies on financial reporting harmonization."
    )

    # 9
    add(
        "IAI Governance, Quality Review Board (QRB) Statutory Pedigree",
        "Under Section 43 of the Actuaries Act 2006, how is the Quality Review Board (QRB) constituted, and what is its statutory tenure?",
        [
            "Constitutional body appointed by the Central Government, comprising a Chairperson and four (4) other members, holding office for a term of three (3) years.",
            "Internal committee appointed by the Council President, comprising five Fellows holding office for five years.",
            "Sub-committee of the Disciplinary Committee comprising three members holding office for one year.",
            "Advisory council appointed by the Insurance Regulatory and Development Authority holding office at pleasure."
        ],
        0,
        "Section 43 vests the appointment of the QRB directly in the Central Government: a Chairperson plus 4 members (2 nominated by Central Govt, 2 by Council), with a 3-year term.",
        "The QRB is an independent external statutory supervisor, not an internal Council committee."
    )

    # 10
    add(
        "IAI Governance, Statutory Functions of the QRB",
        "Under Section 44 of the Actuaries Act 2006, which of the following is NOT one of the three primary statutory functions of the Quality Review Board?",
        [
            "To impose monetary fines and issue suspension orders against individual actuaries found guilty of professional negligence.",
            "To fix standards for services provided by the members of the Institute.",
            "To review the quality of services provided by the members of the Institute, including actuarial audit services.",
            "To guide members of the Institute on improving the quality of services and adhering to statutory regulations."
        ],
        0,
        "Section 44 lists three functions: (a) fixing service standards, (b) reviewing service quality, and (c) guiding members. The QRB CANNOT impose disciplinary penalties; it reports findings to Council.",
        "Disciplinary sanctions are the exclusive statutory domain of the Board of Discipline and Disciplinary Committee under Chapter IV."
    )

    # 11
    add(
        "IAI Governance, Council Guidelines for Conducting Annual General Meetings (AGM)",
        "Under Council guidelines approved on 02 March 2013, what is the mandatory notice period required for convening an Annual General Meeting (AGM) of the Institute?",
        [
            "At least twenty-one (21) clear days' written notice specifying the date, time, venue, and agenda items.",
            "At least seven (7) calendar days' notice delivered by registered post.",
            "At least forty-five (45) days' notice published in national business newspapers.",
            "At least ninety (90) days' notice matching the disciplinary appeal limitation window."
        ],
        0,
        "Under the Council Guidelines for AGMs, at least 21 clear days' notice must be provided to all eligible members before the meeting can lawfully proceed.",
        "21 clear days provides sufficient time for members to review annual accounts and submit formal resolutions or proxy votes."
    )

    # 12
    add(
        "IAI Governance, Standard-Setting Due Process (Consultation Period)",
        "Under the Council's Standard Setting Due Process (Versions 3, 4, 5), for what duration must an Exposure Draft of a proposed Actuarial Practice Standard (APS) be published on the IAI website for public consultation?",
        [
            "For a consultation window of thirty (30) to sixty (60) days to solicit comments from members, industry stakeholders, and regulators.",
            "For exactly seven (7) calendar days prior to final Council enactment.",
            "For a minimum of one full calendar year (365 days).",
            "Public consultation is optional; standards may be enacted without public exposure if approved unanimously by Council."
        ],
        0,
        "The Due Process mandates a 30 to 60-day public exposure period for draft standards, ensuring rigorous transparency, stakeholder review, and technical debate.",
        "Robust due process ensures that newly enacted APSs reflect broad consensus and regulatory alignment."
    )

    # 13
    add(
        "IAI Governance, Annual Report & Audited Accounts Presentation",
        "Under the Actuaries Act 2006 and Council Governance Guidelines, where must the annual report of Council activities and audited financial accounts be formally presented to members?",
        [
            "At the Annual General Meeting (AGM) of the Institute convened within prescribed statutory timelines.",
            "At a quarterly meeting of the Professionalism Committee.",
            "Exclusively in a confidential circular sent to the Ministry of Corporate Affairs.",
            "At the opening session of the Global Conference of Actuaries."
        ],
        0,
        "Under standard governance rules, the annual report and audited balance sheet must be formally laid before members at the Annual General Meeting (AGM) following at least 21 clear days' notice.",
        "Democratic transparency requires annual accounts to be presented directly to the voting membership."
    )

    # 14
    add(
        "IAI Governance, Practice Advisory Group (PAG) Composition",
        "Who typically chairs and comprises a Practice Advisory Group (PAG) within the IAI institutional framework?",
        [
            "A Chairperson who is a senior Fellow with recognized domain expertise, supported by appointed members with relevant technical practice experience.",
            "A member of the Quality Review Board acting as permanent ex-officio chair.",
            "A senior representative from the Ministry of Law and Justice.",
            "Any Associate member who submits the earliest formal expression of interest."
        ],
        0,
        "PAGs are chaired by experienced Fellows appointed by Council, drawing upon qualified actuarial practitioners and domain specialists to drive technical excellence in that vertical.",
        "PAGs require senior practice leadership to maintain rigorous technical dialogues with IRDAI and global standard-setters."
    )

    # 15
    add(
        "IAI Governance, PAG on Risk Management & Enterprise Risk",
        "What is the primary technical remit of the Practice Advisory Group on Risk Management within the IAI governance structure?",
        [
            "Developing guidance on Enterprise Risk Management (ERM), Own Risk and Solvency Assessment (ORSA), Risk-Based Capital (RBC) frameworks, and quantitative stress testing.",
            "Auditing the commercial insurance policies purchased by the Institute Secretariat.",
            "Setting personal liability insurance premiums for independent corporate directors.",
            "Conducting criminal risk profiling of applicants seeking student membership."
        ],
        0,
        "The Risk Management PAG provides thought leadership on holistic ERM, ORSA implementation, capital modeling under RBC, and scenario stress testing.",
        "ERM frameworks bridge traditional actuarial reserving with holistic corporate governance and risk appetite."
    )

    # 16
    add(
        "IAI Governance, Section 21 Finance, HR, IT and Admin Committee",
        "What is the specific governance portfolio managed by the Section 21 Finance, HR, IT and Admin Committee of the IAI?",
        [
            "Overseeing the annual budget preparation, secretariat human resources, digital IT infrastructure, facilities, and day-to-day administrative expenditure.",
            "Conducting disciplinary hearings for members accused of professional misconduct.",
            "Drafting mandatory mortality tables for Indian life insurance companies.",
            "Reviewing and approving underwriting guidelines for health insurance policies."
        ],
        0,
        "The Finance, HR, IT and Admin Committee is the Section 21 standing committee charged with managing organizational finances, staffing, technological infrastructure, and secretariat operations.",
        "Disciplinary inquiries are handled under Chapter IV, and mortality tables are researched by dedicated committees and groups."
    )

    # 17
    add(
        "IAI Governance, Section 21 Education and Examination Committee",
        "What is the statutory role of the Section 21 Education and Examination Committee within the Institute's governance architecture?",
        [
            "Overseeing curriculum modernization, examination delivery, examiner appointment, paper setting security, and pass mark benchmarks.",
            "Granting university accreditation degrees under the University Grants Commission Act.",
            "Licensing insurance surveyors and loss assessors under the Insurance Act 1938.",
            "Issuing practicing certificates to overseas actuaries wishing to consult in India."
        ],
        0,
        "The Education and Examination Committee oversees the entire academic pipeline: syllabus revisions, examiner panels, exam diets, remote proctoring, and pass standards.",
        "Exam integrity and syllabus alignment with international benchmarks fall directly within its mandate."
    )

    # 18
    add(
        "IAI Governance, Section 21 Research and Innovation Committee",
        "Which governance body within the IAI drives empirical actuarial research, publishes mortality and morbidity investigation tables, and evaluates emerging data science paradigms?",
        [
            "The Research and Innovation Committee.",
            "The Quality Review Board.",
            "The Board of Discipline.",
            "The Appellate Authority."
        ],
        0,
        "The Research and Innovation Committee leads actuarial research initiatives, oversees mortality and morbidity experience studies in India, and encourages academic publication.",
        "Empirical demographic research forms the bedrock for statutory valuation assumptions across the Indian insurance market."
    )

    # 19
    add(
        "IAI Governance, Section 21 Student Growth and Success Committee",
        "What is the primary operational mission of the Section 21 Student Growth and Success Committee?",
        [
            "Designing student support programs, exam preparation mentorship, candidate counseling, and tracking progression rates across examination diets.",
            "Conducting disciplinary inquiries into student examination malpractice.",
            "Managing the corporate pension scheme of the Institute's secretariat staff.",
            "Collecting membership subscription arrears through civil court litigation."
        ],
        0,
        "The Student Growth and Success Committee is dedicated to candidate welfare, pass-rate analytics, academic webinars, and study mentoring.",
        "Disciplinary cases against students are heard by the Student Disciplinary Committee under the Student Code."
    )

    # 20
    add(
        "IAI Governance, Council Social Media Usage Guidelines",
        "Under the Council's Social Media Usage Guidelines, what is the core ethical obligation imposed on members when expressing views on public digital forums (such as LinkedIn or Twitter)?",
        [
            "Members must act with professional dignity, ensure communications are respectful and objective, maintain strict confidentiality, and avoid comments that bring the Institute into disrepute.",
            "Members are prohibited from mentioning their actuarial qualification on any online platform.",
            "Members may express controversial views on competitor solvency provided they post under an anonymous username.",
            "Social media comments are treated as private speech completely exempt from professional conduct oversight."
        ],
        0,
        "Council Social Media Guidelines mandate that online conduct must mirror physical professional standards: members must uphold professional dignity, respect confidentiality, and avoid derogatory commentary.",
        "Online posts that damage public trust in the profession constitute actionable misconduct."
    )

    # 21
    add(
        "IAI Governance, PAG on Health Care Insurance Remit",
        "Which technical domain is the primary responsibility of the Practice Advisory Group on Health Care Insurance?",
        [
            "Advising on medical inflation modeling, health indemnity product pricing, standard definition of critical illness benefits, and claims loss ratio analysis.",
            "Regulating hospital bed charges and pharmaceutical retail drug prices.",
            "Supervising the statutory licensing of medical doctors and surgeons in India.",
            "Managing public sanitation projects on behalf of municipal corporations."
        ],
        0,
        "The Health Care Insurance PAG provides specialized actuarial advice on health pricing, morbidity assumptions, medical trend inflation, and regulatory health product circulars.",
        "Healthcare actuarial practice is distinct from life and property-casualty, requiring tailored guidance."
    )

    # 22
    add(
        "IAI Governance, PAG on Pension & Social Security Remit",
        "Which Practice Advisory Group focuses on statutory employee benefit valuations (AS 15 / Ind AS 19), public pension sustainability, and gratuity scheme funding?",
        [
            "The Practice Advisory Group on Pension, Employee Benefits & Social Security.",
            "The Practice Advisory Group on General Insurance.",
            "The Practice Advisory Group on Sustainable Development and Microinsurance.",
            "The Practice Advisory Group on Education."
        ],
        0,
        "The Pension PAG focuses on retirement funds, corporate gratuity valuations under Ind AS 19, provident funds, and national pension scheme longevity modeling.",
        "It liaises with the Ministry of Labour, PFRDA, and corporate financial auditors."
    )

    # 23
    add(
        "IAI Governance, Working Group on AI & Data Science",
        "What emerging professional challenge is the IAI Working Group on AI & Data Science tasked with addressing?",
        [
            "Examining the ethical use of machine learning in underwriting and pricing, algorithmic bias, data privacy, and the interpretability of complex black-box actuarial models.",
            "Developing commercial mobile phone applications for online stock market day-trading.",
            "Managing the physical hardware maintenance of server racks at the IAI head office.",
            "Setting statutory telecommunications tariffs for internet service providers."
        ],
        0,
        "The AI & Data Science Working Group evaluates modern advanced analytics: algorithmic governance, fair pricing, privacy compliance, and ensuring models remain explainable and auditable.",
        "Ethical AI is a major strategic focus for contemporary actuarial governance."
    )

    # 24
    add(
        "IAI Governance, Actuarial Job Placement Working Group (WG-AJP)",
        "What is the institutional purpose of the Actuarial Job Placement Working Group (WG-AJP)?",
        [
            "Expanding career opportunities for actuarial candidates in both traditional insurance sectors and non-traditional domains (such as banking, analytics, and climate finance).",
            "Setting mandatory minimum salaries for corporate Chief Executive Officers.",
            "Serving as a commercial recruitment agency charging commission on student placements.",
            "Regulating foreign work visas for Indian citizens moving abroad."
        ],
        0,
        "The WG-AJP bridges the gap between candidates and industry: fostering placement opportunities, organizing career fairs, and promoting actuarial talent in non-traditional sectors.",
        "Expanding professional employment avenues ensures long-term profession viability."
    )

    # 25
    add(
        "IAI Governance, Working Group on Climate Risk & Sustainable Finance",
        "Which specialized working group investigates climate scenario analysis, carbon transition risks, and ESG disclosures relevant to actuarial risk assessments?",
        [
            "The Working Group on Climate Risk & Sustainable Finance.",
            "The Practice Advisory Group on Examination.",
            "The Section 21 Finance and Admin Committee.",
            "The Quality Review Board."
        ],
        0,
        "The Climate Risk & Sustainable Finance Working Group researches physical and transition climate risks, carbon stress testing, and sustainability disclosures for insurers and pension schemes.",
        "Climate modeling is increasingly integrated into solvency and enterprise risk management."
    )

    # 26
    add(
        "IAI Governance, PAG on Banking, Finance & Investments Remit",
        "In which emerging area does the PAG on Banking, Finance & Investments provide specialized guidance?",
        [
            "Application of actuarial contingent modeling to bank balance sheets, Credit Value Adjustment (CVA), IFRS 9 expected credit loss (ECL) modeling, and asset-liability management.",
            "Determining the retail mortgage interest rates of commercial banks.",
            "Printing and distributing legal currency banknotes across India.",
            "Auditing non-performing assets of international credit card issuers."
        ],
        0,
        "The Banking PAG promotes actuarial principles in non-insurance financial institutions: ALM, stochastic liquidity modeling, ECL credit provisioning, and quantitative risk management.",
        "Banking and broader finance represent significant non-traditional growth fields for actuaries."
    )

    # 27
    add(
        "IAI Governance, PAG on Agriculture & Rural Risk",
        "Which government insurance scheme and agricultural risk domain does the PAG on Agriculture & Rural Risk primarily interact with?",
        [
            "Pradhan Mantri Fasal Bima Yojana (PMFBY), parametric crop insurance yield modeling, and weather index risk quantification.",
            "Setting minimum support prices (MSP) for agricultural food grain procurement.",
            "Constructing rural irrigation canals and fertilizer distribution subsidies.",
            "Auditing commodity futures contracts on the National Commodity Exchange."
        ],
        0,
        "The Agriculture PAG focuses on crop insurance (PMFBY), satellite remote-sensing data in claims estimation, weather derivative pricing, and rural catastrophe protection.",
        "Agricultural risk is crucial for India's food security and rural economic stability."
    )

    # 28
    add(
        "IAI Governance, Standard-Setting Due Process: Role of Professionalism Committee",
        "Under the IAI Due Process for standard setting, what is the mandatory review step immediately preceding submission of a draft Actuarial Practice Standard to Council for final adoption?",
        [
            "The draft standard must be formally reviewed by the Section 21 Professionalism Committee to ensure consistency with PCS v4.0 and broader ethical frameworks.",
            "The draft standard must be submitted to the Supreme Court of India for constitutional certification.",
            "The draft standard must be approved by a public referendum of all registered students.",
            "The draft standard must be sent to the International Monetary Fund for peer review."
        ],
        0,
        "Under the due process guidelines, after public exposure and redrafting by the Advisory Group, the draft standard must be formally reviewed by the Professionalism Committee before submission to Council.",
        "The Professionalism Committee ensures all new standards align seamlessly with PCS v4.0 and statutory legislation."
    )

    # 29
    add(
        "IAI Governance, Practice Advisory Group (PAG) on Sustainable Development & Microinsurance",
        "What is the societal and technical remit of the PAG on Sustainable Development and Microinsurance?",
        [
            "Promoting financial inclusion, designing low-ticket microinsurance products for low-income populations, and climate vulnerability modeling for rural communities.",
            "Regulating commercial microfinance institutions and fixing consumer loan interest rates.",
            "Managing international charity donations on behalf of foreign non-governmental organizations.",
            "Drafting mandatory labor laws for manufacturing industries."
        ],
        0,
        "The Sustainable Development & Microinsurance PAG works on actuarial solutions for social protection: micro-insurance, parametric weather covers for smallholders, and inclusive finance.",
        "Actuarial expertise contributes directly to national financial inclusion and climate resilience."
    )

    # 30
    add(
        "IAI Governance, Council Guidelines on Social Media and Disrepute",
        "Under Council guidelines, if an actuary publishes misleading claims about competitor solvency or uses unprofessional language in an online discussion with student examinees, how is this handled?",
        [
            "It is treated as professional misconduct that brings the profession into disrepute, subjecting the member to investigation by the Disciplinary Directorate.",
            "It is completely immune from inquiry because social media accounts are privately owned personal domains.",
            "The member is issued an informal commercial billing penalty of Rs. 1,000 without disciplinary record.",
            "The matter is dismissed unless the post receives more than one thousand shares or likes."
        ],
        0,
        "Under Council Social Media Guidelines and PCS v4.0, unprofessional public conduct on social media that impairs public confidence in the profession constitutes professional misconduct.",
        "Digital conduct is subject to the same high standards of integrity and respect as physical professional interactions."
    )

    return qs

if __name__ == "__main__":
    qs = get_gov_questions()
    print(f"Generated {len(qs)} Governance questions successfully.")
