(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{587:function(t,a,s){t.exports=s.p+"assets/img/2pc.43f6f89a.png"},588:function(t,a,s){t.exports=s.p+"assets/img/3pc.78dc8911.png"},589:function(t,a,s){t.exports=s.p+"assets/img/syncConfirmTcc.f47657ca.png"},590:function(t,a,s){t.exports=s.p+"assets/img/compensateTcc.8de0293b.png"},591:function(t,a,s){t.exports=s.p+"assets/img/MQTransMessage.30577275.png"},635:function(t,a,s){"use strict";s.r(a);var v=s(10),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"一-分布式事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-分布式事务"}},[t._v("#")]),t._v(" 一.分布式事务")]),t._v(" "),v("h3",{attrs:{id:"分布式事务概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务概念"}},[t._v("#")]),t._v(" 分布式事务概念")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("分布式：分布式是一种工作方式，将不同机器不同业务几台服务器分布在不同地方，协调完成功能。")])]),t._v(" "),v("li",[v("p",[t._v("事务：事务用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行。")])]),t._v(" "),v("li",[v("p",[t._v("分布式事务：在分布式协同工作的情况下，保证不同业务数据库数据完整性。")])])]),t._v(" "),v("h3",{attrs:{id:"分布式的cap理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式的cap理论"}},[t._v("#")]),t._v(" 分布式的CAP理论")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("C：一致性(强一致性)，所有节点访问同一份最新的数据副本。一致性分为强一致、弱一致、最终一致。")])]),t._v(" "),v("li",[v("p",[t._v("A：可用性，每次请求都能获取到非错的响应——但是不保证获取的数据为最新数据。")])]),t._v(" "),v("li",[v("p",[t._v("P：分区容错性，节点本身的故障，或者部分网络故障，及产生分区，还能提供较好的一致性和可用性。")])])]),t._v(" "),v("blockquote",[v("p",[t._v("为什么P必须满足：因为分布式系统下可能通信失败，产生分区，需要分区容错P，分布式必须保证分区容错。剩下的A和P只能选择其中一个。保证一致性可用性就会存在延时，保证可用性可能读到不一致数据。")])]),t._v(" "),v("blockquote",[v("p",[t._v("为什么CA不能同时满足：不存在网络分区， CA才能同时成立，那么就不是分布式。CA只在理论上存在，或者说分布式退化为单机的时候，不存在分区，也就不存在考虑分区容错，即P，那么CA就可以同时满足。")])]),t._v(" "),v("h3",{attrs:{id:"分布式的base理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式的base理论"}},[t._v("#")]),t._v(" 分布式的BASE理论")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("所谓的BASE，Basicly Available、Soft State、Eventual Consistency，也就是基本可用、软状态、最终一致性。")])]),t._v(" "),v("li",[v("p",[t._v("BASE希望的是，CAP里面基本都可以同时实现，但是不要求同时全部100%完美的实现，CAP三者同时基本实现。")])])]),t._v(" "),v("h3",{attrs:{id:"如何保证分区容错性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何保证分区容错性"}},[t._v("#")]),t._v(" 如何保证分区容错性")]),t._v(" "),v("ul",[v("li",[t._v("通过注册中心保证一个节点挂了其他节点可用。")]),t._v(" "),v("li",[t._v("通过限流、降级、延迟处理等容错隔离手段保证节点可用。")])]),t._v(" "),v("h2",{attrs:{id:"二-分布式事务方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二-分布式事务方案"}},[t._v("#")]),t._v(" 二.分布式事务方案")]),t._v(" "),v("h3",{attrs:{id:"基于xa规范的2pc协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基于xa规范的2pc协议"}},[t._v("#")]),t._v(" 基于XA规范的2PC协议")]),t._v(" "),v("blockquote",[v("p",[t._v("2pc过程：")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("2PC：就是把分布式事务分为2个阶段,prepare阶段和submit阶段。")])]),t._v(" "),v("li",[v("p",[t._v("prepare阶段：相当于在数据库开启事务，执行sql，但就是不提交事务。")])]),t._v(" "),v("li",[v("p",[t._v("submit阶段：任何一个数据库prepare阶段没有返回，那么事务管理器组件即TM就发送消息，所有数据库回滚。所有库prepare阶段都准备好了，就通知所有数据库提交。")])])]),t._v(" "),v("blockquote",[v("p",[t._v("2pc缺陷:")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("同步阻塞：数据库在接收prepare消息后，会锁定资源，直到commit之后才会释放掉，这个过程中有第三方来访问锁定的资源，就会阻塞住。")])]),t._v(" "),v("li",[v("p",[t._v("单点故障：如果TM挂掉之后，整个分布式事务就会出问题。")])]),t._v(" "),v("li",[v("p",[t._v("数据不一致问题：TM发送prepare消息到数据库都没问题，都返回了，然后TM又发送commit消息，但是有一个数据库因为网络有问题，收不到网络请求了，处于数据不一致的情况。")])])]),t._v(" "),v("p",[v("img",{attrs:{src:s(587),alt:"2pc"}})]),t._v(" "),v("h3",{attrs:{id:"基于xa规范的3pc协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基于xa规范的3pc协议"}},[t._v("#")]),t._v(" 基于XA规范的3PC协议")]),t._v(" "),v("blockquote",[v("p",[t._v("3pc过程：")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("阶段一：发送canCommit消息，确认基本的环境正常，后续操作可以执行，没有干具体的事情，如果几个库都没问题，就返回一个成功的消息给TM。")])]),t._v(" "),v("li",[v("p",[t._v("阶段二：发送preCommit消息，相当于2PC中的第一个阶段，完成sql的操作，不提交事务。假如几个库都返回了成功，进入第三个阶段；如果没有成功，直接结束事务。")])]),t._v(" "),v("li",[v("p",[t._v("阶段三：发送docommit消息，都提交消息。")])])]),t._v(" "),v("blockquote",[v("p",[t._v("3pc缺陷：")])]),t._v(" "),v("ul",[v("li",[t._v("3pc引入了超时中断机制，缓解了同步阻塞问题（注意不是彻底解决，见下图），还是存在单点故障和数据不一致问题。\n"),v("img",{attrs:{src:s(588),alt:"2pc"}})])]),t._v(" "),v("h3",{attrs:{id:"tcc事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcc事务"}},[t._v("#")]),t._v(" TCC事务")]),t._v(" "),v("blockquote",[v("p",[t._v("TCC 指的是Try - Confirm - Cancel。其核心思想是, 针对每个操作，都要注册一个与其对应的确认和补偿（撤销）操作。")])]),t._v(" "),v("ul",[v("li",[t._v("Try 指的是预留，即资源的预留和锁定，注意是预留。")]),t._v(" "),v("li",[t._v("Confirm 指的是确认操作，这一步其实就是真正的执行了。")]),t._v(" "),v("li",[t._v("Cancel 指的是撤销操作，可以理解为把预留阶段的动作撤销了。")])]),t._v(" "),v("h4",{attrs:{id:"异步确保型tcc方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步确保型tcc方案"}},[t._v("#")]),t._v(" 异步确保型TCC方案")]),t._v(" "),v("ul",[v("li",[t._v("异步确保性 TCC 分布式事务解决方案只适用于对最终一致性时间敏感度较低的一些被动型业务。比如会员注册服务和邮件发送服务。")])]),t._v(" "),v("p",[v("img",{attrs:{src:s(589),alt:"tcc"}})]),t._v(" "),v("h4",{attrs:{id:"补偿型tcc方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#补偿型tcc方案"}},[t._v("#")]),t._v(" 补偿型TCC方案")]),t._v(" "),v("ul",[v("li",[t._v("这个其实是跟通用型的TCC方案类似的，只不过从业务服务就提供俩接口就ok了，Do和Compensate，就是执行接口和补偿接口，不要try接口，不要锁定资源，直接执行业务逻辑，如果有失败就调用Compensate接口，回滚刚才的操作。")])]),t._v(" "),v("p",[v("img",{attrs:{src:s(590),alt:"tcc"}})]),t._v(" "),v("h3",{attrs:{id:"可靠消息最终一致性方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可靠消息最终一致性方案"}},[t._v("#")]),t._v(" 可靠消息最终一致性方案")]),t._v(" "),v("ul",[v("li",[t._v("有一些第三方的MQ是支持事务消息的，比如RocketMQ，他们支持事务消息的方式也是类似于采用的二阶段提交，但是市面上一些主流的MQ都是不支持事务消息的，比如 RabbitMQ 和 Kafka 都不支持。")])]),t._v(" "),v("blockquote",[v("p",[t._v("以阿里的 RocketMQ 中间件为例，其思路大致为：")])]),t._v(" "),v("ul",[v("li",[t._v("第一阶段Prepared消息，会拿到消息的地址。")]),t._v(" "),v("li",[t._v("第二阶段执行本地事务，第三阶段通过第一阶段拿到的地址去访问消息，并修改状态。")])]),t._v(" "),v("blockquote",[v("p",[t._v("也就是说在业务方法内要想消息队列提交两次请求，一次发送消息和一次确认消息。如果确认消息发送失败了RocketMQ会定期扫描消息集群中的事务消息，这时候发现了Prepared消息，它会向消息发送者确认，所以生产方需要实现一个check接口，RocketMQ会根据发送端设置的策略来决定是回滚还是继续发送确认消息。这样就保证了消息发送与本地事务同时成功或同时失败。")])]),t._v(" "),v("p",[v("img",{attrs:{src:s(591),alt:"tcc"}})]),t._v(" "),v("h3",{attrs:{id:"seata框架方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#seata框架方案"}},[t._v("#")]),t._v(" Seata框架方案")]),t._v(" "),v("p",[t._v("阅读Seata官网文档： https://seata.io/zh-cn/docs/overview/what-is-seata.html")]),t._v(" "),v("blockquote",[v("p",[t._v("文章参考：")])]),t._v(" "),v("ul",[v("li",[t._v("https://seata.io/zh-cn/blog/tcc-mode-applicable-scenario-analysis.html")]),t._v(" "),v("li",[t._v("https://segmentfault.com/a/1190000040549695")])])])}),[],!1,null,null,null);a.default=e.exports}}]);