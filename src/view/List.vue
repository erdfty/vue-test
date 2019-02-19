<template>
    <div>
        <ul>
                <li v-for="(item,index) in pageLists" :key="index">
                    <div>
                        <h3>{{item.title}}</h3>
                        <hr>
                        <p>{{item.content}}</p>
                        <router-link :to="{name: 'info'}">查看详情>></router-link>
                    </div>
                </li>

        </ul>
    </div>
</template>

<script>
  import store from '@/store'
    export default {
        name: "List",
        store,
        computed: {
            pageLists() {
                return store.state.lists
            }
        },
        methods: {

        }

    }
</script>

<style scoped lang="less">
    li{
        width: 90%;
        margin: 10px auto;
        border: #BFBFBF 1px solid;
        border-radius: 5px;
        padding: 10px;
        -webkit-box-shadow: 1px 1px 4px #BFBFBF;
        -moz-box-shadow: 1px 1px 4px #BFBFBF;
        box-shadow:  1px 1px 4px #BFBFBF;
        hr{
            border: .5px solid #BFBFBF;
        }
        h3,p{
            line-height: 30px;
            font-weight: normal;
            font-size: 16px;
        }
        p{
            font-size: 15px;
        }
    }

</style>
