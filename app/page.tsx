"use client";

import { useState } from "react";

import {
  ShieldCheck,
  HeartHandshake,
  ClipboardCheck,
  Clock3,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800">


      {/* NAVBAR */}
<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-pink-100 shadow-sm">
  <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

    <div className="flex items-center gap-3">
      <div className="text-pink-600 text-3xl">✥</div>

      <h1 className="font-serif text-sm md:text-base font-semibold text-pink-600">
  Your practice's growth starts with the right support.
</h1>
    </div>

    <div className="hidden md:flex items-center gap-10 text-gray-700 font-semibold">
      <a href="#about" className="hover:text-pink-600 transition">About</a>
      <a href="#services" className="hover:text-pink-600 transition">Services</a>
      <a href="#tools" className="hover:text-pink-600 transition">Tools</a>
      <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
    </div>

  </div>
</nav>




      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 pt-0 pb-2">


        <div className="relative overflow-hidden bg-white rounded-[40px] border border-pink-100 shadow-[0_20px_60px_rgba(236,72,153,0.12)] p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center">

          



<div className="space-y-6">


          <div className="space-y-6">

  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-sm font-medium shadow-sm">
    <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
    Available for Practice Support
  </span>

  <p className="text-pink-500 font-semibold tracking-wide uppercase text-sm">
    ✨ Medical Virtual Assistant
  </p>

 <h1 className="leading-tight mt-2">

  <span className="block text-4xl md:text-5xl font-serif font-medium text-[#2b1b43]">
    Helping Clinics Run
  </span>

  <span className="block text-5xl md:text-6xl font-serif font-bold text-[#2b1b43]">
    Smoother,
  </span>

  <span className="block mt-3 text-4xl md:text-5xl font-serif italic text-pink-500">
    One Task at a Time.
  </span>

</h1>

  <div className="flex items-center gap-3">

    <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-3xl shadow-sm">
      📋
    </div>

    <div className="px-6 py-4 bg-pink-50 border-l-[5px] border-pink-500 rounded-r-2xl shadow-sm">
      <p className="text-pink-700 font-semibold text-base leading-snug">
        Healthcare Administrative & Clinical Support
      </p>
    </div>

  </div>

    <p className="text-gray-600 text-base leading-7 max-w-xl mt-2">
    Providing reliable healthcare virtual assistance with experience in patient support, insurance verification, scheduling, coordination, and healthcare administrative tasks.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 pt-4">

    <a
      href="#contact"
      className="bg-pink-600 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-pink-700 transition shadow-lg"
    >
      📅 Schedule Consultation →
    </a>

    <a
      href="#services"
      className="border-2 border-pink-600 text-pink-600 px-5 py-2.5 rounded-full text-base font-medium hover:bg-pink-50 transition"
    >
      🩺 View Medical Services
    </a>

  </div>

</div>


          </div>





          <div className="flex justify-center">


          <div className="relative w-[330px] h-[390px] bg-white rounded-[2rem] border-4 border-pink-600 shadow-2xl flex items-center justify-center overflow-hidden">

  <div className="absolute -inset-8 bg-pink-300/30 blur-[90px] rounded-full"></div>

  <div className="relative text-center px-6">

    <div className="w-20 h-20 rounded-full bg-pink-100 mx-auto flex items-center justify-center text-5xl">
      👩🏻‍⚕️
    </div>

    <h3 className="mt-7 text-2xl font-serif font-bold text-[#3a214f]">
  Princess Iane Agustin
</h3>

<div className="my-3 flex items-center justify-center gap-3 text-pink-400">
  <span className="h-px w-12 bg-pink-200"></span>
  <span>♥</span>
  <span className="h-px w-12 bg-pink-200"></span>
</div>

<p className="mt-3 text-pink-600 font-semibold tracking-wide uppercase text-sm">
  Medical Virtual Assistant
</p>

    <p className="mt-6 text-gray-400 text-sm">
      Professional Headshot
      <br />
      Coming Soon
    </p>

  </div>

</div>


          </div>


        </div>


      </section>

<div className="mt-10 bg-white rounded-3xl shadow-lg border border-pink-100 p-6 grid md:grid-cols-4 gap-6">

  <div className="flex items-center gap-4 justify-center">
    <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-3xl">
      <ShieldCheck className="w-8 h-8 text-pink-500" />
    </div>
    <div>
      <h4 className="font-bold text-[#24172f]">HIPAA Compliant</h4>
      <p className="text-sm text-gray-500">Data Security First</p>
    </div>
  </div>

  <div className="flex items-center gap-4 justify-center">
    <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-3xl">
      <HeartHandshake className="w-8 h-8 text-pink-500" />
    </div>
    <div>
      <h4 className="font-bold text-[#24172f]">Patient Focused</h4>
      <p className="text-sm text-gray-500">Compassionate Support</p>
    </div>
  </div>

  <div className="flex items-center gap-4 justify-center">
    <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-3xl">
      <ClipboardCheck className="w-8 h-8 text-pink-500" />
    </div>
    <div>
      <h4 className="font-bold text-[#24172f]">Detail Oriented</h4>
      <p className="text-sm text-gray-500">Accurate & Reliable</p>
    </div>
  </div>

  <div className="flex items-center gap-4 justify-center">
    <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-3xl">
      <Clock3 className="w-8 h-8 text-pink-500" />
    </div>
    <div>
      <h4 className="font-bold text-[#24172f]">Time Efficient</h4>
      <p className="text-sm text-gray-500">Streamlined Workflows</p>
    </div>
  </div>

</div>



      {/* ABOUT */}

      <section id="about" className="max-w-6xl mx-auto px-8 py-8">


      <div className="bg-white rounded-3xl shadow p-10">


      <h2 className="text-4xl font-bold text-pink-600">
      About Me
      </h2>


      <p className="mt-5 text-gray-600 leading-relaxed">


      I’m a dedicated Medical Virtual Assistant and Customer
      Support Specialist with 3+ years of experience in the
      U.S. healthcare field and a total of 4+ years in BPO
      customer service.


      <br/><br/>


      I provide HIPAA-compliant support, patient assistance,
      and administrative services with a focus on accuracy
      and professionalism.


      <br/><br/>


      I am HIPAA Certified and committed to maintaining
      patient privacy, confidentiality, and quality healthcare
      support.


      </p>


      </div>


      </section>

      {/* COVER VIDEO */}

<section className="max-w-6xl mx-auto px-8 py-8">

  <div className="bg-white rounded-3xl shadow p-10">

    <h2 className="text-4xl font-bold text-pink-600 mb-6">
      Meet Your Medical Virtual Assistant
    </h2>

    <p className="text-gray-600 mb-8">
      Get to know me better through my short introduction video.
    </p>

    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">

      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/pLiQCEO7kiw"
        title="Princess Iane Introduction Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

    </div>

  </div>
</section>

{/* HIPAA CERTIFICATE */}

<section className="max-w-6xl mx-auto px-8 py-10">

<div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-10">

  <div className="flex flex-col md:flex-row items-center gap-12">

    {/* Certificate Preview */}
    <img
      src="/images/hipaa-certificate.png"
      alt="HIPAA Certificate"
      className="w-full md:w-[220px] rounded-xl shadow-md border flex-shrink-0"
    />

    {/* Certificate Details */}
    <div>

      <p className="text-pink-600 uppercase tracking-widest font-semibold">
        Certification
      </p>

      <h3 className="text-3xl font-bold mt-2">
        🏆 HIPAA Certified
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Certified in HIPAA Privacy & Security compliance,
        demonstrating knowledge of patient confidentiality,
        protected health information (PHI), and healthcare
        privacy regulations.
      </p>

      <a
        href="/images/hipaa-certificate.png"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
      >
        View Certificate →
      </a>

    </div>

  </div>

</div>

</section>

 {/* CORE HEALTHCARE STRENGTHS */}

      <section className="max-w-6xl mx-auto px-8 py-8">


      <div className="bg-white rounded-3xl shadow p-10">


      <h2 className="text-4xl font-bold text-pink-600">
      Core Healthcare Strengths
      </h2>


      <p className="mt-4 text-gray-600">
      Key areas where I provide reliable healthcare administrative support.
      </p>



      <div className="mt-8 space-y-6">


      {[
      ["Insurance Verification & Benefits Support","99%","w-[99%]"],
      ["Patient Scheduling & Coordination","95%","w-[95%]"],
      ["Medical Administrative Support","96%","w-[96%]"],
      ["Prior Authorization Support","95%","w-[95%]"],
      ["Patient Communication & Follow-up","96%","w-[96%]"],
      ["EHR/EMR Navigation & Documentation Support","95%","w-[95%]"]

      ].map(skill=>(


      <div key={skill[0]}>


      <div className="flex justify-between mb-2">

      <span className="font-semibold">
      {skill[0]}
      </span>


      <span className="text-pink-600 font-bold">
      {skill[1]}
      </span>


      </div>



      <div className="w-full bg-pink-100 rounded-full h-3">

      <div className={`bg-pink-600 h-3 rounded-full ${skill[2]}`}>

      </div>


      </div>


      </div>


      ))}


      </div>


      </div>


      </section>



      {/* SERVICES */}

      <section id="services" className="max-w-6xl mx-auto px-8 py-8">


      <h2 className="text-4xl font-bold text-pink-600 mb-6">
      Services
      </h2>



      <div className="grid md:grid-cols-3 gap-6">



      <ServiceCard
  image="/images/insurance-verification.jpeg"
  title="Insurance Verification"
  text="Benefits checking, eligibility verification, and insurance support."
/>


      <ServiceCard
  image="/images/patient-scheduling.jpeg"
  title="Patient Scheduling"
  text="Appointment management and patient coordination support."
/>


      <ServiceCard
  image="/images/prior-authorization.jpeg"
  title="Prior Authorization Support"
  text="Reviewing requirements and assisting authorization processes."
/>


      <ServiceCard
      image="/images/claims review-denials.jpeg"
      title="Claims Review & Denials"
      text="Claims analysis, denial review, and appeal documentation support."
      />


      <ServiceCard
      image="/images/medical-documentation.jpeg"
      title="Medical Documentation"
      text="Healthcare records organization and administrative support."
      />


      <ServiceCard
      image="/images/clinical-support.jpeg"
      title="Clinical Support"
      text="Supporting healthcare workflows and provider operations."
      />


      </div>


      </section>
            {/* TOOLS */}

      <section id="tools" className="max-w-6xl mx-auto px-8 py-8">


      <div className="bg-white rounded-3xl shadow p-10">


      <h2 className="text-4xl font-bold text-pink-600">
      Tools & Systems
      </h2>


      <div className="grid md:grid-cols-2 gap-8 mt-8">


      <div>


      <h3 className="font-bold text-xl text-pink-600">
      Healthcare Documentation
      </h3>


      <ul className="mt-4 space-y-3">


      <li>✓ Aspen</li>
      <li>✓ NextGen Healthcare</li>
      <li>✓ PEGA</li>
      <li>✓ WCF</li>
      <li>✓ FOBS (Benefits Verification)</li>


      </ul>


      </div>





      <div>


      <h3 className="font-bold text-xl text-pink-600">
      Communication Tools
      </h3>


      <ul className="mt-4 space-y-3">


      <li>✓ Genesys Cloud</li>
      <li>✓ Avaya</li>
      <li>✓ Microsoft Teams</li>
      <li>✓ RingCentral</li>


      </ul>


      </div>


      </div>


      </div>


      </section>







      {/* SKILLS */}

      <section className="max-w-6xl mx-auto px-8 py-8">


      <div className="bg-white rounded-3xl shadow p-10">


      <h2 className="text-4xl font-bold text-pink-600">
      Skills
      </h2>


      <div className="flex flex-wrap gap-3 mt-6">


      {[
      "Medical Virtual Assistance",
      "Healthcare Administration",
      "Clinical Support",
      "Insurance Verification",
      "Claims Analysis",
      "Patient Coordination",
      "Authorization Review",
      "HIPAA Certified"
      ].map(skill=>(


      <span key={skill}
      className="bg-pink-100 px-5 py-2 rounded-full">

      {skill}

      </span>


      ))}


      </div>


      </div>


      </section>












      {/* CONTACT */}

      <section id="contact" className="max-w-6xl mx-auto px-8 py-10">


      <div className="bg-pink-100 rounded-3xl p-10">


      <h2 className="text-4xl font-bold text-pink-600">
      Let’s Support Better Healthcare Together
      </h2>


      <p className="mt-4 text-gray-600">


      Looking for a reliable Medical Virtual Assistant to
      streamline your healthcare operations and improve
      patient support? I would love to learn about your goals
      and discuss how I can assist your team.


      </p>





      <div className="grid md:grid-cols-2 gap-8 mt-8">


      <div className="bg-white rounded-3xl p-8">


      <h3 className="font-bold text-xl text-pink-600">
      Contact Information
      </h3>


      <p className="mt-5">
      📧 prncssagstnrmr@gmail.com
      </p>


      <p>
      📱 Viber: 09567763498
      </p>


      <p>
      📍 Philippines
      </p>


      </div>






      <form
  action="https://formspree.io/f/xojokzpy"
  method="POST"
  className="bg-white rounded-3xl p-8 space-y-4"
>
  <h3 className="font-bold text-xl text-pink-600">
    Send an Inquiry
  </h3>

  <input
    className="w-full border rounded-xl p-3"
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    className="w-full border rounded-xl p-3"
    type="email"
    name="email"
    placeholder="Email Address"
    required
  />

  <input
    className="w-full border rounded-xl p-3"
    type="text"
    name="company"
    placeholder="Clinic / Company Name"
  />

  <textarea
    className="w-full border rounded-xl p-3"
    name="message"
    rows={5}
    placeholder="Your Message"
    required
  />

  <button
    type="submit"
    className="bg-pink-600 text-white px-8 py-3 rounded-full"
  >
    Send Inquiry
  </button>
</form>


      </div>


      </div>


      </section>


    </main>
  );
}







function ServiceCard({
  image,
  title,
  text
}: {
  image: string,
  title: string,
  text: string
}) {
  const [flipped, setFlipped] = useState(false);

  const details =
  title === "Insurance Verification"
    ? "Ensures accurate insurance verification by checking patient eligibility, confirming coverage details, and reducing delays in approvals and claims through proper coordination with insurance companies."

    : title === "Patient Scheduling"
    ? "Efficiently manages patient appointments, coordinates provider schedules, sends reminders, and ensures a seamless scheduling experience while maintaining accurate patient information."

    : title === "Prior Authorization Support"
    ? "Keeps the authorization process moving by coordinating with insurance providers, organizing required clinical documentation, and proactively following up to help patients receive timely access to prescribed treatments."

    : title === "Claims Review & Denials"
? "Turns denied claims into reimbursement opportunities by investigating payer decisions, validating claim accuracy, and coordinating the necessary documentation to support successful claim resolution."

: title === "Medical Documentation"
? "Transforms clinical information into accurate, organized documentation that supports efficient healthcare operations, seamless provider communication, and high standards of patient record integrity."

: title === "Clinical Support"
? "Enhances daily clinical operations by coordinating patient care activities, supporting healthcare providers with administrative tasks, and ensuring smooth communication for an efficient and patient-centered workflow."

: text;

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="h-[330px] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white rounded-3xl shadow overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={image}
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-bold text-pink-600">
              {title}
            </h3>

            <p className="mt-3 text-gray-600">
              {text}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-pink-600 text-white rounded-3xl shadow p-6 flex flex-col justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-2xl font-bold mb-4">
            {title}
          </h3>

          <p className="leading-relaxed">
            {details}
          </p>

          <p className="mt-6 text-sm text-pink-100">
            Click to flip back
          </p>
        </div>
      </div>
    </div>
  );
}