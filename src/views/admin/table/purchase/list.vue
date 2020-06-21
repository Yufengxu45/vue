<template>
  <div>
    <List :columns="columns" :data="items">
      <div class="list-header">
        <div class="list-operations">
          <Button class="margin-right-sm" type="primary" @click="$router.push(`/klass/edit`)">新增</Button>
        </div>
        <div class="list-search">
          <Form inline >
            <Form-item prop="name">
              <i-input 
                placeholder="请输入货物信息名称" 
                v-model="input" 
                clearable>
              </i-input>
            </Form-item>
            <Form-item>
              <i-button type="primary" shape="circle" icon="ios-search"></i-button>
            </Form-item>
          </Form>
        </div>
      </div>
    </List>
  </div>
</template>
<script>
import List from '@/components/List.vue'
import shippingService from '@/api/shippinginfo'

export default {
  components: {
    List
  },
  data () {
    return {
      input:'',
      items:[],
      columns:[
      {
          title: '产品编号',
          key: 'id',
      },
      {
          title: '供应商编号',
          key: 'purchaseid',
      },
      {
          title: '产品名称',
          key: 'name',
      },
      {
          title: '产品价格',
          key: 'price',
      },
      {
          title: '产品信息',
          key: 'information',
      }
      ]
    }
  },
  created () {
    this.getKlassList()
  },
  methods: {
    getKlassList(){
      shippingService.list().then(res=>{
        this.items = res.data
      })
    },
  }

}
</script>

<style>

.list-header {
  position: relative;
  margin-top: 20px;
  height: 48px;
}
.list-operations {
  position: absolute(0, null, null, 0);
  min-width: 300px;
}
.list-search {
  position: absolute;
  min-width: 300px;
  right: -10px;
  top: 0;
}
</style>
