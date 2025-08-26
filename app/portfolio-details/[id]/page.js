"use client";
import { Fragment, useEffect, useState } from "react";
import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const page = () => {
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  const router = useRouter();

  const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  const { id } = useParams();
  // const title = searchParams.get("title");

  // console.log('---------title------>', title);

  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchData = async () => {
      try {
        const res = await axios.get("/portfolioDetailsData/data.json");
        setData(res.data);

        // find index of the current item by id
        const index = res.data.findIndex((item) => item.id.toString() === id);
        setCurrentIndex(index);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
      }
    };

    fetchData();
  }, [id]);

  if (currentIndex === null || !data[currentIndex]) return null;

  const currentItem = data[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevItem = data[currentIndex - 1];
      router.push(`/portfolio-details/${prevItem.id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      const nextItem = data[currentIndex + 1];
      router.push(`/portfolio-details/${nextItem.id}`);
    }
  };

  return (
    <BentoFolioLayout>
      {" "}
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="portfolio-details-area">
              <div className="main-image">
                {/* <img
                  src="assets/img/projects/project-details-1.png"
                  alt="project-details-1"
                /> */}
                <img
                  src={`${currentItem?.img}`}
                  alt={currentItem?.alt}
                />
              </div>
              <div className="portfolio-details-text">
                <div className="short-info">
                  <div className="info-item">
                    <p className="subtitle">{currentItem?.ClientFor?.title}:</p>
                    <h4 className="card-title">{currentItem?.ClientFor?.content}</h4>
                  </div>
                  <div className="info-item">
                    <p className="subtitle">{currentItem?.Services?.title}:</p>
                    <h4 className="card-title">{currentItem?.Services?.content}</h4>
                    <a href={currentItem?.Services?.link?.url} className="website">
                      {currentItem?.Services?.link?.title}
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
                        ></path>
                        <path
                          d="M4.66699 4.5835H9.91699V9.8335"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="overview">
                  <h4 className="card-title">{currentItem?.Overview?.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: currentItem?.Overview?.content }}></p>
                  {/* <p>
                    Web design encompasses the process of creating and designing
                    websites It involves a combination of different skills and
                    disciplines to produce a visually appealing and
                    user-friendly website. Here's an overview of key aspects of
                    web design.
                  </p>
                  <p>
                    <b>Research:</b> Before starting the design, it's essential
                    to understand the target audience, their needs, and the
                    goals of the website.
                  </p>
                  <p>
                    <b>Information Architecture:</b> Organize and structure the
                    content to ensure a logical flow for users.
                  </p>
                  <p>
                    {" "}
                    <b>Wireframing and Prototyping:</b> Create skeletal outlines
                    and interactive prototypes to visualize the layout and
                    functionality.
                  </p> */}
                </div>
              </div>
              {currentItem?.Overview?.listData?.map((list, listIndex) => {
                return (
                  <p key={`id_${listIndex}`}>
                    <b>{list?.title}:</b> {list?.content}
                  </p>
                )
              })}
              <div className="inner-images">
                <div className="row g-3">
                  {currentItem?.innerImages?.map((img, index) => {
                    return (
                      <div key={`img_${index}`} className="col-md-6">
                        <div className="image-item">
                          <img
                            src={img?.image}
                            alt={img?.altTag}
                            className="img-fluid w-100"
                          />
                          {/* src="assets/img/projects/project-details-2.png" */}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-md-6">
                    <div className="image-item">
                      <img
                        src="assets/img/projects/project-details-3.png"
                        alt="project-details-3"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="more-info-block">
                <h3 className="more-info-title">{currentItem?.Challenges?.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: currentItem?.Challenges?.content }}></p>
                {currentItem?.Challenges?.listData?.map((Challenge, index) => {
                  return (
                    <Fragment key={`challenges_${index}`}>
                      <h5 className="more-info-subtitle">{Challenge?.title}</h5>
                      <ul className="list-unstyled">
                        {Challenge?.content?.map((list, index) => {
                          return (
                            <li key={`list_${index}`}>
                              <b>{list?.title}:</b> {list?.content}
                            </li>
                          )
                        })}
                      </ul>
                    </Fragment>
                  )
                })}
                {/* <p>
                  Web design comes with its own set of challenges, ranging from
                  technical issues to user experience considerations. Here are
                  some common challenges faced by web designers. Web design
                  encompasses the process of creating and designing websites It
                  involves a combination of different skills and disciplines to
                  produce a visually appealing and user-friendly website. Here's
                  an overview of key aspects of web design.
                </p>
                <h5 className="more-info-subtitle">Responsive Design:</h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> Ensuring that a website looks and
                    functions well on various devices and screen sizes.
                  </li>
                  <li>
                    <b>Solution:</b> Use responsive design techniques, such as
                    flexible grids and media queries.
                  </li>
                </ul>
                <h5 className="more-info-subtitle">Browser Compatibility:</h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> Different browsers may interpret code
                    differently, leading to inconsistencies in the website's
                    appearance.
                  </li>
                  <li>
                    <b>Solution:</b> Test the website on multiple browsers and
                    use compatibility libraries or polyfills when necessary.
                  </li>
                </ul>
                <h5 className="more-info-subtitle">User Experience (UX):</h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> Creating a seamless and intuitive user
                    experience that keeps visitors engaged.
                  </li>
                  <li>
                    <b> Solution:</b>
                    Conduct user testing, design user-friendly interfaces, and
                    prioritize accessibility to ensure a positive user
                    experience
                  </li>
                </ul>
                <h5 className="more-info-subtitle">
                  Compliance and Accessibility:
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> Creating a seamless and intuitive user
                    experience that keeps visitors engaged.
                  </li>
                  <li>
                    <b>Solution:</b> Conduct user testing, design user-friendly
                    interfaces, and prioritize accessibility to ensure a
                    positive user experience
                  </li>
                </ul>*/}
                <h3 className="more-info-title">{currentItem?.ResultsConclusion?.title}:</h3>
                <p>{currentItem?.ResultsConclusion?.content}</p>

              </div>
              <div className="prev-and-next-btn">
                <button onClick={handlePrev}
                  className="btn btn-prev"
                  disabled={currentIndex === 0}>Previous</button>
                <button onClick={handleNext}
                  className="btn btn-next"
                  disabled={currentIndex === data.length - 1}>Next</button>
              </div>
            </div>
            {/* <WorkTogether /> */}
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
