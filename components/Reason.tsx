
"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
 
const content = [
  {
    title: "She is humble",
    description:
      "despite the fact that she is well taken care of by her family or that she has many talents, she never had a single thought she was doing better than others. She's very kind and caring. Plus, she always makes sure that the people around her are happy. I love that she knows that there's more to things to life than just wealth. She always tries to see the good in people and makes sure others see it as well.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image
          src="/c1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "She is strong",
    description:
      "My baby has gone through a lot of challenges and I may not know everything but based on everything that I have heard, all I could say is that she is a very strong woman. Even though it is tough or that it would take years to accomplish, she would always hold her head up high and continues to push forward with a smile on her face. I love her so much and so I would hope that I would be able to support her through tough times and be there when she needs me most.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/c2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "She is  beautiful",
    description:
      "I know my baby doesnt really see it but dayum I find her so beautiful. My brain goes blank whenever Im close to her face. Aside from her smoking hot body, she is also beautiful inside. She has such an amazing bubbly personality that always lights up the room. She may look a bit initimdating but like what she said, she is a softie girl, in a good way. Her passion to develop herself to be someone who can make a different in people's lives created an image of a hero or goddess in my head. I truly admire her and can't wait for what she will do in the future. Ghad I really love her.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/c3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "She is ambitious",
    description:
      "Whenever I get to talk to her, she would always talk about her dreams and aspirations. Sure, she may not have everything in order in her life but all her dreams are possible for her to accomplish and I believe she can do anything she puts her mind into.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/c4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "She is independent",
    description:
      " Her family may tell her that she can live a relaxing life and that she doesnt have to worry about the future, but my baby wants to grow and learn what it means to be a working adult in this world. I love how she likes to handle things on her own first before deciding to ask help from others. I love it when she talks about how she can cook food or do laundry because I can see how determined she is to prove she can do things herself. My girl doesnt need a man to solve her problems, but I would hope she can lean on me whenever shes in need. After all, shes only human...a very beautiful one.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/c5.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "She is family-oriented",
    description:
      "My baby loves her family so much and she would always talk about them with me when she gets the chance. Whenever we talk about family, I could see how much she cherishes them and I can very much tell she would do anything and everything for them. I really love that about her because I too wish for nothing but for my family to be alright and happy. I know its too early to say this but, I do hope I can build a family with her because I love her so much.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/c6.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "She is hardworking",
    description:
      "Not only is my baby working in a business, but she is also studying for med school. That takes a lot of will power. I love that my baby would do everything she can to finish her work, study after, and still have enough energy to talk to me. That just shows how much she loves me and I feel so lucky to have someone like her. I swear, I'll work hard too to give her a comfortable life with me.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/c7.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "She makes me happy",
    description:
      "One of the reasons why I've been waking up early is to see her in the morning and have breakfast with her. Whenever she smiles or laugh, the only thought that goes to my mind - Im going crazy for her. She makes my day by just exisiting. I would always smile whenver we chat, hangout, or just even staring at her. Maybe I am crazy but I don't care, I love her.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/c8.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "She allows me to be myself",
    description:
      "I have a hard time expressing myself to others because I have a lot of private topics that Im not so uncomfortable of. With her though, I don't know, I feel I can just let everything go and rest on her arms. I know Im still not good with expressing myself and may hold myself back sometimes in showing my feelings but its been getting easier to do it especially knowing that she would accept and welcome all of me. It feels like a dream to have her in my life. I love her.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/c9.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "She loves me for who I am",
    description:
      "I'll be honest, I dont think Im special in any way. Things changed when she became a part of my life.  she would always say how proud she is with everything I've done and it makes me feel proud of myself for a bit. She accepts and loves all of me and I really appreciate her for that. I dont think Im gonna ever let her go.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/c10.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const Reason = () => {
  return (
    <div className="h-full w-full">
      <StickyScroll content={content} />
    </div>
  )
}

export default Reason