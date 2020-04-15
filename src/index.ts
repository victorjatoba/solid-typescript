import ShareButton from "./ShareButton";

const shareButton = new ShareButton("www.victorjatoba.com");

shareButton.bind(".btn-twitter", "twitter");
shareButton.bind(".btn-facebook", "facebook");
shareButton.bind(".btn-linkedin", "linkedin");