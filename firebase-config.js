// Configuración de Firebase (reemplaza con tus propios datos)
const firebaseConfig = {
    apiKey: "AIzaSyDj2nve90oMm4nlVizv-rSsTbrGIOefL9s",
    authDomain: "monica-proyect.firebaseapp.com",
    projectId: "monica-proyect",
    storageBucket: "monica-proyect.firebasestorage.app",
    messagingSenderId: "336668751782",
    appId: "1:336668751782:web:6c71cf75d5fb93a4ec4167",
    measurementId: "G-QCLZ19LR6X"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
// Inicializar Auth
const auth = firebase.auth(); 