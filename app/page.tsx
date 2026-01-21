export default function Home() {
  return (
    <main>
      {/* HERO (header only here, scrolls away) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="absolute top-6 text-sm tracking-wide text-neutral-400">
          Position Labs
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
          Positioning organizations from presence to power.
        </h1>

        <p className="mt-6 text-lg md:text-xl muted max-w-3xl">
          We help businesses, leaders, and institutions build strong brands,
          professional websites, and digital systems that create trust,
          visibility, and long-term authority.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="mailto:hello@positionlabs.in" className="btn-primary">
            Start a Strategic Conversation
          </a>
          <a href="#services" className="btn-outline">
            Explore Services
          </a>
        </div>

        <p className="mt-6 text-sm muted">
          We work with a limited number of high-stakes clients.
        </p>
      </section>

      {/* WHY */}
      <section className="section">
        <p className="text-3xl md:text-4xl font-medium leading-tight max-w-3xl">
          Most organizations are online. <br />
          Very few are positioned.
        </p>
        <p className="mt-6 muted max-w-3xl">
          Being visible is easy. Being trusted, remembered, and chosen is not.
          <br />
          <span className="text-white">
            Position Labs exists to close that gap.
          </span>
        </p>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section">
        <h2 className="text-3xl font-semibold mb-12">Who We Work With</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Commercial",
              text:
                "Startups and businesses needing branding, websites, and digital growth.",
            },
            {
              title: "Political",
              text:
                "Leaders and campaigns building public trust and communication systems.",
            },
            {
              title: "Institutional",
              text:
                "NGOs and public organizations requiring reliable digital platforms.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition"
            >
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-4 muted">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm muted">
          If you are looking for quick execution or cheap commodity services, we
          are not the right partner.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2 className="text-3xl font-semibold mb-12">Services</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Brand Strategy & Identity",
              text:
                "Brand positioning, messaging, and identity systems that define what you stand for.",
            },
            {
              title: "Website Design & Development",
              text:
                "Professional, high-performance websites built for credibility, clarity, and scale.",
            },
            {
              title: "Digital Marketing & Growth",
              text:
                "SEO, content, and visibility systems designed for long-term authority.",
            },
            {
              title: "IT Consulting & Infrastructure",
              text:
                "Secure, scalable digital infrastructure, cloud systems, and business tooling.",
            },
          ].map((item) => (
            <div key={item.title} className="card card-hover">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-4 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <h2 className="text-3xl font-semibold mb-12">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Assessment",
              price: "₹10,000 – ₹25,000 / $500 – $1,000",
              text:
                "Brand, website, and digital direction clarity before execution.",
            },
            {
              title: "Growth Engagement",
              price: "₹1,50,000 – ₹3,00,000 / $2,500 – $5,000",
              text:
                "Brand strategy, website development, and digital growth together.",
            },
            {
              title: "Authority Engagement",
              price: "₹3,00,000+ / $6,000+",
              text:
                "High-stakes political and institutional environments (selective).",
            },
          ].map((item) => (
            <div key={item.title} className="card card-hover">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-sm muted">{item.price}</p>
              <p className="mt-4 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm muted">
          Exact scope and pricing are defined after assessment. We do not offer
          execution-only services.
        </p>
      </section>

      {/* CAREERS */}
      <section className="section">
        <h2 className="text-3xl font-semibold mb-6">Work with Position Labs</h2>
        <p className="muted max-w-2xl">
          We collaborate with disciplined designers, developers, and operators
          who value clarity and execution.
        </p>

        <a
          href="mailto:hello@positionlabs.in"
          className="btn-outline mt-8"
        >
          Apply via Email
        </a>
      </section>

      {/* FOOTER */}
      <footer className="section pt-12">
        <p className="muted">
          Position Labs — Strategic positioning, branding, IT services, and
          digital systems.
        </p>
        <p className="mt-4 muted">
          hello@positionlabs.in <br />
          www.positionlabs.in
        </p>
        <p className="mt-8 text-xs text-neutral-600">
          © {new Date().getFullYear()} Position Labs
        </p>
      </footer>
    </main>
  );
}