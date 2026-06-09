// =====================================================
// i18n.js - Internationalization for Welfare India
// Supported Languages: English (en), Marathi (mr), Hindi (hi)
// =====================================================

const translations = {
    en: {
        // Nav
        nav_home: "Home",
        nav_schemes: "Schemes",
        nav_updates: "Updates",
        nav_eligibility: "Check Eligibility",
        nav_quiz: "Quiz",
        nav_feedback: "Feedback",
        nav_login: "Login",
        nav_logout: "Logout",
        nav_logo: "Welfare India",

        // Home Page
        hero_title: "Know Your Rights – Know Your Welfare Schemes",
        hero_subtitle: "Empowering citizens with information about government initiatives for Education, Health, Agriculture, and more.",
        btn_browse: "Browse Schemes",
        btn_eligibility: "Check Eligibility",
        section_explore: "Explore by Category",
        cat_education: "Education",
        cat_education_desc: "Scholarships and loans for students.",
        cat_health: "Health",
        cat_health_desc: "Insurance and medical assistance.",
        cat_farmers: "Farmers",
        cat_farmers_desc: "Subsidies and support for agriculture.",
        cat_women: "Women",
        cat_women_desc: "Empowerment and child support.",
        footer_rights: "© 2026 Welfare India. All Rights Reserved.",
        footer_initiative: "A Public Awareness Initiative.",

        // Schemes Page
        schemes_title: "Government Welfare Schemes",
        schemes_search_placeholder: "Search for schemes (e.g. Housing, Student)...",
        schemes_loading: "Loading schemes...",

        // Eligibility Page
        eligibility_title: "Eligibility Checker",
        eligibility_subtitle: "Enter your details to find schemes relevant to you.",
        label_age: "Age",
        label_gender: "Gender",
        opt_select_gender: "Select Gender",
        opt_male: "Male",
        opt_female: "Female",
        opt_transgender: "Transgender",
        label_income: "Annual Family Income (Rs.)",
        label_occupation: "Occupation",
        opt_select_occupation: "Select Occupation",
        opt_student: "Student",
        opt_farmer: "Farmer",
        opt_unemployed: "Unemployed",
        opt_govt_emp: "Government Employee",
        opt_private_emp: "Private Employee",
        opt_senior: "Senior Citizen",
        btn_check: "Check Eligibility",
        results_title: "Recommended Schemes",

        // Quiz Page
        quiz_title: "Welfare Awareness Quiz",
        quiz_subtitle: "Test your knowledge about government welfare schemes.",
        quiz_loading: "Loading questions...",
        quiz_next: "Next Question",
        quiz_completed: "Quiz Completed!",
        quiz_score: "Your Score",
        btn_retake: "Retake Quiz",

        // Contact / Feedback Page
        feedback_title: "Feedback & Support",
        contact_us: "Contact Us",
        contact_tagline: "Have questions or suggestions? We'd love to hear from you.",
        contact_email_label: "Email:",
        contact_phone_label: "Helpline:",
        contact_address_label: "Address:",
        faq_title: "Frequently Asked Questions",
        faq_q1: "How do I apply for schemes?",
        faq_a1: "Each scheme has a specific application process. Visit the Scheme Details page to find the official link and steps.",
        faq_q2: "Is this website official?",
        faq_a2: "No, this is a public awareness portal created to help citizens find information easily.",
        feedback_form_title: "Send Feedback",
        label_your_name: "Your Name",
        label_email_addr: "Email Address",
        label_message: "Message",
        btn_submit: "Submit Feedback",
        feedback_success: "Thank you! Your feedback has been submitted.",
        feedback_error: "Error submitting feedback.",

        // Updates Page
        updates_title: "Latest Welfare News & Updates",
        updates_loading: "Loading updates...",
        updates_none: "No updates found.",
        updates_error: "Error loading updates.",

        // Login Page
        login_title: "Login",
        label_email: "Email",
        label_password: "Password",
        btn_login: "Login",
        login_or: "OR",
        btn_google: "Sign in with Google",
        login_no_account: "Don't have an account?",
        login_register_link: "Register here",
        login_success: "Login Successful!",
        login_failed: "Login failed",
        google_prompt: "Enter your Gmail address (Mock Google Auth):",
        google_success: "Google Login Successful!",
        google_failed: "Google Login failed",

        // Register Page
        register_title: "Register",
        label_full_name: "Full Name",
        btn_register: "Register",
        register_have_account: "Already have an account?",
        register_login_link: "Login here",
        register_success: "Registration Successful! Please Login.",
        register_failed: "Registration failed",

        // Scheme Card labels
        learn_more: "Learn More",
        view_official: "Official Site",
        scheme_benefits: "Benefits",
        scheme_eligibility: "Eligibility",
    },

    mr: {
        // Nav
        nav_home: "मुख्यपृष्ठ",
        nav_schemes: "योजना",
        nav_updates: "अद्यतने",
        nav_eligibility: "पात्रता तपासा",
        nav_quiz: "प्रश्नमंजुषा",
        nav_feedback: "अभिप्राय",
        nav_login: "लॉग इन",
        nav_logout: "लॉग आउट",
        nav_logo: "कल्याण भारत",

        // Home Page
        hero_title: "आपले अधिकार जाणा – सरकारी कल्याण योजना जाणा",
        hero_subtitle: "शिक्षण, आरोग्य, शेती आणि इतर क्षेत्रातील सरकारी उपक्रमांबद्दल नागरिकांना माहिती देणे.",
        btn_browse: "योजना पाहा",
        btn_eligibility: "पात्रता तपासा",
        section_explore: "श्रेणीनुसार शोधा",
        cat_education: "शिक्षण",
        cat_education_desc: "विद्यार्थ्यांसाठी शिष्यवृत्ती आणि कर्ज.",
        cat_health: "आरोग्य",
        cat_health_desc: "विमा आणि वैद्यकीय सहाय्य.",
        cat_farmers: "शेतकरी",
        cat_farmers_desc: "शेतीसाठी अनुदान आणि समर्थन.",
        cat_women: "महिला",
        cat_women_desc: "सशक्तीकरण आणि बाल सहाय्य.",
        footer_rights: "© 2026 कल्याण भारत. सर्व हक्क राखीव.",
        footer_initiative: "एक सार्वजनिक जागरूकता उपक्रम.",

        // Schemes Page
        schemes_title: "सरकारी कल्याण योजना",
        schemes_search_placeholder: "योजना शोधा (उदा. गृहनिर्माण, विद्यार्थी)...",
        schemes_loading: "योजना लोड होत आहेत...",

        // Eligibility Page
        eligibility_title: "पात्रता तपासक",
        eligibility_subtitle: "तुमच्यासाठी संबंधित योजना शोधण्यासाठी तुमचे तपशील प्रविष्ट करा.",
        label_age: "वय",
        label_gender: "लिंग",
        opt_select_gender: "लिंग निवडा",
        opt_male: "पुरुष",
        opt_female: "महिला",
        opt_transgender: "तृतीयपंथी",
        label_income: "वार्षिक कौटुंबिक उत्पन्न (रु.)",
        label_occupation: "व्यवसाय",
        opt_select_occupation: "व्यवसाय निवडा",
        opt_student: "विद्यार्थी",
        opt_farmer: "शेतकरी",
        opt_unemployed: "बेरोजगार",
        opt_govt_emp: "सरकारी कर्मचारी",
        opt_private_emp: "खाजगी कर्मचारी",
        opt_senior: "ज्येष्ठ नागरिक",
        btn_check: "पात्रता तपासा",
        results_title: "शिफारस केलेल्या योजना",

        // Quiz Page
        quiz_title: "कल्याण जागरूकता प्रश्नमंजुषा",
        quiz_subtitle: "सरकारी कल्याण योजनांबद्दल तुमचे ज्ञान तपासा.",
        quiz_loading: "प्रश्न लोड होत आहेत...",
        quiz_next: "पुढील प्रश्न",
        quiz_completed: "प्रश्नमंजुषा पूर्ण!",
        quiz_score: "तुमचा गुण",
        btn_retake: "पुन्हा प्रयत्न करा",

        // Contact Page
        feedback_title: "अभिप्राय आणि समर्थन",
        contact_us: "आमच्याशी संपर्क साधा",
        contact_tagline: "प्रश्न किंवा सूचना आहेत? आम्हाला आनंद होईल.",
        contact_email_label: "ईमेल:",
        contact_phone_label: "हेल्पलाइन:",
        contact_address_label: "पत्ता:",
        faq_title: "वारंवार विचारले जाणारे प्रश्न",
        faq_q1: "योजनांसाठी अर्ज कसा करावा?",
        faq_a1: "प्रत्येक योजनेची विशिष्ट अर्ज प्रक्रिया आहे. अधिकृत दुवा आणि चरणांसाठी योजना तपशील पृष्ठ पहा.",
        faq_q2: "हे वेबसाइट अधिकृत आहे का?",
        faq_a2: "नाही, हे एक सार्वजनिक जागरूकता पोर्टल आहे जे नागरिकांना सहजपणे माहिती शोधण्यास मदत करते.",
        feedback_form_title: "अभिप्राय पाठवा",
        label_your_name: "तुमचे नाव",
        label_email_addr: "ईमेल पत्ता",
        label_message: "संदेश",
        btn_submit: "अभिप्राय सबमिट करा",
        feedback_success: "धन्यवाद! तुमचा अभिप्राय सबमिट केला आहे.",
        feedback_error: "अभिप्राय सबमिट करताना त्रुटी.",

        // Updates Page
        updates_title: "ताज्या कल्याण बातम्या आणि अद्यतने",
        updates_loading: "अद्यतने लोड होत आहेत...",
        updates_none: "कोणतेही अद्यतन आढळले नाही.",
        updates_error: "अद्यतने लोड करताना त्रुटी.",

        // Login Page
        login_title: "लॉग इन",
        label_email: "ईमेल",
        label_password: "पासवर्ड",
        btn_login: "लॉग इन",
        login_or: "किंवा",
        btn_google: "Google ने साइन इन करा",
        login_no_account: "खाते नाही?",
        login_register_link: "येथे नोंदणी करा",
        login_success: "लॉग इन यशस्वी!",
        login_failed: "लॉग इन अयशस्वी",
        google_prompt: "तुमचा Gmail पत्ता प्रविष्ट करा:",
        google_success: "Google लॉग इन यशस्वी!",
        google_failed: "Google लॉग इन अयशस्वी",

        // Register Page
        register_title: "नोंदणी करा",
        label_full_name: "पूर्ण नाव",
        btn_register: "नोंदणी करा",
        register_have_account: "आधीच खाते आहे?",
        register_login_link: "येथे लॉग इन करा",
        register_success: "नोंदणी यशस्वी! कृपया लॉग इन करा.",
        register_failed: "नोंदणी अयशस्वी",

        // Scheme Card labels
        learn_more: "अधिक जाणून घ्या",
        view_official: "अधिकृत साइट",
        scheme_benefits: "फायदे",
        scheme_eligibility: "पात्रता",
    },

    hi: {
        // Nav
        nav_home: "होम",
        nav_schemes: "योजनाएं",
        nav_updates: "अपडेट",
        nav_eligibility: "पात्रता जांचें",
        nav_quiz: "प्रश्नोत्तरी",
        nav_feedback: "प्रतिक्रिया",
        nav_login: "लॉग इन",
        nav_logout: "लॉग आउट",
        nav_logo: "कल्याण भारत",

        // Home Page
        hero_title: "अपने अधिकार जानें – सरकारी कल्याण योजनाएं जानें",
        hero_subtitle: "शिक्षा, स्वास्थ्य, कृषि और अन्य क्षेत्रों में सरकारी पहल के बारे में नागरिकों को जानकारी देना.",
        btn_browse: "योजनाएं देखें",
        btn_eligibility: "पात्रता जांचें",
        section_explore: "श्रेणी के अनुसार खोजें",
        cat_education: "शिक्षा",
        cat_education_desc: "छात्रों के लिए छात्रवृत्ति और ऋण.",
        cat_health: "स्वास्थ्य",
        cat_health_desc: "बीमा और चिकित्सा सहायता.",
        cat_farmers: "किसान",
        cat_farmers_desc: "कृषि के लिए सब्सिडी और समर्थन.",
        cat_women: "महिला",
        cat_women_desc: "सशक्तिकरण और बाल सहायता.",
        footer_rights: "© 2026 कल्याण भारत. सर्वाधिकार सुरक्षित.",
        footer_initiative: "एक सार्वजनिक जागरूकता पहल.",

        // Schemes Page
        schemes_title: "सरकारी कल्याण योजनाएं",
        schemes_search_placeholder: "योजनाएं खोजें (जैसे. आवास, छात्र)...",
        schemes_loading: "योजनाएं लोड हो रही हैं...",

        // Eligibility Page
        eligibility_title: "पात्रता जांचकर्ता",
        eligibility_subtitle: "अपनी जानकारी दर्ज करें और अपने लिए उपयुक्त योजनाएं खोजें.",
        label_age: "आयु",
        label_gender: "लिंग",
        opt_select_gender: "लिंग चुनें",
        opt_male: "पुरुष",
        opt_female: "महिला",
        opt_transgender: "तृतीय लिंग",
        label_income: "वार्षिक पारिवारिक आय (रु.)",
        label_occupation: "व्यवसाय",
        opt_select_occupation: "व्यवसाय चुनें",
        opt_student: "छात्र",
        opt_farmer: "किसान",
        opt_unemployed: "बेरोजगार",
        opt_govt_emp: "सरकारी कर्मचारी",
        opt_private_emp: "निजी कर्मचारी",
        opt_senior: "वरिष्ठ नागरिक",
        btn_check: "पात्रता जांचें",
        results_title: "अनुशंसित योजनाएं",

        // Quiz Page
        quiz_title: "कल्याण जागरूकता प्रश्नोत्तरी",
        quiz_subtitle: "सरकारी कल्याण योजनाओं के बारे में अपना ज्ञान परखें.",
        quiz_loading: "प्रश्न लोड हो रहे हैं...",
        quiz_next: "अगला प्रश्न",
        quiz_completed: "प्रश्नोत्तरी पूर्ण!",
        quiz_score: "आपका स्कोर",
        btn_retake: "फिर से प्रयास करें",

        // Contact Page
        feedback_title: "प्रतिक्रिया और सहायता",
        contact_us: "हमसे संपर्क करें",
        contact_tagline: "प्रश्न या सुझाव हैं? हमें बताएं.",
        contact_email_label: "ईमेल:",
        contact_phone_label: "हेल्पलाइन:",
        contact_address_label: "पता:",
        faq_title: "अक्सर पूछे जाने वाले प्रश्न",
        faq_q1: "योजनाओं के लिए आवेदन कैसे करें?",
        faq_a1: "हर योजना की एक विशिष्ट आवेदन प्रक्रिया होती है. आधिकारिक लिंक और चरणों के लिए योजना विवरण पृष्ठ देखें.",
        faq_q2: "क्या यह वेबसाइट आधिकारिक है?",
        faq_a2: "नहीं, यह एक सार्वजनिक जागरूकता पोर्टल है जो नागरिकों को आसानी से जानकारी खोजने में मदद करता है.",
        feedback_form_title: "प्रतिक्रिया भेजें",
        label_your_name: "आपका नाम",
        label_email_addr: "ईमेल पता",
        label_message: "संदेश",
        btn_submit: "प्रतिक्रिया सबमिट करें",
        feedback_success: "धन्यवाद! आपकी प्रतिक्रिया सबमिट हो गई.",
        feedback_error: "प्रतिक्रिया सबमिट करने में त्रुटि.",

        // Updates Page
        updates_title: "नवीनतम कल्याण समाचार और अपडेट",
        updates_loading: "अपडेट लोड हो रहे हैं...",
        updates_none: "कोई अपडेट नहीं मिला.",
        updates_error: "अपडेट लोड करने में त्रुटि.",

        // Login Page
        login_title: "लॉग इन",
        label_email: "ईमेल",
        label_password: "पासवर्ड",
        btn_login: "लॉग इन",
        login_or: "या",
        btn_google: "Google से साइन इन करें",
        login_no_account: "खाता नहीं है?",
        login_register_link: "यहां पंजीकरण करें",
        login_success: "लॉग इन सफल!",
        login_failed: "लॉग इन विफल",
        google_prompt: "अपना Gmail पता दर्ज करें:",
        google_success: "Google लॉग इन सफल!",
        google_failed: "Google लॉग इन विफल",

        // Register Page
        register_title: "पंजीकरण करें",
        label_full_name: "पूरा नाम",
        btn_register: "पंजीकरण करें",
        register_have_account: "पहले से खाता है?",
        register_login_link: "यहां लॉग इन करें",
        register_success: "पंजीकरण सफल! कृपया लॉग इन करें.",
        register_failed: "पंजीकरण विफल",

        // Scheme Card labels
        learn_more: "और जानें",
        view_official: "आधिकारिक साइट",
        scheme_benefits: "लाभ",
        scheme_eligibility: "पात्रता",
    }
};

// ── Core i18n Functions ──────────────────────────────────────────────────────

/**
 * Returns the current language code saved in localStorage (default: 'en').
 */
function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}

/**
 * Translate a key for the current language.
 * Falls back to English, then to the key itself.
 */
function t(key) {
    const lang = getCurrentLang();
    return (translations[lang] && translations[lang][key]) ||
           (translations['en'] && translations['en'][key]) ||
           key;
}

/**
 * Apply all [data-i18n] translations to the DOM.
 * Supports:
 *   data-i18n="key"                  → sets innerText
 *   data-i18n-placeholder="key"      → sets placeholder attribute
 *   data-i18n-title="key"            → sets title attribute
 */
function applyTranslations() {
    const lang = getCurrentLang();

    // text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = t(key);
        if (translated) el.textContent = translated;
    });

    // placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translated = t(key);
        if (translated) el.setAttribute('placeholder', translated);
    });

    // title / aria-label
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        const translated = t(key);
        if (translated) el.setAttribute('title', translated);
    });

    // Sync active-lang class on switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active-lang', btn.dataset.lang === lang);
    });

    // Update <html lang>
    document.documentElement.lang = lang;
}


/**
 * Switch the active language, save to localStorage, and re-apply.
 */
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations();
    // Dispatch a custom event so page-specific JS can react (e.g. re-render cards)
    document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
}

// Auto-apply on every page load
document.addEventListener('DOMContentLoaded', applyTranslations);
