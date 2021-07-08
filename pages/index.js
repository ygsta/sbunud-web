import Head from 'next/head'
import NavMenu from '../components/navMenu'
import Banner from "../components/banner"
import Blog from '../components/blog'
import Footer from "../components/footer";

export default function HomePage() {
  return (
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>IEEE Student Branch UNUD</title>
          <link rel="icon" href="/favicon.ico"/>

          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </Head>

        <NavMenu/>
        <main className="container mx-auto my-12">
          {/*BANNER*/}
          <Banner/>

          {/*CONTENT*/}
          <div>
            <div className="text-center text-4xl font-medium text-gray-600 uppercase mb-10">About Us</div>
            <div className="text-3xl font-medium text-gray-600 mb-6">Profile IEEE Udayana University Student Branch</div>
            <div className="flex space-x-10">
              <div className="w-8/12 my-4">
                <p className="text-xl text-gray-500 mb-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Information moves very quickly, in an instant able
                  deliver information to the rest of the world. In order to control and get a good effect of fast traffic information, understanding and networking certainly is
                  something that is very important and essential. Sometimes the information is not evenly spread and only involve residents in large cities and rarely touch the
                  non-urban areas, so that the necessary equity and wider network and cover the whole world so that everyone can exchange ideas, share job information, and found
                  that job seekers competent but still based on kindship, friendship and sharing of information.
                </p>
                <p className="text-xl text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Therefore, students in electrical engineering
                  department, and computer science department together form the IEEE Udayana University Student Branch to support, assist and educate the entire community of
                  Udayana University in hopes of improving the quality and expanding the network which is owned by all students. After a meeting and set rules, the IEEE Udayana
                  University Student Branch accepted by IEEE Headquater. Hopefully later on after established these associations can strengthen the relationship between
                  universities around the world.
                </p>
              </div>
              <div className="w-4/12"><img className="rounded-md" src="/images/home/home1.jpg"/></div>
            </div>
            <div className="text-3xl font-medium text-gray-600 mb-6">Our Vision & Mission</div>
            <div className="flex space-x-10">
              <div className="w-8/12 flex space-x-10">
                <div className="w-6/12">
                  <img className="rounded-md" src="/images/home/home2.jpg"/>
                </div>
                <div className="w-6/12">
                  <img className="rounded-md" src="/images/home/home3.jpg"/>
                </div>
              </div>
              <div className="w-4/12 my-auto ">
                <p className="text-xl mb-4 text-center text-gray-500 space-y-6">
                  <div className="font-medium text-gray-600">Vision</div>
                  Synergy with the rest of the university who are members of the IEEE SB Indonesia
                  <div className="font-medium text-gray-600">Mission</div>
                  Students are able to compete at the international level in the field of technology research
                  As place for sharing between members and Udayana community
                  Increase knowledge about the development of technology
                </p>
              </div>
            </div>
          </div>

        </main>

        <Footer/>
      </div>
  );
}
