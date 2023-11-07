import { useState } from "react";

const Preamdemo = () => {
  const [show, setShow] = useState();

  const [eye, seteye] = useState(false);

  return (
    <>
    
      {/* <div className="col-3">
        <div class="input-group mb-3 col-3">
          <input
            type={eye===false?"password":"text"}
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span
            onClick={() => seteye(!eye)}
            class="input-group-text"
            id="basic-addon1"
          >
            {eye===false?
            <i class="fa fa-eye-slash" aria-hidden="true"></i>:
            <i class="fa fa-eye" aria-hidden="true"></i>}
          </span>
        </div>
      </div> */}

      <div className="col-3">
      <input className="form-control" type="text" /></div>
      <div>
      <i class="fa fa-eye-slash" aria-hidden="true"></i>
      <i class="fa fa-eye" aria-hidden="true"></i>

      </div>
    </>
  );
};
export default Preamdemo;
