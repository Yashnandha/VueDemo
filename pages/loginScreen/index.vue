<template>
  <div class="container">
    <div class="contentContainer">
      <img src="../../assets/png/logo.png" class="logo" />
      <div class="formDetails">
        <label class="welcomeLabel">Welcome Back</label>
        <br />
        <label class="description"
          >Enter your credentials to access your account.</label
        >
        <form @submit.prevent="submit">
          <div>
            <div class="inputContainer">
              <label class="inputLabel">Email</label>
              <input
                id="userEmail"
                type="text"
                class="inputs"
                placeholder="yourmail@tulips.com"
                v-model="userDetails.email"
              />
              <text class="errorMsg">{{ error.emailErr }}</text>
            </div>

            <div class="inputContainer">
              <label class="inputLabel">Password</label>
              <input
                id="userPassword"
                type="password"
                class="inputs"
                maxlength="25"
                placeholder="******"
                v-model="userDetails.password"
              />
              <text class="errorMsg">{{ error.passwordErr }}</text>
            </div>

            <div>
              <button class="buttonContainer">Done</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// Store user email and password
const userDetails = ref(
  reactive({
    email: '',
    password: '',
  }),
);

const error = ref(
  reactive({
    emailErr: null,
    passwordErr: null,
  }),
);

const submit = async () => {
  var isValid = true
  let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if(userDetails.value.email == ''){
    isValid = false
    error.value.emailErr = 'Please enter your email address'
  } else if (!emailRegex.test(userDetails.value.email)){
    isValid = false
    error.value.emailErr = 'Please enter valid email address'
  }else  {
    error.value.emailErr = null
  }

  if (userDetails.value.password == '') {
    isValid = false
    error.value.passwordErr = 'Please enter your password'
  } else if (userDetails.value.password.length <= 8) {
    isValid = false
    error.value.passwordErr = 'Please enter 8 digit password'
  } else {
    error.value.passwordErr = null
  }

  if (isValid) {
    navigateTo('/homeScreen')
  }
};
</script>

<style>
.container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(228, 214, 255);
  flex-direction: column;
}
.contentContainer {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.logo {
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
}
.formDetails {
  justify-content: center;
  padding: 30px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -2px rgba(77, 77, 77, 0.58);
}
.welcomeLabel {
  font-size: 26px;
  color: black;
  word-spacing: 2px;
  text-align: center;
}
.description {
  font-size: 18px;
  color: rgb(83, 83, 83);
  word-spacing: 2px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 30px;
}

.inputContainer {
  display: flex;
  flex-direction: column;
}

.inputs {
  height: 40px;
  font-size: 18px;
  font-weight: 600;
}

.inputLabel {
  font-size: 18px;
  font-weight: 300;
  margin-top: 20px;
  margin-bottom: 5px;
}

.loginFormContainer {
  display: flex;
  flex-direction: column;
}

.errorMsg {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 5px;
  color: rgb(251, 39, 39);
  margin-top: 5px;
}
</style>
