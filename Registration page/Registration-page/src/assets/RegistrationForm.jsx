import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const RegistrationForm = () => {
  const regex =
    /^(?=.[A-Z])(?=.[a-z])(?=.*[!@#$%^&()_+{}[\]:;<>,.?~\\-]).{8,16}$/;

  const initialFormData = {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    country: "Select Country", // Change to dropdown
    postalCode: "",
    city: "",
    state: "Select State", // Change to dropdown
    password: "",
    confirmPassword: "",
    number: "",
    business_name: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const countries = ["Select Country", "India", "Sri Lanka", "Bangladesh"];
  const states = ["Select State", "None(International)"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = `${name} is required`;
    } else {
      delete newErrors[name];
    }

    if (name === "password" && !regex.test(value)) {
      newErrors.password = "Password is not strong";
    }

    if (name === "address" && value.trim().split(/\s+/).length < 3) {
      newErrors.address = "Address must have at least 3 words";
    } else {
      delete newErrors.address;
    }

    // Check if passwords match
    if (name === "confirmPassword" && value !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    } else {
      delete newErrors.confirmPassword;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { ...errors };

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    } else {
      delete newErrors.confirmPassword; // Remove the error if passwords match
    }

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      setFormData(initialFormData); // Clear form after successful submission
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="registration-form">
      <div className="heading">REGISTRATION FORM</div>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <div className="form-row">
          <FormField
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <FormField
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <div className="form-row">
          <FormField
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
          />
          <FormField
            label="Address 2"
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group form_row_elements">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <span className="error">{errors.country}</span>}
          </div>
          <div className="form-group form_row_elements">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <span className="error">{errors.state}</span>}
          </div>
        </div>

        <div className="form-row">
          <FormField
            label="Postal Code"
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            error={errors.postalCode}
          />
          <FormField
            label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
          />
        </div>

        <div className="form-row">
          <FormField
            label="Phone Number"
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            error={errors.number}
          />
          <FormField
            label="Business Name"
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="password_container">
            <FormField
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            {showPassword ? (
              <AiFillEyeInvisible
                onClick={handleEyeClick}
                className="eye_symbol"
              />
            ) : (
              <AiFillEye onClick={handleEyeClick} className="eye_symbol" />
            )}
          </div>
          <FormField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
        </div>

        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

const FormField = ({ label, type, name, value, onChange, error }) => (
  <div className="form-group form_row_elements">
    <label>{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} />
    <div className="error-container">
      {" "}
      {/* Wrap the error message */}
      {error && <span className="error">{error}</span>}
    </div>
  </div>
);

export default RegistrationForm;
