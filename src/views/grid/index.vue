<template>
    <div>
        <header>
            <a href="http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html">grid网格布局，实现瀑布流</a>
        </header>
        <div class="waterfall">
            <div ref="wfCell" class="wf-cell" v-for="(item, index) in imgList" :key="index">
                <img :src="item" alt="图片">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'grid',
    data() {
      return {
        imgList: [
            'https://hbimg.huabanimg.com/5e2c02d5688048033400163bb609edae32bc436f7436a-czrh9X_fw658',
            'https://hbfile.huabanimg.com/img/category_page/ab6755376ce1408465462b027ec1381cdc8d7368bbe8',
            'https://hbimg.huabanimg.com/cb238f4154f28b2d72370f08bb424c31f93057025a3d0-5z2VML_fw658',
            'https://hbimg.huabanimg.com/a23b99ee7356fbf8caae293504979a196359826719da6-eFA2Jh_fw658',
            'https://hbimg.huabanimg.com/d1691d07ca12b6b2a670e0619a23d3f95a648ef1a9064-yzHlVh_fw658',
            'https://hbimg.huabanimg.com/1c3a221a7a465f256251e72d154992f6c0c742153aa764-4VUBXv_fw658',
            'https://hbimg.huabanimg.com/da8aa9a04ded1dd220d9eaacdcb911c43afac8f886749-Ohklzu_fw658',
            'https://hbimg.huabanimg.com/68eb4f7d47561ff3871026b5d82de56d53ec0efc3d63-GcW5GR_fw658',
            'https://hbimg.huabanimg.com/d67c2c32124b8b24618f006444ca5cd0919b65ac3cf10-Wj4ECa_fw658',
            'https://hbfile.huabanimg.com/img/category_page/ab6755376ce1408465462b027ec1381cdc8d7368bbe8',
            'https://hbimg.huabanimg.com/cb238f4154f28b2d72370f08bb424c31f93057025a3d0-5z2VML_fw658',
            'https://hbimg.huabanimg.com/a23b99ee7356fbf8caae293504979a196359826719da6-eFA2Jh_fw658',
            'https://hbimg.huabanimg.com/d1691d07ca12b6b2a670e0619a23d3f95a648ef1a9064-yzHlVh_fw658',
            'https://hbimg.huabanimg.com/1c3a221a7a465f256251e72d154992f6c0c742153aa764-4VUBXv_fw658',
            'https://hbimg.huabanimg.com/da8aa9a04ded1dd220d9eaacdcb911c43afac8f886749-Ohklzu_fw658',
            'https://hbimg.huabanimg.com/68eb4f7d47561ff3871026b5d82de56d53ec0efc3d63-GcW5GR_fw658',
            'https://hbfile.huabanimg.com/img/category_page/ab6755376ce1408465462b027ec1381cdc8d7368bbe8',
            'https://hbimg.huabanimg.com/cb238f4154f28b2d72370f08bb424c31f93057025a3d0-5z2VML_fw658',
            'https://hbimg.huabanimg.com/a23b99ee7356fbf8caae293504979a196359826719da6-eFA2Jh_fw658',
            'https://hbimg.huabanimg.com/d1691d07ca12b6b2a670e0619a23d3f95a648ef1a9064-yzHlVh_fw658',
            'https://hbimg.huabanimg.com/1c3a221a7a465f256251e72d154992f6c0c742153aa764-4VUBXv_fw658',
            'https://hbimg.huabanimg.com/da8aa9a04ded1dd220d9eaacdcb911c43afac8f886749-Ohklzu_fw658',
            'https://hbimg.huabanimg.com/68eb4f7d47561ff3871026b5d82de56d53ec0efc3d63-GcW5GR_fw658'
        ]
      }
    },
    created() {
    },
    mounted() {
        this.waterfallLoad();
    },
    methods: {
        waterfallLoad() {
            let wfCells = this.$refs.wfCell;
            let wfLength = this.imgList.length;
            for(let i=0; i<wfLength; i++) {
                let img = wfCells[i];
                // 图片原尺寸单位是px,这里width是当前设置的宽度（px为单位的）
                let width = wfCells[i].offsetWidth * 4;
                let image = new Image();
                image.src = this.imgList[i];
                image.onload = function(){
                    //图片原宽
                    let w = image.width;
                    //图片原高
                    let h = image.height;
                    //image-dom的真实高度(依据当前宽度及图片真实宽高)
                    let height = Math.round(h * width / w);
                    //设置当前跨越几个网格(每个网格10px)
                    img.style.gridRowEnd = `span ${~~(height/10)}`;
                }
            }
        }
    }
  }
</script>

<style lang="scss" scoped>
    header{
        font-size: 1.2rem;
        padding: 60px 0 30px;
    }
    .waterfall{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0 10px;
        grid-auto-rows: 10px;
        .wf-cell{
            grid-row-start: auto;
            img{
                width: 100%;
            }
        }
    }
</style>
