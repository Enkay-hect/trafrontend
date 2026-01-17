import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'


export const useRegistrationStore = defineStore('registration', {
  state: () => ({
    step: 1,
    maxStep: 4,

    personalInfo: {
      name: '',
      email: '',
      phone_number: '',
      gender: '',
      date_of_birth: '',
      marital_status: '',
    },

    courseDetails: {
      course_of_interest: '',
      learning_mode: '',
      class_schedule: '',
      student_type: ''
    },

    selectedPackages: [],

   packagePrices: {
    'web_fundamentals': 150000,
    'Web_Basics': 50000,
    'JavaScript_TypeScript': 50000,
    'Frameworks': 50000,

    'PHP/JavaScript_Fundamentals': 50000,
    'Laravel_Node.js_ExpressJS': 30000,
    'Databases': 20000,

    'JS_RN_Fundamentals': 50000,
    'RN_Framework': 50000,
    'Firebase': 30000,

    'UI/UX with Figma': 80000,

    'Data_Analytics A': 70000,
    'Data_Analytics B': 70000,
  },


    /* ---------------- uploads and acknowledgement ---------------- */
    uploads: {
      passportPhoto: null,
      paymentProof: null,
    },

    agreedToTerms:  false ,
  }),


  getters: {
  totalAmount(state) {
    return state.selectedPackages.reduce((sum, pkg) => {
      return sum + (state.packagePrices[pkg] || 0)
    }, 0)
  },


  /* Step-specific validation */
  canProceedStep1(state) {
    const { name, email, phone_number, gender, date_of_birth, marital_status } = state.personalInfo
    return !!(name && email && phone_number && gender && date_of_birth && marital_status)
  },

  canProceedStep2(state) {
    const { course_of_interest, learning_mode, class_schedule, student_type } = state.courseDetails
    return !!(course_of_interest && learning_mode && class_schedule && student_type)
  },

  canProceedStep3(state) {
    return state.selectedPackages.length > 0
  },

  canSubmit(state) {
    return (
       state.uploads.passportPhoto instanceof File && // ensure a file is selected
      state.uploads.paymentProof instanceof File &&
      state.agreedToTerms === true
    )
  },

  /* step control_1 */
  canProceed(state) {
    if (state.step === 1) return this.canProceedStep1
    if (state.step === 2) return this.canProceedStep2
    if (state.step === 3) return this.canProceedStep3
    if (state.step === 4) return this.canSubmit
    return false
  },
},


  
  actions: {

      /* step control_2 */

    nextStep() {
      if (this.step < this.maxStep) {
        this.step++
      }
    },

    prevStep() {
      if (this.step > 1) {
        this.step--
      }
    },

    goToStep(step) {
      if (step >= 1 && step <= this.maxStep) {
        this.step = step
      }
    },

    /* ---------------- DATA UPDATERS ---------------- */
    updatePersonalInfo(payload) {
      this.personalInfo = { ...this.personalInfo, ...payload }
    },

    updateCourseDetails(payload) {
      this.courseDetails = { ...this.courseDetails, ...payload }
    },

    updateUploads(payload) {
      this.uploads = { ...this.uploads, ...payload }
    },

    setAgreement(value) {
      this.agreedToTerms = value
    },

    /* ---------------- PACKAGE TOGGLER ---------------- */
    togglePackage(pkg) {
      if (this.selectedPackages.includes(pkg)) {
        this.selectedPackages = this.selectedPackages.filter(
          p => p !== pkg
        )
      } else {
        this.selectedPackages.push(pkg)
      }
    },

    clearPackages() {
      this.selectedPackages = []
    },

    /* ---------------- RESET AFTER SUBMIT ---------------- */
    resetRegistration() {
      this.$reset()
    },
  },
})
