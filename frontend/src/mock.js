// Mock data for Complex Print application
// This data simulates what would come from the backend API

export const mockData = {
  // Services offered by Complex Print
  services: [
    {
      id: 1,
      title: "Subscription Service",
      icon: "subscription",
      description: "Cost-effective regular maintenance that will cost you less than one-time specialist visits. Our employee will adjust to your operating schedule and provide unlimited time until your problem is solved.",
      features: [
        "Regular scheduled maintenance",
        "Unlimited service time per visit",
        "Priority support",
        "Cost savings vs one-time visits",
        "Flexible scheduling"
      ],
      pricing: "from 15,000₽/month"
    },
    {
      id: 2,
      title: "Comprehensive Service",
      icon: "comprehensive",
      description: "Monthly or quarterly preventive services that ensure maintenance of your office equipment and long-term operation. Includes regular check-ups and preventive measures.",
      features: [
        "Monthly/quarterly preventive maintenance",
        "Equipment health monitoring",
        "Long-term operation guarantee",
        "Detailed service reports",
        "Parts replacement planning"
      ],
      pricing: "Custom pricing"
    },
    {
      id: 3,
      title: "One-time Repairs",
      icon: "onetime",
      description: "Professional one-time repair services with warranty on both service and spare parts. Quick response for urgent equipment failures.",
      features: [
        "Warranty on service and parts",
        "Quick response time",
        "Professional diagnostics",
        "Genuine spare parts",
        "Fixed pricing"
      ],
      pricing: "from 3,500₽/visit"
    }
  ],

  // Equipment brands we service
  equipmentBrands: [
    {
      name: "Hewlett Packard (HP)",
      speciality: "LaserJet, OfficeJet Pro series"
    },
    {
      name: "Canon",
      speciality: "ImageCLASS, imagePRESS series"
    },
    {
      name: "Kyocera",
      speciality: "TASKalfa, ECOSYS series"
    },
    {
      name: "Konica Minolta",
      speciality: "bizhub, magicolor series"
    },
    {
      name: "Xerox",
      speciality: "WorkCentre, VersaLink series"
    },
    {
      name: "Ricoh",
      speciality: "MP, SP series"
    }
  ],

  // Common equipment problems
  commonProblems: [
    {
      type: "Poor print quality",
      description: "Faded prints, streaks, smudges, or unclear text"
    },
    {
      type: "Paper jams when printing",
      description: "Paper getting stuck during printing process"
    },
    {
      type: "Does not pick up paper",
      description: "Equipment not feeding paper from trays"
    },
    {
      type: "Display screen not working",
      description: "Blank screen, flickering, or unresponsive display"
    },
    {
      type: "Error codes displayed",
      description: "Equipment showing error messages or codes"
    },
    {
      type: "Equipment not turning on",
      description: "Power issues or equipment not responding"
    },
    {
      type: "Slow printing speed",
      description: "Printing taking longer than usual"
    },
    {
      type: "Network connectivity issues",
      description: "Problems with network printing or wireless connection"
    },
    {
      type: "Toner/cartridge issues",
      description: "Problems with toner recognition or replacement"
    },
    {
      type: "Strange noises during operation",
      description: "Unusual sounds coming from the equipment"
    }
  ],

  // Corporate clients (as mentioned in description)
  corporateClients: [
    "Svyaznoy",
    "StroyGazMontazh", 
    "SovcomBank",
    "Burger King",
    "CryogenMash",
    "X5 Retail Group"
  ],

  // Authorized service centers experience
  serviceCenters: [
    "HP Service Center",
    "Ricoh Service Center", 
    "Canon Service Center",
    "Kyocera Service Center"
  ],

  // Mock repair requests (for demonstration)
  mockRepairRequests: [
    {
      id: 1,
      companyName: "ABC Corporation",
      contactPerson: "John Smith",
      phone: "+7 (495) 123-45-67",
      email: "john.smith@abc-corp.ru",
      equipmentBrand: "HP",
      equipmentModel: "LaserJet Pro M404dn",
      problemType: "Paper jams when printing",
      problemDescription: "Paper consistently jams in the middle of print jobs, causing workflow interruptions",
      urgency: "high",
      serviceType: "onetime",
      status: "pending",
      submittedAt: "2025-01-15T10:30:00Z"
    },
    {
      id: 2,
      companyName: "Tech Solutions Ltd",
      contactPerson: "Maria Petrov",
      phone: "+7 (495) 987-65-43",
      email: "maria.petrov@techsolutions.ru",
      equipmentBrand: "Canon",
      equipmentModel: "imageRUNNER ADVANCE C3330i",
      problemType: "Poor print quality",
      problemDescription: "Prints are coming out with faded colors and streaks, especially on the right side",
      urgency: "medium",
      serviceType: "subscription",
      status: "in_progress",
      submittedAt: "2025-01-14T14:15:00Z"
    }
  ]
};