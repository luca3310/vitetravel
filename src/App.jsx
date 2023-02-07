import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen">
      <video
        autoPlay
        muted
        loop
        className="w-[100%] h-[100%] object-cover absolute top-0 left-0"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="text-white uppercase absolute flex flex-col items-center justify-center font-bold top-0 left-0 mix-blend-multiply w-[100%] h-[100%] bg-red-800">
        <h1 className="text-[20vw]">Travel</h1>
        <button className="flex justify-around items-center text-[5vw] w-[30vw] border-white border-4 px-3 rounded hover:bg-white hover:text-black transition-all">
          Book
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5vw"
            height="5vw"
            fill="currentColor"
            className="bi bi-airplane-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
          </svg>
        </button>
      </div>
      <div className=" w-screen p-5 fixed top-0 left-0 flex justify-around shadow-sm">
        <ul className="flex w-1/4 justify-between">
          <li>
            <a
              href="#section"
              className="transition-all text-white hover:tracking-widest hover:cursor-pointer hover:overline uppercase font-bold"
            >
              Germany
            </a>
          </li>
          <li>
            <a
              href="#section"
              className="transition-all text-white hover:tracking-widest hover:cursor-pointer hover:overline uppercase font-bold"
            >
              denmark
            </a>
          </li>
        </ul>
        <h1 className="text-white text-xl uppercase font-bold">
          John's Travel
        </h1>
        <ul className="flex w-1/4 justify-between">
          <li>
            <a
              href="#section"
              className="transition-all text-white hover:tracking-widest hover:cursor-pointer hover:overline uppercase font-bold"
            >
              Germany
            </a>
          </li>
          <li>
            <a
              href="#section"
              className="transition-all text-white hover:tracking-widest hover:cursor-pointer hover:overline uppercase font-bold"
            >
              denmark
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
