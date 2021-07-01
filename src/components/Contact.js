import React from "react"
import Title from "./Title"
import { AiOutlineRobot, AiOutlineMessage } from "react-icons/ai"

export default function Contact() {
  return (
    <section className="contact-page" id="contact">
      <Title title="contact me" />
      <article className="contact-form">
        <h3>
          <AiOutlineRobot />
          <AiOutlineMessage />
        </h3>
        <form method="POST" data-netlify="true" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
            />
            <textarea
              name="message"
              placeholder="message"
              rows="5"
              className="form-control"
            ></textarea>
          </div>
          <button className="submit-btn btn" type="submit">
            submit here
          </button>
        </form>
      </article>
    </section>
  )
}
