
var data = [{key:1,children:'111'},{key:2,children:'222'}];
Array.prototype.find_new = function(item){
    let result = undefined;
    // 如果提供了this指向，就利用call传入
    let thisArg = arguments[1];
    // 循环咯
    this.forEach(function(value,index){
        if(item.call(thisArg,value,index,this)){
            // 判断条件成立，中止循环
            result = value;
            return false;
        }
    });

    // 返回查询结果
    return result;
}

data.find_new(item => item.key ==1).children = 'change';

console.log(data);