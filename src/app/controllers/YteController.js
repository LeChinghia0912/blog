const Yte = require("../models/Co_So_Y_Te");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class YteController {
  show(req, res, next) {
    // Lấy giá trị tham số truy vấn từ URL
    const searchTerm = req.query.search;

    // Xây dựng điều kiện tìm kiếm
    const searchCondition = searchTerm
      ? { $text: { $search: searchTerm } }
      : {};

    Yte.find({ ...searchCondition, YteId: req.params._id })
      .then((cosotyte) => {
        console.log(cosotyte);
        res.render("cosoyte/showYte", {
          cosotyte: mutipleMongooseToObject(cosotyte),
        });
      })
      .catch((error) => {
        // Xử lý lỗi
        next(error);
      });
  }

  create(req, res, next) {
    res.render("cosoyte/createYte");
  }

  newYte(req, res, next) {
    const yteData = req.body;
    const yte = Yte(yteData);
    yte
      .save()
      .then(() => res.redirect("/cosoyte/showYte"))
      .catch((error) => {
        // Xử lý lỗi
        next(error);
      });
  }
}

module.exports = new YteController();
