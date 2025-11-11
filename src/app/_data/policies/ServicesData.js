import { ShieldCheck, Home,History, Building2,Ship,Bug,Anchor,ClipboardCheck,CreditCard,PhoneCall, RefreshCw,Factory,PieChart,FileCheck2,Settings, Store,Users,FileText,ClipboardList,BookOpen,Database,AlertTriangle} from "lucide-react";

const ServicesData = {
    "site-risk-assessment":{
        heading:"Property Types We Survey",
        paragraph:"We provide comprehensive pest survey services for all residential and commercial properties, ensuring you’re not inheriting costly pest issues.",
        details:[
              {
                icon: <Home className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Residential Properties",
                desc: "Thorough inspection of villas, apartments, and residential units.",
                points:[],
              },
              {
                icon: <Building2 className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Commercial Buildings",
                desc: "Inspection for offices, malls, and retail spaces before tenancy.",
                points:[],
              },
              {
                icon: <Factory className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Industrial Facilities",
                desc: "Pest risk assessments for factories, warehouses, and logistics hubs.",
                points:[],
              },
              {
                icon: <Store className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Retail & Office Spaces",
                desc: "Detailed evaluations for pest prevention and safety compliance.",
                points:[],
              },
              {
                icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Warehouses",
                desc: "Ensuring clean, pest-free storage areas for goods and inventory.",
                points:[],
              },
              {
                icon: <Users className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Ongoing Support",
                desc: "Post-survey consultations and preventive maintenance planning.",
                points:[],
              },
            ]
    },
    "pre-lease-surveys":{
      heading:"Property Types We Survey",
      paragraph:` We provide comprehensive pest survey services for all residential
            and commercial properties, ensuring you’re not inheriting costly
            pest issues.`,
      details:[
        {
          icon: <Home className="text-primary w-10 h-10 mb-4 mx-auto" />,
          title: "Residential Properties",
          desc: "Thorough inspection of villas, apartments, and residential units.",
          points:[],
        },
        {
          icon: <Building2 className="text-primary w-10 h-10 mb-4 mx-auto" />,
          title: "Commercial Buildings",
          desc: "Inspection for offices, malls, and retail spaces before tenancy.",
          points:[],
        },
        {
          icon: <Factory className="text-primary w-10 h-10 mb-4 mx-auto" />,
          title: "Industrial Facilities",
          desc: "Pest risk assessments for factories, warehouses, and logistics hubs.",
          points:[],
        },
        {
          icon: <Store className="text-primary w-10 h-10 mb-4 mx-auto"/>,
          title: "Retail & Office Spaces",
          desc: "Detailed evaluations for pest prevention and safety compliance.",
          points:[],
        },
        {
          icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />,
          title: "Warehouses",
          desc: "Ensuring clean, pest-free storage areas for goods and inventory.",
          points:[],
        },
        {
          icon: <Users className="text-primary w-10 h-10 mb-4 mx-auto"/>,
          title: "Ongoing Support",
          desc: "Post-survey consultations and preventive maintenance planning.",
          points:[],
        },
      ]
    },
    "audit-documentation":{
      heading:"Comprehensive Documentation Services",
      paragraph:" Our professional services cover all aspects of food safety compliance documentation.",
      details:[
              {
                icon: <FileText className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "HACCP Documentation",
                desc: "Complete Hazard Analysis and Critical Control Point documentation for food safety compliance.",
                points: [
                  "Hazard analysis",
                  "Critical control points",
                  "Monitoring procedures",
                  "Corrective actions",
                ],
              },
              {
                icon: <ClipboardList className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "ISO 22000 Documentation",
                desc: "Comprehensive food safety management system documentation for ISO certification.",
                points: [
                  "Management system",
                  "Process documentation",
                  "Risk assessment",
                  "Continuous improvement",
                ],
              },
              {
                icon: <BookOpen className="text-primary w-10 h-10 mb-4 mx-auto"/>,
                title: "AIB / BRCGS Standards",
                desc: "Audit-ready documentation for AIB and BRCGS food safety standards.",
                points: [
                  "Standard compliance",
                  "Audit preparation",
                  "Gap analysis",
                  "Implementation support",
                ],
              },
            ],

    },
    "municipality-compliance":{
      heading:"Comprehensive Compliance Services",
      paragraph:"",
      details:[
            {
              icon:"",
              title: "Pre-Inspection Preparation",
              desc: "Comprehensive preparation for municipality pest control inspections.",
              points: [
                "Documentation review",
                "Site preparation",
                "Compliance checklist",
                "Staff training",
              ],
            },
            {
              icon:"",
              title: "Inspection Support",
              desc: "Professional support during municipality inspections and audits.",
              points: [
                "On-site support",
                "Documentation assistance",
                "Compliance guidance",
                "Issue resolution",
              ],
            },
            {
              icon:"",
              title: "Compliance Documentation",
              desc: "Complete documentation and record-keeping for compliance requirements.",
              points: [
                "Record maintenance",
                "Report preparation",
                "Documentation updates",
                "Compliance tracking",
              ],
            },
          ],   
    },
    "trend-analysis":{
      heading:"Comprehensive Analysis Services",
      paragraph:"Our professional services cover all aspects of pest management analytics and planning for efficient, data-driven pest control.",
      details:[
              {
                icon: <Database className="text-primary w-10 h-10 mb-4 mx-auto"  />,
                title: "Data Collection & Analysis",
                desc: "Comprehensive pest activity data collection, statistical analysis, and trend identification.",
                points:[],
              },
              {
                icon: <AlertTriangle className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Threshold Monitoring",
                desc: "Real-time tracking of pest activity against established risk thresholds.",
                points:[],
              },
              {
                icon: <ClipboardCheck className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Action Plan Development",
                desc: "Customized strategies based on data insights and threshold breaches.",
                points:[],
              },
              {
                icon: <PieChart className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Cost-Benefit Analysis",
                desc: "Assess control strategy efficiency and optimize future resource allocation.",
                points:[],
              },
              {
                icon: <FileCheck2 className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Compliance Documentation",
                desc: "Detailed records for regulatory and audit-ready pest management documentation.",
                points:[],
              },
              {
                icon: <Settings className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Implementation Support",
                desc: "On-site and remote support for data-driven action plan execution.",
                points:[],
              },
            ],
    },
    "digital-reporting":{
      heading:"Client Portal Features",
      paragraph:"Designed to enhance transparency and convenience, our client portal offers full control over service data and communications.",
      details:[
              { title: "Real-time Service Updates", icon: <RefreshCw className="text-primary w-10 h-10 mb-4 mx-auto" /> ,desc:"",points:[]},
              { title: "Digital Inspection Reports", icon: <FileText className="text-primary w-10 h-10 mb-4 mx-auto" /> ,desc:"",points:[]},
              { title: "Treatment History & Records", icon: <History className="text-primary w-10 h-10 mb-4 mx-auto" /> ,desc:"",points:[]},
              { title: "Service Request Management", icon: <ClipboardList className="text-primary w-10 h-10 mb-4 mx-auto" /> ,desc:"",points:[]},
              { title: "Payment & Invoice Access", icon: <CreditCard className="text-primary w-10 h-10 mb-4 mx-auto" /> ,desc:"",points:[]},
              { title: "Emergency Contact Information", icon: <PhoneCall className="text-primary w-10 h-10 mb-4 mx-auto" /> ,desc:"",points:[]},
            ],
    },
    "light-trap-analysis":{
      heading:"Comprehensive Light Trap Services",
      paragraph:"",
      details:[
              {
                icon:"",
                title: "Light Trap Installation",
                desc: "Strategic placement and installation of insect light traps for optimal coverage.",
                points: [
                  "Strategic positioning",
                  "Optimal coverage",
                  "Professional installation",
                  "Safety compliance",
                ],
              },
              {
                icon:"",
                title: "Trap Mapping & Monitoring",
                desc: "Comprehensive mapping and monitoring of all light trap locations and performance.",
                points: [
                  "Location mapping",
                  "Performance tracking",
                  "Coverage analysis",
                  "Efficiency monitoring",
                ],
              },
              {
                icon:"",
                title: "Count Analysis & Reporting",
                desc: "Detailed analysis of insect counts and comprehensive reporting services.",
                points: [
                  "Data collection",
                  "Statistical analysis",
                  "Trend identification",
                  "Detailed reporting",
                ],
              },
            ]
    },
    "pheromone-monitoring":{
      heading:"Comprehensive Pheromone Services",
      paragraph:"",
      details:[
              {
                icon:"",
                title: "Pheromone Trap Installation",
                desc: "Strategic placement of pheromone traps for stored-product insect monitoring.",
                points: [
                  "Strategic positioning",
                  "Optimal coverage",
                  "Professional installation",
                  "Safety compliance",
                ],
              },
              {
                icon:"",
                title: "Monitoring & Data Collection",
                desc: "Comprehensive monitoring and data collection from pheromone traps.",
                points: [
                  "Regular monitoring",
                  "Data collection",
                  "Performance tracking",
                  "Coverage analysis",
                ],
              },
              {
                icon:"",
                title: "Analysis & Reporting",
                desc: "Detailed analysis of pheromone trap data and comprehensive reporting.",
                points: [
                  "Data analysis",
                  "Trend identification",
                  "Statistical reporting",
                  "Action recommendations",
                ],
              },
            ]
    },
    "ship-sanitation":{
      heading:"Documentation Services We Provide",
      paragraph:"",
      details:[
            { title: "Ship Sanitation Certificates", icon: <Ship className="text-primary w-10 h-10 mb-4 mx-auto" />,desc:"",points:[], },
            { title: "Pest Control Reports", icon: <Bug className="text-primary w-10 h-10 mb-4 mx-auto" />,desc:"",points:[], },
            { title: "Inspection Documentation", icon: <ClipboardCheck className="text-primary w-10 h-10 mb-4 mx-auto" />,desc:"",points:[], },
            { title: "Treatment Records", icon: <FileText className="text-primary w-10 h-10 mb-4 mx-auto" />,desc:"",points:[], },
            { title: "Compliance Verification", icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />,desc:"",points:[], },
            { title: "Port Entry Documentation", icon: <Anchor className="text-primary w-10 h-10 mb-4 mx-auto" />,desc:"",points:[], },
          ]
    }

}
export default ServicesData;