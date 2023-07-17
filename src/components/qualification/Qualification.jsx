import React, {useState} from 'react';
import './qualification.css';

function Qualification() {

	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	}

	return (
		<section className="qualification section">
			<h2 className="section_title">
				Qualification
			</h2>
			<span className="section_subtitle">My personel journey</span>

			<div className="qualification_container container">
				<div className="qualification_tabs">
					<div className={toggleState === 1 ? "qualification_button qualification_active button--flex": "qualification_button button--flex"}
					onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap qualification_icon"></i> Education
					</div>

					<div className={toggleState === 2 ? "qualification_button qualification button--flex": "qualification_button button--flex"}
					onClick={() => toggleTab (2)}
					>
						<i className="uil uil-briefcase-alt qualification_icon"></i>
						Experience
					</div>
				</div>



				<div className="qualification_sections">
					<div className={toggleState === 1 ? "qualification_content qualification_content_active" : "qualification_content"}>

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
								<span className="qualification_line"></span>
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
									<i className="uil uil-calendar-alt"></i> 2020 - 2021
								</div>
							</div>
						</div>

						<div className="qualification_data">
							<div>
								<h3 className="qualification_title">Master in Coding</h3>
								<span className="qualification_subtitle">DEVF - Bootcamp</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i> 2023 - 2023
								</div>
							</div>

							<div>
								<span className="qualification_rounder"></span>
								<span className="qualification_line"></span>
							</div>
						</div>
						
					</div>


					<div className={toggleState === 2 ? "qualification_content qualification_content_active" : "qualification_content"}>

						<div className="qualification_data">
							<div>
								<h3 className="qualification_title">Web Developer</h3>
								<span className="qualification_subtitle">Freelance</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i> 2016 - 2019
								</div>
							</div>

							<div>
								<span className="qualification_rounder"></span>
								<span className="qualification_line"></span>
							</div>
						</div>

						<div className="qualification_data">
							<div></div>
							<div>
								<span className="qualification_rounder"></span>
								<span className="qualification_line"></span>
							</div>

							<div>
								<h3 className="qualification_title">Freelance</h3>
								<span className="qualification_subtitle">DEVF - Bootcamp</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i> 2020 - 2021
								</div>
							</div>
						</div>

						<div className="qualification_data">
							<div>
								<h3 className="qualification_title">Backend</h3>
								<span className="qualification_subtitle">Dino Mx</span>
								<div className="qualification_calendar">
									<i className="uil uil-calendar-alt"></i> 2021 - 2022
								</div>
							</div>

							<div>
								<span className="qualification_rounder"></span>
								<span className="qualification_line"></span>
							</div>
						</div>
						
					</div>


				</div>

			</div>
		</section>
	)
}

export default Qualification;