import React, { useState } from "react";
import { Context } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "../../../components/Input/Input";
import "./style.scss";
const SiginUp = () => {
  const navigate = useNavigate();
  const [rendom, setRendom] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [check, setCheck] = useState(false);
  const token =
    "MENTOKENMANMENIUNUTMAUNITSANKIROLMAYQOLASNAQAYTASIGINUPQILASAN.2022.11.15";
  function hendelersSubmit(e) {
    e.preventDefault();
    setRendom(token);
    let FullInfo = {
      name: user,
      email: email,
      password: password,
      confirm: confirm,
      check: check,
    };
    if (check) {
      localStorage.setItem("token", JSON.stringify(token));
    }
    localStorage.setItem("userData", JSON.stringify(FullInfo));
  }
  setTimeout(() => {
    if (JSON.parse(localStorage.getItem("userData"))) {
      navigate("/");
    }
  }, 1);

  return (
    <>
      <div class="main-w3layouts wrapper">
        <h1>Telegram</h1>
        <div class="main-agileinfo">
          <div class="agileits-top">
            <form action="#" method="post" onSubmit={hendelersSubmit}>
              <Input
                className={"text"}
                type={"text"}
                name={"Username"}
                desc="Username"
                requaird
                min={5}
                val={user}
                setInput={setUser}
              />

              {/*  */}
              <Input
                className={"text email"}
                type={"email"}
                name={"email"}
                desc="Email"
                min={4}
                val={email}
                setInput={setEmail}
              />
              {/*  */}
              <Input
                className={"password"}
                type={"password"}
                name={"Password"}
                desc="Username"
                min={6}
                val={password}
                setInput={setPassword}
              />
              {/*  */}
              <Input
                className={"text w3lpass"}
                type={"password"}
                name={"password"}
                desc="Confirm Password"
                min={6}
                val={confirm}
                setInput={setConfirm}
              />
              {/*  */}
              <div class="wthree-text">
                <label class="anim">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="check"
                    value={check}
                    onChange={(e) => {
                      setCheck(true);
                    }}
                  />
                  <span>I Agree To The Terms & Conditions</span>
                </label>
                <div class="clear"> </div>
              </div>
              <input type="submit" />
            </form>
            <p>
              Don't have an Account? <Link to={"/login"}> Login Now!</Link>
            </p>
          </div>
        </div>
        <div class="colorlibcopy-agile">
          <p>
            © 2018 Colorlib Signup Form. All rights reserved | Design by{" "}
            <a href="https://colorlib.com/" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SiginUp;
