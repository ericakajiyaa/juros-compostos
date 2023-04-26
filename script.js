document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = document.getElementById('value').value / 100;
    const time = document.getElementById('value').value;
    
    const total = value * (1 + fee)**time;

    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2).replace(".",","))
});