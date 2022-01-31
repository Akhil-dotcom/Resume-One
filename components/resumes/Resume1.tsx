import React, { useRef } from 'react';
import { FiMail, FiPhone, FiGlobe } from 'react-icons/fi'
import { useReactToPrint } from 'react-to-print';

function Resume1() {
  const printRef = useRef(null)
  const handleprint = useReactToPrint({
    content: () => printRef.current,
  });
  return <div className="w-full">
      {/* button */}
      <button className="bg-white p-2 px-4 rounded-md" onClick={handleprint}>Print</button>
      {/* pdf */}
      <div className="bg-white max-w-4xl w-full h-[100%]" ref={printRef}>
      <div className="flex h-[100%]">
          {/* left */}
          <div className="p-[50px] bg-gray-800 text-white">
              <h1 className="uppercase text-2xl font-bold">Akhil Raj</h1>
              <p>Frontend Developer</p>
              <div className="py-10 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs">
                      <FiMail />
                      <span>akhilrajktt@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                      <FiPhone />
                      <span>+91-9710635120</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                      <FiGlobe />
                      <span>codebounce.vercel.app</span>
                  </div>
              </div>
          </div>
          {/* right */}
          <div className="p-[50px] flex flex-col gap-10 flex-auto">
              {/* profile */}
              <div>
                  <div className="uppercase text-xl font-bold pb-3">Profile</div>
                  <p className="text-sm">Meticulous frontend developer with 2 years experience and passion for developing responsive web apps and websites. To plan and design the structure and design of web pages. To develop website features that can enhance the user experience. To strategize design choices according to user experience. To implement design for mobile sites.</p>
              </div>
              {/* education */}
              <div>
                <div className="uppercase text-xl font-bold pb-3">Education</div>
                <div className="flex flex-col gap-3">
                    <div>
                        <p className="font-semibold">MTech Integrated software | Vellore institute of technology.</p>
                        <p className="text-sm">May 2021 - Jan 2021</p>
                    </div>
                    <div>
                        <p className="font-semibold">XII | Vellore institute of technology.</p>
                        <p className="text-sm">May 2021 - Jan 2021</p>
                    </div>
                    <div>
                        <p className="font-semibold">X | Vellore institute of technology.</p>
                        <p className="text-sm">May 2021 - Jan 2021</p>
                    </div>
                </div>
              </div>
              {/* projects */}
              <div>
                  <div className="uppercase text-xl font-bold pb-3">Projects</div>
                  <div className="flex flex-col gap-3">
                    {/* <div className="">
                        <p className="font-semibold">Full Stack Developer | Bluechip encore private limited, Banglore</p>
                        <p className="text-sm pb-2">May 2021 - Jan 2021</p>
                        <ul className="text-sm flex flex-col gap-2">
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                        </ul>
                    </div> */}
                    <div className="">
                        <p className="font-semibold">Full Stack Developer | Bluechip encore private limited, Banglore</p>
                        <p className="text-sm pb-2">May 2021 - Jan 2021</p>
                        <ul className="text-sm flex flex-col gap-2">
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="font-semibold">Full Stack Developer | Bluechip encore private limited, Banglore</p>
                        <p className="text-sm pb-2">May 2021 - Jan 2021</p>
                        <ul className="text-sm flex flex-col gap-2">
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="font-semibold">Full Stack Developer | Bluechip encore private limited, Banglore</p>
                        <p className="text-sm pb-2">May 2021 - Jan 2021</p>
                        <ul className="text-sm flex flex-col gap-2">
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="font-semibold">Full Stack Developer | Bluechip encore private limited, Banglore</p>
                        <p className="text-sm pb-2">May 2021 - Jan 2021</p>
                        <ul className="text-sm flex flex-col gap-2">
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                            <li>Worked as a full stack developer to develop their website and dashboard using React Is, Node Js and mongo DB (MERN Stack).</li>
                        </ul>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>;
}

export default Resume1;
