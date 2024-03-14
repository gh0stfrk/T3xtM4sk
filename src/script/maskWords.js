function maskText(text) {
    const maskMap = {
        'a': '4',
        'e': '3',
        'i': '!',
        'o': '0',
        's': '$'
    }
    return text.split('').map((char) => {
        return maskMap[char] || char
    }).join('')
}

function unmaskText(text){
    const unmaskMap = {
        '4': 'a',
        '3': 'e',
        '!': 'i',
        '0': 'o',
        '$': 's'
    }
    return text.split('').map((char) => { 
        return unmaskMap[char] || char
    }).join('')
}


export {maskText, unmaskText}