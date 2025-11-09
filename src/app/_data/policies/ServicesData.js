import { ShieldCheck, Home, Building2, Factory, Store,Users,FileText,ClipboardList,BookOpen} from "lucide-react";

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

    }
}
export default ServicesData;