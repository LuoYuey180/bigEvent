# 1.bigEvent项目文档

1.1	准备工作

​	在GitHub上新建了一个远程仓库并克隆到本地

​	将静态页面放入到仓库目录下

​	将项目的功能介绍都书写到REAMDE.md中



# 2.后台功能

将所有的接口地址同意保存在config.js文件中，可以方便后期维护。

将每个页面中进行接口调用操作的功能统一保存到某个文件中

​	用户的相关功能：user.js

​		设置user对象，将每个请求的操作方式设置为user的方法，在页面中使用调用方法即可

​			好处：页面的具体操作和接口的操作就分开了，方便维护。

### 2.1.后台登录页面功能制作

​	结构的修改：

​		登录按钮时submit功能，我们希望使用ajax，应当更改为普通按钮



