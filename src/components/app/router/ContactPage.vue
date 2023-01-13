<template lang="">
    <div class="contact">
        <div class="contact-text">
            <div class="text">Contact Me</div>
        </div>
        <div class="container">
            <form @submit.prevent="onSend" >
            <div class="mb-3">
                <div class="alert">
                    <p id="p">Message has been sent!! 😊</p>
                    <p id="close">❌</p>
                </div>
            </div>
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
            const closeBtn = document.querySelector("#close");
            const alert = document.querySelector(".alert");
            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const message = document.querySelector("#message");
            const fullMessage = `Full Name: ${this.fullname}  \nEmail: ${this.email}  \nMessage: ${this.message}`
            axios.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatID}&text=${fullMessage}`)
            .then( response => {
                alert.style.display = 'block'
                name.value = null;
                email.value = null;
                message.value = null;
            }, error => {
                console.log(error)
            });

            closeBtn.addEventListener("click", ()=> {
                alert.style.display = 'none'
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

    .alert {
        top: 90px;
        right: 10px; 
        position: absolute;
        background-color: #fff;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        display: none;
        animation-name: animate;
        animation-duration: 0.2s;
    }

    @keyframes animate {
        0% {
            right: 0px;
            transform: scale(0.0);
        }
        25% {
            right: 3;
            transform: scale(0.3);
        }
        50% {
            right: 5px;
            transform: scale(0.6);
        }
        75% {
            right: 7;
            transform: scale(0.8);
        }
        100% {
            right: 10px;
            transform: scale(0.9);
        }
    }

    .alert #p {
        color: black;
        font-family: "Roboto", sans-serif;
        font: 15px Rubik, san-serif;
        text-align: start;
        margin: 0;
        padding: 1px;
    }

    .alert #close {
        cursor: pointer;
        position: absolute;
        top: 3px;
        right: 5px;
    }

</style>