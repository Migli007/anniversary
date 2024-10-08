"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function Songs() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Dua Lipa",
    title: "Love Again",
    src:  "/loveagain.jpg",
    ctaText: "play",
    ctaLink: "https://open.spotify.com/track/4rPkN1FMzQyFNP9cLUGIIB?si=b6b8e068a508427e",
    content: () => {
      return (
        <p className="font-semibold text-xl sm:text-lg">
          never have I ever met somebody like you <br />
          used to be afraid of love and what it might do <br />
          but goddamn, you got me in love again <br />
        </p>
      );
    },
  },
  {
    description: "Chainsmokers ft. Coldplay",
    title: "Something just like this ",
    src:  "/somethinglikethis.jpg",
    ctaText: "play",
    ctaLink: "https://open.spotify.com/track/1dNIEtp7AY3oDAKCGg2XkH?si=2c21114249084ee5",
    content: () => {
      return (
        <p className="font-semibold text-xl sm:text-lg">
        Im not looking for somebody with superhuman gifts <br /> 
        some superhero <br />
        some fairy tail bliss <br />
        just somebody I can turn to <br />
        somebody I can kiss <br />
        I want something just like this 
      </p>
      );
    },
  },

  {
    description: "Perfect",
    title: "Ed Sheeran",
    src:  "/perfect.jpg",
    ctaText: "play",
    ctaLink: "https://open.spotify.com/track/3P3pw6C19j31Rnzgo3JG7o?si=a4552201b7374945",
    content: () => {
      return (
        <p className="font-semibold text-xl sm:text-lg">
        well I found a woman, stronger than anyone I know <br />
        she shares my dreams, I hope that someday I&apos;ll share her home <br />
        I found a lover, to carry more than just my secrets <br />
        to carry love, to carry children of our own <br />
      </p>
      );
    },
  },
  {
    description: "Dionela, jay R",
    title: "Sining",
    src: "/sining.jpg",
    ctaText: "play",
    ctaLink: "https://open.spotify.com/track/1imaIe1NEAaWnLF0BY0V6F?si=fcd7e196fb284302",
    content: () => {
      return (
        <p className="font-semibold text-xl sm:text-lg">
        Ikaw ay tila sining sa museong &apos;di naluluma <br />
        Binibini kong ginto hanggang kaluluwa <br />
        Gonna keep you like the nu couché <br />
        All my life<br /> <br />
        At kung sa tingin mo na ang oras mo&apos;y lumipas na<br />
        Ako&apos;y patuloy na mararahuyo sa ganda<br />
        I&apos;d still kiss you every single day<br />
        All my life
      </p>
      );
    },
  },
  {
    description: "Myles Smith",
    title: "Stargazing",
    src: "/stargazing.jpg",
    ctaText: "play",
    ctaLink: "https://open.spotify.com/track/3Vr3zh0r7ALn8VLqCiRR10?si=2707f0b5363944e0",
    content: () => {
      return (
        <p className="font-semibold text-xl sm:text-lg">
        Take my heart, don&apos;t break it <br />
        Love me to my bones <br />
        All this time I wasted <br />
        You were right there all along <br />
        You and I stargazing <br />
        Intertwining souls <br />
        We were never strangers <br />
        You were right there all along 
      </p>
      );
    },
  },
  {
    description: "One Republic",
    title: "Something I need",
    src: "/something.jpg",
    ctaText: "play",
    ctaLink: "https://open.spotify.com/track/5aIZ2jtxZ4o4GHQXTybkIa?si=3219938308784553",
    content: () => {
      return (
        <p className="font-semibold text-xl sm:text-lg">
        In this world full of people, there&apos;s one killing me <br />
        And if we only die once, I wanna die with you <br />
        <br />
        If we only die once, I wanna die with<br />
        If we only live once, I wanna live with you
      </p>
      );
    },
  },
];
