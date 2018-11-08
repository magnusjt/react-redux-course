export default ({reduxFirstRouter}) => {
    const load = async () => {
        // Anything you wish to load when the app starts goes here
    }

    return () => load().catch().then(() => {
        reduxFirstRouter.initialDispatch()
    })
}