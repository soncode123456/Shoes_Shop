import React from 'react'



const Register = () => {

  
    

  

  return (
    
    <div className="container">
  <div>
    <h2 className='my-4'>Registration Form</h2>
    <form>
      <div className="row">
        {/* Cột 1: Email, Password, Password Confirm */}
        <div className="col-md-6 ">
          {/* ID Field (Hidden) */}
          <input type="hidden" id="id" defaultValue={0} />

          {/* Email Field */}
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Password Confirm Field */}
          <div className="form-group mb-3">
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirm"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        {/* Cột 2: Name, Phone, Gender, Submit */}
        <div className="col-md-6 ">
          {/* Name Field */}
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone Field */}
          <div className="form-group mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Gender Field */}
          <div className="form-group mb-3 ">
            <label htmlFor="gender">Gender</label>
            
              <label className="ms-3 me-3">
                <input type="checkbox" name="gender" value="Male" className='border border-radius'/> Male
              </label>
              <label>
                <input type="checkbox" name="gender" value="Female" /> Female
              </label>
            
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

   
      
    
  )
}

export default Register