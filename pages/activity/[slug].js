import { useRouter } from 'next/router'
import Head from "next/head";
import NavMenu from "../../components/navMenu";
import Footer from "../../components/footer";


const Slug = () => {
  const router = useRouter()
  const { slug } = router.query

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
            <div className="text-center text-4xl font-medium text-gray-600 uppercase mb-10">{slug}</div>
          </div>

        </main>

        <Footer/>
      </div>
  );
}

export default Slug
