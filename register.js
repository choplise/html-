tips_word={
    "campus code": "9位数的学号",
    "password": "密码为6-20个含有英文和数字的字符串",
    "confirm password": "请确保两次输入的密码一致",
}
normal_word={
    "campus code": "请输入学号",
    "password": "请输入密码",
    "confirm password": "请再次输入密码",
}
tips={
    operation1(){
        document.getElementsByClassName("input-box")[0].children[1].placeholder = tips_word["campus code"];
    },
    anti_operation1(){
        document.getElementsByClassName("input-box")[0].children[1].placeholder = normal_word["campus code"];
    },
    operation2(){
        document.getElementsByClassName("input-box")[1].children[1].placeholder = tips_word["password"];
    },
    anti_operation2(){
        document.getElementsByClassName("input-box")[1].children[1].placeholder = normal_word["password"];
    },
    operation3(){
        document.getElementsByClassName("input-box")[2].children[1].placeholder = tips_word["confirm password"];
    },
    anti_operation3(){
        document.getElementsByClassName("input-box")[2].children[1].placeholder = normal_word["confirm password"];
    },
}

const languageContent_of_register = {
    English: {
       register: "Register",
       title: "guide for freshmen",
       campusCodeLabel: "Campus Code",
       passwordLabel: "Password",
       passwordLabelPlaceholder: "The password is a string of 6-20 characters containing English and numbers",
       confirmPasswordLabel: "Confirm Password",
       confirmPasswordPlaceholder: "input your password again",
       operationRegister: "Register",
       operationBack: "Back",
       changeLanguageButton: "中文"
    },
    Chinese: {
       register: "注册",
       title: "新生入学指南",
       campusCodeLabel: "学号",
       campusCodeLabelPlaceholder: "请输入学号",
       passwordLabel: "密码",
       passwordLabelPlaceholder: "密码为6-20个含有英文和数字的字符串",
       confirmPasswordLabel: "确认密码",
       confirmPasswordPlaceholder: "请确保两次输入的密码一致",
       operationRegister: "注册",
       operationBack: "返回",
       changeLanguageButton: "English"
    }
 };//把语言内容打成字典，方便调用，以后也可以增加其他语言
Translation={
    Translation(){
 const ChangeLanguageButton = document.getElementsByClassName('btn-box')[0].children[1].children[0];//获取登录页面按钮
 const targetLanguage = ChangeLanguageButton.textContent === "English" ? "English" : "Chinese";
 const content = languageContent_of_register[targetLanguage];
//content是目标语言的内容，比如content.login就是目标语言的登录，content.title就是目标语言的新生入学指南
//以下为更改页面内容
document.getElementById("register").innerHTML = content.register;
document.getElementById("title").innerHTML = content.title;

const InputBox = document.getElementsByClassName("input-box");
//children是用来获取子元素的，这里是获取input-box[0]的子元素
InputBox[0].children[0].innerHTML = content.campusCodeLabelLabel;
InputBox[0].children[1].placeholder = content.campusCodeLabelPlaceholder;
InputBox[1].children[0].innerHTML = content.passwordLabel;
InputBox[1].children[1].placeholder = content.passwordPlaceholder;
InputBox[2].children[0].innerHTML = content.confirmPasswordLabel;
InputBox[2].children[1].placeholder = content.confirmPasswordPlaceholder;

const Operation = document.getElementsByClassName("operation")[0].children;
Operation[0].textContent = content.operationRegister;
Operation[1].textContent = content.operationBack;

ChangeLanguageButton.textContent = content.changeLanguageButton;
    }
}
