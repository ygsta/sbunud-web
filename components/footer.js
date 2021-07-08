import {HomeIcon, MailIcon, PhoneIcon} from "@heroicons/react/solid";

export default function Footer() {
  return (
      <footer className="flex w-full justify-center w-full border-t bg-[#112240]">
        <div className="container my-16 flex space-x-12 text-white">
          <div className="w-4/12">
            <header className="text-white font-medium text-2xl uppercase">
              IEEE Udayana University Student Branch
            </header>
            <img src="/images/ieee_white_logo.png" className="py-5"/>
            <div className="text-md py-6 border-b">
              IEEE Udayana University Student Branch is part of Departement of Electrical Engineering, Faculty of Engineering, Udayana University
            </div>
          </div>

          <div className="w-4/12">
            <header className="text-white font-medium text-2xl uppercase">External Link</header>
            <div className="divide-y divide-light-blue-400">
              <div className="py-6"><a href="#null">IEEE</a></div>
              <div className="py-6"><a href="#null">IEEEXplore</a></div>
              <div className="py-6"><a href="#null">IEEE Indonesia Section</a></div>
              <div className="py-6"><a href="#null">Udayana University</a></div>
              <div className="py-6"><a href="#null">Faculty of Engineering Udayana University</a></div>
              <div className="py-6"><a href="#null">Electrical Engineering Udayana University</a></div>
            </div>
          </div>

          <div className="w-4/12">
            <header className="text-white font-medium text-2xl uppercase">
              Contact Us
            </header>
            <div className="divide-y divide-light-blue-400">
              <div className="py-6 flex">
                <HomeIcon className="h-5 w-5 mx-4"/>
                <div className="text-white">
                  <div>IEEE Udayana University Student Branch</div>
                  <div>Kampus Bukit Jimbaran</div>
                  <div>Fakultas Teknik</div>
                  <div>Program Studi Teknik Elektro</div>
                </div>
              </div>
              <div className="py-6 flex">
                <PhoneIcon className="h-5 w-5 mx-4"/>
                <div className="text-white">
                  <div><a href="tel:+6281236453789">I Putu Firgiawan Prasetya (+6281236453789)</a></div>
                  <div><a href="tel:+6287757976676">Al (+6287757976676)</a></div>
                </div>
              </div>
              <div className="py-6 flex">
                <MailIcon className="h-5 w-5 mx-4"/>
                <div className="text-white">
                  <div><a href="mailto:ieeesbunud@gmail.com">ieeesbunud@gmail.com</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
