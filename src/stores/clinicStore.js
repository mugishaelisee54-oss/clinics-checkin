import { defineStore } from 'pinia'

export const useClinicStore = defineStore('clinic', {
  state: () => ({
    // State Variables for queue management
    queueNumber: 1,
    isRegistered: false,
    
    // Arrays for data storage
    patients: [], // Patient List Array
    symptoms: ['Fever', 'Cough', 'Headache', 'Fatigue', 'Nausea', 'Body Pain'], // Symptom Collection Array
    queue: [], // Queue Management Array
    
    // Navigation menu array
    navigationItems: [
      { name: 'Check-in', icon: 'clipboard-check', active: true },
      { name: 'My Profile', icon: 'person', active: false },
      { name: 'Help', icon: 'question-circle', active: false }
    ]
  }),
  
  getters: {
    getCurrentQueueNumber: (state) => state.queueNumber,
    getPatientCount: (state) => state.patients.length,
    getQueueLength: (state) => state.queue.length,
    getRegisteredStatus: (state) => state.isRegistered
  },
  
  actions: {
    // State Mutations - Functions to manage patient data
    addPatient(patientData) {
      const newPatient = {
        id: Date.now(),
        queueNumber: this.queueNumber,
        name: patientData.name,
        nationalID: patientData.nationalID,
        symptoms: patientData.symptoms,
        checkInTime: new Date().toLocaleString(),
        status: 'waiting'
      }
      
      // Push new patient data into the array
      this.patients.push(newPatient)
      this.queue.push(newPatient)
      
      // Increment the queue counter
      this.queueNumber++
      
      // Update registration status
      this.isRegistered = true
      
      return newPatient
    },
    
    // Function to handle registration cancellation
    cancelRegistration() {
      this.isRegistered = false
    },
    
    // Function to reset registration for new patient
    resetRegistration() {
      this.isRegistered = false
    },
    
    // Function to update patient status
    updatePatientStatus(patientId, status) {
      const patient = this.patients.find(p => p.id === patientId)
      if (patient) {
        patient.status = status
      }
    },
    
    // Lifecycle-like initialization function
    initializeClinic() {
      // Fetch any existing session data from local state
      const savedData = localStorage.getItem('clinicData')
      if (savedData) {
        const data = JSON.parse(savedData)
        this.patients = data.patients || []
        this.queueNumber = data.queueNumber || 1
        this.queue = data.queue || []
      }
    },
    
    // Function to save data to local storage
    saveToLocalStorage() {
      const data = {
        patients: this.patients,
        queueNumber: this.queueNumber,
        queue: this.queue
      }
      localStorage.setItem('clinicData', JSON.stringify(data))
    }
  }
})
