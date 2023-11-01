module.exports = {
    proxy: 'ck.lndo.site',
    port: 3000, // Choose a port for Browsersync
    files: [
        '**/**/*.css', // Watch your compiled CSS file(s)
        '**/*.php', // Watch PHP files
    ],
};