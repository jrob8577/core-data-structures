'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.top = null;
    this.size = 0;
  }

  _createClass(Stack, [{
    key: 'push',
    value: function push(data) {
      this.top = new Node(data, this.top);
      this.size++;
    }
  }, {
    key: 'pop',
    value: function pop() {
      if (this.top !== null) {
        this.size--;

        var result = this.top.data;
        this.top = this.top.next;

        return result;
      }

      return null;
    }
  }, {
    key: 'peek',
    value: function peek() {
      return this.top !== null ? this.top.data : null;
    }
  }, {
    key: 'length',
    value: function length() {
      return this.size;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.size === 0;
    }
  }]);

  return Stack;
}();

exports.default = Stack;

var Node = function Node(data, next) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
};