import Link from 'next/link';

const posts = [
  {
    slug: "finops-framework-beginners-guide",
    category: "FinOps",
    date: "February 2026",
    readTime: "8 min read",
    title: "The FinOps Framework: A Beginner's Guide for Engineering Teams",
    excerpt:
      "Cloud costs are a shared responsibility, yet most companies treat them as a finance problem. Learn how the FinOps Foundation framework helps bridge the gap between engineering and finance.",
  },
  {
    slug: "aws-savings-plans-vs-reserved-instances",
    category: "Cost Optimization",
    date: "January 2026",
    readTime: "6 min read",
    title: "AWS Savings Plans vs. Reserved Instances: Which Should You Choose?",
    excerpt:
      "Both commitment-based pricing models can cut your EC2 and Fargate costs by up to 72%, but they work very differently. Here's how to pick the right strategy for your workload.",
  },
  {
    slug: "cloud-unit-economics-guide",
    category: "FinOps",
    date: "December 2025",
    readTime: "10 min read",
    title: "Understanding Cloud Unit Economics: Cost Per Customer, Transaction, and Feature",
    excerpt:
      "Unit economics translate raw AWS bills into actionable business metrics. This guide shows you how to build a cost-per-unit model that your entire organization can align on.",
  },
  {
    slug: "aws-cost-anomaly-detection",
    category: "AWS Tools",
    date: "November 2025",
    readTime: "5 min read",
    title: "Setting Up AWS Cost Anomaly Detection: A Step-by-Step Guide",
    excerpt:
      "AWS Cost Anomaly Detection uses ML to flag unexpected spend before it becomes a crisis. Learn how to configure monitors and alerts in under 30 minutes.",
  },
  {
    slug: "rightsizing-ec2-guide",
    category: "Cost Optimization",
    date: "October 2025",
    readTime: "7 min read",
    title: "EC2 Rightsizing in Practice: How We Cut a Client's Compute Bill by 42%",
    excerpt:
      "Rightsizing is one of the highest-ROI activities in cloud cost optimization and one of the most commonly ignored. Here is our proven methodology with real numbers.",
  },
  {
    slug: "aws-landing-zone-enterprise",
    category: "Architecture",
    date: "September 2025",
    readTime: "9 min read",
    title: "Building an Enterprise AWS Landing Zone with Control Tower",
    excerpt:
      "A well-designed landing zone is the foundation of every successful cloud program. This post walks through our opinionated approach to multi-account architecture for growing companies.",
  },
];

const categories = ["All", "FinOps", "Cost Optimization", "AWS Tools", "Architecture"];

export default function BlogPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-hero py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-altus-sky font-semibold tracking-widest uppercase text-sm mb-3">Insights</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cloud Intelligence, Delivered</h1>
          <p className="text-blue-200 text-lg">
            Practical guides, deep dives, and case studies from the Altus Cloud team built for engineering leaders and finance teams who care about cloud ROI.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-dark border-b border-white/10 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 py-4 overflow-x-auto">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={"px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap " +
                (i === 0
                  ? "bg-altus-sky text-white"
                  : "bg-white/5 text-blue-300 border border-white/10 hover:border-altus-sky hover:text-white")}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <div className="mb-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden card-hover grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-altus-navy to-altus-blue/40 flex items-center justify-center min-h-[240px]">
                <div className="text-6xl">☁️</div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-altus-sky/20 text-altus-sky text-xs font-semibold">
                    {posts[0].category}
                  </span>
                  <span className="text-blue-400 text-xs">{posts[0].date} · {posts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{posts[0].title}</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
                <Link
                  href={"/blog/" + posts[0].slug}
                  className="inline-flex items-center gap-2 text-altus-sky hover:text-white text-sm font-semibold transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden card-hover flex flex-col"
              >
                <div className="bg-gradient-to-br from-altus-navy/80 to-altus-blue/20 h-32 flex items-center justify-center">
                  <div className="text-3xl">
                    {post.category === "FinOps" ? "💰" : post.category === "Cost Optimization" ? "📉" : post.category === "AWS Tools" ? "🛠️" : "🏗️"}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-altus-sky/20 text-altus-sky text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-3 leading-snug">{post.title}</h3>
                  <p className="text-blue-300 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-500 text-xs">{post.date} · {post.readTime}</span>
                    <Link
                      href={"/blog/" + post.slug}
                      className="text-altus-sky hover:text-white text-sm font-medium transition-colors"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 bg-gradient-to-r from-altus-blue/30 to-altus-sky/20 border border-white/10 rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Ahead of the Cloud Curve</h3>
            <p className="text-blue-200 mb-6">Get our best FinOps and AWS content delivered to your inbox monthly.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-400 text-sm focus:outline-none focus:border-altus-sky"
              />
              <button className="bg-altus-sky hover:bg-altus-blue text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
