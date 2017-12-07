$(function() {
    
    let portToWtpa = $("#portfolio-to-WTPA")
    let wtpaToPort = $("#WTPA-to-portfolio")
    let portToRyde = $("#portfolio-to-ryde")
    let rydeToPort = $("#ryde-to-portfolio")
    let portToDrag = $('#portfolio-to-dragonfighter')
    let dragToPort = $('#dragonfighter-to-portfolio')
    let portToSol = $('#portfolio-to-solitaire')
    let solToPort = $('#solitaire-to-portfolio')
    let portfolio = $("#portfolio")
    let wtpa = $("#WTPA")
    let ryde = $("#ryde")
    let dragonfighter = $('#dragonfighter')
    let solitaire = $('#solitaire')

    wtpaToPort.click(function() {
        changeView(wtpa, portfolio)
    })

    portToWtpa.click(function() {
        changeView(portfolio, wtpa)
    })

    portToRyde.click(function() {
        changeView(portfolio, ryde)
    })

    rydeToPort.click(function() {
        changeView(ryde, portfolio)
    })

    portToDrag.click(function() {
        changeView(portfolio, dragonfighter)
    })

    dragToPort.click(function() {
        changeView(dragonfighter, portfolio)
    })

    portToSol.click(function() {
        changeView(portfolio, solitaire)
    })

    solToPort.click(function() {
        changeView(solitaire, portfolio)
    })

    function changeView(oldView, newView) {
        oldView.css("display", "none")
        newView.css("display", "block")
    }

})