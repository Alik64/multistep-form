import React from 'react'

const PersonalInfo = () => {
const [formData, setFormData] = React.useState(new FormData())
  function search(formData: FormData) {
    console.log(formData)
  }
  return (
    <section>
      <h1>Personal info</h1>
      <h2>Please provide your name, email address, and phone number.</h2>
      <form action={search(formData)}>
      <input name="query" onChange={(e) => setFormData(e.target)}/>
      <button type="submit">Search</button>
    </form>
    </section> 
  )
}

export default PersonalInfo