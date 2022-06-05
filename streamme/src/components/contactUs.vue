<template>
  <div class="main">
    <header-component></header-component>
    <div class="page-title">Contact Us</div>
    <div class="content">
      <div class="right">
        <div class="title">Need Help?</div>
        <div class="subtitle">Our customer service is here to answer <br>all your questions. What do you need help with?</div>
        <img src="/img/contact-image.svg" class="contact-image">
      </div>
      <div class="left">
        <div class="form">
          <div class="input-container">
            <input id="name" class="name" type="text" v-model="form.name" placeholder=" ">
            <span class="input-label" for="name">Name</span>
          </div>
          <div class="input-container" ref="email">
            <input id="email" type="email"
                   @change="checkEmail"
                   @focus="$refs.email.classList.remove('warning')"
                   v-model="form.email" placeholder=" ">
            <span class="input-label" for="email">Email</span>
          </div>
          <div class="input-container text-area">
            <textarea  rows="4" id="message" class="message" v-model="form.message" placeholder=" "></textarea>
            <span class="input-label" for="message">Your message</span>
          </div>

          <div class="message success" v-if="showMessageSent">Got it! Our team will send you a reply soon 🚀</div>
          <div class="message error" v-if="showMessageError">Ouuups, there was an error, please try again 😵</div>
          <div class="message incomplete" v-if="showMessageincomplete">Ouuups, check if you have completed all the fields 😵</div>
          <div class="validate" @click="sendEmail">Send</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/Header";
import emailjs from 'emailjs-com';

export default {
  name: "contactUs",
  components: {HeaderComponent},
  data() {
    return {
      valid: false,
      showMessageSent: false,
      showMessageError: false,
      showMessageincomplete: false,
      form: {
        name: null,
        email: null,
        message: null,
      }
    }
  },
  methods: {
    checkEmail() {
      const pattern = /[a-zA-Z0-9.\-_+]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}/;
      if (this.form.email && !this.form.email.match(pattern)) {
        this.$refs.email.classList.add('warning');
        this.valid = false;
      } else if (this.form.email.match(pattern)) {
        this.valid = true;
      }
    },
    sendEmail() {
      if (this.valid && this.form.message && this.form.email && this.form.name) {
        try {
          emailjs.send("service_0tbx95b","template_5w07e1n",{
            from_name: this.form.name,
            to_name: "Streamme",
            message: this.form.message,
            reply_to: this.form.email,
          });
          this.showMessageSent = true;
          setTimeout(() => {
            this.showMessageSent = false;
          }, 3000);
        } catch(error) {
          console.log({error});
          this.showMessageError = true;
          setTimeout(() => {
            this.showMessageError = false;
          }, 3000);
        }
        // Reset form field
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
      } else {
        this.showMessageincomplete = true;
        setTimeout(() => {
          this.showMessageincomplete = false;
        }, 3000);
      }
    }
  }
}
</script>

<style scoped lang="scss">

.page-title, .title {
  font-size: 28px;
  font-weight: bold;
  color: rgba(60, 60, 59, 0.66);
}
.page-title {
  width: 254px;
  height: 42px;
  margin: 10px 0 27px 41px;
  text-align: right;
  padding-bottom: 5px;
  border-bottom: 2px solid #D12F26;
}

.subtitle {
  font-weight: 400;
  font-size: 16px;
  color: #B9BED1;
  margin-top: 20px;
}

.content {
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  width: 93%;
  height: 70vh;

  .right {
    position: relative;
    width: 40%;
    height: 90%;

    .contact-image {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }

  .left {
    height: 90%;
    width: 60%;
    text-align: center;
    .form {
      width: 100%;
      padding: 5px;
      .input-container {
        border-radius: 5px;
        border: 1px solid #B9BED1;
        width: 90%;
        height: 60px;
        position: relative;
        transition: 150ms ease;
        margin: 0 5% 5% 5%;

        &.warning {
          border-color: #ee1508;
        }
      }
      .input-container:focus-within {
        border-width: 2px;
      }
      .input-container > input,
      .input-container > textarea,
      {
        outline: none;
        padding: 20px 10px 20px 15px;
        background: none;
        position: relative;
        border: none;
        width: 100%;
      }
      .text-area {
        height: inherit;
      }
      span {
        color: #DCDFEA;
        font-size: 16px;
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 5px;
        line-height: 1px;
        pointer-events: none;
      }
      .input-container > input:focus ~ span,
      .input-container > textarea:focus ~ span,
      textarea:not(:placeholder-shown) ~ span,
      input:not(:placeholder-shown) ~ span, {
        color: #B9BED1;
        background-color: #fff;
        font-size: 12px;
        transform: translateY(-29px);
        padding: 0 5px;
      }

      textarea:not(:placeholder-shown) ~ span,
      .input-container > textarea:focus ~ span {
        transform: translateY(-69px);
      }

      .validate {
        text-align: center;
        width: 70%;
        display: inline-block;
        background-color: #D12F26;
        padding: 20px 0;
        color: white;
        font-size: 16px;
        border-radius: 5px;

        &:hover {
          background-color: darken(#D12F26, 5);
        }
      }

      .message {
        margin: 2% 0;
        font-size: 16px;

        &.success {
          color:green;
        }
        &.error {
          color: #D12F26;
        }
        &.incomplete {
          color: orangered;
        }
      }
    }
  }
}

</style>