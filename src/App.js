import React from "react";
import "./App.css"

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    conpass: "",
    joinedNewsLetter: true

  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevData => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      })
    )
  }
  

  function handleSubmit(event) {
    event.preventDefault()
    if(formData.password === formData.conpass) {
      console.log("Successfully signed up")
  } else {
      console.log("Passwords do not match")
      return
  }
  
  if(formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!")
  }
}

return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                onChange={handleChange}
                name="conpass"
                value={formData.conpass}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    onChange={handleChange}
                    name="joinedNewsLetter"
                    checked={formData.joinedNewsLetter}
                  />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
)
}
  

export default App;
