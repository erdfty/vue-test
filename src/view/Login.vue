<template>
    <div class="cont">
        <form v-if="!isReg">
            <h2>欢迎登陆</h2>
            <div class="line">
                <div class="text">用户名：</div>
                <input type="text" v-model="name">
            </div>
            <div class="line">
                <div class="text">密码：</div>
                <input type="password" v-model="password">
            </div>
            <div class="btn">
                <button type="button" @click="login()">登录</button>
                <button type="button" @click="reg()">注册</button>
            </div>
        </form>
        <form  v-else>
            <div>用户名：</div>
            <input type="text" v-model="name">
            <div>密码：</div>
            <input type="password" v-model="password">
            <div>再次输入密码：</div>
            <input type="password" v-model="repeat">
            <button type="button" @click="addUser()">确定</button>
            <button type="button" @click="cancel()">取消</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                isReg: false,
                name: '',
                password: '',
                repeat: ''
            }
        },
        methods:{
            login() {
                if (localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password){
                    this.name = ''
                    this.password = ''
                    this.$router.push('/home/list')
                }else{
                    alert("用户名或密码输入错误!!")
                }

            },
            reg () {
                this.isReg = true
            },
            cancel () {
                this.isReg = false
            },
            addUser () {
                if (this.password === this.repeat){
                    localStorage.setItem("name", this.name)
                    localStorage.setItem("password", this.password)
                    this.name = ''
                    this.password = ''
                    this.isReg = false
                }else{
                    alert('两次密码输入不一致')
                }
            }
        }
    }
</script>

<style scoped lang="less">
    h2{
        margin-bottom: 20px;
    }
    .cont{
        padding: 10px;
    }
    .line{
        width: 100%;
        display: block;
        margin-top: 10px;
        position: relative;
        .text{
            width: 25%;
            display: inline-block;
            text-align: right;
        }
        input{
            width: 70%;
            display: inline-block;
            line-height: 36px;
            border-radius: 5px;
            border: 1px solid #A5A3A5;
            -webkit-box-shadow: 1px 1px 2px #BFBFBF;
            -moz-box-shadow: 1px 1px 2px #BFBFBF;
            box-shadow:  1px 1px 2px #BFBFBF;
        }
    }
    .btn{
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content:  space-around;
        margin-top: 20px;
        button{
            flex: 1;
            margin: 10px;
            padding-top: 8px;
            padding-bottom: 8px;
            border-radius: 5px;
            border: 1px solid #A5A3A5;
            background: #fff;
            color: #42b983;
            -webkit-box-shadow: 1px 1px 2px #BFBFBF;
            -moz-box-shadow: 1px 1px 2px #BFBFBF;
            box-shadow:  1px 1px 2px #BFBFBF;
            &:active,&:first-child{
                background: #42b983;
                color:#fff;
            }
        }
    }
</style>
