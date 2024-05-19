'use strict';

const UserStorage = require('../../models/UserStorage');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
  signup: (req, res) => {
    res.render('home/signup');
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;
    const response = {
      success: false,
      status: 400,
      message: '아이디나 비밀번호가 일치하지 않습니다.',
    };
    const users = UserStorage.getUsers("id", "pw");
    
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        response.success = true;
        response.status = 200;
        response.message = '로그인에 성공하였습니다.';
        return res.json(response);
      }
    }
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
