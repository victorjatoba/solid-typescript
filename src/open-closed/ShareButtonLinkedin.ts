import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonLinkedin extends AbstractShareButton {

    constructor(url: string, clazz: string) {
        super(url, clazz)
    }

    buildLink() {
        return `https://linkedin.com/shareArticle?url=${this.url}`
    }

}