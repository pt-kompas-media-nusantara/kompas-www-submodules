<script lang="ts">
import Vue from 'vue';
import 'tailwindcss/tailwind.css'
// Uncomment import and local "components" registration if library is not registered globally.
// import { KompasWwwSubmodulesSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  KompasWwwSubmodulesSample,
  // }
  data: () => ({
    blockquote: {
      body: 'Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.',
      align: 'alignnone',
      length: 180,
      type: 'blockquote',
      metaBody: {
        alt: '',
        text: 'Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.'
      }
    },
    image: {
      body: '<img alt="" class="alignright size-medium wp-image-11712673" height="973" src="https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431-720x973.png" width="720"/>',
      align: 'alignright',
      length: 0,
      type: 'image',
      metaBody: {
        alt: 'Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.',
        caption: 'Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.',
        src: 'https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png',
        photographerName: 'Kompas/photographer',
        sizes: {
          large: {
            mimeType: 'image/jpeg',
            permalink: 'https://assetd.kompas.id/Gd81GUO2SpZlZnwH5gPg9UqA-ik=/1280x1730/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png',
            width: 1280,
            height: 1730
          },
          medium: {
            mimeType: 'image/jpeg',
            permalink: 'https://assetd.kompas.id/tSGSgyXhVEpIlR6gO7_ADWPLcAE=/720x973/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png',
            width: 720,
            height: 973
          },
          mediumLarge: {
            mimeType: 'image/jpeg',
            permalink: 'https://assetd.kompas.id/2gmE8YUrIsYUuYjY3dO3uJloH4A=/1024x1384/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png',
            width: 1024,
            height: 1384
          },
          postThumbnail: {
            mimeType: 'image/jpeg',
            permalink: 'https://assetd.kompas.id/rnEUWK8AZLSplhm-3QmhNSMulFM=/676x913/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png',
            width: 676,
            height: 913
          },
          thumbnail: {
            mimeType: 'image/jpeg',
            permalink: 'https://assetd.kompas.id/38wgKrPeSkGwhXGS0zRNJXxF5F0=/150x150/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png',
            width: 150,
            height: 150
          },
          thumbnailMedium: {
            mimeType: 'image/jpeg',
            permalink: 'https://assetd.kompas.id/4HpPk2HnghiHoNs3LQn6tAFpOKw=/300x405/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png',
            width: 300,
            height: 405
          }
        },
        credit: 'Kompas'
      }
    },
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
    },
    text: {
      body: 'Putusan Mahkamah Agung mengenai uji materi terhadap Peraturan Pemerintah Nomor 99 Tahun 2012 tentang Syarat &amp; Tata Cara Pelaksanaan Hak Warga Binaan, yang menganulir pembatasan pemberian remisi kepada koruptor, seolah menguatkan dugaan pelemahan terhadap pemberantasan korupsi. Dengan alasan persamaan hak bagi narapidana, pelonggaran terhadap pelaku korupsi itu nyatanya tidak berlaku bagi jenis kejahatan khusus lainnya, seperti terorisme, narkotika, dan kejahatan lingkungan, yang juga diatur di dalam peraturan pemerintah tersebut.',
      align: 'alignnone',
      length: 537,
      type: 'text',
      metaBody: {
        alt: '',
        text: 'Putusan Mahkamah Agung mengenai uji materi terhadap Peraturan Pemerintah Nomor 99 Tahun 2012 tentang Syarat &amp; Tata Cara Pelaksanaan Hak Warga Binaan, yang menganulir pembatasan pemberian remisi kepada koruptor, seolah menguatkan dugaan pelemahan terhadap pemberantasan korupsi. Dengan alasan persamaan hak bagi narapidana, pelonggaran terhadap pelaku korupsi itu nyatanya tidak berlaku bagi jenis kejahatan khusus lainnya, seperti terorisme, narkotika, dan kejahatan lingkungan, yang juga diatur di dalam peraturan pemerintah tersebut.'
      }
    },
    ul: {
      body: '<li>Jakarta Art Stage (2017)</li> <li>Solo Exhibition: Style &amp; Substance Porcelain Furniture &amp; Interior, Jakarta (2017)</li> <li>ICAD (Indonesia Contemporary Art &amp; Design) (2016)</li>',
      align: 'alignnone',
      length: 196,
      type: 'ul',
      metaBody: {
        alt: '',
        list: [
          'Jakarta Art Stage (2017)',
          'Solo Exhibition: Style &amp; Substance Porcelain Furniture &amp; Interior, Jakarta (2017)',
          'ICAD (Indonesia Contemporary Art &amp; Design) (2016)'
        ]
      }
    },
    url: {
      body: 'Baca juga : <a href="https://www.kompas.id/baca/riset/2021/04/14/lebih-dari-dua-calon-presiden-lebih-baik">Lebih Dari Dua Calon Presiden, Lebih Baik</a>',
      align: 'alignnone',
      length: 152,
      type: 'url',
      metaBody: {
        alt: '',
        src: 'Baca juga : <a href="https://www.kompas.id/baca/riset/2021/04/14/lebih-dari-dua-calon-presiden-lebih-baik">Lebih Dari Dua Calon Presiden, Lebih Baik</a>'
      }
    }
  }),
  computed: {
    imageSrcset() {
      const { sizes } = this.image.metaBody
      const items = Object.values(sizes)

      return items.map(ob => `${ob.permalink} ${ob.width}w`)
    }
  }
});
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="mx-auto max-w-2xl">
        <article>
          <ksm-single-title text-center>Judul &quot;Lorem&quot; Ipsum &amp; Kolor Sit Am&#233;t</ksm-single-title>
          <ksm-single-excerpt>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor.</ksm-single-excerpt>
          <section class="max-w-md mx-auto">
            <ksm-single-credits credits="seseorang" />
            <ksm-single-credits credits="seseorang" prefix="Oleh" />
            <ksm-single-credits :credits="[{name: 'orang 1', url: ''},{name: 'orang 2', url: ''}]" prefix="Editor:" />
            <ksm-single-credits :credits="[{name: 'orang 1', url: ''},{name: 'orang 2', url: ''}]" prefix="Editor:" uppercase />
          </section>

          <section name="ksm-single-blockquote">
            <ksm-single-blockquote :item="blockquote" />
            <ksm-single-blockquote font-size="medium" :item="blockquote" />
            <ksm-single-blockquote font-size="large" :item="blockquote" />
          </section>

          <section name="ksm-single-headings">
            <ksm-single-h1>Lorem ipsum dolor sit, amet consect.</ksm-single-h1>
            <ksm-single-h2>Lorem ipsum dolor sit, amet consect.</ksm-single-h2>
            <ksm-single-h3>Lorem ipsum dolor sit, amet consect.</ksm-single-h3>
            <ksm-single-h4>Lorem ipsum dolor sit, amet consect.</ksm-single-h4>
            <ksm-single-h5>Lorem ipsum dolor sit, amet consect.</ksm-single-h5>
            <ksm-single-h6>Lorem ipsum dolor sit, amet consect.</ksm-single-h6>
          </section>

          <section name="ksm-single-image">
            <ksm-single-image
              :item="image"
            />
          </section>

          <section name="ksm-single-lists">
            <ksm-single-ol :item="ol" />
            <ksm-single-ol font-size="medium" :item="ol" />
            <ksm-single-ol font-size="large" :item="ol" />
            <ksm-single-ul :item="ul" />
            <ksm-single-ul font-size="medium" :item="ul" />
            <ksm-single-ul font-size="large" :item="ul" />
          </section>

          <section name="ksm-single-paragraph">
            <ksm-single-paragraph>Lorem &amp; ipsum dolor sit, <a href="https://www.kompas.id">amet consectetur adipisicing elit</a>. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-paragraph font-size="medium">Lorem &amp; ipsum dolor sit, <a href="https://www.kompas.id">amet consectetur adipisicing elit</a>. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
            <ksm-single-paragraph font-size="large">Lorem &amp; ipsum dolor sit, <a href="https://www.kompas.id">amet consectetur adipisicing elit</a>. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>
          </section>

          <section name="ksm-single-text">
            <ksm-single-text :item="text" />
            <ksm-single-text font-size="medium" :item="text" />
            <ksm-single-text font-size="large" :item="text" />
          </section>

          <section name="ksm-single-url">
            <ksm-single-url :item="url" />
            <ksm-single-url :item="url" fontSize="medium" />
            <ksm-single-url :item="url" fontSize="large" />
          </section>

          <section name="ksm-single-caption">
            <ksm-single-caption
              font-size="medium"
              :item="image"
            />
          </section>

          <section name="ksm-single-text">
            <ksm-single-text :item="text" />
            <ksm-single-text font-size="medium" :item="text" />
            <ksm-single-text font-size="large" :item="text" />
          </section>

          <section name="ksm-single-raw">
            <ksm-single-raw>?ref_src=twsrc%5Etfw/1248657931433693184/</ksm-single-raw>
          </section>
        </article>
      </div>
    </div>
  </div>
</template>
