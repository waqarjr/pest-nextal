import { ClipboardCheck, FileCheck2, Search, ShieldCheck, FileText, Users,FolderCheck,LineChart,CheckCircle,ClipboardList} from "lucide-react";

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
    "audit-documentation":{
      heading:"Why Choose Our Documentation Services?",
      paragraph:"",
      details:[
              { icon: <ShieldCheck className="text-emerald-600 w-10 h-10 mb-4 mx-auto" />, title: "Licensed & Dubai Municipality Approved" },
              { icon: <Users className="text-emerald-600 w-10 h-10 mb-4 mx-auto"/>, title: "Certified Food Safety Specialists" },
              { icon: <FolderCheck className="text-emerald-600 w-10 h-10 mb-4 mx-auto"/>, title: "Comprehensive Documentation" },
              { icon: <LineChart className="text-emerald-600 w-10 h-10 mb-4 mx-auto"/>, title: "10+ Years of Experience" },
              { icon: <CheckCircle className="text-emerald-600 w-10 h-10 mb-4 mx-auto"/>, title: "Free Initial Consultation" },
              { icon: <ClipboardList className="text-emerald-600 w-10 h-10 mb-4 mx-auto"/>, title: "Ongoing Support & Updates" },
            ]
    }
}
export default MethodsData;