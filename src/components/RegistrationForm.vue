<template>
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h4 class="mb-0">Patient Registration Form</h4>
    </div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <!-- Patient Name Input -->
        <div class="mb-3">
          <label for="name" class="form-label">Full Name *</label>
          <input 
            type="text" 
            class="form-control" 
            id="name"
            v-model="formData.name"
            :class="{ 'is-invalid': errors.name }"
            placeholder="Enter your full name"
            required
          >
          <div v-if="errors.name" class="invalid-feedback">
            {{ errors.name }}
          </div>
        </div>

        <!-- National ID Input -->
        <div class="mb-3">
          <label for="nationalID" class="form-label">National ID *</label>
          <input 
            type="text" 
            class="form-control" 
            id="nationalID"
            v-model="formData.nationalID"
            :class="{ 'is-invalid': errors.nationalID }"
            placeholder="Enter your National ID (e.g., 1234567890123)"
            required
          >
          <div v-if="errors.nationalID" class="invalid-feedback">
            {{ errors.nationalID }}
          </div>
        </div>

        <!-- Symptoms Selection -->
        <div class="mb-3">
          <label class="form-label">Select Symptoms (check all that apply)</label>
          <div class="row">
            <!-- Symptom Collection: Array binding with checkboxes -->
            <div v-for="symptom in clinicStore.symptoms" :key="symptom" class="col-md-4 mb-2">
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  :id="'symptom-' + symptom"
                  :value="symptom"
                  v-model="formData.symptoms"
                >
                <label class="form-check-label" :for="'symptom-' + symptom">
                  {{ symptom }}
                </label>
              </div>
            </div>
          </div>
          <div v-if="errors.symptoms" class="text-danger">
            {{ errors.symptoms }}
          </div>
        </div>

        <!-- Alert Messages: Conditional Logic for Success/Failure -->
        <div v-if="alertMessage" class="alert" :class="alertType" role="alert">
          {{ alertMessage }}
        </div>

        <!-- Action Buttons -->
        <div class="d-flex gap-2">
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            <span v-if="isSubmitting">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Processing...
            </span>
            <span v-else>Submit Check-in</span>
          </button>
          <button type="button" class="btn btn-secondary" @click="resetForm">
            Clear Form
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { useClinicStore } from '../stores/clinicStore'

export default defineComponent({
  name: 'RegistrationForm',
  emits: ['submit-checkin'],
  setup(props, { emit }) {
    const clinicStore = useClinicStore()
    
    // Reactive Variables: Vue's reactivity system for patient input
    const formData = reactive({
      name: '',
      nationalID: '',
      symptoms: []
    })

    const errors = reactive({
      name: '',
      nationalID: '',
      symptoms: ''
    })

    const isSubmitting = ref(false)
    const alertMessage = ref('')
    const alertType = ref('alert-info')

    // Form Validation: Conditional Statements
    const validateForm = () => {
      let isValid = true
      
      // Reset errors
      errors.name = ''
      errors.nationalID = ''
      errors.symptoms = ''

      // Conditional Statements to check if fields are empty or invalid
      if (!formData.name.trim()) {
        errors.name = 'Name is required'
        isValid = false
      } else if (formData.name.length < 2) {
        errors.name = 'Name must be at least 2 characters'
        isValid = false
      }

      if (!formData.nationalID.trim()) {
        errors.nationalID = 'National ID is required'
        isValid = false
      } else if (!/^\d{13}$/.test(formData.nationalID)) {
        errors.nationalID = 'National ID must be exactly 13 digits'
        isValid = false
      }

      if (formData.symptoms.length === 0) {
        errors.symptoms = 'Please select at least one symptom'
        isValid = false
      }

      return isValid
    }

    // Event Handling: Function to handle submitCheckIn
    const submitForm = async () => {
      if (!validateForm()) {
        // Conditional Logic: Failure alert message
        alertMessage.value = 'Please correct the errors in the form'
        alertType.value = 'alert-danger'
        setTimeout(() => {
          alertMessage.value = ''
        }, 3000)
        return
      }

      isSubmitting.value = true

      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Emit the patient data to parent component
        emit('submit-checkin', { ...formData })
        
        // Conditional Logic: Success alert message
        alertMessage.value = `Registration successful! Your queue number is ${clinicStore.queueNumber}`
        alertType.value = 'alert-success'
        
        // Reset form after successful submission
        resetForm()
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          alertMessage.value = ''
        }, 3000)
        
      } catch (error) {
        alertMessage.value = 'Registration failed. Please try again.'
        alertType.value = 'alert-danger'
      } finally {
        isSubmitting.value = false
      }
    }

    // Event Handling: Function to handle form reset
    const resetForm = () => {
      formData.name = ''
      formData.nationalID = ''
      formData.symptoms = []
      errors.name = ''
      errors.nationalID = ''
      errors.symptoms = ''
      alertMessage.value = ''
    }

    return {
      formData,
      errors,
      isSubmitting,
      alertMessage,
      alertType,
      clinicStore,
      submitForm,
      resetForm
    }
  }
})
</script>

<style scoped>
.card {
  max-width: 800px;
  margin: 0 auto;
}

.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
</style>
