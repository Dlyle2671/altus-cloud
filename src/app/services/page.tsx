import Link from 'next/link';

const services = [
  {
    id: 'finops',
    icon: '💰',
    title: 'FinOps Practice',
    subtitle: 'Cloud Financial Management',
    description:
      'Our certified FinOps practitioners embed cost visibility, accountability, and optimization directly into your engineering workflows — turning cloud spend into a strategic advantage.',
    bullets: [
      'Real-time cost dashboards and anomaly detection',
      'Chargeback and showback reporting by team or product',
      'Reserved Instance and Savings Plans strategy',
      'Unit economics modeling (cost per transaction / user)',
      'FinOps Foundation framework implementation',
    ],
  },
  {
    id: 'cloud-migration',
    icon: '☁️',
    title: 'Cloud Migration',
    subtitle: 'AWS-Led Modernization',
    description:
      'We design and execute cloud migrations that minimize risk and downtime while maximizing the long-term value of AWS native services.',
    bullets: [
      'Discovery, dependency mapping, and TCO analysis',
      'Lift-and-shift, replatforming, and refactoring',
      'Landing Zone and AWS Control Tower setup',
      'Hybrid and multi-account architecture design',
      'Post-migration optimization review',
    ],
  },
  {
    id: 'cost-optimization',
    icon: '📉',
    title: 'Cost Optimization',
    subtitle: 'Continuous Savings Engineering',
    description:
      'Beyond initial savings, we build repeatable processes that continuously reduce your AWS bill without sacrificing reliability or performance.',
    bullets: [
      'Rightsizing EC2, RDS, and ECS workloads',
      'Idle and underutilized resource elimination',
      'Storage tiering (S3 Intelligent-Tiering, EFS)',
      'Data transfer and NAT Gateway cost reduction',
      'Monthly savings reports with projected runway',
    ],
  },
  {
    id: 'managed-services',
    icon: '🛡️',
    title: 'Managed Cloud Services',
    subtitle: 'Ongoing Operations & Support',
    description:
      'Operate your AWS environment with confidence. Our managed services give you a dedicated cloud partner who acts as an extension of your team.',
    bullets: [
      'Proactive monitoring, alerting, and incident response',
      'Security posture management (AWS Security Hub, GuardDuty)',
      'Compliance assistance (SOC 2, HIPAA, PCI)',
      'Patch management and infrastructure automation',
      'Quarterly business reviews with strategic roadmap',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-hero py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-altus-sky font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AWS Services Built for Scale
          </h1>
          <p className="text-blue-200 text-lg">
            From migration to optimization, our services are designed to help engineering and finance teams move faster, spend smarter, and grow confidently on AWS.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text */}
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <span className="text-3xl mb-4 block">{svc.icon}</span>
                <p className="text-altus-sky text-sm font-semibold uppercase tracking-wider mb-2">{svc.subtitle}</p>
                <h2 className="text-3xl font-bold text-white mb-4">{svc.title}</h2>
                <p className="text-blue-200 mb-6 leading-relaxed">{svc.description}</p>
                <ul className="space-y-3 mb-8">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-blue-200 text-sm">
                      <span className="mt-1 w-4 h-4 rounded-full bg-altus-mint/20 border border-altus-mint/50 flex-shrink-0 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-altus-mint" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?type=assessment"
                  className="inline-flex items-center gap-2 bg-altus-sky hover:bg-altus-blue text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Get a Free Assessment
                </Link>
              </div>
              {/* Visual card */}
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 card-hover">
                  <div className="text-5xl mb-6 text-center">{svc.icon}</div>
                  <div className="space-y-4">
                    {svc.bullets.slice(0, 3).map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-altus-mint flex-shrink-0" />
                        <p className="text-blue-200 text-sm">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-blue-200 mb-8">
            Our free cloud assessment identifies your top cost and efficiency opportunities in 48 hours.
          </p>
          <Link
            href="/contact?type=assessment"
            className="inline-flex items-center gap-2 bg-altus-sky hover:bg-altus-blue text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Start Your Free Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
