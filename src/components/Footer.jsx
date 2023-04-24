import React from "react";
function Footer() {
  return (
    <div>
      <div className="justify-between block  border-t-2 border-b-2 font-sfpro py-10 lg:flex ">
        <div className="p-10  list-none  ">
          <h1 className="font-bold text-xl pb-2">
            Download Happy <span className="text-orange-600">Belly</span>{" "}
          </h1>
          <div className="space-y-2">
            <li>
              <a href="">Android</a>
            </li>
            <li>
              <a href="">IOS</a>
            </li>
            <li>
              <a href="">Windows</a>
            </li>
          </div>
        </div>

        <div className="p-10  space-y-2 list-none">
          <li className="hover:text-orange-600">
            <a href="">Download</a>
          </li>
          <li className="hover:text-orange-600">
            <a href="">Services</a>
          </li>
          <li className="hover:text-orange-600">
            <a href="">Featured</a>
          </li>
          <li className="hover:text-orange-600">
            <a href="">Contact</a>
          </li>
        </div>

        <div className="p-10">
          <h1 className="font-bold text-xl pb-2">Newsletter</h1>
          <p className="pb-2">
            Subscribe our newsletter to get more free design course and
            resource.
          </p>
          <form className="flex gap-x-1" action="">
            <input
              className="rounded-3xl p-3 w-[100%]  border-2 border-black "
              type="text"
              placeholder="Enter your email here"
            />
            <button className="p-3 bg-orange-600 rounded-3xl px-5">
              Submit
            </button>
          </form>
        </div>
      </div>

      <h1 className="py-4 font-sfpro text-center bg-orange-600">
        MADE WITH LOVE BY <span className="font-bold">AYOUB AMZIL</span>
      </h1>
    </div>
  );
}

export default Footer;
