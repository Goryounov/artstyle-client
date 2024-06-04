<template>
  <section class="about_app">
    <div class="container">
      <div>
        <div class="about_app_top">
          <h2 class="about_app_title">О приложении</h2>
        </div>
        <article class="about_app_text_block">
          <p class="about_app_text">
            Наше приложение способно при помощи искусственного интеллекта определить по изображению картины, к какому стилю искусства оно относится. Мы можем определять 27 стилей изобразительного искусства. Для наилучших результатов не подавайте на вход изображения, содержащие фон помимо самой картины.
          </p>
          <p class="about_app_text">Приложение может определять следующие стили искусства:</p>
          <div class="lists_block">
            <ul class="about_app_text">
              <li>Кубизм</li>
              <li>Постимпрессионизм</li>
              <li>Абстрактный экспрессионизм</li>
              <li>Реализм</li>
              <li>Экспрессионизм</li>
              <li>Барокко</li>
              <li>Импрессионизм</li>
              <li>Рококо</li>
              <li>Ар-нуво-модерн</li>
              <li>Романтизм</li>
            </ul>
            <ul class="about_app_text">
              <li>Высокий ренессанс</li>
              <li>Укие-э</li>
              <li>Наивный художественный примитивизм</li>
              <li>Живопись в цветовом поле</li>
              <li>Поп-арт</li>
              <li>Аналитический кубизм</li>
              <li>Маньеризм позднего Ренессанса</li>
              <li>Ранний ренессанс</li>
              <li>Пуантилизм</li>
            </ul>
            <ul class="about_app_text">
              <li>Фовизм</li>
              <li>Минимализм</li>
              <li>Современный реализм</li>
              <li>Новый реализм</li>
              <li>Синтетический кубизм</li>
              <li>Экшн-живопись</li>
              <li>Северный ренессанс</li>
              <li>Символизм</li>
            </ul>
          </div>
        </article>
        <img src="@/assets/images/girl.png" class="image_girl" alt="Girl">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about_app {
  padding-top: 30px;
  color: #efe9e2;

  .about_app_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .about_app_title {
    font-size: 64px;
    font-weight: 400;
    padding-bottom: 10px;
  }

  .about_app_text {
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 60px;
  }

  .container {
    display: flex;
  }

  .image_girl {
    height: 500px;
    margin-top: auto;
    position: absolute;
    left: 98%;
    bottom: -2%;
  }

  ul {
    list-style: none;
    padding-right: 15px;
  }

  .lists_block {
    display: flex;
    gap: 5%;
  }
}
</style>
