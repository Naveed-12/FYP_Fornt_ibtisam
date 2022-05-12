import house from '../images/dha-city.png'
function House_img(props) {
    return (
        <div className="house_img">
            <img src={props.SelectedProprty.image} alt="house img"/>
        </div>
    )
}

export default House_img
