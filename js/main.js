/**In dãy số nguyên tố */
function inDaySNT() {
    // Input
    var soNhapVao = Number(document.querySelector('#nhapSoNguyen').value);
    // Process
    var inKetQua = document.querySelector('#inDaySNT');
    var daySNT = '';
    for (var i = 2; i <= soNhapVao; i++) {
        if (checkSNT(i)) {
            daySNT+=i + ' ';
        }
    }
    // Output
    inKetQua.innerHTML = 'Dãy số nguyên tố từ 1 tới ' + soNhapVao + ' là:' + '<br>' + daySNT;
}

// Function kiểm tra số nguyên tố
function checkSNT(number) {
    var isSNT = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isSNT = false;
            break;
        }
    }
    return isSNT;
}



/**In số chẵn/ lẻ nhỏ hơn 100 */
function inDaySo() {
    // Process
    var dayChan = '';
    var dayLe = '';
    for (var i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            dayChan+=i + ' ';
        } else {
            dayLe+=i + ' ';
        }        
    }
    // Output
    document.querySelector('#inChanLe').innerHTML = 'Dãy số chẵn: ' + dayChan + '<br>' + '<br>' + 'Dãy số lẻ: ' + dayLe;
}



/**Đếm số chia hết cho 3 */
function demSo() {
    // Process
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 === 0) {
            count++;
        }
    }
    // Output
    document.querySelector('#inChia3').innerHTML = 'Số chia hết cho 3 nhỏ hơn 1000 là: ' + count + ' số';
}