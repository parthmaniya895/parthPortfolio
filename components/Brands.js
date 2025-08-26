const Brands = () => {
  const brandItems = [
    { id: 1, icon: "assets/img/icons/Alpha Hub.svg", name: "Alpha Hub" },
    { id: 2, icon: "assets/img/icons/Blue Shark.svg", name: "Blue Shark" },
    { id: 3, icon: "assets/img/icons/Broad River.svg", name: "Broad River" },
    { id: 4, icon: "assets/img/icons/Carefree Camper.svg", name: "Carefree Camper" },
    { id: 5, icon: "assets/img/icons/ClearDu.svg", name: "ClearDu" },
    { id: 6, icon: "assets/img/icons/Closure.svg", name: "Closure" },
    { id: 7, icon: "assets/img/icons/Dizayn.svg", name: "Dizayn" },
    { id: 8, icon: "assets/img/icons/Eduget Global.svg", name: "Eduget Global" },
    { id: 9, icon: "assets/img/icons/Ezsip.svg", name: "Ezsip" },
    { id: 10, icon: "assets/img/icons/Gifteview.svg", name: "Gifteview" },
    { id: 11, icon: "assets/img/icons/Gir Glades.svg", name: "Gir Glades" },
    { id: 12, icon: "assets/img/icons/Grand beachsalon spa.svg", name: "Grand beachsalon spa" },
    { id: 13, icon: "assets/img/icons/Hostway.svg", name: "Hostway" },
    { id: 14, icon: "assets/img/icons/Immiget Global.svg", name: "Immiget Global" },
    { id: 15, icon: "assets/img/icons/InService.svg", name: "InService" },
    { id: 16, icon: "assets/img/icons/InvestHub.svg", name: "InvestHub" },
    { id: 16, icon: "assets/img/icons/Karnavati Dairy.svg", name: "Karnavati Dairy" },
    { id: 16, icon: "assets/img/icons/Konzortia Hub.svg", name: "Konzortia Hub" },
    { id: 16, icon: "assets/img/icons/Madhav Brass.svg", name: "Madhav Brass" },
    { id: 16, icon: "assets/img/icons/MX-Timer.svg", name: "MX-Timer" },
    { id: 16, icon: "assets/img/icons/MyTeach360.svg", name: "MyTeach360" },
    { id: 16, icon: "assets/img/icons/PeoplePro.svg", name: "PeoplePro" },
    { id: 16, icon: "assets/img/icons/Prezie Finders.svg", name: "Prezie Finders" },
    { id: 16, icon: "assets/img/icons/Pschycore.svg", name: "Pschycore" },
    { id: 16, icon: "assets/img/icons/Safe Shield.svg", name: "Safe Shield" },
    { id: 16, icon: "assets/img/icons/Sensus.svg", name: "Sensus" },
    { id: 16, icon: "assets/img/icons/SunCulture.svg", name: "SunCulture" },
    { id: 16, icon: "assets/img/icons/Tech Ether.svg", name: "Tech Ether" },
    { id: 16, icon: "assets/img/icons/Tecxar.svg", name: "Tecxar" },
    { id: 16, icon: "assets/img/icons/UpWork.svg", name: "UpWork" },
    { id: 16, icon: "assets/img/icons/Vancoretech.svg", name: "Vancoretech" },
    { id: 16, icon: "assets/img/icons/Vetspacito.svg", name: "Vetspacito" },
    { id: 16, icon: "assets/img/icons/WeBuild.svg", name: "WeBuild" },
    { id: 16, icon: "assets/img/icons/YMHS.svg", name: "YMHS" },
  ];
  return (
    <div className="working-with-area">
      <h2 className="main-common-title">
        Working With 32+ Brands ✨ Worldwide
      </h2>
      <div className="working-with-main">
        {brandItems.map((item) => (
          <div className="items" key={item.id}>
            <img src={item.icon} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
