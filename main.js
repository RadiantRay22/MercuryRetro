

let form = document.querySelector('form');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(`https://mercuryretrogradeapi.com`)
  fetch('https://mercuryretrogradeapi.com' )
		.then(res => res.json())
		.then(data => data.is_retrograde)
		.then(isRetrograde => {
            const mercSection = document.createElement('div')
            const mercParagraph=  document.createElement('p')
            mercSection.classList.add("mystyle");
            mercParagraph.classList.add('parastyle');

            if (isRetrograde){
                mercParagraph.innerHTML = "Yes"
            form.appendChild(mercSection)
            mercSection.append(mercParagraph)
            } else {
                mercParagraph.innerHTML = "No" 
            form.appendChild(mercSection)
            mercSection.append(mercParagraph)
            }
            console.log (isRetrograde)
		})
    })
// m
    /*const mercSection = document.createElement('div')
            const mercParagraph=  document.createElement('p')
            // the isRetrograde will be true/false
            let alert = alert(isRetrograde ? 'YES' : 'NO')
            mercParagraph.innerHTML=alert
            form.append(mercSection)*/