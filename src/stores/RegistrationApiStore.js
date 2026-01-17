import { defineStore } from 'pinia'
import StudentRegistration from '@/services/apiService.js'

export const RegistrationApiStore = defineStore('registrationAPI', {
  state: () => ({
    submitting: false,
    error: null,
    successMessage: null,
    createdUserId: null,
  }),

  actions: {
    async submitFullRegistration(registrationStore) {
        if (!registrationStore.canSubmit) return

        this.submitting = true
        this.error = null

        try {
            const formData = new FormData()

            /* ---------------- STEP 1 — Personal Info ---------------- */
            formData.append('name', registrationStore.personalInfo.name)
            formData.append('email', registrationStore.personalInfo.email)
            formData.append('phone_number', registrationStore.personalInfo.phone_number)
            formData.append('gender', registrationStore.personalInfo.gender)
            formData.append('date_of_birth', registrationStore.personalInfo.date_of_birth)
            formData.append(
            'marital_status',
            registrationStore.personalInfo.marital_status
            )

            /* ---------------- STEP 2 — Course Details ---------------- */
            formData.append(
            'course_of_interest',
            registrationStore.courseDetails.course_of_interest
            )
            formData.append(
            'learning_mode',
            registrationStore.courseDetails.learning_mode
            )
            formData.append(
            'student_type',
            registrationStore.courseDetails.student_type
            )
            formData.append(
            'class_schedule',
            registrationStore.courseDetails.class_schedule
            )

            /* ---------------- STEP 3 — Packages ---------------- */
            registrationStore.selectedPackages.forEach(pkg => {
            formData.append('course_packages[]', pkg)
            })

            /* ---------------- STEP 4 — Uploads ---------------- */
            if (registrationStore.uploads.passportPhoto) {
            formData.append(
                'passport',
                registrationStore.uploads.passportPhoto
            )
            }

            if (registrationStore.uploads.paymentProof) {
            formData.append(
                'proof_of_payment',
                registrationStore.uploads.paymentProof
            )
            }

            formData.append(
            'amount_paid',
            String(registrationStore.totalAmount)
            )

            if (registrationStore.agreedToTerms) {
            formData.append('agreed_to_terms', registrationStore.agreedToTerms ? 1 : 0)
            }

            await StudentRegistration.initializeUserData(formData)

            this.successMessage = 'Registration completed successfully'
        } catch (err) {
            this.error =
            err.response?.data?.message ||
            'Failed to submit registration'
            throw err
        } finally {
            this.submitting = false
        }
        }

    // async submitStep1(personalInfo) {
    //   this.submitting = true
    //   this.error = null

    //   try {
    //     await StudentRegistration.initializeUserData(
    //       personalInfo,
    //       (data) => {
    //         this.createdUserId = data.user.id
    //         this.successMessage = 'User created successfully'
    //       }
    //     )
    //   } catch (err) {
    //     this.error =
    //       err.response?.data?.message || 'Failed to submit Step 1'
    //     throw err
    //   } finally {
    //     this.submitting = false
    //   }
    // },

    // async submitStepTwo(registrationStore) {
    //   if (!registrationStore.canSubmit) return

    //   this.submitting = true
    //   this.error = null

    //   try {
    //     const formData = new FormData()

    //     formData.append(
    //       'course_of_interest',
    //       registrationStore.courseDetails.course_of_interest
    //     )
    //     formData.append(
    //       'learning_mode',
    //       registrationStore.courseDetails.learning_mode
    //     )
    //     formData.append(
    //       'student_type',
    //       registrationStore.courseDetails.student_type
    //     )
    //     formData.append(
    //       'class_schedule',
    //       registrationStore.courseDetails.class_schedule
    //     )

    //    registrationStore.selectedPackages.forEach(pkg => {
    //     formData.append('course_packages[]', pkg)
    //     })

    //     if (registrationStore.uploads.passportPhoto) {
    //         formData.append(
    //             'passport',
    //             registrationStore.uploads.passportPhoto
    //         )
    //     }

    //     if (registrationStore.uploads.paymentProof) {
    //        formData.append(
    //       'proof_of_payment',
    //       registrationStore.uploads.paymentProof
    //     )  
    //     }

    //     registrationStore.selectedPackages.forEach(pkg => {
    //         formData.append('course_packages[]', pkg)
    //     })

    //     if (registrationStore.agreedToTerms) {
    //         formData.append('agreed_to_terms','1')
    //     }
        

    //     await StudentRegistration.initializeCourseData(
    //       formData,
    //       () => {
    //         this.successMessage = 'Registration completed successfully'
    //       }
    //     )
    //   } catch (err) {
    //     this.error =
    //       err.response?.data?.message ||
    //       'Failed to submit registration'
    //     throw err
    //   } finally {
    //     this.submitting = false
    //   }
    // },
  },
})
