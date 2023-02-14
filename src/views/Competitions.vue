<script setup lang="ts">
import Card from "../components/Card.vue";
</script>

<template>
  <section class="competitions">
    <h1>Competitions</h1>

    <div>
      <h2>Win a fully-stocked pub shed worth over £1790</h2>
      <button>Enter Now</button>
    </div>

    <div class="grid">
      <Card :quant="3" />
    </div>

    <div>
      <h3>Congratulations to our latest competition winners:</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
        asperiores incidunt ipsa qui pariatur vero aperiam doloremque minima
        dolorem porro culpa facilis, odit dolorum illum. Eum, dolore fugit
        fugiat reprehenderit officiis iure nesciunt rem similique tempore
        aspernatur recusandae maiores quae labore laborum, quasi, sunt est
        distinctio quaerat quidem eos id eligendi maxime debitis. Libero saepe
        nobis expedita velit sequi voluptate iure porro dicta, ea, debitis ab
        esse repudiandae tenetur aliquam odio optio! Dignissimos iste natus
        porro error rem architecto earum magnam, non consequatur totam
        consectetur labore culpa quae, ad illum accusantium dolor quia
        exercitationem iusto veniam quidem impedit inventore fugiat ducimus!
        Commodi aliquam consequuntur excepturi, unde animi, nobis aperiam harum
        blanditiis optio recusandae ratione modi perferendis! Nesciunt mollitia
        quas ea illum quibusdam in quae perspiciatis ullam explicabo quasi sunt
        et dolorum voluptas incidunt dignissimos, delectus quaerat quod sed
        voluptatibus vel. Eligendi soluta et cupiditate perspiciatis fugit neque
        distinctio similique esse quisquam rerum. Illum incidunt quisquam omnis
        ullam qui optio aspernatur doloribus architecto quaerat! Assumenda
        fugiat, illo dolor placeat reprehenderit explicabo vel quia alias qui
        corporis dignissimos vitae dolore aut, cumque eligendi. Alias voluptas,
        quod esse beatae itaque tempora harum tenetur deserunt aspernatur
        architecto impedit aliquid odio veniam nulla dolores officiis!
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.competitions {
  width: 100%;
  margin: 150px auto;

  h1 {
    font-size: 30px;
    text-align: center;
  }

  div {
    align-items: center;
    background: #ccc;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 40px 0;
    padding: 100px;

    &:nth-child(3) {
      background: none;
      max-width: 1360px;
      margin: 0 auto;
      padding: 0;
    }

    h2 {
      color: #fff;
    }

    &:last-child {
      align-items: flex-start;
      background: none;
      margin: 150px auto;
      max-width: 1360px;
      padding: 0;
    }

    button {
      background: rgba(255, 255, 255, 0.152);
      border: 1px solid #fff;
      cursor: pointer;
      outline: none;
      padding: 10px 40px;
      text-transform: uppercase;
      max-width: 300px;
    }
  }
}
</style>
