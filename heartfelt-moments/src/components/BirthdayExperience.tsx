import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Heart, Menu, Music2, Pause, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { birthdayConfig as config } from "@/config/birthday";

const nav = [
  ["Home", "home"], ["Our Story", "story"], ["Surprise", "surprise"],
] as const;

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.8, ease: "easeOut" as const } };

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <motion.div {...reveal} className="mb-12 text-center md:mb-16"><p className="font-script text-xl text-primary">{eyebrow}</p><h2 className="mt-2 font-display text-4xl font-medium text-foreground md:text-6xl">{children}</h2><div className="mx-auto mt-5 h-px w-16 bg-gold" /></motion.div>;
}

function Particles({ hearts = false }: { hearts?: boolean }) {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <span key={i} className={hearts && i % 3 === 0 ? "floating-heart" : "floating-speck"} style={{ left: `${(i * 37) % 97}%`, animationDelay: `${(i % 7) * -1.3}s`, animationDuration: `${7 + (i % 5) * 2}s` }}>{hearts && i % 3 === 0 ? "♥" : ""}</span>)}</div>;
}

function Navigation({ musicOn, toggleMusic }: { musicOn: boolean; toggleMusic: () => void }) {
  const [open, setOpen] = useState(false);
  return <nav aria-label="Main navigation" className="fixed inset-x-0 top-4 z-40 mx-auto w-[calc(100%-2rem)] max-w-4xl rounded-full border border-highlight/40 bg-background/70 px-3 py-2 shadow-soft backdrop-blur-xl">
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:flex md:justify-between">
      <a href="#home" className="flex min-w-0 items-center gap-2 px-2 font-display text-lg"><Heart className="h-4 w-4 shrink-0 fill-primary text-primary" /><span className="truncate">For {config.loverName}</span></a>
      <div className="hidden items-center gap-1 md:flex">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className="rounded-full px-3 py-2 text-xs text-muted-foreground transition hover:text-foreground">{label}</a>)}</div>
      <div className="flex shrink-0 gap-1">
        <Button variant="ghost" size="icon" aria-label={musicOn ? "Pause music" : "Play music"} title={musicOn ? "Pause music" : "Play music"} onClick={toggleMusic}>{musicOn ? <Pause /> : <Music2 />}</Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="grid overflow-hidden px-2 pb-2 pt-3 md:hidden">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-t border-border/60 py-3 text-center text-sm">{label}</a>)}</motion.div>}</AnimatePresence>
  </nav>;
}

function Hero({ onOpen }: { onOpen: () => void }) {
  return <section id="home" className="romantic-hero relative grid min-h-[100svh] place-items-center overflow-hidden px-5 py-28 text-center">
    <Particles hearts /><div className="hero-glow" />
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1 }} className="relative z-10 max-w-4xl">
      <p className="mb-5 font-script text-2xl text-primary md:text-3xl">A little piece of my heart</p>
      <h1 className="font-display text-5xl font-medium leading-[1.02] text-foreground md:text-8xl">Happy Birthday,<br/><span className="text-primary">{config.loverName} ❤️</span></h1>
      <p className="mx-auto mt-7 max-w-xl text-base font-light leading-8 text-muted-foreground md:text-lg">Today isn’t just your birthday…<br/>it’s the day the world became a little more beautiful.</p>
      <Button variant="romantic" size="romantic" className="mt-9" onClick={onOpen}>Open My Heart <Heart className="fill-current" /></Button>
    </motion.div>
    <div className="absolute bottom-7 left-0 right-0 z-10"><p className="text-xs text-muted-foreground">Made with all my love, just for you.</p><ChevronDown className="mx-auto mt-2 h-4 w-4 animate-gentle-bob text-primary" /></div>
  </section>;
}

function BirthdayMessage() {
  return <section className="relative overflow-hidden px-5 py-24 md:py-36"><Particles /><div className="mx-auto max-w-4xl"><SectionTitle eyebrow="From my heart">To The Most Special Person In My Life</SectionTitle><motion.article {...reveal} className="love-letter relative px-7 py-10 text-center md:px-20 md:py-16"><span className="absolute left-6 top-4 font-display text-7xl text-primary/20">“</span>{config.birthdayMessage.map((p, i) => <p key={p} className={`mx-auto max-w-2xl font-display text-xl leading-9 md:text-2xl md:leading-10 ${i ? "mt-5" : ""} ${i === config.birthdayMessage.length - 1 ? "text-primary" : "text-foreground/85"}`}>{p}</p>)}<p className="mt-9 font-script text-2xl text-primary">Always, with love</p></motion.article></div></section>;
}

function Timeline() {
  return <section id="story" className="px-5 py-24 md:py-36"><div className="mx-auto max-w-4xl"><SectionTitle eyebrow="You & me">Our Little Story</SectionTitle><div className="relative before:absolute before:bottom-0 before:left-[7px] before:top-0 before:w-px before:bg-gold/50 md:before:left-1/2">{config.timeline.map((item, i) => <motion.article {...reveal} key={item.title} className={`relative mb-10 pl-9 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}><span className={`absolute top-2 h-[15px] w-[15px] rounded-full border-4 border-background bg-primary shadow-soft ${i % 2 ? "left-0 md:-left-[7px]" : "left-0 md:-right-[8px]"}`} /><p className="text-xs uppercase text-gold-deep">{item.date}</p><h3 className="mt-2 font-display text-2xl">{item.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{item.text}</p></motion.article>)}</div></div></section>;
}

function Reasons() {
  return <section id="reasons" className="reasons-band px-5 py-24 md:py-36"><div className="mx-auto max-w-5xl"><SectionTitle eyebrow="More than I can count">Reasons I Love You</SectionTitle><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{config.reasons.map((reason, i) => <motion.div {...reveal} whileHover={{ y: -5 }} key={reason} className={`reason-card ${i === config.reasons.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""}`}><span className="font-display text-3xl text-gold/50">0{i + 1}</span><Heart className="h-5 w-5 text-primary"/><h3 className="font-display text-xl">{reason}</h3></motion.div>)}</div></div></section>;
}

function LoveCounter() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer); }, []);
  const values = useMemo(() => { const seconds = Math.max(0, Math.floor((now - new Date(config.relationshipStart).getTime()) / 1000)); return [[Math.floor(seconds / 86400), "Days"], [Math.floor(seconds / 3600), "Hours"], [Math.floor(seconds / 60), "Minutes"], [seconds, "Seconds"]] as const; }, [now]);
  return <section className="counter-band relative overflow-hidden px-5 py-24 text-center md:py-36"><Particles /><div className="relative z-10 mx-auto max-w-6xl"><SectionTitle eyebrow="Since our story began">Do You Know How Much I Love You?</SectionTitle><div className="grid grid-cols-2 border border-highlight/40 bg-background/45 backdrop-blur-md md:grid-cols-4">{values.map(([value, label], i) => <motion.div {...reveal} key={label} className={`px-3 py-8 md:py-12 ${i % 2 ? "border-l border-highlight/40" : ""} ${i > 1 ? "border-t border-highlight/40 md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}><strong className="block font-display text-3xl font-medium tabular-nums text-primary md:text-5xl">{value.toLocaleString()}</strong><span className="mt-2 block text-xs uppercase text-muted-foreground">{label}</span></motion.div>)}</div><p className="mt-7 font-script text-2xl text-primary">…and still, it could never be measured.</p></div></section>;
}

function Surprise() {
  const [open, setOpen] = useState(false);
  return <section id="surprise" className="relative grid min-h-[85vh] place-items-center overflow-hidden px-5 py-24 text-center"><Particles hearts={open}/><div className="relative z-10 mx-auto max-w-3xl"><p className="font-script text-2xl text-primary">Just one more secret</p><h2 className="mt-3 font-display text-4xl md:text-6xl">I Have One More Thing For You…</h2><AnimatePresence mode="wait">{!open ? <motion.div key="closed" exit={{ opacity: 0, scale: .9 }}><Button variant="romantic" size="romantic" className="mt-10" onClick={() => setOpen(true)}>Open Your Surprise <Sparkles /></Button></motion.div> : <motion.div key="open" initial={{ opacity: 0, scale: .9, filter: "blur(8px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1 }} className="surprise-message mt-10"><Heart className="mx-auto mb-6 h-8 w-8 fill-primary text-primary"/><p>If I could give you one thing today,<br/>I would give you the ability to see yourself through my eyes.</p><p className="mt-5">Then you’d finally understand<br/>just how incredibly precious you are to me.</p><p className="mt-7 text-primary">Happy Birthday, my love. ❤️</p></motion.div>}</AnimatePresence></div></section>;
}

function FinalMessage() {
  return <><section className="bg-secondary/40 px-5 py-24 text-center md:py-36"><div className="mx-auto max-w-3xl"><SectionTitle eyebrow="One last letter">Before You Go…</SectionTitle><motion.div {...reveal} className="space-y-6 font-display text-xl leading-9 text-foreground/85 md:text-2xl md:leading-10">{config.finalMessage.map(p => <p key={p}>{p}</p>)}<p className="pt-5 font-script text-3xl text-primary">Forever Yours.</p><p className="text-lg text-muted-foreground">— {config.myName}</p></motion.div></div></section><section className="ending relative grid min-h-[82vh] place-items-center overflow-hidden px-5 py-28 text-center"><Particles hearts/><motion.div {...reveal} className="relative z-10"><Heart className="mx-auto mb-7 h-8 w-8 fill-primary text-primary"/><h2 className="font-display text-5xl md:text-7xl">Happy Birthday, Beautiful ❤️</h2><p className="mx-auto mt-6 max-w-xl font-display text-xl italic leading-8 text-muted-foreground md:text-2xl">“My favorite place will always be wherever you are.”</p></motion.div><p className="absolute bottom-8 text-xs text-muted-foreground">Made with ❤️ by {config.myName}</p></section></>;
}

export function BirthdayExperience() {
  const [entered, setEntered] = useState(false); const [musicOn, setMusicOn] = useState(false); const audio = useRef<HTMLAudioElement>(null); const reduced = useReducedMotion();
  const toggleMusic = () => { const el = audio.current; if (!el) return; if (musicOn) { const fade = window.setInterval(() => { el.volume = Math.max(0, el.volume - .08); if (el.volume <= 0) { el.pause(); window.clearInterval(fade); } }, 60); setMusicOn(false); } else { el.volume = 0; void el.play().then(() => { const fade = window.setInterval(() => { el.volume = Math.min(.45, el.volume + .05); if (el.volume >= .45) window.clearInterval(fade); }, 70); setMusicOn(true); }).catch(() => setMusicOn(false)); } };
  const enter = () => { setEntered(true); window.setTimeout(() => document.querySelector("main")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }), 350); };
  return <div className="min-h-screen bg-background text-foreground"><audio ref={audio} src={config.musicFile} loop preload="none"/><Navigation musicOn={musicOn} toggleMusic={toggleMusic}/><Hero onOpen={enter}/><motion.main initial={false} animate={{ opacity: entered ? 1 : .72 }} transition={{ duration: .8 }}><BirthdayMessage/><Timeline/><Surprise/><FinalMessage/></motion.main></div>;
}