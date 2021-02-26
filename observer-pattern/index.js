function Subject() {
  // 观察者列表
  this.observers = [];
}

subProto = Subject.prototype;

// 添加一个观察者
subProto.addObserver = function(observer) {
  this.observers.push(observer);
}

// 删除一个观察者
subProto.removeObserver = function(observerId) {
  var observerIndex = '';
  var delObserver = {};
  this.observers.forEach(function(item, index) {
    if (item.id === observerId) {
      observerIndex = index;
      delObserver = item;
    }
  });
  if (observerIndex !== '') {
    this.observers.splice(observerIndex, 1);
    return {
      flag: 1,
      delObserver: delObserver
    };
  } else {
    // 未找到对应观察者
    return {
      flag: -1
    };
  }
}

// 通知
subProto.notify = function(data) {
  if (this.observers.length > 0) {
    this.observers.forEach(function(item) {
      item.update(data);
    });
  } else {
    return -1;
  }
}

function Observer(name, val) {
  var obj = {};
  obj.id = getId();
  obj.name = name;
  obj.val = val;
  // 更新观察者
  obj.update = function(data) {
    this.val = data;
  }
  return obj;
}

// 生成一个随机数id
function getId() {
  return Math.random().toString(36).substring(2, 15);
}
