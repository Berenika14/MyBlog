import { useState, useEffect } from "react";

export default function Index() {
  const random_words = [
    "Honoring",
    "Capturing",
    "Recording",
    "Sharing",
    "Celebrating",
  ];
  const [idx, setidx] = useState(0);

  // useEffect is a hook for running code that needs to happen based on changes
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setidx(idx + 1);
      console.log(idx);
    }, 1500);

    return () => {
      clearTimeout(intervalId);
    };
  }, [idx]);

  return (
    <div className="flex flex-col items-stretch">
      <div className='flex flex-col place-content-center items-center h-screen bg-[url("https://images.unsplash.com/photo-1558575308-dd83959984d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")]'>
        <div className="flex flex-col text-white">
          <h1 className="text-5xl font-serif font-extrabold leading-2 mb-5 mr-5 tracking-wider ">
            Your stories are
            <br /> worth {random_words[idx % random_words.length]}
          </h1>
          <h2 className="text-2xl font-serif  leading-2 tracking-wide">
            Remember, share, and reminisce about life's precious
            <br />
            <b> moments on a free storytelling website</b>
          </h2>
        </div>
      </div>
      <div className="bg-indigo-200 h-screen"></div>
    </div>
  );
}
