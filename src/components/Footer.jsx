import React from "react";

const footerLinks = [
  "Support Center",
  "Invoicing",
  "Contract",
  "Careers",
  "Blog",
  "FAQs",
];

const Footer = () => {
  return (
    <section className="border-t-2 border-t-bg-three">
      <section className="section  py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src="/img/logo2.svg" alt="logo" />
          <div className="flex md:flex-row flex-col gap-4 pt-4 md:pt-0 ">
            {footerLinks.map((links) => (
              <a
                key={links}
                href="/"
                className="text-center md:text-start text-sm font-poppins text-grey-300 "
              >
                {links}
              </a>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
