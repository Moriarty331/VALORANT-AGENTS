
async function getData(callback)
{
    const response = await fetch("https://valorant-api.com/v1/agents");
    const temp = await response.json();
    const data = temp.data;
    callback(data);
}

function displayData(data)
{
    data.forEach(d => {
        if (d.isPlayableCharacter)
        {
            console.log(d.backgroundGradientColors)
            document.querySelector(".container").innerHTML +=
            `
            <div class="agent">
                
                <div style="background-image: url('${d.background}'); background-color: #${d.backgroundGradientColors[1]};">
                    <img src= "${d.bustPortrait}  " alt="">
                </div>
                <h2 style="background-color: #${d.backgroundGradientColors[1]}">${d.displayName}</h2>
                <ul class="abilities">
                    <li style="background-color: #${d.backgroundGradientColors[3]}";><img src="${d.abilities[0].displayIcon}" alt=""></li>
                    <li style="background-color: #${d.backgroundGradientColors[3]}"><img src="${d.abilities[1].displayIcon}" alt=""></li>
                    <li style="background-color: #${d.backgroundGradientColors[3]}"><img src="${d.abilities[2].displayIcon}" alt=""></li>
                    <li style="background-color: #${d.backgroundGradientColors[3]}"><img src="${d.abilities[3].displayIcon}" alt=""></li>
                </ul>

            </div>
            `
        }
    })

}

getData(displayData);
