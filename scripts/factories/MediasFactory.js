/**
 * Factory : Medias
 */
class MediasFactory {
    /**
     * 
     * @param {Object} data 
     * @param {String} type 
     * @returns a new Media Object
     */
    constructor(data, type) {
        if (type === 'image') {
            return new Media(data, data.image, type)
        } else if (type === 'video') {
            return new Media(data, data.video, type)
        } else {
            throw 'Unknown type format'
        }
    }
 }