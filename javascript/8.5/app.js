function objectFlip(obj) {
    const ret = {};
    Object.keys(obj).forEach(key => {
      ret[obj[key]] = key;
    });
    return ret;
  }
  console.log(objectFlip({A : 1, B : 2, C : 3, D : 4}))