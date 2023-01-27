import React from 'react'

function Services() {
	return (
		<section className="services section" id="services">
			<h2 className="section_title">Services</h2>
			<span className="section_subtitle">What i offer</span>

			<div className="services_container container grid">
				<div className="services_content">
					<div>
						<i className="uil uil- services_icon"></i>
						<h3 className="services_title"></h3>
					</div>

					<span className="services_button">View More <i className="uil uil-arrow-right services_button_icon"></i></span>

					<div className="services_modal">
						<div className="services_modal_content">
							<i className="uil uil-times services_modal_close"></i>
							<h3 className="services_modal_title"></h3>
							<p className="services_modal_description">Service with more than 1 year of experience. Providing quality work to clients and companies.</p>

							<ul className="services_modal_services grid">
								<li className="services_modal_service">
									<i className="uil uil-check-circle services_modal_icon"></i>
									<p className="services_modal_info">
										I develop the user interface
									</p>
								</li>
								<li className="services_modal_service">
									<i className="uil uil-check-circle services_modal_icon"></i>
									<p className="services_modal_info">
										Development Custom software .
									</p>
								</li>
								<li className="services_modal_service">
									<i className="uil uil-check-circle services_modal_icon"></i>
									<p className="services_modal_info">
										Web page development.
									</p>
								</li>
								<li className="services_modal_service">
									<i className="uil uil-check-circle services_modal_icon"></i>
									<p className="services_modal_info">
										I position your company brand. SEO
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services;