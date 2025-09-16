import React from "react";

const Services = () => {
    return (
        <div className="px-5 py-10">
            <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl text-center font-semibold max-w-[1000px] mx-auto pb-10 sm:py-10">
                Industry-Leading Solutions for your infrastructure
            </h1>
            <p className="text-secondary text-center text-xl">
                We believe in delivering cutting edge innovative technology to all business sectors and private audience.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-20 xl:gap-40 mt-20">
                <div className="">
                    <div className="font-semibold relative">
                        <h4 className="text-primary text-xl sm:text-2xl">Why Choose Us</h4>
                        <h2 className="text-primary text-3xl sm:text-4xl">Find More About Our</h2>
                        <h4 className="text-tomato text-2xl sm:text-3xl">Services</h4>
                        {/* <img src="/images/icons/curved_line_reversed.svg" alt="saucy line" className="absolute top-0 right-0" /> */}
                    </div>
                </div>
                <div className="services-info-card flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left p-10  gap-10 xl:gap-20 rounded-3xl">
                    <div className="w-64">
                        <h5 className="text-2xl text-primary font-semibold">Valuable</h5>
                        <p className="text-secondary leading-8 mt-5">Following each interaction, let us know what you think. Your feedback helps improve your future introductions.</p>
                    </div>
                    <img src="/images/icons/services_info_valuable.svg" alt="valuable" className="w-[120px] lg:w-auto" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 xl:gap-20 sm:py-20">
                <div className="services-info-card flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left p-10  gap-10 xl:gap-20 rounded-3xl">
                    <div className="w-64">
                        <h5 className="text-2xl text-primary font-semibold">Secure</h5>
                        <p className="text-secondary leading-8 mt-5">Applying security fundamentally to protect the connection channel by adding filtering and applying access control to virtual solution.</p>
                    </div>
                    <img src="/images/icons/services_info_secure.svg" alt="secure" className="w-[120px] lg:w-auto" />
                </div>
                <div className="services-info-card flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left p-10  gap-10 xl:gap-20 rounded-3xl">
                    <div className="w-64">
                        <h5 className="text-2xl text-primary font-semibold">Intelligent</h5>
                        <p className="text-secondary leading-8 mt-5">Let our smart approach to making introductions help forge meaningful new industry relationships.</p>
                    </div>
                    <img src="/images/icons/services_info_intelligent.svg" alt="intelligent" className="w-[120px] lg:w-auto" />
                </div>
            </div>
            <h2 className="flex justify-center text-3xl sm:text-5xl text-tomato text-center font-semibold py-10">
                <div className="relative">
                    Consulting Services
                    {/* <img src="/images/icons/curved_green.svg" alt="curved" className="absolute right-[-30px] sm:right-[-80px]" /> */}
                </div>
            </h2>
            <p className="text-center text-secondary max-w-[1200px] mx-auto leading-9">The focus of our IT Consulting Services is to enhance a client’s products and processes by adapting new technologies. Whatever your business objectives, implementing new technologies will affect, to some degree, your existing business processes and systems.</p>
            <div className="flex flex-wrap justify-center sm:gap-16 xl:gap-32 my-20">
                <div className="w-[240px] xl:w-[300px]">
                    <img src="/images/services_infra.png" alt="infra service" className="rounded-3xl" />
                    <div className="text-center p-5">
                        <h5 className="text-primary text-xl font-semibold">IT Infrastructure</h5>
                        <p className="text-secondary mt-5 xl:px-5">IT Infrastructure Technical Services (Design, Implementation, Integration, and Technical Support)</p>
                    </div>
                </div>
                <div className="w-[240px] xl:w-[300px]">
                    <img src="/images/services_security.png" alt="security service" className="rounded-3xl" />
                    <div className="text-center p-5">
                        <h5 className="text-primary text-xl font-semibold">Security</h5>
                        <p className="text-secondary mt-5 xl:px-5">We help you develop strategies and roadmaps aligned to your business, design and build next-generation enterprise security architecture, and develop and run incident response plans</p>
                    </div>
                </div>
                <div className="w-[240px] xl:w-[300px]">
                    <img src="/images/services_cloud.png" alt="cloud service" className="rounded-3xl" />
                    <div className="text-center p-5">
                        <h5 className="text-primary text-xl font-semibold">IT Infrastructure</h5>
                        <p className="text-secondary mt-5 xl:px-5">We provide a tailored set of Cloud Consulting Services which guide you, design, migrate, manage your cloud services/applications.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;
