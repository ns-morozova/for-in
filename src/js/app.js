// TODO: write your code here

export default function orderByProps (obj, arrKey) {
    const arr = [];
    for (let i = 0; i < arrKey.length; i++) {
        let key = arrKey[i];
        arr.push({key: key, value: obj[key]});
    }

    const arrSort = [];
    for (let key in obj) {
        if (!arrKey.includes(key)) {
            arrSort.push({key: key, value: obj[key]});
        }
    }

    arrSort.sort((a, b) => {
        if (a.key > b.key) {
          return 1;
        }
        if (a.key < b.key) {
          return -1;
        }
        return 0;
      });

      return arr.concat(arrSort);

    }