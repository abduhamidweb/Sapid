import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Input from "../../components/Input/Input"
const LoginForm = () => {
  return (
    <div className="LoginWrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto py-4 px-0">
            <div class="card p-0">
              <div class="card-title text-center">
                <h5 class="mt-5">HEY, THERE</h5>{" "}
                <small class="para">Login to your cool account below.</small>
              </div>
              <form class="signup">
                <div class="form-group">
                  <Input className="form-control" type="text" desc="Username" />
                </div>
                <div class="form-group">
                  <Input
                    className="form-control"
                    type="password"
                    desc="password"
                  />
                </div>
                <button type="submit" class="btn ">
                  Login
                </button>
                <div class="row">
                  <div class="col-6 col-sm-6">
                    <a href="#">
                      <p class="text-left pt-2 ml-1">Forgot password?</p>
                    </a>
                  </div>
                  <div class="col-6 col-sm-6">
                    <Link to={"/sigin"}>
                      {" "}
                      <p class="text-right pt-2 mr-1">Sign Up Now</p>
                    </Link>
                  </div>
                </div>{" "}
                <span class="text-center">Or</span>{" "}
                <span class="text-center pt-3">Login Using</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
