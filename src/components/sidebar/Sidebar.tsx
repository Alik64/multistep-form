import SidebarTab from "./SidebarTab";
import s from "./Sidebar.module.css";

const SIDEBAR_INFO = [
    {
      step: 1,
      title: "Your Info",
    },
    {
      step: 2,
      title: "Select Plan",
    },
    {
      step: 3,
      title: "Add-ons",
    },
    {
      step: 4,
      title: "Summary",
    },
  ];
const Sidebar = () => {
  
  return (
    <div className={s.sidebar}>
      {SIDEBAR_INFO.map((sidebar) => (
        <SidebarTab stepNumber={sidebar.step} title={sidebar.title} key={sidebar.step} />
      ))}
    </div>
  );
};

export default Sidebar;
