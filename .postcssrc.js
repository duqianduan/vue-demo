module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                 "> 1%",
                "last 2 versions",
                "not ie <= 8",
                "Android >= 4.0"
            ]
        })
    ]
}
