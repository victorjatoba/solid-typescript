import EventHandler from "./../single_responsability/EventHandler";

export default abstract class AbstractShareButton {
    url: string
    eventHandler: EventHandler
    clazz: string

    constructor(url: string, clazz: string) {
        this.url = url
        this.clazz = clazz
        this.eventHandler = new EventHandler()
    }

    abstract buildLink(): string

    bind() {
        const link = this.buildLink()
        this.eventHandler.addEventListenerToClass(this.clazz, "click", () => window.open(link));
    }

}