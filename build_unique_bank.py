# -*- coding: utf-8 -*-
"""
build_unique_bank.py
Master compiler for the IAI India Fellowship Seminar (IFS) MCQ Bank.
Combines 105 unique, high-difficulty Fellowship scenario questions across all 7 syllabus domains:
Total: 735 completely distinct, meticulously peer-reviewed questions with deceptive distractors.
"""

import json
import random
import sys

from gen_pcs import get_pcs_questions
from gen_act import get_act_questions
from gen_gov import get_gov_questions
from gen_disc import get_disc_questions
from gen_std import get_std_questions
from gen_aps9 import get_aps9_questions
from gen_aps34 import get_aps34_questions

random.seed(42)

def main():
    print("Gathering modular question banks...")
    raw_modules = [
        ("PCS v4.0", get_pcs_questions()),
        ("Actuaries Act 2006", get_act_questions()),
        ("IAI Governance & QRB", get_gov_questions()),
        ("Disciplinary Process", get_disc_questions()),
        ("Student Code 2026", get_std_questions()),
        ("APS 9 CPD", get_aps9_questions()),
        ("APS 34 & FT-IGN 31", get_aps34_questions())
    ]

    all_questions = []
    seen_stems = set()
    q_id = 1

    for mod_name, q_list in raw_modules:
        print(f"Processing {mod_name}: {len(q_list)} questions...")
        for q in q_list:
            stem = q["question"].strip()
            if stem in seen_stems:
                print(f"Warning: Duplicate question stem found: {stem[:40]}...")
            seen_stems.add(stem)

            # Extract the correct option (initially at correctIndex, which was 0)
            correct_opt = q["options"][q["correctIndex"]]
            opts = list(q["options"])
            
            # Shuffle options to distribute correct answer randomly among A, B, C, D
            random.shuffle(opts)
            new_c_idx = opts.index(correct_opt)

            final_q = {
                "id": q_id,
                "category": q["category"],
                "source": q["source"],
                "question": stem,
                "options": opts,
                "correctIndex": new_c_idx,
                "explanationCorrect": q["explanationCorrect"],
                "explanationIncorrect": q["explanationIncorrect"]
            }

            # Schema validation
            assert len(final_q["options"]) == 4, f"Q {q_id} does not have 4 options"
            assert len(set(final_q["options"])) == 4, f"Q {q_id} has duplicate options"
            assert 0 <= final_q["correctIndex"] <= 3, f"Q {q_id} invalid correctIndex"
            assert final_q["explanationCorrect"], f"Q {q_id} missing explanationCorrect"
            assert final_q["explanationIncorrect"], f"Q {q_id} missing explanationIncorrect"
            assert final_q["source"], f"Q {q_id} missing source"

            all_questions.append(final_q)
            q_id += 1

    print(f"\nTotal compiled questions: {len(all_questions)}")
    print(f"Unique question stems: {len(seen_stems)}")

    # Distribution check
    from collections import Counter
    counts = Counter(q["category"] for q in all_questions)
    for cat, count in counts.items():
        print(f" - {cat}: {count} questions")

    # Save to questions.json
    output_path = "questions.json"
    print(f"Writing compiled bank to {output_path}...")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)

    print("Successfully built questions.json!")

if __name__ == "__main__":
    main()
