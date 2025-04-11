import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.jpeg';
import salon1Image from '../assets/images/salon1.jpg';
import heroVideo from '../assets/HeroVideo-recompressed.mp4';

const About = () => {
  return (
    <div>
      <HeroSection
        title="Where Beauty Meets Care"
        subtitle="Step into our world — where style, sustainability, and self-love come together."
        backgroundImage={heroImage}
        backgroundVideo={heroVideo}
        buttonText="EXPLORE OUR WORK"
        buttonLink="/work"
      />

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <SectionTitle
                title="Our Story"
                subtitle="Founded just two years ago, our salon was born from a desire to elevate self-care into a personalized, ethical, and uplifting experience."
              />

              <div className="mt-6 space-y-4 text-jet/70">
                <p>
                  Welcome to Tryst — a retreat where timeless elegance meets heartfelt care. From day one, our mission has been simple: to help you look and feel your best through services crafted with love, intention, and integrity.
                </p>
                <p>
                  We thoughtfully select only clean, all-natural, and eco-conscious products that are as nurturing to you as they are kind to the planet. Here, sustainability is more than a buzzword — it’s a promise.
                </p>
                <p>
                  Our salon is more than a place for beauty — it's a sanctuary where you're seen, heard, and celebrated. Surrounded by warm tones and cozy interiors, each visit is designed to make you feel empowered, rejuvenated, and right at home.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <img
                src={salon1Image}
                alt="Tryst salon interior"
                className="relative z-10 object-cover w-full transition-all duration-500 rounded-lg shadow-lg grayscale hover:grayscale-0"
              />
              <div className="absolute w-32 h-32 rounded-lg -bottom-4 -right-4 bg-salon-purple -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-almond/20">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Our Mission & Vision"
            subtitle="Crafting confidence and care through sustainable beauty rituals tailored just for you."
            center
          />

          <div className="grid gap-8 mt-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-8 bg-white rounded-sm shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-salon-purple/10">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-lora text-salon-purple">Our Mission</h3>
              <p className="text-jet/70">
                To provide personalized beauty services that go beyond the surface. We’re committed to making you feel confident and radiant using only clean, eco-friendly products and mindful practices that honor both you and the environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-8 bg-white rounded-sm shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-salon-purple/10">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-lora text-salon-purple">Our Vision</h3>
              <p className="text-jet/70">
                To create a haven where style, sustainability, and self-love come together. Our goal is to redefine self-care — not just as a routine, but as a celebration of individuality and wellness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Our Values"
            subtitle="The core principles that guide our approach to beauty and care."
            center
          />

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-champagne_pink/30">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-lora text-salon-purple">Sustainability</h3>
              <p className="text-jet/70">
              Sustainability isn’t a trend here — it’s a way of life. We consciously choose clean, eco-friendly products and mindful practices that uplift you and leave a gentle footprint on the planet.              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-champagne_pink/30">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-lora text-salon-purple">Personalization</h3>
              <p className="text-jet/70">
                Every service is tailored to your unique needs, ensuring that you receive care that's perfectly suited to your individual style and preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-champagne_pink/30">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-lora text-salon-purple">Comfort</h3>
              <p className="text-jet/70">
              Designed like a cozy escape, our salon is your feel-good space — where warm energy, thoughtful care, and effortless style make every visit a joy.              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 text-white md:py-24 bg-salon-purple">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mb-6 text-3xl md:text-4xl font-lora"
            >
              Experience beauty with integrity
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mb-8 text-white/80"
            >
              Ready to experience personalized care in our warm and inviting space?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Link
                to="https://wa.me/1234567890"
                className="inline-block px-8 py-3 mr-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 bg-white text-salon-purple hover:bg-black hover:text-white"
              >
                Book an Appointment
              </Link>
              <Link
                to="/services"
                className="inline-block px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 border border-white hover:bg-white hover:text-salon-purple"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
