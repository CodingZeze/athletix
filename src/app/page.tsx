import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-secondary to-primary">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-primary/80 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white">
              A
            </div>
            <span className="text-xl font-bold">AthletiX</span>
          </div>
          <div className="flex gap-4">
            <Link href="/auth/login" className="px-4 py-2 text-slate-300 hover:text-white transition">
              Login
            </Link>
            <Link href="/auth/register" className="px-4 py-2 bg-accent hover:bg-blue-600 rounded-lg transition">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Sports Analytics
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Track live games, analyze teams and players, save personalized dashboards, and collaborate with teammates.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/auth/register"
              className="px-8 py-3 bg-accent hover:bg-blue-600 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link
              href="#features"
              className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 rounded-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "📊",
              title: "Live Scores",
              description: "Track live games from NBA, NFL, MLB, NHL, and more in real-time.",
            },
            {
              icon: "⚡",
              title: "Analytics",
              description: "Deep dive into player and team statistics with interactive visualizations.",
            },
            {
              icon: "🎯",
              title: "Predictions",
              description: "Make informed predictions and track your accuracy over time.",
            },
            {
              icon: "📌",
              title: "Custom Dashboards",
              description: "Create personalized dashboards with your favorite teams and players.",
            },
            {
              icon: "👥",
              title: "Collaboration",
              description: "Share dashboards and collaborate with teammates in real-time.",
            },
            {
              icon: "📱",
              title: "Responsive Design",
              description: "Works seamlessly on desktop, tablet, and mobile devices.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-secondary/50 border border-slate-700 hover:border-accent/50 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of sports enthusiasts using AthletiX today.</p>
          <Link
            href="/auth/register"
            className="inline-block px-8 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-primary/50 py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white">
                  A
                </div>
                <span className="text-lg font-bold">AthletiX</span>
              </div>
              <p className="text-slate-400">Professional sports analytics platform.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AthletiX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
