export default function Box(props){

    function handleClick(){
        let box_containers = document.querySelectorAll(".box_container")
        box_containers[props.data.id-1].classList.toggle("on")   
    }

    return(
        <button className="box_container" onClick={handleClick}>

        </button>
    )
}