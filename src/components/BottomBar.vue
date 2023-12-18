<template>
    <div id="pageSelectorMobile">
        <nav class="downBar">
            <ul class="downBar_links">
                <li class="downBar_link">
                    <div id="HomeMobile" href="#" @click="indicator();linkTo('Home');activePage('Home')"><i class="bx bx-home-alt-2" style="color: #fff;"></i></div>
                </li>
                <li class="downBar_link">
                    <div id="AboutMeMobile" href="#" @click="indicator();linkTo('AboutMe');activePage('AboutMe')"><i class="bx bx-user" style="color: #fff;"></i></div>
                </li>
                <li class="downBar_link">
                    <div id="MyJobMobile" href="#" @click="indicator();linkTo('MyJob');activePage('MyJob')"><i class="bx bx-code-alt" style="color: #fff;"></i></div>
                </li>

                <div class="downBar_light"></div>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    inject: ['linkTo'],
    methods: {
        indicator() {
            let marker = document.querySelector('.downBar_light');

            marker.style.left = event.target.offsetLeft + 'px';
            marker.style.width = event.target.offsetWidth + 'px';
        },
        setMarkerPosition(id) {
            if(id == '') {id = 'Home';}
            let marker = document.querySelector('#marker');

            marker.style.left = document.querySelector('#' + id + 'Mobile').offsetLeft + 'px';
            marker.style.width = document.querySelector('#' + id + 'Mobile').offsetWidth + 'px';
        },
        activePage(activePage) {
            let Home = document.querySelector('#HomeMobile');
            let AboutMe = document.querySelector('#AboutMeMobile');
            let MyJob = document.querySelector('#MyJobMobile');

            Home.classList.remove('activePage');
            AboutMe.classList.remove('activePage');
            MyJob.classList.remove('activePage');

            document.querySelector('#' + activePage + 'Mobile').classList.add('activePage')
        }
    },
    mounted() {
        this.linkTo('Home');
        this.activePage('Home');
        let splitted_url = window.location.href.split('/');
        let last_piece_url = splitted_url.length;
        let page = splitted_url[last_piece_url - 1];
        this.setMarkerPosition(page);
    }
}
</script>