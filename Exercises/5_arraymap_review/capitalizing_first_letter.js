const names = ["lucas", "sus", "gus"]

console.log(
    names.map(function(element){
        return(
            element.replace(element[0], element[0].toUpperCase())
        )
    })
)
