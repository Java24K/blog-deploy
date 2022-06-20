(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{602:function(s,a,t){s.exports=t.p+"assets/img/gitConfig.e4c07607.png"},603:function(s,a,t){s.exports=t.p+"assets/img/smartgit01.b3fb03b8.jpg"},604:function(s,a,t){s.exports=t.p+"assets/img/smartgit02.1f960644.jpg"},650:function(s,a,t){"use strict";t.r(a);var e=t(10),i=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-多个github账户添加ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-多个github账户添加ssh"}},[s._v("#")]),s._v(" 一.多个GitHub账户添加SSH")]),s._v(" "),e("h3",{attrs:{id:"清空默认全局的username和email-如果没有的话可忽略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清空默认全局的username和email-如果没有的话可忽略"}},[s._v("#")]),s._v(" 清空默认全局的username和email（如果没有的话可忽略）")]),s._v(" "),e("ul",[e("li",[s._v("查看已配置的git列表")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    git config --list\n")])])]),e("ul",[e("li",[s._v("清空默认的用户名和邮箱")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    git config --global --unset user.name\n    git config --global --unset user.email\n")])])]),e("h3",{attrs:{id:"给不同的git账户生成ssh-key-比方说一个公司账号-一个个人账号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给不同的git账户生成ssh-key-比方说一个公司账号-一个个人账号"}},[s._v("#")]),s._v(" 给不同的git账户生成ssh-key：比方说一个公司账号，一个个人账号")]),s._v(" "),e("ul",[e("li",[s._v("git生成ssh-key，默认如果不设置名字的话就是id_rsa")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    //输入后按enter键\n    ssh-keygen -t rsa -C "xxx@126.com"\n')])])]),e("ul",[e("li",[s._v("自己的git生成ssh-key，设置路径成id_rsa_xxx@gmail.com，和之前生成的那个区分开来")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    //输入自定义的rsa名字到自己的邮箱上去\n    ssh-keygen -t rsa -f ~/.ssh/id_rsa_xxx@gmail.com -C "xxx@gmail.com"\n')])])]),e("h3",{attrs:{id:"给他们分别添加到ssh-agent信任列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给他们分别添加到ssh-agent信任列表"}},[s._v("#")]),s._v(" 给他们分别添加到ssh-agent信任列表")]),s._v(" "),e("ul",[e("li",[s._v("添加到信任列表")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    ssh-add ~/.ssh/id_rsa\n\n")])])]),e("ul",[e("li",[s._v("再次添加另一个到信任列表")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    ssh-add ~/.ssh/id_rsa_xxx@gmail.com\n")])])]),e("h3",{attrs:{id:"添加公钥到git账户中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加公钥到git账户中"}},[s._v("#")]),s._v(" 添加公钥到git账户中")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    pbcopy < ~/.ssh/id_rsa.pub\n    //pbcopy < ~/.ssh/id_rsa_xxx@gmail.com.pub\n")])])]),e("h3",{attrs:{id:"在config文件配置多个ssh-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在config文件配置多个ssh-key"}},[s._v("#")]),s._v(" 在config文件配置多个ssh-key")]),s._v(" "),e("ul",[e("li",[s._v("打开目录，看看有没有config文件，没有的话新建一个")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    open ~/.ssh/\n")])])]),e("ul",[e("li",[s._v("分别配置公司和自己的ssh-key\n"),e("img",{attrs:{src:t(602),alt:"gitConfig"}})])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    #gmail\n    Host gmail.github.com\n    Hostname github.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa_xxx@gmail.com\n    User gmail\n    #126\n    Host 126.github.com\n    Hostname github.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa_xxx@126.com\n    User 126\n")])])]),e("h3",{attrs:{id:"测试连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试连接"}},[s._v("#")]),s._v(" 测试连接")]),s._v(" "),e("ul",[e("li",[s._v("测试公司git账户连接：如果单个账户情况一般就是ssh -T git@xxx，如果配置了config，那么可以这样测试：ssh -T git@{config里面的user}.xxx主机名")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    ssh -T git@gmail.github.com\n")])])]),e("ul",[e("li",[s._v("链接成功")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    Hi xxx！ You've successfully authenticated.but GitHub does not provide shell acess\n")])])]),e("p",[s._v("用同样方法测试自己git账户链接")]),s._v(" "),e("h3",{attrs:{id:"clone-and-push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clone-and-push"}},[s._v("#")]),s._v(" clone and push")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    //到自己工作的目录，准备下载个工程下来\n    cd ~/james/demo/\n     \n    //原本单个账户的情况\n    git clone git@github.com:xxx/TestAndroid.git\n    ​\n    //设置多个账户和config后\n    git clone git@gmail.github.com:xxx/demo.git\n    ​\n    //.....done\n    //前往具体的工程目录\n    cd demo\n    //添加、提交，push等~~~\n    git add .\n    git pull\n    git commit -m "test commit"\n    git push\n    //OK啦\n')])])]),e("h2",{attrs:{id:"二-smartgit更改提交人和邮箱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-smartgit更改提交人和邮箱"}},[s._v("#")]),s._v(" 二.SmartGit更改提交人和邮箱")]),s._v(" "),e("ul",[e("li",[s._v("如果我们要在smartgit中更改不同项目的的提交人和邮箱参照下图")])]),s._v(" "),e("h3",{attrs:{id:"第一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[s._v("#")]),s._v(" 第一步")]),s._v(" "),e("p",[e("img",{attrs:{src:t(603),alt:"第一步"}})]),s._v(" "),e("h3",{attrs:{id:"第二步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[s._v("#")]),s._v(" 第二步")]),s._v(" "),e("p",[e("img",{attrs:{src:t(604),alt:"第二步"}})]),s._v(" "),e("h2",{attrs:{id:"三-visual-studio-code更改提交人和邮箱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-visual-studio-code更改提交人和邮箱"}},[s._v("#")]),s._v(" 三.Visual Studio Code更改提交人和邮箱")]),s._v(" "),e("ul",[e("li",[s._v("要更改VsCode的提交人和邮箱我们需要使用命令，当然smartgit的图形化界面更改底层也是命令。")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    // 设置本地项目库配置\n    git config user.name "java24k"\n    git config user.email "772835869@qq.com"\n')])])])])}),[],!1,null,null,null);a.default=i.exports}}]);