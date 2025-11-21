# Pest Control Services Website


[View Live Site](https://pest-nextal.vercel.app/)  
[GitHub Repository](https://github.com/waqarjr/pest-nextal)

A modern, professional pest control services website built with **Next.js 15** and **React 19**, featuring a comprehensive pest management solution platform for residential, commercial, and industrial clients in Dubai.

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-38bdf8?style=flat-square&logo=tailwindcss)

## 🌟 Features

### Core Services
- **Pest Control Solutions**: Comprehensive pest management for various pests including:
  - Cockroaches, Ants, Termites, Bedbugs
  - Rodents, Flies, Mosquitoes, Fleas, Ticks
  - Spiders, Wasps, Bees, Moths
  - Silverfish, Beetles, Carpet Beetles, Bird Mites
  - Lizards, Birds, Wildlife
  
- **Service Categories**:
  - Residential Pest Control
  - Commercial Pest Control
  - Industrial Pest Control
  - General Pest Control
  - Sanitization & Disinfection Services

### Website Features
- 🎨 Modern, responsive UI with smooth animations (Framer Motion)
- 📱 Mobile-first design approach
- 🔄 Dynamic routing for service pages
- 📊 Google Reviews integration
- 💬 Contact forms with validation (Formik + Yup)
- 📍 Service areas mapping
- ❓ Frequently Asked Questions (FAQs)
- 🏆 Client testimonials and success stories
- 📞 24/7 availability and quick response system

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with App Router
- **UI Library**: [React 19.1.0](https://react.dev/)
- **Styling**: [Tailwind CSS 4.1.16](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12.23.24](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Carousel**: [Swiper 12.0.3](https://swiperjs.com/)

### Form Management
- **Form Library**: [Formik 2.4.6](https://formik.org/)
- **Validation**: [Yup 1.7.1](https://github.com/jquense/yup)

### Data Fetching
- **SWR 2.3.6**: For efficient data fetching and caching

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Version Control**: Git

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd newone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Add your environment variables here
   NEXT_PUBLIC_API_URL=your_api_url
   # Add any other required environment variables
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
newone/
├── public/              # Static assets (images, icons, etc.)
│   └── assets/         # Pest control service images
├── src/
│   └── app/
│       ├── (user)/     # User-facing routes
│       │   ├── [slug]/ # Dynamic pest control service pages
│       │   ├── about-us/
│       │   ├── contact-us/
│       │   ├── policies/
│       │   └── page.js # Homepage
│       ├── _data/      # Static data and content
│       │   ├── policies/
│       │   ├── ControlServices.js
│       │   ├── ExpertTeamData.js
│       │   ├── FrequentlyQuestions.js
│       │   └── Herosection.js
│       ├── api/        # API routes
│       ├── components/ # Reusable React components
│       ├── globals.css # Global styles
│       └── favicon.ico
├── .env.local          # Environment variables (local)
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

## 🎯 Key Components

- **HeroSection**: Dynamic hero banner for each service
- **AboutCompany**: Company information and credentials
- **Pests**: Pest identification and information
- **ServiceCategories**: Service category showcase
- **CoreServices**: Core service offerings
- **GoogleReviews**: Customer reviews integration
- **Clients**: Client testimonials
- **ServiceAreasPage**: Geographic service coverage
- **WhyChooseUs**: Unique selling propositions
- **Faqs**: Frequently asked questions
- **ContactPage**: Contact form and information
- **ContactInfo**: Company contact details

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛡️ Company Features

- ✅ Municipality Approved Company
- 👨‍🔧 Professional and Skilled Team
- 🔒 Warranty & Follow Up Service
- ⭐ Outstanding Service Reputation in Dubai
- ⚡ Quick Response - 24x7 Availability

## 🌐 Service Pages

The website uses dynamic routing to generate individual pages for each pest control service. Services include treatment solutions for all common pests found in Dubai and the UAE region.

## 📄 Policies

The website includes comprehensive policy pages covering:
- Privacy Policy
- Terms of Service
- Service Agreements
- And more...

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with PostCSS configuration. Custom styles are defined in `globals.css`.

### Next.js
Next.js configuration can be found in `next.config.mjs`, including any custom settings for routing, images, and build optimization.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For inquiries about pest control services or website support, please visit the Contact Us page or reach out through the contact form.

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All the open-source libraries that made this project possible

---

**Built with ❤️ for professional pest control services in Dubai**
