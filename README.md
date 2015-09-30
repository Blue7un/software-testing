

1. Group 57 :
----------------------------

- Trịnh Văn Tú
 
- Hà Anh Tuấn

2. Kết quả bài làm:
-------------
Giải bài toán thu thập phiếu và tự động sinh ra đồ thị chương trình

####a. Code: 
```
function couponCollector(number) {
    var collected = [];

    for(var i=0; i < number; i++) {
        collected[i] = false;
    }

    var iteration = 0, unique = 0;
    var random;
    while(unique < number) {
        random = Math.floor(number * Math.random());
        if(!collected[random]) {
            unique++;
            collected[random] = true;
        }
        iteration++;
    }
    return iteration;
}
``` 
