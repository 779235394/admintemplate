<template>
    <div class="login">
        <el-carousel
            class="login2"
            indicator-position="none"
            arrow="never"
            autoplay
            :interval="4000"
        >
            <el-carousel-item>
                <div class="carousel-img bg1"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="carousel-img bg2"></div>
            </el-carousel-item>
        </el-carousel>

        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="../../assets/logo.png" alt />
            </div>
            <div class="login-title">
                <span>密码登录</span>
            </div>
            <!--表单区域-->
            <el-form label-width="0px" class="login_form">
                <el-form-item>
                    <el-input
                        prefix-icon="el-icon-user"
                        v-model="loginForm.username"
                        placeholder="请输入账号"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input
                        prefix-icon="el-icon-lock"
                        v-model="loginForm.password"
                        placeholder="请输入账号"
                        show-password
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btns">登录</el-button>
                </el-form-item>
            </el-form>

            <div class="forget-pwd">
                <a href="javascript:;">创建账号</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm: {
                username: "",
                password: ""
            }
        };
    }
};
</script>
<style lang="scss">
.login .login2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .el-carousel__container {
        height: 100%;
    }
}
.bg1 {
    background-image: url("../../assets/loginform.jpg");
}
.bg2 {
    background-image: url("../../assets/loginform2.png");
}
.carousel-img {
    width: 100%;
    height: 100%;
    background-size: cover;
}
.login_box {
    background: rgba(255, 255, 255, 0.7);
    width: 480px;
    height: 400px;
    padding: 36px;
    position: absolute;
    right: 10%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 1000;

    .avatar_box {
        padding: 10px;
        width: 130px;
        height: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #eee;
        }
    }
}
.login_form {
    width: 100%;
    // height: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    // background: #fff;
}
.btns {
    width: 100%;
}
.login-title {
    font-size: 22px;
    font-weight: 600;
    color: #2f2f2f;
    margin: 70px 0 20px 0;
    text-align: left;
    padding: 0px 20px;
}
.forget-pwd {
    text-align: right;
    text-decoration: none;
    margin-top: 15px;
    a {
        color: #2d8cf0;
        background: 0 0;
        text-decoration: none;
        outline: 0;
        cursor: pointer;
        transition: color 0.2s ease;
    }
}
</style>