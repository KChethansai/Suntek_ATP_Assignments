const temperatures=[32,35,25,40,38,30,42]
//Temperature above 35
    let fTemp=temperatures.filter(temp=>temp>35)
    console.log(`Temperature above 35: ${fTemp}`)
//Celsius to Farenheit
    let cf=temperatures.map(temp=>((temp)*9/5)+32)
    console.log(`Celsius to Farenheit : ${cf}`)
//Reduce to calculate average temperature
    let avgTemp=temperatures.reduce((acc,temp)=>acc+temp)
    console.log(avgTemp/temperatures.length)
//Find first temp above 40
    const ftemp=temperatures.find(temp=>temp>40)
    console.log(ftemp)

//FindIndex of temperature=28
    const fkey=temperatures.findIndex(temp=>temp===28)
    console.log('The index of temperature 28:',fkey)