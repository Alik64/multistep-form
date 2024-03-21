import React from 'react'
import SidebarTab from './SidebarTab'

const Sidebar = () => {

    const sidebarInfo = [
        {
            step: 1,
            title: "Your Info"
        },
        {
            step: 2,
            title: "Select Plan"

        },
        {
            step: 3,
            title: "Add-ons"
        },
        {
            step: 4,
            title: "Summary"
        }
    ]
  return (
    <div>
       {sidebarInfo.map((sidebar) => <SidebarTab step={sidebar.step} title={sidebar.title}/>) }
    </div>
  )
}

export default Sidebar