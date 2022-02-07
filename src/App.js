import "./styles.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function App() {
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  return (
    <div className="App">
      <h1>Hello Google Recaptcha</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReCAPTCHA
        // type="image"
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
      />
    </div>
  );
}
