const homePage = {
    template: `   <section class="mainSection carousel">
        <div class="overLayer container">
            <h2>Welcome to Wade's World - Problem Solving encouraged</h2>

            <div class="mainButtonSection ">
                <div class="row">
                    <div class="col-4">
                        <router-link class="portfolio" to="/portfolio">
                            <div class="hd-btn panelButton"><span class="theSpan">My Portfolio</span>
                            </div>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <router-link to="/about">
                            <div class="hd-btn panelButton" id="panelButtonAbout"><span class="theSpan">About Me</span></div>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <router-link to="/contact">
                            <div class="hd-btn panelButton" id="panelButtonContact"><span class="theSpan">Make Contact</span></div>
                        </router-link>
                    </div>

                </div>

            </div>

        </div>

    </section>
`
}
const aboutPage = {
    template: `<section class="mainSection carousel">
                 <div class="overLayer">
                   <br>
                   <h1 class="hdr-text"> Welcome to the About Page!</h1>
                   <br>
                   <h2>~ This is the page about me ~ </h2>
                 </div>
               </section>`
}
const portfolioPage = {
    template: `<section class="mainSection">
    <h1 class="hdr-text"> Welcome to the Portfolio Page!</h1>
    <div id="portfolio-carousel" class="portCarosel carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img class="d-block img-fluid" src="./public/img/slide1.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block img-fluid" src="./public/img/slide2.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block img-fluid" src="./public/img/slide3.jpg" alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</section>`
}
const contactPage = {
    template: `<section class="mainSection">
    <div class="overLayer">
        <br>
        <h1 class="hdr-text"> Welcome to the Contact Page!</h1>
        <br>
        <div class="formHolder">
            <form id="contactForm" action="">
                <span class="contact-text">Enter Name</span>
                <input type="text" placeholder="enter name" />
                <br>
                <span class="contact-text">Enter Email</span>
                <input type="email" placeholder="email address" />
                <div>
                    <span class="contact-text">Comments</span>
                    <textarea name="comment" form="usrform">Enter text here...</textarea>
                </div>
                <router-link to="/">
                    <button class="submitBtn">Make Contact</button>
                </router-link>
            </form>
        </div>
    </div>
</section>
`
}

const wbSpaRouter = new VueRouter({
    routes: [
        {
            path: '/',
            component: homePage
        },
        {
            path: '/about',
            component: aboutPage
        },
        {
            path: '/portfolio',
            component: portfolioPage
        },
        {
            path: '/contact',
            component: contactPage
        }
    ]
})

const mainVM = new Vue({
    router: wbSpaRouter
}).$mount('#app')

$(function () {
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});
