import { useForm } from "react-hook-form"

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data, e)
    }

    const onError = (data, e) => {
        console.log(data, e)
    }
    return (
        <div className="contact-form pnf-bg h-100">
            <form onSubmit={handleSubmit(onSubmit, onError)} className="d-flex flex-column justify-content-between h-100">
                <input className="form-control p-3" placeholder="Your Name" {...register("fullname")} />
                <input className="form-control  p-3" placeholder="Your Phone" {...register("mobilenumber")} />
                <input className="form-control p-3" placeholder="Your Email" {...register("emailid")} />
                <textarea className="form-control p-3" placeholder="Your Message" rows={5} {...register("message")} />
                <button type="submit" className="btn ck-btn-1 w-100">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm