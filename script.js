

let hide_text_btn = document.getElementById('hide_text_btn');
let hide_text = document.getElementById('hide_text');

hide_text_btn.addEventListener('click', toggleText);

function toggleText() {
    hide_text.classList.toggle('show');
    if (hide_text.classList.contains('show')) {
        hide_text_btn.innerHTML = 'Read Less';
    } else {
        hide_text_btn.innerHTML = 'Read More';
    }
}
