import React from 'react';
import './stylesheet.css';
import Image from 'next/image';

const CompanyClients = () => {

  return (
    <>
      {/* <!-- ======= Clients Section ======= --> */}
      <section id="clients" className="clients clients">
        <div className="container">

          <div className="row">

            <div className="col-lg-2 col-md-4 col-6">
              <Image src="/homepage/companyclients/cybervista.png" width={100} height={50} className="clientsImage" alt="cybervista" data-aos="zoom-in" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image src="/homepage/companyclients/dylanstours.png" width={100} height={50} className="clientsImage" alt="dylanstours" data-aos="zoom-in" data-aos-delay="100" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image src="/homepage/companyclients/ecopulse.png" width={100} height={50} className="clientsImage" alt="" data-aos="zoom-in" data-aos-delay="200" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image src="/homepage/companyclients/hypernova.png" width={100} height={50} className="clientsImage" alt="hypernova" data-aos="zoom-in" data-aos-delay="300" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image src="/homepage/companyclients/luminatech.png" width={100} height={50} className="clientsImage" alt="luminatech" data-aos="zoom-in" data-aos-delay="400" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image src="/homepage/companyclients/verifiedx.png" width={100} height={50} className="clientsImage" alt="verifiedx" data-aos="zoom-in" data-aos-delay="500" />
            </div>

          </div>

        </div>
      </section>
      {/* </section><!-- End Clients Section --> */}
    </>
  );
}

export default CompanyClients;