<template>
  <div class="limit-width" style="margin-top:20px;">
    <Form
      ref="PersonInfo"
      :model="PersonInfo"
      :rules="rules"
      :label-width="100">
      <Form-item label="电子邮件" prop="email">
        <Input v-model="PersonInfo.email" placeholder="请输入新电子邮件地址" style="width:300px;" />
      </Form-item>
      <Form-item label="地址" prop="adress">
        <Input  v-model="PersonInfo.adress" placeholder="请输入新地址" style="width:300px;" />
      </Form-item>
      <Form-item label="电话" prop="phone">
        <Input  type="number" v-model="PersonInfo.phone" placeholder="请输入新电话号码" style="width:300px;" />
      </Form-item>
      <Form-item label="邮编" prop="postcode">
        <Input  type="number" v-model="PersonInfo.postcode" placeholder="请输入新的地址邮编" style="width:300px;" />
      </Form-item>
      <Form-item label="银行账户" prop="bank">
        <Input  type="number" v-model="PersonInfo.bank" placeholder="请输入新的银行账户" style="width:300px;" />
      </Form-item>
      <Form-item class="save">
        <Button type="primary" @click="onSave" class="margin-right-sm">保存</Button>
        <Button @click="goBack()" style="margin-left:10px;">返回</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      PersonInfo: {},
      rules: {
        email: [
          {
            required: true,
            message: '邮件地址不能为空'
          },
          {
              type: 'email',
              message: '邮件格式不正确',
            }
        
        ],
        adress: [
            {
                required: true,
                message: "地址不能为空",
            }
        ],
        phone: [
            {
                required: true,
                message: "电话号码不能为空",
            },
            {
                max:11,
                message: "电话号码不能超过十一位",
            }
        ],
        postcode: [
            {
                required: true,
                message: "邮编不能为空",
            },
            {
                min: 6,
                message: "邮编不能少于6位",
            },
            {
                max: 6,
                message: "邮编不能大于6位",
            }

        ],
        bank: [
            {
                required: true,
                message: "银行账号不能为空",
            },
            {
                min: 12,
                message: " 银行账号不能少于12位",
            },
            {
                max: 21,
                message: "银行账号不能多于21位",
            }
        ]
      },
    }
  },
  async created () {
  },
  methods: {
    goBack () {
      window.history.go(-1)
    },
    onSave () {
      this.$refs.StudentInfo.validate(async valid => {
        if (valid) {
          this.$Message.success("保存成功")

        }
      })
    }
  }
}
</script>
