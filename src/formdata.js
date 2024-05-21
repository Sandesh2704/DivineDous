const formdata = {
    Diet: ["Veg", "Non-Veg", "Occasionally Non-Veg", "Eggetarian", "Jain", "Vegan"],
    denominations : ["Anglo Indian", "Basel Mission", "Born Again", "Brethren", "Cannonite", "Catholic", "Chaldean Syrian", "Catholic Knanaya", "Catholic Malankara", "Cheramar", "Christian Nadar", "Church of North India (CNI)", "Church of South India (CSI)", "CMS", "Convert", "Evangelical", "Indian Orthodox", "Intercaste", "IPC", "Jacobite", "Jacobite Knanaya", "Knanaya", "Knanaya Catholic", "Knanaya Jacobite", "Knanaya Pentecostal", "Knanaya", "Latin Catholic", "Malankara", "Malankara Catholic", "Mangalorean", "Marathoma", "Methodist", "Mormon", "Nadar", "Orthodox", "Pentecost", "Presbyterian", "Protestant", "RCSC", "Roman Catholic", "Salvation Army", "Scheduled Caste (SC)", "Scheduled Tribe (ST)", "Seventh day Adventist", "Syrian", "Syrian Catholic", "Syrian Orthodox", "Syro Malabar"],
    motherTongue : ['Hindi', 'English', 'Bengali', 'Gujarati', 'Kashmiri', 'Malayalam', 'Marathi', 'Oriya', 'Punjabi',  'Urdu',  'Sanskrit' ,'Arabic', , 'Tamil','Telugu', 'Kannada', 'Odia', 'Gujarati', 'Sindhi','Assamese', 'Kashmiri', 'Konkani', 'Nepali', 'Spanish', 'Bengali', 'Portuguese', 'Russian', 'French', 'German', 'Italian', 'Polish', 'Tagalog', 'Ukrainian','Romanian', 'Dutch', 'Greek', 'Hungarian', 'Swedish', 'Czech','Norwegian', 'Bulgarian', 'Danish', 'Finnish', 'Slovak', 'Serbian','Croatian', 'Lithuanian', 'Latvian',  'Burmese', 'Amharic', 'Chichewa','Akan', 'Kinyarwanda', 'Kongo', 'Lingala', 'Shona', 'Swahili', 'Tswana', 'Yoruba', 'Zulu', 'Uzbek', 'Kirundi', 'Afrikaans', 'Hausa', 'Igbo', 'Kinyarwanda', 'Kirundi', 'Kinyarwanda', 'Kikuyu', 'Kinyarwanda', 'Sesotho', 'Somali', 'Tigrinya', 'Wolof', 'Xhosa', 'Zulu', 'Fijian', 'Hawaiian', 'Maori', 'Samoan', 'Tongan'],
    Religion:['Christian'],
    FatherStatus: ["Employed", "Business", "Retired", "Not Employed", "Passed Away"],
    MotherStatus: ["Homemaker", "Employed", "Business", "Retired", "Passed Away"],
    NativePlace: ["Specify where you belong to (e.g.: Delhi)"],
    NoofSiblings: ['1', '2', '3', '4', '5 or Above '],
    FamilyType: ["Joint", "Nuclear"],
    FamilyTradition: ["Traditional", "Moderate", "Liberal"],
    AffluenceLevel: ["Affluent", "Upper Middle Class", "Middle Class", "Lower Middle Class"],
    ResidencyStatus: ['Citizen', 'Permanent Resident', 'Student Visa', 'Temporary Visa', 'Work Permit'],
   

    Qualification: ['Engineering', 'Arts / Design', 'Finance / Commerce', 'Computers / IT', 'Science', 'Medicine', 'Management', 'Law', 'Doctorate', 'Others', 'Non-Graduate'],
    Degree: {
        "Engineering": ["B.E / B.Tech", "M.E / M.Tech", "M.S Engineering", "B.Eng. (Hons)", "M.Eng (Hons)", "Engineering Diploma", "AE", "AET"],
        "Arts / Design": ["B.A", "B.Ed.", "BJMC", "BFA", "B.Arch.", "B.Des", "BMM", "MFA", "M.Ed.", "M.A", "MSW", "MJMC", "M. Arch", "M.Des", "BA (Hons)", "B.Arch (Hons)", "DFA", "D.Ed.", "D. Arch", "AA", "AFA"],
        "Finance / Commerce": ["B. Com", "CA / CPA", "CFA", "BSc / B.fin", "M.Com", "MSc / M.fin / MS", "B.com (Hons)", "PGD Finance"],
        "Computers / IT": ["BCA", "B.IT", "BCS", "BA Computer Science", "MCA", "PGDCS", "IT Diploma", "Others"],
        "Science": ["B.Sc.", "M.Sc.", "B.Sc. (Hons)", "M.Sc. (hons)", "Dip SC", "As", "AAS", "Others"],
        "Medicine": ["MBBS", "BDS", "BPT", "BAMS", "BHMS", "B.Pharma", "BVSc", "BSC / BScN", "MDS", "M.D", "M.S Medicine", "MPT", "DM", "M. Pharma", "PGD Medicine", "Others"],
        "Management": ["BBA", "BHM", "BBM", "MBA", "PGDM", "ABA", "Others"],
        "Law": ["BL / LLB", "ML / LLM", "LLB (Hons)", "ALA"],
        "Doctorate": ["Ph.D.", "M.Phil."],
        "Others": ["Bachelor", "Master", "Diploma", "Honors", "Doctorate", "Associate"],
        "Non-Graduate": ["High School", "Less than high School"]
    },

    WorkingSector: ["Accounting, Banking & Finance", "Administration & HR", "Advertising, Media & Entertainment", "Agriculture", "Airline & Aviation", "Architecture & Design", "Artists, Animators & Web Designers", "Beauty, Fashion & Jewelry Designers", "BPO, KPO, & Customer Support", "Civil Services / Law Enforcements", "Defense", "Education & Training", "Engineering", "Hotel & Hospitality", "IT & Software Engineering", "Legal", "Medical & Healthcare", "Merchant Navy", "Sales & Marketing", "Science", "Corporate Professionals", "Others", "Non Working"],
    WorkingAsRole: {
        "Accounting, Banking & Finance": ["Banking Professional", "Chartered Accountant", "Company Secretary", "Finance Professional", "Investment Professional", "Accounting Professional (Other)"],
        "Administration & HR": ["Admin Professional", "Human Resources Professional"],
        "Advertising, Media & Entertainment": ["Actor", "Advertising Professional", "Entertainment Professional", "Event Manager", "Journalist", "Media Professional", "Public Relations Professional"],
        "Agriculture": ["Farming", "Horticulturist", "Agricultural Professional (Others)"],
        "Airline & Aviation": ["Air Hostess / Flight Attendant", "Pilot / Co-Pilot", "Other Airline Professional"],
        "Architecture & Design": ["Architect", "Interior Designer", "Landscape Architect"],
        "Artists, Animators & Web Designers": ["Animator", "Commercial Artist", "Web / UX Designers", "Artists (Others)"],
        "Beauty, Fashion & Jewelry Designers": ["Beautician", "Fashion Designer", "Hair Stylist", "Jewelry Designer", "Designer (Others)"],
        "BPO, KPO, & Customer Support": ["Customer Support / BPO / KPO Professional"],
        "Civil Services / Law Enforcements": ["IAS / IRS / IES / IFS", "Indian Police Services (IPS)", "Law Enforcement Employee (Others)"],
        "Defense": ["Airforce", "Army", "Navy", "Defense Services (Others)"],
        "Education & Training": ["Lecturer", "Professor", "Research Assistant", "Research Scholar", "Teacher", "Training Professional (Others)"],
        "Engineering": ["Civil Engineer", "Electronics / Telecom Engineer", "Mechanical / Production Engineer", "Non-IT Engineer (Others)"],
        "Hotel & Hospitality": ["Chef / Sommelier / Food Critic", "Catering Professional", "Hotel & Hospitality Professional (Others)"],
        "IT & Software Engineering": ["Software Developer / Programmer", "Software Consultant", "Hardware & Networking Professional", "Software Professional (Others)"],
        "Legal": ["Lawyer", "Legal Assistant", "Legal Professional (Others)"],
        "Medical & Healthcare": ["Dentist", "Doctor", "Medical Transcriptionist", "Nurse", "Pharmacist", "Physician Assistant", "Physiotherapist / Occupational Therapist", "Psychologist", "Surgeon", "Veterinary Doctor", "Therapist (Others)", "Medical / Healthcare Professional (Others)"],
        "Merchant Navy": ["Merchant Navy Officer", "Mariner"],
        "Sales & Marketing": ["Marketing Professional", "Sales Professional"],
        "Science": ["Biologist / Botanist", "Physicist", "Science Professional (Others)"],
        "Corporate Professionals": ["CxO / Chairman / Director / President", "VP / AVP / GM / DGM", "Sr. Manager / Manager", "Consultant / Supervisor / Team Leads", "Team Member / Staff"],
        "Others": ["Agent / Broker / Trader / Contractor", "Business Owner / Entrepreneur", "Politician", "Social Worker / Volunteer / NGO", "Sportsman", "Travel & Transport Professional", "Writer"],
        "Non Working": ["Student", "Retired", "Not Working", "Select"],
    },
    WorkingWith: ["Private Company", "Government / Public Sector", "Defense / Civil Services", "Business / Self Employed", "Not Working"],
    CreatedFor: ["MySelf", "Parent Guardian", "Sibling", "Friend", "Other"],
    Gender: ['Male', 'Female'],
    Status: ['Never Married', 'Divorced', 'Awaiting Divorce'],
    
//  Status : [{ value: 'Never Married', label: 'Never Married' },
//  { value: 'Divorced', label: 'Divorced' },
//  { value: 'Awaiting Divorce', label: 'Awaiting Divorce' }],
    healthOptions: [
        { value: "No Health Problems", label: "No Health Problems" },
        { value: "HIV Positive", label: "HIV Positive" },
        { value: "Diabetes", label: "Diabetes" },
        { value: "Low BP", label: "Low BP" },
        { value: "High BP", label: "High BP" },
        { value: "Heart Ailments", label: "Heart Ailments" },
        { value: "Other", label: "Other" }
    ],
    EthnicOrigin : ["African","Caribbean","Indian","Melanesian","Australasian/Aboriginal","Chinese","Guamanian","Japanese","Korean","Polynesian","European/Anglo Saxon","Other Pacific Islander","Latin American","Arabic","Vietnamese","Micronesian","Declined to Respond","Other Hispanic","US or Canadian Indian","Other Asian","Puerto Rican","Filipino","Mexican","Alaskan Native","Cuban"],
    LivingLoactionFields : [
        { name: 'LivingCountry', label: 'Country' },
        { name: 'LivingState', label: 'State' },
        { name: 'LivingCity', label: 'City' }
      ],

      lookingforLivingLoactionFields : [
        { name: 'lookingforLivingCountry', label: 'Country' },
        { name: 'lookingforLivingState', label: 'State' },
        { name: 'lookingforLivingCity', label: 'City' }
      ],

      healthInformation: [ "No Health Problems", "HIV Positive",  "Diabetes",  "Low BP", "High BP",  "Heart Ailments","Other"
    ],

};

module.exports = formdata;

