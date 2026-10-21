import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('questions.json', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total Questions in questions.json: {len(data)}")

# Verify all questions
for i, q in enumerate(data):
    assert 'id' in q
    assert 'category' in q
    assert 'source' in q
    assert 'question' in q
    assert 'options' in q and len(q['options']) == 4
    assert 'correctIndex' in q and 0 <= q['correctIndex'] <= 3
    assert 'explanationCorrect' in q and len(q['explanationCorrect']) > 10
    assert 'explanationIncorrect' in q and len(q['explanationIncorrect']) > 10
    
    # Check that correct option is not empty
    correct_opt = q['options'][q['correctIndex']]
    assert len(correct_opt) > 0

print("All 240 questions passed structural integrity checks!")

# Print first question of each module
for i in range(0, len(data), 30):
    q = data[i]
    print(f"\n[Module {i//30 + 1}] {q['category']}")
    print(f"  Q#{q['id']}: {q['question'][:80]}...")
    print(f"  Source: {q['source']}")
    print(f"  Correct Opt [{q['correctIndex']}]: {q['options'][q['correctIndex']][:70]}...")
