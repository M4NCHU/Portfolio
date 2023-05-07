import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <Layout>
      <Hero/>
      <About/>
      {/* <Skills/> */}
      <Projects/>
      {/* <hr className="mt-24 h-2" /> */}
      <Contact/>
    </Layout>
  )
}
