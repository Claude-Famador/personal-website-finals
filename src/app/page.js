import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageGallery from "./components/ImageGallery";
import About from "./components/About";
import Comments from "./components/Comments";
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ImageGallery />
      <main>
        <Contact />
        <Comments />
      </main>
    </>
  );
}
