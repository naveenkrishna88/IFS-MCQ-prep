# -*- coding: utf-8 -*-
"""
build_ftign31.py - Module 8: FT-IGN 31: Auditing Actuary & Financial Reporting
Authentic, high-difficulty Fellowship MCQs covering:
- Role of Auditing Actuary as Auditor's Expert under ICAI SA 620
- Sole responsibility of statutory auditor & EQCR partner review under SA 220
- Independence safeguards: 1-year prior cooling-off & 4-year partner rotation (3-yr cooling)
- Concurrent audit engagement cap (maximum 3 insurance companies)
- Working paper access asymmetry (statutory auditor has full access; management has restricted access)
- 5-Stage dispute escalation pathway ending in regulatory reporting (IRDAI / IAI)
- Public interest override of client confidentiality at Level 5 escalation
- Ind AS 117 measurement models: GMM, PAA (1-year whole-contract safe harbour), VFA
- Prescribed discount curve: CCIL Zero-Coupon Yield Curve
- Documentation retention: 7-year audit file retention under ICAI SA 230
- Post-Model Adjustments (5% CSM / 2% LRC), transition approaches, contract boundaries
"""

CAT = "FT-IGN 31: Auditing Actuary & Financial Reporting"

def get_ftign31_questions():
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
        "FT-IGN 31, Section 1.2 & ICAI SA 620 (Auditor's Expert Role)",
        "Under FT-IGN 31 and ICAI Standard on Auditing SA 620, what is the precise statutory and legal role of an Auditing Actuary supporting an insurer's statutory financial audit?",
        [
            "The Auditing Actuary operates as an 'Auditor's Expert' assisting the statutory financial auditor; the statutory financial auditor retains sole legal responsibility for the overall audit opinion.",
            "The Auditing Actuary replaces the statutory financial auditor and signs the primary audit opinion jointly with the company secretary.",
            "The Auditing Actuary serves as an independent technical arbitrator whose determinations are legally binding on both the auditor and the regulator.",
            "The Auditing Actuary is an internal compliance officer employed by the audited insurer's risk committee."
        ],
        0,
        "Under FT-IGN 31 and ICAI SA 620, the Auditing Actuary serves as an Auditor's Expert. The statutory financial auditor relies on the actuary's technical findings, but retains sole legal responsibility for the audit opinion.",
        "The actuary does not sign the audit report itself; they provide technical challenge, review, and assurance to the financial audit team."
    )

    # 2
    add(
        "FT-IGN 31, Section 3.2.4 (Pre-Engagement 1-Year Cooling-Off Period)",
        "Actuary R is invited to serve as the Auditing Actuary for an insurance company. Within the preceding 9 months, Actuary R had served as the company's external consulting actuary advising on pricing and reserving models. Can Actuary R accept the role under FT-IGN 31 Section 3.2.4?",
        [
            "No; FT-IGN 31 mandates a strict pre-engagement cooling-off period of at least one year (1 year) if the actuary has provided valuation consulting or served as an employee/AA to the insurer.",
            "Yes, provided Actuary R establishes an internal ethical firewall within their consulting firm.",
            "Yes, because prior consulting knowledge enables a more comprehensive and efficient audit inspection.",
            "Yes, provided the Board Audit Committee issues a formal resolution approving the appointment."
        ],
        0,
        "Under Section 3.2.4, an actuary cannot accept an Auditing Actuary appointment if within the preceding 1 year they were an employee, Appointed Actuary, or provided reserving/pricing consulting, due to the severe self-review threat.",
        "Auditing one's own previous work violates the core principle of auditor independence under ICAI and IAI standards."
    )

    # 3
    add(
        "FT-IGN 31, Section 3.2.5 (Partner Rotation & Cooling-Off Timeline)",
        "Under FT-IGN 31 Section 3.2.5, what is the maximum continuous tenure for which an individual Auditing Actuary may serve for a specific insurance company, and what cooling-off period applies?",
        [
            "Maximum tenure of four (4) consecutive financial years, followed by a mandatory cooling-off period of at least three (3) consecutive years.",
            "Maximum tenure of five (5) consecutive financial years, followed by a mandatory cooling-off period of one (1) year.",
            "Maximum tenure of seven (7) consecutive years, with no mandatory cooling-off period.",
            "Tenure is unlimited provided the actuary undergoes an annual external peer review."
        ],
        0,
        "Section 3.2.5 establishes the rotation safeguard to mitigate familiarity threats: maximum continuous tenure of 4 consecutive years, followed by a mandatory 3-year cooling-off period before reappointment.",
        "The 4-year tenure and 3-year cooling-off safeguard maintains ongoing fresh, objective challenge in statutory insurance audits."
    )

    # 4
    add(
        "FT-IGN 31, Section 3.2.5 (Concurrent Engagement Ceiling)",
        "Under FT-IGN 31 Section 3.2.5, what is the maximum number of insurance or reinsurance companies for which an individual Auditing Actuary may serve as the lead signing actuary concurrently?",
        [
            "Not more than three (3) insurance or reinsurance companies concurrently.",
            "Not more than five (5) insurance companies concurrently.",
            "Not more than seven (7) companies, aligning with statutory auditor limits under the Companies Act 2013.",
            "There is no statutory cap; actuaries may accept unlimited appointments subject to firm capacity."
        ],
        0,
        "Section 3.2.5 caps concurrent engagements at a maximum of 3 insurance or reinsurance companies to prevent over-extension and ensure adequate partner time and scrutiny.",
        "Auditing statutory insurance liabilities under Ind AS 117 is highly complex and time-intensive, justifying the 3-company cap."
    )

    # 5
    add(
        "FT-IGN 31, Section 3.19.5 (Working Paper Access Asymmetry)",
        "During an Ind AS 117 statutory audit, the Chief Financial Officer (CFO) of the audited insurer demands full copies of the Auditing Actuary's internal challenge memos and private models. Under FT-IGN 31 Section 3.19.5, how is this demand treated?",
        [
            "Insurer management has RESTRICTED ACCESS and has no statutory right to inspect internal challenge memos, audit working papers, or confidential communications between the Auditing Actuary and the statutory auditor.",
            "The CFO has an unconditional statutory right to inspect all audit working papers under corporate disclosure laws.",
            "The Auditing Actuary must provide working papers provided the CFO signs a non-disclosure agreement.",
            "Working papers are joint intellectual property and must be accessible to both the insurer and the auditor."
        ],
        0,
        "Section 3.19.5 establishes the principle of Working Paper Access Asymmetry: the statutory auditor has full unfettered access, while insurer management has restricted access to preserve audit independence and prevent management interference.",
        "A heavily tested exam concept: Management cannot demand to inspect the auditor's internal challenge memoranda."
    )

    # 6
    add(
        "FT-IGN 31, Section 3.23 (Five-Stage Dispute Escalation Protocol)",
        "When an unresolved material disagreement arises between the Auditing Actuary and the Appointed Actuary regarding liability valuation under Ind AS 117, what is the formal 5-stage escalation pathway under FT-IGN 31?",
        [
            "Level 1: Working Level (Auditing Actuary & AA) -> Level 2: Audit Partner Level -> Level 3: Governance Review (EQCR & Audit Committee) -> Level 4: Board of Directors / TCWG -> Level 5: Statutory Regulators (IRDAI & IAI Disciplinary Directorate).",
            "Level 1: Appointed Actuary -> Level 2: Chief Risk Officer -> Level 3: High Court -> Level 4: Central Government -> Level 5: International Actuarial Association.",
            "Level 1: Audit Committee -> Level 2: Statutory Auditor -> Level 3: Ministry of Finance -> Level 4: IRDAI -> Level 5: Civil Court.",
            "Level 1: Informal Discussion -> Level 2: Commercial Arbitration -> Level 3: Judicial Mediation -> Level 4: Public Disclose -> Level 5: Immediate Resignation."
        ],
        0,
        "Section 3.23 provides a structured 5-stage escalation pathway moving systematically from technical working dialogue up through audit partners, board audit committee, full board, and ultimately statutory regulators.",
        "The 5-stage protocol ensures systematic governance challenge before invoking regulatory whistleblowing."
    )

    # 7
    add(
        "FT-IGN 31, Section 3.23.6 (Level 5 Escalation: Public Interest Confidentiality Override)",
        "At Level 5 of the disagreement escalation pathway under FT-IGN 31 Section 3.23.6, the Auditing Actuary reports unrectified material misstatements to IRDAI and the IAI. Does this disclosure breach client confidentiality under PCS v4.0?",
        [
            "No; client confidentiality is legally overridden in the public interest and under statutory regulatory reporting obligations at Level 5.",
            "Yes; reporting to regulators without prior board clearance is an actionable breach of client confidentiality under PCS v4.0.",
            "Yes, unless the Auditing Actuary obtains an advance court injunction protecting them from civil damages.",
            "No, but only if the disclosure is made anonymously through a sealed letter."
        ],
        0,
        "Under FT-IGN 31 Section 3.23.6 and PCS v4.0 Para 3.2, reporting to statutory regulators at Level 5 to prevent material financial misstatement operates under the public interest and statutory reporting exceptions, overriding confidentiality.",
        "Public interest and regulator reporting obligations strictly supersede client confidentiality at Level 5 escalation."
    )

    # 8
    add(
        "FT-IGN 31, Section 3.10.2A & Ind AS 117 (PAA Eligibility Safe Harbour)",
        "An insurer writing a 3-year multi-year health insurance policy attempts to qualify for the simplified Premium Allocation Approach (PAA) under Ind AS 117 by arguing that the policy is re-underwritten annually, treating it as three 1-year tranches. How does FT-IGN 31 Section 3.10.2A evaluate this?",
        [
            "It is strictly non-compliant; PAA safe harbour under Para 53(b) requires the coverage period of the whole contract to be 1 year or less; artificially subdividing multi-year contracts without substantive contract boundary termination is prohibited.",
            "It is fully compliant provided the insurer tracks unearned premium separately for each twelve-month period.",
            "It is acceptable provided the insurer's Appointed Actuary issues a certification of mathematical equivalence.",
            "It is permitted only if the policyholder retains an unconditional cancellation right with full refund."
        ],
        0,
        "Under FT-IGN 31 Section 3.10.2A and Ind AS 117, the PAA 1-year safe harbour applies strictly at the whole-contract level; insurers cannot artificially slice multi-year policies into 1-year tranches unless a substantive contract boundary exists under Para 34.",
        "Manufacturing PAA eligibility by slicing multi-year contracts is an explicit audit fraud risk highlighted in FT-IGN 31."
    )

    # 9
    add(
        "FT-IGN 31, Section 3.14.2 & IRDAI Directives (Prescribed Discount Curve)",
        "Under FT-IGN 31 Section 3.14.2 and IRDAI directives, which discount curve must strictly be utilized to discount liability cash flows under Ind AS 117 in India?",
        [
            "The Clearing Corporation of India Limited (CCIL) Zero-Coupon Yield Curve.",
            "The Reserve Bank of India 91-day Treasury Bill rate compounded semi-annually.",
            "The State Bank of India Marginal Cost of Funds Based Lending Rate (MCLR).",
            "The London Interbank Offered Rate (LIBOR) transition benchmark."
        ],
        0,
        "FT-IGN 31 Section 3.14.2 confirms that IRDAI mandates the use of the CCIL (Clearing Corporation of India Limited) Zero-Coupon Yield Curve as the official risk-free benchmark for Ind AS 117 discounting.",
        "Using unverified internal rates or foreign curves breaches statutory Indian accounting and actuarial standards."
    )

    # 10
    add(
        "FT-IGN 31, Section 3.13 (Risk Adjustment for Non-Financial Risk)",
        "Under Ind AS 117 and FT-IGN 31 Section 3.13, how is the Risk Adjustment for Non-Financial Risk (RA) conceptually defined and disclosed?",
        [
            "It reflects the compensation an entity requires for bearing the uncertainty about the amount and timing of cash flows, measured from the entity's perspective, with mandatory disclosure of the equivalent confidence level (percentile) under Para 119.",
            "It reflects the market-wide systemic risk premium traded on public stock exchanges, disclosed as an equity beta.",
            "It is an arbitrary contingency margin fixed at exactly 10% of present value of future claims.",
            "It represents a regulatory capital buffer maintained in escrow with the central bank."
        ],
        0,
        "Risk Adjustment (RA) under Ind AS 117 reflects entity-specific compensation for bearing non-financial risk. Para 119 strictly mandates disclosure of the equivalent confidence level percentile if non-VaR techniques (e.g. Cost of Capital) are used.",
        "The equivalent percentile disclosure under Para 119 is a key focus of the Auditing Actuary's technical review."
    )

    # 11
    add(
        "FT-IGN 31, Section 3.11.4 (Post-Model Adjustments Threshold)",
        "Under FT-IGN 31 Section 3.11.4, when do Post-Model Adjustments (PMAs) or manual management overlays trigger mandatory deep technical audit challenge by the Auditing Actuary?",
        [
            "When manual PMAs exceed 5% of Contractual Service Margin (CSM) or 2% of the Liability for Remaining Coverage (LRC).",
            "When PMAs exceed 10% of total company gross written premium.",
            "When PMAs alter the net underwriting profit by more than Rs. 50 Lakhs.",
            "PMAs trigger audit challenge only if they remain unreversed for more than three reporting cycles."
        ],
        0,
        "Section 3.11.4 identifies PMAs exceeding 5% of CSM or 2% of LRC as material risk indicators requiring exhaustive verification of empirical justification, governance approvals, and reversal tracking.",
        "Unjustified manual overlays can be used to manipulate profit emergence; hence the strict 5% CSM / 2% LRC threshold."
    )

    # 12
    add(
        "FT-IGN 31, Section 3.19.4 & SA 230 (Audit Working Paper Retention)",
        "Under FT-IGN 31 Section 3.19.4 and ICAI Standard on Auditing SA 230, for what minimum period must the Auditing Actuary retain all audit working papers, challenge memos, and valuation models?",
        [
            "A minimum period of seven years (7 years) from the date of the auditor's report.",
            "Exactly five years (5 years) matching the general APS 9 CPD document retention rule.",
            "Three years (3 years) aligning with the general commercial dispute limitation under Indian law.",
            "Ten years (10 years) under the Prevention of Money Laundering Act guidelines."
        ],
        0,
        "Under FT-IGN 31 Section 3.19.4 and ICAI SA 230 ('Audit Documentation'), the Auditing Actuary's working papers and audit challenge records must be preserved for at least seven years (7 years) from the date of the audit report.",
        "CRITICAL DISTINCTION: CPD records must be retained for 5 years (APS 9), while statutory audit documentation must be preserved for 7 years (ICAI SA 230 / FT-IGN 31)."
    )

    # 13
    add(
        "FT-IGN 31, Section 3.2.3 & SA 220 (Engagement Quality Control Reviewer - EQCR)",
        "Under FT-IGN 31 Section 3.2.3 and ICAI SA 220, what is the role and requirement of an Engagement Quality Control Reviewer (EQCR) for high-risk insurance audits?",
        [
            "A mandatory independent partner review of significant professional judgments, models, and conclusions conducted prior to the issuance of the actuarial audit report.",
            "A retrospective quality inspection performed twelve months after the publication of audited accounts.",
            "An external audit evaluation conducted by the Institute's Disciplinary Directorate.",
            "A review of client billing rates and engagement profitability performed by the firm's managing partner."
        ],
        0,
        "Under SA 220 and FT-IGN 31, an EQCR is an independent partner who objectively evaluates the significant judgments and conclusions of the engagement team before the audit opinion is signed.",
        "EQCR hot reviews ensure robust second-pair-of-eyes scrutiny on high-stakes public interest entities."
    )

    # 14
    add(
        "FT-IGN 31, Ind AS 117 Treatment of Onerous Contracts (Loss Component)",
        "Under Ind AS 117 and FT-IGN 31, how must an insurer account for a group of insurance contracts that is determined to be onerous (loss-making) at initial recognition?",
        [
            "Recognize the net loss immediately in profit or loss, establishing a Loss Component within the Liability for Remaining Coverage (LRC); the loss CANNOT be deferred against future CSM.",
            "Defer the day-one loss as an asset and amortize it systematically over the policy term.",
            "Offset the loss against profitable groups within the same broad insurance portfolio.",
            "Recognize the loss in Other Comprehensive Income (OCI) to avoid distorting operating underwriting results."
        ],
        0,
        "Under Ind AS 117, onerous contracts do not have a CSM; the day-one loss must be recognized immediately in profit or loss, tracking the loss component within the LRC.",
        "Earnings smoothing or deferral of day-one losses is strictly prohibited under Ind AS 117."
    )

    # 15
    add(
        "FT-IGN 31, Section 3.19.2 (Cold Quality Reviews under SQC 1)",
        "What is the distinction between a 'Hot Review' (SA 220) and a 'Cold Review' (SQC 1) in the quality control framework governing an Auditing Actuary firm?",
        [
            "A Hot Review (EQCR) is conducted before the audit report is signed to catch errors in real time; a Cold Review is an inspection of completed audit files conducted by independent partners after report issuance to evaluate firm-wide adherence to standards.",
            "A Hot Review covers life insurance portfolios while a Cold Review covers non-life property and casualty portfolios.",
            "A Hot Review is conducted by external regulators while a Cold Review is performed by internal staff.",
            "A Hot Review evaluates financial calculations while a Cold Review evaluates word formatting and grammar."
        ],
        0,
        "Under SQC 1 and SA 220, Hot Reviews (EQCR) occur pre-issuance to ensure report integrity; Cold Reviews occur post-issuance as part of ongoing internal monitoring of audit methodology and compliance.",
        "Both hot and cold reviews form the dual pillars of audit quality control in actuarial audit practice."
    )

    # 16
    add(
        "FT-IGN 31, Ind AS 117 Measurement Models: GMM as Default",
        "Under Ind AS 117, which measurement approach serves as the mandatory default model for all insurance contracts unless specific qualifying criteria for alternative approaches are met?",
        [
            "The General Measurement Model (GMM), also known as the Building Block Approach (BBA), comprising present value of future cash flows, risk adjustment, and CSM.",
            "The Premium Allocation Approach (PAA), which applies by default to all short-term and long-term contracts.",
            "The Variable Fee Approach (VFA), which applies automatically to all unit-linked policies.",
            "The Historical Cost Model, which carries contracts at original unearned premium."
        ],
        0,
        "GMM (or Building Block Approach) is the core default measurement model under Ind AS 117. PAA is an optional simplification for short-term contracts, and VFA is a mandatory modification strictly for direct participating contracts.",
        "GMM forms the foundational baseline against which all other measurement models are evaluated."
    )

    # 17
    add(
        "FT-IGN 31, Variable Fee Approach (VFA) Eligibility Criteria",
        "Under Ind AS 117 and FT-IGN 31, which mandatory criteria must a contract satisfy to be eligible for the Variable Fee Approach (VFA)?",
        [
            "The contract must be a direct participating contract where contract terms specify that the policyholder participates in a share of a clearly identified pool of underlying items, expects to receive a substantial share of fair value returns, and cash flows vary directly with those returns.",
            "The contract must be an annual renewable group health policy written on an employer-employee basis.",
            "The contract must have a coverage duration of less than twelve months.",
            "The contract must have zero investment guarantees and zero cash surrender value."
        ],
        0,
        "VFA applies strictly to direct participating contracts meeting three conditions: defined pool of underlying items, substantial share of fair value returns to policyholders, and high proportion of cash flow variability linked to those returns.",
        "VFA reflects the economic substance of asset-management-like insurance contracts (such as unit-linked or participating with-profits)."
    )

    # 18
    add(
        "FT-IGN 31, Ind AS 117 Contract Boundaries (Para 34)",
        "Under Ind AS 117 Para 34, when do cash flows fall outside the contract boundary of an existing insurance contract?",
        [
            "When the insurer has the practical ability to reassess the risks of the particular policyholder and, as a result, can set a price or level of benefits that fully reflects those risks, OR has the practical ability to reprice the portfolio.",
            "When the policyholder stops paying premiums for more than thirty days.",
            "When the policyholder reaches the age of sixty-five years.",
            "When the insurance contract has been in force for more than ten calendar years."
        ],
        0,
        "Para 34 defines the contract boundary: cash flows are outside the boundary if the entity can fully reprice the individual risk or the portfolio to reflect current risk expectations.",
        "Contract boundaries dictate what future cash flows (e.g. renewal premiums) must be included in present value calculations."
    )

    # 19
    add(
        "FT-IGN 31, Accounting for Reinsurance Contracts Held",
        "Under Ind AS 117 and FT-IGN 31, how must an insurer value and present reinsurance contracts held (ceded reinsurance)?",
        [
            "Reinsurance contracts held must be valued separately from underlying insurance contracts, cannot be netted off against gross liabilities, and must incorporate an explicit adjustment for non-performance risk (counterparty credit risk) of the reinsurer.",
            "Reinsurance cash flows must be netted directly against gross insurance liabilities on the balance sheet.",
            "Reinsurance contracts held are exempt from discounting and risk adjustment requirements.",
            "Reinsurance assets must always equal 100% of the gross reserves ceded."
        ],
        0,
        "Ind AS 117 strictly prohibits netting reinsurance against gross insurance liabilities. Reinsurance held is evaluated as a separate asset, with mandatory adjustment for reinsurer default/non-performance risk.",
        "Gross reporting of liabilities and separate reinsurance asset measurement is a fundamental transparency principle."
    )

    # 20
    add(
        "FT-IGN 31, Discounting: Bottom-Up vs Top-Down Method",
        "Under Ind AS 117 and FT-IGN 31 Section 3.14, what is the core structural difference between the 'Bottom-Up' and 'Top-Down' approaches for determining liability discount curves?",
        [
            "Bottom-Up starts with a liquid risk-free yield curve and adds an illiquidity premium; Top-Down starts with reference asset portfolio yields and removes credit risk and market risk premiums.",
            "Bottom-Up applies to policy liabilities, while Top-Down applies exclusively to shareholder equity.",
            "Bottom-Up is used in general insurance, while Top-Down is used exclusively in life insurance.",
            "Bottom-Up discounts only cash flows up to five years, while Top-Down discounts cash flows beyond five years."
        ],
        0,
        "Under Ind AS 117, Bottom-Up adjusts risk-free rates upward for liability illiquidity; Top-Down adjusts reference asset yields downward for expected and unexpected credit losses, arriving at conceptually equivalent discount rates.",
        "Both approaches aim to capture the liquidity characteristics of the insurance liability cash flows."
    )

    # 21
    add(
        "FT-IGN 31, Contractual Service Margin (CSM) Release & Coverage Units",
        "Under Ind AS 117, how is the Contractual Service Margin (CSM) systematically recognized in insurance revenue over the coverage period?",
        [
            "Based on 'coverage units' reflecting the quantity of benefits provided under a contract and its expected coverage duration, recognizing revenue as insurance service is delivered.",
            "Straight-line amortized over the contractual premium payment term.",
            "Recognized fully in the first year of policy issuance to maximize initial shareholder dividend capacity.",
            "Released proportionally based on the fair market value of company equity."
        ],
        0,
        "CSM is released into insurance revenue over time based on coverage units, which reflect the volume of service provided in each period and expected duration.",
        "Coverage units ensure unearned profit (CSM) emerges in profit or loss in lockstep with the provision of insurance coverage."
    )

    # 22
    add(
        "FT-IGN 31, Experience Adjustments vs Changes in Future Assumptions",
        "Under the General Measurement Model (GMM) of Ind AS 117, how are current-period cash flow experience variances treated compared to changes in estimates of future cash flows?",
        [
            "Current-period experience variances (e.g., higher claims paid today) are recognized immediately in profit or loss; changes in assumptions relating to future service adjust the remaining CSM.",
            "Both current experience variances and future assumption changes adjust the CSM.",
            "Both current experience variances and future assumption changes are recognized immediately in P&L.",
            "Experience variances adjust the CSM, while future assumption changes are recognized in OCI."
        ],
        0,
        "Current-period experience variances relate to past/current service and flow immediately through profit or loss. Changes in estimates relating to future coverage periods adjust the unearned profit margin (CSM).",
        "Understanding what unlocks CSM versus what hits P&L immediately is a critical technical accounting distinction."
    )

    # 23
    add(
        "FT-IGN 31, Transition Approaches under Ind AS 117",
        "When an insurer transitions to Ind AS 117 on the transition date, which hierarchy of transition methods is prescribed by the standard and evaluated by the Auditing Actuary?",
        [
            "Full Retrospective Approach (FRA) is mandatory unless impracticable; if impracticable, the insurer must choose between the Modified Retrospective Approach (MRA) and the Fair Value Approach (FVA).",
            "The Fair Value Approach is mandatory for all Indian insurers under IRDAI transition circulars.",
            "The insurer may freely select any transition method based on shareholder preference.",
            "The Modified Retrospective Approach is prohibited under Indian accounting standards."
        ],
        0,
        "Ind AS 117 mandates Full Retrospective Approach unless impracticable. Demonstrating impracticability requires rigorous objective evidence before falling back to MRA or Fair Value Approach.",
        "The Auditing Actuary must critically audit management's justification if FRA is claimed to be impracticable."
    )

    # 24
    add(
        "FT-IGN 31, Section 3.8 (Auditing Actuary & Appointed Actuary Protocol)",
        "Under FT-IGN 31 Section 3.8, what is the professional protocol governing interactions between the Auditing Actuary and the audited insurer's Appointed Actuary?",
        [
            "Both actuaries must maintain open, professional communication, establish an agreed audit timetable, share data and models collegially, and document technical discussions formally.",
            "The Auditing Actuary must communicate with the Appointed Actuary exclusively through formal registered legal notices.",
            "The Appointed Actuary has a statutory right to refuse to speak with the Auditing Actuary.",
            "The Auditing Actuary must report all minor computational queries directly to the Board of Directors without contacting the AA."
        ],
        0,
        "Section 3.8 requires structured, professional collaboration: clear communication, advance scheduling, respectful technical challenge, and formal documentation of queries and responses.",
        "Effective audits depend on professional collegiality and timely information exchange between actuarial peers."
    )

    # 25
    add(
        "FT-IGN 31 & SA 620, Evaluating Competence and Objectivity of Experts",
        "Under ICAI SA 620, what must the statutory financial auditor and lead audit partner evaluate prior to placing reliance on the Auditing Actuary?",
        [
            "Evaluate the Auditing Actuary's professional competence, technical capabilities, resources, and objectivity (including independence from the audited insurer).",
            "Verify that the Auditing Actuary holds an equity stake in the audited insurer.",
            "Confirm that the Auditing Actuary is the lowest bidder in the commercial audit procurement tender.",
            "Ensure the Auditing Actuary has served as an employee of the audited insurer within the past 12 months."
        ],
        0,
        "SA 620 requires the auditor to formally assess the expert's professional competence, capabilities, and objectivity (confirming absence of conflicts of interest and independence threats).",
        "Auditor reliance on an expert is legally defective if expert competence and independence are not evaluated and documented."
    )

    # 26
    add(
        "FT-IGN 31, Data Reconciliation between GL and Actuarial Models",
        "During the audit of insurance liabilities, what mandatory data verification procedure must the Auditing Actuary conduct under FT-IGN 31?",
        [
            "Perform end-to-end reconciliation between policy administration systems, general ledger accounting feeds, and the input datasets ingested into actuarial valuation models.",
            "Assume all data ingested into actuarial models is complete if signed by the IT database administrator.",
            "Verify only a single policy record and extrapolate data accuracy across the entire portfolio.",
            "Data reconciliation is the exclusive duty of external statutory auditors; actuaries ignore source data feeds."
        ],
        0,
        "Reconciling policy administration source data, financial ledgers, and actuarial model inputs is a fundamental audit control to ensure completeness and accuracy of cash flow projections.",
        "Garbage in, garbage out: actuarial models are only as reliable as the underlying reconciled accounting data."
    )

    # 27
    add(
        "FT-IGN 31, Materiality Benchmarks in Actuarial Audits",
        "When establishing materiality for testing actuarial liability misstatements under FT-IGN 31, which balance sheet and P&L metrics are primarily evaluated?",
        [
            "Performance materiality evaluated against Contractual Service Margin (CSM), Liability for Incurred Claims (LIC), Liability for Remaining Coverage (LRC), and Net Asset Value (Equity).",
            "Materiality is evaluated solely against the insurer's annual advertising budget.",
            "A single fixed threshold of Rs. 10 Lakhs is applied to all insurers regardless of scale.",
            "Materiality is defined strictly by the maximum penalty fine that IRDAI can levy."
        ],
        0,
        "Materiality in insurance audits is calibrated against key insurance line items: CSM, LRC, LIC, total liabilities, and net equity, ensuring misstatements that impact solvency or revenue emergence are flagged.",
        "Materiality benchmarks must be tailored to insurance-specific financial statement aggregates."
    )

    # 28
    add(
        "FT-IGN 31, Strict Dual-Role Independence Prohibition",
        "Can an actuarial consulting firm provide both statutory reserving valuation services (Appointed Actuary support) and the external Auditing Actuary assurance to the same insurer in the same financial year?",
        [
            "Strictly prohibited; providing both valuation preparation and audit assurance creates an irreconcilable self-review threat that destroys auditor independence under ICAI and IAI codes.",
            "Permitted provided the firm uses two different actuarial analysts under the same engagement partner.",
            "Permitted if the insurer's audit committee pays separate billing invoices for the two services.",
            "Permitted provided the consulting assignment is completed before the audit commences."
        ],
        0,
        "A firm cannot audit its own work. Preparing valuation figures while simultaneously acting as the auditing actuary violates fundamental independence rules and constitutes grave misconduct.",
        "The self-review threat cannot be mitigated by internal Chinese walls within the same actuarial firm."
    )

    # 29
    add(
        "FT-IGN 31, Reporting to Those Charged With Governance (TCWG) under SA 260",
        "Under ICAI SA 260 and FT-IGN 31, what specific actuarial matters should be communicated by the audit team to the Board Audit Committee (TCWG)?",
        [
            "Significant qualitative aspects of actuarial practices, key assumption sensitivities, contentious model changes, post-model adjustments, and any material unadjusted valuation differences.",
            "The daily attendance records of junior actuarial analysts working on the audit.",
            "The commercial software licensing fees paid by the insurer to its modeling vendors.",
            "Private salary and bonus structures of the actuarial department employees."
        ],
        0,
        "SA 260 communications with Audit Committees must cover qualitative accounting choices, key assumption judgments, model governance issues, management overlays (PMAs), and unresolved differences.",
        "Transparent communication with TCWG ensures the board is fully informed on subjective actuarial risks."
    )

    # 30
    add(
        "FT-IGN 31, Audit Report Modifications & Uncorrected Misstatements",
        "Where an insurer's management refuses to correct an actuarial reserving understatement that exceeds performance materiality, what must the Auditing Actuary recommend to the statutory auditor?",
        [
            "Recommend issuing a modified audit opinion (Qualified Opinion or Adverse Opinion) under ICAI SA 705, detailing the nature and quantified financial impact of the misstatement.",
            "Issue an unqualified clean audit opinion while filing an anonymous complaint with the local police.",
            "Instruct the insurer to omit the insurance liability note entirely from the published annual report.",
            "Agree to an off-the-record compromise splitting the valuation difference by fifty percent."
        ],
        0,
        "If material actuarial misstatements remain unadjusted, the auditing actuary must recommend a qualified or adverse audit opinion under SA 705, detailing the technical divergence and financial impact.",
        "Auditors cannot issue clean opinions on materially misstated actuarial balance sheets."
    )

    return qs

if __name__ == "__main__":
    qs = get_ftign31_questions()
    print(f"Generated {len(qs)} FT-IGN 31 questions successfully.")
