// import _ from 'lodash'
import { parseInputs } from './utils/parse-inputs'
import { inputAreValid } from './utils/input-are-valid'

// function component () {
//   const element = document.createElement('div')
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//   return element
// }
// document.body.appendChild(component())

export const run = (alertService, componentService) => {
  alertService.hideError()
  componentService.onClick(() => {
    alertService.hideError()
    const inputs = componentService.getInputs()
    const parsedInputs = parseInputs(...inputs)
    if (inputAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs
      componentService.setResult(numA + numB)
    } else {
      componentService.setResult('')
      alertService.handleAdditionError(inputs, parsedInputs)
    }
  })
}
