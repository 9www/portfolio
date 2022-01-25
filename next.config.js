module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: ["./src"],
        prependData: `@import "./styles/variable.scss";`,
    },
};
