import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Skills/>
    </Layout>
  )
}
