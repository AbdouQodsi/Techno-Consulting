import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Hero3 from '../components/hero/hero';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import EmpoweringSuccess from '../components/EmpoweringSuccess/EmpoweringSuccess';
import ConsultingService from '../components/ConsultingService/ConsultingService';
import BusinessTestimonial from '../components/BusinessTestimonial/BusinessTestimonial';
import BusinessBlogSection from '../components/BusinessBlogSection/BusinessBlogSection';
import BusinessContact from '../components/BusinessContact/BusinessContact';
import BusinessFooter from '../components/BusinessFooter/BusinessFooter';
import Scrollbar from '../components/scrollbar/scrollbar';


const HomePage3 = () => {

    return (
        <Fragment>
            <div className='index_business_consulting'>
                <main className="page_content s2">
                    <Header />
                    <Hero3 />
                    <PartnerSection />
                    <EmpoweringSuccess />
                    <ConsultingService />
                    <BusinessTestimonial />
                    <BusinessBlogSection />
                    <BusinessContact />
                    <BusinessFooter />
                    <Scrollbar />
                </main>
            </div>
        </Fragment>
    )
};
export default HomePage3;