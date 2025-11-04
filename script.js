// First Aid Advice Data
let currentLanguage = 'en'; // Default language: 'en' for English, 'lg' for Luganda
let currentEmergency = null; // To track the currently displayed emergency

const firstAidAdvice = {
    'menstrual-cramps': {
        en: {
            title: 'Menstrual Cramps Relief',
            content: `
                <ol>
                    <li>Apply a heating pad or warm compress to your lower abdomen.</li>
                    <li>Take over-the-counter pain relievers like ibuprofen or acetaminophen.</li>
                    <li>Rest and relax in a comfortable position.</li>
                    <li>Stay hydrated and eat light, nutritious meals.</li>
                    <li>Try gentle exercises like walking or yoga.</li>
                    <li>If cramps are severe or persistent, consult a healthcare provider.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Obulumi nga oli munsonga',
            content: `
                <ol>
                    <li>Funa ekigoye okitobye naamazzi agabuguumilira, weenyige wansi woolubuto.</li>
                    <li>Woomala mir kumakelenda agakkakkanya obulumi.</li>
                    <li>Weebake nga otunudde waggulu.</li>
                    <li>Nywa amazzi manji, nemmere elimu kubilungo.</li>
                    <li>Kolamu ku ka exercise akagonvu nga yoga.</li>
                    <li>Obulumi webuyitilila, laba omusawo.</li>
                </ol>
            `
        }
    },
    'burn': {
        en: {
            title: 'Burn Treatment',
            content: `
                <ol>
                    <li>Cool the burn under cool (not cold) running water for 10-15 minutes.</li>
                    <li>Remove any jewelry or clothing near the burn (unless stuck to the skin).</li>
                    <li>Cover the burn with a clean, dry dressing.</li>
                    <li>Do not apply creams, oils, or ice to the burn.</li>
                    <li>Seek medical attention for severe burns or if the burn covers a large area.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okwookyebwa Omuliro',
            content: `
                <ol>
                    <li>Kozesa amazzi agabuguumilira (si agalala) okukozesa ekikyama okumala dakika 10-15.</li>
                    <li>Ggyawo ebyuma bya zaabu oba engoye eziri okumpi n'ekikyama (nga tebikwatiddwa ku lususu).</li>
                    <li>Kikwekeze n'ekitambala ekilongoofu era ekiggya.</li>
                    <li>Toteka ku kikyama creemu, amafuta, oba ice.</li>
                    <li>Laba omusawo obukyama bukulu oba nga bukweza ekifo kinene.</li>
                </ol>
            `
        }
    },
    'scald': {
        en: {
            title: 'Scald Treatment',
            content: `
                <ol>
                    <li>Cool the affected area under cool running water for at least 20 minutes.</li>
                    <li>Remove any wet clothing or jewelry from the area.</li>
                    <li>Cover with a clean, dry dressing.</li>
                    <li>Do not burst any blisters.</li>
                    <li>Seek medical attention if the scald is severe or covers a large area.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okukyama okuva ku Mazzi Agabuguumilira',
            content: `
                <ol>
                    <li>Kozesa amazzi agabuguumilira okukozesa ekifo ekyafuna okumala dakika 20 oba zezingi.</li>
                    <li>Ggyawo engoye ezibisi oba ebyuma bya zaabu ebiri ku kifo ekyafuna.</li>
                    <li>Kikwekeze n'ekitambala ekilongoofu era ekiggya.</li>
                    <li>Totamula buliisa eziriwo.</li>
                    <li>Laba omusawo obukyama bukulu oba nga bukweza ekifo kinene.</li>
                </ol>
            `
        }
    },
    'asthma': {
        en: {
            title: 'Asthma Attack Management',
            content: `
                <ol>
                    <li>Help the person sit upright and stay calm.</li>
                    <li>Assist them in using their inhaler if available.</li>
                    <li>If no inhaler, help them breathe slowly and deeply.</li>
                    <li>Loosen any tight clothing.</li>
                    <li>Call emergency services if symptoms worsen or don't improve.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okuluma kw\'Omwoyo',
            content: `
                <ol>
                    <li>Yamba omuntu atudde waggulu era abeere mu ddungu.</li>
                    <li>Muwagire mu kukozesa inhaler nga waliwo.</li>
                    <li>Inhaler nga tewali, muwagire mu kukola omukka mpola nga otunuulira.</li>
                    <li>Ggyawo engoye ezikwatiddwa.</li>
                    <li>Yita abasawo b'omuliro obulamu bwe bubuyitilila oba nga tebukendeeza.</li>
                </ol>
            `
        }
    },
    'hypotension': {
        en: {
            title: 'Low Blood Pressure (Hypotension) Management',
            content: `
                <ol>
                    <li>Help the person lie down with feet elevated.</li>
                    <li>Ensure they are in a comfortable position.</li>
                    <li>Loosen any tight clothing.</li>
                    <li>Offer small sips of water if conscious.</li>
                    <li>Monitor breathing and consciousness.</li>
                    <li>Seek medical attention if symptoms persist.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Omusujja Ogw\'Omusaayi Ogutono',
            content: `
                <ol>
                    <li>Yamba omuntu alyoke n'amagulu ge agalibwe waggulu.</li>
                    <li>Muwagire abeere mu kifo ekimu.</li>
                    <li>Ggyawo engoye ezikwatiddwa.</li>
                    <li>Muwe amazzi agatono nga ali mu magezi.</li>
                    <li>Laba omukka gwe n'okubeera mu magezi.</li>
                    <li>Laba omusawo obubonero bwe tebukendeeza.</li>
                </ol>
            `
        }
    },
    'diabetes': {
        en: {
            title: 'Diabetic Emergency Response',
            content: `
                <ol>
                    <li>Check if the person is conscious and responsive.</li>
                    <li>If they have hypoglycemia symptoms, give them sugar (glucose tablets, juice, candy).</li>
                    <li>If unconscious, do not give anything by mouth.</li>
                    <li>Call emergency services immediately.</li>
                    <li>Provide any available medical information (diabetes type, medications).</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Obulwadde bw\'Omusujja Ogw\'Omusaayi Ogw\'Okukula',
            content: `
                <ol>
                    <li>Laba nga omuntu ali mu magezi era ayitaba.</li>
                    <li>Bwe balina obubonero bw'obulwadde bw'omusujja ogw'omusaayi ogutono, bawe sukali (tablets za glucose, juice, candy).</li>
                    <li>Bwe tali mu magezi, tobawe kintu kyonna mu kamwa.</li>
                    <li>Yita abasawo b'omuliro obulamu amangu ago.</li>
                    <li>Wa obubaka obulala obw'omusawo (ekika ky'obulwadde, eddagala).</li>
                </ol>
            `
        }
    },
    'cut': {
        en: {
            title: 'Cut and Wound Treatment',
            content: `
                <ol>
                    <li>Apply direct pressure to stop bleeding.</li>
                    <li>Clean the wound with soap and water.</li>
                    <li>Apply an antiseptic and cover with a clean dressing.</li>
                    <li>Change dressing regularly and watch for signs of infection.</li>
                    <li>Seek medical attention for deep cuts or if bleeding doesn't stop.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okusasulwa n\'Okulonda',
            content: `
                <ol>
                    <li>Kozesa omukono ogw'omunda okulemesa omusaayi okugwa.</li>
                    <li>Saza olulonda n'sabuni n'amazzi.</li>
                    <li>Teka antiseptic era kikwekeze n'ekitambala ekilongoofu.</li>
                    <li>Kyusa ekikwekeze bulijjo era laba obubonero bw'obulwadde.</li>
                    <li>Laba omusawo obusasulwa obuzito oba nga omusaayi tewaleka.</li>
                </ol>
            `
        }
    },
    'dog-bite': {
        en: {
            title: 'Dog Bite First Aid',
            content: `
                <ol>
                    <li>Clean the wound thoroughly with soap and water.</li>
                    <li>Apply pressure to stop any bleeding.</li>
                    <li>Cover with a clean dressing.</li>
                    <li>Seek medical attention, especially for puncture wounds or if the dog is unknown/stray.</li>
                    <li>Report the incident to local authorities if necessary.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okuluma kw\'Embwa',
            content: `
                <ol>
                    <li>Saza olulonda nnyo n'sabuni n'amazzi.</li>
                    <li>Kozesa omukono ogw'omunda okulemesa omusaayi okugwa.</li>
                    <li>Kikwekeze n'ekitambala ekilongoofu.</li>
                    <li>Laba omusawo, okusinga obulwadde obutono oba nga embwa temanyiddwa.</li>
                    <li>Tegeeza abakulu b'eggwanga bwe kiba kisoboka.</li>
                </ol>
            `
        }
    },
    'choking': {
        en: {
            title: 'Choking First Aid',
            content: `
                <ol>
                    <li>Encourage the person to cough if they can.</li>
                    <li>If coughing fails, perform the Heimlich maneuver: stand behind, wrap arms around waist, make a fist above navel, thrust inward and upward.</li>
                    <li>For infants, use back blows and chest thrusts.</li>
                    <li>Call emergency services if the object doesn't come out.</li>
                    <li>Do not perform blind finger sweeps.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okugwa mu Kkomo',
            content: `
                <ol>
                    <li>Yamba omuntu akolere nga asobola.</li>
                    <li>Bwe akolera tekiba, kola Heimlich maneuver: sima emabega, kola emikono ku mubiri, kola ekibatu waggulu w'olubuto, kanyiga munda era waggulu.</li>
                    <li>Abana abato, kola emiggo ku mugongo n'ekifuba.</li>
                    <li>Yita abasawo b'omuliro obulamu ekintu bwe tekifuluma.</li>
                    <li>Toteka kukola finger sweeps nga tolabye.</li>
                </ol>
            `
        }
    },
    'heart-attack': {
        en: {
            title: 'Heart Attack First Aid',
            content: `
                <ol>
                    <li>Call emergency services immediately.</li>
                    <li>Help the person sit or lie down comfortably.</li>
                    <li>Loosen tight clothing.</li>
                    <li>If conscious, give aspirin if available and not allergic.</li>
                    <li>Monitor breathing and be prepared to perform CPR if needed.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okuluma kw\'Omwoyo',
            content: `
                <ol>
                    <li>Yita abasawo b'omuliro obulamu amangu ago.</li>
                    <li>Yamba omuntu atudde oba alyoke wansi nga ali mu kifo ekimu.</li>
                    <li>Ggyawo engoye ezikwatiddwa.</li>
                    <li>Bwe ali mu magezi, muwe aspirin nga waliwo era nga takyawa.</li>
                    <li>Laba omukka gwe era oteeketeeke okukola CPR bwe kiba kisoboka.</li>
                </ol>
            `
        }
    },
    'stroke': {
        en: {
            title: 'Stroke First Aid',
            content: `
                <ol>
                    <li>Recognize signs: sudden numbness, confusion, trouble speaking, vision issues, walking difficulties, severe headache.</li>
                    <li>Note the time symptoms started.</li>
                    <li>Call emergency services immediately.</li>
                    <li>Keep the person comfortable and monitor for changes.</li>
                    <li>Do not give food or drink if swallowing is affected.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okuluma kw\'Omutwe',
            content: `
                <ol>
                    <li>Manya obubonero: okubulwawo obulwadde, okubulwawo amagezi, obuzibu mu kuwogera, obuzibu mu kulaba, obuzibu mu kutambula, obulumi obukulu mu mutwe.</li>
                    <li>Teekawo ekiseera obubonero bwe byatandika.</li>
                    <li>Yita abasawo b'omuliro obulamu amangu ago.</li>
                    <li>Muwagire abeere mu kifo ekimu era laba obukyusa.</li>
                    <li>Toteka kuwa emmere oba amazzi bwe kiba n'obuzibu mu kumira.</li>
                </ol>
            `
        }
    },
    'fracture': {
        en: {
            title: 'Fracture First Aid',
            content: `
                <ol>
                    <li>Immobilize the injured area with splints if possible.</li>
                    <li>Apply ice packs to reduce swelling.</li>
                    <li>Elevate the limb if no pain increases.</li>
                    <li>Do not attempt to realign the bone.</li>
                    <li>Seek immediate medical attention.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okusasulwa kw\'Egumba',
            content: `
                <ol>
                    <li>Kwatiriza ekifo ekyafuna n'ebisenge bwe kiba kisoboka.</li>
                    <li>Teka ice okukendeeza okweyongera.</li>
                    <li>Simbuliza ekikono bwe obulumi tebukyeyongera.</li>
                    <li>Toteka kukola egumba mu kifo.</li>
                    <li>Laba omusawo amangu ago.</li>
                </ol>
            `
        }
    },
    'severe-bleeding': {
        en: {
            title: 'Severe Bleeding First Aid',
            content: `
                <ol>
                    <li>Apply direct pressure to the wound with a clean cloth.</li>
                    <li>Elevate the injured area above heart level if possible.</li>
                    <li>Use a tourniquet only as a last resort and note the time.</li>
                    <li>Keep the person warm and call emergency services.</li>
                    <li>Do not remove embedded objects.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Omusaayi Ogw\'Omunda Ogw\'Okukulukuta',
            content: `
                <ol>
                    <li>Kozesa omukono ogw'omunda ku kulonda n'ekitambala ekilongoofu.</li>
                    <li>Simbuliza ekifo ekyafuna waggulu w'omwoyo bwe kiba kisoboka.</li>
                    <li>Kozesa tourniquet nga kiba ekisembayo era teekawo ekiseera.</li>
                    <li>Muwagire abeere mu bbanga era yita abasawo b'omuliro obulamu.</li>
                    <li>Toteka kuggyawo ebintu ebikwatiddwa.</li>
                </ol>
            `
        }
    },
    'allergic-reaction': {
        en: {
            title: 'Severe Allergic Reaction (Anaphylaxis) First Aid',
            content: `
                <ol>
                    <li>Call emergency services immediately.</li>
                    <li>Help the person lie down with legs elevated if breathing is difficult.</li>
                    <li>Use epinephrine auto-injector if available.</li>
                    <li>Loosen tight clothing and monitor breathing.</li>
                    <li>Perform CPR if the person stops breathing.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okuluma kw\'Obulwadde bw\'Okutaliisa',
            content: `
                <ol>
                    <li>Yita abasawo b'omuliro obulamu amangu ago.</li>
                    <li>Yamba omuntu alyoke n'amagulu ge agalibwe waggulu bwe kiba n'obuzibu mu kukola omukka.</li>
                    <li>Kozesa epinephrine auto-injector nga waliwo.</li>
                    <li>Ggyawo engoye ezikwatiddwa era laba omukka gwe.</li>
                    <li>Kola CPR bwe omuntu aleka okukola omukka.</li>
                </ol>
            `
        }
    },
    'hypothermia': {
        en: {
            title: 'Hypothermia First Aid',
            content: `
                <ol>
                    <li>Move the person to a warm, dry place immediately.</li>
                    <li>Remove wet clothing and replace with dry, warm layers.</li>
                    <li>Cover the person with blankets or sleeping bags.</li>
                    <li>Provide warm, non-alcoholic drinks if conscious.</li>
                    <li>Use skin-to-skin contact if necessary.</li>
                    <li>Seek medical attention; do not warm extremities first if severe.</li>
                </ol>
            `
        },
        lg: {
            title: 'Okulwanyisa Okubulwawo Obulwadde bw\'Okutaliisa',
            content: `
                <ol>
                    <li>Twala omuntu mu kifo ekimu era ekiggya amangu ago.</li>
                    <li>Ggyawo engoye ezibisi era bisikize n'engoye ekiggya era ekimu.</li>
                    <li>Mukikwekeze n'ebirago oba sleeping bags.</li>
                    <li>Muwe amazzi agabuguumilira nga tali nnyo nga ali mu magezi.</li>
                    <li>Kozesa okukwatagana kw'olususu bwe kiba kisoboka.</li>
                    <li>Laba omusawo; totekamu kukozesa emikono n'amagulu okusooka bwe bukulu.</li>
                </ol>
            `
        }
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize first aid functionality
    if (document.querySelector('.emergency-grid')) {
        initFirstAid();
    }

    // Initialize modal functionality
    initModal();

    // Initialize alert husband functionality
    initAlertHusband();

    // Initialize call doctor functionality
    initCallDoctor();

    // Initialize language toggle functionality
    initLanguageToggle();
});

// First Aid Functions
function initFirstAid() {
    const cards = document.querySelectorAll('.emergency-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const emergency = card.dataset.emergency;
            showAdvice(emergency);
        });
    });
}

function showAdvice(emergency) {
    currentEmergency = emergency; // Track the current emergency
    const adviceDisplay = document.getElementById('advice-display');
    const titleElement = document.getElementById('advice-title');
    const contentElement = document.getElementById('advice-content');

    titleElement.textContent = firstAidAdvice[emergency][currentLanguage].title;
    contentElement.innerHTML = firstAidAdvice[emergency][currentLanguage].content;

    adviceDisplay.style.display = 'block';
    adviceDisplay.scrollIntoView({ behavior: 'smooth' });
}

// Modal Functions
function initModal() {
    const modal = document.getElementById('doctor-modal');
    const btn = document.getElementById('report-doctor');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementById('doctor-form');

    // When the user clicks the button, open the modal
    btn.addEventListener('click', function() {
        const emergencyType = document.getElementById('advice-title').textContent;
        document.getElementById('emergency-type').value = emergencyType;
        modal.style.display = 'block';
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const doctorMobile = document.getElementById('doctor-mobile').value;
        const patientName = document.getElementById('patient-name').value;
        const emergencyType = document.getElementById('emergency-type').value;
        const message = document.getElementById('message').value;

        const smsBody = `First Aid Report: ${emergencyType}\nPatient Name: ${patientName}\n\nAdditional Message:\n${message}\n\nThis report was generated from the First Aid System.`;

        const smsLink = `sms:${doctorMobile}?body=${encodeURIComponent(smsBody)}`;

        window.location.href = smsLink;

        // Show notification
        alert('Report sent successfully! Please check your SMS app to confirm delivery.');

        // Close modal after sending
        modal.style.display = 'none';
        form.reset();
    });
}

// Alert Husband Function
function initAlertHusband() {
    const alertBtn = document.getElementById('alert-ambulance');
    alertBtn.addEventListener('click', function() {
        const emergencyType = document.getElementById('advice-title').textContent;

        // Request user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;

                const message = `Alert to husband: ${emergencyType}\n\nLocation: Lat: ${lat}, Lng: ${lng} - ${mapsLink}\n\nPlease respond immediately.`;

                const husbandNumber = '+256752802167'; // Husband's number

                const smsLink = `sms:${husbandNumber}?body=${encodeURIComponent(message)}`;

                window.location.href = smsLink;

                // Show notification
                alert('Alert sent to husband with your location! Please stay calm.');
            }, function(error) {
                console.error('Error getting location:', error);
                const message = `Alert to husband: ${emergencyType}\n\nLocation: Unable to retrieve location. Please provide details.\n\nPlease respond immediately.`;

                const husbandNumber = '+256752802167';
                const smsLink = `sms:${husbandNumber}?body=${encodeURIComponent(message)}`;
                window.location.href = smsLink;

                // Show notification
                alert('Alert sent to husband! Location could not be retrieved. Please provide your location manually.');
            });
        } else {
            const message = `Alert to husband: ${emergencyType}\n\nLocation: Geolocation not supported. Please provide details.\n\nPlease respond immediately.`;

            const husbandNumber = '+256752802167';
            const smsLink = `sms:${husbandNumber}?body=${encodeURIComponent(message)}`;

            window.location.href = smsLink;

            // Show notification
            alert('Alert sent to husband! Geolocation not supported. Please provide your location manually.');
        }
    });
}

// Call Doctor Function
function initCallDoctor() {
    const callBtn = document.getElementById('call-doctor');
    const doctorNumber = '+256704685952'; // Pre-stored doctor's number
    callBtn.addEventListener('click', function() {
        const callLink = `tel:${doctorNumber}`;
        window.location.href = callLink;
        alert('Calling Doctor Shukran now. Please ensure your device supports phone calls.');
    });
}

// Language Toggle Function
function initLanguageToggle() {
    const languageBtn = document.getElementById('language-toggle');
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            // Toggle language
            currentLanguage = currentLanguage === 'en' ? 'lg' : 'en';

            // Update button text
            languageBtn.textContent = currentLanguage === 'en' ? 'Switch to Luganda' : 'Switch to English';

            // If there's a currently displayed emergency, update it
            if (currentEmergency) {
                showAdvice(currentEmergency);
            }
        });
    }
}
