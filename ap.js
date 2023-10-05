const history = (props) => {
    // const{story} = props
    const{type,sentence} = props

    return (
        <div>
            <h2>{type}</h2>
            <p>{sentence}</p>
        </div>
    )

}
const ap = (
    <div>
        <h1>Andhra Pradesh</h1>

    
    </div>

)

ReactDOM.render(ap,document.getElementById("root"))

        /* <history story = {type:"Vedic",sentence:"Aitareya Brahmana of the Rig Veda"}/> */
        /* <history story = {type:"Early History",sentence:"The Assaka Mahajanapada, one of the sixteen Vedic Mahajanapadas, included Andhra, Maharashtra and Telangana"}/> */
