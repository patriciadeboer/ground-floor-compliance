// src/data/services.js
const services = [
  {
    id: "iso-strategy",
    title: "ISO Strategy",
    description: `
      Our ISO strategy service provides a step-by-step framework to achieve
      compliance with ISO 9001 and ISO 13485. We align compliance with your
      operations to ensure efficiency, scalability, and measurable success.
    `,
    details: `
      Services include: gap analysis, tailored compliance roadmap, employee
      training, and documentation support.
    `,
    icon: "settings",
    faqs: [
      {
        question: "How long does ISO 9001 certification take?",
        answer: "It usually takes 3–6 months depending on company size and readiness."
      },
      {
        question: "Do you provide employee training?",
        answer: "Yes, we provide tailored training sessions to prepare your team."
      },
      {
        question: "Can you customize the strategy for my industry?",
        answer: "Absolutely. We align ISO compliance strategies with your specific industry requirements and business goals to ensure relevance and impact."
      }
    ]
  },
  {
    id: "business-goals",
    title: "Business Goals",
    description: `
      Our focus is aligning compliance with your business objectives so that
      ISO standards support growth, not just audits.
    `,
    details: `
      We help identify compliance-driven efficiencies, integrate processes with
      business metrics, and support change management strategies.
    `,
    icon: "bar",
    faqs: [
      {
        question: "How does compliance help achieve business growth?",
        answer: "ISO compliance improves efficiency, builds customer trust, and often opens the door to new contracts where certification is required."
      },
      {
        question: "Do you integrate compliance metrics with KPIs?",
        answer: "Yes, we ensure compliance activities are aligned with measurable KPIs so they directly contribute to business success."
      },
      {
        question: "Is compliance only for large companies?",
        answer: "No, small and medium businesses also benefit — compliance can streamline operations and create a competitive edge, regardless of company size."
      }
    ]
  },
  {
    id: "audit-support",
    title: "Audit Support",
    description: `
      From gap analysis to internal auditing, we help you stay ahead of
      regulatory requirements without the headaches.
    `,
    details: `
      We provide mock audits, corrective action support, and coaching for your
      team so you feel confident in every review.
    `,
    icon: "clipboard",
    faqs: [
      {
        question: "Do you provide mock audits before certification?",
        answer: "Yes, we conduct internal mock audits to prepare your team and identify gaps before the official audit takes place."
      },
      {
        question: "What happens if we fail an ISO audit?",
        answer: "We help you analyze non-conformities, create corrective action plans, and work with your team to address issues quickly."
      },
      {
        question: "Can you support remote or hybrid audits?",
        answer: "Yes, we provide both on-site and remote support for audits, ensuring flexibility and full preparation for your team."
      }
    ]
  },
];

export default services;
