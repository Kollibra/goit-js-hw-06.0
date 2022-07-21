


const textInput = document.querySelector('#validation-input')

const lengthEl = textInput.getAttribute('data-length')


textInput.addEventListener('blur', event => {
	if (event.target.value.length === Number(lengthEl)) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})









