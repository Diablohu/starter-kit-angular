export default (app) => {
    app.run(($templateCache) => {
        $templateCache.put('img-figure.html', require(`./img-figure.html`))
    }).component('imgFigure', {
        templateUrl: 'img-figure.html',
        bindings: {
            'src': '<',
            'caption': '<'
        },
        controller: function(){
            // console.log(this)
        }
    })
}
