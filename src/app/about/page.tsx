import Link from 'next/link';

const values = [
  { icon: '🎯', title: 'Outcome-Driven', desc: 'We measure success by your savings and growth, not hours billed.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We embed ourselves in your team and operate as an extension of your org.' },
  { icon: '🔬', title: 'Engineering-First', desc: 'Our practitioners are engineers who understand code, not just dashboards.' },
  { icon: '🏆', title: 'AWS Authorized', desc: 'Certified AWS partner with direct access to AWS programs and support.' },
];

const team = [
  { name: 'Leadership Team', role: 'Cloud Architecture & Strategy', initials: 'AC' },
  { name: 'FinOps Practice', role: 'Certified FinOps Practitioners', initials: 'FP' },
  { name: 'DevOps & SRE', role: 'Infrastructure Automation', initials: 'DE' },
  { name: 'Finance Advisory', role: 'Cloud Economics & Modeling', initials: 'FA' },
];

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-hero py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-altus-sky font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Help Companies Reach New Heights on AWS
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Altus Cloud was founded on a simple belief: cloud infrastructure should accelerate your business, not drain it. We combine deep AWS expertise with proven FinOps practices to help teams build lean, scalable, and cost-effective cloud operations.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-altus-mint font-semibold uppercase tracking-wider text-sm mb-3">Our Mission</p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Make Cloud Economics Work For You
            </h2>
            <p className="text-blue-200 leading-relaxed mb-4">
              Every dollar your organization spends on cloud infrastructure is a vote for your product strategy. Yet most companies overspend by 30–40% due to lack of visibility, poor tooling, and misaligned incentives between engineering and finance.
            </p>
            <p className="text-blue-200 leading-relaxed mb-8">
              Altus Cloud exists to close that gap. We bring together cloud architects, FinOps practitioners, and finance advisors under one roof to drive real, measurable outcomes for CTOs, VPs of Engineering, and CFOs alike.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-altus-sky text-altus-sky hover:bg-altus-sky hover:text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { stat: '30–40%', label: 'Average cloud savings' },
              { stat: 'AWS', label: 'Authorized Reseller' },
              { stat: '48h', label: 'Free assessment turnaround' },
              { stat: '100%', label: 'Outcome-focused engagements' },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center card-hover">
                <div className="text-3xl font-bold text-gradient mb-2">{s.stat}</div>
                <div className="text-blue-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-altus-sky font-semibold tracking-widest uppercase text-sm mb-3">Our Values</p>
            <h2 className="text-3xl font-bold text-white">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-altus-sky font-semibold tracking-widest uppercase text-sm mb-3">Our Team</p>
            <h2 className="text-3xl font-bold text-white">The Experts Behind Altus</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-altus-sky to-altus-mint mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{t.initials}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{t.name}</h3>
                <p className="text-blue-300 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with Altus Cloud?</h2>
          <p className="text-blue-200 mb-8">
            Start with a free cloud assessment and see exactly where your opportunities lie.
          </p>
          <Link
            href="/contact?type=assessment"
            className="inline-flex items-center gap-2 bg-altus-sky hover:bg-altus-blue text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Get Your Free Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
