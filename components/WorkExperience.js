const Experience = () => {
  const experiancesItems = [
    {
      id: 1,
      title: "UI/UX Designer",
      subTitle: "Upwork",
      jobTitle: "Part-time - Remote",
      icon: "/assets/img/icons/cib-upwork.svg",
      date: "2024-2025",
    },
    {
      id: 2,
      title: "UX Designer",
      subTitle: "Tech Ether Pvt. Ltd",
      jobTitle: "Part-time - Remote",
      icon: "/assets/img/icons/techEther.svg",
      date: "2024-2025",
    },
    {
      id: 3,
      title: "Visual Designer",
      subTitle: "Vancoretech Pvt. Ltd",
      jobTitle: "Part-time - Remote",
      icon: "/assets/img/icons/vancoretech.svg",
      date: "2024-2025",
    },
    {
      id: 4,
      title: "UX Designer",
      subTitle: "Dizayn.io",
      jobTitle: "Freelancing - Remote",
      icon: "/assets/img/icons/Dizayn.svg",
      date: "2024-2025",
    },
    {
      id: 5,
      title: "Sr. UI/UX Designer",
      subTitle: "Tecxar Consultants Pvt. Ltd",
      jobTitle: "Full-time - On-site",
      icon: "/assets/img/icons/tecxarConsultants.svg",
      date: "2023-2024",
    },
    {
      id: 6,
      title: "Product Designer",
      subTitle: "Konzortia Hub",
      jobTitle: "FrePart-time - On-site",
      icon: "/assets/img/icons/konzortiaHub.svg",
      date: "2023-2024",
    },
    {
      id: 7,
      title: "Sr. UI/UX Designer",
      subTitle: "Ezsip Telecommunications",
      jobTitle: "Part-time - On-site",
      icon: "/assets/img/icons/ezsipTelecommunications.svg",
      date: "2023-2024",
    },
    {
      id: 8,
      title: "Sr. Product Designer",
      subTitle: "Cleardu Fintech Pvt. Ltd",
      jobTitle: "Part-time - On-site",
      icon: "/assets/img/icons/clearduFintech.svg",
      date: "2023-2024",
    },
    {
      id: 9,
      title: "Web developer",
      subTitle: "IBM SkillsBuild",
      jobTitle: "Internship - Remote",
      icon: "/assets/img/icons/IBM.svg",
      date: "2023-2024",
    },
    {
      id: 10,
      title: "Jr. Visual Designer",
      subTitle: "Brainybeam Pvt. Ltd",
      jobTitle: "Internship - On-site",
      icon: "/assets/img/icons/brainybeam.svg",
      date: "2022-2023",
    },
  ];
  return (
    <ul className="work-experiance-slider list-unstyled">
      {experiancesItems.map((item) => (
        <li key={item.id}>
          <div className="date">
            <p>{item.date}</p>
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

const WorkExperience = () => {
  return (
    <div className="card">
      <div className="card-body work-experiance-card">
        <h3 className="card-title">Work Experience</h3>
        <div className="work-experiance-main">
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
