const Game = (function(url){

    //Configuratie en state waarden
    let configMap = {
        apiUrl: url
    }

    console.log('hallo, vanuit een module');
    // Private function init
    const privateInit = function(callback){
        console.log(configMap.apiUrl);

        callback();
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit,
    }

})('/api/url')


Game.Reversi = (function() {
    let _configMap = {};

    const privateInit = function(){
        console.log('hallo, vanuit module Reversi');
    }

    return {
        init: privateInit
    }
})()

Game.Data = (function() {
    let configMap = {
        mock: [
            {
                url: 'api/Spel/Beurt',
                data: 0
            }
        ]
    }

    let stateMap = { environment: 'development' };

    const get = function(url){

        // const getMockData = function(url){
        //     //filter mock data, configMap.mock ... oei oei, moeilijk moeilijk :-)
        //     const mockData =
        //
        //     return new Promise((resolve, reject) => {
        //         resolve(mockData);
        //     });
        // }

        return getMockData(url);
    }

    const privateInit = function(environment){
        stateMap.environment = environment;

        if (stateMap.environment === 'production') {

        } else if (stateMap.environment === 'development') {
            get(configMap.mock.url);
        } else {
            new Error('Oeps er is geen environment')
        }
    }

    return {
        init: privateInit,
    }
})()

Game.Model = (function() {
    let configMap = {};

    const privateInit = function(){
    }

    return {
        init: privateInit,
    }
})()


