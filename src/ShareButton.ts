export default class ShareButton {
    url: string

    constructor(url: string) {
        this.url = url
    }

    bind(clazz: string, socialNetwork:string) {
        let link: string

        if (socialNetwork == "twitter") {
            link = `https://twitter.com/share?url=${this.url}`
        }
        if (socialNetwork == "facebook") {
            link = `https://facebook.com/sharer.php?u=${this.url}`
        }
        if (socialNetwork == "linkedin") {
            link = `https://linkedin.com/shareArticle?url=${this.url}`
        }

        const elements: any = document.querySelectorAll(clazz)
        for (const e of elements) {
            e.addEventListener("click", () => window.open(link))
        }
    }
}