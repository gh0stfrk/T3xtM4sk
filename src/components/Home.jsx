import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col align-center items-center font-sans gap-3 p-4">
        <div className="flex flex-col gap-5 items-center  border-[#00df9a] border-solid">
          <h1 className="text-4xl font-sans font-semibold">
            Are you tired of social media censorship?
          </h1>

          <div className="flex flex-col items-center"> 
            <p className="inline-block">
              Do you feel like your comments are being flagged or hidden because
              they don't fit the mainstream narrative?
            </p>

            <p className="inline-block mb-10">
              We believe in free speech, but also in responsible communication.
              That's why we created this tool to help you express yourself.
            </p>
          </div>
        </div>
        <Link
          className="border-solid border-black px-4 py-2 font-semibold bg-black text-white rounded-xl hover:bg-[#00df9a]
          hover:text-black"
          to="app"
        >
          Mask Your Message Now!
        </Link>

        <div className="p-2 rounded-xl mt-10 flex gap-3 md:max-w-6xl flex-col md:flex-row md:flex-wrap md:gap-3">
          <img
           className="rounded-xl md:max-w-3xl md:w-1/2 md:block"
           src="https://images.unsplash.com/photo-1598432439373-0dedb103d38a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="freedom-of-speech" />
          
          <div className="flex gap-2 flex-col md:p-4 md:w-[40%]">
            <h1 className="font-semibold text-3xl">Features</h1>
            <ul className="flex flex-col gap-1 list-disc p-4 md:text-l">
              <li>Bypass keyword filters that might block your message.</li>
              <li>
                Express yourself with humor and sarcasm without raising red flags.
              </li>
              <li>
                Say the things you want to say by obfuscating your true message
                (within legal boundaries).
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
