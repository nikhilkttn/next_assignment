import React from "react";
/*
 * SSG Example
 */
async function getData() {
  const res = await fetch(` https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data;
}
const AboutPage = async () => {
  const data = await getData();
  return (
    <>
      <div className="font-semibold text-center">
        <span className="text-center border-black border-b-2 pb-2">
          About Us Page
        </span>
        <div className="border-gray-300 border-[2px] shadow-lg rounded-lg m-10 p-5">
          {data?.map((data: any) => (
            <>
              <div className="flex flex-col flex-1 mt-5 w-full italic">
                {data?.body}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
