import React from "react";

export default function HeroCareer({ data }) {
  return (
    <>
      <section className="hero sm:items-center lg:items-start sm:flex-row">
        <div className="flex flex-col w-full px-5 mb-5 sm:w-1/2 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <h1 className="mb-5 text-6xl font-bold leading-tight text-theme-blue">
            {data[0].title}
          </h1>
          <p className="text-xl font-light leading-relaxed text-gray-400">
            {data[0].description}
          </p>
        </div>
        <div className="w-full sm:w-1/2 sm:pr-12">
          <img src="/assets/images/career.jpg" alt="Hero" />
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="flex justify-center text-3xl text-black">
          Recruitment Process
        </div>
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
              1
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="80"
                  viewBox="0 0 77.949 80"
                >
                  <g
                    id="Group_57"
                    data-name="Group 57"
                    transform="translate(-238.31 -32.86)"
                  >
                    <g id="Group_53" data-name="Group 53">
                      <path
                        id="Path_101"
                        data-name="Path 101"
                        d="M286.6,52.219H241.729a3.419,3.419,0,0,0-3.419,3.419v53.8a3.419,3.419,0,0,0,3.419,3.419H286.6a3.419,3.419,0,0,0,3.419-3.419v-53.8A3.419,3.419,0,0,0,286.6,52.219Z"
                        fill="#ff9041"
                      ></path>
                      <g id="Group_52" data-name="Group 52">
                        <path
                          id="Path_102"
                          data-name="Path 102"
                          d="M279.321,88.3h-30.27a2.051,2.051,0,0,1,0-4.1H279.32a2.051,2.051,0,1,1,0,4.1Z"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_103"
                          data-name="Path 103"
                          d="M279.321,100.784h-30.27a2.051,2.051,0,0,1,0-4.1H279.32a2.051,2.051,0,1,1,0,4.1Z"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_104"
                          data-name="Path 104"
                          d="M274.982,73.852h-9.73a2.051,2.051,0,1,1,0-4.1h9.73a2.051,2.051,0,1,1,0,4.1Z"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_105"
                          data-name="Path 105"
                          d="M250.837,67.585c0-.483.447-.772,1.2-.772a6.063,6.063,0,0,1,3.046,1.113l1.145-3.1a5.988,5.988,0,0,0-2.787-1.162V61.606h-3.025v2.246a4.078,4.078,0,0,0-3.139,3.973c0,2.49,1.964,3.592,3.9,4.341,1.551.62,1.672,1.1,1.672,1.5,0,.605-.593,1.012-1.469,1.012a5.993,5.993,0,0,1-3.4-1.386L246.83,76.46a8.924,8.924,0,0,0,3.4,1.4v2.072h3.2V77.675a4.42,4.42,0,0,0,3.126-4.149c0-2.094-1.188-3.494-3.784-4.54-1.8-.736-1.942-1.045-1.942-1.4Z"
                          fill="#fff"
                        ></path>
                      </g>
                    </g>
                    <g id="Group_56" data-name="Group 56">
                      <g id="Group_54" data-name="Group 54">
                        <path
                          id="Path_106"
                          data-name="Path 106"
                          d="M316.259,42.994a3.567,3.567,0,0,0-3.566-3.567H278.4a3.566,3.566,0,0,0-3.566,3.567v8.153h41.425Z"
                          fill="#141f72"
                        ></path>
                        <path
                          id="Path_107"
                          data-name="Path 107"
                          d="M274.834,51.147v24.03a3.566,3.566,0,0,0,3.566,3.568h24.108l13.751-13.684V51.147Z"
                          fill="#e3edf0"
                        ></path>
                      </g>
                      <path
                        id="Path_108"
                        data-name="Path 108"
                        d="M316.188,65.061h-13.68V78.745Z"
                        fill="#a3b5be"
                      ></path>
                      <g id="Group_55" data-name="Group 55">
                        <path
                          id="Path_109"
                          data-name="Path 109"
                          d="M305.353,45.88a2.051,2.051,0,0,1-2.051-2.051V34.911a2.051,2.051,0,1,1,4.1,0v8.918A2.051,2.051,0,0,1,305.353,45.88Z"
                          fill="#4c97e3"
                        ></path>
                        <path
                          id="Path_110"
                          data-name="Path 110"
                          d="M285.739,45.88a2.051,2.051,0,0,1-2.051-2.051V34.911a2.051,2.051,0,0,1,4.1,0v8.918A2.051,2.051,0,0,1,285.739,45.88Z"
                          fill="#4c97e3"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  TALK WITH EMPLOYEE
                </h2>
                <p className="leading-relaxed">
                  We would like to get to know you better and talk about your
                  experience and expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
              2
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Group_51"
                  data-name="Group 51"
                  width="50"
                  height="80"
                  viewBox="0 0 80 80"
                >
                  <g id="Group_47" data-name="Group 47">
                    <path
                      id="Path_95"
                      data-name="Path 95"
                      d="M62.29,25.542V18.4l-5.149-1.239a17.263,17.263,0,0,0-1.56-3.717l2.761-4.477L53.215,3.921l-4.534,2.71a17.845,17.845,0,0,0-3.77-1.546L43.649,0H36.4L35.14,5.07a17.9,17.9,0,0,0-3.775,1.536L26.819,3.888,21.692,8.936,24.444,13.4a17.325,17.325,0,0,0-1.57,3.712L17.71,18.355V25.5l5.149,1.239a17.263,17.263,0,0,0,1.56,3.717l-2.761,4.476,5.127,5.049,4.534-2.711a17.8,17.8,0,0,0,3.77,1.547L36.351,43.9H43.6l1.259-5.071a17.889,17.889,0,0,0,3.774-1.535l4.546,2.718,5.127-5.049L55.556,30.5a17.283,17.283,0,0,0,1.57-3.712Z"
                      fill="#ff9041"
                    ></path>
                    <ellipse
                      id="Ellipse_11"
                      data-name="Ellipse 11"
                      cx="7.649"
                      cy="7.66"
                      rx="7.649"
                      ry="7.66"
                      transform="translate(32.351 14.289)"
                      fill="#fff"
                    ></ellipse>
                  </g>
                  <g id="Group_50" data-name="Group 50">
                    <g id="Group_48" data-name="Group 48">
                      <path
                        id="Path_96"
                        data-name="Path 96"
                        d="M74.224,72.454H5.776V28.77a3.419,3.419,0,0,1,3.419-3.419h61.61a3.419,3.419,0,0,1,3.419,3.419Z"
                        fill="#e3edf0"
                      ></path>
                      <path
                        id="Path_97"
                        data-name="Path 97"
                        d="M76.347,80H3.653A3.654,3.654,0,0,1,0,76.347V65.72H27.183l2.191,5.434H50.588l2.19-5.434H80V76.347A3.654,3.654,0,0,1,76.347,80Z"
                        fill="#141f72"
                      ></path>
                    </g>
                    <g id="Group_49" data-name="Group 49">
                      <path
                        id="Path_98"
                        data-name="Path 98"
                        d="M19.245,48.276l13.143,6.769V50.9l-7.86-3.939,7.86-3.94V38.873L19.245,45.642Z"
                        fill="#a3b5be"
                      ></path>
                      <path
                        id="Path_99"
                        data-name="Path 99"
                        d="M34.682,55.27h3.97L46.1,35.992h-4Z"
                        fill="#a3b5be"
                      ></path>
                      <path
                        id="Path_100"
                        data-name="Path 100"
                        d="M47.612,38.876v4.146l7.915,3.937L47.612,50.9v4.146L60.755,48.3V45.617Z"
                        fill="#a3b5be"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  RECRUITMENT TASK
                </h2>
                <p className="leading-relaxed">
                  Career We do not seek candidates who are just concerned with
                  cash generation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
              3
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="80"
                  viewBox="0 0 80 80"
                >
                  <g
                    id="Group_61"
                    data-name="Group 61"
                    transform="translate(-105.706 -32.86)"
                  >
                    <g id="Group_58" data-name="Group 58">
                      <path
                        id="Path_111"
                        data-name="Path 111"
                        d="M168.775,112.86h-46.12a3.418,3.418,0,0,1-3.418-3.419V36.279a3.418,3.418,0,0,1,3.418-3.419h46.12a3.419,3.419,0,0,1,3.419,3.419v73.162A3.419,3.419,0,0,1,168.775,112.86Z"
                        fill="#e3edf0"
                      ></path>
                      <path
                        id="Path_112"
                        data-name="Path 112"
                        d="M131.106,32.86l3.522,6.782a3.6,3.6,0,0,0,3.2,1.944H153.6a3.6,3.6,0,0,0,3.2-1.944l3.521-6.782Z"
                        fill="#4c97e3"
                      ></path>
                    </g>
                    <g id="Group_59" data-name="Group 59">
                      <path
                        id="Path_113"
                        data-name="Path 113"
                        d="M135.167,81.809H109.125a3.419,3.419,0,0,1-3.419-3.419V57.839a3.419,3.419,0,0,1,3.419-3.419h26.042a3.419,3.419,0,0,1,3.419,3.419V78.39A3.419,3.419,0,0,1,135.167,81.809Z"
                        fill="#f6576e"
                      ></path>
                      <path
                        id="Path_114"
                        data-name="Path 114"
                        d="M118.111,74.781V61.448l9.9,6.667Z"
                        fill="#fff"
                      ></path>
                    </g>
                    <g id="Group_60" data-name="Group 60">
                      <path
                        id="Path_115"
                        data-name="Path 115"
                        d="M151,73.582h34.706V99.176H151Z"
                        fill="#141f72"
                      ></path>
                      <path
                        id="Path_116"
                        data-name="Path 116"
                        d="M168.353,88.316,151,73.582h34.706Z"
                        fill="#4c97e3"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  RECRUITMENT PROCESS
                </h2>
                <p className="leading-relaxed">
                  We get back to you within a few days (sometimes hours) to get
                  you on board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
