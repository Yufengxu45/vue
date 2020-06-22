    <template>
    <i-form v-ref:form-custom :model="formCustom" :rules="ruleCustom" :label-width="80" >
        <Form-item label="密码" prop="passwd">
            <i-input type="password" :value.sync="formCustom.passwd" style="width: 250px"></i-input>
        </Form-item>
        <Form-item label="确认密码" prop="passwdCheck">
            <i-input type="password" :value.sync="formCustom.passwdCheck" style="width: 250px"></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formCustom')">提交</i-button>
        </Form-item>
    </i-form>
</template>
<script>
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
