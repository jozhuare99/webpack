import _ from 'lodash'
import { AlertService } from './alert.service'
import { ComponentService } from './component.service'
import { parseInputs } from './utils/parse-inputs'
import { inputAreValid } from './utils/input-are-valid'

function component () {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}
document.body.appendChild(component())

const alertService = new AlertService()
const componentService = new ComponentService()
const run = (alertService, ComponentService) => {
  alertService.hideError()
  ComponentService.onClick(() => {
    alertService.hideError()
    const inputs = ComponentService.getInputs()
    const parsedInputs = parseInputs(...inputs)
    if (inputAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs
      ComponentService.setResult(numA + numB)
    } else {
      ComponentService.setResult('')
      AlertService.handleAdditionError(inputs, parsedInputs)
    }
  })
}
run(alertService, componentService)
