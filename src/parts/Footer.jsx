/* eslint-disable react/jsx-filename-extension */
import React from "react";

import BrandIcon from "@parts/BrandIcon";
import Button from "@elements/button";

export default function Footer() {
  return (
    <div className="pb-6 border-t border-gray-200 bg-gray-50">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col justify-center mt-8 sm:flex-row">
          <div className="flex-col w-1/3 ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg font-light text-gray-400">
              Growing Your Business <br />
              Is Our Calling
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="pt-4 pb-2 text-lg text-theme-blue">Office</h1>

            <p className="text-lg font-light text-gray-400">
              VG Tech 10A, Pillaiyar Koil Street, Mannurpet, Chennai-600050
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 sm:ml-0">
            <h1 className="pt-4 pb-2 text-lg text-theme-blue">Social</h1>
            <Button
              href="#"
              type="link"
              target="_blank"
              className="flex text-lg font-light text-gray-400 hover:underline"
              isExternal
            >
              Instagram
            </Button>
            <Button
              href="#"
              type="link"
              target="_blank"
              className="flex text-lg font-light text-gray-400 hover:underline"
              isExternal
            >
              LinkedIn
            </Button>
            <Button
              href="#"
              type="link"
              target="_blank"
              className="flex text-lg font-light text-gray-400 hover:underline"
              isExternal
            >
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg font-light text-gray-400">
            Copyright {new Date().getFullYear()} - All rights reserved - VG Tech
          </p>
        </div>
      </div>
    </div>
  );
}
