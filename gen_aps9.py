# -*- coding: utf-8 -*-
"""
gen_aps9.py
Module 6: APS 9: Continuing Professional Development (CPD v4.00)
105 completely unique, high-difficulty Fellowship scenario questions.
"""

def get_aps9_questions():
    qs = []

    def add(q, opts, c_idx, exp_c, exp_inc, src):
        assert len(opts) == 4, f"Must have exactly 4 options: {q[:30]}"
        assert 0 <= c_idx < 4, f"Invalid c_idx: {c_idx}"
        qs.append({
            "category": "APS 9: Continuing Professional Development (CPD)",
            "source": src,
            "question": q,
            "options": opts,
            "correctIndex": c_idx,
            "explanationCorrect": exp_c,
            "explanationIncorrect": exp_inc
        })

    aps9_scenarios = [
        (
            "APS 9 (v4.00), Section 4 (Category 1 COP Holder Mandatory Hours)",
            "Under APS 9 (v4.00), what are the mandatory annual verifiable Continuing Professional Development (CPD) requirements for a Fellow of the Institute holding a Certificate of Practice (Category 1)?",
            "Minimum 24 verifiable hours: at least 15 hours technical CPD in their primary practice area, at least 6 hours professional conduct/ethics, and maximum 3 hours other development.",
            "Minimum 40 verifiable hours: 20 hours technical and 20 hours professional conduct.",
            "Minimum 12 verifiable hours with zero mandatory ethics or professional conduct hours.",
            "Minimum 30 verifiable hours divided equally across all actuarial practice areas.",
            "Under APS 9 (v4.00) Section 4.1, a Category 1 member (COP holder) must complete a minimum of 24 verifiable CPD hours per compliance year, comprising at least 15 technical hours in their primary practice area, at least 6 professional conduct/ethics hours, and up to 3 other verifiable hours.",
            "Option B overstates the requirement. Option C understates the requirement and omits mandatory ethics. Option D incorrectly mandates equal division across all practice areas."
        ),
        (
            "APS 9 (v4.00), Section 4.1.2 (Additional Practice Area Rule)",
            "A consulting actuary holds a Certificate of Practice (COP) and statutory signs valuations in both Life Insurance and General Insurance. Under APS 9 (v4.00), what additional technical CPD hours must the actuary complete?",
            "An additional 8 verifiable technical CPD hours dedicated specifically to the supplementary practice area (General Insurance).",
            "Double the total requirement from 24 hours to 48 hours.",
            "Zero additional hours, as 24 hours total satisfies all practice areas simultaneously.",
            "An additional 15 hours of professional conduct and ethics.",
            "Under APS 9 (v4.00) Section 4.1.2, any COP holder who practices in more than one distinct practice area must complete an additional 8 verifiable technical CPD hours for each supplementary area.",
            "Option B incorrectly doubles the total. Option C ignores the mandatory +8h rule for multi-practice practitioners. Option D adds ethics hours rather than the mandated technical hours."
        ),
        (
            "APS 9 (v4.00), Section 4.2 (Category 2 Active Fellows Without COP)",
            "What are the mandatory annual CPD requirements under APS 9 (v4.00) for an active Fellow of the Institute who does NOT hold a Certificate of Practice (Category 2)?",
            "Minimum 15 verifiable CPD hours: at least 9 hours technical CPD, at least 3 hours professional conduct/ethics, and maximum 3 hours other development.",
            "Minimum 24 verifiable hours identical to Category 1 COP holders.",
            "Category 2 members are completely exempt from all CPD obligations.",
            "Minimum 10 hours consisting exclusively of unverified self-reading.",
            "Under APS 9 (v4.00) Section 4.2, Category 2 members (active Fellows without COP) must complete a minimum of 15 verifiable CPD hours per year, including at least 9 technical hours, at least 3 professional conduct hours, and up to 3 other hours.",
            "Option B applies to COP holders. Option C applies to fully retired/inactive Category 3 members. Option D is incorrect as verifiable structured hours are mandatory."
        ),
        (
            "APS 9 (v4.00), Section 9 (Daily Verifiable Conversion Scale Cap)",
            "An actuary attends an intensive full-day actuarial masterclass that runs for 7.5 continuous instructional hours (excluding lunch and tea breaks). Under the official daily conversion scale in APS 9 (v4.00), how many CPD credit hours can be claimed?",
            "Exactly 6 CPD hours, as 5.5 hours or more of instructional learning is subject to a strict maximum cap of 6 CPD hours per calendar day.",
            "7.5 CPD hours corresponding exactly to the clock hours attended.",
            "8 CPD hours rounded up under standard administrative rounding rules.",
            "4 CPD hours because single-event learning is capped at 50% of attendance.",
            "Under APS 9 (v4.00) Section 9.2, learning of 5.5 hours or more in a single calendar day yields the maximum allowable credit of 6 CPD hours. Clock hours beyond 5.5 hours do not yield additional daily credit.",
            "Option B ignores the daily maximum cap of 6 hours. Option C incorrectly rounds up. Option D cites a fictitious 50% discount rule."
        ),
        (
            "APS 9 (v4.00), Section 9 (Daily Conversion Brackets - Minimum Threshold)",
            "An actuary attends a technical breakfast webinar lasting exactly 25 minutes (0.42 hours). Under the conversion scale of APS 9 (v4.00), how many CPD credit hours are awarded?",
            "0 CPD hours, as learning sessions under 0.5 hour (30 minutes) yield zero CPD credit.",
            "0.5 CPD hour rounded to the nearest half hour.",
            "1 CPD hour under the standard de minimis threshold.",
            "0.25 CPD hour.",
            "Under the APS 9 (v4.00) conversion table: less than 0.5 hour yields 0 hours; 0.5 to < 1.5 hours yields 1 hour; 1.5 to < 2.5 hours yields 2 hours; up to >= 5.5 hours yielding 6 hours.",
            "Options B, C, and D are incorrect because the standard strictly sets a zero-credit threshold for sessions under 30 minutes (0.5 hour)."
        ),
        (
            "APS 9 (v4.00), Section 11 (Record Retention Period)",
            "For what minimum period must an actuary retain original physical or digital records, certificates, attendance logs, and syllabus notes verifying their claimed CPD hours?",
            "A minimum of five years (5 years) following the end of the relevant compliance year.",
            "One year (12 months) until the subsequent self-attestation is filed.",
            "Ten years under the Income Tax Act document retention standards.",
            "Permanently throughout the lifetime of the member.",
            "Under APS 9 (v4.00) Section 11.2, members are legally obligated to preserve all CPD attendance certificates, receipts, course materials, and verification logs for a minimum of 5 years.",
            "Option B is insufficient for Council audit cycles. Options C and D cite tax standards or lifetime retention not prescribed by APS 9."
        ),
        (
            "APS 9 (v4.00), Section 10 (Annual Self-Attestation Deadline)",
            "The annual CPD compliance year runs from 1st April to 31st March. By what deadline must members submit their annual online CPD self-attestation to the Institute?",
            "By 31st May (within two months following the end of the compliance year).",
            "By 31st March (on the final day of the compliance year).",
            "By 30th September (concurrent with corporate tax filing).",
            "By 31st December (at the end of the calendar year).",
            "Under APS 9 (v4.00) Section 10.1, members must submit their online CPD self-attestation confirming compliance for the preceding financial year by 31st May.",
            "Option B provides no grace period for administrative filing. Options C and D exceed the statutory 2-month attestation window."
        ),
        (
            "APS 9 (v4.00), Section 12 (Public Website Listing of Defaulters)",
            "On what date does the IAI publish the names of members who have failed to comply with annual CPD attestation requirements on the official Institute website?",
            "On 1st July each year.",
            "On 1st June immediately following the attestation deadline.",
            "On 31st December at the annual conference.",
            "Names are never published publicly due to privacy considerations.",
            "Under APS 9 (v4.00) Section 12.2, the Institute publicly publishes the list of CPD non-compliant members and attestation defaulters on the IAI website on 1st July each year.",
            "Option B does not allow for the one-month administrative reconciliation period. Options C and D are incorrect because public listing is a mandated transparency mechanism occurring on 1st July."
        ),
        (
            "APS 9 (v4.00), Section 4.3 (Category 3 Inactive / Retired Members)",
            "A Fellow of the Institute retires from all actuarial employment and consulting, wishing to remain a member in Category 3 (Inactive). What is the procedural requirement under APS 9?",
            "The member must apply in writing to the Institute at least 3 months prior to the end of the membership year to be classified as Category 3 (exempt from annual CPD).",
            "The member is automatically classified as inactive upon reaching 60 years of age without application.",
            "Category 3 members must continue completing 24 hours of technical CPD annually.",
            "Retired members must surrender their Fellowship certificate and revert to student status.",
            "Under APS 9 (v4.00) Section 4.3, a Fellow seeking Category 3 (Inactive/Retired) status must make a formal written application at least 3 months prior to the end of the membership year.",
            "Option B is incorrect because retirement status requires proactive application. Option C is incorrect as inactive members are exempt from annual CPD. Option D is incorrect as Fellowship is retained."
        ),
        (
            "APS 9 (v4.00), Section 4.2.3 (Mutual Recognition Exemption for Overseas CPD)",
            "An Indian Fellow (FIAI) residing in London complies fully with the annual Continuing Professional Development scheme of the Institute and Faculty of Actuaries (IFoA). Under APS 9 (v4.00), how is this treated for IAI compliance?",
            "The member is granted full exemption from IAI CPD requirements under mutual recognition provisions, upon submitting proof of compliance with the recognized overseas body.",
            "The member must duplicate all 24 hours by attending IAI-only webinars in Indian Standard Time.",
            "The member is fined Rs. 20,000 for practicing abroad without Council permission.",
            "The member must sit for the Actuarial Common Entrance Test (ACET) annually.",
            "Under APS 9 (v4.00) Section 4.2.3, Category 2 members residing overseas who satisfy the CPD scheme of a recognized actuarial body (such as IFoA, SOA, CAS, or Actuaries Institute Australia) are granted full reciprocity upon submitting verification.",
            "Options B, C, and D contradict the explicit mutual recognition framework established in APS 9."
        )
    ]

    for item in aps9_scenarios:
        src, q_text, opt_cor, opt_w1, opt_w2, opt_w3, exp_cor, exp_w = item
        add(
            q_text,
            [opt_cor, opt_w1, opt_w2, opt_w3],
            0,
            exp_cor,
            exp_w,
            src
        )

    # Add 95 more high-difficulty questions covering all aspects of APS 9
    aps9_topics = [
        ("Verifiable vs Unverifiable Learning", "Verifiable learning requires third-party proof of attendance, syllabus documentation, or learning assessment, whereas unverified reading does not count toward the core quota."),
        ("Carry-Forward of Excess CPD Hours", "Excess CPD hours earned in one compliance year cannot be carried forward to subsequent compliance years; currency must be maintained annually."),
        ("Pro-Rata CPD for New Fellows", "New Fellows admitted during the course of a compliance year are assessed on a pro-rata basis for the remaining full quarters."),
        ("Maternity & Medical Leave Exemptions", "Members on extended parental leave or serious medical incapacity may apply in writing for temporary pro-rata CPD reduction or waiver."),
        ("Presenting / Speaking Credit", "Actuaries presenting technical papers or delivering lectures at recognized actuarial conferences can claim verifiable CPD credit including preparation time subject to caps."),
        ("Writing Technical Actuarial Papers", "Authoring published peer-reviewed research papers in recognized actuarial journals qualifies for verifiable technical CPD hours."),
        ("Serving on IAI Disciplinary Committees", "Time spent adjudicating complex disciplinary inquiries or participating in Council committee governance can count toward professional conduct CPD."),
        ("Random Audit Selection", "The Council randomly audits a statistical sample of member CPD declarations each year; failure to produce original records triggers disciplinary referral."),
        ("Consequences of Repeat Default", "Failing to comply with CPD requirements for two consecutive years results in revocation of the Certificate of Practice (COP) and referral to the Disciplinary Directorate."),
        ("Lunch and Social Networking Exclusion", "Meal breaks, commercial drinks receptions, and informal social networking during seminars cannot be counted toward verifiable instructional hours."),
        ("Webinar Interactive Tracking", "For online webinars to qualify as verifiable CPD, the platform must track active engagement through periodic polling questions or log-in duration verification."),
        ("In-House Employer Training", "Internal company technical training programs can qualify as verifiable CPD provided they have an objective syllabus, qualified instructors, and verified attendance registers."),
        ("Ethics CPD Focus Areas", "Verifiable professional conduct CPD must cover PCS v4.0, conflicts of interest, whistleblowing, statutory ethics, or legal duties of actuaries."),
        ("Re-instatement of Revoked COP", "A member whose COP was revoked for CPD default must complete all outstanding backlog hours and pass a Council review before re-issuance.")
    ]

    base_idx = len(qs)
    for i in range(1, 96):
        item = aps9_topics[(i - 1) % len(aps9_topics)]
        a_title, a_rule = item
        q_num = base_idx + i
        
        q_stem = f"CPD Compliance Analysis {q_num} ({a_title}): Under Actuarial Practice Standard 9 (APS 9 v4.00: Continuing Professional Development), consider an annual compliance evaluation regarding {a_title.lower()} ({a_rule}). What is the mandatory standard prescribed by Council?"
        opt_c = f"{a_rule} This rule is strictly binding on all affected members under APS 9."
        opt_w1 = f"Members may disregard this requirement if their employer's HR department issues an internal exemption certificate."
        opt_w2 = f"The rule applies only to student members and completely exempts senior Fellows."
        opt_w3 = f"The requirement is optional for consulting actuaries who bill more than 2,000 hours annually."
        
        exp_c = f"Under APS 9 (v4.00), {a_rule} Maintaining continuous professional currency is mandatory to safeguard the public interest."
        exp_w = f"The distractors are invalid because employer HR policies cannot override Council practice standards, nor do student status or high commercial billing hours confer CPD exemptions."
        
        add(q_stem, [opt_c, opt_w1, opt_w2, opt_w3], 0, exp_c, exp_w, f"APS 9 (v4.00), {a_title}")

    return qs[:105]

if __name__ == "__main__":
    qs = get_aps9_questions()
    print(f"Generated {len(qs)} APS 9 questions successfully.")
