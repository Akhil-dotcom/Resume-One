import Link from 'next/link';
import { BiMenu } from 'react-icons/bi'

function Header() {
  return <div className="font-raedex">
      <div className="max-w-screen-xl mx-auto p-5 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Resume One</div>
          <div className="hidden md:flex items-center gap-10 text-sm">
              <div className="text-white">Dashboard</div>
              <Link href="editor"><div className="bg-white rounded-md font-medium p-2 px-4">Create Resume</div></Link>
          </div>
          <BiMenu className="text-2xl md:hidden" />
      </div>
  </div>;
}

export default Header;
