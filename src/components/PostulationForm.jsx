import { useState } from "react";
import { toast } from "react-toastify";

const PostulationForm = () => {
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [headline, setHeadline] = useState("");
  const [bio, setBio] = useState("");
  const [cv, setCV] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    document.getElementById("postulation").reset();

    toast.success("Form Submit Successfully");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form id="postulation" onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Postulation
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={name}
                pattern="/^[a-z ,.'-]+$/i"
                title="Name must contain only letters, spaces, apostrophes, commas, and periods."
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                required
                className="border rounded w-full py-2 px-3"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                required
                className="border rounded w-full py-2 px-3"
                placeholder="+1 123 456 7890"
                pattern="[+]{1}[0-9]{11,14}"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Headline
              </label>
              <input
                type="text"
                id="headline"
                name="headline"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bio"
                className="block text-gray-700 font-bold mb-2"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                className="border rounded w-full py-2 px-3"
                rows="4"
                required
                placeholder="Tell us about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">CV</label>
              <input
                type="url"
                id="cv"
                name="cv"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={cv}
                required
                pattern="https://.*"
                title="CV must start with https://"
                placeholder="https://example.com/cv.pdf"
                onChange={(e) => setCV(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default PostulationForm;
