<template>
    <el-container id="container" ref="container">
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            cheight: document.documentElement.clientHeight
        };
    },
    // watch: {
    //     cheight(newValue, oldValue) {
    //         console.log(newValue, oldValue);
    //     }
    // },
    mounted() {
        document.getElementById("container").style.height =
            document.documentElement.clientHeight + "px";

        window.onresize = () => {
            document.getElementById("container").style.height =
                document.documentElement.clientHeight + "px";
        };
    }
};
</script>
<style scoped>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>