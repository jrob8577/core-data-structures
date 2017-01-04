"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.size = 0;
    this.frontElement = null;
    this.backElement = null;
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(element) {
      if (this.frontElement === null) {
        this.frontElement = this.backElement = new Node(element, null);
      } else {
        this.backElement.next = new Node(element, null);
        this.backElement = this.backElement.next;
      }

      this.size++;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.frontElement !== null) {
        this.size--;

        var temp = this.frontElement.data;
        this.frontElement = this.frontElement.next;

        return temp;
      }

      return null;
    }
  }, {
    key: "front",
    value: function front() {
      if (this.frontElement !== null) {
        return this.frontElement.data;
      }

      return null;
    }
  }, {
    key: "back",
    value: function back() {
      if (this.backElement !== null) {
        return this.backElement.data;
      }

      return null;
    }
  }, {
    key: "length",
    value: function length() {
      return this.size;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }]);

  return Queue;
}();

exports.default = Queue;

var Node = function Node(data) {
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
};