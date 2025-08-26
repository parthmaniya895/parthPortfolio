const Awards = () => {
  const awardItems = [
    {
      id: 1,
      icon: "/assets/img/icons/IBM.svg",
      title: "Runner-up – Team Lead",
      date: "IBM SkillsBuild - Internship",
      award: "Appreciation ",
    },
    {
      id: 2,
      icon: "/assets/img/icons/Tecxar.svg",
      title: "Employee of the Quarter",
      date: "Tecxar - Sr. UI/UX Designer",
      award: "Award",
    },
    {
      id: 3,
      icon: "/assets/img/icons/ClearDu.svg",
      title: "Performance appreciation",
      date: "ClearDu - Sr. Product Designer",
      award: "Recognition",
    },
    {
      id: 4,
      icon: "/assets/img/icons/Tecxar.svg",
      title: "Intern of the Year",
      date: "Tecxar - UI/UX Design Internship",
      award: "Award",
    },
    {
      id: 5,
      icon: "/assets/img/icons/Silver Oak.svg",
      title: "Project Poster Presentation",
      date: "Silver Oak College",
      award: "Winner",
    },
    {
      id: 6,
      icon: "/assets/img/icons/Vidyadhish-Vidyasankul.svg",
      title: "Student of the Quarter",
      date: "Vidyadhish Vidyasankul",
      award: "Award",
    },
    {
      id: 7,
      icon: "/assets/img/icons/Navjivan.svg",
      title: "Top “Project Maker”",
      date: "Navjivan Sec. & Higher Sec. School ",
      award: "Winner",
    },
  ];
  return (
    <div className="awards-recognitions">
      <h2 className="main-common-title">Awards and Recognitions</h2>
      <div className="awards-recognitions-main">
        <ul className="list-unstyled">
          {awardItems.map((item) => (
            <li key={item.id}>
              <a href="#" className="d-block w-100" key={item.id}>
                <div className="awards-item">
                  <div className="award-name">
                    <div className="icon">
                      <img src={item.icon} alt="behance" />
                    </div>
                    <div className="text">
                      <h4 className="title">{item.title}</h4>
                      <p className="year">{item.date}</p>
                    </div>
                  </div>
                  <div className="winner-tag">
                    <h4 className="title">
                      <svg
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item.award}
                    </h4>
                  </div>
                  <div className="project-btn">
                    <span>
                      View Project
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
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Awards;
