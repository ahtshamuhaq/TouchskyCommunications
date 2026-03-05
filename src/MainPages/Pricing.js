import React from 'react';
import Header from '../HomePageComponents/Header';
import Footer from '../HomePageComponents/Footer';

const pricingPlans = [
  {
    service: "Final Expense",
    description: "Our Final Expense Live Transfer service connects individuals with qualified agents who specialize in providing end-of-life insurance solutions. We ensure a seamless transfer for families looking to secure affordable and reliable final expense coverage.",
    plans: [
      {
        name: "Paper Lead",
        price: "$12/lead",
        bulletPoints: [
          "Pay per lead, no upfront cost",
          "High-quality qualified leads",
          "No hidden fees or surprise charges",
          "Ideal for businesses looking for a low-risk investment",
          "Only pay for what you get",
        ],
      },
      {
        name: "Live Transfer",
        price: "$25/lead",
        bulletPoints: [
          "Instant connection to an expert agent",
          "Real-time consultations for immediate assistance",
          "No waiting time for customers",
          "Improved conversion rates from direct contact",
          "Seamless experience for both customer and agent",
        ],
      },
      {
        name: "Unlimited",
        price: "$850/week (Mon-Fri 9am-7pm EST)",
        bulletPoints: [
          "Unlimited live transfers with no cap",
          "Approx. 8-12 leads per day, ensuring consistent opportunities",
          "Priority customer support for urgent transfers",
          "Full-time availability Monday to Friday",
          "24/7 monitoring of transfers and leads",
          "Ideal for businesses with high call volume",
          "Dedicated account manager for optimizing transfers",
        ],
      },
    ],
  },
  {
    service: "Auto Insurance",
    description: "We offer live transfer services for customers seeking auto insurance. Our experienced agents provide tailored solutions for new policies, renewals, or coverage inquiries, helping drivers find the best deals and coverage options in real-time.",
    plans: [
      {
        name: "Paper Lead",
        price: "$10/lead",
        bulletPoints: [
          "Affordable lead generation with pay-per-lead pricing",
          "Efficient and high-conversion leads",
          "No minimum spend required",
          "Easy integration with your sales pipeline",
          "Scalable as your business grows",
        ],
      },
      {
        name: "Live Transfer",
        price: "$20/lead",
        bulletPoints: [
          "Instant connection with an auto insurance expert",
          "No waiting—real-time consultation",
          "Quick policy comparisons and guidance",
          "Increased conversion rates due to personalized advice",
          "Proven to boost closing rates for agents",
        ],
      },
      {
        name: "Unlimited",
        price: "$600/week (Mon-Fri 9am-7pm EST)",
        bulletPoints: [
          "Unlimited auto insurance live transfers",
          "Approx. 8-12 leads per day for consistent lead flow",
          "Comprehensive support for all transfers",
          "Focused on ensuring the best coverage for your clients",
          "No limitations on the number of calls or transfers",
          "Perfect for high-demand businesses",
        ],
      },
    ],
  },
  {
    service: "Medicare",
    description: "Our Medicare Live Transfer service directly connects seniors with experts in Medicare plans, guiding them through the process of selecting the right coverage to meet their healthcare needs. We ensure prompt, reliable assistance to ensure they make well-informed decisions.",
    plans: [
      {
        name: "Paper Lead",
        price: "$12/lead",
        bulletPoints: [
          "Cost-effective lead generation for Medicare inquiries",
          "Tailored to meet the needs of seniors",
          "No upfront commitment or long-term contracts",
          "Easy tracking and reporting of leads",
          "High-quality, verified Medicare leads",
        ],
      },
      {
        name: "Live Transfer",
        price: "$20/lead",
        bulletPoints: [
          "Instant connection to Medicare specialists",
          "Real-time consultation for seniors' needs",
          "Focus on providing accurate information for enrollment",
          "Increased conversions with personalized advice",
          "Boost your agency's productivity with immediate leads",
        ],
      },
      {
        name: "Unlimited",
        price: "$650/week (Mon-Fri 9am-7pm EST)",
        bulletPoints: [
          "Unlimited Medicare live transfers",
          "Approx. 8-12 leads per day for steady flow",
          "Dedicated support for all live transfer needs",
          "Full-time availability to meet senior client demands",
          "Increase your team’s productivity with constant lead generation",
          "Customer-first approach ensuring accurate coverage recommendations",
        ],
      },
    ],
  },
  {
    service: "Solar",
    description: "With our Solar Live Transfer and Lead service, we connect individuals interested in renewable energy with knowledgeable agents who provide personalized solar solutions. From installation to savings, we help customers transition to eco-friendly energy sources with ease.",
    plans: [
      {
        name: "Paper Lead",
        price: "$20/lead",
        bulletPoints: [
          "Affordable solar leads, pay-per-lead",
          "Reliable and qualified prospects for solar energy solutions",
          "No long-term commitment required",
          "Suitable for small and large-scale businesses",
          "Only pay for leads that match your target audience",
        ],
      },
      {
        name: "Live Transfer",
        price: "$35/lead",
        bulletPoints: [
          "Direct transfer to a solar consultant",
          "Instant consultation to guide prospects in their decision-making",
          "Answer questions regarding savings and installation",
          "Improved customer engagement with live calls",
          "Real-time connection for an enhanced customer experience",
        ],
      },
      {
        name: "Unlimited",
        price: "$1050/week (Mon-Fri 9am-7pm EST)",
        bulletPoints: [
          "Unlimited live transfers for solar leads",
          "Approx. 8-12 leads per day to ensure continuous lead flow",
          "Comprehensive support for every lead and transfer",
          "Maximize conversions with real-time expert consultations",
          "Full-time availability for busy periods and high demand",
        ],
      },
    ],
  },
  {
    service: "Auto Warranty",
    description: "Our Auto Warranty Live Transfer service connects customers with specialists who help them explore warranty options for their vehicles. Whether it's a new or extended warranty, we ensure customers receive the best protection and peace of mind for their cars.",
    plans: [
      {
        name: "Paper Lead",
        price: "$18/lead",
        bulletPoints: [
          "Effective pay-per-lead pricing for auto warranty leads",
          "Quality, high-conversion leads for vehicle protection",
          "No setup fees, pay only for qualified leads",
          "Flexibility to scale based on demand",
          "Perfect for businesses looking to expand their warranty offerings",
        ],
      },
      {
        name: "Live Transfer",
        price: "$30/lead",
        bulletPoints: [
          "Instant connection with an auto warranty specialist",
          "Real-time discussions on warranty coverage options",
          "Increased chances of upselling extended warranties",
          "Consultations are tailored to the customer’s vehicle needs",
          "Faster decision-making process for customers",
        ],
      },
      {
        name: "Unlimited",
        price: "$900/week (Mon-Fri 9am-7pm EST)",
        bulletPoints: [
          "Unlimited live transfers with no limitations",
          "Approx. 8-12 leads per day for consistent traffic",
          "Guaranteed customer satisfaction with timely support",
          "Expert consultations available throughout business hours",
          "Full-time live transfer service to cater to high-demand clients",
        ],
      },
    ],
  },
  {
    service: "Home Improvement",
    description: "Our Home Improvement Live Transfer service links homeowners with trusted professionals in remodeling, renovation, and construction. From kitchen makeovers to entire home remodels, we connect customers with experts who can bring their vision to life.",
    plans: [
      {
        name: "Paper Lead",
        price: "$15/lead",
        bulletPoints: [
          "Affordable and flexible per-lead pricing",
          "Leads for various home improvement needs, from remodeling to new builds",
          "No hidden fees or surprise charges",
          "Tailored to match your business goals and needs",
          "High-quality home improvement leads for your projects",
        ],
      },
      {
        name: "Live Transfer",
        price: "$25/lead",
        bulletPoints: [
          "Direct connection to home improvement experts",
          "In-depth consultation for renovation and remodeling projects",
          "Real-time answers to customer inquiries",
          "Improve conversions with personalized customer attention",
          "Streamlined transfer process for faster customer service",
        ],
      },
      {
        name: "Unlimited",
        price: "$800/week (Mon-Fri 9am-7pm EST)",
        bulletPoints: [
          "Unlimited home improvement live transfers",
          "Approx. 8-12 leads per day for continuous flow",
          "Reliable and consistent service during peak hours",
          "Customer support to handle questions and bookings",
          "Dedicated team ready to assist with every lead",
        ],
      },
    ],
  },
  {
    service: "Web Development and Graphic Designing",
    description: "We offer web development and graphic design solutions that help businesses establish a strong online presence. Our team creates visually appealing websites and branding materials tailored to your unique business needs.",
    plans: [
      {
        name: "Standard",
        price: "$500/project",
        bulletPoints: [
          "Basic web design and functionality",
          "Up to 5 pages",
          "Responsive design for all devices",
          "Essential SEO optimization",
          "Basic branding and graphic design",
        ],
      },
      {
        name: "Basic",
        price: "$1200/project",
        bulletPoints: [
          "Custom website development with modern design",
          "Up to 10 pages with interactive features",
          "SEO optimization included",
          "Custom branding and logo design",
          "Social media integration for easy marketing",
        ],
      },
      {
        name: "Premium",
        price: "$2500/project",
        bulletPoints: [
          "Fully customized website development",
          "Advanced features including eCommerce integration",
          "Unlimited pages and custom forms",
          "Advanced SEO optimization for higher ranking",
          "Premium branding and graphic design",
        ],
      },
    ],
  },
];

const PricingPage = () => {
  return (
    <>
    <Header/>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Our Pricing Plans</h1>
      
      {pricingPlans.map((service, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">{service.service}</h2>
          <p className="mb-6">{service.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.plans.map((plan, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-lg font-bold text-blue-600 mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default PricingPage;
