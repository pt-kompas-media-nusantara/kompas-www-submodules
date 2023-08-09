import  KsmSingleImage  from '@/components/single/Image.vue'
import { shallowMount } from '@vue/test-utils'


describe('KsmSingleImage Rendered', () => {
  const wrapper = shallowMount(KsmSingleImage, {
    propsData: { 
      item: {
				body: '<img alt="" class="alignright size-medium wp-image-11712673" height="973" src="https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431-720x973.png" width="720"/>',
				align: 'alignright',
				length: 0,
				type: 'image',
				metaBody: {
					alt: 'Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.',
					caption: 'create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.',
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
			}
    }
  })

  it('image rendered', () => {
    expect(wrapper.html()).toBe("<img alt=\"Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.\" height=\"1384\" loading=\"lazy\" sizes=\"(max-width:1280px) 1280px, (max-width:720px) 720px, (max-width:1024px) 1024px, (max-width:676px) 676px, (max-width:150px) 150px, (max-width:300px) 300px\" src=\"https://assetd.kompas.id/2gmE8YUrIsYUuYjY3dO3uJloH4A=/1024x1384/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png\" srcset=\"https://assetd.kompas.id/Gd81GUO2SpZlZnwH5gPg9UqA-ik=/1280x1730/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png 1280w, https://assetd.kompas.id/tSGSgyXhVEpIlR6gO7_ADWPLcAE=/720x973/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png 720w, https://assetd.kompas.id/2gmE8YUrIsYUuYjY3dO3uJloH4A=/1024x1384/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png 1024w, https://assetd.kompas.id/rnEUWK8AZLSplhm-3QmhNSMulFM=/676x913/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png 676w, https://assetd.kompas.id/38wgKrPeSkGwhXGS0zRNJXxF5F0=/150x150/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png 150w, https://assetd.kompas.id/4HpPk2HnghiHoNs3LQn6tAFpOKw=/300x405/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png 300w\" width=\"1024\" class=\"core mxauto\" style=\"max-width: 800px;\">")
  })
})
