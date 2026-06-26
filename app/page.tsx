export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800">


      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow">

        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between">

          <h1 className="font-bold text-xl text-pink-600">
            Princess Iane
          </h1>


          <div className="flex gap-6 text-gray-600">

            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#tools">Tools</a>
            <a href="#contact">Contact</a>

          </div>


        </div>

      </nav>




      {/* HERO */}

      <section className="max-w-6xl mx-auto px-8 py-16">


        <div className="bg-white rounded-3xl shadow p-10 grid md:grid-cols-2 gap-10 items-center">


          <div>


          <div className="inline-flex items-center gap-2 bg-white border border-pink-200 text-pink-600 px-5 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">

<span className="w-2.5 h-2.5 bg-pink-500 rounded-full animate-pulse"></span>

Available for Practice Support

</div>


<p className="text-pink-600 font-semibold">
Medical Virtual Assistant
</p>


          <h1 className="text-6xl font-bold mt-4">
          Hi, I'm
          <br/>
          Princess Iane Agustin
          </h1>


          <h2 className="text-2xl text-pink-600 mt-5">
          Healthcare Administrative Support & Clinical Support
          </h2>


          <p className="mt-6 text-gray-600">

          Providing reliable healthcare virtual assistance
          with experience in patient support, insurance
          verification, scheduling, coordination, and
          healthcare administrative tasks.

          </p>


          <div className="mt-10 flex flex-wrap gap-4">

  <a
    href="#contact"
    className="inline-flex items-center gap-2 bg-pink-600 text-white px-7 py-3 rounded-full hover:bg-pink-700 transition"
  >
    Schedule Consultation
    <span>→</span>
  </a>

  <a
    href="#services"
    className="inline-flex items-center border border-pink-300 text-pink-600 px-7 py-3 rounded-full hover:bg-pink-50 transition"
  >
    View Medical Services
  </a>

</div>


          </div>





          <div className="flex justify-center">


          <div className="w-72 h-72 bg-pink-100 rounded-full flex items-center justify-center">


          <p className="text-pink-400 text-center">
          Profile Photo
          <br/>
          Coming Soon
          </p>


          </div>


          </div>


        </div>


      </section>





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
<div className="mt-10 bg-white rounded-3xl shadow-lg border border-pink-100 p-8">

  <div className="flex flex-col md:flex-row items-center gap-8">

    {/* Certificate Preview */}
    <img
      src="/images/hipaa-certificate.png"
      alt="HIPAA Certificate"
      className="w-full md:w-72 rounded-xl shadow-md border"
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






      <form className="bg-white rounded-3xl p-8 space-y-4">


      <h3 className="font-bold text-xl text-pink-600">
      Send an Inquiry
      </h3>


      <input className="w-full border rounded-xl p-3"
      placeholder="Your Name"/>


      <input className="w-full border rounded-xl p-3"
      placeholder="Email Address"/>


      <input className="w-full border rounded-xl p-3"
      placeholder="Clinic / Company Name"/>


      <textarea
      className="w-full border rounded-xl p-3"
      rows={5}
      placeholder="Your Message"/>


      <button className="bg-pink-600 text-white px-8 py-3 rounded-full">

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
}:{
image:string,
title:string,
text:string
}){

return(

<div className="bg-white rounded-3xl shadow overflow-hidden">


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

)

}