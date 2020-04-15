// Single Responsability

// import ShareButton from "./single_responsability/ShareButton";

// const shareButton = new ShareButton("www.victorjatoba.com");

// shareButton.bind(".btn-twitter", "twitter");
// shareButton.bind(".btn-facebook", "facebook");
// shareButton.bind(".btn-linkedin", "linkedin");

// Open-Closed
import ShareButtonFacebook from "./open-closed/ShareButtonFacebook";
import ShareButtonTwitter from "./open-closed/ShareButtonTwitter";
import ShareButtonLinkedin from "./open-closed/ShareButtonLinkedin";

const facebook = new ShareButtonFacebook("facebook", ".btn-facebook")
facebook.bind();
const twitter = new ShareButtonTwitter("twitter", ".btn-twitter")
twitter.bind();
const linkedin = new ShareButtonLinkedin("linkedin", ".btn-linkedin")
linkedin.bind();