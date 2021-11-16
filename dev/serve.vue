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
  data: () => ({
    ol: {
      body: '<li>asjdajdaksdasd</li> <li>jaskdjaksda</li> <li>ddasjdajsdas</li> <li>dasjdasjdasd</li>',
      align: 'alignnone',
      length: 89,
      type: 'ol',
      metaBody: {
        list: [
          'asjdajdaksdasd',
          'jaskdjaksda',
          'ddasjdajsdas',
          'dasjdasjdasd'
        ]
      }
    }
  })
});
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="mx-auto max-w-2xl">
        <article>
          <ksm-single-title text-center>Judul &quot;Lorem&quot; Ipsum &amp; Kolor Sit Amet</ksm-single-title>
          <ksm-single-excerpt>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor.</ksm-single-excerpt>
          <div class="max-w-xl mx-auto">
            <ksm-single-credits credits="seseorang">
              Oleh
            </ksm-single-credits>
            <ksm-single-credits transform="uppercase" :credits="[{name: 'orang 1', url: ''},{name: 'orang 2', url: ''}]">
              Editor:
            </ksm-single-credits>
            <ksm-single-credits transform="capitalize" :credits="[{name: 'orang 1', url: ''},{name: 'orang 2', url: ''}]">
              Editor:
            </ksm-single-credits>
          </div>
          <div class="content" style="max-width: 960px; margin: auto">
            <ksm-single-paragraph font-size="base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-paragraph font-size="medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-paragraph font-size="large">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-blockquote>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-blockquote>
            <ksm-single-blockquote font-size="medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-blockquote>
            <ksm-single-blockquote font-size="large">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-blockquote>
            <ksm-single-paragraph font-size="medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-caption
              font-size="medium"
              align="alignright"
              :height="685"
              :width="1024"
              src="https://d2huqozv2aqnkj.cloudfront.net/wp-content/uploads//2021/09/89a1c529-103d-45f3-985d-0935e0028aac_jpg-1024x685.jpg"
              credit="Lorem ipsum"
              caption="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            >
            </ksm-single-caption>
            <ksm-single-paragraph font-size="medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-paragraph font-size="medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-caption
              font-size="medium"
              :height="685"
              :width="1024"
              src="https://d2huqozv2aqnkj.cloudfront.net/wp-content/uploads//2021/09/89a1c529-103d-45f3-985d-0935e0028aac_jpg-1024x685.jpg"
              credit="Lorem ipsum"
              caption="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            >
            </ksm-single-caption>
            <ksm-single-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-text>
            <ksm-single-text font-size="medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-text>
            <ksm-single-text font-size="large">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-text>
            <ksm-single-raw>?ref_src=twsrc%5Etfw/1248657931433693184/</ksm-single-raw>
          </div>
          <ksm-single-h1>Lorem ipsum dolor sit, amet consect.</ksm-single-h1>
          <ksm-single-h2>Lorem ipsum dolor sit, amet consect.</ksm-single-h2>
          <ksm-single-h3>Lorem ipsum dolor sit, amet consect.</ksm-single-h3>
          <ksm-single-h4>Lorem ipsum dolor sit, amet consect.</ksm-single-h4>
          <ksm-single-h5>Lorem ipsum dolor sit, amet consect.</ksm-single-h5>
          <ksm-single-h6>Lorem ipsum dolor sit, amet consect.</ksm-single-h6>
          <ksm-single-ol :items="ol.metaBody.list" />
        </article>
      </div>
    </div>
  </div>
</template>
