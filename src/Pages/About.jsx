import React from 'react';

const About = () => {
    return (
        <div>
        <section class="cusine-section py-5">
        <div class="container">
          <h2 class="fs-1 fw-bold text-center pt-5 pb-5 text-primary">
          Employee Profile
          </h2>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card px-3 py-4 shadow-sm">
                <img
                  src="data:image/jpeg;base64,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"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title fw-bolder">employee Detail</h5>
                  <p class="card-text lead">
                  The Admin Dashboard is where you'll select courses for your employees to take, purchase training units, create accounts and groups for your employees,

                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-3 py-4 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX20vxBMp5m2s4n_ujSetO9kVU8z9Zf9wuQQ&s" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Employee Attendance</h5>
                  <p class="card-text">
                  It simply refers to the presence of employees during designated working hours. In this article, we will explore the significance of tracking attendance, including how it impacts overall productivity and employee performance.

                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-3 py-4 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3E7DH32DLUtuldTqffWqTD6N9Gyc9m9Eiw&s" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Employee Leave</h5>
                  <p class="card-text">
                  The labour law concept of leave, specifically paid leave or, in some countries' long-form, a leave of absence, is an authorised prolonged absence from work, for any reason authorised by the workplace. 

                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-3 py-4 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgJIcWL1IV0d9oPwv8C0oyLZxF6i0s4NYZg&s" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Employee Salary</h5>
                  <p class="card-text">
                  A salary is a form of periodic payment from an employer to an employee, which may be specified in an employment contract. It is contrasted with piece wages.

                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-3 py-4 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQropNIBiHF3NN4oURJ72l5gTAlvUDKOE6OOQ&s" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Employee Provident Fund</h5>
                  <p class="card-text">
                  A provident fund is a government-managed retirement savings plan that helps employees prepare for retirement. Employees and their employers contribute to the plan.

                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-3 py-4 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9Za3YVZROWiAVSqXMdWa6dl5W0vZw-r2mg&s" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Employee Location </h5>
                  <p class="card-text">
                  Definition. Location of workplace refers to the geographic location of the person's workplace for those who have a usual place of work or who work at home.

                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-3 py-4 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy42UigTyd0x6OBOaGPRB5dCfVL7szqUDA8A&s" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Employee Personal Details</h5>
                  <p class="card-text">
                  employee personal information means employment-related personal information about an individual that is collected, used or disclosed solely for the purposes reasonably required in an employment relationship between an organization and an individual; 
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-3 py-4 shadow-sm">
                <img src="https://img.freepik.com/free-vector/store-staff-check-number-products-that-must-be-delivered-customers-during-day_1150-51079.jpg?w=740&t=st=1718295266~exp=1718295866~hmac=80533c56f29e7cf0ad2c6d89b53159b9381fdad357fdf8815cd1c1ec78eb91bf" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Employee Purchasing Unit</h5>
                  <p class="card-text">
                  Employee Unit Purchase Plan means the employee unit purchase plan of the Fund which permits employees of Jazz LP to buy units of the Fund through payroll deductions.

                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-3 py-4 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i82uZvJ8KEDHNo0Pm-YJrO-lMOgaujgm_w&s" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Employee Acounts</h5>
                  <p class="card-text">
                  Employee accounts means  the Fund which permits employees of Jazz LP to buy units of the Fund through payroll deductions.

                  </p>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
                 </div>
    );
};

export default About;