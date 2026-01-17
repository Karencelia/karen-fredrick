"use client";

export default function Rsvp() {
  return (
    <section id="rsvp" className="w-full bg-black text-white py-20 px-6 md:px-20 text-center">
      {/* RSVP Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10">
        <div className="flex justify-center items-start">
          <h2 className="text-3xl md:text-4xl font-[cursive] text-center mb-10">
            RSVP
          </h2>
        </div>

        <div>
          <p className="mx-auto text-[16px] md:text-[18px] leading-relaxed mb-6">
            We understand that you may have questions, and gift expressions, especially because we have planned for a private wedding.
            You may reach out to either of our insiders for information regarding our wedding, and gifting.
          </p>

          <div className="flex flex-col items-center justify-center w-full">
            <p className="mx-auto text-[16px] md:text-[18px] leading-relaxed mb-6">
              If we become unreachable and you need answers or acknowledgement,
              please talk to Shelomi or Japhlet.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-8">
              <div className="border border-gray-300 p-6 md:p-10 rounded w-full md:w-auto">
                <p className="font-bold text-[16px] md:text-[18px] mb-2">
                  Shelomi
                </p>
                <p className="text-[16px] md:text-[18px]">
                  08160358500
                </p>
              </div>

              <div className="border border-gray-300 p-6 md:p-10 rounded w-full md:w-auto">
                <p className="font-bold text-[16px] md:text-[18px] mb-2">
                  Japhlet
                </p>
                <p className="text-[16px] md:text-[18px]">
                  09138061105
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10">
        <div className="flex justify-center items-start">
          <h2 className="text-3xl md:text-4xl font-[cursive] text-center mb-10">
            GIFT US
          </h2>
        </div>

        <div className="text-center md:text-left">
          <p className="mx-auto text-[16px] md:text-[18px] leading-relaxed mb-6">
            Your presence is enough of a present to us. But if you'd like to support our next phase,
            your gifts are greatly appreciated.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-8">
            <div className="border border-gray-300 px-6 py-6 rounded w-full max-w-[250px]">
              <p className="font-bold text-[14px] md:text-[16px] mb-6">
                BANK TRANSFER (Naira)
              </p>
              <p className="text-[14px] mb-1">WEMA</p>
              <p className="text-[14px] mb-1">0092092890</p>
              <p className="text-[14px]">Fredrick Imoni</p>
            </div>

            <div className="border border-gray-300 px-6 py-6 rounded w-full max-w-[250px]">
              <p className="font-bold text-[14px] md:text-[16px] mb-6">
                BANK TRANSFER (Naira)
              </p>
              <p className="text-[14px] mb-1">Firstbank</p>
              <p className="text-[14px] mb-1">1793924922</p>
              <p className="text-[14px]">Karen Ovu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
