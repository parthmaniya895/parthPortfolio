"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const [active, setActive] = useState("collapse1");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/faqPage/data.json");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="frequently-asked-questions">
      <h2 className="main-common-title">{data?.title}</h2>
      <div className="frequently-asked-questions-main">
        <Accordion className="accordion" defaultActiveKey={active}>
          {data?.listItems?.map((item) => (
            <div className="accordion-item" key={item.id}>
              <h4 className="accordion-header">
                <Accordion.Toggle
                  as={"button"}
                  className={`accordion-button ${`collapse${item.id}` == active ? "" : "collapsed"
                    }`}
                  eventKey={`collapse${item.id}`}
                  onClick={() =>
                    setActive(
                      active == `collapse${item.id}`
                        ? null
                        : `collapse${item.id}`
                    )
                  }
                >
                  {item?.Question}
                  <span className="ms-auto">
                    <span className="icon ms-4">
                      <img
                        className="icon-plus"
                        src="assets/img/icons/plus.svg"
                        alt="plus"
                      />
                      <img
                        className="icon-minus d-none"
                        src="assets/img/icons/minus.svg"
                        alt="minus"
                      />
                    </span>
                  </span>
                </Accordion.Toggle>
              </h4>
              <Accordion.Collapse eventKey={`collapse${item.id}`}>
                <div className="accordion-body">
                  <p> {item?.Answer}</p>
                </div>
              </Accordion.Collapse>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default Faq;
