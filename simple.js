document.querySelector("button").addEventListener("click", function(){

fetch("http://www.floatrates.com/daily/usd.json")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response.crc.rate)//CostaRica
        console.log(response.xof.rate)//WestAfrica
        console.log(response.hkd.rate)//hongkong
        console.log(response.jpy.rate)//japan
        document.querySelector(".value").innerHTML = Math.ceil(response.crc.rate)
        document.querySelector(".height").innerHTML =Math.ceil(response.xof.rate)
        document.querySelector(".weight").innerHTML = Math.ceil(response.hkd.rate)
        document.querySelector(".pokeDex").innerHTML = Math.ceil(response.jpy.rate)
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
    })
