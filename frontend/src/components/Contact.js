import React from "react";

const Contact = ({ contactData }) => {
  console.log("Contact component received data:", contactData);

  const email = contactData?.email;
  const phone = contactData?.phone;
  const message = contactData?.message;

  return (
    <section className="bg-[var(--box-background)] text-[var(--text-color-heading)] px-5 py-32" id="contact">
  <div className="section-container text-center">
    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-[var(--text-color-heading)] pb-2">
      Contact Me
    </h2>

        <p className="py-2">
          <span className="font-bold">Email:</span> {email || "Not provided"}
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> {phone || "Not provided"}
        </p>
        <p>
          {message || "I am currently open for a full-time Frontend Developer role. If you want to discuss about that feel free to email me or call me."}
        </p>
      </div>
    </section>
  );
};

export default Contact;
