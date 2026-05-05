import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'en',
    translations: {
      en: {
        // Navigation
        home: 'Home',
        about: 'About',
        services: 'Services',
        checkin: 'Check-in',
        contact: 'Contact',
        bookAppointment: 'Book Appointment',
        ourStory: 'Our Story',
        ourDoctor: 'Our Doctor',
        testimonials: 'Testimonials',
        emergencyCare: 'Emergency Care',
        generalHealth: 'General Health',
        mentalHealth: 'Mental Health',
        healthAssessment: 'Health Assessment',
        
        // Hero Section
        welcome: 'Welcome to Mahoko Clinic',
        heroDescription: 'Experience modern healthcare with our digital check-in system. Fast, efficient, and patient-centered care.',
        quickCheckin: 'Quick Check-in',
        ourServices: 'Our Services',
        
        // Features
        service247: '24/7 Service',
        service247Desc: 'Round-the-clock medical care and emergency services',
        certifiedDoctors: 'Certified Doctors',
        certifiedDoctorsDesc: 'Experienced medical professionals you can trust',
        digitalCheckin: 'Digital Check-in',
        digitalCheckinDesc: 'Fast and convenient online registration system',
        
        // Check-in System
        digitalCheckinSystem: 'Digital Patient Check-in System',
        checkinDescription: 'Register online and save time at the clinic',
        registrationForm: 'Patient Registration Form',
        fullName: 'Full Name',
        nationalId: 'National ID',
        selectSymptoms: 'Select Symptoms (check all that apply)',
        submitCheckin: 'Submit Check-in',
        clearForm: 'Clear Form',
        
        // Doctor Section
        meetDoctor: 'Meet Our Expert Doctor',
        doctorDescription: 'Highly qualified medical professional dedicated to your health',
        chiefMedicalOfficer: 'Chief Medical Officer',
        doctorBio: '15+ years of experience in internal medicine and preventive care. Specialized in chronic disease management and patient-centered care.',
        
        // Health Assessment
        quickHealthAssessment: 'Quick Health Assessment',
        assessmentDescription: 'Take our free health assessment to get personalized recommendations',
        howFeeling: 'How are you feeling today?',
        great: 'Great 😊',
        good: 'Good 👍',
        okay: 'Okay 😐',
        bad: 'Bad 😢',
        selectSymptoms: 'Select your symptoms:',
        getRecommendation: 'Get Health Recommendation',
        
        // Health Tips
        dailyHealthTips: 'Daily Health Tips 💡',
        stayHydrated: 'Stay Hydrated',
        stayHydratedDesc: 'Drink at least 8 glasses of water daily for optimal health.',
        exerciseRegularly: 'Exercise Regularly',
        exerciseRegularlyDesc: '30 minutes of moderate exercise can boost your immune system.',
        getEnoughSleep: 'Get Enough Sleep',
        getEnoughSleepDesc: '7-9 hours of quality sleep is essential for recovery.',
        eatBalancedDiet: 'Eat Balanced Diet',
        eatBalancedDietDesc: 'Include fruits, vegetables, and whole grains in your meals.',
        
        // Contact
        contactInfo: 'Contact Information',
        locationMap: 'Location Map',
        mahokoSector: 'Mahoko Sector, Rubavu District, Gisenyi',
        clinicHours: 'Clinic Hours',
        monFri: 'Mon-Fri: 8AM-8PM',
        saturday: 'Saturday: 9AM-6PM',
        sunday: 'Sunday: 10AM-4PM',
        
        // Footer
        quickLinks: 'Quick Links',
        legal: 'Legal',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        hipaaCompliance: 'HIPAA Compliance',
        copyright: '© 2024 Mahoko Clinic. All rights reserved. | Developed by faringa_wa_3'
      },
      rw: {
        // Navigation
        home: 'Ahabanza',
        about: 'Ibyerekeye',
        services: 'Serivisi',
        checkin: 'Kwiyandikisha',
        contact: 'Twandikire',
        bookAppointment: 'Gutanga umunsi',
        ourStory: 'Amateka yacu',
        ourDoctor: 'Doktorawe',
        testimonials: 'Ubuhamya',
        emergencyCare: 'Serivisi zikabakire',
        generalHealth: 'Ubuzima rusange',
        mentalHealth: 'Ubukungu bwongerwa',
        healthAssessment: 'Kugerakurikiza ubuzima',
        
        // Hero Section
        welcome: 'Murakaza neza kuri Klinika ya Mahoko',
        heroDescription: 'Uzanye ubuvuzi bwa kinyamwega nuburyo bwo kwiyandikisha bwa mudugaruro. Byihuta, byiza, kandi ubukungu bwabaturage.',
        quickCheckin: 'Kwiyandikisha byihuta',
        ourServices: 'Serivisi zacu',
        
        // Features
        service247: 'Serivisi 24/7',
        service247Desc: 'Ubuvuzi niserivisi zikabakire iminsi yose',
        certifiedDoctors: 'Abadoktora baletewe uruhushya',
        certifiedDoctorsDesc: 'Abashinzwe ubuvuzi bemeye uwashakanye kubizimiza',
        digitalCheckin: 'Kwiyandikisha mudugaruro',
        digitalCheckinDesc: 'Uburyo bwihuta nbyoroshye bwo kwiyandikisha kuri interineti',
        
        // Check-in System
        digitalCheckinSystem: 'Uburyo bwa Kinyamwega bwo Kwiyandikisha Abarwayi',
        checkinDescription: 'Yandikishe kuri interineti kandi ugerageze igihe muri klinika',
        registrationForm: 'Ifishi yo Kwiyandikisha umurwayi',
        fullName: 'Izina ryibanze',
        nationalId: 'Indangamuntu',
        selectSymptoms: 'Hitamo ibimenyetso (byose wifuzeko)',
        submitCheckin: 'Ohereza Kwiyandikisha',
        clearForm: 'Siba ifishi',
        
        // Doctor Section
        meetDoctor: 'Tegura Doktorawe wungirije',
        doctorDescription: 'Umushinzwe ubuvuzi wemewe wihangirye ku buzima bawe',
        chiefMedicalOfficer: 'Umunyamabanga Mukuru wubuvuzi',
        doctorBio: 'Imyaka 15+ yuburamye mubuvuzi bwimbere nuburubano. Ushinzwe kubikora indwara ziterwa nigihe kandi ubukungu bwabaturage.',
        
        // Health Assessment
        quickHealthAssessment: 'Kugerakurikiza byihuta bwa buzima',
        assessmentDescription: 'Fata kugerakurikiza kizamuye ya buzima kugira ngo ubone ibyashobora kukorwa',
        howFeeling: 'Urimo gute iki uyu munsi?',
        great: 'Byiza 😊',
        good: 'Biiza 👍',
        okay: 'Bisanzwe 😐',
        bad: 'Biiza 😢',
        selectSymptoms: 'Hitamo ibimenyetso byawe:',
        getRecommendation: 'Fbite ibyashobora kukorwa ku buzima',
        
        // Health Tips
        dailyHealthTips: 'Inyungu zubuzima bwa munsi 💡',
        stayHydrated: 'Komeka umwuka',
        stayHydratedDesc: 'Nwa amazi 8 cyangwa agenda buri munsi kugira ngo ubuzima bwawe bube',
        exerciseRegularly: 'Gukora imyitooro',
        exerciseRegularlyDesc: 'iminota 30 yimyitooro myiza yashobora kongera ingufu zuburwayi',
        getEnoughSleep: 'Guhora neza',
        getEnoughSleepDesc: 'amasaha 7-9 yihora yiza ari ngombwa kugira ngo ukongere',
        eatBalancedDiet: 'Garya birambye',
        eatBalancedDietDesc: 'Shyiramo imbuto, ibiribwa, nimbogeye mubiryo byawe.',
        
        // Contact
        contactInfo: 'Amakuru yubutabizano',
        locationMap: 'Ikarita yahantu',
        mahokoSector: 'Umukozi wa Mahoko, Karere ka Rubavu, Gisenyi',
        clinicHours: 'Amasaha ya klinika',
        monFri: 'Kuwambere-Kuwagatanu: 8AM-8PM',
        saturday: 'Kuwa gatandatu: 9AM-6PM',
        sunday: 'Kuwarumunsi: 10AM-4PM',
        
        // Footer
        quickLinks: 'Amahuza yihuta',
        legal: 'Amateka',
        privacyPolicy: 'Politiki yibanga',
        termsOfService: 'Amabwiriza yubikorwa',
        hipaaCompliance: 'Ukurikanywa HIPAA',
        copyright: '© 2024 Klinika ya Mahoko. Uburenganzire bwose bwarabitswe. | Yakuye na faringa_wa_3'
      },
      fr: {
        // Navigation
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        checkin: 'Enregistrement',
        contact: 'Contact',
        bookAppointment: 'Prendre rendez-vous',
        ourStory: 'Notre histoire',
        ourDoctor: 'Notre médecin',
        testimonials: 'Témoignages',
        emergencyCare: 'Soins durgence',
        generalHealth: 'Santé générale',
        mentalHealth: 'Santé mentale',
        healthAssessment: 'Évaluation de santé',
        
        // Hero Section
        welcome: 'Bienvenue à la Clinique Mahoko',
        heroDescription: 'Découvrez les soins de santé modernes avec notre système denregistrement numérique. Rapide, efficace et centré sur le patient.',
        quickCheckin: 'Enregistrement rapide',
        ourServices: 'Nos services',
        
        // Features
        service247: 'Service 24/7',
        service247Desc: 'Soins médicaux et services durgence 24h/24 et 7j/7',
        certifiedDoctors: 'Médecins certifiés',
        certifiedDoctorsDesc: 'Professionnels médicaux expérimentés en qui vous pouvez avoir confiance',
        digitalCheckin: 'Enregistrement numérique',
        digitalCheckinDesc: 'Système denregistrement en ligne rapide et pratique',
        
        // Check-in System
        digitalCheckinSystem: 'Système denregistrement numérique des patients',
        checkinDescription: 'Enregistrez-vous en ligne et gagnez du temps à la clinique',
        registrationForm: 'Formulaire denregistrement du patient',
        fullName: 'Nom complet',
        nationalId: 'Carte didentité nationale',
        selectSymptoms: 'Sélectionnez les symptômes (cochez tout ce qui sapplique)',
        submitCheckin: 'Soumettre lenregistrement',
        clearForm: 'Effacer le formulaire',
        
        // Doctor Section
        meetDoctor: 'Rencontrez notre médecin expert',
        doctorDescription: 'Professionnel médical hautement qualifié dédié à votre santé',
        chiefMedicalOfficer: 'Médecin en chef',
        doctorBio: 'Plus de 15 ans dexpérience en médecine interne et soins préventifs. Spécialisé dans la gestion des maladies chroniques et les soins centrés sur le patient.',
        
        // Health Assessment
        quickHealthAssessment: 'Évaluation rapide de santé',
        assessmentDescription: 'Passez notre évaluation de santé gratuite pour obtenir des recommandations personnalisées',
        howFeeling: 'Comment vous sentez-vous aujourdhui?',
        great: 'Excellent 😊',
        good: 'Bien 👍',
        okay: 'Correct 😐',
        bad: 'Mal 😢',
        selectSymptoms: 'Sélectionnez vos symptômes:',
        getRecommendation: 'Obtenir une recommandation de santé',
        
        // Health Tips
        dailyHealthTips: 'Conseils de santé quotidiens 💡',
        stayHydrated: 'Restez hydraté',
        stayHydratedDesc: 'Buvez au moins 8 verres deau par jour pour une santé optimale.',
        exerciseRegularly: 'Faites de lexercice régulièrement',
        exerciseRegularlyDesc: '30 minutes dexercice modéré peuvent renforcer votre système immunitaire.',
        getEnoughSleep: 'Dormez suffisamment',
        getEnoughSleepDesc: '7-9 heures de sommeil de qualité sont essentielles pour la récupération.',
        eatBalancedDiet: 'Mangez équilibré',
        eatBalancedDietDesc: 'Incluez des fruits, des légumes et des céréales complètes dans vos repas.',
        
        // Contact
        contactInfo: 'Informations de contact',
        locationMap: 'Carte de localisation',
        mahokoSector: 'Secteur Mahoko, District de Rubavu, Gisenyi',
        clinicHours: 'Heures de la clinique',
        monFri: 'Lun-Ven: 8H-20H',
        saturday: 'Samedi: 9H-18H',
        sunday: 'Dimanche: 10H-16H',
        
        // Footer
        quickLinks: 'Liens rapides',
        legal: 'Légal',
        privacyPolicy: 'Politique de confidentialité',
        termsOfService: 'Conditions dutilisation',
        hipaaCompliance: 'Conformité HIPAA',
        copyright: '© 2024 Clinique Mahoko. Tous droits réservés. | Développé par faringa_wa_3'
      }
    }
  }),
  
  getters: {
    t: (state) => (key) => {
      return state.translations[state.currentLanguage][key] || key
    },
    getCurrentLanguage: (state) => state.currentLanguage,
    getAvailableLanguages: (state) => ['en', 'rw', 'fr']
  },
  
  actions: {
    setLanguage(language) {
      this.currentLanguage = language
      localStorage.setItem('preferredLanguage', language)
    },
    
    loadSavedLanguage() {
      const saved = localStorage.getItem('preferredLanguage')
      if (saved && this.translations[saved]) {
        this.currentLanguage = saved
      }
    }
  }
})
