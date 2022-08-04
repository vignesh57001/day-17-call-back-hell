let ele=document.createElement("div")
ele.classList.add("container")
let count=document.getElementById("spa")
count.innerHTML=10
document.body.append(ele)
let time=10;
setTimeout(()=>{
    time=time-1;
    count.innerHTML=time
    setTimeout(()=>{
        time=time-1;
        count.innerHTML=time
        setTimeout(()=>{
            time=time-1;
            count.innerHTML=time
            setTimeout(()=>{
                time=time-1;
                count.innerHTML=time
                setTimeout(()=>{
                    time=time-1;
                    count.innerHTML=time
                    setTimeout(()=>{
                        time=time-1;
                        count.innerHTML=time
                        setTimeout(()=>{
                            time=time-1;
                            count.innerHTML=time
                            setTimeout(()=>{
                                time=time-1;
                                count.innerHTML=time
                                setTimeout(()=>{
                                    time=time-1;
                                    count.innerHTML=time
                                    setTimeout(()=>{
                                        count.innerHTML="HAPPY INDEPENDENCE DAY"


                                    },1000)
                                  

                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
  
},1000)