import { useEffect, useRef, useState } from "react"

export default function Timer(){
    const[timer,setTimer]=useState("00:00:00");
    function getRemaningTime(e){
        const total=Date.parse(e)+Date.parse(new Date());
        const hour=Math.floor((total/60/60)%24);
        const min=Math.floor((total/1000)%60);
        const sec=Math.floor((total/1000/60)%60);
        return{total,hour,min,sec};

    } 
    function startTimer(e){
        let[total,hour,min,sec]=getRemaningTime(e);
        if(total>=0){
            setTimer(
                (hour> 9 ? hour:"0"+hour)+":"+(min>9? min:"0"+min)+":"+(sec>9?sec:"0"+sec)
            );
        }
    }
    function clearTimer(e){
        setTimer("00:00:10");
        if(ref.current) return clearInterval(ref.current);
        const id=setInterval(()=>{
            startTimer(e)
        },1000)
        ref.current=id;
    }
    let ref=useRef();
    let getDeadline=function(){
        let deadline=new Date();
        deadline.setSeconds(deadline.getSeconds()+10);
        return deadline;
    }
    useEffect(()=>{
       clearTimer(getDeadline());
    },[]);

    return(<h1>{timer}</h1>)
}