<template>
    <div id="pageSelectorMobile">
        <nav class="downBar">
            <ul class="downBar_links">
                <li class="downBar_link">
                    <div id="HomeMobile" href="#" @click="setMarkerPosition('Home');linkTo('Home')"><i class="bx bx-home-alt-2" style="color: #fff;"></i></div>
                </li>
                <li class="downBar_link">
                    <div id="AboutMeMobile" href="#" @click="setMarkerPosition('AboutMe');linkTo('AboutMe')"><i class="bx bx-user" style="color: #fff;"></i></div>
                </li>
                <li class="downBar_link">
                    <div id="MyJobMobile" href="#" @click="setMarkerPosition('MyJob');linkTo('MyJob')"><i class="bx bx-code-alt" style="color: #fff;"></i></div>
                </li>
                <div class="downBar_light" :style="{left: left, width: width}"></div>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    inject: ['linkTo'],
    data() {
        return {
            left: 0,
            width: 0
        }
    },
    methods: {
        setMarkerPosition(id) {
            if(id == '') {id = 'Home';}

            this.left = document.querySelector('#' + id + 'Mobile').offsetLeft + 'px';
            this.width = document.querySelector('#' + id + 'Mobile').offsetWidth + 'px';
            this.activePage(id);
        },
        activePage(activePage) {
            if(activePage == '') {activePage = 'Home';}

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
        let splitted_url = window.location.href.split('/');
        let last_piece_url = splitted_url.length;
        let page = splitted_url[last_piece_url - 1];
        this.setMarkerPosition(page);
    }
}
</script>