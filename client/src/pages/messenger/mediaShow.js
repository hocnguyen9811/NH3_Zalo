import "./img.css";
export const imageShow = (src, theme) => {
    return(
        <img src={src} alt="images" className="img-thumbnail"
        style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
    )
}
export const imageShow1 = (src, theme) => {
    return(
        <img src={src} alt="images" className="img-thumbnail1"
        style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
    )
}
export const imageShow2 = (src, theme) => {
    return(
        <img src={src} alt="images" className="img-thumbnail1"
        style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
    )
}
export const imageShow3 = (src, theme) => {
    return(
        <img src={src} alt="images" className="img-thumbnail1"
        style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
    )
}

export const videoShow = (src, theme) => {
    return(
        <video controls src={src} alt="images" className="img-thumbnail"
        style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
    )
}