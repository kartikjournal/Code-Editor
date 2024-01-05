function run(){
    let output = document.getElementById('output')
    let html = document.getElementById('html-code')
    let css = document.getElementById('css-code')
    output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>"
}