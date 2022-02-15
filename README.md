# `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Components

裡面包含了其他頁面會重複使用到的一些元件

## Helpers

這邊則是和設定比較相關的內容
List 結尾的檔案是每一個大的畫面中會有的子連結
Routes 則是存放每一個分頁的 path 名稱 (App.js 會存這邊把元件 Render 好 如需更改路徑名稱 則 Routes.js 及 List.js 中的 pathName 需要一併更改)
Url 則是要從哪裡撈資料的設定檔 如要做測試更改此處即可

## Pages

監控查詢 下單查詢 檔案為負 個人資料 四個畫面

## Subpages

即上方四個大畫面中的子畫面

## Styles

存放頁面會用到的 css 檔案

## 其他事項

1. 程式的開口端為 App.js
2. ```
   React.useEffect(() => {
     (async () => {
       //getAccessInfo from data using userID
       if (!sessionStorage.getItem("userID")) {
         window.location.href = "/Login";
       } /* else if(getAccessInfo) {

       }*/
     })();
   });
   ```

   這一段是用來檢測是否有登入
   sessionStorage 則是在 Login.js 中的

   ```
     function goToMonitor() {
        setUError(values.username === "");
        setPError(values.password === "");
        setMError(false);
        setNEError(false);
        if (values.password !== "" && values.username !== "") {
        //Check Whether the username and password is correct
        /*Set this after success login*/ sessionStorage.setItem("userID", values.username);
        window.location = "/Monitor";
        }
    }
   ```

   進行設定
   else if 這邊 則是可以檢測每一個用戶對於子畫面的權限

3. 很多畫面會需要和後端互動
   大多都是在
   ```
   sendInquiry()
   sendMutation()
   ```
   這兩個地方進行設定
   有些畫面一進去就會去撈資料
   這些則是在
   ```
   React.useEffect(() => {
   (async () => {
     //getAccessInfo from data using userID
     if (!sessionStorage.getItem("userID")) {
       window.location.href = "/Login";
     } /* else if(getAccessInfo) {
       // const response = await axios.get(Url);
       //Get New Data Here
     }*/
   })();
   });
   ```
   //Get New Data Here
   這邊去撈資料
