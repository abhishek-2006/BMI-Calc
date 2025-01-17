document.getElementById('calculateBtn').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = "Please enter valid weight and height values!";
        return;
    }

    const heightInMeters = height / 100; // Convert height to meters
    const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

    let category = "";
    let weightChangeMessage = "";

    if (bmi < 18.5) {
        category = "Underweight";
        const minWeight = (18.5 * (heightInMeters ** 2)).toFixed(2); // Minimum normal weight
        weightChangeMessage = `You need to gain at least ${(minWeight - weight).toFixed(2)} kg to reach the normal range.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
        weightChangeMessage = "Your weight is in the normal range. Great job!";
    } else if (bmi > 24.9) {
        category = "Overweight";
        const maxWeight = (24.9 * (heightInMeters ** 2)).toFixed(2); // Maximum normal weight
        weightChangeMessage = `You need to lose at least ${(weight - maxWeight).toFixed(2)} kg to reach the normal range.`;
    } 
    
    document.getElementById('result').innerHTML = `
        <p>Your BMI is <strong>${bmi}</strong>.</p>
        <p>You are categorized as <strong>${category}</strong>.</p>
        <p>${weightChangeMessage}</p>
    `;
});
