export default () => {
    // Config can be loaded through process.env, but is actually only available during compilation.
    // All env variables must start with REACT_APP_ to be included.

    return {
        ROUTE_PREFIX: '/'
    }
}