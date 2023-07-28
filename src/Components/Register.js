const Register = () => {
    return (
      <>
      <br></br>
        <div class="container">
    <div class="row">
        <div class="col-md-4 col-sm-12"></div>
        <div class="col-md-4 col-sm-12">
        <div class="col">
          <div class="card bg-secondary">
            <div class="card-body">
              <h5 class="card-title">Register</h5>
              <form>
                <div class="mb-3">
                  <label for="exampleName1" class="form-label">Name</label>
                  <input type="text" class="form-control" id="exampleName1" aria-describedby="nameHelp"/>
                  <div id="nameHelp" class="form-text">Your name will be visible to public.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Address</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputphone" class="form-label">Phone no</label>
                    <input type="email" class="form-control" id="exampleInputPhone no" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>  
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">login</button>
              </form>
            </div>
          </div>
        </div>
        </div>
    </div>
   </div>
      </>
    );
  };
  
  export default Register;
  