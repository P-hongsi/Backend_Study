'use strict';

const id = document.querySelector('#id'),
    pw = document.querySelector('#pw'),
    btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    if (!id.value || !pw.value) {
        alert('아이디와 비밀번호를 입력해주세요!');
        return;
    } else {
        const req = {
            id: id.value,
            pw: pw.value
        }
        fetch("/login", {
            body: JSON.stringify(req),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        }).then(res => res.json())
            .then(res => {
                if (res.success) {
                    location.href = '/';
                    alert(res.message);
                } else {
                    alert(res.message);
                }
            })
    }
})