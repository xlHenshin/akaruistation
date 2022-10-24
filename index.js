import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const registerForm = document.getElementById("confirmar")

const enviarInfo = async(email) =>{
    
    try {
        const data = await addDoc(collection(db, "users"),{
            email
        });

    } catch (e) {
        console.log(e);
    }
};

registerForm.addEventListener("submit", e =>{

    e.preventDefault();

    const email = registerForm.email.value;
    console.log("valor email: "+email);

    if (email) {
        enviarInfo(email);
        alert("Gracias por registrarte en la beta. Estaremos en contacto contigo :)");
        registerForm.email.value="";
    }else{
        alert("Completa el campo de email")
    };   
});