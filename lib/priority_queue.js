"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PriorityQueue = function () {
  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    this.frontElement = this.backElement = null;
    this.size = 0;
  }

  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(element, priority) {
      this.size++;

      if (this.frontElement === null) {
        this.frontElement = this.backElement = new Node(element, priority, null);
      } else if (this.frontElement.priority < priority) {
        this.frontElement = new Node(element, priority, this.frontElement);
      } else if (this.backElement.priority > priority) {
        this.backElement.next = new Node(element, priority, null);
        this.backElement = this.backElement.next;
      } else {
        var walker = this.frontElement;

        while (walker.next !== null && walker.next.priority > priority) {
          walker = walker.next;
        }

        walker.next = new Node(element, priority, walker.next);
      }
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.frontElement !== null) {
        this.size--;
        return this.frontElement.data;
      }

      return null;
    }
  }, {
    key: "front",
    value: function front() {
      return this.frontElement !== null ? this.frontElement.data : null;
    }
  }, {
    key: "back",
    value: function back() {
      return this.backElement !== null ? this.backElement.data : null;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }, {
    key: "length",
    value: function length() {
      return this.size;
    }
  }]);

  return PriorityQueue;
}();

exports.default = PriorityQueue;

var Node = function Node(element, priority, next) {
  _classCallCheck(this, Node);

  this.element = element;
  this.priority = priority;
  this.next = next;
};