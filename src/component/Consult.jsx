import React from 'react'

export default function Consult() {
  return (
    <div className='container-fluid'>
      <form>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input type="text" id="firstName" className="form-control form-control-lg" />
                <label className="form-label" for="firstName" style={{ marginLeft: "0px" }}>First Name</label>
                {/* <div className="form-notch">
                  <div className="form-notch-leading" style={{ width: 9 + "px" }}></div>
                  <div className="form-notch-middle" style={{ width: "70.4px" }}></div>
                  <div className="form-notch-trailing"></div>
                </div> */}
              </div>

            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input type="text" id="lastName" className="form-control form-control-lg" />
                <label className="form-label" for="lastName" style={{ marginLeft: "0pX" }}>Last Name</label>
                <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "69.6px" }}></div><div className="form-notch-trailing"></div></div></div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4 d-flex align-items-center">

                <div className="form-outline datepicker w-100">
                  <input type="text" className="form-control form-control-lg" id="birthdayDate" />
                  <label for="birthdayDate" className="form-label" style={{ marginLeft: "0p" }}>Birthday</label>
                  <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "55.2px" }}></div><div className="form-notch-trailing"></div></div></div>

              </div>
              
              <div className="col-md-6 mb-4">

                <h6 className="mb-2 pb-1">Gender: </h6>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" checked="" />
                  <label className="form-check-label" for="femaleGender">Female</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
                  <label className="form-check-label" for="maleGender">Male</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="option3" />
                  <label className="form-check-label" for="otherGender">Other</label>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                  <input type="email" id="emailAddress" className="form-control form-control-lg" />
                  <label className="form-label" for="emailAddress" style={{ marginLeft: "0px" }}>Email</label>
                  <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "40px" }}></div><div className="form-notch-trailing"></div></div></div>

              </div>
              <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                  <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                  <label className="form-label" for="phoneNumber" style={{ marginLeft: "0px" }}>Phone Number</label>
                  <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "92.8px" }}></div><div className="form-notch-trailing"></div></div></div>

              </div>
            </div>

            <div className="row">
              <div className="col-12">

                <div id="select-wrapper-884650" className="select-wrapper"><div className="form-outline"><input className="form-control select-input active" type="text" role="listbox" aria-multiselectable="false" aria-disabled="false" aria-expanded="false" readonly="true" /><label className="form-label select-label active" style={{ marginLeft: "0px" }}>Choose option</label><span className="select-arrow"></span><div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "90.4px" }}></div><div className="form-notch-trailing"></div></div><div className="form-label select-fake-value">Subject 1</div></div><select className="select form-control-lg select-initialized">
                  <option value="1" disabled="">Choose option</option>
                  <option value="2">Subject 1</option>
                  <option value="3">Subject 2</option>
                  <option value="4">Subject 3</option>
                </select></div>


              </div>
            </div>

            <div className="mt-4 pt-2">
              <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
            </div>
          </div>
        </div>

      </form >
    </div>
  )
}
