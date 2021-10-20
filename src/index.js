"use strict";

var _app = _interopRequireDefault(require("./app"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_config["default"].port, function () {
  console.log("Server listening on port: ".concat(_config["default"].port));
});
