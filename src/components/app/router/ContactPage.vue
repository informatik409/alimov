<template lang="">
    <div class="contact">
        <div class="contact-text">
            <div class="text">Contact Me</div>
        </div>
        <div class="container">
            <form @submit.prevent="onSend" >
            <div class="mb-3">
                <label for="full_name" class="form-label">Full Name</label>
                <input required v-model="fullname" type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input required v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="Message" class="form-label">Message</label>
                <textarea required v-model="message" class="form-control" id="message" cols="20" rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-light">Send</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            fullname: "",
            email: "",
            message: "",


            //Token Telegram BOT 
            token: "5781325179:AAHBFeKy4am0UNN7Wfu3Z50b6g9MtCKpfdU",
            chatID: 5027238978
        }
    },
    
    methods: {
        onSend() {
            const fullMessage = `Full Name: ${this.fullname}  \nEmail: ${this.email}  \nMessage: ${this.message}`
            axios.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatID}&text=${fullMessage}`)
            .then( response => {
                console.log("Successfully");
            }, error => {
                console.log(error)
            })
        }
    },
}

</script>
<style scoped>

    .contact {
        width: 100%;
        height: 130vh;
        background-color: #18161f;
    }

    .contact-text {
        width: 100%;
    }
    
    .contact-text .text {
        text-align: center;
        font-family: "Roboto", sans-serif;
        font-size: 40px;
        font: 40px Rubik, san-serif;
        color: rgb(61, 61, 233);
        text-align: center;
        padding-top: 70px;
    }

    .container {
        color: white;
    }

    .container button {
        border: 1px solid grey;
    }

</style>