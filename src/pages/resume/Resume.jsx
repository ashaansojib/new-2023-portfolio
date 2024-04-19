import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Bio from "./Bio";
import Skill from "./Skill";
import Education from "./Education";
const Resume = () => {
  const [colors, setColors] = useState("biography");
  const handleColors = (color) =>{
    setColors(color)
  }
  console.log(colors);
  return (
    <div id="resume" className="py-20 my-container ">
      <div className="text-center py-2">
        <p>About Myself</p>
        <h3 className="my-text-gradient">Me & My Qualifications</h3>
      </div>
      <div className="relative px-2 mt-10">
        <Tabs>
          <TabPanel>
            <Bio />
          </TabPanel>
          <TabPanel>
            <Skill />
          </TabPanel>
          <TabPanel>
            <Education />
          </TabPanel>
          {/* section titile bar */}
          <TabList>
            <div className="mx-auto lg:w-4/5 md:p-2 w-full rounded-full border grid grid-cols-3 justify-between items-center md:gap-6 bg-[#022642] absolute -top-10 lg:right-28 right-0">
              <Tab>
                <button onClick={()=>handleColors("biography")} className={`${colors === 'biography' ? 'title-btn-active' : 'title-btn'}`}>Biography</button>
              </Tab>
              <Tab>
                <button className={`${colors === 'skills' ? 'title-btn-active' : 'title-btn'}`} onClick={()=>handleColors("skills")}>Skills</button>
              </Tab>
              <Tab>
                <button onClick={()=>handleColors("education")}  className={`${colors === 'education' ? 'title-btn-active' : 'title-btn'}`}>Education</button>
              </Tab>
            </div>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
