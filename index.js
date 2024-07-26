Translation={
   T(){
      const languageContent = {
         English: {
            login: "Login",
            title: "Orientation guide",
            usernameLabel: "Username",
            usernamePlaceholder: "Enter your username",
            passwordLabel: "Password",
            passwordPlaceholder: "Enter your password",
            forgetPassword: "forget password?",
            operationLogin: "Login",
            operationRegister: "Register",
            changeLanguageButton: "中文"
         },
         Chinese: {
            login: "登陆",
            title: "新生入学指南",
            usernameLabel: "学号",
            usernamePlaceholder: "请输入学号",
            passwordLabel: "密码",
            passwordPlaceholder: "请输入密码",
            forgetPassword: "忘记密码?",
            operationLogin: "登录",
            operationRegister: "注册",
            changeLanguageButton: "English"
         }
      };//把语言内容打成字典，方便调用，以后也可以增加其他语言

      const ChangeLanguageButton = document.getElementsByClassName('btn-box')[0].children[2].children[0];
      const targetLanguage = ChangeLanguageButton.textContent === "English" ? "English" : "Chinese";
      //currentLanguage是当前语言，如果按钮上显示的是English，那么目标语言就是English，否则就是Chinese
      const content = languageContent[targetLanguage];


      //以下为更改页面内容
      document.getElementById("Login").innerHTML = content.login;
      document.getElementById("title").innerHTML = content.title;

      const InputBox = document.getElementsByClassName("input-box");
      //children是用来获取子元素的，这里是获取input-box[0]的子元素
      InputBox[0].children[0].innerHTML = content.usernameLabel;
      InputBox[0].children[1].placeholder = content.usernamePlaceholder;
      InputBox[1].children[0].innerHTML = content.passwordLabel;
      InputBox[1].children[1].placeholder = content.passwordPlaceholder;

      document.getElementById("tips").textContent = content.forgetPassword;

      const Operation = document.getElementsByClassName("operation")[0].children;
      Operation[0].textContent = content.operationLogin;
      Operation[1].textContent = content.operationRegister;

      ChangeLanguageButton.textContent = content.changeLanguageButton;
   },
   p(){
         alert("Hello! I am an alert box!");
   }
}
