export default class EventHandler {

    addEventListenerToClass(clazz: string, event: string, fn: any) {
        const elements: any = document.querySelectorAll(clazz)
        for (const e of elements) {
            e.addEventListener(event, fn)
        }
    }
}