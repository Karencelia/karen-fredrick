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
      <div className="flex flex-col items-center justify-center text-gray-700 leading-relaxed mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          By Public Transport
        </h3>

        <p className="mb-2">
          When coming to the city of Uyo by bus, we highly suggest you use the
          Orange-branded <strong>AKTC (Akwa Ibom Transport Company)</strong> bus,
          if there’s one in your area.
        </p>

        <p className="mb-2">
          Upon arriving in Uyo, you may choose to stop at the <strong>Water Board</strong>,
          as most passengers entering the city do, instead of following the bus
          to its motor park. From the Water Board, you can take tricycles or
          minibuses to <strong>Plaza</strong>, a major reference point in Uyo.
        </p>

        <p className="mb-2">
          At Plaza, board a minibus heading towards <strong>Oron Road</strong>.
          Alight at the <strong>“Four Lane” junction</strong>. Carefully cross to
          the opposite side of the road into Four Lane.
        </p>

        <p>
          From there, take a tricycle to <strong>Jubilee Gardens</strong>.
          Typically, tricycles or drop buses can take you directly to the
          destination.
        </p>
      </div>

      {/* Directions Text */}
      <div className="flex flex-col items-center justify-center text-gray-700 leading-relaxed mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          By Car
        </h3>

        <p className="mb-2">
          When coming to the city of Uyo by bus, we highly suggest you use the
          Orange-branded <strong>AKTC (Akwa Ibom Transport Company)</strong> bus,
          if there’s one in your area.
        </p>

        <p className="mb-2">
          Upon arriving in Uyo, you may choose to stop at the <strong>Water Board</strong>,
          as most passengers entering the city do, instead of following the bus
          to its motor park. From the Water Board, you can take tricycles or
          minibuses to <strong>Plaza</strong>, a major reference point in Uyo.
        </p>

        <p className="mb-2">
          At Plaza, board a minibus heading towards <strong>Oron Road</strong>.
          Alight at the <strong>“Four Lane” junction</strong>. Carefully cross to
          the opposite side of the road into Four Lane.
        </p>

        <p>
          From there, take a tricycle to <strong>Jubilee Gardens</strong>.
          Typically, tricycles or drop buses can take you directly to the
          destination.
        </p>
      </div>

      {/* Directions Text */}
      <div className="flex flex-col items-center justify-center text-gray-700 leading-relaxed">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Parking
        </h3>

        <p className="mb-2">
          Our venue has ample space for parking. So free parking will be available for those coming with vehicles, except it's an airborne type.
        </p>

        <p className="mb-6">
         <strong>PLEASE NOTE: </strong>It won't be best to park outside the garden, on the street, as that might risk your vehicle to damage.
        </p>
      </div>
    </section>
  );
}
