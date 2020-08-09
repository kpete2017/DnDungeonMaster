<template>
    <div class="login-background"> 
        <form class="login-form"> 
            <h1>Login</h1>
            <input id="login-username" type="username" placeholder="Username" value="kpete2017"/>
            <input id="login-password" type="password" placeholder="Password" value="Password"/>
            <button id="login-submit" @click="handleLogin" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        handleLogin: function() {
            this.$emit('login')
        }
    }
}
</script>

<style scoped>

    #login-username {
        margin-bottom: .5rem;
        margin-top: .5rem;
    }

    #login-password {
        margin-bottom: .5rem;
        margin-top: .5rem;
    }

    #login-submit {
        margin-bottom: .5rem;
        margin-top: .5rem;
    }


    .login-background {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        color: #ececec;
        background-color: #121212;
    }
    
    .login-form {
        text-align: center;
        background-color: #242424;
        position: relative;
        top: 10rem;
        width: 20rem;
        height: 20rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    .login-form > input {
        align-self: center;
        width: 10rem;
    }

    .login-form > button {
        align-self: center;
        width: 10.5rem;
    }
</style>