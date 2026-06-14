import { motion } from "framer-motion";

export default function NexusPrime() {
  const features = [
    {
      icon: "🎵",
      title: "High Quality Music",
      desc: "Crystal clear audio playback with powerful streaming support.",
    },
    {
      icon: "🎧",
      title: "24/7 Music",
      desc: "Keep music running all day without interruptions.",
    },
    {
      icon: "⚡",
      title: "Fast Response",
      desc: "Lightning-fast slash commands and queue management.",
    },
    {
      icon: "🛡️",
      title: "Reliable",
      desc: "Stable performance and uptime.",
    },
  ];

  const BOT_ID = "1380922507920039956";
  const SUPPORT_SERVER = "https://discord.gg/YOUR_SERVER";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-red-900"></div>

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/20 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/20 blur-[180px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-5 border-b border-red-500/10 backdrop-blur-xl">
        <h1 className="text-3xl font-extrabold">
          Nexus<span className="text-red-500">Prime</span>
        </h1>

        <div className="flex gap-4">
          <a
            href={SUPPORT_SERVER}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border border-red-500 rounded-xl hover:bg-red-500/10 transition"
          >
            Support Server
          </a>

          <a
            href={`https://discord.com/oauth2/authorize?client_id=${BOT_ID}&permissions=8&scope=bot%20applications.commands`}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-red-600 rounded-xl hover:bg-red-500 transition shadow-[0_0_25px_rgba(239,68,68,0.9)]"
          >
            Invite Bot
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex gap-2 items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
            <span className="animate-spin inline-block">💿</span>
            <span className="text-red-300">
              Premium Discord Music Experience
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6">
            Nexus<span className="text-red-500">Prime</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-10">
            Powerful Discord Music Bot with autoplay, filters, queue
            management, 24/7 mode, premium audio quality and blazing fast
            performance.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href={`https://discord.com/oauth2/authorize?client_id=${BOT_ID}&permissions=8&scope=bot%20applications.commands`}
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-red-600 rounded-xl font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-red-500 blur-xl opacity-70 group-hover:opacity-100 transition"></span>

              <span className="relative">
                Invite NexusPrime →
              </span>
            </a>

            <a
              href={SUPPORT_SERVER}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-red-500 rounded-xl hover:bg-red-500/10 transition"
            >
              Join Support Server
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-red-500/20 backdrop-blur-xl rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">🖥️</div>
            <h2 className="text-4xl font-bold text-red-500">50K+</h2>
            <p className="text-gray-400">Servers</p>
          </div>

          <div className="bg-white/5 border border-red-500/20 backdrop-blur-xl rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">👥</div>
            <h2 className="text-4xl font-bold text-red-500">500K+</h2>
            <p className="text-gray-400">Users</p>
          </div>

          <div className="bg-white/5 border border-red-500/20 backdrop-blur-xl rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h2 className="text-4xl font-bold text-red-500">99.9%</h2>
            <p className="text-gray-400">Uptime</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-5xl font-bold mb-14">
          Music Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-red-500/20 backdrop-blur-xl rounded-3xl p-8"
            >
              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Commands */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-center text-5xl font-bold mb-12">
          Popular Commands
        </h2>

        <div className="bg-white/5 border border-red-500/20 rounded-3xl p-8 font-mono">
          <div className="space-y-4 text-red-400">
            <p>/play song-name</p>
            <p>/pause</p>
            <p>/resume</p>
            <p>/skip</p>
            <p>/queue</p>
            <p>/autoplay</p>
            <p>/volume 100</p>
            <p>/filter bassboost</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center bg-white/5 border border-red-500/20 backdrop-blur-xl rounded-3xl p-14">
          <div className="text-7xl mb-6">▶️</div>

          <h2 className="text-5xl font-bold mb-6">
            Ready To Upgrade Your Server?
          </h2>

          <p className="text-gray-400 mb-10">
            Invite NexusPrime and experience premium Discord music.
          </p>

          <a
            href={`https://discord.com/oauth2/authorize?client_id=${BOT_ID}&permissions=8&scope=bot%20applications.commands`}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 bg-red-600 rounded-xl font-bold hover:bg-red-500 transition shadow-[0_0_30px_rgba(239,68,68,0.8)]"
          >
            Invite NexusPrime
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-500/10 py-8 text-center text-gray-500">
        © 2026 NexusPrime • Made by Tanush
      </footer>
    </div>
  );
}
