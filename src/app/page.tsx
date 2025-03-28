export default function Home() {
  return (
    <main className="flex justify-center h-screen items-center">
      <div className="h-[42rem] w-[31rem] bg-slate-200 rounded flex flex-col justify-center items-center p-3">
        <div className="flex justify-center items-center h-[20rem] w-[30rem] bg-gray-300 p-3 rounded">
          <div className="flex justify-center items-center h-[19rem] w-[29rem] bg-black p-3 rounded">
            <div className="flex h-[18rem] w-[30rem] bg-gray-400 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full h-full">
          <div className="flex flex-col justify-end">
              <div className="flex justify-end">
              <div className="flex w-[8rem] h-[1.5rem] bg-gray-400"></div>
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col justify-center items-end w-[19rem] h-[2rem] bg-gray-400 px-4 pt-2">
                {/* <div className="bg-black w-[5rem] h-[0.5rem]"></div> */}
                <div className="bg-black w-[17rem] h-[0.8rem]"></div>
                <div className="bg-black w-[5rem] h-[0.5rem]"></div>
              </div>
            </div>
            <div className="flex justify-end">
                <div className="w-[8rem] h-[1.5rem] bg-gray-400"></div>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
