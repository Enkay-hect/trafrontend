import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'


export const useRegistrationStore = defineStore('registration', {
  state: () => ({
    /* ---------------- STEP CONTROL ---------------- */
    step: 1,
    maxStep: 4,

    /* ---------------- STEP 1 — Personal Information ---------------- */
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      gender: '',
      dob: '',
      maritalStatus: '',
    },

    /* ---------------- STEP 2 — Course Details ---------------- */
    courseDetails: {
      courseInterest: '',
      learningMode: '',
      classSchedule: '',
    },

    /* ---------------- STEP 3 — Course Packages ---------------- */
    selectedPackages: [],

   packagePrices: {
    /* Frontend  */
    'web_fundamentals': 150000,
    'Web_Basics': 50000,
    'JavaScript_TypeScript': 50000,
    'Frameworks': 50000,

    // Backend
    'PHP/JavaScript_Fundamentals': 50000,
    'Laravel_Node.js_ExpressJS': 30000,
    'Databases': 20000,

    /* Mobile App Development */
    'JS_RN_Fundamentals': 50000,
    'RN_Framework': 50000,
    'Firebase': 30000,

    /* UI/UX */
    'UI/UX with Figma': 80000,

    /* Data Analytics */
    'Data_Analytics A': 70000,
    'Data_Analytics B': 70000,
  },


    /* ---------------- STEP 4 — Uploads & Acknowledgement ---------------- */
    uploads: {
      passportPhoto: null,
      paymentProof: null,
    },

    agreedToTerms: false,
  }),


  getters: {
  totalAmount(state) {
    return state.selectedPackages.reduce((sum, pkg) => {
      return sum + (state.packagePrices[pkg] || 0)
    }, 0)
  },

  /* Step-specific validation */
  canProceedStep1(state) {
    const { name, email, phone, gender, dob, maritalStatus } = state.personalInfo
    return !!(name && email && phone && gender && dob && maritalStatus)
  },

  canProceedStep2(state) {
    const { courseInterest, learningMode, classSchedule } = state.courseDetails
    return !!(courseInterest && learningMode && classSchedule)
  },

  canProceedStep3(state) {
    return state.selectedPackages.length > 0
  },

  canSubmit(state) {
    return (
      state.agreedToTerms &&
      state.uploads.passportPhoto &&
      state.uploads.paymentProof
    )
  },

  /* 🔑 Single public gate */
  canProceed(state) {
    if (state.step === 1) return this.canProceedStep1
    if (state.step === 2) return this.canProceedStep2
    if (state.step === 3) return this.canProceedStep3
    if (state.step === 4) return this.canSubmit
    return false
  },
},


  
  actions: {
    /* ---------------- STEP CONTROL ---------------- */
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
