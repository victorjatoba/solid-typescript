import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonFacebook extends AbstractShareButton {

    constructor(url: string, clazz: string) {
        super(url, clazz)
    }

    buildLink() {
        return `https://facebook.com/sharer.php?u=${this.url}`
    }

}