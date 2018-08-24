在一个文件中暴露变量，在另一个文件中使用它

------hello.js--------

function hello()
{
console.log('hello world');
}

var default_name='Jack';

function greet(name)
{
console.log('hello '+name);
}

module.exports=
{
hello:hello,
greet:greet,
name:default_name
}

--------main.js------

var module_one=require('./hello');

module_one.hello();
module_one.greet('Lily');
module_one.greet(module_one.name);
