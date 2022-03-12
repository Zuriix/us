// ==UserScript==
// @name         Amazon has dumb bars
// @version      0.1
// @description  Get's rid of amazon's package tracking bars and replaces them with numbers out of 100 lol
// @author       Zuri
// @match        https://www.amazon.com/progress-tracker/package/*
// ==/UserScript==

(function() {
    'use strict';
    let bars = document.querySelector('.pt-status-milestones').children

    let data = {
        "ready" : bars[0].getAttribute("data-percent-complete"),
        "order" : bars[1].getAttribute("data-percent-complete"),
        "shipping" : bars[2].getAttribute("data-percent-complete"),
        "delivery" : bars[3].getAttribute("data-percent-complete"),
    }

    if(data.ready == 100){
        bars[0].innerHTML = 'ORDER PLACED'
        bars[1].innerHTML = data.order == 100 ? "ORDER COMPLETE" : `Order: ${data.order}/100`
        bars[2].innerHTML = data.shipping == 100 ? "SHIPPING COMPLETE" : `Shipping: ${data.shipping}/100`
        bars[3].innerHTML = data.delivery == 100 ? "DELIVERY COMPLETE" : `Delivery: ${data.delivery}/100`
    } else {
        bars[0].innerHTML = `ORDER IS PENDING (${data.ready}%)`
    }
})();
