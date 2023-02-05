import { inputAreValid } from './utils/input-are-valid'
export class AlertService {
  constructor () {
    this.errorBox = document.getElementById('error')
  }

  handleAdditionError (inputs, numbers) {
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputAreValid(numbers[index])) {
        return message + ''
      } else {
        return message + `${str} is not a number`
      }
    }, 'please enter two valid numbers!')
    this.errorBox.classList.remove('invisible')
    this.errorBox.innerText = fullMessage
  }

  hideError () {
    this.errorBox.classList.add('invisible')
  }
}
