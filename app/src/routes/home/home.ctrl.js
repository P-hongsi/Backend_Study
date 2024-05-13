'use strict';

const users = {
  id: ["user1", "user2", "user3"],
  pw: ["1111", "2222", "3333"],
}

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
          status: 200,
          message: '로그인 성공!',
        });
      };
    }
    return res.json({
      success: false,
      status: 400,
      message: '아이디나 비밀번호가 일치하지 않습니다.',
    });
  }
 };

module.exports = {
  output,
  process,
};
