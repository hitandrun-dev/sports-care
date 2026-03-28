import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Join() {

return (

<>

{/* HERO */}

<section className="join-hero">

<h1>Join the <span>Academy</span></h1>

<p>
Fill out the form below to enroll in our upcoming programs.
</p>

</section>


{/* FORM */}

<section className="join-form-section">

<motion.form
className="join-form"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
>

<h3>Student Information</h3>

<div className="form-row">

<div className="input-group">
<label>First Name</label>
<input type="text" placeholder="John"/>
</div>

<div className="input-group">
<label>Last Name</label>
<input type="text" placeholder="Doe"/>
</div>

</div>

<div className="form-row">

<div className="input-group">
<label>Date of Birth</label>
<input type="date"/>
</div>

<div className="input-group">
<label>Gender</label>

<select>
<option>Select gender</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>

</div>

</div>


<h3>Contact Information</h3>

<div className="form-row">

<div className="input-group">
<label>Email Address</label>
<input type="email" placeholder="john@email.com"/>
</div>

<div className="input-group">
<label>Phone Number</label>
<input type="text" placeholder="1234567890"/>
</div>

</div>


<h3>Program Selection</h3>

<div className="form-row">

<div className="input-group">
<label>Select Program</label>

<select>
<option>Rookie Camp</option>
<option>Junior League</option>
<option>Pro Prep</option>
<option>1-on-1 Coaching</option>
</select>

</div>

<div className="input-group">
<label>Experience Level</label>

<select>
<option>Beginner</option>
<option>Intermediate</option>
<option>Advanced</option>
</select>

</div>

</div>


<button className="submit-btn">
Submit Registration
</button>

<p className="form-note">
By submitting this form, you agree to our Terms and Conditions.
</p>

</motion.form>

</section>
</>

)

}

export default Join;