// template_17q0da4
// service_zotygp9
// MCjPEhF1uQPmKkpIg

function contact(event) {
    event.preventDefault();
        const loading = document.querySelector('.modal__overlay--loading')
        const success = document.querySelector('.modal__overlay--success')
        loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_zotygp9',
             'template_17q0da4',
             event.target,
             'MCjPEhF1uQPmKkpIg'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The Email Service is Temporarily Unavailable Please contact me directly on email"
            );
        })
} 
let isModalOpen = false;
function toggleModal() {
    /*isModalOpen = !isModalOpen;*/
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}