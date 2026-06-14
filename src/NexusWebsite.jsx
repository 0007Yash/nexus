import { motion } from "framer-motion";
import {
  Music,
  Shield,
  Zap,
  Headphones,
  ArrowRight,
  PlayCircle,
  Disc3,
  Users,
  Server,
} from "lucide-react";

export default function NexusPrime() {
  const features = [
    {
      icon: Music,
      title: "High Quality Music",
      desc: "Crystal clear audio playback with powerful streaming support.",
    },
    {
      icon: Headphones,
      title: "24/7 Music",
      desc: "Keep music running all day and night without interruptions.",
    },
    {
      icon: Zap,
      title: "Fast Response",
      desc: "Lightning-fast slash commands and queue management.",
    },
    {
      icon: Shield,
      title: "Reliable",
      desc: "Stable performance with advanced uptime systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-red-900"></div>

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/20 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/20 blur-[180px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-red-500/10">
        <h1 className="text-3xl font-extrabold">
          <span className="text-white">Nexus</span>
          <span className="text-red-500">Prime</span>
        </h1>

        <div className="flex gap-4">
          {/* Support Server */}
          <a
            href="https://discord.gg/YOUR_SERVER_INVITE"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl border border-red-500 hover:bg-red-500/10 transition"
          >
            Support Server
          </a>

          {/* Invite Bot */}
          <a
            href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition shadow-[0_0_25px_rgba(239,68,68,0.9)]"
          >
            Invite Bot
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-8">
            <Disc3 className="text-red-400 animate-spin" size={18} />
            <span className="text-red-300">
              Premium Discord Music Experience
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
            <span className="text-white">Nexus</span>
            <span className="text-red-500">Prime</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl mb-10">
            The ultimate Discord Music Bot built for speed, quality and
            reliability. Enjoy high quality playback, autoplay, queue
            management, filters, 24/7 music and much more.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-red-600 rounded-xl font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-red-500 blur-xl opacity-70 group-hover:opacity-100 transition"></span>

              <span className="relative flex items-center gap-2">
                Invite NexusPrime
                <ArrowRight size={18} />
              </span>
            </a>

            <a
              href="https://discord.gg/YOUR_SERVER_INVITE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-red-500 rounded-xl hover:bg-red-500/10 transition"
            >
              Join Support Server
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 text-center">
            <Server className="mx-auto text-red-500 mb-3" size={40} />
            <h2 className="text-4xl font-bold text-red-500">50K+</h2>
            <p className="text-gray-400">Servers</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 text-center">
            <Users className="mx-auto text-red-500 mb-3" size={40} />
            <h2 className="text-4xl font-bold text-red-500">500K+</h2>
            <p className="text-gray-400">Users</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 text-center">
            <Zap className="mx-auto text-red-500 mb-3" size={40} />
            <h2 className="text-4xl font-bold text-red-500">99.9%</h2>
            <p className="text-gray-400">Uptime</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-5xl font-bold mb-16">
          Music Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8"
            >
              <feature.icon
                className="text-red-500 mb-5"
                size={50}
              />

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

        <div className="bg-white/5 border border-red-500/20 rounded-3xl p-8 backdrop-blur-xl font-mono">
          <div className="space-y-4 text-red-400">
            <p>/play song name</p>
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
        <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-3xl p-16">
          <PlayCircle
            size={80}
            className="mx-auto text-red-500 mb-6"
          />

          <h2 className="text-5xl font-bold mb-6">
            Ready To Upgrade Your Discord Server?
          </h2>

          <p className="text-gray-400 mb-10">
            Invite NexusPrime and enjoy premium music playback, autoplay,
            filters, queue management and blazing-fast performance.
          </p>

          <a
            href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative px-10 py-4 bg-red-600 rounded-xl font-bold text-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-red-500 blur-xl opacity-70 group-hover:opacity-100 transition"></span>

            <span className="relative">
              Invite NexusPrime
            </span>
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
