"use client";
import { sliderProps } from "@/utility/sliderProps";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
// const testimonialData = [
//   {
//     website: "LinkedIn",
//     link: "",
//     details: "“Parth worked with us at VancoreTech and truly transformed our design presence. He created a strong brand identity and intuitive visuals that ma",
//     designation: "<span>Eshani Sankhla</span> - Founder of Vancoretech",
//   },
//   {
//     website: "LinkedIn",
//     link: "",
//     details: `"We've been using BentoFolio for over a year now, and I must say, it's been a game - changer for us.The user interface is intuitive and the feature.`,
//     designation: "<span>Riddhi Patel</span> - Product Designer",
//   },
//   {
//     website: "LinkedIn",
//     link: "",
//     details: `Parth is a skilled designer with strong communication skills. He understands tasks well and always completes his work on time."`,
//     designation: "<span>Sachin Rathor</span> - Founder of dizayn.io",
//   },
// ];


const Testimonial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/testimonialData/data.json");
        setData(res.data);

        // find index of the current item by id
        const index = res.data.findIndex((item) => item.id.toString() === id);
        setCurrentIndex(index);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="client-feedback">
      <h2 className="main-common-title">Trusted By 24+ Clients</h2>
      <Slider
        {...sliderProps.testimonialSlider}
        className="row client-feedback-slider"
      >
        {data?.map((testimonial, index) => {
          return (
            <div key={index} className="col-lg-6">
              <div className="feedback-item">
                <div className="feedback-top-info">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="website">
                    <a href={testimonial?.link}>
                      {testimonial?.website}
                      <svg
                        className="arrow-up"
                        width={14}
                        height={15}
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.91634 4.5835L4.08301 10.4168"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.66699 4.5835H9.91699V9.8335"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="details">
                  <p>{testimonial?.details}</p>
                </div>
                <div className="designation">
                  <p dangerouslySetInnerHTML={{ __html: testimonial?.designation }}></p>
                  {/* <p>{testimonial?.designation}</p> */}
                </div>
              </div>
            </div>

          )
        })}
      </Slider>
    </div>
  );
};
export default Testimonial;
