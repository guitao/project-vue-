<template>
  <div class="ratings">
    <div class="ratings-wrapper">
      <div class="overview">
        <div class="overview-left">
          <div class="comment-score">
              <p class="score">{{ratings.comment_score}}</p>
              <p class="text">商家评分</p>
          </div>
          <div class="other-score">
            <div class="quality-score item">
              <span class="text">口味</span>
              <Star :score="ratings.quality_score" class='star'></Star>
              <span class="score"></span>
            </div>
            <div class="pack-score item">
              <span class="text">包装</span>
              <Star :score="ratings.pack_score" class='star'></Star>
              <span class="score"></span>
            </div>
          </div>
        </div>
        
        <div class="overview-right">
          <div class="delivery-score">
            <p class="score">{{ratings.delivery_score}}</p>
            <p class="text">配送评分</p>
          </div>
        </div>
      </div>
      <Split></Split>
    </div>
  </div>
</template>

<script>
import Split from "../split/Split";
import Star from "../star/Star";
export default {
  data() {
    return {
      ratings: {}
    };
  },
  components: {
    Split,
    Star
  },
  created() {
    fetch("/api/ratings")
      .then(res => res.json())
      .then(response => {
        this.ratings = response;
      });
  }
};
</script>

<style lang="scss" scoped>
.ratings {
  position: absolute;
  left: 0;
  top: 191px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  .ratings-wrapper .overview {
    padding: 10px 0 18px 0;
    display: flex;
    .overview-left {
      flex: 1;
      padding-left: 26px;
      .comment-score {
        float: left;
        width: 48px;
        text-align: center;
        margin-right: 26px;
        .score {
          font-size: 23px;
          font-weight: 800;
          color: #ffb000;
          margin-bottom: 9px;
        }
        .text {
          font-size: 11px;
          color: #666666;
        }
      }
      .other-score {
        float: left;
        margin-top: 3px;
        .item {
          height: 11px;
          .text {
            font-size: 11px;
            color: #666666;
            margin-right: 11px;
            float: left;
          }
          .star {
            float: left;
            margin-right: 11px;
          }
          .score {
            font-size: 11px;
            color: #FFB000;
            float: left;
          }
        }
      }
    }
  }
}
</style>

