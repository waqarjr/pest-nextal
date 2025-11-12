import Image from "next/image";

export default function TermiteTypes() {
  const termiteTypes = [
    { title: "Subterranean Termites", desc: "The most common and destructive species that build underground colonies and attack foundations, wooden structures, and furniture.", img: "/assets/termites/subterranean.jpg" },
    { title: "Drywood Termites", desc: "These termites live inside dry wood such as furniture, doors, and structural timber, causing hidden damage without soil contact.", img: "/assets/termites/drywood.jpg" },
    { title: "Dampwood Termites", desc: "Often found in moist, decaying wood; less common indoors but still a threat in humid environments or poorly ventilated spaces.", img: "/assets/termites/dampwood.jpeg" },
    { title: "Black Termites", desc: "Known for their dark color, black termites can infest wooden structures and furniture, gradually weakening them if left untreated.", img: "/assets/termites/black.webp" },
  ];

  return (
    <section className="py-16 bg-secondary font-[Montserrat]">
      <div className=" mx-auto px-4 xl:px-6">
        <h2 className="text-3xl xl:text-4xl font-bold text-primary text-center mb-12  ">Common Types of Termites</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {termiteTypes.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-56"><Image src={item.img} alt={item.title} fill className="object-cover" /></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary ">{item.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed font-[Montserrat]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
