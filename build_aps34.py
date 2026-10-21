# -*- coding: utf-8 -*-
"""
build_aps34.py - Module 7: APS 34: General Actuarial Practice Standard
Authentic, high-difficulty Fellowship MCQs covering:
- Legislative pedigree: adopted 29 Dec 2021, aligned with IAA ISAP 1
- Universal scope & conflict hierarchy (specific practice standards override APS 34)
- Language hierarchy (Section 1.6: 'Must' vs 'Should' vs 'May')
- Terms of Reference (ToR - Para 2.1) in writing before work begins
- Reliance on others & explicit disclaimer disclosures (Para 2.3)
- Materiality threshold evaluated from intended user perspective (Para 2.4)
- Assumption setting: individually justifiable & reasonable in aggregate (Paras 2.6-2.9)
- Model governance: independent validation & change control logging (Para 2.10)
- Statutory benchmark of documentation: The Peer Replicability Test (Para 2.14)
- Section 3.2.2: The 11 mandatory report disclosures
- Sensitivity testing, unintended users, co-signing liability, error discovery
"""

CAT = "APS 34: General Actuarial Practice Standard"

def get_aps34_questions():
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
        "APS 34, Global Pedigree & Adoption Date",
        "Which international benchmark does Actuarial Practice Standard 34 (APS 34: General Actuarial Practice) converge with, and when was it officially issued by the IAI Council?",
        [
            "It converges directly with International Standard of Actuarial Practice 1 (ISAP 1) issued by the IAA, and was officially issued by IAI on 29 December 2021.",
            "It converges with US GAAP ASC 944 and was officially notified on 1 January 2018.",
            "It converges with International Financial Reporting Standard 4 (IFRS 4) and was adopted in March 2005.",
            "It is an informal advisory guidance note without binding statutory character."
        ],
        0,
        "APS 34 directly converges with ISAP 1 (General Actuarial Practice) issued by the International Actuarial Association (IAA). Adopted by Council on 4 September 2021, it was officially issued on 29 December 2021.",
        "APS 34 is a formal subordinate statutory standard binding on all Indian actuaries across all practice areas."
    )

    # 2
    add(
        "APS 34, Conflict Hierarchy with Specific Practice Standards",
        "Where an apparent conflict arises between general guidance in APS 34 and specific provisions in a practice-area standard (such as APS 2 for Life Insurance or APS 9 for CPD), which standard takes precedence?",
        [
            "The specific practice-area standard (e.g., APS 2 or APS 9) strictly takes precedence over the general guidance in APS 34.",
            "APS 34 automatically overrides and supersedes all specific practice standards.",
            "The actuary must apply the most conservative numerical reserve regardless of standard hierarchy.",
            "The conflict must be referred to the High Court for an administrative interpretation before issuing the report."
        ],
        0,
        "Under the principle of lex specialis derogat legi generali (specific rules override general rules) affirmed in APS 34, standards specific to a particular practice area take precedence over APS 34 in case of conflict.",
        "APS 34 establishes baseline general practice; specialized standards govern domain-specific calculations."
    )

    # 3
    add(
        "APS 34, Section 1.6 (Drafting Conventions: 'Must' vs 'Should')",
        "Under Section 1.6 of APS 34, how does the standard legally and operationally distinguish between the terms 'Must' and 'Should'?",
        [
            "'Must' imposes an absolute, unconditional requirement where departure is never permitted unless conflicting with law; 'Should' indicates standard expected practice where departure is permitted only if following it produces inappropriate or misleading results, requiring documentation and disclosure.",
            "'Must' applies only to Appointed Actuaries, while 'Should' applies only to external consulting actuaries.",
            "'Must' indicates an aspirational industry best practice, while 'Should' is mandatory under all circumstances.",
            "'Must' and 'Should' are interchangeable stylistic synonyms carrying identical legal weight under the standard."
        ],
        0,
        "Section 1.6 defines 'Must' as an absolute obligation (failure to follow = non-compliance unless unlawful), whereas 'Should' establishes a rebuttable presumption (departures require documented justification and report disclosure).",
        "A foundational exam concept: 'Must' is mandatory without exception; 'Should' requires documented rationale and disclosure if departed from."
    )

    # 4
    add(
        "APS 34, Section 1.6 (The Three Gateways to Full Compliance)",
        "Under what conditions is an actuary deemed to be in 100% full compliance with APS 34 even when they depart from specific guidance contained in the standard?",
        [
            "When the departure is compelled by conflicting statutory law, or by a specific practice-area APS, or when departing from a 'should' guidance with documented rationale and report disclosure of the departure and its financial effect.",
            "Whenever the commercial client signs an indemnity waiver releasing the actuary from professional standards.",
            "Whenever following the guidance would cause the insurer to fail statutory solvency margins.",
            "Departures from APS 34 are never legally permitted under any circumstances."
        ],
        0,
        "APS 34 establishes three legitimate gateways to compliance: (1) statutory conflict, (2) specific practice standard precedence, or (3) documented and disclosed departure from a 'should' requirement.",
        "Client contracts or commercial convenience can never justify non-compliance with actuarial standards."
    )

    # 5
    add(
        "APS 34, Para 2.1 (Written Terms of Reference)",
        "Under APS 34 Para 2.1, what is the mandatory requirement regarding the Terms of Reference (ToR) for an actuarial engagement?",
        [
            "The actuary must confirm written terms of reference with the principal before starting work, clearly establishing the scope, intended users, role of the actuary, data access, and constraints.",
            "A verbal understanding between the actuary and the client's finance director is legally sufficient for engagements under Rs. 25 Lakhs.",
            "Terms of reference are mandatory only for peer reviewers, but optional for lead statutory actuaries.",
            "The actuary may draft the terms of reference unilaterally and file them confidentially without client confirmation."
        ],
        0,
        "Para 2.1 mandates written Terms of Reference prior to starting work, defining scope, intended users, constraints, and deliverables to avoid expectation gaps and misunderstandings.",
        "Written ToR is a vital safeguard that establishes the legal and professional boundaries of the assignment."
    )

    # 6
    add(
        "APS 34, Para 2.3 (Reliance on Others & Disclaimers)",
        "An actuary performs an employee gratuity valuation relying entirely on employee demographic records provided by the client's HR department, without performing independent audits of source files. Under APS 34 Para 2.3, what MUST the actuary do in their report?",
        [
            "Explicitly disclose the reliance on client-provided data, identify the source, and disclose any limitations or disclaimers of responsibility in the actuarial report.",
            "State in the report that the actuary has independently verified all underlying employee payroll slips.",
            "Omit all references to data sources to prevent client trade secrets from being compromised.",
            "Actuaries are strictly prohibited from relying on third-party or client-provided data under all circumstances."
        ],
        0,
        "Under Para 2.3 and Section 3.2.2(b), an actuary may rely on information provided by others, but MUST explicitly disclose the reliance, identify the source, and state the extent of any disclaimer of responsibility in the report.",
        "Actuaries frequently rely on client data; full transparency regarding reliance boundaries is legally mandatory."
    )

    # 7
    add(
        "APS 34, Para 2.4 (Materiality Threshold from User Perspective)",
        "Under APS 34 Para 2.4, how must an actuary evaluate whether an omission, understatement, or error in an actuarial calculation is 'material'?",
        [
            "Materiality must be evaluated strictly from the perspective of the intended users: an item is material if it could reasonably influence the decisions or assessments of intended users.",
            "An error is material only if it exceeds a flat monetary threshold of one crore rupees (Rs. 1,00,00,000).",
            "Materiality is determined solely by the actuary's firm-level professional indemnity deductible limit.",
            "Any mathematical variance exceeding 0.05% of net profit is automatically material."
        ],
        0,
        "Under Para 2.4, materiality is judged from the perspective of the intended users. If an omission or misstatement could reasonably influence the economic decisions or risk assessments of intended users, it is material.",
        "Materiality is contextual and user-centric, not an arbitrary flat rupee amount."
    )

    # 8
    add(
        "APS 34, Para 2.5 (Data Quality & Reconciliation)",
        "An actuary reviewing insurance claims data discovers significant missing date-of-loss fields and evident data corruption in historical accident cohorts. Under APS 34 Para 2.5, how should the actuary proceed?",
        [
            "Review data for completeness and consistency, apply appropriate adjustments or proxy assumptions if feasible, and prominently disclose the data deficiencies, adjustments, and resulting limitations in the actuarial report.",
            "Silently remove the corrupted cohort rows from the reserving model without disclosing the modification.",
            "Proceed with the valuation using corrupted data while obtaining a signed liability waiver from the chief claims manager.",
            "Certify the data as complete and accurate to avoid delays in financial reporting deadlines."
        ],
        0,
        "Under Para 2.5 and Section 3.2.2(d), actuaries must review data quality. If adjustments or proxy assumptions are applied, the deficiencies, adjustments, and their impact on uncertainty must be disclosed in the report.",
        "Silent deletion or false certifications of corrupted data constitute gross professional negligence."
    )

    # 9
    add(
        "APS 34, Paras 2.6 - 2.8 (Assumption Setting & Reasonableness in Aggregate)",
        "When setting actuarial assumptions for liability valuation, what dual standard must an actuary satisfy under APS 34 Para 2.7?",
        [
            "Each assumption must be individually justifiable AND the assumptions must be reasonable in the aggregate, ensuring that multiple conservative margins do not compound into an absurd distortion.",
            "Assumptions only need to be justifiable in the aggregate; individual assumptions may be arbitrary or contradictory.",
            "Every individual assumption must be calibrated to the 99.5th percentile worst-case historical scenario.",
            "Assumptions must be set strictly by the client's finance director, with the actuary serving only as a calculating agent."
        ],
        0,
        "Under Para 2.7, assumptions set by the actuary must be justifiable individually AND reasonable in the aggregate. Compounding multiple conservative margins can distort financial reality and mislead users.",
        "Both individual reasonableness and aggregate coherence are mandatory under APS 34."
    )

    # 10
    add(
        "APS 34, Para 2.8 (Client-Prescribed Assumptions)",
        "A corporate pension client instructs an actuary to adopt a 12% annual salary inflation assumption that the actuary considers unrealistically low compared to recent historical trends. Under APS 34 Para 2.8, how must the actuary handle this prescribed assumption?",
        [
            "The actuary must disclose in the report that the assumption was prescribed by the client, identify who prescribed it, disclose their stated rationale, and explain the financial impact on results.",
            "The actuary must silently adopt the assumption as their own professional estimate to preserve client relationship.",
            "The actuary must refuse to issue any actuarial report and resign from the engagement immediately.",
            "The actuary must alter historical demographic records to artificially force the 12% assumption to fit the model."
        ],
        0,
        "Under Para 2.8 and Section 3.2.2(g), where an assumption is prescribed by the principal that the actuary cannot professionally support, the actuary must disclose who prescribed it, their rationale, and the financial impact on the valuation results.",
        "Transparency protects intended users from assuming the prescribed figure represents the actuary's independent expert judgment."
    )

    # 11
    add(
        "APS 34, Para 2.10 (Model Governance: Independent Validation)",
        "Under APS 34 Para 2.10, what is the mandatory structural governance control required for complex financial and reserving models?",
        [
            "Model validation and testing must be performed by individuals who are independent of model development, with formal change control procedures that log all modifications and allow reversal.",
            "The model developer may validate their own spreadsheets provided they sign a self-certification statement.",
            "Model validation is mandatory only if the model is coded in an open-source programming language.",
            "Change control logs are required only when models are deployed in cloud computing environments."
        ],
        0,
        "Para 2.10 mandates rigorous model governance: model validation must be conducted by individuals independent of model development, with documented change control preventing unauthorized edits and logging all changes.",
        "Self-validation by model developers creates self-review bias and violates model governance standards."
    )

    # 12
    add(
        "APS 34, Para 2.13 (Subsequent Events Handling)",
        "Between the balance sheet valuation date (31 March) and the report signing date (15 May), a severe earthquake causes catastrophic property damage to an insurer's insured portfolio. Under APS 34 Para 2.13, how must the actuary treat this subsequent event?",
        [
            "Evaluate whether the subsequent event materially alters financial reality, and disclose the nature of the event and an estimate of its financial effect in the report.",
            "Disregard the event completely because it occurred outside the financial accounting reporting year.",
            "Back-date the actuarial valuation signature to 30 March to avoid regulatory disclosure requirements.",
            "Adjust the 31 March balance sheet reserves directly without disclosing that the event occurred in May."
        ],
        0,
        "Under Para 2.13 and Section 3.2.2(k), material subsequent events occurring between the calculation date and report release date that would influence intended users must be disclosed with estimated financial effects.",
        "Ignoring material post-balance-sheet catastrophes misleads intended users on solvency."
    )

    # 13
    add(
        "APS 34, Para 2.14 (The Peer Replicability Documentation Test)",
        "What is the statutory and professional benchmark mandated by APS 34 Para 2.14 for determining whether actuarial documentation is legally sufficient?",
        [
            "The documentation is sufficient ONLY IF another actuary qualified in the same practice area can review the files, understand the methodology, replicate the calculations, and evaluate the reasonableness of all professional judgments.",
            "The documentation is sufficient if the corporate client confirms written satisfaction with the final valuation figure.",
            "The documentation is sufficient if it contains at least one hundred pages of mathematical appendices.",
            "Only the original certifying actuary needs to be able to decipher the model logic and parameter inputs."
        ],
        0,
        "Para 2.14 establishes the famous 'Peer Replicability Test': working papers and models must be documented to a standard where another qualified actuary in the same field could replicate calculations and evaluate professional judgments.",
        "A cornerstone concept of actuarial professionalism: personal idiosyncratic working files that no other actuary can replicate fail the statutory documentation test."
    )

    # 14
    add(
        "APS 34, Section 3.2.2 (The 11 Mandatory Report Disclosures)",
        "Under Section 3.2.2 of APS 34, how many specific mandatory disclosure categories are prescribed to be included in an actuarial report whenever applicable?",
        [
            "Exactly eleven (11) mandatory disclosure categories (items a through k), covering deviations, reliance on others, data adjustments, prescribed assumptions, model limitations, and subsequent events.",
            "Exactly five (5) disclosures covering date, client name, actuary name, fee amount, and final reserve.",
            "Twenty-four (24) disclosures corresponding to the twenty-four sections of the Insurance Act 1938.",
            "Mandatory disclosures are not enumerated in APS 34; disclosure content is left entirely to individual discretion."
        ],
        0,
        "Section 3.2.2 lists exactly 11 distinct disclosure categories (a through k) that an actuarial report must address whenever applicable to provide full transparency to intended users.",
        "These 11 disclosures ensure intended users understand constraints, reliances, departures, and data limitations."
    )

    # 15
    add(
        "APS 34, Section 3.1 (Communication to Intended Users)",
        "Under APS 34 Section 3.1, who are considered the 'intended users' of an actuarial communication or report?",
        [
            "The principal (client/employer) and any other party whom the actuary identified in the Terms of Reference or report as a legitimate user of the actuarial findings.",
            "Any third-party investor who obtains an unauthorized leaked copy of the report through financial news media.",
            "Exclusively the statutory financial auditor appointed under the Companies Act 2013.",
            "Any competitor insurance company operating in the same domestic market segment."
        ],
        0,
        "Section 3.1 defines intended users as the principal and any other parties specifically recognized by the actuary in the terms of reference or report as intended recipients of the actuarial findings.",
        "Actuaries owe professional duty of care to intended users, not to unforeseen third parties relying on unauthorized leaked drafts."
    )

    # 16
    add(
        "APS 34, Section 3.1.2 (Unintended Users & Distribution Restrictions)",
        "To prevent unintended third parties from inappropriately relying on specialized actuarial findings, what operational control should an actuary implement under APS 34?",
        [
            "Include an explicit distribution limitation and user restriction clause in the report stating that the report is prepared solely for the principal and intended users, disclaiming liability to third parties.",
            "Refuse to provide a written report and deliver all valuation results exclusively through verbal phone calls.",
            "File a copyright patent application for the valuation report with the Indian Patent Office.",
            "Require the client to pay an indemnity deposit of Rs. 10 Lakhs before releasing the report."
        ],
        0,
        "Section 3.1.2 advises actuaries to include clear distribution limitation statements and disclaimers of liability to unintended users, preventing inappropriate external reliance.",
        "Distribution clauses define the legal boundaries of duty of care to prevent third-party liability."
    )

    # 17
    add(
        "APS 34, Para 2.2 (Selection of Actuarial Methodology)",
        "Under APS 34 Para 2.2, when selecting an actuarial method or model for a specific engagement, what criteria should the actuary consider?",
        [
            "The methodology must be appropriate to the purpose, proportional to the nature and complexity of the underlying risks, and compatible with the quality and granularity of available data.",
            "The actuary must always select the most mathematically complex stochastic algorithm available in the literature.",
            "The actuary should select the methodology that produces the lowest statutory liability for the insurer.",
            "The methodology must be chosen by a majority vote of the client's board of directors."
        ],
        0,
        "Para 2.2 emphasizes proportionality and fitness for purpose: methods must fit the nature of the engagement, the materiality of risks, and the characteristics of available data.",
        "Methodology selection is an actuarial responsibility governed by suitability, data availability, and proportionality."
    )

    # 18
    add(
        "APS 34, Para 2.11 (Sensitivity and Scenario Analysis)",
        "Why does APS 34 Para 2.11 emphasize the performance of sensitivity testing and scenario analysis in actuarial work?",
        [
            "To understand and communicate the sensitivity of results to key assumptions and parameter variations, highlighting the degree of inherent uncertainty to intended users.",
            "To enable the client to select the most commercially convenient valuation reserve figure from a menu of options.",
            "To fulfill a mechanical procedural checklist that has no bearing on professional opinions.",
            "To eliminate all financial and economic uncertainty from the valuation balance sheet."
        ],
        0,
        "Para 2.11 highlights that actuarial estimates involve uncertainty; sensitivity analysis identifies key drivers of risk and helps intended users comprehend the potential variability of future outcomes.",
        "Sensitivity testing is an essential communication tool for illustrating uncertainty."
    )

    # 19
    add(
        "APS 34, Para 2.9 (Internal Consistency of Assumptions)",
        "When setting financial assumptions involving discount rates, salary growth, inflation, and investment returns, what requirement does APS 34 Para 2.9 impose?",
        [
            "The economic assumptions must be internally consistent with one another and reflect coherent macroeconomic relationships (e.g., real discount rate vs inflation).",
            "Each financial assumption must be calibrated completely independently using unrelated macroeconomic datasets.",
            "The actuary must assume zero inflation if salary growth assumptions are positive.",
            "Financial assumptions must remain completely static across ten consecutive financial years."
        ],
        0,
        "Para 2.9 requires internal consistency among assumptions: economic variables (discount rates, price inflation, wage growth, investment returns) must reflect coherent economic linkages.",
        "Internally inconsistent assumptions (e.g. 10% inflation with a 4% nominal discount rate) produce illogical and distorted liability calculations."
    )

    # 20
    add(
        "APS 34, Section 3.2.1 (Clarity of Actuarial Reports)",
        "Under APS 34 Section 3.2.1, what core standard must an actuary uphold regarding the style and language of an actuarial communication?",
        [
            "The communication must be clear, comprehensible, and organized in a manner that enables intended users to understand the implications of the results and the risks involved.",
            "The report must use dense mathematical notation to demonstrate intellectual rigor to non-technical readers.",
            "The report should omit technical appendices to keep total length under five pages.",
            "The language must be drafted exclusively in archaic legal phrasing to minimize professional liability."
        ],
        0,
        "Section 3.2.1 emphasizes that reports must be clear, well-structured, and intelligible to their intended audience, bridging the technical gap so users can make informed decisions.",
        "Obscure or impenetrable drafting fails the professional communication standard."
    )

    # 21
    add(
        "APS 34, Para 2.12 (Peer Review / Independent Review)",
        "Under APS 34 Para 2.12, what is the role and importance of an independent peer review before an actuarial work product is finalized?",
        [
            "An independent peer review provides objective technical scrutiny of data, methodologies, assumptions, and reporting, reducing the risk of material error and bias.",
            "The peer reviewer assumes 100% of the legal liability for the report, releasing the lead actuary from statutory responsibility.",
            "Peer review is a commercial marketing tool used solely to justify premium billing rates to clients.",
            "Peer review is mandatory only if the lead actuary has less than two years of post-qualification experience."
        ],
        0,
        "Para 2.12 underscores peer review as a vital quality assurance control: an independent qualified review helps identify errors, challenge assumptions, and ensure compliance with standards.",
        "Peer review enhances report credibility and mitigates individual modeling blind spots."
    )

    # 22
    add(
        "APS 34, Section 3.2.2(a) (Conflict of Interest Disclosure)",
        "An actuary prepares a statutory valuation report for a firm where the actuary's spouse serves as Chief Financial Officer. Under APS 34 Section 3.2.2(a), what MUST be disclosed in the report?",
        [
            "The actuary must clearly disclose any conflict of interest, personal relationship, or financial interest that could impair, or be perceived to impair, their professional objectivity.",
            "The actuary is prohibited from mentioning family relationships to protect personal privacy.",
            "The actuary must disclose the conflict only if the spouse's equity holdings exceed 50% of the company.",
            "The conflict disclosure can be omitted if the valuation result is reviewed by an actuarial analyst."
        ],
        0,
        "Section 3.2.2(a) requires transparent disclosure of any actual or potential conflicts of interest in the report so intended users can assess the objectivity of the actuarial advice.",
        "Concealing material conflicts of interest in valuation reports violates both APS 34 and the PCS."
    )

    # 23
    add(
        "APS 34, Section 3.2.2(i) (Disclosure of Statutory Departures)",
        "Where an actuary is forced to depart from a specific provision of APS 34 because it conflicts with a mandatory IRDAI regulation, what is the reporting requirement under Section 3.2.2(i)?",
        [
            "The actuary must disclose the specific standard departed from, cite the conflicting statutory provision, explain the rationale, and quantify or explain the financial effect of the departure.",
            "The actuary must silently obey the IRDAI regulation without mentioning APS 34 in the report.",
            "The actuary must obtain a written exemption certificate from the President of the Institute before signing.",
            "The actuary must issue an adverse opinion declaring the insurance company's financial statements invalid."
        ],
        0,
        "Section 3.2.2(i) requires full transparency when statutory law overrides standards: the report must disclose the departure, the governing law, and the impact on the actuarial results.",
        "Law prevails over professional standards, but the departure must be documented and disclosed."
    )

    # 24
    add(
        "APS 34, Para 2.10 (Vendor Software & Third-Party Models)",
        "An actuarial team utilizes a commercial proprietary black-box software package for capital modeling. Under APS 34 Para 2.10, what is the actuary's professional obligation?",
        [
            "The actuary remains responsible for the work product and must satisfy themselves that the software is appropriate, understand its underlying methodology and limitations, and validate its outputs.",
            "The actuary is completely absolved of all modeling errors because liability rests exclusively with the commercial software vendor.",
            "The actuary must decompile and rewrite the vendor's source code in Python before running calculations.",
            "Actuaries are forbidden from using third-party commercial software for statutory reporting."
        ],
        0,
        "Para 2.10 makes clear that using external vendor models does not delegate professional responsibility: the actuary must understand the model's logic, parameters, limitations, and validate its fitness.",
        "Blind reliance on 'black-box' vendor models fails professional due diligence requirements."
    )

    # 25
    add(
        "APS 34, Section 3.1.3 (Draft vs Final Actuarial Communications)",
        "An actuary shares an interim preliminary spreadsheet with a client's finance team marked 'DRAFT - For Discussion Only'. Under APS 34, how should preliminary communications be governed?",
        [
            "The actuary should clearly identify preliminary or draft communications, state that they are subject to change, and caution intended users against relying on them for final financial decisions.",
            "Draft communications are legally binding contracts that cannot be amended in the final report.",
            "Preliminary drafts are exempt from all professional standards and can contain arbitrary figures.",
            "Actuaries are strictly prohibited from sharing draft findings with clients prior to final report signing."
        ],
        0,
        "Preliminary communications must be clearly flagged as drafts with explicit caveats warning against premature reliance, preventing misunderstandings before final validation.",
        "Draft labeling protects both the client and the practitioner during iterative analysis."
    )

    # 26
    add(
        "APS 34, Co-Signing Actuaries & Shared Liability",
        "Two qualified actuaries jointly sign a statutory valuation report. Under professional standards and APS 34, how is professional responsibility shared between them?",
        [
            "Both actuaries share joint and several professional responsibility for the entire report, unless the report explicitly defines a clear division of responsibility between them.",
            "Only the actuary who drafted the mathematical spreadsheets bears liability; the second signature is purely ceremonial.",
            "The senior partner bears 100% of the liability while the junior partner is completely exempt.",
            "Co-signing an actuarial report is prohibited under the Actuaries Act 2006."
        ],
        0,
        "Co-signatories share full professional responsibility for the entire actuarial communication unless a specific, documented division of scope is disclosed in the report.",
        "Signing an actuarial report carries personal professional accountability that cannot be treated as ceremonial."
    )

    # 27
    add(
        "APS 34, Discovery of Material Errors Post-Issuance",
        "Three weeks after releasing a final actuarial report, the actuary discovers a coding error that overstated the client's asset-liability surplus by Rs. 50 Crores. Under APS 34 and professional ethics, what MUST the actuary do?",
        [
            "Promptly notify the principal and intended users of the error, explain its nature and financial impact, and issue a revised or corrected communication as appropriate.",
            "Conceal the error until the following financial year's annual valuation cycle.",
            "Destroy all working spreadsheets and claim that the client provided erroneous data.",
            "Resign immediately from the Institute to avoid disciplinary investigation."
        ],
        0,
        "When a material error is discovered post-release, professional integrity requires immediate notification to intended users and issuance of corrected results to prevent misinformed decisions.",
        "Prompt correction and disclosure uphold public trust; concealment constitutes grave professional misconduct."
    )

    # 28
    add(
        "APS 34, Executive Summaries & Balanced Presentation",
        "When an actuarial report includes an executive summary for corporate board members, what requirement does APS 34 impose regarding its balance?",
        [
            "The executive summary must fairly and accurately reflect the findings of the main report, including material caveats, uncertainties, and limitations, without being selectively biased.",
            "The executive summary should present only optimistic conclusions to avoid alarming the board.",
            "The executive summary may omit all references to uncertainty if the final reserve is within statutory limits.",
            "Executive summaries are legally prohibited in actuarial reports to force readers to read all technical appendices."
        ],
        0,
        "Executive summaries must be balanced and fair, conveying critical caveats and uncertainties alongside key figures so decision-makers receive a true, unvarnished picture.",
        "Selective cherry-picking in executive summaries misleads non-technical board members."
    )

    # 29
    add(
        "APS 34, Archiving & Version Control of Working Files",
        "Under the model governance and documentation provisions of APS 34, what must an actuary ensure regarding the archiving of model versions and datasets used for final reports?",
        [
            "The exact versions of data files, model code, parameter settings, and run logs used to produce the final report must be archived and protected against overwriting to ensure replicability.",
            "Model files can be overwritten as soon as newer monthly updates are processed.",
            "Working files only need to be preserved if the client pays an archiving fee.",
            "Archiving is required only for models built in mainframe COBOL software."
        ],
        0,
        "To satisfy the peer replicability test (Para 2.14), the exact data snapshot, model version, and configuration used for the signed report must be securely archived.",
        "Overwriting working models destroys the evidentiary trail required for peer review and statutory audit."
    )

    # 30
    add(
        "APS 34, Expressing an Actuarial Opinion vs Factual Summary",
        "How must an actuary distinguish between factual data and professional opinions within an actuarial report under APS 34?",
        [
            "The report must clearly distinguish between factual statements (e.g. historical claims paid) and actuarial opinions, assumptions, or projections, indicating where professional judgment has been applied.",
            "Factual data and actuarial projections must be blended seamlessly so users cannot differentiate them.",
            "Actuarial reports must contain only mathematical formulas without any narrative interpretation.",
            "Actuaries are legally prohibited from expressing opinions on future financial events."
        ],
        0,
        "Clear reporting requires distinguishing objective historical facts from subjective assumptions, models, and professional estimates so users understand the degree of judgment involved.",
        "Confusing historical facts with prospective estimates obscures the boundaries of uncertainty."
    )

    return qs

if __name__ == "__main__":
    qs = get_aps34_questions()
    print(f"Generated {len(qs)} APS 34 questions successfully.")
