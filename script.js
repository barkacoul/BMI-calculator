window.onload = function()
{
    var calculate, weight, height, bmi, result;

    calculate = document.getElementById('calculate');

    calculate.onclick = function(){
        weight = Number(document.getElementById('weight').value);
        height = Number(document.getElementById('height').value);
        bmi = weight/Math.pow(height, 2);
        bmi = Math.round(bmi);
        switch(true)
        {
            case (bmi < 18.5):
                result = "Your BMI is " + bmi + ".  You're underweight.";
                break;
            case (bmi >= 18.5 && bmi <= 24.9):
                result = "Your BMI is " + bmi + ".  You're normal.";
                break;
            case (bmi >= 25 && bmi <= 29.9):
                result = "Your BMI is " + bmi + ".  You're overweight.";
                break;
            case (bmi >= 30 && bmi < 40):
                result = "Your BMI is " + bmi + ".  You're obese. Please consider losing some weight.";
                break;
            case (bmi >= 40):
                result = "Your BMI is " + bmi + ".  You're morbidly obese. You should take time to consider your health and seriously start losing weight.";
                break;
                                
        }

        document.getElementById('result').innerHTML = result;
    }

}