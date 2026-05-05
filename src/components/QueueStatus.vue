<template>
  <div class="card">
    <div class="card-header bg-success text-white">
      <h4 class="mb-0">Queue Status</h4>
    </div>
    <div class="card-body">
      <div class="text-center">
        <div class="mb-3">
          <i class="bi bi-check-circle-fill text-success" style="font-size: 3rem;"></i>
        </div>
        
        <!-- Conditional Logic: Dynamic UI based on registration status -->
        <h3 class="text-success mb-3">Registration Successful!</h3>
        
        <div v-if="currentPatient" class="alert alert-info">
          <h5>Your Queue Information</h5>
          <p class="mb-2"><strong>Queue Number:</strong> {{ currentPatient.queueNumber }}</p>
          <p class="mb-2"><strong>Name:</strong> {{ currentPatient.name }}</p>
          <p class="mb-2"><strong>Check-in Time:</strong> {{ currentPatient.checkInTime }}</p>
          <p class="mb-0"><strong>Estimated Wait Time:</strong> {{ calculateWaitTime() }} minutes</p>
        </div>

        <!-- Game Logic: Success/Failure alert messages based on interactions -->
        <div v-if="alertMessage" class="alert" :class="alertType" role="alert">
          {{ alertMessage }}
        </div>

        <div class="mt-4">
          <h5>Current Queue Status</h5>
          <div class="progress mb-3">
            <div 
              class="progress-bar" 
              :class="getProgressBarClass()"
              :style="{ width: queueProgress + '%' }"
            >
              {{ queueProgress }}%
            </div>
          </div>
          <p class="text-muted">
            You are <strong>{{ getPositionInQueue() }}</strong> in line
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="d-flex gap-2 justify-content-center mt-4">
          <button 
            class="btn btn-primary" 
            @click="refreshStatus"
            :disabled="isRefreshing"
          >
            <span v-if="isRefreshing">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Refreshing...
            </span>
            <span v-else>Refresh Status</span>
          </button>
          <button 
            class="btn btn-secondary" 
            @click="handleCancelRegistration"
          >
            Cancel Registration
          </button>
        </div>
      </div>

      <!-- Health Guide Game Component -->
      <div class="mt-4 p-3 bg-light rounded">
        <h5>Digital Health Guide</h5>
        <div class="row">
          <div class="col-md-8">
            <p>Follow our digital guide to prepare for your consultation:</p>
            
            <!-- NPC Movements: Loop to handle repeatable actions -->
            <div class="d-flex align-items-center mb-2">
              <div class="me-2">
                <i class="bi bi-person-circle text-primary" style="font-size: 1.5rem;"></i>
              </div>
              <div>
                <small class="text-muted">Health Assistant:</small>
                <div>{{ getCurrentGuideMessage() }}</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="game-stats">
              <small class="text-muted">Guide Progress</small>
              <div class="progress mt-1">
                <div 
                  class="progress-bar bg-info" 
                  :style="{ width: guideProgress + '%' }"
                >
                  {{ guideProgress }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue'
import { useClinicStore } from '../stores/clinicStore'

export default defineComponent({
  name: 'QueueStatus',
  emits: ['cancel-registration'],
  setup(props, { emit }) {
    const clinicStore = useClinicStore()
    
    const isRefreshing = ref(false)
    const alertMessage = ref('')
    const alertType = ref('alert-info')
    const guideProgress = ref(0)
    let guideInterval = null

    // Computed properties for reactive data
    const currentPatient = computed(() => {
      if (clinicStore.patients.length > 0) {
        return clinicStore.patients[clinicStore.patients.length - 1]
      }
      return null
    })

    const queueProgress = computed(() => {
      const totalPatients = clinicStore.patients.length
      if (totalPatients === 0) return 0
      const currentPosition = getPositionInQueue()
      return Math.max(0, 100 - ((currentPosition - 1) / totalPatients) * 100)
    })

    // Functions for queue management
    const calculateWaitTime = () => {
      const position = getPositionInQueue()
      return position * 5 // Assuming 5 minutes per patient
    }

    const getPositionInQueue = () => {
      if (!currentPatient.value) return 0
      return currentPatient.value.queueNumber
    }

    const getProgressBarClass = () => {
      const position = getPositionInQueue()
      if (position <= 2) return 'bg-success'
      if (position <= 5) return 'bg-warning'
      return 'bg-danger'
    }

    // Event Handling Functions
    const refreshStatus = async () => {
      isRefreshing.value = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Update patient status based on queue position
        if (currentPatient.value) {
          const position = getPositionInQueue()
          if (position === 1) {
            clinicStore.updatePatientStatus(currentPatient.value.id, 'in-progress')
            showSuccessMessage('You are next! Please prepare to enter the consultation room.')
          }
        }
        
      } catch (error) {
        showErrorMessage('Failed to refresh status. Please try again.')
      } finally {
        isRefreshing.value = false
      }
    }

    const handleCancelRegistration = () => {
      if (confirm('Are you sure you want to cancel your registration?')) {
        emit('cancel-registration')
        showSuccessMessage('Registration cancelled successfully.')
      }
    }

    // Alert message functions
    const showSuccessMessage = (message) => {
      alertMessage.value = message
      alertType.value = 'alert-success'
      setTimeout(() => {
        alertMessage.value = ''
      }, 3000)
    }

    const showErrorMessage = (message) => {
      alertMessage.value = message
      alertType.value = 'alert-danger'
      setTimeout(() => {
        alertMessage.value = ''
      }, 3000)
    }

    // Health Guide Game Functions
    const guideMessages = [
      "Please have your ID ready for verification.",
      "Prepare to describe your symptoms in detail.",
      "Bring any medications you're currently taking.",
      "Be ready to discuss your medical history.",
      "Follow the clinic's health and safety protocols.",
      "Wait patiently for your turn to be called."
    ]

    const getCurrentGuideMessage = () => {
      const messageIndex = Math.floor(guideProgress.value / 100 * guideMessages.length)
      return guideMessages[Math.min(messageIndex, guideMessages.length - 1)]
    }

    // Lifecycle Methods: Initialize guide progress
    onMounted(() => {
      // Start guide progress animation
      guideInterval = setInterval(() => {
        if (guideProgress.value < 100) {
          guideProgress.value += 2
        } else {
          clearInterval(guideInterval)
        }
      }, 100)
    })

    onUnmounted(() => {
      if (guideInterval) {
        clearInterval(guideInterval)
      }
    })

    return {
      clinicStore,
      currentPatient,
      isRefreshing,
      alertMessage,
      alertType,
      queueProgress,
      guideProgress,
      calculateWaitTime,
      getPositionInQueue,
      getProgressBarClass,
      refreshStatus,
      handleCancelRegistration,
      getCurrentGuideMessage
    }
  }
})
</script>

<style scoped>
.card {
  max-width: 800px;
  margin: 0 auto;
}

.progress {
  height: 25px;
}

.game-stats {
  font-size: 0.9rem;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

.bi-check-circle-fill {
  animation: checkmark 0.5s ease-in-out;
}

@keyframes checkmark {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>
