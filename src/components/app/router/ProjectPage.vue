<template>
    <div>
        <div class="projects">
            <div class="projects-header">
                <div class="header-text">My Projects</div>
            </div>
            <div class="projects-main">
                <div class="projects-box">
                    <div class="projects-box-img">
                        <img src="@/assets/img/projects/3d-edu.jpg" alt="">
                    </div>
                    <div class="projects-box-main">
                        <div class="box-main-name">Project Name: <span>3D O'quv Markazi</span></div>
                        <div class="box-main-technology">Used Technologies: <span>Html, Css, Bootstrap, Javascript</span></div>
                        <a href="https://3d-edu.netlify.app/" target="_blank">
                            <button>
                                Demo 
                                <i class="fa-solid fa-link"></i>
                            </button>
                        </a>
                    </div>
                </div>

                <div class="projects-box">
                    <div class="projects-box-img">
                        <img src="@/assets/img/projects/e-mamba.jpg" alt="">
                    </div>
                    <div class="projects-box-main">
                        <div class="box-main-name">Project Name: <span>E-mamba</span></div>
                        <div class="box-main-technology">Used Technologies: Html, Css, Bootstrap, Javascript<span></span></div>
                        <a href="https://e-mamba.netlify.app/" target="_blank">
                            <button>
                                Demo 
                                <i class="fa-solid fa-link"></i>
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>

.projects {
    width: 100%;
    height: 100vh;
    background-color: #18161f;
}

.projects-header {
    width: 100%;
    text-align: center;
}

.projects-header .header-text {
    padding-top: 100px;
    font-family: "Roboto", sans-serif;
    /* font-size: 30px; */
    font: 40px Rubik, san-serif;
    color: rgb(61, 61, 233);
    text-align: center;
    padding-bottom: 40px;
}

.projects-main {
    width: 80%;
    margin: 0 auto;
    color: white;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 80px;
    justify-content: space-around;
}

.projects-box {
    width: 350px;
    height: auto;
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    border-radius: 10px;
}

.projects-box-img {
    width: 350px;
    height: 200px;
}

.projects-box-img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.projects-box-main {
    padding: 20px 20px;
}

.projects-box-main a button {
    padding: 5px 20px;
    margin-top: 20px;
    border: none;
    border-radius: 20px;
}

@media screen and (min-width: 0px) and (max-width: 700px) {

    .projects {
        width: 100%;
        height: auto;
    }

    .projects-main {
        width: 100%;
        margin: 0 auto;
        color: white;
        display: grid;
        grid-template-columns: auto;
        /* grid-gap: 80px; */
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 100px;
        background-color: #18161f;
    }

    .projects-box {
        width: 90%;
        height: auto;
        margin: 0 auto;
    }

    .projects-box-img {
        width: 100%;
        height: auto;
    }

}

@media screen and (min-width: 700px) and (max-width: 900px) {

    .projects {
        width: 100%;
        height: 100vh;
    }

    .projects-main {
        width: 100%;
        margin: 0 auto;
        color: white;
        display: grid;
        grid-template-columns: auto auto;
        /* grid-gap: 80px; */
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 100px;
        background-color: #18161f;
    }

    .projects-box {
        width: 300px;
        height: auto;
        margin: 0 auto;
    }

    .projects-box-img {
        width: 100%;
        height: auto;
    }

}

</style>