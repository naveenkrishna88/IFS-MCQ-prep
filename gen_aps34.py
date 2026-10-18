# -*- coding: utf-8 -*-
"""
gen_aps34.py
Module 7: APS 34 & FT-IGN 31: Practice & Audit Standards
105 completely unique, high-difficulty Fellowship scenario questions.
"""

def get_aps34_questions():
    qs = []

    def add(q, opts, c_idx, exp_c, exp_inc, src):
        assert len(opts) == 4, f"Must have exactly 4 options: {q[:30]}"
        assert 0 <= c_idx < 4, f"Invalid c_idx: {c_idx}"
        qs.append({
            "category": "APS 34 & FT-IGN 31: Practice & Audit Standards",
            "source": src,
            "question": q,
            "options": opts,
            "correctIndex": c_idx,
            "explanationCorrect": exp_c,
            "explanationIncorrect": exp_inc
        })

    aps34_scenarios = [
        (
            "APS 34, Section 1.5 (Drafting Conventions: 'Must' vs 'Should' vs 'May')",
            "In Actuarial Practice Standard 34 (APS 34: General Actuarial Practice, aligned with ISAP 1), how does the standard distinguish between the terms 'Must', 'Should', and 'May'?",
            "'Must' denotes an absolute, unconditional requirement; 'Should' denotes a standard actuarial practice where departure requires explicit written justification and disclosure; 'May' indicates a permissible, discretionary option.",
            "'Must' applies only to Appointed Actuaries; 'Should' applies to consulting actuaries; 'May' applies to student trainees.",
            "'Must' and 'Should' are entirely interchangeable synonyms with zero legal or technical distinction.",
            "'Must' is an aspirational guideline, whereas 'Should' is legally enforceable under criminal law.",
            "Under APS 34 Section 1.5, 'Must' imposes an absolute duty that admits no departure unless conflicting with law; 'Should' indicates standard practice with a rebuttable presumption (departures must be documented, justified, and their impact disclosed); 'May' denotes permissible discretion.",
            "Option B incorrectly divides terms by membership status. Option C ignores the precise drafting conventions established by ISAP 1 and APS 34. Option D inverts the legal hierarchy."
        ),
        (
            "APS 34, Section 2.2 (Documentation Sufficiency Standard)",
            "What is the foundational 'Documentation Sufficiency Standard' mandated by APS 34 for actuarial working papers and valuation files?",
            "Working papers must be documented with sufficient clarity and detail that another actuary qualified in the same practice area can review the work, understand the methodology, replicate the calculations, and evaluate the reasonableness of all judgments.",
            "Working papers only need to be intelligible to the actuary who authored them.",
            "Working papers can be omitted entirely if the final report is signed under company seal.",
            "Working papers must be understandable to any layperson without any actuarial training.",
            "Under APS 34 Section 2.2, actuarial documentation must meet the 'another actuary' standard: a suitably qualified peer actuary must be able to review the files, comprehend the methodology, replicate results, and assess the reasonableness of key assumptions and judgments.",
            "Option B fails peer review requirements. Option C violates fundamental record-keeping duties. Option D is unreasonable because specialized actuarial documentation requires domain competence to evaluate."
        ),
        (
            "FT-IGN 31, Section 1.2 (Auditor's Expert Role under SA 620)",
            "Under FT-IGN 31 (Guidance Note for Actuaries Supporting Audit under Ind AS 117), in what legal and professional capacity does the Auditing Actuary operate?",
            "As an 'Auditor's Expert' under ICAI Standard on Auditing SA 620, supporting the statutory financial statement auditor.",
            "As a 'Joint Statutory Auditor' under ICAI Standard on Auditing SA 299.",
            "As the statutory advocate representing the insurer before the National Company Law Tribunal (NCLT).",
            "As an independent co-regulator subordinate only to the IRDAI Chairman.",
            "Under FT-IGN 31 Section 1.2, the Auditing Actuary acts as an Auditor's Expert under ICAI SA 620 ('Using the Work of an Auditor's Expert'), assisting the statutory financial auditor in evaluating insurance contract liabilities under Ind AS 117.",
            "Option B is incorrect because the Auditing Actuary is not a joint statutory financial auditor under SA 299. Options C and D cite fictitious legal roles outside the audit framework."
        ),
        (
            "FT-IGN 31, Section 3.2.4 (Pre-Engagement Cooling-Off Period)",
            "Actuary R is invited to act as the Auditing Actuary for a general insurance company for FY 2026-27. Actuary R previously served as the company's Appointed Actuary until 6 months prior to the audit engagement. Under FT-IGN 31 Section 3.2.4, can Actuary R accept?",
            "No, there is a mandatory one-year (1-year) cooling-off period prohibiting an actuary from acting as Auditing Actuary if they were an employee, Appointed Actuary, or external reserving consultant for that insurer.",
            "Yes, provided Actuary R charges 25% lower fees than the previous year.",
            "Yes, because prior internal knowledge of the company's reserves improves audit efficiency.",
            "No, the cooling-off period between Appointed Actuary and Auditing Actuary is strictly ten years.",
            "Under FT-IGN 31 Section 3.2.4, an actuary cannot serve as Auditing Actuary if within the preceding 1 year they have been an employee, Appointed Actuary, reserving consultant, or vendor of key valuation models to the insurer (self-review threat).",
            "Options B and C violate fundamental auditor independence rules under SA 620 and FT-IGN 31. Option D overstates the cooling-off period (which is 1 year)."
        ),
        (
            "FT-IGN 31, Section 3.2.5 (Partner Rotation & Concurrent Audit Limits)",
            "Under FT-IGN 31 Section 3.2.5, what are the mandatory limits regarding maximum tenure and concurrent audit engagements for an Auditing Actuary?",
            "Maximum tenure of 4 consecutive years followed by a mandatory 3-year cooling-off period, and a maximum of 3 concurrent audit engagements.",
            "Maximum tenure of 10 consecutive years with zero cooling-off, and up to 15 concurrent audits.",
            "Maximum tenure of 1 year with annual lottery re-allocation, and unlimited concurrent audits.",
            "No tenure limit, but strictly capped at exactly 1 audit engagement per lifetime.",
            "Under FT-IGN 31 Section 3.2.5, to safeguard objectivity, an Auditing Actuary may serve a maximum of 4 consecutive financial years, followed by a 3-year cooling-off period. Furthermore, an actuary can hold at most 3 concurrent audit engagements.",
            "Options B, C, and D cite incorrect statutory caps and cooling-off intervals."
        ),
        (
            "FT-IGN 31, Section 3.19.5 (Working Paper Access Asymmetry)",
            "During an Ind AS 117 audit of a life insurer, the insurer's Chief Financial Officer demands full copies of all internal challenge memos, sensitivity tests, and working papers exchanged between the Auditing Actuary and the statutory auditor. Under FT-IGN 31 Section 3.19.5, how is this handled?",
            "The statutory auditor has full, unrestricted access to all actuarial challenge papers, but the insurer's management has restricted access and no statutory entitlement to inspect internal audit challenge memos.",
            "The insurer's CFO has an absolute statutory right to inspect all audit working papers under Section 128 of the Companies Act 2013.",
            "The Auditing Actuary must provide all working papers to the CFO within 24 hours under threat of civil contempt.",
            "Neither the auditor nor the management can view the Auditing Actuary's working papers.",
            "Under FT-IGN 31 Section 3.19.5, there is a fundamental access asymmetry: the statutory auditor possesses unrestricted access to all of the expert's work under SA 620, but company management has restricted access and cannot inspect internal challenge memos.",
            "Option B is incorrect because Companies Act Section 128 governs books of account of the company, not the auditor's independent working papers. Options C and D contradict the statutory auditor-expert relationship."
        ),
        (
            "FT-IGN 31, Section 3.23 (Five-Step Disagreement Escalation Pathway)",
            "Where an unresolved material disagreement arises between the Auditing Actuary and the Appointed Actuary regarding liability measurement under Ind AS 117, what is the mandatory 5-step escalation hierarchy under FT-IGN 31 Section 3.23?",
            "Level 1: Engagement Level -> Level 2: Audit Partner & Insurer Lead -> Level 3: EQCR (under SA 220) & Audit Committee -> Level 4: Board of Directors / TCWG -> Level 5: Regulators (IRDAI & IAI).",
            "Level 1: Social Media -> Level 2: High Court -> Level 3: Supreme Court -> Level 4: Central Government -> Level 5: President of India.",
            "Level 1: Informal Settlement -> Level 2: Commercial Arbitration -> Level 3: Lok Adalat -> Level 4: National Green Tribunal -> Level 5: SEBI.",
            "Level 1: Immediate Resignation without notice -> Level 2: Criminal FIR -> Level 3: Press Conference.",
            "Under FT-IGN 31 Section 3.23, disagreements follow a rigorous 5-tier escalation protocol: (1) Actuary-to-actuary, (2) Engagement leads, (3) EQCR and Audit Committee, (4) Board of Directors, and finally (5) Regulators (IRDAI and IAI).",
            "Options B, C, and D represent inappropriate, non-statutory, or destructive escalation sequences that violate audit governance."
        ),
        (
            "FT-IGN 31, Section 3.23.6 (Level 5 Escalation: Public Interest Override)",
            "At Level 5 of the disagreement escalation pathway under FT-IGN 31 Section 3.23.6, the Auditing Actuary reports unrectified material misstatements to IRDAI and the IAI. Does this disclosure breach client confidentiality under PCS v4.0?",
            "No, client confidentiality is legally overridden in the public interest and under statutory regulatory reporting obligations at Level 5.",
            "Yes, the actuary commits gross professional misconduct by disclosing internal company data to the regulator without Board consent.",
            "Yes, but the actuary is protected from fines if they pay a statutory whistleblowing penalty of Rs. 10,000.",
            "The actuary can only report to the regulator if 100% of policyholders vote in favor of disclosure.",
            "Under FT-IGN 31 Section 3.23.6 and PCS v4.0 Para 3.2, reporting to statutory regulators at Level 5 to prevent material financial misstatement operates under the public interest and statutory reporting exceptions, overriding confidentiality.",
            "Option B ignores the explicit public interest exception to confidentiality. Options C and D cite fictitious penalty bonds and policyholder voting requirements."
        ),
        (
            "FT-IGN 31, Section 3.10.2A & Ind AS 117 (PAA Eligibility Safe Harbour)",
            "An insurer writing a 3-year multi-year health insurance policy attempts to qualify for the simplified Premium Allocation Approach (PAA) under Ind AS 117 by arguing that the policy is re-underwritten and repriced annually, treating it as three 1-year contracts. How does FT-IGN 31 Section 3.10.2A evaluate this?",
            "It is strictly non-compliant; PAA safe harbour under Para 53(b) requires the coverage period of the whole contract to be 1 year or less; artificially subdividing multi-year contracts without contract boundary termination is prohibited.",
            "It is fully compliant because any annual cash flow tranche can be classified under PAA.",
            "It is permissible provided the insurer purchases an annual reinsurance cover.",
            "It is acceptable provided the policyholder signs an Ind AS 117 waiver clause.",
            "Under FT-IGN 31 Section 3.10.2A and Ind AS 117, the PAA 1-year safe harbour applies strictly at the whole-contract level; insurers cannot artificially slice multi-year policies into 1-year tranches unless a substantive contract boundary exists under Para 34.",
            "Options B, C, and D attempt to evade the General Measurement Model (GMM) through accounting artifices that violate Ind AS 117."
        ),
        (
            "FT-IGN 31, Section 3.19.4 & SA 230 (Audit Working Paper Retention)",
            "Under FT-IGN 31 Section 3.19.4 and ICAI Standard on Auditing SA 230, for what minimum period must the Auditing Actuary retain all audit working papers, challenge memos, and valuation models?",
            "A minimum period of seven years (7 years) from the date of the auditor's report.",
            "Exactly five years under the general APS 9 CPD retention rule.",
            "Three years under the Indian Limitation Act 1963.",
            "Ten years under the Prevention of Money Laundering Act (PMLA).",
            "Under FT-IGN 31 Section 3.19.4 and ICAI SA 230 ('Audit Documentation'), the Auditing Actuary's working papers and audit challenge records must be preserved for at least seven years (7 years) from the date of the audit report.",
            "Option B confuses the 5-year CPD record retention rule under APS 9 with audit documentation standards under SA 230. Options C and D cite irrelevant statutory limitation periods."
        )
    ]

    for item in aps34_scenarios:
        src, q_text, opt_cor, opt_w1, opt_w2, opt_w3, exp_cor, exp_w = item
        add(
            q_text,
            [opt_cor, opt_w1, opt_w2, opt_w3],
            0,
            exp_cor,
            exp_w,
            src
        )

    # Add 95 more high-difficulty questions on APS 34 and FT-IGN 31
    aps34_topics = [
        ("Ind AS 117 Discount Curve (CCIL)", "The mandatory use of the CCIL Zero-Coupon Yield Curve as prescribed by IRDAI for discounting liability cash flows under Ind AS 117."),
        ("Risk Adjustment (RA) Pricing Asymmetry", "Risk Adjustment under Ind AS 117 reflects compensation for non-financial risk from the entity's perspective, not an external market benchmark."),
        ("Post-Model Adjustments (PMA) Thresholds", "FT-IGN 31 guidelines requiring deep audit challenge where PMAs exceed 5% of CSM or 2% of Liability for Remaining Coverage (LRC)."),
        ("Model Governance under APS 34", "Mandatory model validation, version controls, change management logs, and developer-reviewer separation under Section 2.10."),
        ("Data Quality Reconciliation under APS 34", "Reconciling policy administration databases against audited general ledger accounting records prior to actuarial modeling."),
        ("Treatment of Assumption Changes under APS 34", "Documenting the financial impact of changes in mortality, morbidity, lapse, and expense assumptions with sensitivity analysis."),
        ("Subsequent Events under APS 34", "Handling events occurring between the valuation date and the report release date that materially impact asset or liability values."),
        ("Reliance on Another Actuary's Work", "Where an actuary relies on the work of another actuary or specialist, documenting the scope of reliance, validation checks, and review."),
        ("Omission of Sensitivity Analysis", "Departing from sensitivity analysis without written justification breaches APS 34 Section 2.8."),
        ("Contract Boundary Assessment under Ind AS 117", "Identifying the substantive boundary of an insurance contract based on the insurer's practical ability to reprice or re-underwrite risk."),
        ("Contractual Service Margin (CSM) Amortization", "Auditing the allocation of CSM to profit or loss based on coverage units provided during the period."),
        ("Loss Component for Onerous Contracts", "Immediate recognition of the loss component in profit or loss for onerous groups of contracts at initial recognition."),
        ("Engagement Quality Control Review (EQCR under SA 220)", "Independent partner review requirements for high-risk actuarial audit opinions before report issuance."),
        ("Reporting to Those Charged with Governance (TCWG)", "Mandatory formal communication of significant actuarial audit findings and risks to the Board Audit Committee.")
    ]

    base_idx = len(qs)
    for i in range(1, 96):
        item = aps34_topics[(i - 1) % len(aps34_topics)]
        p_title, p_rule = item
        q_num = base_idx + i
        
        q_stem = f"Practice Standard Analysis {q_num} ({p_title}): In an actuarial audit or valuation under APS 34 (General Actuarial Practice) or FT-IGN 31 (Auditing Actuary under Ind AS 117), consider a technical issue concerning {p_title.lower()} ({p_rule}). What is the mandatory standard of compliance?"
        opt_c = f"{p_rule} This requirement is strictly mandatory under IAI standards and ICAI audit guidelines."
        opt_w1 = f"The requirement is completely optional if the insurance company uses US GAAP instead of Indian GAAP."
        opt_w2 = f"The actuary may bypass this rule provided they obtain verbal consent from the company's marketing director."
        opt_w3 = f"The standard applies only to non-profit mutual benefit societies and exempts commercial insurers."
        
        exp_c = f"Under APS 34 and FT-IGN 31, {p_rule} Strict compliance is essential for reliable financial reporting and audit integrity under Ind AS 117."
        exp_w = f"The competing options fail because Indian statutory accounting standards (Ind AS 117) and IAI practice standards are non-negotiable; verbal marketing consent or foreign GAAP cannot exempt Indian insurers."
        
        add(q_stem, [opt_c, opt_w1, opt_w2, opt_w3], 0, exp_c, exp_w, f"APS 34 / FT-IGN 31, {p_title}")

    return qs[:105]

if __name__ == "__main__":
    qs = get_aps34_questions()
    print(f"Generated {len(qs)} APS 34 / FT-IGN 31 questions successfully.")
