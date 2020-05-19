#### Vue生命周期

​	vue生命周期指的是vue实例有一个完整的声明周期，该周期历经开始创建、初始化数据、编译模板、挂载			dom-》渲染、更新-》渲染、卸载等一系列过程

##### beforeCreate（创建前）

​	刚初始化一个vue空的实例对象，这个对象上只有一些生命周期函数和默认事件，其他东西都未被创建



##### created（创建后）

​	data和methods都已经被初始化完毕，最早可在这调用methods和操作data



##### beforeMount（载入前）

​	在模板挂载之前被调用，此时相关的render函数首次被调用，实例完成以下配置：编译模板，把data里面的数据和模板生成HTML



##### mounted（载入后）

​	在el被新创建的vm.$el替换，并挂载到实例上去之后调用。实例已完成以下配置：用上面编译好的HTML内容替换el属性指向的dom对象，完成模板中的HTML渲染到HTML页面中。此过程进行ajax交互



​	这两个是组件运行阶段执行的声明周期：会根据data数据的改变，有选择性的触发0次到n次

##### beforeUpdate（更新前）

​	页面数据暂未更新，data数据已更新，页面尚未和最新的数据保持同步

##### updated（更新后）

​	页面和data中的数据保持同步状态

##### beforeDestroy（销毁前）

​	vue实例从运行阶段进入到销毁阶段，此时实例身上的data和methods、过滤器、指令都还处于可用状态

##### destroyed（销毁后）

​	在实例销毁后调用。调用后所有的事件监听器都会被移除，所有的子实例也会被销毁



#### vue父子组件生命周期执行顺序

##### 加载渲染过程

​	父beforeCreate =》 父created =》 父beforemount =》 子beforeCreate =》 子created =》 子beforemount =》子mounted =》 父mounted

##### 子组件更新过程

​	父beforeUpdate =》 子beforeUpdate =》 子updated =》 父updated

##### 父组件更新过程

​	父beforeUpdate =》 父updated

##### 销毁过程

​	父beforeDestroy =》 子beforeDestroy =》 子destroyed =》 父destroyed

































