

1. Group 57 :
----------------------------

- Trịnh Văn Tú
 
- Hà Anh Tuấn

2. Kết quả bài làm:
-------------
Giải bài toán thu thập phiếu và tự động sinh ra đồ thị chương trình

####a. Code: 
```js
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
#### b. Đồ thị
![dothi](cfgraph.PNG?raw=true>)

3.Sử dụng Visutin để tạo đồ thị chương trình cho ngôn ngữ Javascript
-----------------------------------------------------------------
[Visutin] (<http://www.aivosto.com/>)

### Cách sử dụng:

-   Cài dặt Visutin
-   copy source code vào cửa sổ, nhấn draw 
-   Save as

Ưu điểm: Giao diện thân thiện dễ sử dụng.
Nhược diểm: Phải trả phí.

### Giao diện

![demo](demovisutin.PNG?raw=true>)
