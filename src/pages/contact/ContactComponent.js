import React, { Component} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import {greeting} from '../../portfolio';
import {Fade} from 'react-reveal';
import './ContactComponent.css';


const blogSection = {
	/* Blogs Section */

	title: "Blogs",
	subtitle:
		"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
	link: "https://www.amitsalunkhe.com/",//"https://www.codewithamit.tk/", //"http://34.68.249.152/",

	avatar_image_path: "blogs_image.svg"
};

const addressSection = {
	title: "Address",
	subtitle:
		"Pune, Maharashtra-411045",
	avatar_image_path: "address_image.svg",
	location_map_link: "https://www.google.co.in/maps/place/Swastik+Madhur+Apartment/@18.5757633,73.7553126,19.04z/data=!4m5!3m4!1s0x0:0xea22017b4c34a794!8m2!3d18.5761036!4d73.7550947?hl=en&authuser=0"
};

const phoneSection = {
    title: "Phone Number",
    subtitle: "+91 9082437230"
}

const ContactData = {
	title: "Contact Me",
    profile_image_path: "Amit_Profile.png",
    description: "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Desktop & Web, React, Android, Cloud and Opensource Development."
};

class Contact extends Component {
    render() {
        return (
					<div className="contact-main">
						<Header />
						<div className="basic-contact">
							<Fade bottom duration={1000} distance="40px">
								<div className="contact-heading-div">
									<div className="contact-heading-img-div">
										<img
											src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="contact-heading-text-div">
										<h1 className="contact-heading-text">
											{ContactData["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{ContactData["description"]}
										</p>
										<SocialMedia />
										<div className="resume-btn-div">
											<Button
												text="See My Resume"
												newTab={true}
												href={greeting.resumeLink}
											/>
										</div>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="blog-heading-div">
									<div className="blog-heading-text-div">
										<h1 className="blog-heading-text">
											{blogSection["title"]}
										</h1>
										<p className="blog-header-detail-text subTitle">
											{blogSection["subtitle"]}
										</p>
										<div className="blogsite-btn-div">
											<Button
												text="Visit My Blogsite"
												newTab={true}
												href={blogSection.link}
											/>
										</div>
									</div>
									<div className="blog-heading-img-div">
										<img
											src={require(`../../assests/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="address-heading-div">
									<div className="contact-heading-img-div">
										<img
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="address-heading-text-div">
										<h1 className="address-heading-text">
											{addressSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{addressSection["subtitle"]}
										</p>
										<h1 className="address-heading-text">
											{phoneSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{phoneSection["subtitle"]}
										</p>
										<div className="address-btn-div">
											<Button
												text="Visit on Google Maps"
												newTab={true}
												href={addressSection.location_map_link}
											/>
										</div>
									</div>
								</div>
							</Fade>
						</div>
						<Footer />
					</div>
				);
    }
}

export default Contact;