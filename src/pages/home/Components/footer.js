import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor:'#0c3f17'}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 text-white'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                Fumicon Services (PVT).LTD.
               </h6>
              <p>
                The leading pest control company in Pakistan, Serving since - 1983. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>OUR SERVICES</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Service 1
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Service 2
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Service 3
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Service 4
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Our Clients
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Franchise
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Promotions & Offers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Insurance
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                3rd Floor,105-C, B-Comm. Area PHASE-II, DHA, Karachi.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@fumicon.com.pk
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 0309-888-9-666
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 0309-888-9-222
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2022 FUMICON SERVICES - All Rights Reserved - Powered by.
        <a style={{color:'#bd9500'}} className='text-reset fw-bold' href='https://skysoftsol.co/'>
        <span style={{color:'#ef6900'}}>Skysoft Solution</span>
        </a>
      </div>
    </MDBFooter>
  );
}