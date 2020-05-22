##### 表格自定义索引

```html
<el-table-column
            type='index'
            label='行号'
            align='center'
            width='50'
            fixed='left'
            :index='indexMethod'
          />
```

```js
methods:{
    //  表格自定义索引
    indexMethod(index) {
      return index + 1 + this.pageSize * (this.currentPage - 1)
    },
}
```

