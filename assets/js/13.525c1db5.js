(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{226:function(n,v,_){"use strict";_.r(v);var e=_(19),t=Object(e.a)({},(function(){var n=this,v=n.$createElement,_=n._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[_("h1",{attrs:{id:"css-首页"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css-首页"}},[n._v("#")]),n._v(" CSS 首页")]),n._v(" "),_("p",[n._v("策略模式：\n官方描述（定义一系列算法，把他们封装起来，并且使它们可以相互替换）\n白话文描述：有共同的抽象行为，具体不同的行为称作为不同的策略，最终可以使用Context上下文获取对应策略。\n应用场景:解决多重if判断问题、聚合支付平台、第三方联合登陆、调用多个不同短信接口等。")]),n._v(" "),_("p",[n._v("责任链模式:\n官方描述:（将请求的发送者和接收者解耦，使的多个对象都有处理这个请求的机会。）\n白话文描述：每一个业务模块之间相互依赖比较有关联、每个关联模块称作为handler(处理器)使用上一个handler引用到下一个hanlder实现一个链表。\n应用场景: 权限控制、网关权限控制、审批、风控系统等。")]),n._v(" "),_("p",[n._v("模版方法:\n官方描述：定义一个算法结构，而将一些步骤延迟到子类实现。\n白话文描述：\n提前定义好整体的骨架，不同的行为让字类实现，相同的行为直接定义在抽象类中复用。\n有大体共同抽象行为全部交给父类实现，不同的行为让子类实现。\n应用场景：支付异步回调重构、Servlet实现")]),n._v(" "),_("p",[n._v("装饰模式：\n官方描述:动态的给对象添加新的功能。\n白话文描述：\n在不改变原有对象的基础上附加功能，相比生成子类更灵活。\n应用场景：IO流")]),n._v(" "),_("p",[n._v("代理模式:\n官方描述:为其他对象提供一个代理以便控制这个对象的访问。\n白话文描述：\n在方法之前和之后做一些处理 实现AOP通知\n应用场景：AOP、事务、日志、权限控制")]),n._v(" "),_("p",[n._v("观察者模式:\n官方描述: 对象间的一对多的依赖关系。\n白话文描述：\n在对象之间定义一对多的依赖，这样一来，当一个对象改变状态，依赖它的对象收到通知并自动更新\n其实就是发布订阅模式，发布者发布消息，订阅者获取消息，订阅了就能收到消息，没订阅就收不到消息。\n应用场景： 发布订阅 事件通知、 Zookeeper、事件监听操作")]),n._v(" "),_("p",[n._v("门面模式:\n官方描述: 对外提供一个统一的方法，来访问子系统中的一群接口。\n该模式就是把一些复杂的流程封装成一个接口供给外部用户更简单的使用")]),n._v(" "),_("p",[n._v("状态模式:\n官方描述: 允许一个对象在其对象内部状态改变时改变它的行为。\n白话文  状态模式与策略模式本质上没有很大区别，主要根据行为决定，如果有共同抽象行为使用策略模式，没有共同行为就使用状态模式。")]),n._v(" "),_("p",[n._v("适配器模式:\n官方描述: 将一个类的方法接口转换成客户希望的另外一个接口。\n应用场景： mybatis日志收集、提供接口转换。\n单例模式\n官方描述：保证在一个jvm中只能有一个实例\n什么是单例\n单例中有七种写法 七种写法对比\n反射机制可以破解单例\n最靠谱单例 枚举")]),n._v(" "),_("h2",{attrs:{id:"css二级标题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css二级标题"}},[n._v("#")]),n._v(" CSS二级标题")]),n._v(" "),_("p",[n._v("策略模式：\n官方描述（定义一系列算法，把他们封装起来，并且使它们可以相互替换）\n白话文描述：有共同的抽象行为，具体不同的行为称作为不同的策略，最终可以使用Context上下文获取对应策略。\n应用场景:解决多重if判断问题、聚合支付平台、第三方联合登陆、调用多个不同短信接口等。")]),n._v(" "),_("p",[n._v("责任链模式:\n官方描述:（将请求的发送者和接收者解耦，使的多个对象都有处理这个请求的机会。）\n白话文描述：每一个业务模块之间相互依赖比较有关联、每个关联模块称作为handler(处理器)使用上一个handler引用到下一个hanlder实现一个链表。\n应用场景: 权限控制、网关权限控制、审批、风控系统等。")]),n._v(" "),_("p",[n._v("模版方法:\n官方描述：定义一个算法结构，而将一些步骤延迟到子类实现。\n白话文描述：\n提前定义好整体的骨架，不同的行为让字类实现，相同的行为直接定义在抽象类中复用。\n有大体共同抽象行为全部交给父类实现，不同的行为让子类实现。\n应用场景：支付异步回调重构、Servlet实现")]),n._v(" "),_("p",[n._v("装饰模式：\n官方描述:动态的给对象添加新的功能。\n白话文描述：\n在不改变原有对象的基础上附加功能，相比生成子类更灵活。\n应用场景：IO流")]),n._v(" "),_("p",[n._v("代理模式:\n官方描述:为其他对象提供一个代理以便控制这个对象的访问。\n白话文描述：\n在方法之前和之后做一些处理 实现AOP通知\n应用场景：AOP、事务、日志、权限控制")]),n._v(" "),_("p",[n._v("观察者模式:\n官方描述: 对象间的一对多的依赖关系。\n白话文描述：\n在对象之间定义一对多的依赖，这样一来，当一个对象改变状态，依赖它的对象收到通知并自动更新\n其实就是发布订阅模式，发布者发布消息，订阅者获取消息，订阅了就能收到消息，没订阅就收不到消息。\n应用场景： 发布订阅 事件通知、 Zookeeper、事件监听操作")]),n._v(" "),_("p",[n._v("门面模式:\n官方描述: 对外提供一个统一的方法，来访问子系统中的一群接口。\n该模式就是把一些复杂的流程封装成一个接口供给外部用户更简单的使用")]),n._v(" "),_("p",[n._v("状态模式:\n官方描述: 允许一个对象在其对象内部状态改变时改变它的行为。\n白话文  状态模式与策略模式本质上没有很大区别，主要根据行为决定，如果有共同抽象行为使用策略模式，没有共同行为就使用状态模式。")]),n._v(" "),_("p",[n._v("适配器模式:\n官方描述: 将一个类的方法接口转换成客户希望的另外一个接口。\n应用场景： mybatis日志收集、提供接口转换。\n单例模式\n官方描述：保证在一个jvm中只能有一个实例\n什么是单例\n单例中有七种写法 七种写法对比\n反射机制可以破解单例\n最靠谱单例 枚举")]),n._v(" "),_("h3",{attrs:{id:"css三级标题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css三级标题"}},[n._v("#")]),n._v(" CSS三级标题")]),n._v(" "),_("p",[n._v("策略模式：\n官方描述（定义一系列算法，把他们封装起来，并且使它们可以相互替换）\n白话文描述：有共同的抽象行为，具体不同的行为称作为不同的策略，最终可以使用Context上下文获取对应策略。\n应用场景:解决多重if判断问题、聚合支付平台、第三方联合登陆、调用多个不同短信接口等。")]),n._v(" "),_("p",[n._v("责任链模式:\n官方描述:（将请求的发送者和接收者解耦，使的多个对象都有处理这个请求的机会。）\n白话文描述：每一个业务模块之间相互依赖比较有关联、每个关联模块称作为handler(处理器)使用上一个handler引用到下一个hanlder实现一个链表。\n应用场景: 权限控制、网关权限控制、审批、风控系统等。")]),n._v(" "),_("p",[n._v("模版方法:\n官方描述：定义一个算法结构，而将一些步骤延迟到子类实现。\n白话文描述：\n提前定义好整体的骨架，不同的行为让字类实现，相同的行为直接定义在抽象类中复用。\n有大体共同抽象行为全部交给父类实现，不同的行为让子类实现。\n应用场景：支付异步回调重构、Servlet实现")]),n._v(" "),_("p",[n._v("装饰模式：\n官方描述:动态的给对象添加新的功能。\n白话文描述：\n在不改变原有对象的基础上附加功能，相比生成子类更灵活。\n应用场景：IO流")]),n._v(" "),_("p",[n._v("代理模式:\n官方描述:为其他对象提供一个代理以便控制这个对象的访问。\n白话文描述：\n在方法之前和之后做一些处理 实现AOP通知\n应用场景：AOP、事务、日志、权限控制")]),n._v(" "),_("p",[n._v("观察者模式:\n官方描述: 对象间的一对多的依赖关系。\n白话文描述：\n在对象之间定义一对多的依赖，这样一来，当一个对象改变状态，依赖它的对象收到通知并自动更新\n其实就是发布订阅模式，发布者发布消息，订阅者获取消息，订阅了就能收到消息，没订阅就收不到消息。\n应用场景： 发布订阅 事件通知、 Zookeeper、事件监听操作")]),n._v(" "),_("p",[n._v("门面模式:\n官方描述: 对外提供一个统一的方法，来访问子系统中的一群接口。\n该模式就是把一些复杂的流程封装成一个接口供给外部用户更简单的使用")]),n._v(" "),_("p",[n._v("状态模式:\n官方描述: 允许一个对象在其对象内部状态改变时改变它的行为。\n白话文  状态模式与策略模式本质上没有很大区别，主要根据行为决定，如果有共同抽象行为使用策略模式，没有共同行为就使用状态模式。")]),n._v(" "),_("p",[n._v("适配器模式:\n官方描述: 将一个类的方法接口转换成客户希望的另外一个接口。\n应用场景： mybatis日志收集、提供接口转换。\n单例模式\n官方描述：保证在一个jvm中只能有一个实例\n什么是单例\n单例中有七种写法 七种写法对比\n反射机制可以破解单例\n最靠谱单例 枚举")])])}),[],!1,null,null,null);v.default=t.exports}}]);