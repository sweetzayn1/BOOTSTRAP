$(document).ready(function () {
    function payment (amt){
        let handler = PaystackPop.setup({
        
            key: 'pk_test_c5652f83304d43c2b7d4ed8def158ac4d9338481',
            email: "test@example.com",
             amount:  amt *100,
            ref: '' + Math.floor((Math.random() * 1000000000) + 1),
            
            onClose: function () {
                alert('Please make payment.');
            },
            callback: function (response) {
                let message = 'Payment complete! Reference: ' + response.reference;
                alert(message);

            
            }
            
        });

        handler.openIframe();
    }


    // let handler = PaystackPop.setup({
    //     key: 'pk_test_c5652f83304d43c2b7d4ed8def158ac4d9338481',
    //     email: "test@example.com"
    //      amount: 400 * 100,
    //     ref: '' + Math.floor((Math.random() * 1000000000) + 1),
    //     onClose: function () {
    //         alert('Please make payment.');
    //     },
    //     callback: function (response) {
    //         let message = 'Payment complete! Reference: ' + response.reference;
    //         alert(message);
    //     }
    // });

   

    let data = [
        { image: "./images/buy-icon.png", discount: "50%", amt: 1000, title: "buy" },
        { image: "./images/image 2.png", discount: "30%", amt: 2000, title: "flower" },
        { image: "./images/image.jpeg", discount: "70%", amt: 4000, title: "cart" },


    ]

    data.map((item) => {
        let firstdiv = document.createElement("div")
        firstdiv.setAttribute("class", "col-md-4 col-12")

        let seconddiv = document.createElement("div")
        seconddiv.setAttribute("class", "card")

        firstdiv.appendChild(seconddiv)

        let img = document.createElement("img")
        img.setAttribute("class", "card-img-top")
        img.setAttribute("src", item.image)

        seconddiv.appendChild(img)

        let span = document.createElement("span")
        span.setAttribute("class", "badge rounded-pill text-bg-primary")
        span.innerText = item.discount

        seconddiv.appendChild(span)

        let thirddiv = document.createElement("div")
        thirddiv.setAttribute("class", "card-body")

        seconddiv.appendChild(thirddiv)

        let h4 = document.createElement("h4")
        h4.setAttribute("class", "card-title")
        h4.innerText = item.amt


        let p = document.createElement("p")
        p.setAttribute("class", "card-text")
        p.innerText = item.title


        thirddiv.appendChild(h4)
        thirddiv.appendChild(p)

        let fourthdiv = document.createElement("div")
        fourthdiv.setAttribute("class", "card-footer")

        seconddiv.appendChild(fourthdiv)

        let button = document.createElement("button")
        button.setAttribute("class", "w-100 btn btn-danger")

        button.onclick = function () {
            payment(item.amt)
        }

        fourthdiv.appendChild(button)

        let i = document.createElement("i")
        i.setAttribute("class", "fa-solid fa-shopping-cart")

        button.appendChild(i)


        document.querySelector(".row").append(firstdiv)
    })


})