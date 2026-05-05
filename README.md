# Digital Patient Check-in System

A Vue.js-based clinic check-in system that implements core programming concepts including reactive variables, conditional statements, arrays, loops, and functions.

## Features Implemented

### 1. Variables and Data Binding
- **Reactive Variables**: Vue's reactivity system stores patient input (name, nationalID, symptoms)
- **Input Binding**: Two-way binding using v-model between UI input fields and internal variables
- **State Variables**: Vuex/Pinia state modules track queueNumber and isRegistered status

### 2. Conditional Statements
- **Form Validation**: Checks if National ID field is empty or follows correct format before submission
- **Dynamic UI Rendering**: v-if toggles between "Registration Form" and "Queue Status" views
- **Game Logic**: Success/Failure alert messages based on user interactions

### 3. Arrays and Data Storage
- **Patient List**: Array in Pinia store acts as primary local storage for patient objects
- **Symptom Collection**: Array binds multiple checkboxes for symptom selection
- **Queue Management**: Array stores sequence of arriving patients

### 4. Looping (Iteration)
- **Table Rendering**: v-for loops through patient array to display current queue
- **Dynamic Menus**: Iterates through navigation array to generate sidebar menu links
- **NPC Movements**: Loops handle repeatable actions in health guide game component

### 5. Functions and Methods
- **Event Handling**: Functions handle submitCheckIn() and cancelRegistration() events
- **State Mutations**: Functions push new patient data into array and increment queue counter
- **Lifecycle Methods**: created() and mounted() hooks initialize clinic environment

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
clinics-checkin/
├── src/
│   ├── components/
│   │   ├── RegistrationForm.vue    # Patient registration form with validation
│   │   └── QueueStatus.vue         # Queue status and health guide game
│   ├── stores/
│   │   └── clinicStore.js         # Pinia store for state management
│   ├── App.vue                    # Main application component
│   └── main.js                    # Application entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## Usage

1. Open the application in your browser (typically http://localhost:3000)
2. Fill out the patient registration form with:
   - Full Name
   - National ID (13 digits)
   - Select at least one symptom
3. Submit the form to receive your queue number
4. Monitor your queue status and wait time
5. Follow the digital health guide instructions

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **Pinia**: State management for Vue.js
- **Bootstrap 5**: CSS framework for responsive design
- **Vite**: Build tool and development server

## Key Programming Concepts Demonstrated

### Reactive Variables
```javascript
const formData = reactive({
  name: '',
  nationalID: '',
  symptoms: []
})
```

### Conditional Statements
```javascript
if (!formData.nationalID.trim()) {
  errors.nationalID = 'National ID is required'
  isValid = false
} else if (!/^\d{13}$/.test(formData.nationalID)) {
  errors.nationalID = 'National ID must be exactly 13 digits'
  isValid = false
}
```

### Array Operations
```javascript
// Push new patient data into the array
this.patients.push(newPatient)
this.queue.push(newPatient)
```

### Looping
```html
<!-- Table Rendering -->
<tr v-for="patient in clinicStore.patients" :key="patient.id">
  <td>{{ patient.queueNumber }}</td>
  <td>{{ patient.name }}</td>
  <!-- ... -->
</tr>

<!-- Dynamic Menus -->
<li v-for="item in clinicStore.navigationItems" :key="item.name">
  <!-- ... -->
</li>
```

### Functions and Event Handling
```javascript
const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  // ... submission logic
}
```
