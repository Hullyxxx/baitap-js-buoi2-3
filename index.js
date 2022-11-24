/**
 * Mô hình 3 khối: bài 1
 * Input: Số ngày làm
 * Process: Lấy lương nhân cho số ngày làm
 * Output: Tiền lương của nhân viên tương ứng số ngày làm
 */

function tinhTien() {
   var moneyInput =  document.getElementById("money_input")
   var moneyOutput = moneyInput.value * 100000
   document.getElementById('money_output').value = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(moneyOutput)
}

/**
 * Mô hình 3 khối: bài 2
 * Input: 5 số thực
 * Process: Chuyển string từ input sang float => tính TB
 * Output: Giá trị trung bình của 5 số thực
 */

function tinhTB() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var num3 = document.getElementById("num3").value
    var num4 = document.getElementById("num4").value
    var num5 = document.getElementById("num5").value

    var outPutNum = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5))/5
    document.getElementById('out_put_num').value = outPutNum
}

/**
 * Mô hình 3 khối: bài 3
 * Input: Số tiền USD
 * Process: Lấy số tiền USD * giá USD quy đổi sang VND
 * Output: Số tiền sau khi quy đổi sang USD
 */

function quyDoiVnd() {
    var usdInput =  document.getElementById("dolar_input").value
    var outPutVnd = usdInput * 23500
    document.getElementById('vnd_output').value = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(outPutVnd)
}

/**
 * Mô hình 3 khối: bài 4
 * Input: Hai chiều dài và hai chiều rộng hình chữ nhật
 * Process: Sử dụng công thức để tính diện tích và chu vi HCN
 * Output: Diện tích và chu vi HCN
 */

function tinhChuViDienTich() {
    var cd1 = document.getElementById("cd1").value
    var cr1 = document.getElementById("cr1").value

    var dt = parseInt(cd1) * parseInt(cr1)
    var cv = (parseInt(cd1) + parseInt(cr1))/2

    document.getElementById('out_put_hcn').value = "Diện tích là: " + dt + "; Chu vi là: " + cv

}

/**
 * Mô hình 3 khối: bài 5
 * Input: Số có 2 chữ số
 * Process: Sử dụng chia lấy dư để lấy số hàng đơn vị ra, chia lấy nguyên và dùng math floor để lấy số hàng chục
 * Output: Tổng 2 ký số
 */

function tinhKySo() {
    var kySo = document.getElementById("kySo").value
    var soDonVi = kySo%10
    var soHangChuc = Math.floor(kySo/10)
    
    document.getElementById('out_put_kyso').value = soHangChuc+ soDonVi
    
}