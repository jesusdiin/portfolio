import React from 'react';
import './qualification.css';

function Qualification() {
	return (
		<section className="qualification section">
			<h2 className="section_title">
				Qualification
			</h2>
			<span className="section_subtitle">My personel journey</span>

			<div className="qualification_container container">
				<div className="qualification_tabs">
					<div className="qualification_button qualification_active button--flex">
						<i className="uil uil-graduation-cap qualification_icon"></i> Education
					</div>

					<div className="qualification_button button--flex">
						<i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
						Experience
					</div>

					<div className="qualification_sections">
						<div className="qualification_content">
							<div className="qualification_data">
								<div>
									<h3 className="qualification_title">Information Technology - TICS</h3>
									<span className="qualification_subtitle">COBAO - Institute</span>
									<div className="qualification_calendar">
										<i className="uil uil-calendar-alt"></i> 2016 - 2019
									</div>
								</div>

								<div>
									<span className="qualification_rounder"></span>
									<div className="qualification_line"></div>
								</div>
							</div>

							<div className="qualification_data">
								<div></div>
								<div>
									<span className="qualification_rounder"></span>
									<span className="qualification_line"></span>
								</div>

								<div>
									<h3 className="qualification_title">Professional in Coding</h3>
									<span className="qualification_subtitle">DEVF - Bootcamp</span>
									<div className="qualification_calendar">
										<i className="uil uil-calendar-alt"></i> 2022 - 2022
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>

		</section>
	)
}

export default Qualification;