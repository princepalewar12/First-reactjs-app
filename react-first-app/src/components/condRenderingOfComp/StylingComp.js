import './stylingComp.css'
const StylingComp = () =>{

    const test = {
        color: "blue",
        fontSize: "50px"
    }

    return(
        <>
            {/* Applying Inline Css  */}
            <h1 style={{color: "red"}}>Styling component</h1>
            {/* Internal Css */}
            <h2 style = {test}>Styling component using Internal css</h2>
            {/* External CSS  */}
            <h3 className="StyleComp">Styling using external Css</h3>
        </>
    )
}
export default StylingComp