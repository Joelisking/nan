function LocationMap() {
  return (
    <div className="aspect-4/3 sm:aspect-video rounded-3xl overflow-hidden w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5898374524!2d-1.6322817!3d6.6965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDEnNDcuNCJOIDHCsDM3JzU2LjIiVw!5e0!3m2!1sen!2sgh!4v1234567890"
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
