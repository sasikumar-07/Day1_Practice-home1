function Task()
{
    const name1="Kabil";
    const name2="Kabil";

    const object1={name:"Kabil"}
    const object2={name:"Kabil"}

    let namex=(name1===name2)?'True':'False'
    let namey=(object1===object2)?'True':'False'

    const comparep=()=>{alert(namex)}
    const comparer=()=>{alert(namey)}

    return(
        <div>
            <button onClick={comparep}>compare primitive</button>
            <br></br>
            <button onClick={comparer}>compare reference</button>
        </div>
    )
}
ReactDOM.render(<Task/>,document.getElementById("mydiv"))