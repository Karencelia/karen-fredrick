"use client";

export default function OurStory() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-[cursive] text-center text-gray-400 mb-6">
        Our Story
      </h2>

      <div className="flex items-center">
        <div className="flex items-center justify-center w-full gap-50">
        <div>
            <img
                src="proposal-standing.jpeg"
                alt="Wedding Hero"
                className="object-cover w-[300px] rounded-md"
            />
        </div>
        <div>
            <img
                src="proposal-bridesBack.jpeg"
                alt="Wedding Hero"
                className="object-cover w-[300px] rounded-md"
            />
        </div>
      </div>
      </div>

      {/* Description */}
      <div className="w-full flex flex-col text-center px-20">
        <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        Hi
      </p>

      <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        Fredrick here, and I'll tell from my own side.
      </p>

      <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        Sometime, just as I was about going for NYSC; times when I used to wax strong on Facebook, 
        I can't exactly tell how but I ran into Mary's Facebook profile. For various reasons, pictures may not always tell the accurate story, 
        but I can tell you for free: there are very few persons as beautiful as what I had just seen. 
      </p>

      <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        I remember scrolling through Mary's profile for hours that day. Checking comments, tracing reactions; all. 
        And half way through, I suddenly realized I must have liked about 10 of her pictures and posts at a stretch, before I switched to doing it deliberately. I must have done over 30 of those. By this time, I deliberately wanted her to know I was coming, cos I hoped anyone would sit up on getting over 30 reactions from one person, and that quickly. 
        I spun my thread, and waited for the morning and hoped the night was enough time for her head to paint her plenty scenarios.
      </p>
      <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        "As God would have it..." (You need Twitter to catch that one...): 
      </p>

      <p className="mx-auto text-gray-700 leading-relaxed mb-8">
       If you ask me--in my humble opinion, rizz no de pass like this.
      </p>
        <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        Within the week or the next, I was in a packed taxi--window seat, taking in all the wind, 
        and speeding to the first Christian meeting of a hall at the coastal ends of Nigeria. Meeting time was 8AM, 
        if I remember correctly, because e no de hard, dem go tell person say Gold don finish for area.
      </p>
        <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        How We Met
      </p>
      <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        It was twilight when the sun began to rise, painting the horizon with promise. Out of the quiet, 
        a figure emerged, familiar, magnetic, and impossible to ignore. And just like that… he appeared.
      </p>
       <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        Okay okay, I know you can guess exactly who’s writing this.
      </p>
       <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        Well, we met on Facebook (thank you, Mark Zuckerberg). As simple as that sounds, the plot thickens if you know me, because these days, I’m practically a ghost on social media. 
        Yet, on that day, I got what felt like 100 notifications
         (not exaggerating, this man was thorough) from a mystery account reacting to every single picture on my then-timeline. Stalker much?  Apparently, that was his version of rolling out the red carpet before sliding into my DMs.
      </p>
       <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        Our first conversation? Well… it included mathematics somewhere (yes, it’s giving geek) and somehow drifted to faith, oddly enough, a Kingdom Hall. From that moment, the pages turned quickly.
      </p>
      <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        Fast forward, and here I am: engaged to the kindest, most brilliant man I’ve ever known. He loves Jehovah, loves me beyond measure, and in just a short while… he’ll be my husband.      </p>
      <p className="mx-auto text-gray-700 leading-relaxed mb-8">
        And that, my friends, is the condensed version (you’re welcome) of this triple-X love story. 
      </p>

      </div>
      {/* Button */}
      <div className="flex flex-col justify-center items-center">
        <img
          src="facebook.jpg"
          alt="Wedding Hero"
          className="object-cover w-[500px] max-h-full"
        />
        <p className="mt-10">
          My Dears, Keep Receipts. You Never Know When They'll Come Handy
        </p>
      </div>

      {/* Quote */}
      <div className="mt-16 text-gray-600 italic max-w-xl mx-auto">
        <p>
          “My dear one is mine, and I am his.”
        </p>
        <p className="mt-4 not-italic font-semibold text-black">
          Song of Solomon 2:16 (NWT)
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          src="initials.png"
          alt="Wedding Hero"
          className="object-cover w-[800px] max-h-full"
        />

      </div>
    </section>
  );
}
