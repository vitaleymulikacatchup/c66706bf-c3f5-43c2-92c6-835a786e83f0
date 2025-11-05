"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Globe, Gamepad2, HelpCircle, Heart, MapPin, MessageCircle, Sparkles, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom="false"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Hobbies", id: "feature" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Mike Mürk"
          button={{
            text: "Say Hi",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Hey, I'm Mike!"
          description="Estonian high school student who loves gaming, dreaming of Spain, and staying active through sports. Welcome to my digital space!"
          tag="Welcome"
          tagIcon={Sparkles}
          buttons={[
            { text: "Learn More", href: "about" },
            { text: "Get in Touch", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Mike Mürk - Estonian high school student"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="I'm a 17-year-old student from Estonia who's passionate about gaming, fascinated by Spanish culture, and always up for sports. When I'm not grinding Fortnite with friends, you'll find me planning my next trip to Spain or hitting the field for some competitive action."
          buttons={[
            { text: "My Hobbies", href: "feature" },
            { text: "Contact Me", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="My Interests"
          description="The things that keep me motivated and excited every day"
          tag="Hobbies"
          tagIcon={Heart}
          features={[
            {
              id: "01",
              title: "Fortnite Gaming",
              description: "Competitive Battle Royale player always looking to improve my skills and climb the ranks with my squad",
              imageSrc: "https://images.pexels.com/photos/7773547/pexels-photo-7773547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fortnite gaming setup"
            },
            {
              id: "02",
              title: "Spanish Culture",
              description: "Absolutely fascinated by Spain - the language, culture, food, and history. Planning to visit Barcelona soon!",
              imageSrc: "https://images.pexels.com/photos/29196838/pexels-photo-29196838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spanish culture and traditions"
            },
            {
              id: "03",
              title: "Sports & Athletics",
              description: "Love staying active through various sports - football, basketball, and track. Teamwork and competition drive me forward",
              imageSrc: "https://images.pexels.com/photos/8927021/pexels-photo-8927021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "High school sports activities"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What My Friends Say"
          description="Honest words from the people who know me best"
          tag="Friends"
          tagIcon={Users}
          testimonials={[
            {
              id: "1",
              name: "Anna Kask",
              role: "Classmate",
              company: "Tallinn High School",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Anna Kask, Mike's classmate"
            },
            {
              id: "2",
              name: "Erik Tamm",
              role: "Gaming Buddy",
              company: "Fortnite Squad",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8419648/pexels-photo-8419648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Erik Tamm, Mike's gaming friend"
            },
            {
              id: "3",
              name: "Liisa Mänd",
              role: "Sports Team",
              company: "School Athletics",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5325701/pexels-photo-5325701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Liisa Mänd, Mike's teammate"
            },
            {
              id: "4",
              name: "Mart Saar",
              role: "Study Partner",
              company: "Tallinn High School",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mart Saar, Mike's study buddy"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Part Of"
          description="Communities and interests that shape who I am"
          tag="Communities"
          tagIcon={Globe}
          logos={[
            "https://images.pexels.com/photos/6990467/pexels-photo-6990467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/33519031/pexels-photo-33519031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34543044/pexels-photo-34543044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10913954/pexels-photo-10913954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/15483696/pexels-photo-15483696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6990467/pexels-photo-6990467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/33519031/pexels-photo-33519031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Getting to Know Me"
          description="Answers to questions people usually ask about my interests and goals"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What games do you play besides Fortnite?",
              content: "While Fortnite is my main game, I also enjoy FIFA, CS:GO, and occasionally some single-player adventure games. I'm always open to trying new games with friends!"
            },
            {
              id: "2",
              title: "Why are you so interested in Spain?",
              content: "Spanish culture just fascinates me! The architecture, food, language, and the passionate way of life really appeal to me. I'm actually learning Spanish and hope to study there someday."
            },
            {
              id: "3",
              title: "What sports do you play?",
              content: "I'm most active in football (soccer) and basketball at school. I also enjoy running track and field events. Sports teach me teamwork and help me stay fit while having fun."
            },
            {
              id: "4",
              title: "What are your plans after high school?",
              content: "I'm considering studying international business or sports management, hopefully in Spain or another EU country. I want to combine my love for different cultures with my competitive spirit."
            },
            {
              id: "5",
              title: "How can people connect with you?",
              content: "Feel free to reach out through the contact form! I'm always happy to chat about gaming, Spain, sports, or just life in general. I love meeting new people with similar interests."
            },
            {
              id: "6",
              title: "What's your favorite thing about Estonia?",
              content: "Estonia has this perfect balance of digital innovation and beautiful nature. Plus, the gaming community here is amazing, and I love how connected we are to both Nordic and European cultures."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contact"
          title="Let's Connect!"
          description="Whether you want to game together, talk about Spain, sports, or just chat - I'd love to hear from you!"
          tagIcon={MessageCircle}
          inputPlaceholder="Your email address"
          buttonText="Send Message"
          termsText="I'll get back to you as soon as possible. Looking forward to connecting!"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Mike Mürk"
          columns={[
            {
              title: "About",
              items: [
                { label: "My Story", href: "about" },
                { label: "Interests", href: "feature" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact Me", href: "contact" },
                { label: "Gaming", href: "feature" },
                { label: "Sports", href: "feature" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Globe, href: "https://estonia.ee", ariaLabel: "Estonia" },
            { icon: Gamepad2, href: "https://fortnite.com", ariaLabel: "Gaming" },
            { icon: MapPin, href: "https://spain.info", ariaLabel: "Spain" }
          ]}
          copyrightText="© 2025 Mike Mürk | Estonian Student"
        />
      </div>
    </ThemeProvider>
  );
}