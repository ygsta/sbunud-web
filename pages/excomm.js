import Head from 'next/head'
import NavMenu from '../components/navMenu'
import Footer from "../components/footer";
import {ExCommCard, MemberCard} from "../components/card";

const MemberList = [
  {name: "Sudharma Yoga", year: "2017", department: "Electrical Engineering", role: "Steering Committee 1"},
  {name: "Giusna Dipankara Kusnandar", year: "2017", department: "Electrical Engineering", role: "Steering Committee 2"},
  {name: "Firgiawan Prasetya", year: "2018", department: "Electrical Engineering", role: "Chair"},
  {name: "I Gede Agus Aditya Putra", year: "2018", department: "Electrical Engineering", role: "Vice Chair"},
  {name: "Laili Asdiyan Salsabila Ayu", year: "2018", department: "Electrical Engineering", role: "Chair WIE"},
  {name: "I.A. Kaniya Pradnya Paramitha", year: "2018", department: "Electrical Engineering", role: "Secretary 1"},
  {name: "Rahel Kristina Prajnyawati", year: "2019", department: "Electrical Engineering", role: "Chair 2"},
  {name: "Arzalia Khairunnisa Yasmine", year: "2018", department: "Electrical Engineering", role: "Treasurer 1"},
  {name: "Neysa Amelia Hutagalung", year: "2019", department: "Electrical Engineering", role: "Treasurer 2"},
  {name: "Salsabila Adinda Hermawan", year: "2018", department: "Electrical Engineering", role: "Head Division of Content Creator and Media"},
  {name: "Gede Widi Kurniawan", year: "2019", department: "Electrical Engineering", role: "Head Division of Equipment"},
  {name: "Ahmad Ma’aliyal Ulya", year: "2019", department: "Electrical Engineering", role: "Head Division of Public Relation"},
  {name: "Komang Gede Widi Adnyana", year: "2018", department: "Electrical Engineering", role: "Head Division of Member Development"}
]

export default function ExCommPage() {
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
            <div className="text-center text-4xl font-medium text-gray-600 uppercase mb-2">Executive Committee</div>
            <div className="text-center text-2xl font-medium text-gray-600 uppercase mb-10">IEEE Udayana University Student Branch 2021</div>
            <div className="grid-cols-1 lg:grid-cols-2 grid gap-6">
              {MemberList.map(member => <ExCommCard {...member}/>)}
            </div>
          </div>

        </main>

        <Footer/>
      </div>
  );
}
