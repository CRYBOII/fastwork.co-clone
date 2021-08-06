import Head from "next/head"
import FirstSection from "../components/FirstSection"
import Navbar from "../components/Navbar"
import SubHeader from "../components/SubHeader"

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>
          Fastwork.co แหล่งรวมฟรีแลนซ์คุณภาพอันดับ 1 ที่ธุรกิจหลายแสนรายเลือกใช้
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <SubHeader />
      <section className='max-w-6xl mx-auto 	'>
        <FirstSection />
      </section>
    </div>
  )
}
