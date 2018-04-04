import gulp from 'gulp'
import constants from './tasks/constants'
import chalk from 'chalk'
import buildScss from './tasks/build-scss';
const { log } = console

const watchScss = gulp.watch(constants.paths.sass.pattern, (e) => {
    log(`[${chalk.grey(new Date().toLocaleTimeString())}] ${chalk.green(e.type)}: "${chalk.cyan(e.path)}"`)
    buildScss()
})

const build = gulp.parallel(buildScss)

const watch = () => {
    buildScss()
    watchScss
}

export {
    watch,
    build
}
