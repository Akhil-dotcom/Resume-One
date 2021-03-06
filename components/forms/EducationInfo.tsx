import dynamic from 'next/dynamic';
import React, { useContext, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { modules } from '../quillmodules'

// react icons
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import FormOpenBtn from '../FormOpenBtn';
import { FormContext } from '../../context/formContext';


const ReactQuill = dynamic(
    () => import('react-quill'),
    {
        ssr: false,
    }
)

interface EducationDetails{
    school: string;
    degree: string;
    cgpa: string;
    description?: string;
}

type myArray = Array<EducationDetails>

function EducationInfo() {
// context
const value = useContext(FormContext)
console.log(value)

// form open state
const [formOpen, setformOpen] = useState<boolean>(false);
//   form state
const handleformOpen = () => {
    setformOpen(true)
}
//  education details input
  const [description, setdescription] = useState("");  
  const [school, setschool] = useState("");
  const [degree, setsdegree] = useState("");
  const [cgpa, setcgpa] = useState("");
//   const [startDate, setstartDate] = useState<string>("");

//   education array
  const [educationList, seteducationList] = useState<myArray>([]);

  const handleSubmit = (e: React.SyntheticEvent)=> {
      e.preventDefault();
      const educationDetails:EducationDetails = {
          school: school,
          degree: degree,
          cgpa: cgpa,
          description: description
      }
      
      seteducationList([...educationList, educationDetails]);
      console.log(educationList);

      setformOpen(false)
      
  }


  return (
    <div className="sm:bg-gray-800 sm:p-5 rounded-md mx-auto font-raedex my-5">
        <div className="text-xl text-white font-semibold pb-3">Education Info</div>
        {/* form */}
        <div className={"flex flex-col gap-3"}>
            {/* education information */}
            <div className={"flex flex-col gap-3"}>
                {educationList.length !== 0 && educationList.map((item, index) => (
                    <div draggable key={index} className="border-2 border-gray-400 rounded-md p-5 flex items-center justify-between">
                        <div>
                            <div className="text-sm text-white font-bold">{item.school}</div>
                            <p className="text-xs text-white">Jan 2021 - May 2021</p>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-5 text-2xl">
                            <AiOutlineDelete className="text-white" />
                            <AiOutlineEdit className="text-white bg-cyan-500 rounded-md p-1" />
                        </div>
                    </div>
                ))}
            </div>
            {/* form open button */}
            {formOpen !== true && <div onClick={handleformOpen} className="pt-3 cursor-pointer"><FormOpenBtn /></div>}
            {/* education form */}
            {formOpen && <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="text-white">
                    <div className="text-lg font-bold text-slate-400">{school !== "" ? school : "Undefined"}</div>
                    <div className="text-xs text-slate-400">Jan 2021 - Jun 2022</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">School</label>
                        <input value={school} onChange={(e) => setschool(e.target.value)} className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-300 text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">Degree</label>
                        <input value={degree} onChange={(e) => setsdegree(e.target.value)} className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-300 text-sm" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="grid grid-cols-2 gap-3 sm:gap-5">
                        <div className="flex flex-col">
                            <label className="text-xs text-slate-400 pb-2">Start Date</label>
                            <input type="month" name="startDate" className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-300 text-sm" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs text-slate-400 pb-2">End Date</label>
                            <input type="month" name="endDate" className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-300 text-sm" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">CGPA</label>
                        <input value={cgpa} onChange={(e) => setcgpa(e.target.value)} className="border-2 rounded-md p-2 bg-gray-700 border-gray-400 outline-none focus:border-cyan-500 text-gray-300 text-sm" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <label className="text-xs text-slate-400 pb-2">Description</label>
                        <ReactQuill modules={modules}  value={description} onChange={setdescription} />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-cyan-500 text-white p-2 px-4 md:w-[100px] rounded-md w-full sm:w-max font-semibold text-sm">Add</button>
                </div>
            </form>}
        </div>
    </div>
  );
}

export default EducationInfo;
