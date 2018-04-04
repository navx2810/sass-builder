const paths = {
    sass: {
        pattern: './scss/**.scss',
        custom: './scss/custom.scss',
        out: './dist/css'
    },
    ts: {
        core: {
            pattern: './ts/global/**.ts',
            index: './ts/global/index.ts',
            out: './dist/js'
        },
        custom: {
            pattern: './ts/custom/**.ts',
            out: './dist/js'
        }
    }
}

module.exports = {
    paths
}