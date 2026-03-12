function calc(){
    let weight = document.getElementById('weight')
    let height = document.getElementById('height')
    let bmi = (weight.value / height.value**2).toFixed(2)
    console.log(bmi)
    let result = document.getElementById('result').innerText=bmi
}
 // updated
