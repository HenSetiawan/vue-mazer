import { ref } from 'vue'

const currentStep = ref(1)
const progressBarWidth = ref(0)
const maximumStep = ref(2)

const displayStep = (stepNumber) => {
  if (stepNumber >= 1 && stepNumber <= 3) {
    const currentStepElement = document.querySelector('.step-' + currentStep.value)
    const nextStepElement = document.querySelector('.step-' + stepNumber)
    if (currentStepElement) {
      currentStepElement.style.display = 'none'
    }
    if (nextStepElement) {
      nextStepElement.style.display = 'block'
    }
    currentStep.value = stepNumber
    updateProgressBar()
  }
}

const nextStep = () => {
  if (currentStep.value < 3) {
    const currentStepElement = document.querySelector('.step-' + currentStep.value)
    const nextStepElement = document.querySelector('.step-' + (currentStep.value + 1))
    if (currentStepElement) {
      currentStepElement.classList.add('animate__animated', 'animate__fadeOutLeft')
    }
    currentStep.value++
    setTimeout(() => {
      if (currentStepElement) {
        currentStepElement.classList.remove('animate__animated', 'animate__fadeOutLeft')
        currentStepElement.style.display = 'none'
      }
      if (nextStepElement) {
        nextStepElement.style.display = 'block'
        nextStepElement.classList.add('animate__animated', 'animate__fadeInRight')
      }
      updateProgressBar()
    }, 500)
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    const currentStepElement = document.querySelector('.step-' + currentStep.value)
    const prevStepElement = document.querySelector('.step-' + (currentStep.value - 1))
    if (currentStepElement) {
      currentStepElement.classList.add('animate__animated', 'animate__fadeOutRight')
    }
    currentStep.value--
    setTimeout(() => {
      if (currentStepElement) {
        currentStepElement.classList.remove('animate__animated', 'animate__fadeOutRight')
        currentStepElement.style.display = 'none'
      }
      if (prevStepElement) {
        prevStepElement.style.display = 'block'
        prevStepElement.classList.add('animate__animated', 'animate__fadeInLeft')
      }
      updateProgressBar()
    }, 500)
  }
}

const updateProgressBar = () => {
  progressBarWidth.value = ((currentStep.value - 1) / maximumStep.value) * 100
}

export { displayStep, nextStep, prevStep, updateProgressBar, currentStep, progressBarWidth, maximumStep }
