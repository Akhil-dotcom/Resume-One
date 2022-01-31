import Link from 'next/link';
import { BiMenu } from 'react-icons/bi'
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter()
  return <div className="font-raedex">
      <div className="max-w-screen-xl mx-auto p-5 flex items-center justify-between">
          <Link href="/"><div className="text-2xl cursor-pointer font-bold text-white"><span className="text-cyan-500">One</span>Resume </div></Link>
          {router.pathname === "/login" ? "" : <div className="hidden md:flex items-center gap-10 text-sm">
              <div className="text-white">Dashboard</div>
              <Link href="editor"><div className="bg-white rounded-md font-medium cursor-pointer p-2 px-4 hover:scale-105 active:scale-95 duration-200">Create Resume</div></Link>
          </div>}
          {router.pathname === "/login" ? "" : <BiMenu className="text-2xl md:hidden text-white" />}
      </div>
  </div>;
}

export default Header;
