import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialSection from '../components/TestimonialSection';
import { Link } from 'react-router-dom';
import salon1 from '../assets/images/11.jpg';
import salon2 from '../assets/images/44.jpg';
import salon3 from '../assets/images/18.jpg';
import salon4 from '../assets/images/78.jpg';
import service1 from '../assets/images/12.jpg';
import service2 from '../assets/images/13.jpg';
import service3 from '../assets/images/18.jpg';
import heroBg from '../assets/images/13.jpg';
import heroImage from '../assets/images/hero.jpeg';
import heroVideo from '../assets/TrystBackground.mp4';


const Home = () => {
  const services = [
    {
      id: 1,
      title: 'Hair',
      description: 'Whether it’s a sharp fade, a perfectly styled look, or grooming that exudes confidence — our skilled stylists are here to keep you looking effortlessly polished. Precision, style, and attention to detail — all tailored to suit your unique personality and preferences.',
      image: salon1,
      link: '/services/hair',
      reversed: false
    },
    {
      id: 2,
      title: 'Skin',
      description: "Whether youre after a quick refresh or a high-performance skin treatment, we’ve got you covered. From gentle exfoliation and deep hydration to targeted solutions for fine lines, dark spots, and dullness — our treatments are designed to bring out your best skin.",
      image: salon2,
      link: '/services/skin',
      reversed: true
    },
    {
      id: 3,
      title: 'Grooming',
      description: 'From scrubs and trims to sharp beards and fresh faces — grooming here is a ritual of self-respect and style.',
      image: salon3,
      link: '/services/grooming',
      reversed: false
    },
    {
      id: 4,
      title: 'Spa',
      description: 'Celebrate every kind of day with spa indulgence — because self-care isn’t just for special occasions.',
      image: salon4,
      link: '/services/spa',
      reversed: true
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection
        title="Own your day with confidence — and hair that’s ready to steal the spotlight! "
        subtitle="We specialize in precision cuts and expert styling, offering personalized services that match your mood, your vibe, and every occasion!"
        backgroundImage={heroImage}
        backgroundVideo={heroVideo}
      />

      <section className="py-16 bg-champagne-pink/10">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Snip, Style, Slay!"
            subtitle="From sleek bobs to flowing layers, our expert stylists are masters of every strand, every cut, and every style. Whether you're after a flawless blowout, beachy waves, curly haircut & styling, a deep conditioning treat, or a full-on glam transformation — we’ve got you covered."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-8 mb-12 text-center"
          >
            <Link
              to="/about"
              className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
            >
              More about us
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white md:py-24">
        <div className="container px-4 mx-auto mb-16">
          <SectionTitle
            title="Our Services"
            subtitle="Experience premium services tailored to your unique style and needs."
            center
          />
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
              reversed={service.reversed}
            />
          ))}
        </div>

        <div className="container px-4 mx-auto mt-16 text-center">
          <Link
            to="/services"
            className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-[#917565] border-dark-green hover:bg-dark-green hover:text-white"
          >
            Explore all services
          </Link>
        </div>
      </section>

      <TestimonialSection />

      <section className="relative py-16 overflow-hidden text-jet md:py-24 bg-champagne-pink/10">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative z-10 space-y-6">
              <SectionTitle
                title="Our work"
                subtitle="From styling specialists to skincare pros, we take your beauty journey personally. Here’s a glimpse of what passion looks like."
                className="mb-0"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Link
                  to="https://www.instagram.com/tryst.salon/"
                  className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
                >
                  View our work
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow-lg md:col-span-1 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service1} 
                    alt="Our work" 
                    className="object-cover w-full h-full transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-20 group-hover:opacity-0" />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service2} 
                    alt="Our work" 
                    className="object-cover w-full h-48 transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-20 group-hover:opacity-0" />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service3} 
                    alt="Our work" 
                    className="object-cover w-full h-48 transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-20 group-hover:opacity-0" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 bg-gradient-to-br from-dun/50 to-champagne-pink/50"
        />
      </section>

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="order-2 md:order-1"
            >
              <img
                src={heroBg}
                alt="Make a booking"
                className="object-cover w-full rounded-lg shadow-lg h-80"
              />
            </motion.div>

            <div className="order-1 md:order-2">
              <SectionTitle
                title="Here to help"
                subtitle="Got questions or ready to book your glow-up? Let’s get you connected."
              />

              <div className="mb-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-center"
                >
                  <div className="mr-2 font-medium text-jet">Chennai:</div>
                  <a href="tel:+917811903903" className="text-jet hover:underline">7811903903</a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-center"
                >
                  <div className="mr-2 font-medium text-jet">Hyderabad:</div>
                  <a href="tel:+917601903903" className="text-jet hover:underline">7601903903</a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Link
                  to="https://wa.me/1234567890"
                  className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
                >
                  Send us an email
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
