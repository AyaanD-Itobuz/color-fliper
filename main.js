button = document.getElementById("click") ;


function generate()
{
    let hex = Math.floor(Math.random() * 1000000)
    let hex_code = '#' + hex ;
    console.log(hex_code)
    document.body.style.backgroundColor = hex_code
    button.innerHTML = hex_code
}