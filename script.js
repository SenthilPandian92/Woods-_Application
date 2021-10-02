let letters = /^[A-Za-z]+$/;

const productData = {
    p1: {
        productName: "Foot Rest ",
        rate: 50,
        displayId: "Quant1"
    },
    p2: {
        productName: "Rocking Chair",
        rate: 20,
        displayId: "Quant2"
    },
    p3: {
        productName: "Side Table",
        rate: 40,
        displayId: "Quant3"
    },
    p4: {
        productName: "Closet",
        rate: 80,
        displayId: "Quant4"
    }
};

const userSelectedProduct = [];

function ProdQty(productId) {

    var Quantity = parseInt(prompt("Please enter the Quantity"));
    if (Number.isNaN(Quantity) || Quantity == "" || Quantity == null) {
        Quantity = parseInt(prompt("Please enter the Quantity"));
    } else {
        productData[productId]['quantity'] = Quantity;
        productData[productId]['amount'] = Quantity * productData[productId]['rate'];
        const userSelected = productData[productId];
        userSelectedProduct.push(userSelected);
        document.getElementById(userSelected.displayId).innerHTML = `x ${Quantity}`;
    }
}

function amount(item) {
    return item.amount;
}

function sum(prev, next) {
    return prev + next;
}



function CheckOut() {
    var Name = prompt("Please enter Your Name");
    if (Name.match(letters)) {

        document.getElementById("Cname").innerHTML = `Customer name: ${Name}`;
        const total = userSelectedProduct.map(amount).reduce(sum);
        const hst = ((13 / 100) * total).toFixed(2);
        const finalAmont = parseInt(total) + parseFloat(hst);
        const hstToTotal = [];
        hstToTotal.push({ label: "HST @ 13%", value: hst });
        hstToTotal.push({ label: "Total", value: finalAmont });

        var table = document.createElement('table');
        for (var i = 0; i < userSelectedProduct.length; i++) {

            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');

            var p = document.createTextNode(userSelectedProduct[i]['productName']);
            var q = document.createTextNode(userSelectedProduct[i]['quantity']);
            var a = document.createTextNode('$' + (userSelectedProduct[i]['amount']).toFixed(2));

            td1.appendChild(p);
            td2.appendChild(q);
            td3.appendChild(a);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        }


        for (let index = 0; index < hstToTotal.length; index++) {
            var tr = document.createElement('tr');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');
            td4.setAttribute("colspan", 2);
            var lab = document.createTextNode((hstToTotal[index]['label']));
            var val = document.createTextNode('$'+(hstToTotal[index]['value']));
            td4.appendChild(lab);
            td5.appendChild(val);
            tr.appendChild(td4);
            tr.appendChild(td5);
            table.appendChild(tr);
        }


        document.body.appendChild(table);
    } else {
        CheckOut();
    }
}