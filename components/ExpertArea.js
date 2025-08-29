// const ExpertArea = () => {
//   const expertItems = [
//     { id: 1, icon: "assets/img/icons/figma.svg", name: "Figma" },
//     { id: 2, icon: "assets/img/icons/notion.svg", name: "Notion" },
//     { id: 3, icon: "assets/img/icons/mico.svg", name: "Miro" },
//     { id: 4, icon: "assets/img/icons/procreate.svg", name: "Procreate" },
//     { id: 5, icon: "assets/img/icons/Photoshop.svg", name: "Photoshop" },
//     { id: 6, icon: "assets/img/icons/Illustrator.svg", name: "Illustrator" },
//     { id: 7, icon: "assets/img/icons/Adobe.svg", name: "Adobe" },
//     { id: 8, icon: "assets/img/icons/Adobecc.svg", name: "Adobe CC" },
//     { id: 9, icon: "assets/img/icons/Sketch.svg", name: "Sketch" },
//     { id: 10, icon: "assets/img/icons/Jira.svg", name: "Jira" },
//     { id: 11, icon: "assets/img/icons/Framer.svg", name: "Framer" },
//     { id: 12, icon: "assets/img/icons/Canva.svg", name: "Canva" },
//     { id: 13, icon: "assets/img/icons/Balsamiq.svg", name: "Balsamiq" },
//     { id: 14, icon: "assets/img/icons/ProtoPie.svg", name: "ProtoPie" },
//     { id: 15, icon: "assets/img/icons/Adobexd.svg", name: "Adobe XD" },
//     { id: 14, icon: "assets/img/icons/Maze.svg", name: "Maze" },
//     { id: 14, icon: "assets/img/icons/InDesign.svg", name: "InDesign" },
//     { id: 14, icon: "assets/img/icons/Asana.svg", name: "Asana" },
//     { id: 14, icon: "assets/img/icons/Slack.svg", name: "Slack" },
//     { id: 14, icon: "assets/img/icons/Mockup.svg", name: "Mockup" }
//   ];
//   return (
//     <div className="card expertise-card">
//       <div className="card-body">
//         <h3 className="card-title">My Expert Area</h3>
//         <div className="expertise-main mt-24">
//           <div className="row g-3">
//             {expertItems.map((item) => (
//               <div className="col-xl-4 col-md-4 col-sm-6 col-6" key={item.id}>
//                 <div className="expertise-item">
//                   <div className="image text-center">
//                     <img src={item.icon} alt={item.name} />
//                   </div>
//                   <div className="text">
//                     <h4 className="title">{item.name}</h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ExpertArea;

const Experience = () => {
  const expertItems = [
    { id: 1, icon: "assets/img/icons/figma.svg", name: "Figma" },
    { id: 2, icon: "assets/img/icons/notion.svg", name: "Notion" },
    { id: 3, icon: "assets/img/icons/mico.svg", name: "Miro" },
    { id: 4, icon: "assets/img/icons/procreate.svg", name: "Procreate" },
    { id: 5, icon: "assets/img/icons/Photoshop.svg", name: "Photoshop" },
    { id: 6, icon: "assets/img/icons/Illustrator.svg", name: "Illustrator" },
    { id: 7, icon: "assets/img/icons/Adobe.svg", name: "Adobe" },
    { id: 8, icon: "assets/img/icons/Adobecc.svg", name: "Adobe CC" },
    { id: 9, icon: "assets/img/icons/Sketch.svg", name: "Sketch" },
    { id: 10, icon: "assets/img/icons/jira.svg", name: "Jira" },
    { id: 11, icon: "assets/img/icons/Framer.svg", name: "Framer" },
    { id: 12, icon: "assets/img/icons/Canva.svg", name: "Canva" },
    { id: 13, icon: "assets/img/icons/Balsamiq.svg", name: "Balsamiq" },
    { id: 14, icon: "assets/img/icons/ProtoPie.svg", name: "ProtoPie" },
    { id: 15, icon: "assets/img/icons/Adobexd.svg", name: "Adobe XD" },
    { id: 14, icon: "assets/img/icons/Maze.svg", name: "Maze" },
    { id: 14, icon: "assets/img/icons/InDesign.svg", name: "InDesign" },
    { id: 14, icon: "assets/img/icons/Asana.svg", name: "Asana" },
    { id: 14, icon: "assets/img/icons/Slack.svg", name: "Slack" },
    { id: 14, icon: "assets/img/icons/Mockup.svg", name: "Mockup" }
  ];

  return (
    <div className="work-experiance-slider row g-3">
      {expertItems.map((item) => (
        <div className="col-xl-4 col-md-4 col-sm-6 col-6" key={item.id}>
          <div className="expertise-item">
            <div className="image text-center">
              <img src={item.icon} alt={item.name} />
            </div>
            <div className="text">
              <h4 className="title">{item.name}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const WorkExperience = () => {
  return (
    <div className="card expertise-card">
      <div className="card-body work-experiance-card">
        <h3 className="card-title">Work Experience</h3>
        <div className="work-experiance-main expertise-main">
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;

