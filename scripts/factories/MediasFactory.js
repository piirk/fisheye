class MediasFactory {
    constructor(data, type) {
        if (type === 'image') {
            return new Media(data, data.image, type)
        } else if (type === 'video') {
            return new Media(data, data.video, type)
        } else {
            throw 'MediasFactory: Unknown type format'
        }
    }
}
