import React from "react";

export default function Gallery() {
  return (
    <div className="container  mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <h1 className="text-center text-6xl font-bold mb-12">Gallery</h1>
      <div className="-m-1  pb-12 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://image3.jdomni.in/banner/20072023/25/D6/EE/A8C736016CE9B4883DD3EEF57B_1689809853327.jpeg?output-format=webp" />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://image1.jdomni.in/banner/20072023/D2/91/12/E33F6A1E0F7AA0A161979DDE6E_1689809860561.jpeg?output-format=webp" />
          </div>
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://image1.jdomni.in/banner/20072023/31/67/A0/7264718AAC79CB36FF1A90338A_1689809854977.jpeg?output-format=webp" />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://image2.jdomni.in/banner/20072023/5B/50/D6/D022ED48F5614040A9FD906AEB_1689809853337.jpeg?output-format=webp" />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://image3.jdomni.in/banner/20072023/00/7A/9F/E61654BD2AE6BF8DFB3B84063A_1689809853741.jpeg?output-format=webp" />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://image3.jdomni.in/banner/20072023/BE/87/04/78A3B25BFA3AF0F4E0A8703C56_1689809856579.jpeg?output-format=webp" />
          </div>
        </div>
      </div>
    </div>
  );
}
