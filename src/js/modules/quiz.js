const quizForm = document.querySelector('#quiz_form_site')
const previousButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const beginButton = document.querySelector('#begin_step')
const submitButton = document.querySelector('#submit')
const tabTargets = document.querySelectorAll('.tab')
const quizFooter = document.querySelector('.quiz__footer')
const logoWhite = document.querySelector('.quiz__logo__white')
const logoBlack = document.querySelector('.quiz__logo__black')
const radioBtn = document.querySelectorAll('.custom-radio')

const progressBar = document.querySelector('.progressbar')
const progress = document.querySelector('.progress')
const percent = document.querySelector('.digit__percent')
const tabPanels = document.querySelectorAll('.tabpanel')
let currentStep = 0
let numberPercent = 0


if(!quizForm){

}else{
    // Validate first input on load
    validateEntry()

// Next: Change UI relative to current step and account for button permissions
    nextButton.addEventListener('click', (event) => {
        event.preventDefault()
        // Hide current tab
        tabPanels[currentStep].classList.add('hidden')
        tabTargets[currentStep].classList.remove('active')

        // Show next tab
        tabPanels[currentStep + 1].classList.remove('hidden')
        numberPercent = tabPanels[currentStep + 1].getAttribute('data-percent')
        percent.innerHTML = numberPercent + '%'
        progress.style.width = numberPercent + '%'
        tabTargets[currentStep + 1].classList.add('active')
        currentStep += 1

        validateEntry()
        updateStatusDisplay()
    })

// Begin: Change UI relative to current step and account for button permissions
    beginButton.addEventListener('click', (event) => {
        event.preventDefault()

        // Hide current tab
        tabPanels[currentStep].classList.add('hidden')
        tabTargets[currentStep].classList.remove('active')

        // Show next tab
        tabPanels[currentStep + 1].classList.remove('hidden')
        tabTargets[currentStep + 1].classList.add('active')
        currentStep += 1

        validateEntry()
        updateStatusDisplay()
    })

// Previous: Change UI relative to current step and account for button permissions
    previousButton.addEventListener('click', (event) => {
        event.preventDefault()

        // Hide current tab
        tabPanels[currentStep].classList.add('hidden')
        tabTargets[currentStep].classList.remove('active')

        // Show previous tab
        tabPanels[currentStep - 1].classList.remove('hidden')
        numberPercent = tabPanels[currentStep - 1].getAttribute('data-percent')
        percent.innerHTML = numberPercent + '%'
        progress.style.width = numberPercent + '%'
        tabTargets[currentStep - 1].classList.add('active')
        currentStep -= 1

        nextButton.removeAttribute('disabled')
        updateStatusDisplay()
    })


    function updateStatusDisplay() {
        // If on the last step, hide the next button and show submit
        if (currentStep === tabTargets.length - 1) {
            nextButton.classList.add('hidden')
            previousButton.classList.remove('hidden')
            submitButton.classList.remove('hidden')
            quizFooter.classList.add('hidden')
            validateEntry()

            // If it's the first step hide the previous button
        } else if (currentStep == 0) {
            nextButton.classList.add('hidden')
            previousButton.classList.add('hidden')
            progressBar.classList.add('hidden')
            quizFooter.classList.add('hidden')
            quizForm.classList.remove('quiz__form_white')
            logoWhite.classList.remove('hidden')
            logoBlack.classList.add('hidden')
            submitButton.classList.add('hidden')
            // In all other instances display both buttons
        } else {
            nextButton.classList.remove('hidden')
            previousButton.classList.remove('hidden')
            progressBar.classList.remove('hidden')
            quizFooter.classList.remove('hidden')
            quizForm.classList.add('quiz__form_white')
            logoBlack.classList.remove('hidden')
            logoWhite.classList.add('hidden')
            submitButton.classList.add('hidden')
        }
    }

    function validateEntry() {
        let input = tabPanels[currentStep].querySelector('.form-input')

        // Start but disabling continue button
        nextButton.setAttribute('disabled', true)
        submitButton.setAttribute('disabled', true)

        // Validate on initial function fire
        setButtonPermissions(input)

        // Validate on input
        // input.addEventListener('input', () => setButtonPermissions(input))
        // Validate if bluring from input
        // input.addEventListener('blur', () => setButtonPermissions(input))
    }

    function setButtonPermissions(input) {
        // if (isEmpty(input.value)) {
        //     nextButton.setAttribute('disabled', )
        //     submitButton.setAttribute('disabled', )
        // } else {
        //     nextButton.removeAttribute('disabled')
        //     submitButton.removeAttribute('disabled')
        // }
    }

    radioBtn.forEach(radio => {
        radio.addEventListener('click', function handleClick(event) {
            console.log('1');
            // Hide current tab
            tabPanels[currentStep].classList.add('hidden')
            tabTargets[currentStep].classList.remove('active')

            // Show next tab
            tabPanels[currentStep + 1].classList.remove('hidden')
            numberPercent = tabPanels[currentStep + 1].getAttribute('data-percent')
            percent.innerHTML = numberPercent + '%'
            progress.style.width = numberPercent + '%'
            tabTargets[currentStep + 1].classList.add('active')
            currentStep += 1

            validateEntry()
            updateStatusDisplay()
        });
    });
}