import React from 'react';

const footerSections = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    title: "Support",
    links: ["Contact Support", "FAQs", "Live Chat", "Help Center"],
  },
  {
    title: "Resources",
    links: ["Docs", "API Reference", "Community", "Guides"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  },
];

function Footer() {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-around gap-8 divide-x divide-gray-300">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-2 px-4 min-w-[150px]">
            <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
