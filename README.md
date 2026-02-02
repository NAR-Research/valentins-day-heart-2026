# Valentin's Day Heart Animation 2026

## This is a JavaScript based animated chart about heart for 2026 Valentin's Day by National Association of REALTORS®.

### <div class="chart-footer">
  <div class="chart-source">
    <span>Source: NAR's Profile of Home Buyers and Sellers</span><br>
    <span>Chart by Jovi Dai/National Association of REALTORS®</span>
  </div>

  <div class="chart-logo">
    <img src="https://i.imgur.com/BFMBuUW.png" alt="National Association of REALTORS® logo">
  </div>
</div>

<style>
.chart-footer{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:16px;
  margin-top:16px;
}

/* text */
.chart-source{
  font-size:13.5px;       /* desktop */
  color:#555;
  line-height:1.3;
  flex:1 1 auto;
  min-width:0;          /* critical for mobile wrapping */
}

/* logo */
.chart-logo{
  flex:0 0 auto;
}
.chart-logo img{
  height:48px;          /* desktop */
  width:auto;
  display:block;
margin-left: 210px;

}

/* ===== Mobile tuning ===== */
@media (max-width: 640px){
  .chart-source{
    font-size:11px;   /* smaller, newsroom-style */
    line-height:1.25;
  }

  .chart-logo img{
    height:35px;        /* slightly smaller logo */
margin-left: 10px;
  }
}
</style>