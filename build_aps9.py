# -*- coding: utf-8 -*-
"""
build_aps9.py - Module 6: APS 9: Continuing Professional Development (CPD)
Authentic, high-difficulty Fellowship MCQs covering:
- Statutory basis (Sec 19(2)(i)) & annual compliance cycle (1 April to 31 March)
- Membership categories: Cat 1 (24h), Cat 2 (15h), Cat 3 (Exempt)
- Category 1 COP Holder Breakdown: min 15h tech + min 6h prof + max 3h other
- Supplementary Practice Areas Rule: +8h technical per additional practice area
- Discrete Daily Conversion Scale (Section 9.2) & 6-Hour Absolute Daily Cap
- Self-Attestation Deadline (31st May) & 5-Year Document Retention Obligation
- Public Defaulter Listing on IAI Website (1st July) & Disciplinary Enforcement
- Surplus hours carry-forward prohibition, international reciprocity, audit verification
"""

CAT = "APS 9: Continuing Professional Development (CPD)"

def get_aps9_questions():
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
        "APS 9 (v4.00), Section 3 & Compliance Year",
        "Under Actuarial Practice Standard 9 (APS 9 v4.00: Continuing Professional Development), what is the official statutory CPD compliance year?",
        [
            "From 1st April of a calendar year to 31st March of the immediately following calendar year.",
            "From 1st January to 31st December (standard calendar year).",
            "A rolling twelve-month window measured from the date of the member's admission to Fellowship.",
            "A three-year block matching the cyclical peer review audit schedule."
        ],
        0,
        "Under APS 9 Section 3, the CPD compliance year runs concurrently with the Indian financial year, from 1st April to 31st March annually.",
        "Annual CPD compliance is assessed on the 1 April – 31 March financial year basis, not on calendar years or rolling anniversaries."
    )

    # 2
    add(
        "APS 9 (v4.00), Section 4.4.3 (Category 1 COP Holder Mandatory Hours)",
        "Under APS 9 Section 4.4.3, what is the mandatory annual CPD requirement for a Category 1 actuary (Fellow holding a Certificate of Practice)?",
        [
            "A minimum of 24 verifiable CPD hours per year: at least 15 technical in primary practice area, at least 6 professional conduct & ethics, and maximum 3 other verifiable hours.",
            "A minimum of 30 verifiable CPD hours per year: at least 20 technical and 10 professional conduct.",
            "Exactly 15 verifiable CPD hours per year, consisting entirely of general corporate governance seminars.",
            "A minimum of 40 verifiable hours with no specific allocation between technical and professional content."
        ],
        0,
        "Section 4.4.3 establishes the 24-hour mandatory triad for COP holders: minimum 15 hours technical in designated primary practice area, minimum 6 hours professional/ethical conduct, and maximum 3 hours other verifiable learning.",
        "A Category 1 COP holder must satisfy all three sub-allocations within their 24 verifiable hours."
    )

    # 3
    add(
        "APS 9 (v4.00), Section 4.1.4 (Multiple Practice Areas Rule)",
        "An actuary holds a Certificate of Practice (Category 1) and actively signs statutory valuations in both Life Insurance and Health Insurance. Under Section 4.1.4 of APS 9, what is the actuary's total mandatory annual CPD requirement?",
        [
            "32 verifiable CPD hours: 24 base hours (including min 15 Life technical + 6 professional) plus an additional 8 verifiable technical hours in Health Insurance.",
            "24 verifiable hours total, because the base 24 hours covers all practice areas combined.",
            "48 verifiable hours, obtained by fully doubling the entire 24-hour annual requirement.",
            "30 verifiable hours, adding a flat 6-hour general administration allowance."
        ],
        0,
        "Section 4.1.4 mandates that a COP holder practicing in more than one practice area must complete an additional 8 verifiable technical CPD hours for EACH supplementary practice area (24 + 8 = 32 hours).",
        "A classic numerical exam trap: you add 8 technical hours per additional area, rather than doubling the entire requirement or doing nothing."
    )

    # 4
    add(
        "APS 9 (v4.00), Section 4.1.4 (Three Practice Areas Calculation)",
        "A senior consulting actuary holds a COP and signs formal statutory reports across three distinct practice areas: General Insurance (primary), Life Insurance, and Pensions. What is their total annual verifiable CPD requirement?",
        [
            "40 verifiable CPD hours (24 base hours + 8 Life technical + 8 Pensions technical).",
            "24 verifiable hours total, provided the professional conduct hours are doubled.",
            "72 verifiable hours, calculated as 24 hours multiplied by 3 practice areas.",
            "36 verifiable hours, based on a flat 12 hours per practice area."
        ],
        0,
        "Under Section 4.1.4, with General Insurance as primary (24 base hours), each of the two additional areas (Life and Pensions) requires an additional 8 technical hours: 24 + 8 + 8 = 40 verifiable CPD hours.",
        "Multi-practice practitioners must maintain specialized technical currency in each vertical they sign."
    )

    # 5
    add(
        "APS 9 (v4.00), Section 4.5 (Category 2 Active Fellows without COP)",
        "Under Section 4.5 of APS 9, what is the mandatory annual CPD requirement for a Category 2 member (an active Fellow employed in a corporate, regulatory, or academic role who does NOT hold a Certificate of Practice)?",
        [
            "A minimum of 15 verifiable CPD hours per year: at least 9 technical, at least 3 professional conduct, and maximum 3 other verifiable hours.",
            "24 verifiable hours per year, identical to Category 1 Certificate of Practice holders.",
            "Zero verifiable hours, because CPD is strictly voluntary for non-practicing Fellows.",
            "10 verifiable hours consisting entirely of non-technical management seminars."
        ],
        0,
        "Section 4.5 sets the requirement for Category 2 active Fellows without a COP at 15 verifiable hours: min 9 technical, min 3 professional conduct, and max 3 other learning.",
        "Active Fellows without a COP have a reduced threshold (15 hours vs 24 hours) because they do not sign public statutory certificates."
    )

    # 6
    add(
        "APS 9 (v4.00), Section 4.6 (Category 3 Inactive / Retired Fellows)",
        "Under Section 4.6 of APS 9, how may a fully retired Fellow who has completely ceased actuarial professional work obtain exemption from annual CPD obligations?",
        [
            "By applying in writing to the Institute for Category 3 (Inactive Status) at least three (3) months prior to the end of the membership year.",
            "Automatically upon reaching 60 years of age without submitting any written application.",
            "By filing a certified copy of their pension payment order with the local tax department.",
            "Retired actuaries are legally prohibited from claiming exemption under any circumstances."
        ],
        0,
        "Section 4.6 requires fully retired/inactive Fellows to apply formally in writing for Category 3 status at least 3 months before year-end to be granted CPD exemption.",
        "Exemption is not automatic upon reaching retirement age; formal application and approval are required."
    )

    # 7
    add(
        "APS 9 (v4.00), Section 9.2 (Daily CPD Conversion Scale: 4 Hours Net)",
        "An actuary attends a technical reinsurance seminar from 10:00 AM to 3:30 PM (5.5 hours total elapsed time), which includes a 1.5-hour lunch and networking break. Under Section 9.2 of APS 9, how many verifiable CPD hours are awarded?",
        [
            "4 CPD hours (Actual net duration = 4.0 hours, which falls in the bracket '3.5 hours to less than 4.5 hours' = 4 CPD hours).",
            "5.5 CPD hours, because all elapsed time spent at the professional venue is credited.",
            "6 CPD hours, representing the maximum single-day seminar credit.",
            "3 CPD hours, applying a statutory deduction for external sponsorship."
        ],
        0,
        "Under Section 9.2, meal breaks and receptions are strictly excluded. Net duration = 5.5h - 1.5h = 4.0 hours. The conversion table specifies: 3.5h to < 4.5h awards exactly 4 CPD hours.",
        "Elapsed gross time cannot be claimed; only net formal presentation/instruction time qualifies."
    )

    # 8
    add(
        "APS 9 (v4.00), Section 9.2 (Maximum Daily CPD Credit Cap)",
        "An actuary attends an intensive 9-hour technical actuarial conference with 7.5 hours of net formal lecture time in a single calendar day. Under Section 9.2 of APS 9, what is the maximum CPD credit that can be awarded for that single day?",
        [
            "Six (6) CPD hours, which represents the absolute statutory daily ceiling under the scale (awarded for 5.5 hours or more).",
            "7.5 CPD hours, matching the exact net minutes of technical lecture time.",
            "8 CPD hours, matching the standard working day calculation.",
            "Zero CPD hours, because single-day conferences exceeding 7 hours are invalid."
        ],
        0,
        "Section 9.2 establishes an absolute daily cap of 6 CPD hours for any formal event lasting 5.5 hours or more. No single day can generate more than 6 CPD hours.",
        "The 6-hour daily cap prevents cramming annual requirements into an unrealistic single session."
    )

    # 9
    add(
        "APS 9 (v4.00), Section 9.2 (Sub-30 Minute Session Exclusion)",
        "An actuary attends a 25-minute online vendor presentation introducing a new capital modeling tool. Under the discrete conversion table in Section 9.2 of APS 9, how many CPD hours are credited?",
        [
            "Zero (0) CPD hours; the conversion table awards 0 credit for sessions lasting less than 0.5 hour (< 30 minutes).",
            "0.5 CPD hour, rounded up to the nearest half hour.",
            "1.0 CPD hour, under the standard minimum session rule.",
            "0.25 CPD hour, calculated pro rata based on elapsed minutes."
        ],
        0,
        "Under Section 9.2, sessions of less than 30 minutes (< 0.5 hour) receive 0 CPD hours. Minimum qualifying threshold for 1 CPD hour is 30 to 89 minutes (0.5h to < 1.5h).",
        "Micro-sessions below 30 minutes do not award partial or fractional CPD hours."
    )

    # 10
    add(
        "APS 9 (v4.00), Section 11.1 (Annual Self-Attestation Deadline)",
        "Under Section 11.1 of APS 9, by what annual calendar deadline must an actuary submit their online CPD self-attestation and record of hours on the IAI member portal?",
        [
            "No later than 31st May (within two months of the end of the compliance year).",
            "By 31st March (on the final day of the compliance year).",
            "By 30th April (within thirty days of the financial year-end).",
            "By 1st July, concurrent with the defaulters list publication."
        ],
        0,
        "Section 11.1 gives members a 2-month window following the close of the compliance year (31 March) to submit their online self-attestation, making the deadline strictly 31st May.",
        "31 March is year-end; 31 May is the attestation deadline; 1 July is the public website defaulter listing."
    )

    # 11
    add(
        "APS 9 (v4.00), Section 10.2 (Preservation of CPD Records)",
        "Under Section 10.2 of APS 9, for what minimum period must members preserve all documentary evidence (attendance certificates, event agendas, registration receipts) supporting their CPD self-attestations?",
        [
            "A minimum period of at least five (5) years from the end of the relevant compliance year.",
            "One (1) year after submission of the online attestation.",
            "Seven (7) years under ICAI SA 230 audit documentation standards.",
            "Three (3) years from the date of the event."
        ],
        0,
        "Section 10.2 requires members to preserve all physical and electronic CPD evidence for at least 5 years, for random audit inspection by the Council.",
        "CRITICAL EXAM TRAP: CPD records must be kept for 5 years (APS 9 Sec 10.2), whereas statutory audit working papers must be kept for 7 years (FT-IGN 31 / SA 230)."
    )

    # 12
    add(
        "APS 9 (v4.00), Section 12.2 (Public Website Defaulter Listing Date)",
        "Under Section 12.2 of APS 9, on what specific calendar date does the Institute publish the names of members who failed to comply with CPD requirements or submit self-attestations on the official IAI website?",
        [
            "1st July of the compliance reporting year.",
            "31st March of the compliance year.",
            "31st May (immediately upon expiry of the attestation window).",
            "15th August (coinciding with the national holiday)."
        ],
        0,
        "Section 12.2 specifies that the list of non-compliant members and attestation defaulters is published on the official IAI website on 1st July.",
        "Public disclosure on 1st July provides market transparency to clients and insurers regarding an actuary's practice standing."
    )

    # 13
    add(
        "APS 9 (v4.00), Section 12 (Sanctions for Category 1 CPD Non-Compliance)",
        "What are the immediate professional consequences for a Category 1 actuary who defaults on their mandatory CPD requirements under APS 9 Section 12?",
        [
            "Immediate non-renewal of their Certificate of Practice (COP), suspension of statutory signing rights, and referral to the Director (Discipline) under the First Schedule.",
            "A flat monetary fine of Rs. 10,000 with unconditional renewal of practicing rights.",
            "Mandatory re-examination in Subject SA2 (Life Insurance Specialist Applications).",
            "Suspension of voting rights in Council elections without affecting client signing rights."
        ],
        0,
        "Section 12 imposes severe sanctions on COP defaulters: their COP is not renewed, they cannot sign statutory valuations, and default is referred to the Director (Discipline) as professional misconduct.",
        "Maintaining CPD currency is an indispensable statutory condition for holding a valid COP."
    )

    # 14
    add(
        "APS 9 (v4.00), Resumption of Practice after Inactive Status",
        "A retired Fellow holding Category 3 (Inactive Status) wishes to resume active consulting practice and apply for a Certificate of Practice (COP). What is required under APS 9 Section 4.6?",
        [
            "The member must complete catch-up CPD requirements prescribed by Council in their practice area before a Certificate of Practice can be granted.",
            "The member must re-sit and pass the India Fellowship Seminar (IFS) examination.",
            "The member can immediately resume practice provided they pay all back-dated membership dues.",
            "The member must practice under the supervision of a junior Associate for twelve months."
        ],
        0,
        "Under Section 4.6, an inactive member wishing to resume active practice must satisfy Council-prescribed catch-up CPD to demonstrate current technical and ethical competence before a COP is reissued.",
        "Catch-up learning ensures returning practitioners are abreast of contemporary regulations (such as Ind AS 117)."
    )

    # 15
    add(
        "APS 9 (v4.00), Professional Conduct CPD Content Scope",
        "Which of the following topics satisfies the mandatory requirement for 'Professional Conduct & Ethics' CPD (minimum 6 hours for Category 1 COP holders) under APS 9?",
        [
            "A structured seminar analyzing PCS v4.0 case studies, conflict of interest management, whistleblowing protocols, and the Actuaries Act disciplinary process.",
            "A technical masterclass on machine learning algorithms in general insurance pricing.",
            "A symposium on commercial real estate yield curves and sovereign debt trends.",
            "An internal team training session on Python data scraping and SQL database queries."
        ],
        0,
        "Professional conduct CPD must cover professional ethics, PCS interpretations, conflicts of interest, disciplinary case law, statutory duties, or the India Fellowship Seminar (IFS).",
        "Technical mathematical modeling counts toward the technical quota, not the mandatory 6-hour professional conduct quota."
    )

    # 16
    add(
        "APS 9 (v4.00), Carry-Forward of Surplus CPD Hours",
        "An active Category 1 actuary completes 38 verifiable CPD hours during the 2024-25 compliance year, exceeding the mandatory 24-hour threshold by 14 hours. How are the surplus hours treated under APS 9?",
        [
            "Surplus CPD hours cannot be carried forward to any subsequent compliance year; every compliance year stands on its own.",
            "Up to 10 surplus hours may be carried forward to the immediately following compliance year.",
            "All 14 surplus hours can be banked in a reserve account valid for up to three years.",
            "Surplus technical hours may be converted into professional conduct hours in the following year."
        ],
        0,
        "APS 9 strictly prohibits carrying forward surplus CPD hours to subsequent compliance years. CPD is an annual commitment designed to ensure continuous learning throughout each financial year.",
        "Each compliance year is an independent assessment period; excess hours lapse at year-end."
    )

    # 17
    add(
        "APS 9 (v4.00), International CPD Reciprocity",
        "An Indian Fellow residing in London completes 30 hours of verifiable technical CPD accredited by the Institute and Faculty of Actuaries (IFoA). Can these hours be claimed towards IAI APS 9 compliance?",
        [
            "Yes; verifiable CPD completed through recognised overseas actuarial bodies that are Full Member Associations of the International Actuarial Association (IAA) is fully recognised under APS 9 reciprocity.",
            "No; only CPD events physically organized within the territory of India are eligible.",
            "Yes, but IFoA CPD hours are discounted by 50% under IAI conversion tables.",
            "No, unless the member obtains prior written pre-approval from the President of the IAI for each webinar."
        ],
        0,
        "APS 9 recognises verifiable CPD organized by recognised actuarial bodies (such as IFoA, SOA, CAS, Actuaries Institute Australia) under international reciprocity arrangements.",
        "Reciprocity avoids unnecessary duplication of learning requirements for internationally mobile actuaries."
    )

    # 18
    add(
        "APS 9 (v4.00), CPD Credit as Speaker / Presenter",
        "An actuary prepares and delivers a 2-hour technical presentation on Ind AS 117 contractual service margin calculation at the Global Conference of Actuaries. How is their CPD credit calculated?",
        [
            "The actuary may claim verifiable CPD credit for both the presentation delivery time and reasonable preparation time, subject to standard daily caps.",
            "The actuary can only claim credit for the 2 hours of actual speaking time, with zero preparation allowance.",
            "Presenters receive zero CPD credit because teaching others is an unremunerated professional service.",
            "The actuary receives a flat 24 CPD hours, automatically fulfilling their entire annual requirement."
        ],
        0,
        "Under APS 9 guidelines, presenting at recognized professional conferences qualifies for CPD credit covering both actual delivery time and reasonable preparation time, subject to maximum caps.",
        "Preparing high-level technical presentations is recognised as rigorous professional learning."
    )

    # 19
    add(
        "APS 9 (v4.00), Technical Research Papers & Publications",
        "A Fellow actuary authors a peer-reviewed research paper on climate risk modeling published in an international actuarial journal. Under APS 9, how is this research activity recognised?",
        [
            "It qualifies as verifiable technical CPD hours in the relevant practice area, subject to Council-approved maximum hour ceilings for published research.",
            "It is classified strictly as 'Other' non-technical learning capped at 3 hours total.",
            "It does not qualify for any CPD credit unless presented orally at an IAI sessional meeting.",
            "It qualifies only if the paper is co-authored with a sitting Council member."
        ],
        0,
        "Authoring peer-reviewed actuarial research papers published in recognised journals qualifies as verifiable technical CPD, reflecting deep intellectual contribution.",
        "Research and publication are valued mechanisms for advancing professional knowledge."
    )

    # 20
    add(
        "APS 9 (v4.00), Random CPD Audit Sampling",
        "Under Section 10.3 of APS 9, how does the Institute verify the veracity of online CPD self-attestations submitted by members?",
        [
            "The Institute conducts annual random sample audits requiring selected members to submit physical or electronic proof of attendance and agendas within thirty (30) days.",
            "The Institute audits 100% of all members every six months by conducting on-site workplace inspections.",
            "Verification is performed entirely through automated facial recognition during webinars without human sampling.",
            "The Institute does not conduct audits; self-attestations are accepted on trust without verification."
        ],
        0,
        "APS 9 establishes random sample audits where selected members must produce supporting attendance records, agendas, and certificates within the stipulated timeframe.",
        "Random audits provide deterrence against fraudulent self-certification while keeping administrative costs manageable."
    )

    # 21
    add(
        "APS 9 (v4.00), Pro-Rata CPD for New Fellows Admitted Mid-Year",
        "An Associate actuary is admitted to Fellowship and granted a Certificate of Practice on 1st October (exactly halfway through the financial year). What is their CPD obligation for that initial compliance year?",
        [
            "Their mandatory CPD requirement is calculated on a pro-rata basis for the remaining six months of the compliance year (i.e., 12 verifiable hours).",
            "They are completely exempt from all CPD obligations until the beginning of the next financial year.",
            "They must complete the full 24 verifiable hours regardless of the date of admission.",
            "They must complete 24 hours plus a retroactive penalty of 6 additional hours."
        ],
        0,
        "New Fellows admitted mid-year are assigned pro-rated CPD obligations proportionate to the number of full months remaining in the compliance year.",
        "Pro-rating ensures fairness so that new practitioners are not burdened with full-year requirements in a partial year."
    )

    # 22
    add(
        "APS 9 (v4.00), Medical & Extended Leave Exemptions",
        "A practicing actuary is incapacitated due to major illness and undergoes medical treatment for eight consecutive months during the compliance year. How can they address their CPD shortfall under APS 9?",
        [
            "They must submit a written application for temporary relief or partial waiver supported by certified medical records to the CPD Committee before the end of the compliance year.",
            "They are automatically exempt without any notification or paperwork required.",
            "Their Certificate of Practice is automatically revoked with zero possibility of reinstatement.",
            "They must arrange for a colleague to attend online webinars under their member account."
        ],
        0,
        "Members facing serious medical incapacity, maternity leave, or bereavement can apply for temporary relief or pro-rated waivers with supporting medical documentation.",
        "Formal application and documented evidence ensure legitimate exceptions are handled compassionately and transparently."
    )

    # 23
    add(
        "APS 9 (v4.00), In-House Corporate Actuarial Seminars",
        "An insurance company organizes an internal technical workshop on IFRS 17 liability measurement for its actuarial staff. Under what conditions can attendees claim this as verifiable CPD under APS 9?",
        [
            "The session must have a predefined formal technical agenda, qualified speakers, verified attendance logs, and a minimum qualifying net duration.",
            "In-house corporate training is strictly ineligible for CPD credit under all circumstances.",
            "Attendees can claim credit only if an external IAI Council member attends as an observer.",
            "Credit is available only if the insurance company pays an accreditation royalty fee to the Institute."
        ],
        0,
        "In-house technical training qualifies as verifiable CPD provided it has a structured technical agenda, competent presenters, documented attendance records, and satisfies duration thresholds.",
        "Structured corporate learning that meets quality criteria is recognized as valid professional development."
    )

    # 24
    add(
        "APS 9 (v4.00), Interactive Webinars & E-Learning Verifiability",
        "For an online webinar or asynchronous e-learning module to qualify as 'verifiable' CPD under APS 9, what verification mechanism is mandatory?",
        [
            "The platform must generate objective proof of participation (e.g., login/logout timestamps, interactive poll responses, or completion assessment certificates).",
            "The member must take a selfie in front of the computer screen and email it to the Executive Director.",
            "Online webinars cannot qualify as verifiable CPD; only physical in-person attendance is accepted.",
            "The member's direct corporate supervisor must sign a statutory affidavit confirming visual observation."
        ],
        0,
        "Verifiable CPD requires objective documentation: system-generated attendance logs, time-tracking, poll responses, or completion certificates.",
        "Objective digital verification distinguishes verifiable CPD from unverified informal reading."
    )

    # 25
    add(
        "APS 9 (v4.00), Dual Qualification & Overseas CPD Exemption",
        "A Fellow of both the IAI and the UK IFoA practices as an Appointed Actuary in India. Can they claim complete exemption from IAI APS 9 on the grounds that they comply with IFoA CPD rules?",
        [
            "No; while IFoA events can be counted towards IAI hours under reciprocity, an actuary holding an IAI Certificate of Practice must fully comply with and report under IAI APS 9 requirements.",
            "Yes; dual qualified Fellows are completely exempt from local Indian CPD compliance under WTO treaties.",
            "Yes, provided they pay an annual overseas reciprocity waiver levy to the Council.",
            "No, because dual membership automatically cancels practicing rights in India."
        ],
        0,
        "Practitioners holding an IAI Certificate of Practice must fulfill IAI APS 9 rules and submit their attestation on the IAI portal, even if qualifying hours were earned through reciprocal bodies.",
        "Local statutory accountability cannot be abdicated to a foreign professional body."
    )

    # 26
    add(
        "APS 9 (v4.00), Scope of 'Technical CPD'",
        "Under APS 9, which of the following activities falls squarely within the definition of 'Technical CPD' in an actuary's designated practice area?",
        [
            "Advanced stochastic reserving workshops, dynamic financial analysis, climate risk modeling, or IFRS 17 liability valuation.",
            "General corporate interpersonal negotiation skills and public speaking courses.",
            "Training on corporate tax deduction at source (TDS) and GST invoice processing.",
            "A corporate human resources seminar on annual employee performance appraisal forms."
        ],
        0,
        "Technical CPD must directly enhance core actuarial skills: stochastic modeling, reserving, pricing, capital modeling, ALM, or risk quantification.",
        "General business, HR, or non-actuarial tax courses do not qualify as technical actuarial hours."
    )

    # 27
    add(
        "APS 9 (v4.00), Cap on 'Other Verifiable Hours'",
        "Under APS 9 Section 4.4.3, what is the maximum number of 'Other Verifiable Hours' (such as general leadership, soft skills, or IT tools) that a Category 1 COP holder can count towards their 24 mandatory hours?",
        [
            "A maximum of three (3) hours per compliance year.",
            "A maximum of twelve (12) hours per compliance year.",
            "Zero hours; all 24 hours must be technical or professional conduct.",
            "Up to fifteen (15) hours, provided the member passes a computer proficiency test."
        ],
        0,
        "Section 4.4.3 restricts 'Other' verifiable hours to a strict ceiling of 3 hours out of the 24-hour total, preserving the dominant focus on technical and professional standards.",
        "The 3-hour cap prevents dilution of core technical and ethical competence."
    )

    # 28
    add(
        "APS 9 (v4.00), Role of the CPD Committee",
        "Which institutional organ is primarily charged with monitoring member compliance, evaluating exceptional waiver requests, and approving accredited CPD events under APS 9?",
        [
            "The CPD Committee appointed by the Council of the Institute.",
            "The Quality Review Board acting under Section 43 of the Actuaries Act.",
            "The Disciplinary Directorate headed by the Director (Discipline).",
            "The Appellate Authority constituted by the Central Government."
        ],
        0,
        "The CPD Committee is the designated functional committee of Council responsible for administering APS 9, reviewing exemptions, and accrediting learning programs.",
        "The CPD Committee manages administrative compliance, referring persistent defaulters to the Disciplinary Directorate."
    )

    # 29
    add(
        "APS 9 (v4.00), Fraudulent CPD Self-Attestation",
        "An actuary submits an online CPD self-attestation claiming 24 hours of technical attendance, but an audit reveals the attendance certificates were fabricated. Under the Actuaries Act 2006, this is:",
        [
            "Grave professional misconduct under the Second Schedule involving moral turpitude and dishonesty, warranting severe disciplinary penalties including potential expulsion.",
            "An administrative error that can be rectified by completing double hours in the following year.",
            "A minor non-compliance issue that is settled by paying a late fee of Rs. 500.",
            "A matter outside the jurisdiction of the Disciplinary Committee."
        ],
        0,
        "Submitting fabricated CPD certificates is deliberate fraud and moral dishonesty, constituting Second Schedule misconduct subject to suspension or permanent expulsion.",
        "Honesty in professional reporting is a fundamental conduct requirement."
    )

    # 30
    add(
        "APS 9 (v4.00), Serving as IAI Examination Marker or Examiner",
        "A Fellow actuary serves as an official paper examiner and script marker for Subject SP2 (Life Insurance Specialist Principles). Under APS 9, how is this service recognised?",
        [
            "It is recognized as verifiable technical CPD hours in the relevant practice area, subject to Council-approved limits for examination service.",
            "It does not qualify for any CPD credit because examiners receive financial honoraria from the Institute.",
            "It qualifies strictly as professional conduct CPD capped at 1 hour.",
            "It can only be claimed if the pass rate for the examination paper exceeds 50%."
        ],
        0,
        "Serving as an examiner, question paper setter, or script marker requires deep technical re-examination of syllabus concepts and is recognised as verifiable technical CPD within prescribed caps.",
        "Examination service reinforces core technical mastery in the designated subject."
    )

    return qs

if __name__ == "__main__":
    qs = get_aps9_questions()
    print(f"Generated {len(qs)} APS 9 questions successfully.")
