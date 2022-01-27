import { SiHtml5, SiJava, SiMysql } from 'react-icons/si'
import { AiFillStar } from 'react-icons/ai'

function ResumeImg() {
  return (
    <div className="relative font-raedex max-w-3xl mx-auto lg:max-w-none">
        {/* image one */}
        <div className="bg-white rounded-sm p-3 px-4 absolute z-40 bottom-5 lg:bottom-10 shadow-lg left-0 lg:-left-5">
            <div className="font-semibold">Skills</div>
            <p className="text-xs pb-2">Developer is all about learning skills.</p>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex gap-3 items-center">
                    <SiJava className="h-6 w-6 sm:h-8 sm:w-8" />
                    <div>
                        <div className="text-xs font-semibold">Java</div>
                        <p className="h-1 w-10 bg-slate-300 rounded-full"></p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <SiMysql className="h-6 w-6 sm:h-8 sm:w-8" />
                    <div>
                        <div className="text-xs font-semibold">MySQL</div>
                        <p className="h-1 w-10 bg-slate-300 rounded-full"></p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <SiHtml5 className="h-6 w-6 sm:h-8 sm:w-8" />
                    <div>
                        <div className="text-xs font-semibold">HTML</div>
                        <p className="h-1 w-10 bg-slate-300 rounded-full"></p>
                    </div>
                </div>
            </div>
        </div>
        {/* small resume */}
        <div className="bg-white rounded-sm p-5 w-9/12 sm:w-6/12 lg:w-8/12 mx-auto">
            <div className="border-b-2 pb-2">
                <div className="font-bold text-lg">John Doe</div>
                <div className="text-xs">Frontend Developer</div>
            </div>
            <div className="pt-3">
                <div className="text-xs font-bold">Profile</div>
                <div className="h-2 mt-1 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-1 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-1 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
            </div>
            <div className="text-xs font-bold pt-5">Education</div>
            <div className="hidden sm:flex flex-col pt-3">
                <div className="h-2 w-10 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-2 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-1 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
            </div>
            <div className="hidden sm:flex flex-col pt-3">
                <div className="h-2 w-10 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-2 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-1 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
            </div>
            <div className="pt-3">
                <div className="h-2 w-10 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-2 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-1 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
            </div>
            <div className="text-xs font-bold pt-5">Projects</div>
            <div className="pt-3">
                <div className="h-2 w-10 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-2 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-1 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
            </div>
            <div className="pt-3">
                <div className="h-2 w-10 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-2 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-1 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
            </div>
            <div className="pt-3">
                <div className="h-2 w-10 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-2 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
                <div className="h-2 mt-1 w-11/12 bg-slate-200 animate-pulse rounded-full"></div>
            </div>
        </div>
        {/* its free */}
        <div className="bg-white absolute right-10 p-3 px-4 rounded-sm border-2 -top-5">
            <div className="font-bold">It's Free</div>
            <div className="flex items-center gap-1 text-cyan-500">
                <AiFillStar className="text-xs" />
                <AiFillStar className="text-xs" />
                <AiFillStar className="text-xs" />
                <AiFillStar className="text-xs" />
                <AiFillStar className="text-xs" />
            </div>
            <div className="text-xs pt-2 w-56">Developed by a student who felt worse when an online resume needs to be paid to download after details are filled.</div>
        </div>
    </div>
  );
}

export default ResumeImg;
