import React, { useState } from "react"
import Title from "./Title"
import jobs from "../constants/jobs"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const Jobs = () => {
  const [value, setValue] = useState(0)
  const { title, dates, duties, company } = jobs[value]

  return (
    <section className="section jobs" id="career">
      <Title title="career Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            const { id, company } = job
            return (
              <button
                key={id}
                className={`job-btn ${index === value && `active-btn`}`}
                onClick={() => setValue(index)}
              >
                {company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <a href="/allen-cv.docx" className="btn center-btn">
        Download CV
      </a>
    </section>
  )
}

export default Jobs
