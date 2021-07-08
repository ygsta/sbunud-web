import Head from 'next/head'
import NavMenu from '../components/navMenu'
import Footer from "../components/footer";
import {MemberCard} from "../components/card";

const MemberList = [
  {name: "I Putu Sudharma Yoga", year: "2017", department: "Electrical Engineering"},
  {name: "Cokrominto Haryadi Tp", year: "2017", department: "Electrical Engineering"},
  {name: "Irwan Octopianus Silaban", year: "2017", department: "Electrical Engineering"},
  {name: "I Putu Gede Krsna Yudha Dharma", year: "2017", department: "Electrical Engineering"},
  {name: "Haris Chandra Agustina", year: "2017", department: "Electrical Engineering"},
]

export default function MemberPage() {
  return (
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>IEEE Student Branch UNUD</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <NavMenu/>
        <main className="container mx-auto my-12">
          {/*CONTENT*/}
          <div>
            <div className="text-center text-4xl font-medium text-gray-600 uppercase mb-12">Women In Engineering</div>
            <div className="grid grid-cols-2 gap-10">
              <img src="/images/wie_logo.png" className="mx-auto w-5/6"/>
              <div className="border-l-4 border-[#8B2C8A] bg-gray-100">
                <div className="p-6 text-xl">
                  IEEE Women in Engineering Affinity Group Udayana University Student Branch was formed on June 20th in 2016 to coincide with the receipt petition of IEEE WIE
                  Affinity Group at the IEEE Center. IEEE WIE Affinity Group Udayana University Student Branch is a venue to accommodate all female members in IEEE Udayana
                  University Student Branch so as to develop the leadership potential and role of women in developing technology. And can hold a collaboration in channeling ideas
                  about technological developments.
                </div>
              </div>
            </div>
          </div>

        </main>

        <Footer/>
      </div>
  );
}
