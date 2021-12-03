class API{

    urlStandard = "https://api.hgbrasil.com/weather?format=json-cors&array_limit=7&fields=only_results,temp,city_name,forecast,max,min,date,description,weekday&key=<key>"

    urlSearch = "https://api.hgbrasil.com/weather?format=json-cors&array_limit=7&fields=only_results,temp,city_name,forecast,max,min,date,description,weekday&key=<key>&city_name="

    getStandardCity(){  
        $['getJSON'](this.urlStandard, (response) => {
            this.setPage(response)
        });
    }

    getSearchCity(city){
        $['getJSON'](this.urlSearch + city, (response) => {
            this.setPage(response)
        }); 
    }

    setPage(response){
        adicionaEventosCampos()
        setClimaSemanal(response)
    }
}