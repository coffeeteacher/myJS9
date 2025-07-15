
// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");

// 威力彩
function lott1() {
    // 第一區：1-38取6個
    // 建立存放號碼的空陣列
    let lott = [];

    // while

    while (1) {
        // 檢查是已經有6個號碼
        if (lott.length == 6) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 38) + 1;
        // 檢查是否重覆
        if (!lott.includes(lottNo)) {   // 沒有重覆
            lott.push(lottNo);  // 增加號碼到陣列中            
        }
    }

    // 未排序
    sortBefore.textContent = "排序前號碼:" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼:" + lott;
    // 第二區：1-8取1個
    secNo.textContent = "第二區號碼:" + (Math.floor(Math.random() * 8) + 1);

}

// 大樂透
function lott2() {
    // 第一區：1-49取6個
    // 建立存放號碼的空陣列
    let lott = [];

    // while

    while (1) {
        // 檢查是已經有6個號碼
        if (lott.length == 7) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 49) + 1;
        // 檢查是否重覆
        if (lott.includes(lottNo) == false) {   // 沒有重覆
            lott.push(lottNo);  // 增加號碼到陣列中            
        }
    }

    // 取出陣列最後一個值後，並移除
    secNo.textContent = "特別號：" + lott.pop();

    // 未排序
    sortBefore.textContent = "排序前號碼:" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼:" + lott;
}

// 今彩539
function lott3() {
    // 第一區：1-39取5個
    // 建立存放號碼的空陣列
    let lott = [];

    // while

    while (1) {
        // 檢查是已經有5個號碼
        if (lott.length == 5) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 39) + 1;
        // 檢查是否重覆
        if (lott.includes(lottNo) == false) {   // 沒有重覆
            lott.push(lottNo);  // 增加號碼到陣列中            
        }
    }

    // 未排序
    sortBefore.textContent = "排序前號碼:" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼:" + lott;

    // 今彩沒有第二區，所以清除
    secNo.textContent="";
}