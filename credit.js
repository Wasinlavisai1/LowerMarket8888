
function loadCredit() {
    let credit = localStorage.getItem('credit');
    if (credit === null) {
        credit = 0;
        localStorage.setItem('credit', credit);
    }
    document.getElementById('credit-display').innerText = `เครดิต: ${credit} บาท`;
}

function deductCredit(amount) {
    let credit = parseInt(localStorage.getItem('credit') || '0');
    if (credit >= amount) {
        credit -= amount;
        localStorage.setItem('credit', credit);
        alert('ซื้อสินค้าสำเร็จ!');
        loadCredit();
    } else {
        alert('เครดิตไม่พอ กรุณาติดต่อแอดมินเติมเครดิต');
    }
}

window.onload = function() {
    if (document.getElementById('credit-display')) {
        loadCredit();
    }
};
