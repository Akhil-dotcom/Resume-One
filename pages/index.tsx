import Head from 'next/head'
import Link from 'next/link'
import ResumeImg from '../components/codeImage/ResumeImg'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Resume One</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* home */}
        <div className="max-w-screen-xl mx-auto">
          {/* main */}
          <div className="font-raedex p-5 flex flex-col lg:flex-row gap-10 lg:gap-5 mx-auto text-gray-800"> 
            <div className="py-20 max-w-3xl mx-auto lg:max-w-none flex-1 flex flex-col">
              <h1 className="font-bold text-4xl md:text-5xl text-white">Let's ace that <br className="hidden lg:inline-block" /><span className="text-cyan-400">Campus placements</span>.</h1>
              <p className="pt-4 md:text-lg text-gray-300 max-w-lg lg:mx-0">"Your resume says a lot about you, it determines wheather you will be called in for an interview or not." Your one stop resume spot. Build awesome resumes for free and land your dream job.</p>
              <div className="pt-8">
                <Link href="editor">
                  <button className="md:text-base rounded-md font-medium p-3 px-6 bg-white">Create Resume</button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <ResumeImg />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
