/**
 * 简易实现async 
 * 参考1： https://juejin.im/post/5b04c7db6fb9a07aa542a772
 * 参考2： https://gist.github.com/jakearchibald/31b89cba627924972ad6
 */

// function spawn(generatorFunc) {
//     function continuer(verb, arg) {
//       var result;
//       try {
//         result = generator[verb](arg);
//       } catch (err) {
//         return Promise.reject(err);
//       }
//       if (result.done) {
//         return result.value;
//       } else {
//         return Promise.resolve(result.value).then(onFulfilled, onRejected);
//       }
//     }
//     var generator = generatorFunc();
//     var onFulfilled = continuer.bind(continuer, "next");
//     var onRejected = continuer.bind(continuer, "throw");
//     return onFulfilled();
//   }

function runner(genFn){

    const itr = genFn();

    function run(arg){
        const result = itr.next(arg);
        if(result.done){
            return result.value;
        }else {
            return Promise.resolve(result.value).then(run);
        }
    }

    return run()
}
