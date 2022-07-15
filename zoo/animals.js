async function get(amount) {
    let responses = []
    
    for (i = 0; i < amount; i++) {
        let res = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
        let body = await res.json()
        responses.push(body)
    }
    
    return responses
}

function sortByType(animals) {
    return {
        'mammals': animals.filter(a => a.animal_type === 'Mammal'),
        'birds': animals.filter(a => a.animal_type === 'Bird'),
        'reptiles': animals.filter(a => a.animal_type === 'Reptile'),
        'amphibians': animals.filter(a => a.animal_type === 'Amphibian'),
        'fish': animals.filter(a => a.animal_type === 'Fish')
    }

}

function display(type, byType) {
    let groupDiv = document.createElement('div', type)
    groupDiv.setAttribute('class', type)
    groupDiv.innerHTML = type
    let group = byType[type]
    let elements = group.map((animal) => {
        let element = document.createElement('p', animal.name)
        element.innerHTML = animal.name
        element.setAttribute('class', animal.name)
        return element
    })
   
    elements.forEach(el => groupDiv.appendChild(el))

    console.log(groupDiv)
    let root = document.getElementById('root')
    root.appendChild(groupDiv)
}


async function main() {
    try {
        let animals = await get(20)
        var byType = sortByType(animals)
        
        for(type in byType) display(type, byType)


    } catch (error) {
       console.log('error') 
    }
}

main()