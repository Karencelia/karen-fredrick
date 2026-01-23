"use client";

export default function OurStory() {
  return (
    <section id="our-story" className="w-full bg-white py-20 px-6 md:px-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-[cursive] text-center text-gray-400 mb-20">
        Our Story
      </h2>

      {/* Images */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-30">
          <img
            src="proposal-standing.jpeg"
            alt="Wedding Hero"
            className="object-cover w-full max-w-[300px] rounded-md"
          />
          <img
            src="proposal-bridesBack.jpeg"
            alt="Wedding Hero"
            className="object-cover w-full max-w-[300px] rounded-md"
          />
        </div>
      </div>

      {/* Description – His Story */}
      <div className="w-full flex flex-col text-center px-4 md:px-20 mt-20">
        <h3 className="font-bold text-[22px] md:text-[25px] mx-auto text-gray-700 mb-4">
          How we started Talking!
        </h3>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">Hey,</p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          Okay, Okay... Uhhhmmmm... How I started talking to her, right?
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          She kept appearing on my Facebook feeds apparently. I can't tell exactly if we had been friends or
          not but I sent her a message on Facebook,
          I actually sent 2 Ladies a DM on Facebook that day.
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          Well, She replied. It was a hazy period for me, I wanted to talk to a stranger.
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          She replied and after a little bit, I told her FB was not my terrain, let's head to WhatsApp 🤣.
          She sent me her number. I was surprised Uno... Maybe she was the crafty one after all!
        </p>

        <h3 className="font-bold text-[22px] md:text-[25px] mx-auto text-gray-700 mt-10 mb-4">
          How we Met!
        </h3>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          After a period of Chats, Uno how it is na 🌚, We agreed to meet at the KH...
          She was coming from work on Sunday...
          She told me "I'm coming to see my sister, I think you have the same meeting time" 😂
        </p>

        <p className="italic text-[16px] md:text-[18px] text-gray-700 mb-2">
          I told you she is crafty, I'm not taking any credit
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          I told her I would love to see her when she comes around though,
          Who would miss such opportunity?
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          Let's skip to the actual meeting
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          It was under heavy rain at the KH. It was something that seems out of a KDrama 😂... I was struck...
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700">
          She would tell you the rest. 😌 Bambi has a better Memory.
        </p>
      </div>

      {/* Description – Her Story */}
      <div className="w-full flex flex-col text-center px-4 md:px-20 mt-20">
        <h3 className="font-bold text-[22px] md:text-[25px] mx-auto text-gray-700 mb-4">
          How We Met
        </h3>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          Well, we met on Facebook (thank you, Mark Zuckerberg). Around the time he texted me,
          I wasn’t really active on Facebook.
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          So yes, he sent me a DM on Facebook. When I saw it, my first thought was,
          “Ah ah… these men again.”
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-4">
          But there was something about his opening line that stuck with me.
          He said: “I’m here because I’m curious.”
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          Fast-forward to the day we met for the first time.
          It was a full K-drama scene 🤣.
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-700 mb-2">
          Fast forward, and here I am: engaged to the kindest, caring, most brilliant man I’ve ever known.
        </p>
      </div>

      {/* Image + Quote */}
      <div className="flex flex-col justify-center items-center w-full mt-16 px-4">
        <p className="mt-6 text-[16px] md:text-[18px] text-center">
          My Dears, Keep Receipts. You Never Know When They'll Come Handy
        </p>

        <div className="mt-16 text-gray-600 italic max-w-xl mx-auto text-center text-[16px] md:text-[18px]">
          <p>“My dear one is mine, and I am his.”</p>
          <p className="mt-4 not-italic font-semibold text-black">
            Song of Solomon 2:16 (NWT)
          </p>
        </div>
      </div>

      {/* Initials */}
      <div className="flex justify-center items-center mt-5 px-4">
        <img
          src="initials.png"
          alt="Wedding Hero"
          className="object-cover w-full max-w-[800px]"
        />
      </div>
    </section>
  );
}
