"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/contactPage/data.json");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card contact-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title" dangerouslySetInnerHTML={{ __html: data?.title }}></h1>
                <p dangerouslySetInnerHTML={{ __html: data?.subtitle }}></p>
              </div>
            </div>
            <div className="contact-area">
              <ContactForm />
              <div className="contact-map-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232142.123456789!2d72.5310!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b70f19a8d6f%3A0xdeb123456789abc!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="800"
                  height="600"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280012016!2d-74.14448732737499!3d40.69763123331177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1711832776336!5m2!1sen!2sbd"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}
              </div>
              <Faq />
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
