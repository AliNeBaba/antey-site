<template>
        <footer class="container-fluid bg-dark p-2">
            <div>
            <p class="text-center p-1 div-bottom">
                Отдел&nbsp;по&nbsp;работе&nbsp;с&nbsp;клиентами: <a href="tel:8 (928) 273-07-00" class="inline-tel">8&nbsp;(928)&nbsp;273-07-00</a>
            </p>
            </div>
            <div class="row justufy-content-around">
                <div class="addres col-sm-5 p-3">
                    <div class="text-center">
                        <p>Ул. Энгельса 158/3<br>Tорговый дом «Форум»<br>3-й этаж офис 34<br>Телефоны:<br><a href="tel:8 (928) 273-07-00">8&nbsp;(928)&nbsp;273-07-00</a><a href="tel:8 (86132) 3-40-04" >8&nbsp;(86132)&nbsp;3-40-04</a><a href="mailto: osb-eisk@mail.ru">Email: osb-eisk@mail.ru</a></p>
                        <a class="inline text-center" href="https://vk.com/antey_yeisk"><img src="@/assets/soc-vk.svg" /></a>
                        <a class="inline text-center" href="https://www.instagram.com/antey_yeisk/"><img src="@/assets/soc-inst.svg" /></a>
                    </div>
                </div>
                <nav class="col-sm-5 text-uppercase p-3">
                   <router-link to="/service/video">Видеонаблюдение</router-link>
                   <router-link to="/service/signaling">Сигнализация</router-link>
                   <router-link to="/service/barrier">Системы доступа</router-link>
                   <router-link to="/service/phone">Телефония</router-link>
                   <router-link to="/service/split">Сплит-системы</router-link>
                   <router-link to="/service/home">Умный дом</router-link>
                   <router-link to="/service/tv">Спутниковое ТВ</router-link>
                   <router-link to="/photo_gallery">Фотогалерея</router-link>
                   <router-link to="/watch_online">Видеокамеры онлайн</router-link>
                   <router-link to="/about">Информация ООО АНТЕЙ</router-link>
                </nav>
            </div>
            <p class="footer-bottom text-right">
                2021 Made by <a class="inline" href="www.alistudio.ru">alistudio</a>
            </p>
        </footer>
</template>

<script>
export default {
  name: 'FooterSite'
}
</script>
