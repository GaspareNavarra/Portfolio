<template>
    <div id="pageSelectorMobile">
        <nav class="downBar">
            <ul class="downBar_links">
                <li class="downBar_link">
                    <div id="Home" href="#" @click="indicator();linkTo('Home')"><i class="bx bx-home-alt-2" style="color: #fff;"></i></div>
                </li>
                <li class="downBar_link">
                    <div id="AboutMe" href="#" @click="indicator();linkTo('AboutMe')"><i class="bx bx-user" style="color: #fff;"></i></div>
                </li>
                <li class="downBar_link">
                    <div id="MyJob" href="#" @click="indicator();linkTo('MyJob')"><i class="bx bx-code-alt" style="color: #fff;"></i></div>
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

            marker.style.left = document.querySelector('#' + id).offsetLeft + 'px';
            marker.style.width = document.querySelector('#' + id).offsetWidth + 'px';
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