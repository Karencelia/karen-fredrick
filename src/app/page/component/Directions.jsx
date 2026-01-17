"use client";

export default function Directions() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl tracking-widest font-light mb-4">
          DIRECTIONS
        </h2>
        <p className="text-gray-600 text-lg">
          De Swan Exquisite Hotel & Suites
        </p>
      </div>

      {/* Map */}
      <div className="w-full mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3709345389348!2d3.3964047!3d6.724513200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b957f0ee41c99%3A0x4ca741d1025bf98d!2sDe%20swan%20exquisite%20hotel%20%26%20suites!5e0!3m2!1sen!2sng!4v1767492606110!5m2!1sen!2sng"
          className="w-full h-[450px] rounded-md border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Directions Text */}
      <div className="px-20 flex flex-col items-center justify-center text-gray-700 leading-relaxed mb-10">
        <h3 className="text-xl bg-green-800 text-white rounded-md p-2 font-semibold mb-6 text-center">
          By Public Transport
        </h3>

        <div className="text-center">
          <p className="mb-2 text-[18px]">
          When coming to the city of Uyo by bus, we highly suggest you use the Orange branded AKTC (Akwa Ibom Transport Company) bus, 
          if there's one in your area. When in Uyo, you may choose to stop at the Water Board, as most passengers getting into the town would, instead of following the bus to their motor park. And right there, at the Water Board, you may take tricycles or minibuses to Plaza. Plaza is a major reference point in Uyo. 
        </p>

        <p className="mb-2 text-[18px]">
          At Plaza, you may join minibuses to Oron road. Stop and alight at "Four Lane” junction. Carefully cross to the other lane of the road, into Four Lane. 
          Take a drop with a tricycle to Jubilee Gardens. Usually, just drops/chatter make it to Jubilee Gardens.
        </p>
        </div>
      </div>

      <div className="border-b-2 w-full text-green-700 px-30 mb-10"></div>

      {/* Directions Text */}
      <div className="flex flex-col items-center justify-center text-gray-700 leading-relaxed mb-10">
        <h3 className="text-xl bg-green-800 text-white rounded-md p-2 font-semibold mb-6 text-center">
          By Car
        </h3>

        <p className="mb-2 text-[18px]">
          From the East,  either from Umuahia--past Umudike, or from Aba, we recommend you drive through IkotEkpene. Before long, you'll be in Uyo. You should notice the state's pecialist hospital. Drive past it, straight towards the popular Plaza, and onto Oron Road.
        </p>

        <p className="mb-2 text-[18px]">
          Turn left at the very obvious, wide "FOUR LANE EXPRESS" and continue driving until "LABOR MARKET JUNCTION". Turn right into the labour market junction, and drive straight until Jubilee Gardens to your right
        </p>

        <p className="mb-2 text-[18px]">
          From Ibeno, make your way to Eket, and use the A Trunk express way. A straight road, drive for about 30 minutes until you arrive Ikom Imam roundabout, Uyo. Turn right unto Abak Road, and drive to the State Secretariat. 
          Turn right toward IBB Avenue, and at the roundabout turn right again, aiming for the very next round about. When there, take the third exit unto Udo Udoma Avenue.
        </p>

        <p className="text-[18px]">
          Drive across Oron onto Four Lane Express Way, until you get to Labor Market Junction. Turn right into the labour market junction, and drive straight until Jubilee Gardens to your right 
        </p>
      </div>
<div className="border-b-2 w-full text-green-700 px-30 mb-10"></div>
      {/* Directions Text */}
      <div className="flex flex-col items-center justify-center text-gray-700 leading-relaxed">
        <h3 className="text-xl bg-green-800 text-white rounded-md p-2 font-semibold mb-6 text-center">
          Parking
        </h3>

        <p className="mb-2 text-[18px]">
          Our venue has ample space for parking. So free parking will be available for those coming with vehicles, except it's an airborne type.
        </p>

        <p className="mb-6 text-[18px]">
         <span className="font-bold">PLEASE NOTE: </span>It won't be best to park outside the garden, on the street, as that might risk your vehicle to damage.
        </p>
      </div>
    </section>
  );
}
