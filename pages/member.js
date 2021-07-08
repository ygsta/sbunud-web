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
            <div className="text-center text-4xl font-medium text-gray-600 uppercase mb-2">Our Active Members</div>
            <div className="text-center text-2xl font-medium text-gray-600 uppercase mb-10">IEEE Udayana University Student Branch 2019</div>
            <div className="grid-cols-1 lg:grid-cols-2 grid gap-6">
              {MemberList.map(member => <MemberCard {...member}/>)}
            </div>
          </div>

        </main>

        <Footer/>
      </div>
  );
}
