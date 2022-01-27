import { BiBasketball } from 'react-icons/bi'

function BuiltFor() {
  return <div>
      <div className="max-w-screen-xl mx-auto p-5 py-20 font-raedex">
          <div className="font-bold cursor-pointer gap-3 sm:gap-5 group text-center max-w-lg mx-auto text-4xl md:text-5xl text-white flex flex-col items-center">Built for student by <span className="flex">Code B<BiBasketball className="text-cyan-500 group-hover:animate-bounce" />unce</span></div>
      </div>
  </div>;
}

export default BuiltFor;
