<template>
  <div class="clinic-website">
    <!-- Enhanced Professional Header -->
    <header class="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg fixed-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#home">
          <div class="brand-logo">
            <i class="bi bi-hospital-fill me-3"></i>
            <div class="brand-text">
              <strong class="brand-name">Mahoko Clinic</strong>
              <small class="brand-tagline d-block text-light opacity-75">Digital Healthcare Solutions</small>
            </div>
          </div>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <a class="nav-link active" href="#home">
                <i class="bi bi-house-door me-2"></i>Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-info-circle me-2"></i>About
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="aboutDropdown">
                <li><a class="dropdown-item" href="#about">Our Story</a></li>
                <li><a class="dropdown-item" href="#doctor">Our Doctor</a></li>
                <li><a class="dropdown-item" href="#testimonials">Testimonials</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-heart-pulse me-2"></i>Services
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="servicesDropdown">
                <li><a class="dropdown-item" href="#services">Emergency Care</a></li>
                <li><a class="dropdown-item" href="#services">General Health</a></li>
                <li><a class="dropdown-item" href="#services">Mental Health</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#assessment">Health Assessment</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#checkin">
                <i class="bi bi-clipboard-check me-2"></i>Check-in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                <i class="bi bi-telephone me-2"></i>Contact
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-globe me-2"></i>{{ currentLanguageDisplay }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                <li><a class="dropdown-item" href="#" @click="changeLanguage('en')">
                  <i class="bi bi-flag me-2"></i>English
                </a></li>
                <li><a class="dropdown-item" href="#" @click="changeLanguage('rw')">
                  <i class="bi bi-flag-fill me-2"></i>Kinyarwanda
                </a></li>
                <li><a class="dropdown-item" href="#" @click="changeLanguage('fr')">
                  <i class="bi bi-flag me-2"></i>Français
                </a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="historyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-clock-history me-2"></i>History
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="historyDropdown">
                <li><a class="dropdown-item" href="#" @click="showHistory">
                  <i class="bi bi-list-ul me-2"></i>View History
                </a></li>
                <li><a class="dropdown-item" href="#" @click="clearHistory">
                  <i class="bi bi-trash me-2"></i>Clear History
                </a></li>
                <li><a class="dropdown-item" href="#" @click="exportHistory">
                  <i class="bi bi-download me-2"></i>Export History
                </a></li>
              </ul>
            </li>
            <li class="nav-item ms-3">
              <a class="btn btn-light btn-sm rounded-pill px-3" href="#checkin">
                <i class="bi bi-calendar-check me-2"></i>{{ t('bookAppointment') }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero-section bg-gradient text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-3">Welcome to Mahoko Clinic</h1>
            <p class="lead mb-4">Experience modern healthcare with our digital check-in system. Fast, efficient, and patient-centered care.</p>
            <div class="d-flex gap-3">
              <a href="#checkin" class="btn btn-light btn-lg">Quick Check-in</a>
              <a href="#services" class="btn btn-outline-light btn-lg">Our Services</a>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <i class="bi bi-heart-pulse-fill" style="font-size: 8rem; opacity: 0.3;"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="feature-box p-4">
              <i class="bi bi-clock-history text-primary" style="font-size: 3rem;"></i>
              <h4 class="mt-3">24/7 Service</h4>
              <p class="text-muted">Round-the-clock medical care and emergency services</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="feature-box p-4">
              <i class="bi bi-shield-check text-success" style="font-size: 3rem;"></i>
              <h4 class="mt-3">Certified Doctors</h4>
              <p class="text-muted">Experienced medical professionals you can trust</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="feature-box p-4">
              <i class="bi bi-phone text-info" style="font-size: 3rem;"></i>
              <h4 class="mt-3">Digital Check-in</h4>
              <p class="text-muted">Fast and convenient online registration system</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Check-in Section -->
    <section id="checkin" class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Digital Patient Check-in System</h2>
          <p class="lead text-muted">Register online and save time at the clinic</p>
        </div>

        <div class="row">
          <!-- Sidebar Navigation -->
          <div class="col-lg-3">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Quick Links</h5>
                <ul class="nav flex-column">
                  <!-- Dynamic Menus: Iterate through navigation array -->
                  <li v-for="item in clinicStore.navigationItems" :key="item.name" class="nav-item">
                    <a class="nav-link" :class="{ active: item.active }" href="#" @click="setActiveNav(item)">
                      <i :class="'bi bi-' + item.icon + ' me-2'"></i>
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Clinic Info Card -->
            <div class="card shadow-sm mt-3">
              <div class="card-body">
                <h5 class="card-title">Clinic Hours</h5>
                <p class="mb-1"><strong>Mon-Fri:</strong> 8:00 AM - 8:00 PM</p>
                <p class="mb-1"><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
                <p class="mb-0"><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                <hr>
                <p class="mb-1"><i class="bi bi-telephone me-2"></i> 0785739323</p>
                <p class="mb-0"><i class="bi bi-envelope me-2"></i> mugishaelisee@gmail.com</p>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="col-lg-9">
            <!-- Dynamic UI Rendering: Toggle between views -->
            <div v-if="!clinicStore.isRegistered">
              <!-- Registration Form -->
              <RegistrationForm @submit-checkin="handleSubmitCheckIn" />
            </div>
            
            <div v-else>
              <!-- Queue Status -->
              <QueueStatus @cancel-registration="handleCancelRegistration" />
            </div>

            <!-- Current Queue Table -->
            <div class="card shadow-sm mt-4">
              <div class="card-header bg-dark text-white">
                <h5 class="mb-0">Current Queue</h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead class="table-light">
                      <tr>
                        <th>Queue #</th>
                        <th>Name</th>
                        <th>National ID</th>
                        <th>Symptoms</th>
                        <th>Check-in Time</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Table Rendering: Loop through patient array -->
                      <tr v-for="patient in clinicStore.patients" :key="patient.id">
                        <td><span class="badge bg-primary">{{ patient.queueNumber }}</span></td>
                        <td>{{ patient.name }}</td>
                        <td>{{ maskNationalID(patient.nationalID) }}</td>
                        <td>
                          <span v-for="(symptom, index) in patient.symptoms" :key="index" class="badge bg-secondary me-1">
                            {{ symptom }}
                          </span>
                        </td>
                        <td>{{ patient.checkInTime }}</td>
                        <td>
                          <span :class="getStatusClass(patient.status)" class="badge">
                            {{ patient.status }}
                          </span>
                        </td>
                      </tr>
                      <tr v-if="clinicStore.patients.length === 0">
                        <td colspan="6" class="text-center text-muted">No patients in queue</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold mb-4">About Mahoko Clinic</h2>
            <p class="lead">For over 25 years, Mahoko Clinic has been providing exceptional healthcare services to our community.</p>
            <p>We combine cutting-edge medical technology with compassionate care to ensure the best possible outcomes for our patients. Our team of dedicated healthcare professionals is committed to making your health our priority.</p>
            <div class="row mt-4">
              <div class="col-6">
                <h3 class="text-primary">500+</h3>
                <p class="text-muted">Daily Patients</p>
              </div>
              <div class="col-6">
                <h3 class="text-success">50+</h3>
                <p class="text-muted">Expert Doctors</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" class="img-fluid rounded shadow" alt="Mahoko Clinic">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Our Services</h2>
          <p class="lead text-muted">Comprehensive healthcare services for all your needs</p>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <i class="bi bi-heart-pulse text-danger" style="font-size: 3rem;"></i>
                <h4 class="mt-3">Emergency Care</h4>
                <p class="text-muted">24/7 emergency medical services and critical care</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <i class="bi bi-activity text-warning" style="font-size: 3rem;"></i>
                <h4 class="mt-3">General Health</h4>
                <p class="text-muted">Routine check-ups and preventive healthcare</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <i class="bi bi-emoji-smile text-info" style="font-size: 3rem;"></i>
                <h4 class="mt-3">Mental Health</h4>
                <p class="text-muted">Professional counseling and mental health support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Our Doctor Section -->
    <section id="doctor" class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Meet Our Expert Doctor</h2>
          <p class="lead text-muted">Highly qualified medical professional dedicated to your health</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 mb-4">
            <div class="card doctor-card h-100 text-center">
              <div class="doctor-image-container">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" class="doctor-image" alt="Dr. Mucyo Prince">
                <div class="doctor-overlay">
                  <div class="social-links">
                    <a href="#" class="text-white me-3"><i class="bi bi-linkedin"></i></a>
                    <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="text-white"><i class="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h4 class="doctor-name">Dr. Mucyo Prince</h4>
                <p class="doctor-specialty text-primary">Chief Medical Officer</p>
                <p class="doctor-bio">15+ years of experience in internal medicine and preventive care. Specialized in chronic disease management and patient-centered care.</p>
                <div class="doctor-stats">
                  <span class="badge bg-success me-2">500+ Patients</span>
                  <span class="badge bg-info">4.9 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Health Assessment Section -->
    <section id="assessment" class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="health-assessment-card">
              <h2 class="display-5 fw-bold mb-4">Quick Health Assessment</h2>
              <p class="lead mb-4">Take our free health assessment to get personalized recommendations</p>
              <div class="assessment-form">
                <div class="mb-3">
                  <label class="form-label">How are you feeling today?</label>
                  <div class="btn-group w-100" role="group">
                    <input type="radio" class="btn-check" name="feeling" id="feeling-great" autocomplete="off">
                    <label class="btn btn-outline-success" for="feeling-great">Great 😊</label>
                    
                    <input type="radio" class="btn-check" name="feeling" id="feeling-good" autocomplete="off">
                    <label class="btn btn-outline-primary" for="feeling-good">Good 👍</label>
                    
                    <input type="radio" class="btn-check" name="feeling" id="feeling-okay" autocomplete="off">
                    <label class="btn btn-outline-warning" for="feeling-okay">Okay 😐</label>
                    
                    <input type="radio" class="btn-check" name="feeling" id="feeling-bad" autocomplete="off">
                    <label class="btn btn-outline-danger" for="feeling-bad">Bad 😢</label>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Select your symptoms:</label>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="symptom1">
                        <label class="form-check-label" for="symptom1">Headache</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="symptom2">
                        <label class="form-check-label" for="symptom2">Fever</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="symptom3">
                        <label class="form-check-label" for="symptom3">Cough</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="symptom4">
                        <label class="form-check-label" for="symptom4">Fatigue</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="symptom5">
                        <label class="form-check-label" for="symptom5">Nausea</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="symptom6">
                        <label class="form-check-label" for="symptom6">Body Pain</label>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-primary btn-lg w-100" @click="showAssessmentResult">
                  <i class="bi bi-heart-pulse me-2"></i>Get Health Recommendation
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="health-tips-card">
              <h3 class="mb-4">Daily Health Tips 💡</h3>
              <div class="tip-item mb-3">
                <div class="d-flex align-items-start">
                  <i class="bi bi-droplet-fill text-info me-3"></i>
                  <div>
                    <h5>Stay Hydrated</h5>
                    <p>Drink at least 8 glasses of water daily for optimal health.</p>
                  </div>
                </div>
              </div>
              <div class="tip-item mb-3">
                <div class="d-flex align-items-start">
                  <i class="bi bi-bicycle text-success me-3"></i>
                  <div>
                    <h5>Exercise Regularly</h5>
                    <p>30 minutes of moderate exercise can boost your immune system.</p>
                  </div>
                </div>
              </div>
              <div class="tip-item mb-3">
                <div class="d-flex align-items-start">
                  <i class="bi bi-moon-stars-fill text-warning me-3"></i>
                  <div>
                    <h5>Get Enough Sleep</h5>
                    <p>7-9 hours of quality sleep is essential for recovery.</p>
                  </div>
                </div>
              </div>
              <div class="tip-item">
                <div class="d-flex align-items-start">
                  <i class="bi bi-apple text-danger me-3"></i>
                  <div>
                    <h5>Eat Balanced Diet</h5>
                    <p>Include fruits, vegetables, and whole grains in your meals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <!-- Testimonials Section -->
    <section id="testimonials" class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Patient Testimonials</h2>
          <p class="lead text-muted">What our patients say about us</p>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p>"The digital check-in system saved me so much time. Excellent service and caring staff!"</p>
                <footer class="blockquote-footer">
                  <strong>Sarah Johnson</strong>
                </footer>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p>"Professional doctors and modern facilities. The online queue system is very convenient."</p>
                <footer class="blockquote-footer">
                  <strong>Michael Chen</strong>
                </footer>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p>"Great experience! The health guide feature helped me prepare for my consultation."</p>
                <footer class="blockquote-footer">
                  <strong>Emily Davis</strong>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold">Contact Us</h2>
          <p class="lead text-muted">Get in touch with our team</p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4>Send us a Message</h4>
                <form @submit.prevent="submitContactForm">
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Your Name" v-model="contactForm.name" required>
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Your Email" v-model="contactForm.email" required>
                  </div>
                  <div class="mb-3">
                    <textarea class="form-control" rows="4" placeholder="Your Message" v-model="contactForm.message" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4>Visit Our Clinic</h4>
                <div class="mb-3">
                  <i class="bi bi-geo-alt text-primary me-2"></i>
                  <strong>Address:</strong><br>
                  123 Healthcare Avenue<br>
                  Medical District, MD 12345
                </div>
                <div class="mb-3">
                  <i class="bi bi-telephone text-success me-2"></i>
                  <strong>Phone:</strong> +1 234 567 8900
                </div>
                <div class="mb-3">
                  <i class="bi bi-envelope text-info me-2"></i>
                  <strong>Email:</strong> info@medicare.com
                </div>
                <div>
                  <i class="bi bi-clock text-warning me-2"></i>
                  <strong>Hours:</strong><br>
                  Mon-Fri: 8:00 AM - 8:00 PM<br>
                  Saturday: 9:00 AM - 6:00 PM<br>
                  Sunday: 10:00 AM - 4:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Footer -->
    <footer class="bg-dark text-white py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>Mahoko Clinic</h5>
            <p class="text-muted">Your trusted healthcare partner for over 25 years.</p>
            <div class="d-flex gap-3">
              <a href="#" class="text-white"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-white"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div class="col-md-4">
            <h5>Contact Information</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><i class="bi bi-geo-alt-fill text-primary me-2"></i>Mahoko Sector, Rubavu District, Gisenyi</li>
              <li class="mb-2"><i class="bi bi-telephone-fill text-success me-2"></i>0785739323</li>
              <li class="mb-2"><i class="bi bi-envelope-fill text-info me-2"></i>mugishaelisee@gmail.com</li>
              <li class="mb-2"><i class="bi bi-clock-fill text-warning me-2"></i>Mon-Fri: 8AM-8PM</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Location Map</h5>
            <div class="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15908.27981893288!2d29.2584!3d-1.6788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6b8e5f5b5b5%3A0x8f5f5f5f5f5f5f5!2sRubavu%20District%2C%20Gisenyi%2C%20Mahoko!5e0!3m2!1sen!2srw!4v1234567890"
                width="100%" 
                height="150" 
                style="border:0; border-radius: 8px;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
        <hr class="border-secondary">
        <div class="text-center">
          <p class="mb-0">&copy; 2024 Mahoko Clinic. All rights reserved. | Developed by faringa_wa_3</p>
        </div>
      </div>
    </footer>

    <!-- History Modal -->
    <div class="modal fade" id="historyModal" tabindex="-1" aria-labelledby="historyModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="historyModalLabel">
              <i class="bi bi-clock-history me-2"></i>Activity History
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <div class="d-flex justify-content-between align-items-center">
                <h6>Total Activities: {{ historyStore.getActivityCount }}</h6>
                <button class="btn btn-sm btn-outline-danger" @click="clearHistory">
                  <i class="bi bi-trash me-1"></i>Clear All
                </button>
              </div>
            </div>
            <div class="history-list">
              <div v-for="activity in historyStore.getRecentActivities" :key="activity.id" class="history-item">
                <div class="d-flex align-items-start">
                  <div class="activity-icon me-3">
                    <i :class="getActivityIcon(activity.type)"></i>
                  </div>
                  <div class="activity-content flex-grow-1">
                    <div class="activity-header">
                      <strong>{{ activity.description }}</strong>
                      <small class="text-muted ms-2">{{ formatTime(activity.timestamp) }}</small>
                    </div>
                    <div class="activity-details" v-if="activity.details">
                      <small class="text-muted">
                        <span v-if="activity.details.patientName">Patient: {{ activity.details.patientName }}</span>
                        <span v-if="activity.details.queueNumber"> | Queue: {{ activity.details.queueNumber }}</span>
                        <span v-if="activity.details.from">Language: {{ activity.details.from }} → {{ activity.details.to }}</span>
                        <span v-if="activity.details.feeling">Feeling: {{ activity.details.feeling }}</span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="historyStore.getRecentActivities.length === 0" class="text-center text-muted py-4">
                <i class="bi bi-clock-history" style="font-size: 3rem;"></i>
                <p class="mt-2">No activities recorded yet</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="exportHistory">
              <i class="bi bi-download me-2"></i>Export History
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, computed } from 'vue'
import { useClinicStore } from './stores/clinicStore'
import { useLanguageStore } from './stores/languageStore'
import { useHistoryStore } from './stores/historyStore'
import RegistrationForm from './components/RegistrationForm.vue'
import QueueStatus from './components/QueueStatus.vue'

export default defineComponent({
  name: 'App',
  components: {
    RegistrationForm,
    QueueStatus
  },
  setup() {
    const clinicStore = useClinicStore()
    const languageStore = useLanguageStore()
    const historyStore = useHistoryStore()

    // Contact form reactive data
    const contactForm = reactive({
      name: '',
      email: '',
      message: ''
    })

    // Language display
    const currentLanguageDisplay = computed(() => {
      const lang = languageStore.getCurrentLanguage
      const displays = { en: 'English', rw: 'Kinyarwanda', fr: 'Français' }
      return displays[lang] || 'English'
    })

    // Translation function
    const t = (key) => {
      return languageStore.t(key)
    }

    // Lifecycle Methods: Initialize the clinic environment
    onMounted(() => {
      clinicStore.initializeClinic()
      languageStore.loadSavedLanguage()
      historyStore.loadFromLocalStorage()
      // Initialize smooth scrolling for navigation
      initializeSmoothScrolling()
      // Initialize navbar scroll effect
      initializeNavbarScroll()
    })

    // Event Handling Functions
    const handleSubmitCheckIn = (patientData) => {
      const queueNumber = clinicStore.queueNumber
      clinicStore.addPatient(patientData)
      clinicStore.saveToLocalStorage()
      // Add to history
      historyStore.addCheckInActivity(patientData, queueNumber)
    }

    const handleCancelRegistration = () => {
      clinicStore.cancelRegistration()
    }

    const setActiveNav = (item) => {
      clinicStore.navigationItems.forEach(navItem => {
        navItem.active = navItem.name === item.name
      })
    }

    const getStatusClass = (status) => {
      switch (status) {
        case 'waiting': return 'bg-warning'
        case 'in-progress': return 'bg-info'
        case 'completed': return 'bg-success'
        default: return 'bg-secondary'
      }
    }

    // Function to mask National ID for privacy
    const maskNationalID = (nationalID) => {
      if (!nationalID || nationalID.length < 4) return nationalID
      return nationalID.substring(0, 4) + 'XXXXXXX' + nationalID.substring(nationalID.length - 2)
    }

    // Contact form submission
    const submitContactForm = () => {
      // Here you would normally send the form data to a server
      alert(`Thank you for your message, ${contactForm.name}! We will get back to you soon.`)
      
      // Add to history
      historyStore.addContactActivity(contactForm.message)
      
      // Reset form
      contactForm.name = ''
      contactForm.email = ''
      contactForm.message = ''
    }

    // Language change function
    const changeLanguage = (lang) => {
      const oldLang = languageStore.getCurrentLanguage
      languageStore.setLanguage(lang)
      historyStore.addLanguageChangeActivity(oldLang, lang)
    }

    // History functions
    const showHistory = () => {
      const modal = new (window.bootstrap || {}).Modal(document.getElementById('historyModal'))
      if (modal) modal.show()
    }

    const clearHistory = () => {
      if (confirm('Are you sure you want to clear all history?')) {
        historyStore.clearHistory()
      }
    }

    const exportHistory = () => {
      historyStore.exportHistory()
    }

    const getActivityIcon = (type) => {
      const icons = {
        checkin: 'bi bi-clipboard-check text-primary',
        language: 'bi bi-globe text-info',
        assessment: 'bi bi-heart-pulse text-success',
        navigation: 'bi bi-geo-alt text-warning',
        contact: 'bi bi-envelope text-danger'
      }
      return icons[type] || 'bi bi-activity text-secondary'
    }

    const formatTime = (timestamp) => {
      const date = new Date(timestamp)
      return date.toLocaleString()
    }

    // Initialize smooth scrolling for navigation links
    const initializeSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            const offset = 80; // Account for fixed navbar height
            const targetPosition = target.offsetTop - offset
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
        })
      })
    }

    // Add scroll effect to navbar
    const initializeNavbarScroll = () => {
      window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar')
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      })
    }

    // Interactive Functions for User Engagement
    const showAssessmentResult = () => {
      const feeling = document.querySelector('input[name="feeling"]:checked')
      const symptoms = document.querySelectorAll('input[type="checkbox"]:checked')
      
      if (!feeling) {
        alert('Please select how you are feeling today!')
        return
      }
      
      let message = 'Health Assessment Result:\n\n'
      message += `Feeling: ${feeling.id.replace('feeling-', '').charAt(0).toUpperCase() + feeling.id.slice(8)}\n`
      message += `Symptoms selected: ${symptoms.length > 0 ? symptoms.length : 'None'}\n\n`
      
      if (feeling.id === 'feeling-bad' || symptoms.length > 3) {
        message += 'Recommendation: Please schedule an appointment with our doctors immediately.\n'
        message += 'You can use our digital check-in system or call us at 0785739323.'
      } else if (feeling.id === 'feeling-okay' || symptoms.length > 0) {
        message += 'Recommendation: Monitor your symptoms and rest well.\n'
        message += 'If symptoms persist for more than 2 days, please consult our doctors.'
      } else {
        message += 'Recommendation: Great! Keep maintaining your healthy lifestyle.\n'
        message += 'Continue with regular exercise and balanced diet.'
      }
      
      alert(message)
    }

    
    
    return {
      clinicStore,
      languageStore,
      historyStore,
      contactForm,
      currentLanguageDisplay,
      t,
      handleSubmitCheckIn,
      handleCancelRegistration,
      setActiveNav,
      getStatusClass,
      maskNationalID,
      submitContactForm,
      showAssessmentResult,
      changeLanguage,
      showHistory,
      clearHistory,
      exportHistory,
      getActivityIcon,
      formatTime
    }
  }
})
</script>

<style>
/* Modern Website Styles - New Design */
.clinic-website {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding-top: 80px; /* Account for fixed navbar */
}

/* New Hero Section Gradient */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') no-repeat bottom;
  background-size: cover;
}

/* Modern Card Design */
.card {
  border: none;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

/* Enhanced Navigation Style */
.navbar {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%) !important;
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.98) 0%, rgba(118, 75, 162, 0.98) 100%) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.brand-logo {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.brand-logo:hover {
  transform: scale(1.05);
}

.brand-logo i {
  font-size: 2rem;
  color: white;
  transition: transform 0.3s ease;
}

.brand-logo:hover i {
  transform: rotate(10deg);
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: white !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.brand-tagline {
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.9 !important;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 600;
  margin: 0 8px;
  padding: 0.5rem 1rem !important;
  border-radius: 25px;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.3s ease;
}

.nav-link:hover::before {
  left: 0;
}

.nav-link:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link.active {
  color: white !important;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.nav-link i {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.nav-link:hover i {
  transform: scale(1.2);
}

/* Dropdown Menu Styling */
.dropdown-menu {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  animation: dropdownSlide 0.3s ease;
}

@keyframes dropdownSlide {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-item {
  color: #333;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  border-radius: 10px;
  margin: 0.25rem 0.5rem;
}

.dropdown-item:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateX(5px);
}

.dropdown-item i {
  margin-right: 0.5rem;
  width: 20px;
  text-align: center;
}

.dropdown-divider {
  border-color: rgba(102, 126, 234, 0.2);
  margin: 0.5rem 1rem;
}

/* Book Appointment Button */
.navbar .btn-light {
  background: white !important;
  color: #667eea !important;
  border: none;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.navbar .btn-light:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background: #f8f9fa !important;
}

/* Mobile Navigation */
.navbar-toggler {
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.1);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  width: 1.5rem;
  height: 1.5rem;
}

@media (max-width: 991px) {
  .navbar-nav {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 15px;
    padding: 1rem;
    margin-top: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  .nav-link {
    color: #333 !important;
    margin: 0.25rem 0;
    border-radius: 10px;
  }
  
  .nav-link:hover {
    color: #667eea !important;
    background: rgba(102, 126, 234, 0.1);
  }
  
  .nav-link.active {
    color: white !important;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .dropdown-menu {
    background: white;
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar .btn-light {
    margin: 1rem auto;
    display: block;
    width: fit-content;
  }
}

/* Modern Button Styles */
.btn {
  border-radius: 50px;
  font-weight: 600;
  padding: 12px 30px;
  border: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
}

.btn-light {
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
}

/* Modern Feature Box */
.feature-box {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.feature-box:hover {
  border-color: #667eea;
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
}

/* Modern Form Styles */
.form-control {
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  padding: 15px 20px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
}

.form-control:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  background: white;
}

/* Modern Badge Styles */
.badge {
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 0.85rem;
}

/* Modern Table Styles */
.table {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  overflow: hidden;
}

.table thead th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  font-weight: 600;
}

.table tbody tr {
  transition: all 0.3s ease;
}

.table tbody tr:hover {
  background: rgba(102, 126, 234, 0.05);
  transform: scale(1.01);
}

/* Modern Footer */
footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-top: 4px solid #667eea;
}

/* Section Backgrounds */
section {
  background: rgba(255, 255, 255, 0.95);
  margin: 2rem 0;
  border-radius: 30px;
  padding: 3rem !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Modern Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Modern Icon Animations */
.bi {
  transition: all 0.3s ease;
}

.feature-box:hover .bi {
  transform: scale(1.2) rotate(5deg);
  color: #667eea;
}

/* Modern Progress Bar */
.progress {
  height: 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.progress-bar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
}

/* Modern Map Container */
.map-container iframe {
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem;
  }
  
  section {
    margin: 1rem;
    padding: 2rem !important;
  }
  
  .card {
    margin-bottom: 1rem;
  }
}

/* Loading Animation */
.spinner-border-sm {
  width: 1.2rem;
  height: 1.2rem;
  border-width: 3px;
}

/* Sidebar Navigation Styles */
.nav-pills .nav-link {
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 12px 20px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.nav-pills .nav-link.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.nav-pills .nav-link:hover:not(.active) {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

/* Doctor Cards Styling */
.doctor-card {
  transition: all 0.4s ease;
  overflow: hidden;
}

.doctor-image-container {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.doctor-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.doctor-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.doctor-card:hover .doctor-overlay {
  opacity: 1;
}

.doctor-card:hover .doctor-image {
  transform: scale(1.1);
}

.social-links a {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.social-links a:hover {
  transform: scale(1.2);
}

.doctor-name {
  color: #667eea;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.doctor-specialty {
  font-weight: 600;
  margin-bottom: 1rem;
}

.doctor-bio {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.doctor-stats .badge {
  font-size: 0.8rem;
  padding: 6px 12px;
}

/* Health Assessment Card */
.health-assessment-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.assessment-form .btn-group .btn {
  border-radius: 10px;
  margin: 0 2px;
  font-weight: 600;
}

/* Health Tips Card */
.health-tips-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.tip-item {
  padding: 1rem;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.tip-item:hover {
  background: rgba(102, 126, 234, 0.05);
  transform: translateX(10px);
}

.tip-item i {
  font-size: 1.5rem;
  min-width: 30px;
}

.tip-item h5 {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Chat Support Card */
.chat-support-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 0 30px 60px rgba(102, 126, 234, 0.3);
}

.chat-icon {
  font-size: 4rem;
  animation: pulse 2s infinite;
}

.chat-support-card .btn {
  border-radius: 50px;
  padding: 15px 30px;
  font-weight: 600;
  border: 2px solid white;
  background: transparent;
  color: white;
  transition: all 0.3s ease;
}

.chat-support-card .btn:hover {
  background: white;
  color: #667eea;
  transform: translateY(-3px);
}

.chat-support-card .btn-success:hover {
  background: #28a745;
  color: white;
}

/* Animations */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Responsive Design for New Sections */
@media (max-width: 768px) {
  .doctor-image-container {
    height: 200px;
  }
  
  .health-assessment-card,
  .health-tips-card {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .chat-support-card {
    padding: 2rem;
  }
  
  .chat-icon {
    font-size: 3rem;
  }
}

/* History Modal Styles */
.history-list {
  max-height: 400px;
  overflow-y: auto;
}

.history-item {
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s ease;
}

.history-item:hover {
  background-color: #f8f9fa;
}

.history-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.activity-header {
  margin-bottom: 0.25rem;
}

.activity-details {
  margin-top: 0.25rem;
}

/* Language Dropdown Styling */
.dropdown-item i.bi-flag,
.dropdown-item i.bi-flag-fill {
  width: 20px;
  text-align: center;
}

/* Modern Color Scheme */
.text-primary { color: #667eea !important; }
.bg-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important; }
.btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none; }
.btn-primary:hover { background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%); }
</style>
