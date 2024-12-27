container_button = document.getElementById("click");


function generate() {
    let hex = Math.floor(Math.random() * 1000000)
    const hex_code = '#' + hex;
    console.log(hex_code) ;
    document.body.style.backgroundColor = hex_code ;
    container_button.innerHTML = hex_code ;
}
