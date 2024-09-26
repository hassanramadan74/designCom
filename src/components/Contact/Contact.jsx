const Contact = () => {
  return <>
  <div className="container py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="flex flex-col justify-center ">
        <div className="p-12">
          <div className="space-y-5 mb-8">
            <h1 className="font-extrabold font-serif text-4xl">Let&apos;s Talk</h1>
            <p className="text-black font-medium">Have some big idea or brand to develop and need <br /> help? Then reach out we&apos;d love to hear about your <br /> project and provide help</p>
          </div>
          <div className="space-y-5 mb-8">
            <h1 className="font-extrabold font-serif text-2xl">Email</h1>
            <p className="text-black font-medium text-sm">beebs@gmail.com</p>
          </div>
          <div className="space-y-5">
            <h1 className="font-extrabold font-serif text-2xl">Socials</h1>
            <div className="text-black font-medium text-sm">
              <ul className="space-y-2 underline">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-14">
        <div className="flex space-y-4 flex-col mb-6">
          <label htmlFor="name" className="text-black font-medium text-sm">Name</label>
          <input type="text" id="name" className="border-none bg-[#f3f0ee] w-[90%] outline-none focus:border-none focus:outline-none py-2" />
        </div>
        <div className="flex space-y-4 flex-col mb-6">
          <label htmlFor="email" className="text-black font-medium text-sm">Email</label>
          <input type="email" id="email" className="border-none bg-[#f3f0ee] w-[90%] outline-none focus:border-none focus:outline-none py-2" />
        </div>
        <div className="flex space-y-4 flex-col mb-6">
          <label htmlFor="phone" className="text-black font-medium text-sm">Phone</label>
          <input type="tel" id="phone" className="border-none bg-[#f3f0ee] w-[90%] outline-none focus:border-none focus:outline-none py-2" />
        </div>
        <div className="flex space-y-4 flex-col mb-6">
          <label htmlFor="country" className="text-black font-medium text-sm">Country</label>
          <input type="text" id="country" className="border-none bg-[#f3f0ee] w-[90%] outline-none focus:border-none focus:outline-none py-2" />
        </div>
        <div className="flex space-y-4 flex-col mb-6">
          <label htmlFor="message" className="text-black font-medium text-sm">Message</label>
          <textarea rows={6} type="text" id="message" className="border-none bg-[#f3f0ee] w-[90%] outline-none focus:border-none focus:outline-none py-2" />
        </div>
        <div className="flex space-y-4 flex-col mb-6">
          <button type="submit" className="bg-black w-[90%] py-2 text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>

  <div>
  <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.3004298701!2d32.597954702651734!3d39.90352329836652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2seg!4v1726823776446!5m2!1sen!2seg"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>  </div>
  </>;
};

export default Contact;
