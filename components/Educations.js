"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Education = ({ educationsItems }) => {
  return (
    <ul className="education-slider list-unstyled">
      {educationsItems?.eductionItems?.map((item) => (
        <li key={item.id}>
          <div className="date">
            <p>{item.date}</p>
            <span>Information Technology</span>
          </div>
          <div className="info">
            <div className="icon">
              <img src={item.icon} alt="adobe" />
            </div>
            <div className="text">
              <h4 className="title">{item.title}</h4>
              <h6 className="subtitle">{item.subTitle}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const EducationSection = () => {
  const [educationsItems, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/educations/data.json");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="card">
      <div className="card-body education-card">
        <h3 className="card-title">{educationsItems?.title}</h3>
        <div className="education-main">
          <Education educationsItems={educationsItems} />
          <Education educationsItems={educationsItems} />
        </div>
      </div>
    </div>
  );
};
export default EducationSection;
