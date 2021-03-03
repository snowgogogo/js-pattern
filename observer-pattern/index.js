function Subject(ctx) {
  // 观察者列表
  this.observers = [];
  this._ctx = ctx || this;
}

subProto = Subject.prototype;

// 添加一个观察者
subProto.addObserver = function(fn) {
  this.observers.push(fn);
  return this;
}

// 删除一个观察者
subProto.removeObserver = function(fn) {
  this.observers = this.observers.filter(function(item) {
    if (item !== fn) {
      return item;
    }
  });
  return this;
}

// 通知
subProto.notify = function(data) {
  var observers = this.observers;
  if (observers.length > 0) {
    observers.forEach(function(item) {
      item.call(this.ctx, data);
    });
  }
  return this;
}
