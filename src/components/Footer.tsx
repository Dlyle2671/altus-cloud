import Link from 'next/link';

const footerLinks = {
    Services: [
      { href: '/services#finops', label: 'FinOps Practice' },
      { href: '/services#cloud-migration', label: 'Cloud Migration' },
      { href: '/services#cost-optimization', label: 'Cost Optimization' },
      { href: '/services#managed-services', label: 'Managed Services' },
        ],
    Company: [
      { href: '/about', label: 'About Us' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
        ],
    Resources: [
      { href: '/contact?type=assessment', label: 'Free Assessment' },
      { href: '/blog', label: 'Case Studies' },
        ],
};

export default function Footer() {
    return (
          <footer className="bg-altus-orange border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                          {/* Brand */}
                                  <div>
                                              <Link href="/" className="flex items-center gap-2 mb-4">
                                                            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                                                            <span className="text-white font-bold text-sm">AC</span>span>
                                                            </div>div>
                                                            <span className="text-white font-semibold text-lg">Altus Cloud</span>span>
                                              </Link>Link>
                                              <p className="text-white/80 text-sm leading-relaxed">
                                                            AWS Authorized Reseller delivering enterprise FinOps and cloud excellence.
                                              </p>p>
                                              <div className="mt-6 flex gap-4">
                                                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                                                                              className="text-white/70 hover:text-white transition-colors text-sm">
                                                                            LinkedIn
                                                            </a>a>
                                                            <a href="https://twitter.com" target="_blank" rel="noreferrer"
                                                                              className="text-white/70 hover:text-white transition-colors text-sm">
                                                                            Twitter
                                                            </a>a>
                                              </div>div>
                                  </div>div>
                        
                          {/* Link columns */}
                          {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                                      <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                                        {category}
                                      </h3>h3>
                                      <ul className="space-y-3">
                                        {links.map((link) => (
                                            <li key={link.href}>
                                                                <Link
                                                                                        href={link.href}
                                                                                        className="text-white/70 hover:text-white text-sm transition-colors"
                                                                                      >
                                                                  {link.label}
                                                                </Link>Link>
                                            </li>li>
                                          ))}
                                      </ul>ul>
                        </div>div>
                      ))}
                        </div>div>
                
                        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
                                  <p className="text-white/70 text-sm">
                                              &copy; {new Date().getFullYear()} Altus Cloud, LLC. All rights reserved.
                                  </p>p>
                                  <div className="flex items-center gap-4">
                                              <p className="text-white/60 text-xs">AWS Authorized Reseller</p>p>
                                              <Link href="/contact?type=assessment"
                                                              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                                                            >
                                                            Free Assessment
                                              </Link>Link>
                                  </div>div>
                        </div>div>
                </div>div>
          </footer>footer>
        );
}</footer>
