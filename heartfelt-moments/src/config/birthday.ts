import memoryGarden from "@/assets/memory-garden.jpg";
import memoryDinner from "@/assets/memory-dinner.jpg";
import memoryBeach from "@/assets/memory-beach.jpg";
import memoryLetters from "@/assets/memory-letters.jpg";
import memoryCafe from "@/assets/memory-cafe.jpg";

export const birthdayConfig = {
  loverName: "Naju",
  myName: "Aju",
  birthday: "September 05",
  relationshipStart: "2024-01-01T00:00:00",
  musicFile: "/audio/our-song.mp3",
  birthdayMessage: [
    "Happy Birthday to the person who makes my ordinary days feel extraordinary.",
    "You came into my life and somehow made everything a little brighter, a little warmer, and a lot more meaningful.",
    "I don’t know what the future holds, but I know that every moment with you is something I’ll always treasure.",
    "Today, I just want you to know how incredibly special you are to me.",
    "Happy Birthday, my love.",
  ],
  finalMessage: [
    "Thank you for being part of my life. Thank you for every smile, every conversation, every memory, and every little moment.",
    "I hope this birthday brings you the same happiness that you bring into my life every single day.",
    "No matter where life takes us, I hope we continue creating beautiful memories together.",
    "Happy Birthday, my beautiful love. ❤️",
  ],
  memories: [
    { src: memoryGarden, caption: "Where everything feels right.", size: "tall" },
    { src: memoryDinner, caption: "One of my favorite moments.", size: "tall" },
    { src: memoryBeach, caption: "Us, in our own little world.", size: "wide" },
    { src: memoryLetters, caption: "Another memory I’ll always keep.", size: "tall" },
    { src: memoryCafe, caption: "Just you being you.", size: "tall" },
  ],
  timeline: [
    { title: "Where It All Began", date: "Our first day", text: "A perfectly ordinary day that quietly became the beginning of everything." },
    { title: "The First Conversation", date: "That first hello", text: "I could have listened forever. Something in me already knew you were different." },
    { title: "When I Realized You Were Special", date: "A little later", text: "It wasn’t one grand moment. It was a hundred tiny ones, all pointing to you." },
    { title: "Our Favorite Memory", date: "One golden day", text: "The kind of memory I return to whenever I need a reason to smile." },
    { title: "Every Moment After That", date: "Then, now, always", text: "A beautiful collection of laughter, quiet comfort, and choosing each other." },
    { title: "Today ❤️", date: "Your birthday", text: "Another page in our story—and my favorite reason to celebrate." },
  ],
  reasons: ["Your smile", "Your kind heart", "The way you make me laugh", "The way you understand me", "Your beautiful soul", "The little things you do", "Simply because you’re you ❤️"],
};

export type BirthdayConfig = typeof birthdayConfig;