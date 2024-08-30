/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, b as createAstro } from './astro/server_B0QDIMYG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-wrap justify-around  bg-black text-white p-6 text-xl"> <a href="" class="text-xl">Yojan Loaiza <span class="text-lime-500">.DEV< /> </span></a> <div class="space-x-8"> <a class="hover:text-lime-500" href="#about">About</a> <a class="hover:text-lime-500" href="#works">Works</a> <a class="hover:text-lime-500" href="#contact">Contact</a> </div> </nav>`;
}, "C:/Users/user/Desktop/portfolio/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/user/Desktop/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { image, title, description, tags, live, code } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" transition-transform duration-300 transform hover:scale-105 bg-black rounded-lg p-4 shadow-lg border border-lime-500"> <div class="flex justify-end "> <a${addAttribute(live, "href")}><img class="w-10" src="/live.webp"> </a> <a${addAttribute(code, "href")}><img class="w-10" src="/github.png"> </a> </div> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-47 object-cover rounded-md"> <div class="mt-4"> <h3 class="text-xl font-bold text-lime-500">${title}</h3> <p class="text-white">${description}</p> <div class="mt-2"> ${tags.map((tag) => renderTemplate`<span class="inline-block bg-gray-800 text-green-400 text-xs  mr-2 px-2.5 py-0.5 rounded">${`#${tag}`}</span>`)} </div> </div> </div>`;
}, "C:/Users/user/Desktop/portfolio/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardGrid;
  const cards = Astro2.props.cards;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 "> ${cards.map((card) => renderTemplate`${renderComponent($$result, "Card", $$Card, { ...card })}`)} </div>`;
}, "C:/Users/user/Desktop/portfolio/src/components/CardGrid.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="waves" data-astro-cid-sz7xmlte> <div class="wave" id="wave1" data-astro-cid-sz7xmlte></div> <div class="wave" id="wave2" data-astro-cid-sz7xmlte></div> <div class="wave" id="wave3" data-astro-cid-sz7xmlte></div> <div class="wave" id="wave4" data-astro-cid-sz7xmlte></div> </div> </footer> `;
}, "C:/Users/user/Desktop/portfolio/src/components/Footer.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-white flex justify-center text-7xl">Contact me</h1> <br><br> <form action="https://formspree.io/f/movarpqe" method="POST" class="max-w-lg mx-auto p-6  shadow-lg rounded-lg"> <div class="mb-4"> <label for="email" class="block text-lime-500 text-xl  mb-2">
Tu correo electrónico:
</label> <input type="email" name="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2" required> </div> <div class="mb-6"> <label for="message" class="block text-lime-500 text-xl  mb-2">
Tu mensaje:
</label> <textarea name="message" id="message" rows="5" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2" required></textarea> </div> <button type="submit" class="w-full bg-lime-500 hover:bg-lime-300 text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 ">
Enviar
</button> </form> <div class="relative z-10 text-center text-gray-800"> <ul class="flex justify-center gap-8 p-0 list-none"> <li> <a href="https://www.linkedin.com/in/yojan-arbey-loaiza-agudelo-a5b591303/"> <img src="linkedin.png" alt="LinkedIn" class="w-12 h-12 transition-transform duration-300 ease-in-out transform hover:scale-125"> </a> </li> <li> <a href="https://x.com/Yxjanz"> <img src="twitter.png" alt="Twitter" class="w-12 h-12 transition-transform duration-300 ease-in-out transform hover:scale-125"> </a> </li> <li> <a href="https://wa.me/573013562679"> <img src="wpp.png" alt="WhatsApp" class="w-12 h-12 transition-transform duration-300 ease-in-out transform hover:scale-125"> </a> </li> </ul> </div>`;
}, "C:/Users/user/Desktop/portfolio/src/components/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const cards = [
    {
      image: "/spotifyClone.png",
      title: "Spotify Clone",
      description: "Spotify clone functional and interactive",
      tags: [
        "React",
        "Astro",
        "Svelte",
        "Tailwindcss",
        "Zustand",
        "Typescript",
        "React router dom"
      ],
      live: "https://spotifyastro.netlify.app",
      code: "https://github.com/Yloaiza/SpotifyAstro"
    },
    {
      image: "/spotifyClone.png",
      title: "Spotify Clone",
      description: "Spotify clone functional and interactive",
      tags: [
        "React",
        "Astro",
        "Svelte",
        "Tailwindcss",
        "Zustand",
        "Typescript",
        "React router dom"
      ],
      live: "https://spotifyastro.netlify.app",
      code: "https://github.com/Yloaiza/SpotifyAstro"
    },
    {
      image: "/spotifyClone.png",
      title: "Spotify Clone",
      description: "Spotify clone functional and interactive",
      tags: [
        "React",
        "Astro",
        "Svelte",
        "Tailwindcss",
        "Zustand",
        "Typescript",
        "React router dom"
      ],
      live: "https://spotifyastro.netlify.app",
      code: "https://github.com/Yloaiza/SpotifyAstro"
    },
    {
      image: "/spotifyClone.png",
      title: "Spotify Clone",
      description: "Spotify clone functional and interactive",
      tags: [
        "React",
        "Astro",
        "Svelte",
        "Tailwindcss",
        "Zustand",
        "Typescript",
        "React router dom"
      ],
      live: "https://spotifyastro.netlify.app",
      code: "https://github.com/Yloaiza/SpotifyAstro"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Yojan arbey loaiza agudelo | Portfolio web.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative bg-cover bg-center h-[92vh]" style="background-image: url('https://i.pinimg.com/originals/28/a1/77/28a177c982fd18ed254307659d82104d.gif');" data-astro-cid-j7pv25f6> <div class="absolute inset-0 flex flex-col items-center justify-center" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <h1 class="tracking-wide text-9xl text-white font-bold mt-[-20%] transition-transform duration-300 transform hover:scale-110" data-astro-cid-j7pv25f6>
HELLO, I'M YOJAN
</h1> <h3 class="tracking-widest text-xl text-gray-400" data-astro-cid-j7pv25f6>
//Passionate Learner Building Innovative Front-End Experiences.
</h3> <div class="mouse_icon" data-astro-cid-j7pv25f6></div> </div> </div> </div>  <section id="about" class="bg-black" data-astro-cid-j7pv25f6> <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8" data-astro-cid-j7pv25f6> <div class="max-w-lg" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-extrabold text-white sm:text-7xl" data-astro-cid-j7pv25f6>
About <span class="text-lime-500" data-astro-cid-j7pv25f6>Me</span> </h2> <p class="mt-4 text-white text-xl" data-astro-cid-j7pv25f6>
🚀 I'm a proactive individual who thrives as an excellent team
            player, organized, and responsible. I'm always eager to dive into
            new experiences, driven by the excitement of learning. <br data-astro-cid-j7pv25f6>My
            goal? Securing a challenging and dynamic position where I can share
            my experience and at the same time gain new knowledge 🧠 as I embark
            on a journey of continuous growth and discovery. Let's make waves
            together! 🌊
</p> <div class="mt-8" data-astro-cid-j7pv25f6> <a href="Yojanarbeyloaizaagudelo_CV.pdf" download="Yojanarbeyloaizaagudelo_CV.pdf" class="text-lime-500 hover:text-lime-300 text-2xl" data-astro-cid-j7pv25f6>DOWNLOAD MY CV
<span class="ml-2" data-astro-cid-j7pv25f6>&#8595;</span></a> </div> </div> <div class="mt-12 md:mt-0" data-astro-cid-j7pv25f6> <img src="/profile.jpg" alt="About Us Image" class="object-cover rounded-lg shadow-md" data-astro-cid-j7pv25f6> </div> </div> </div> </section>  <section class="container mx-auto py-16 px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <h1 class="text-white flex justify-center text-7xl" data-astro-cid-j7pv25f6>My Stack</h1> <br data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6> <div class="flex gap-6 flex-wrap justify-center text-white " data-astro-cid-j7pv25f6> <img src="/react.png" alt="React" class="w-12 transition-transform duration-200 transform hover:scale-125 " data-astro-cid-j7pv25f6> <img src="/angular.png" alt="Angular" class="w-12 transition-transform duration-200 transform hover:scale-125" data-astro-cid-j7pv25f6> <img src="/astro.svg" alt="Astro" class="w-12 transition-transform duration-200 transform hover:scale-125" data-astro-cid-j7pv25f6> <img src="/nextjs.png" alt="NextJS" class="w-12 transition-transform duration-200 transform hover:scale-125" data-astro-cid-j7pv25f6> <img src="/javascript.png" alt="JavaScript" class="w-12 transition-transform duration-200 transform hover:scale-125" data-astro-cid-j7pv25f6> <img src="/typescript.png" alt="TypeScript" class="w-12 transition-transform duration-200 transform hover:scale-125" data-astro-cid-j7pv25f6> <img src="/python.png" alt="Python" class="w-12 transition-transform duration-200 transform hover:scale-125" data-astro-cid-j7pv25f6> <img src="/tailwind.png" alt="Tailwind" class="w-12 transition-transform duration-200 transform hover:scale-125" data-astro-cid-j7pv25f6> <img src="/git.png" alt="Git" class="w-12 transition-transform duration-200 transform hover:scale-125" data-astro-cid-j7pv25f6> </div> </section>  <section id="works" class="container mx-auto py-16 px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <span class="text-lime-500 text-3xl" data-astro-cid-j7pv25f6>My works</span> <h1 class="text-white text-8xl" data-astro-cid-j7pv25f6>Projects</h1> <br data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CardGrid", $$CardGrid, { "cards": cards, "data-astro-cid-j7pv25f6": true })} </section> <br data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6>  <section id="contact" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/user/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/user/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
