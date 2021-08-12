<script lang="ts">
import Vue from 'vue';
import '../src/assets/css/style.css'
// Uncomment import and local "components" registration if library is not registered globally.
// import { KompasWwwSubmodulesSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  KompasWwwSubmodulesSample,
  // }
});
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="mx-auto max-w-2xl">
        <article>
          <ksm-single-title>Judul &quot;Lorem&quot; Ipsum &amp; Kolor Sit Amet</ksm-single-title>
          <!-- <ksm-single-excerpt>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor.</ksm-single-excerpt> -->
          <div class="content">
            <ksm-single-paragraph font-size="base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-paragraph font-size="medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-paragraph font-size="large">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <!-- <ksm-single-blockquote font-size="base || medium || large">May the force be with you harry. - Gandalf</ksm-single-blockquote> -->
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
