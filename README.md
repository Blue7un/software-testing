

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
-----------
[Visutin] (<http://www.aivosto.com/>)

### Cách sử dụng:

-   Cài dặt Visutin
-   copy source code vào cửa sổ, nhấn draw 
-   Save as

Ưu điểm: Giao diện thân thiện dễ sử dụng.
Nhược diểm: Phải trả phí.

### Giao diện

![demo](demovisutin.PNG?raw=true>)

4. Tạo ca kiểm thử theo chuẩn C1P
---------
Tương tự C1 nhưng các ca kiểm thử của C1P phải thực hiện mọi cặp điều kiện T, F (True, False) cho các điểm điều kiện P1 và P2,...

####Ta có các test case:
|Điểm|Câu lệnh|
|-----|-----|
|P1|`(i < number)`|
|P2|`(unique < number)`|
|P3|`(!collected[random])`|

####Vậy ta có các ca kiểm thử
|Ca kiểm thử|Giá trị tương ứng|
|-----|-----|
|(P1, P2)|(F, F)|
|(P1, P2, P3, P2)|(F, F, F, F)|
|(P1, P2, P3, P2)|(F, F, T, F)|

####Cụ thể đầu vào lần lượt như sau
|Đầu vào|Đầu ra|
|-----|-----|
|(0)|Expect value : 0|
|(2)|Expect value : 4|
|(-1)|Expect value : 0|
|(a)|Expect value : NaN (Không có kết quả)|
|(20)|Expect value : 65|

