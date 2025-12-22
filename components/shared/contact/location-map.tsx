function LocationMap() {
  return (
    <div className="aspect-4/3 sm:aspect-video rounded-3xl overflow-hidden w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8448019545403!2d-1.6072294999999996!3d6.666146400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb97930229d10b%3A0x10c8188d68e9341c!2sNan%20Enterprises%20Limited%20Head%20Office!5e0!3m2!1sen!2sus!4v1766425476966!5m2!1sen!2sus"
        width="100%"
        height="100%"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NAN Company Limited Location - Asokwa, Kumasi"
      />
    </div>
  );
}

export default LocationMap;
