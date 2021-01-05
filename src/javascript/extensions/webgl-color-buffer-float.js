const { gl } = require('../native-gl')

class WebGLColorBufferFloat {
    constructor() {
        this.RGBA32F_EXT = 0x8814
        this.RGB32F_EXT = 0x8815
    }
}

function getWebGLColorBufferFloat(context) {
    let result = null
    const exts = context.getSupportedExtensions()

    if (exts && exts.indexOf('WEBGL_color_buffer_float') >= 0) {
        result = new WebGLColorBufferFloat()
    }

    return result
}

module.exports = { getWebGLColorBufferFloat, WebGLColorBufferFloat }
