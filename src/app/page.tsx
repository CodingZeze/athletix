export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            AthletiX
          </div>
          <nav className="flex gap-6">
            <a href="#features" className="hover:text-blue-400 transition">
              Features
            </a>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Sports Analytics Made Simple
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Track live games, analyze players and teams, and collaborate with your team. Built for sports enthusiasts.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "📊", title: "Live Scores", desc: "Real-time game updates" },
            { icon: "⚡", title: "Analytics", desc: "Deep player & team stats" },
            { icon: "🎯", title: "Predictions", desc: "Make informed predictions" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Analyze Sports?</h2>
          <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition">
            Start Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
          <p>&copy; 2024 AthletiX. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
