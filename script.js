function calculateNumerology() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;

  if (!name || !dob) {
    document.getElementById("result").innerText = "Please enter both name and birth date.";
    return;
  }

  const lifePathNumber = getLifePathNumber(dob);
  const message = `
    <strong>Your Life Path Number:</strong> ${lifePathNumber}<br>
    <strong>Personality Traits:</strong> ${getTraits(lifePathNumber)}<br>
    <strong>Potential Challenges:</strong> ${getChallenges(lifePathNumber)}<br>
    <strong>Relationship Compatibility:</strong> ${getCompatibility(lifePathNumber)}
  `;

  document.getElementById("result").innerHTML = message;
}

function getLifePathNumber(dob) {
  const numbers = dob.replace(/-/g, '').split('').map(Number);
  let sum = numbers.reduce((a, b) => a + b, 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum;
}

function getTraits(num) {
  const traits = {
    1: "Leader, Independent, Determined",
    2: "Diplomatic, Sensitive, Cooperative",
    3: "Creative, Expressive, Joyful",
    4: "Practical, Hardworking, Loyal",
    5: "Adventurous, Curious, Energetic",
    6: "Nurturing, Responsible, Caring",
    7: "Analytical, Spiritual, Introspective",
    8: "Ambitious, Efficient, Powerful",
    9: "Compassionate, Humanitarian, Artistic",
    11: "Visionary, Idealistic, Inspired",
    22: "Master Builder, Practical Visionary",
    33: "Master Teacher, Compassionate Leader"
  };
  return traits[num] || "Unique Traits";
}

function getChallenges(num) {
  const challenges = {
    1: "Being too self-centered or stubborn",
    2: "Overly sensitive or passive",
    3: "Scattered energy, lack of focus",
    4: "Rigidity, resistance to change",
    5: "Impulsiveness, restlessness",
    6: "Overbearing, perfectionism",
    7: "Isolation, distrust",
    8: "Workaholism, controlling nature",
    9: "Overgiving, losing self in others",
    11: "Anxiety, overwhelming pressure",
    22: "Overworking, extreme expectations",
    33: "Neglecting self, taking on too much"
  };
  return challenges[num] || "Unique life lessons";
}

function getCompatibility(num) {
  const compatibility = {
    1: "Compatible with 3, 5, 6",
    2: "Compatible with 4, 6, 8",
    3: "Compatible with 1, 5, 9",
    4: "Compatible with 2, 6, 7",
    5: "Compatible with 1, 3, 7",
    6: "Compatible with 2, 4, 8",
    7: "Compatible with 4, 5, 9",
    8: "Compatible with 2, 6, 9",
    9: "Compatible with 3, 7, 8",
    11: "Compatible with 2, 7, 9",
    22: "Compatible with 4, 6, 8",
    33: "Compatible with 3, 6, 9"
  };
  return compatibility[num] || "Special spiritual connection";
}
