import { useState } from 'react';
import { Slider } from '@mui/material'
import { AiOutlineDelete } from 'react-icons/ai';

interface Skill{
  skill: string,
  level: string
}

type SkillArray = Array<Skill>

function SkillsInfo() {
   // slider
   const sliderValue = [
    {
      name: "Entry"
    },
    {
      name: "Intermediate"
    },
    {
      name: "Experienced"
    },
    {
      name: "Expert"
    }
  ]
  const [skill, setskill] = useState("");
  const [level, setlevel] = useState(sliderValue[0].name);
  const [skillList, setskillList] = useState<SkillArray>([])

  const handleSkill = (e:any) => {
    e.preventDefault();

    const skillValue = {
      skill: skill,
      level: level
    }

    setskillList([...skillList, skillValue])

    setskill("")
  }

  console.log(skillList)

  return <div className="sm:bg-gray-800 sm:p-5 rounded-md mx-auto font-raedex my-5">
      <div className="text-xl text-white font-semibold pb-3">Skills</div>
      {/* skills added */}
      <div className="grid grid-cols-2 gap-3 pb-3">
        {skillList && skillList.map((item, index) => (
          <div key={index} className="border-2 border-gray-400 rounded-md p-2 flex items-center justify-between">
            <div>
              <div className="text-sm text-white font-bold">{item.skill}</div>
              <div className="text-xs text-white">{item.level}</div>
            </div>
            <AiOutlineDelete className="text-white" />
          </div>
        ))}
      </div>
      {/* skills form */}
      <form onSubmit={handleSkill} className="">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-col">
            <input value={skill} onChange={(e) => setskill(e.target.value)} className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-300 text-sm" />
          </div>
          <div className="bg-slate-700 rounded-md text-xs flex-grow flex flex-wrap">
            {sliderValue.map((item, index) => (
              <div key={index} onClick={() => setlevel(item.name)} className="sm:flex-1 flex items-center p-2 justify-center">
                <div className={`p-1 rounded-md flex items-center justify-center cursor-pointer px-2 ${level === item.name ? "bg-white text-gray-900 font-semibold" : "text-gray-400 hover:bg-slate-600"}`}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-5 flex justify-end">
          <button type="submit" className="bg-cyan-500 text-white p-2 px-4 md:w-[100px] rounded-md w-full sm:w-max font-semibold text-sm">Add</button>
        </div>
      </form>
  </div>;
}

export default SkillsInfo;
