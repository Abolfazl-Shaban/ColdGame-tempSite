"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const serverIP = "Play.ColdGame.ir";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const socialLinks = [
    {
      name: "Discord",
      href: "https://discord.coldgame.ir",
      icon: "/discord.svg",
      color: "#5d6bf2",
    },
    {
      name: "Telegram",
      href: "https://t.me/ColdGame_ir",
      icon: "/telegram.svg",
      color: "#30acec",
    },
    {
      name: "Eitaa",
      href: "https://eitaa.com/coldgame",
      icon: "/eitta.svg",
      color: "#ef7f07",
    },
    {
      name: "Rubika",
      href: "https://rubika.ir/coldgame",
      icon: "/rubika.png",
      color: "#6eb90b",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
      {/* Header */}
      <header className="relative z-10 px-4 pt-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-2">
            <Image
              src="/logo.png"
              alt="کولدگیم لوگو"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              کولدگیم - ColdGame
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4  sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <br />
            سرور ماینکرفت <b className="text-gradient">کولدگیم</b>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            کولد گیم یک سرور با دنیای پر از ماجراجویی، رقابت و چالش‌های هیجان‌انگیز. وارد
            شوید و تجربه‌ای منحصر به فرد در محیطی پویا و پرانرژی داشته باشید!
          </p>

          {/* Server IP Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-5 mb-12 border border-gray-700/50 max-w-md mx-auto">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center justify-between gap-2 min-w-0 flex-1">
                <span className="flex w-3 h-3 rounded-full bg-green-500 shadow-green-400/80 shadow-sm mr-1" />
                <span className="text-white/90 text-base sm:text-lg font-mono font-bold whitespace-nowrap truncate">
                  {serverIP}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="ml-2 flex items-center justify-center w-7 h-7 rounded bg-transparent hover:bg-coldgame-primary/15 transition-colors border-none outline-none focus-visible:ring-2 focus-visible:ring-coldgame-primary"
                  aria-label="کپی آدرس"
                  tabIndex={0}
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-coldgame-primary" />
                  )}
                </button>
              </div>
            </div>
            {copied && (
              <p className="text-green-400 text-xs sm:text-sm mt-3 text-center animate-pulse">
                آدرس سرور با موفقیت کپی شد!
              </p>
            )}
          </div>

          {/* Social Media Links */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              ما را در شبکه های مجازی دنبال کنید.
            </h2>
            <div className="flex gap-2 items-center justify-center">
              {socialLinks.map((social) => (
                <Link
                  rel="nofollow"
                  target="_blank"
                  key={social.name}
                  href={social.href}
                  className={`group relative p-3 rounded-2xl border border-gray-800/80 hover:[background:var(--hover-bg)] bg-gray-900/50 transition-all duration-300 transform hover:translate-y-[-4px] `}
                  style={
					  { ["--hover-bg"]: social.color } as React.CSSProperties
					}
                  aria-label={`لینک ${social.name}`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <Image
                      src={social.icon}
                      alt={`${social.name} icon`}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Features Section */}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-6 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4"></div>
          <p className="text-gray-400 text-sm">
            © ۲۰۲۴ کولدگیم. تمامی حقوق محفوظ است.
          </p>
          <p className="text-gray-500 text-xs mt-2">آدرس سرور: {serverIP}</p>
        </div>
      </footer>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-coldgame-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-coldgame-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coldgame-primary/5 rounded-full blur-3xl animate-bounce-slow" />
      </div>
    </main>
  );
}
