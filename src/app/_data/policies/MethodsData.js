import { ClipboardCheck,TrendingUp,Activity,Database,Laptop,ShieldCheck,BarChart3,Sun,Target,MapPin, AlertTriangle,Settings, FileCheck2, Search,  FileText, Users,FolderCheck,LineChart,CheckCircle,ClipboardList} from "lucide-react";

const MethodsData = {
    "site-risk-assessment":{
     heading:"Our Survey Methods",
     paragraph:"We use advanced inspection tools, certified procedures, and detailed reporting to ensure your property is thoroughly evaluated before any lease or purchase decision.",
     details:[
              {
                icon: <Search className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Comprehensive Inspection",
                desc: "Visual and hidden area assessments for pest activity or risk indicators.",
              },
              {
                icon: <ClipboardCheck className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Detailed Documentation",
                desc: "Photographic evidence and in-depth inspection records for every area.",
              },
              {
                icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Risk Assessment",
                desc: "Identify infestation sources, risk zones, and recommend preventive actions.",
              },
              {
                icon: <FileText className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Survey Reports",
                desc: "Professional reports with findings, remediation advice, and future planning.",
              },
              {
                icon: <FileCheck2 className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Pre-Purchase Due Diligence",
                desc: "Avoid hidden pest problems before closing property transactions.",
              },
              {
                icon: <Users className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Consultation & Support",
                desc: "Expert review of survey findings and ongoing pest prevention guidance.",
              },
            ]   
    },
    "pre-lease-surveys":{
      heading:" Our Survey Methods",
      paragraph:`We use advanced inspection tools, certified procedures, and detailed
            reporting to ensure your property is thoroughly evaluated before any
            lease or purchase decision.`,
      details:[
              {
                icon:<Search className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Comprehensive Inspection",
                desc: "Visual and hidden area assessments for pest activity or risk indicators.",
              },
              {
                icon: <ClipboardCheck className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Detailed Documentation",
                desc: "Photographic evidence and in-depth inspection records for every area.",
              },
              {
                icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Risk Assessment",
                desc: "Identify infestation sources, risk zones, and recommend preventive actions.",
              },
              {
                icon: <FileText className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Survey Reports",
                desc: "Professional reports with findings, remediation advice, and future planning.",
              },
              {
                icon: <FileCheck2 className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Pre-Purchase Due Diligence",
                desc: "Avoid hidden pest problems before closing property transactions.",
              },
              {
                icon:  <Users className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Consultation & Support",
                desc: "Expert review of survey findings and ongoing pest prevention guidance.",
              },
            ],
    },
    "audit-documentation":{
      heading:"Why Choose Our Documentation Services?",
      paragraph:"",
      details:[
              { icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />, title: "Licensed & Dubai Municipality Approved" },
              { icon: <Users className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Certified Food Safety Specialists" },
              { icon: <FolderCheck className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Comprehensive Documentation" },
              { icon: <LineChart className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "10+ Years of Experience" },
              { icon: <CheckCircle className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Free Initial Consultation" },
              { icon: <ClipboardList className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Ongoing Support & Updates" },
            ]
    },
    "municipality-compliance":{
      heading:"Why Choose Our Compliance Services?",
      paragraph:"",
      details:[
              { icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />, title: "Licensed & Dubai Municipality Approved" },
              { icon: <Users className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Certified Food Safety Specialists" },
              { icon: <FolderCheck className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Comprehensive Documentation" },
              { icon: <LineChart className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "10+ Years of Experience" },
              { icon: <CheckCircle className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Free Initial Consultation" },
              { icon: <ClipboardList className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Ongoing Support & Updates" },
            ],
            
    },
    "trend-analysis":{
      heading:"Data-Driven Pest Management",
      paragraph:"Our trend analysis and threshold-based action planning services transform your pest management from reactive to proactive. We analyze historical data, identify patterns, and establish intelligent thresholds that trigger strategic actions before problems escalate.",
      details:[
              {
                icon: <TrendingUp className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Pest Population Trends",
                desc: "Analyze fluctuations in pest activity to forecast potential outbreaks.",
              },
              {
                icon: <Activity className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Seasonal Activity Patterns",
                desc: "Identify recurring seasonal behavior for better timing of control actions.",
              },
              {
                icon: <BarChart3 className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Treatment Effectiveness",
                desc: "Evaluate control measures using data-driven performance metrics.",
              },
              {
                icon: <AlertTriangle className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Risk Level Assessment",
                desc: "Assess overall pest risk to prioritize preventive measures effectively.",
              },
              {
                icon: <Settings className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Threshold Monitoring",
                desc: "Set and monitor pest thresholds for timely and controlled responses.",
              },
              {
                icon: <Users className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Ongoing Support",
                desc: "Continuous monitoring, evaluation, and plan optimization with our experts.",
              },
            ]
    },
    "digital-reporting":{
      heading:"Advanced Pest Management Technology",
      paragraph:"Streamline your pest management process with advanced digital reporting tools, secure client portals, and data-driven insights.",
      details:[
              {
                icon: <FileCheck2 className="text-primary w-10 h-10 mb-4 mx-auto" />,
                title: "Digital Reporting System",
                desc: "Comprehensive digital reporting platform with real-time updates and automated reports.",
              },
              {
                icon: <Users  className="text-primary w-10 h-10 mb-4 mx-auto"/>,
                title: "Client Portal Access",
                desc: "Secure online access for clients to review service history and manage requests.",
              },
              {
                icon: <BarChart3  className="text-primary w-10 h-10 mb-4 mx-auto"/>,
                title: "Analytics & Insights",
                desc: "Advanced analytics tools providing trends, performance metrics, and ROI analysis.",
              },
              {
                icon: <Database className="text-primary w-10 h-10 mb-4 mx-auto"/>,
                title: "Centralized Data",
                desc: "All service records, reports, and client information in one secure digital system.",
              },
              {
                icon: <Laptop  className="text-primary w-10 h-10 mb-4 mx-auto"/>,
                title: "Cloud-Based Platform",
                desc: "Access anywhere, anytime — full control over pest management operations.",
              },
              {
                icon: <ShieldCheck  className="text-primary w-10 h-10 mb-4 mx-auto"/>,
                title: "Secure Access",
                desc: "Data protection and encrypted access for clients and staff.",
              },
            ]
    },
    "light-trap-analysis":{
      heading:"Why Choose Our Light Trap Services?",
      paragraph:"",
      details:[ 
              { icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />, title: "Licensed & Dubai Municipality Approved",desc:"" },
              { icon: <Users className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Certified light trap specialists",desc:"" },
              { icon: <FolderCheck className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Advanced monitoring technology",desc:"" },
              { icon: <LineChart className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "10+ years experience in light trap analysis",desc:"" },
              { icon: <CheckCircle className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Free Initial Consultation",desc:"" },
              { icon: <ClipboardList className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Ongoing monitoring & support",desc:"" },
              { title: "Flying Insect Population Trends", icon: <Activity className="text-primary w-10 h-10 mb-4 mx-auto"/>,desc:"" },
              { title: "Seasonal Activity Patterns", icon: <Sun className="text-primary w-10 h-10 mb-4 mx-auto" />,desc:"" },
              { title: "Trap Efficiency Analysis", icon: <Target className="text-primary w-10 h-10 mb-4 mx-auto" />,desc:"" },
              { title: "Coverage Gap Identification", icon: <MapPin className="text-primary w-10 h-10 mb-4 mx-auto" />,desc:"" },
            ],
    },
    "pheromone-monitoring":{
      heading:"Comprehensive Pheromone Services",
      paragraph:"",
      details:[ 
              { icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />, title: "Licensed & Dubai Municipality Approved",desc:"" },
              { icon: <Users className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Certified pheromone specialists",desc:"" },
              { icon: <FolderCheck className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Advanced monitoring technology",desc:"" },
              { icon: <LineChart className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "10+ years experience in pheromone monitoring",desc:"" },
              { icon: <CheckCircle className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Free initial consultation",desc:"" },
              { icon: <ClipboardList className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Ongoing monitoring & support",desc:"" },
            ],
    },
    "ship-sanitation":{
      heading:"Why Choose Our Maritime Services?",
      paragraph:"",
      details:[ 
              { icon: <ShieldCheck className="text-primary w-10 h-10 mb-4 mx-auto" />, title: "Licensed & Dubai Municipality Approved",desc:"" },
              { icon: <Users className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Certified ship sanitation specialists",desc:"" },
              { icon: <FolderCheck className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "International shipping experience",desc:"" },
              { icon: <LineChart className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "10+ years experience in maritime pest control",desc:"" },
              { icon: <CheckCircle className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Free initial consultation",desc:"" },
              { icon: <ClipboardList className="text-primary w-10 h-10 mb-4 mx-auto"/>, title: "Ongoing monitoring & support",desc:"" },
            ],
    }

}
export default MethodsData;