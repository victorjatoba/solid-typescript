import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonTwitter extends AbstractShareButton {

    constructor(url: string, clazz: string) {
        super(url, clazz)
    }

    buildLink() {
        return `https://twitter.com/share?url=${this.url}`
    }

}