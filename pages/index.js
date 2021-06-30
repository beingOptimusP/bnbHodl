import Head from 'next/head'
import { useState } from 'react'
import { BsMoon } from 'react-icons/bs'
import { BiSun } from 'react-icons/bi'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SiStencyl } from 'react-icons/si'
export default function Home() {

  const [mode, setmode] = useState(true)
  function Mode() {
    if (mode === false) {
      return <BsMoon onClick={() => { setmode(!mode) }} className="text-xl cursor-pointer focus:outline-none" />
    } else {
      return <BiSun onClick={() => { setmode(!mode) }} className="text-xl cursor-pointer dark:text-white focus:outline-none" />
    }
  }
  return (
    <div className={mode ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-white ">

        <div className="max-w-screen-lg mx-auto">

          <nav className="flex flex-row justify-between  mx-auto items-center py-2 shadow-2xl px-5">
            <div >
              <GiHamburgerMenu className="hidden lg:block text-2xl dark:text-white text-black" />
            </div>
            <div className="rounded relative w-full max-w-xl mr-6 focus-within:text-purple-500">

              <input type="text" className="rounded py-2 border block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-gray-700 dark:border-gray-700 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 pl-8 text-gray-700 focus:ring-2 focus:ring-gray-400"
                placeholder="Paste your address here"
              />
            </div>
            <div className="p-2 border border-gray-800  rounded">
              <Mode />
            </div>
          </nav>



          <section className="py-5">
            <div className="w-11/12  mx-auto ">
              <h1 className="text-4xl font-semibold text-black dark:text-white">BNBHODL Earnings Manager</h1>
              <div className="text-white text-xl flex flex-row justify-between p-3 my-6 rounded bg-purple-600">
                <div>
                  <h1>Please enter your address above</h1>
                </div>
                <div>
                  <h1>
                    Buy a BNBHODL
                  </h1>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4  ">
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                  <div className="p-4 flex items-center">
                    <div class="p-3 rounded-md text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                      <SiStencyl className="text-2xl" />
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Your BNBHODL Holdings</p>
                      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">0 BNBHODL</p>
                    </div>
                  </div>
                </div>
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                  <div className="p-4 flex items-center">
                    <div class="p-3 rounded-md text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                      <SiStencyl className="text-2xl" />
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Your BNBHODL Holdings</p>
                      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">0 BNBHODL</p>
                    </div>
                  </div>
                </div>
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                  <div className="p-4 flex items-center">
                    <div class="p-3 rounded-md text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                      <SiStencyl className="text-2xl" />
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Your BNBHODL Holdings</p>
                      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">0 BNBHODL</p>
                    </div>
                  </div>
                </div>
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                  <div className="p-4 flex items-center">
                    <div class="p-3 rounded-md text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                      <SiStencyl className="text-2xl" />
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Your BNBHODL Holdings</p>
                      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">0 BNBHODL</p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 mt-4">
                <div class="p-4 flex items-center">
                  <button class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent opacity-50 w-full h-full  " disabled type="button">Payout Is Processing</button>
                </div>
              </div>




              <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="border border-gray-300 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 col-span-2">
                  <div class="p-4 flex flex-col text-center items-center">
                    <img class="w-32 h-32 mb-4 mt-4" src="https://tikitoken.app/static/media/bnb.162aaf57.png" />
                    <p class="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">Total BNB Paid To BNBHODL Holders</p>
                    <p class="text-green-400 dark:text-green-400 text-4xl md:text-6xl text-center mb-8">
                      17,555
                      <span class="text-yellow-300">BNB</span>
                      <br />
                      =$5,122,290
                    </p>
                  </div>
                </div>

                <div class="border border-gray-300 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 col-span-2 lg:col-span-1">
                  <div class="p-4 flex flex-col text-center items-center">
                    <img class="w-32 h-32 mb-4 mt-4" src="https://tikitoken.app/static/media/money.d301ec34.png" />
                    <p class="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">
                      Your 0 BNBHODL Earns:
                    </p>
                    <div class="flex">
                      <p class="text-green-400 dark:text-green-400 text-2xl text-center">
                        <span class="text-yellow-300">0.00 BNB</span>($0.00)
                        <span class="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Day</span>
                      </p>
                    </div>
                    <div class="flex">
                      <p class="text-green-400 dark:text-green-400 text-2xl text-center">
                        <span class="text-yellow-300">0.00 BNB</span>($0.00)
                        <span class="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Week</span>
                      </p>
                    </div>
                    <div class="flex">
                      <p class="text-green-400 dark:text-green-400 text-2xl text-center">
                        <span class="text-yellow-300">0.00 BNB</span>($0.00)
                        <span class="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Month</span>
                      </p>
                    </div>
                    <div class="flex">
                      <p class="text-green-400 dark:text-green-400 text-2xl text-center">
                        <span class="text-yellow-300">0.00 BNB</span>($0.00)
                        <span class="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Year</span>
                      </p>
                    </div>
                    <p class="text-gray-600 py-1 dark:text-gray-400 text-xl text-center -mt-2">Dynamic estimations based on 24h of trading volume ($1,219,169)
                    </p>
                  </div>
                </div>



                <div class="border border-gray-300 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 col-span-2 lg:col-span-1">
                  <div class="p-4 flex flex-col text-center items-center">
                    <img class="w-32 h-32 mb-4 mt-4" src="https://tikitoken.app/static/media/money.d301ec34.png" />
                    <p class="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">
                      Your 0 BNBHODL Earns:
                    </p>
                    <div class="flex">
                      <p class="text-green-400 dark:text-green-400 text-2xl text-center">
                        <span class="text-yellow-300">0.00 BNB</span>($0.00)
                        <span class="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Day</span>
                      </p>
                    </div>
                    <div class="flex">
                      <p class="text-green-400 dark:text-green-400 text-2xl text-center">
                        <span class="text-yellow-300">0.00 BNB</span>($0.00)
                        <span class="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Week</span>
                      </p>
                    </div>
                    <div class="flex">
                      <p class="text-green-400 dark:text-green-400 text-2xl text-center">
                        <span class="text-yellow-300">0.00 BNB</span>($0.00)
                        <span class="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Month</span>
                      </p>
                    </div>
                    <div class="flex">
                      <p class="text-green-400 dark:text-green-400 text-2xl text-center">
                        <span class="text-yellow-300">0.00 BNB</span>($0.00)
                        <span class="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Year</span>
                      </p>
                    </div>
                    <p class="text-gray-600 py-1 dark:text-gray-400 text-xl text-center -mt-2">Dynamic estimations based on 24h of trading volume ($1,219,169)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
