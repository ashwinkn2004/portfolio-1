import { CONTACT } from "../constants";
import Swal from 'sweetalert2'
import { motion } from "framer-motion"

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "47d560bc-08a1-4c40-9ab7-ace1bcb56d3f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            event.target.reset();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Failed to send message!",
                icon: "error"
            });
        }
    };

    return (
        <div id="contact" className="border-t border-stone-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Get in Touch</motion.h2>

            <div className="mx-auto mb-10 max-w-lg px-4">
                <motion.form
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full rounded-lg border border-stone-800 bg-stone-900/50 px-4 py-3 text-sm text-stone-300 placeholder-stone-500 focus:border-stone-500 focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full rounded-lg border border-stone-800 bg-stone-900/50 px-4 py-3 text-sm text-stone-300 placeholder-stone-500 focus:border-stone-500 focus:outline-none"
                        />
                    </div>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Message"
                        className="w-full rounded-lg border border-stone-800 bg-stone-900/50 px-4 py-3 text-sm text-stone-300 placeholder-stone-500 focus:border-stone-500 focus:outline-none resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="rounded-lg bg-stone-200 px-4 py-3 font-semibold text-stone-900 hover:bg-white transition duration-300"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>

            <div className="text-center tracking-tighter">
                <p className="my-4">
                    {CONTACT.address}
                </p>
                <p className="my-4">
                    {CONTACT.phoneNo}
                </p>
                <a href={`mailto:${CONTACT.email}`} className="border-b">
                    {CONTACT.email}
                </a>
            </div>
        </div>
    );
};

export default Contact;