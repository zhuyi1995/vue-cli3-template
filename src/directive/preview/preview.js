import Vue from 'vue'
import download from './../../components/download/download.vue'

const DownloadEl = Vue.extend(download)

export default {
  bind(el, binding) {
    el.onclick = function () {
      if (typeof binding.value === 'undefined' || typeof binding.value.uuid === 'undefined') {
        return false
      }
      const dom = document.createElement('div')
      dom.setAttribute('id', 'download-element')
      document.body.appendChild(dom)
      new DownloadEl({
        data() {
          return {
            model: binding.value
          }
        }
      }).$mount('#download-element')
    }
  }
}