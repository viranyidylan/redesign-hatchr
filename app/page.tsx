import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen text-center flex-col items-center p-24">
      <div className="max-w-2xl ">
      <h1 className="mt-8 py-4 text-center text-4xl font-extrabold lg:text-5xl leading-tight text-white">          
        Find your next software engineering job with hatchr
      </h1>
        
        <p className="mt-4">
          Traditional tech recruitment methods are out of date. 
        </p>
        <p className="mt-4">
          We use short, adaptive assessments to gauge your technical understanding and match you with suitable companies
        </p>
      </div>

      <div >
        <Button className="m-4">Get started →</Button>
        <Button className="m-4" variant="secondary">Take our quiz →</Button>
      </div>
      
      <div>
        
      <h1 className="mt-8 py-4 text-center text-2xl font-bold leading-tight text-white">
      How does it work?
        </h1>
          <br></br>
        <h3 className="max-w-2xl text-center text-lg leading-tight">
            Taking one of our quizzes gets you into the
            hatchr platform. We review your results and connect
            you with companies that are looking for developers
            with skills that match yours.
            <br></br>
            <br></br>
            If we believe your skills aren't at the hatchr level
            yet, we provide you with actionable feedback on what
            we think you should work on.
        </h3>

                        <h1 className=" mt-8 py-4 text-center text-2xl font-bold leading-tight text-white">
                            How much does it cost? ?
                        </h1>
                        <br></br>
                        <h3 className="max-w-2xl text-center text-lg leading-tight">
                            Hatchr’s process is free for software developers.
                            <br></br>
                            <br></br>
                            Companies pay us because we improve their hiring
                            process.
                            <br></br>
                        </h3>

                        <h1 className=" mt-8 py-4 text-center text-2xl font-bold leading-tight text-white">
                            When should I take the quiz?
                        </h1>
                        <br></br>
                        <h3 className="max-w-2xl text-center text-lg leading-tight">
                            You can take a quiz at any time; you don’t even have
                            to be actively looking for a job yet. Once you’ve
                            completed the quiz, we’ll reach out to you and find
                            out more about your current status.
                            <br></br>
                        </h3>

                        <h1 className=" mt-8 py-4 text-center text-2xl font-bold leading-tight text-white">
                            Why hatchr? 🐣
                        </h1>
                        <br></br>
                        <h3 className="max-w-2xl text-center text-lg leading-tight">
                            We save you time. By fast-tracking you past the
                            initial screening phases for each company on our
                            platform, you don’t have to go through applications,
                            cover letters, and tech screens with each company
                            individually.
                            <br></br>
                            <br></br>
                            We have a network of great companies that we will
                            match you with based on your specific skillset and
                            their requirements.
                            <br></br>
                            <br></br>
                            Companies trust our ability to technically assess
                            candidates and find talent that other recruiters
                            can't. If you’re self-taught or have a
                            nontraditional software development background, we
                            provide you with an opportunity to showcase your
                            skills!
                        </h3>
                        
        </div>
      
      
    </main>
  );
}
