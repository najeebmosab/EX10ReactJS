export default function NewComponent (props){
    
    const con =()=>{
        console.log(props?.inputRefEmail?.current.value)
        props?.newInputValue("shhady");
    }
    return<>
    <button onClick={con}>click</button></>
}