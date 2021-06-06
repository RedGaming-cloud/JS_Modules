console.log('script A done');

loadScript('/HW2/scripts/scriptB.js', loadScript('/HW2/scripts/scriptC.js', () => { }))
//Модуль В зависит от С, загружается сначала С, потом В

loadScript('/HW2/scripts/scriptC.js', loadScript('/HW2/scripts/scriptB.js', () => { }))
//Модуль C зависит от B, загружается сначала B, потом C
