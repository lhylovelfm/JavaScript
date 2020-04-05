# JavaScript
javascript判断类型方法


let _typeof = function (data) {
    let value = /\[object (\w+)\]/.exec(
        Object.prototype.toString.call(data)
    );
    return value ? value[1].toLowerCase() : '';
}

_typeof('123')      //"string"
_typeof(123)        //"number"
_typeof(123n)       //"bigint"
_typeof(null)       //"null"
_typeof(undefined)  //"undefined"
_typeof({})         //"object"
_typeof([])         //"array"
_typeof(/123/)      //"regexp"
