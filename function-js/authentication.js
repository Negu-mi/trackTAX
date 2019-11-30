$(document).ready(function() {
    // number of days to expired
    var exdays = 5;

    console.log(cookie('userID'));
    if(typeof cookie('userID') !== 'undefined') {
        $('#register').hide();
        $('#signIn').hide();
        $('#logOut').show();
    } else {
        $('#register').show();
        $('#signIn').show();
        $('#logOut').hide();
    }

    // ฟังก์ชันเช็ก email ที่ user ให้มาว่าถูกใช้ในเว็บเราหรือยัง
    function existEmail(email) {
        $.get("php file", {
            user: email
        }, function(userID) { return userID != '' ? true : false })
    }

    // ฟังก์ชันกำหนดค่า cookie
    function setCookie(userID) {
        cookie.empty().set('userID', userID, {
            expires: exdays
        });
    }

    // ฟังก์ชันลงชื่อเข้าใช้ระบบ
    $("#signIn_accept").click(function signIn() {
        var email = $('#signIn_username').val();
        var password = $('#signIn_password').val();
        // if(existEmail(email)) {
        //     $.get("php file", {
        //         user: email,
        //         password: CryptoJS.MD5(password)
        //     }, setCookie(userID), "text")        
        // } else {
        //     alert("Email: " + email + "is used already.");
        // }
        setCookie(email);
    // ต้องลิงก์ไปหน้าอื่น
        location.reload(true);
    })

    // ฟังก์ชันสร้างบัญชีผู้ใช้
    function register(email, password) {
        // if(!existEmail(email)) {
        //     $.post("php file", {
        //         user: email,
        //         password: CryptoJS.MD5(password)
        //     }, setCookie(userID), "text")
        // } else {
        //     alert("Email: " + email + "is invalid!");
        // }
    }

    // ฟังก์ชันยืนยันตัวตนด้วย google
    function authenGoogle() {

    }

    // ฟังก์ชันลงชื่อออกจากระบบ
    $('#logOut').click(function logOut() {
        cookie.empty();
        location.reload(true);
    })
})