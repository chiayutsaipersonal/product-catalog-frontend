<template>
  <div id="carousel">
    <div class="img-frame"
         :style="imgFrameStyle">
      <div v-if="$mq!=='xs'"
           class="overlay-frame">
        <div class="caption-title">
          <template v-if="($mq==='md')||($mq==='lg')">
            <div class="caption title is-1">Gentry Way Co., Ltd. &</div>
            <div class="caption title is-1">Gentry Hardware Co., Ltd</div>
          </template>
          <template v-if="$mq==='sm'">
            <div class="caption title is-3">Gentry Way Co., Ltd. &</div>
            <div class="caption title is-3">Gentry Hardware Co., Ltd</div>
          </template>
        </div>
        <div class="caption-motto">
          <template v-if="($mq==='md')||($mq==='lg')">
            <div class="caption subtitle is-5">Quality aluminium extrusion products</div>
            <div class="caption subtitle is-5">for medical, rehabilitation and recreation industries</div>
            <div class="caption subtitle is-5">at competitive prices !!!</div>
          </template>
          <template v-if="$mq==='sm'">
            <div class="caption subtitle is-6">Quality aluminium extrusion products</div>
            <div class="caption subtitle is-6">for medical, rehabilitation and recreation industries</div>
            <div class="caption subtitle is-6">at competitive prices !!!</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      index: 0,
      duration: 5000,
      timer: null,
      photoCount: 5,
    }
  },
  computed: {
    carousel () {
      return require(`../../assets/carousels/${this.index}.jpeg`)
    },
    imgFrameStyle () {
      return {
        'background-image': `url(${this.carousel})`,
        'background-size': this.index === 0 ? 'contain' : 'cover',
      }
    },
  },
  mounted () {
    this.timer = setInterval(() => {
      this.index = (this.index + 1) === this.photoCount ? 0 : (this.index + 1)
    }, this.duration)
  },
  destroyed () {
    clearInterval(this.timer)
  },
}
</script>

<style scoped>
#carousel {
  height: 100%;
}

.img-frame {
  border: 1px solid white;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-frame {
  background-color: rgba(0%, 0%, 0%, 0.2);
  font-family: "Source Sans Pro";
  font-style: italic;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.caption-title,
.caption-motto {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.caption-title {
  margin-bottom: 30px;
}

.caption {
  margin: 0px;
  padding: 0px;
  color: white;
  transform: rotate(-4deg);
}

.caption.subtitle {
  padding: 3px;
}
</style>
