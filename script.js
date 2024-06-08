const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value) * 0.01;
    // multiplying height by 0.01 to convert into meter unit
    const weight = parseInt(document.querySelector('#weight').value);
    let BMI = '';
    const Result = document.querySelector('#result')
    const comment = document.querySelector('#comment')

    // console.log(`Height is ${height} and Weight is ${weight}`);


    if (height == ' ' || height < 0 || isNaN(height)) {
        Result.innerHTML = ` Enter a valid Height. ${height}`
    }
    else if (weight == ' ' || weight < 0 || isNaN(weight)) {
        Result.innerHTML = ` Enter a valid Weight. ${weight}`
    }
    else {// to check for invaldi input
        BMI = Math.round((weight / (height ** 2)) * 10) / 10
        //BMI is weight in kilograms (kg) divided by height in meters (m) squared.
        Result.innerHTML = `Your BMI is ${BMI}`
    }
    if (BMI < 18.6) {
        comment.innerHTML = `You are Under Weight.`
    }
    if (BMI >= 18.6 && BMI <= 24.9) {
        comment.innerHTML = ` You are fit.`
    }
    if (BMI > 24.9) {
        comment.innerHTML = `You are OverWeight.`
    }

})