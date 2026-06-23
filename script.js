// Variable globale pour mémoriser l'adresse de réponse de l'utilisateur
let userResponseEmail = "";

// Textes d'origine pré-remplis pour faciliter l'édition par l'utilisateur
const baseMessage1 = `Subject: ⚠️ URGENT REPORT – Active Criminal Account (+509????????)

Hello WhatsApp Team,

https://wlhatt.life????????

Reporting major criminal activity compromising platform security:

Number [+509????????]

This account belongs to a digital criminal:
 • Poses as an assassin or engages in organized crime/homicide within local groups where accounts suddenly disappear after transactions.
 • Actively steals money via cyberfrauds manipulating innocent victims in private/public chats.
 • Uses violent physical/verbal threats against interlocutors and participants.

Immediate action required to ban this account and prevent further scams and public disorder on your customer service.`;

const baseMessage2 = `🚨 MAXIMUM ALERT 🚨

The number +509???????? belongs to a scammer who is conducting illegal activities on WhatsApp:

❗ Identity theft
❗ Mass scams
❗ Distribution of shocking and sensitive content
❗ Violation of privacy policies and terms of use

⚠️ This number is a danger to everyone.
✅ Report immediately
🚫 Do not reply. Do not chat. Block.

Thank you for your attention 🙏`;

const baseMessage3 = `Bonjour Équipe Technique,

Je signale un individu qui terrorise les utilisateurs dans vos groupes en se faisant passer pour un tueur de la dark web capable de localiser des adresses et d'envoyer des assassins pour éliminer ses victimes.

Ce mercenaire numérique arnaque systématiquement les gens par le vol d'argent via fraudes et spam massif tout en menaçant de pirater leurs comptes WhatsApp.

Veuillez bannir ce compte dangereux immédiatement afin de protéger les utilisateurs contre ces menaces existentielles son numéro : +509????????

Cordialement,
Tommy`;

function changerEcran(ancienId, nouveauId) {
    document.getElementById(ancienId).classList.remove('active');
    document.getElementById(nouveauId).classList.add('active');
}

// Écran 1 -> Écran 2 (Pré-remplissage des textareas pour édition)
function passerEcran2() {
    userResponseEmail = document.getElementById('userEmail').value.trim();
    if (!userResponseEmail) {
        alert("ACCÈS REFUSÉ : Saisissez votre e-mail pour recevoir les notifications du support.");
        return;
    }
    
    // Injection des textes bruts dans les formulaires d'édition
    document.getElementById('textMessage1').value = baseMessage1;
    document.getElementById('textMessage2').value = baseMessage2;
    document.getElementById('textMessage3').value = baseMessage3;
    
    changerEcran('screen1', 'screen2');
}

// Écran 2 -> Écran 3
function passerEcran3() {
    changerEcran('screen2', 'screen3');
}

// Logique d'attaque séquentielle minute par minute triggered par "fucked"
function executerAttaqueCadencee() {
    const consoleStatus = document.getElementById('statusConsole');
    const boutonFucked = document.getElementById('btnFucked');
    
    // Récupération des textes modifiés par l'utilisateur
    const msgFinal1 = document.getElementById('textMessage1').value;
    const msgFinal2 = document.getElementById('textMessage2').value;
    const msgFinal3 = document.getElementById('textMessage3').value;

    // Désactivation temporaire du bouton pour éviter les doubles clics
    boutonFucked.disabled = true;
    boutonFucked.style.opacity = "0.4";

    // --- PHASE 1 : ENVOI IMMÉDIAT DU PREMIER EMAIL ---
    consoleStatus.innerHTML = "[TRANSMISSION 1/3] Ouverture du Rapport Général...";
    consoleStatus.style.color = "#00ff33";
    
    const mail1 = "support@whatsapp.com";
    const sujet1 = "URGENT REPORT – Active Criminal Account";
    const lienMail1 = `mailto:${mail1}?subject=${encodeURIComponent(sujet1)}&body=${encodeURIComponent(msgFinal1)}`;
    window.location.href = lienMailto1;

    // --- PHASE 2 : DEUXIÈME EMAIL APRÈS 1 MINUTE (60 000 ms) ---
    setTimeout(function() {
        consoleStatus.innerHTML = "[TRANSMISSION 2/3] Ouverture du Rapport SMB...";
        consoleStatus.style.color = "#00ff33";
        alert("[fsociety LOG] 1 minute écoulée. Lancement du deuxième e-mail.");
        
        const mail2 = "smb_web@://whatsapp.com";
        const sujet2 = "🚨 MAXIMUM ALERT 🚨 Scam Report";
        // Ajout de l'email de l'utilisateur en pied de page pour le retour du support
        const corpsEmail2 = `${msgFinal2}\n\n[Email de contact utilisateur pour réponse obligatoire : ${userResponseEmail}]`;
        
        const lienMail2 = `mailto:${mail2}?subject=${encodeURIComponent(sujet2)}&body=${encodeURIComponent(corpsEmail2)}`;
        window.location.href = lienMailto2;

        // --- PHASE 3 : WHATSAPP ASSISTANCE APRÈS ENCORE 1 MINUTE ---
        setTimeout(function() {
            consoleStatus.innerHTML = "[TRANSMISSION 3/3] Routage vers l'Assistance Applicative...";
            consoleStatus.style.color = "#25D366";
            alert("[fsociety LOG] 1 minute écoulée. Routage vers l'application WhatsApp Support.");

            const lienWhatsApp = `https://whatsapp.com{encodeURIComponent(msgFinal3)}`;
            window.open(lienWhatsApp, '_blank');

            // Fin du protocole et réinitialisation
            alert("[fsociety SYSTEM] Protocole séquentiel terminé avec succès.");
            changerEcran('screen3', 'screen1');
            document.getElementById('userEmail').value = "";
            boutonFucked.disabled = false;
            boutonFucked.style.opacity = "1";
            consoleStatus.innerHTML = "[!] PROTOCOLE SÉQUENTIEL SÉCURISÉ PRÊT";
            consoleStatus.style.color = "#ff0033";

        }, 60000); // 60 secondes d'attente pour WhatsApp

    }, 60000); // 60 secondes d'attente pour l'e-mail 2
}
