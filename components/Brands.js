"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Brands = () => {
  const [brandItems, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/aboutPage/brandItems/data.json");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="working-with-area">
      <h2 className="main-common-title">
        {brandItems?.title}
      </h2>
      <div className="working-with-main">
        {brandItems?.brandItems?.map((item) => (
          <div className="items" key={item.id}>
            <img src={item.icon} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
