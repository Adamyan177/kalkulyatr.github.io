let s=false







document.getElementById("ii1").addEventListener("click",()=>{
document.getElementById("d21").value+=1
s=true
})

document.getElementById("ii2").addEventListener("click",()=>{
    document.getElementById("d21").value+=2
    s=true
    })

    document.getElementById("ii3").addEventListener("click",()=>{
        document.getElementById("d21").value+=3
        s=true
        })


        document.getElementById("ii4").addEventListener("click",()=>{
            document.getElementById("d21").value+=4
            s=true
            })

            document.getElementById("ii5").addEventListener("click",()=>{
                document.getElementById("d21").value+=5
                s=true
                })

                document.getElementById("ii6").addEventListener("click",()=>{
                    document.getElementById("d21").value+=6
                    s=true
                    })

                    document.getElementById("ii7").addEventListener("click",()=>{
                        document.getElementById("d21").value+=7
                        s=true
                        })

                        document.getElementById("ii8").addEventListener("click",()=>{
                            document.getElementById("d21").value+=8
                            s=true
                            })


                            document.getElementById("ii9").addEventListener("click",()=>{
                                document.getElementById("d21").value+=9
                                s=true
                                })


                                document.getElementById("ii0").addEventListener("click",()=>{
                                    document.getElementById("d21").value+=0
                                    })

                                    document.getElementById("ii+").addEventListener("click",()=>{
                                        if(s==true){document.getElementById("d21").value+="+" ;s=false}
                                        })
                                    

                                        document.getElementById("ii-").addEventListener("click",()=>{
                                            if(s==true){document.getElementById("d21").value+="-" ;s=false}
                                            })

                                            document.getElementById("iic").addEventListener("click",()=>{
                                                document.getElementById("d21").value=""
                                                })


                                                document.getElementById("ii*").addEventListener("click",()=>{
                                                    document.getElementById("d21").value+="*"
                                                    })


                                                    document.getElementById("ii=").addEventListener("click",()=>{
                                                        document.getElementById("d21").value=eval( document.getElementById("d21").value)
                                                        })




                                                    document.getElementById("ii/").addEventListener("click",()=>{
                                                        document.getElementById("d21").value+="/"
                                                        })


