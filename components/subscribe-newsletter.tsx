"use client";
import axios from "axios";
import { useState } from "react";

const SubscribeNewsLetter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e: any) => {
    e.preventDefault();

    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");
      setEmail("");
    } catch (e: any) {
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
      {" "}
      <h4 className="sub-header">Subscribe to the newsletter</h4>
      <p className="sub-text">
        Get to notified on quality articles about frontend development and more
        sent to your inbox. Ill send you an email once a month, no spam.
      </p>
      <form onSubmit={subscribe}>
        <div className="form-input">
          <input
            required
            id="email-input"
            name="email"
            type="email"
            placeholder="What's your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sub-form-btn">
          <button
            disabled={state === "Loading"}
            type="submit"
            className="form-btn"
            onClick={subscribe}
          >
            Subscribe
          </button>
        </div>

        {state === "Error" && <div className="error-state">{errorMsg}</div>}
        {state === "Success" && <div>Awesome, you have been subscribed!</div>}
      </form>
    </div>
  );
};

export default SubscribeNewsLetter;
