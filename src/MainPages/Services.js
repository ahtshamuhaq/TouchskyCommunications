import React from 'react';
import Header from '../HomePageComponents/Header';
import Footer from '../HomePageComponents/Footer';

const services = [
  {
    title: "Final Expense Live Transfer",
    id: "final‑expense",
    description: (
      <>
        <p>Our Final Expense Live Transfer service connects you directly with high-intent prospects who are actively looking for final expense insurance policies. These leads are pre-qualified, saving you time and ensuring that you’re speaking to interested prospects right away.</p>
        
        <h3 className="text-xl font-semibold mt-5">Features:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Live, real-time transfers to your phone.</li>
          <li>Pre-screened and qualified leads.</li>
          <li>Exclusive leads, no recycled or shared information.</li>
          <li>Targeted towards individuals seeking final expense insurance.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Benefits:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>High conversion rates due to real-time engagement with prospects.</li>
          <li>Reduced wasted time chasing unqualified leads.</li>
          <li>Increased sales efficiency and ROI.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Target Audience:</h3>
        <p>Ideal for insurance agents and agencies focusing on final expense insurance, aiming to increase lead conversion rates with high-quality, live prospects.</p>
        
        <div className="mt-5 flex justify-center">
          <a href="/pricing" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</a>
        </div>
      </>
    ),
  },
  {
    title: "Call Back / Paper Leads",
    id: "call‑back‑paper",
    description: (
      <>
        <p>Our Call Back and Paper Leads service gives you more flexibility in managing leads. Call Back Leads are for prospects who have requested a follow-up call, and Paper Leads come in bulk, allowing you to handle them at your own pace.</p>
        
        <h3 className="text-xl font-semibold mt-5">Features:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Call Back Leads: Prospects who have requested a call-back.</li>
          <li>Paper Leads: Bulk leads in CSV format for easy CRM integration.</li>
          <li>Flexible follow-up: You can choose when to reach out to the prospects.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Benefits:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>High-quality leads that have already expressed interest.</li>
          <li>Control over lead timing and frequency.</li>
          <li>Perfect for nurturing leads with longer sales cycles.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Target Audience:</h3>
        <p>Ideal for businesses in industries like insurance, home improvement, and real estate where follow-up over time is essential.</p>
        
        <div className="mt-5 flex justify-center">
          <a href="/pricing" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</a>
        </div>
      </>
    ),
  },
  {
    title: "Auto Insurance Live Transfers & Leads",
    id: "auto‑insurance",
    description: (
      <>
        <p>Our Auto Insurance Live Transfers and Leads service delivers highly-qualified prospects who are actively seeking auto insurance. The leads are pre-screened and live-transferred, allowing you to engage with them immediately.</p>
        
        <h3 className="text-xl font-semibold mt-5">Features:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Live transfers to your phone, connecting you with ready-to-buy prospects.</li>
          <li>Leads are segmented by vehicle type, insurance needs, and location.</li>
          <li>Exclusive leads for higher conversion potential.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Benefits:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Increased sales efficiency through instant engagement.</li>
          <li>High-intent leads ready to discuss coverage options.</li>
          <li>Improved conversion rates by speaking to prospects while they are still interested.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Target Audience:</h3>
        <p>This service is perfect for auto insurance agents and brokers who want a steady stream of qualified leads to grow their business.</p>
        
        <div className="mt-5 flex justify-center">
          <a href="/pricing" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</a>
        </div>
      </>
    ),
  },
  {
    title: "Medicare Live Transfers & Leads",
    id: "medicare",
    description: (
      <>
        <p>Our Medicare Live Transfers service connects you with seniors who are actively seeking Medicare plans or supplemental insurance. These prospects are pre-screened and ready to talk about their healthcare options.</p>
        
        <h3 className="text-xl font-semibold mt-5">Features:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Pre-screened seniors seeking Medicare or supplemental plans.</li>
          <li>Live transfers ensure minimal delay and immediate engagement.</li>
          <li>Lead segmentation based on age, location, and healthcare needs.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Benefits:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Engage with high-intent seniors looking for Medicare options.</li>
          <li>Higher conversion rates by speaking with prospects when they are most interested.</li>
          <li>Exclusive leads for a higher likelihood of conversion.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Target Audience:</h3>
        <p>Ideal for Medicare agents, insurance brokers, and healthcare providers looking to connect with seniors seeking coverage.</p>
        
        <div className="mt-5 flex justify-center">
          <a href="/pricing" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</a>
        </div>
      </>
    ),
  },
  {
    title: "Solar Live Transfers & Leads",
    id: "solar",
    description: (
      <>
        <p>Our Solar Live Transfers service connects you with homeowners who are actively interested in solar panel installations. These leads are pre-qualified and ready to speak with you about the benefits of switching to solar energy.</p>
        
        <h3 className="text-xl font-semibold mt-5">Features:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Pre-qualified homeowners seeking solar solutions.</li>
          <li>Live transfer ensures immediate engagement and high conversion potential.</li>
          <li>Lead segmentation based on location, energy needs, and budget.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Benefits:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Instant access to homeowners interested in solar installations.</li>
          <li>Higher sales potential through live engagement with qualified leads.</li>
          <li>Increased ROI by speaking to prospects while they’re ready to invest in solar solutions.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Target Audience:</h3>
        <p>This service is ideal for solar panel installers, renewable energy providers, and green energy sales teams.</p>
        
        <div className="mt-5 flex justify-center">
          <a href="/pricing" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</a>
        </div>
      </>
    ),
  },
  {
    title: "Auto Warranty Live Transfers & Leads",
    id: "auto‑warranty",
    description: (
      <>
        <p>For those in the vehicle warranty industry, our Auto Warranty Live Transfers and Leads service connects you directly with consumers who are looking for vehicle protection plans. These leads are pre-screened and ready to discuss coverage options for their vehicles.</p>
        
        <h3 className="text-xl font-semibold mt-5">Features:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Live transfers of highly-qualified auto warranty leads.</li>
          <li>Lead segmentation by vehicle age, mileage, and coverage requirements.</li>
          <li>Exclusive leads, ensuring you're not competing with other agents.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Benefits:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Speak to prospects while they are actively shopping for an auto warranty.</li>
          <li>Maximize sales by engaging with ready-to-buy leads instantly.</li>
          <li>Increased sales efficiency and higher conversion rates.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Target Audience:</h3>
        <p>Ideal for auto warranty brokers and agencies looking to engage consumers actively shopping for extended vehicle protection plans.</p>
        
        <div className="mt-5 flex justify-center">
          <a href="/pricing" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</a>
        </div>
      </>
    ),
  },
  {
    title: "Home Improvement Live Transfers & Leads",
    id: "home‑improvement",
    description: (
      <>
        <p>Home improvement professionals can benefit from our Home Improvement Live Transfer service, which connects you with homeowners actively seeking renovation services such as roofing, siding, HVAC, and more.</p>
        
        <h3 className="text-xl font-semibold mt-5">Features:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Live transfers to homeowners ready to discuss their home improvement projects.</li>
          <li>Lead segmentation by project type, location, and budget.</li>
          <li>Exclusive leads, ensuring you're the only contractor speaking to the homeowner.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Benefits:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Reduced sales cycle by connecting with homeowners who are ready to hire contractors.</li>
          <li>Increased closing rates through live, real-time engagement with prospects.</li>
          <li>Access to exclusive, high-quality leads that are pre-screened for their needs.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Target Audience:</h3>
        <p>Best for contractors, remodelers, and home improvement companies looking to grow their business with qualified, ready-to-act leads.</p>
        
        <div className="mt-5 flex justify-center">
          <a href="/pricing" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</a>
        </div>
      </>
    ),
  },
  {
    title: "Web Development (Custom Websites, E-commerce, CMS)",
    id: "web‑development",
    description: (
      <>
        <p>Our Web Development service provides end-to-end solutions for creating custom websites, e-commerce platforms, and content management systems (CMS). We work closely with you to understand your business needs and build a user-friendly, responsive, and fully-functional website to help you engage with your audience and boost conversions.</p>
        
        <h3 className="text-xl font-semibold mt-5">Features:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Custom web design tailored to your brand and audience.</li>
          <li>Responsive websites that work seamlessly across all devices.</li>
          <li>Development of e-commerce platforms with payment gateway integration.</li>
          <li>Content management systems (CMS) to easily update and manage content.</li>
          <li>Search Engine Optimization (SEO) to improve your website’s visibility on search engines.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Benefits:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Fully customized websites built to your specifications.</li>
          <li>Enhanced user experience, leading to higher engagement and conversions.</li>
          <li>Scalability and flexibility to add new features as your business grows.</li>
          <li>Search engine optimization (SEO) for better online visibility.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Target Audience:</h3>
        <p>Ideal for businesses looking to build a professional online presence, whether you need a simple informational website, an e-commerce store, or a CMS-based site for managing content.</p>
        
        <div className="mt-5 flex justify-center">
          <a href="/pricing" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</a>
        </div>
      </>
    ),
  },
  {
    title: "Graphic Designing (Branding, Logo Design, Marketing Materials)",
    id: "graphic‑designing",
    description: (
      <>
        <p>Our Graphic Designing service helps you establish a strong brand identity and create stunning visuals for your marketing materials. From logos and branding to social media graphics and print materials, we provide everything you need to visually communicate your message and build brand recognition.</p>
        
        <h3 className="text-xl font-semibold mt-5">Features:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Custom logo design to establish your brand identity.</li>
          <li>Marketing materials such as brochures, flyers, and posters.</li>
          <li>Social media graphics and ad creatives for online marketing campaigns.</li>
          <li>Consistent branding across all visual elements, including typography and color schemes.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Benefits:</h3>
        <ul className="list-disc pl-5 mt-3">
          <li>Strong and consistent brand identity across all platforms.</li>
          <li>Attractive designs that help grab attention and engage your target audience.</li>
          <li>Professional materials that increase your brand's credibility and trustworthiness.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Target Audience:</h3>
        <p>This service is perfect for startups, established businesses, and anyone looking to enhance their branding, marketing materials, and online presence with professional graphic design.</p>
        
        <div className="mt-5 flex justify-center">
          <a href="/pricing" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</a>
        </div>
      </>
    ),
  },
];

const ServicesPage = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-black">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <section key={index} id={service.id} className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h2>
            <div className="text-gray-700">{service.description}</div>
          </section>
        ))}
      </div>
    </div>
    <Footer/>
        </>
  );
};

export default ServicesPage;
