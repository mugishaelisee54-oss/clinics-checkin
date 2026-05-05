import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', {
  state: () => ({
    activities: [],
    maxHistoryItems: 50
  }),
  
  getters: {
    getRecentActivities: (state) => state.activities.slice(0, 10),
    getAllActivities: (state) => state.activities,
    getActivityCount: (state) => state.activities.length,
    getActivitiesByType: (state) => (type) => {
      return state.activities.filter(activity => activity.type === type)
    }
  },
  
  actions: {
    addActivity(activity) {
      const newActivity = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        type: activity.type,
        description: activity.description,
        details: activity.details || {},
        language: activity.language || 'en'
      }
      
      this.activities.unshift(newActivity)
      
      // Keep only the most recent activities
      if (this.activities.length > this.maxHistoryItems) {
        this.activities = this.activities.slice(0, this.maxHistoryItems)
      }
      
      // Save to localStorage
      this.saveToLocalStorage()
    },
    
    addCheckInActivity(patientData, queueNumber) {
      this.addActivity({
        type: 'checkin',
        description: 'Patient checked in',
        details: {
          patientName: patientData.name,
          queueNumber: queueNumber,
          symptoms: patientData.symptoms,
          nationalID: patientData.nationalID
        }
      })
    },
    
    addLanguageChangeActivity(fromLang, toLang) {
      this.addActivity({
        type: 'language',
        description: 'Language changed',
        details: {
          from: fromLang,
          to: toLang
        }
      })
    },
    
    addAssessmentActivity(feeling, symptoms) {
      this.addActivity({
        type: 'assessment',
        description: 'Health assessment completed',
        details: {
          feeling: feeling,
          symptomsCount: symptoms.length,
          symptoms: symptoms
        }
      })
    },
    
    addNavigationActivity(section) {
      this.addActivity({
        type: 'navigation',
        description: `Navigated to ${section}`,
        details: {
          section: section
        }
      })
    },
    
    addContactActivity(message) {
      this.addActivity({
        type: 'contact',
        description: 'Contact form submitted',
        details: {
          messageLength: message.length,
          timestamp: new Date().toISOString()
        }
      })
    },
    
    clearHistory() {
      this.activities = []
      localStorage.removeItem('clinicHistory')
    },
    
    saveToLocalStorage() {
      try {
        localStorage.setItem('clinicHistory', JSON.stringify(this.activities))
      } catch (error) {
        console.warn('Could not save history to localStorage:', error)
      }
    },
    
    loadFromLocalStorage() {
      try {
        const saved = localStorage.getItem('clinicHistory')
        if (saved) {
          this.activities = JSON.parse(saved)
        }
      } catch (error) {
        console.warn('Could not load history from localStorage:', error)
        this.activities = []
      }
    },
    
    exportHistory() {
      const dataStr = JSON.stringify(this.activities, null, 2)
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
      
      const exportFileDefaultName = `clinic-history-${new Date().toISOString().split('T')[0]}.json`
      
      const linkElement = document.createElement('a')
      linkElement.setAttribute('href', dataUri)
      linkElement.setAttribute('download', exportFileDefaultName)
      linkElement.click()
    }
  }
})
