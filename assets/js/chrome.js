/* JEBI Trust — shared chrome (header / footer) */
(function () {
  var NAV = [
    ['index.html',    'Concept',  '商业概念'],
    ['structure.html','Structure','公司结构'],
    ['pcx.html',      'PCX 40',   'PCX 40'],
    ['assets.html',   'Assets',   '资产阶梯'],
    ['roadmap.html',  'Roadmap',  '路线图']
  ];

  function buildHeader(page) {
    var links = NAV.map(function (n) {
      var on = n[0] === page ? ' class="on"' : '';
      return '<a href="' + n[0] + '"' + on + '><span class="en">' + n[1] +
             '</span><span class="zh">' + n[2] + '</span></a>';
    }).join('');

    return '' +
      '<header class="site"><div class="bar">' +
        '<a class="brand" href="index.html" aria-label="JEBI Trust">' +
          '<img src="assets/img/logo.svg" alt="JEBI Trust">' +
          '<span class="pcx-pill">PCX 40</span>' +
        '</a>' +
        '<nav class="main" id="nav">' + links + '</nav>' +
        '<div class="tools">' +
          '<div class="langsw">' +
            '<button data-lang-btn="en" type="button">EN</button>' +
            '<button data-lang-btn="zh" type="button">中文</button>' +
          '</div>' +
          '<button class="burger" id="burger" type="button" aria-label="Menu">≡</button>' +
        '</div>' +
      '</div></header>';
  }

  function buildFooter() {
    return '' +
    '<footer class="site"><div class="wrap">' +
      '<div class="foot-top">' +
        '<div class="foot-brand">' +
          '<img src="assets/img/logo.svg" alt="JEBI Trust">' +
          '<p class="small"><span class="en">Trust infrastructure for the coffee chain. Three codes, one ledger, one listing floor.</span>' +
          '<span class="zh">咖啡产业链的信任基础设施。三码一体、一本账、一个上链门槛。</span></p>' +
        '</div>' +
        '<div class="foot-col"><h5><span class="en">Model</span><span class="zh">模式</span></h5>' +
          '<a href="index.html"><span class="en">Thesis</span><span class="zh">核心论点</span></a>' +
          '<a href="index.html#revenue"><span class="en">Revenue lines</span><span class="zh">收入线</span></a>' +
          '<a href="assets.html"><span class="en">Asset ladder</span><span class="zh">资产阶梯</span></a>' +
        '</div>' +
        '<div class="foot-col"><h5><span class="en">Trust</span><span class="zh">信任</span></h5>' +
          '<a href="pcx.html"><span class="en">PCX 40 index</span><span class="zh">PCX 40 指数</span></a>' +
          '<a href="pcx.html#bands"><span class="en">Bands &amp; gates</span><span class="zh">分级与闸门</span></a>' +
          '<a href="pcx.html#ledger"><span class="en">Disclosure ledger</span><span class="zh">披露账本</span></a>' +
        '</div>' +
        '<div class="foot-col"><h5><span class="en">Company</span><span class="zh">公司</span></h5>' +
          '<a href="structure.html"><span class="en">Entity map</span><span class="zh">主体图谱</span></a>' +
          '<a href="structure.html#charter"><span class="en">Trust Charter</span><span class="zh">信任宪章</span></a>' +
          '<a href="roadmap.html"><span class="en">Phase gates</span><span class="zh">阶段闸门</span></a>' +
        '</div>' +
      '</div>' +
      '<p class="disclaimer">' +
        '<span class="en"><b>Status.</b> This site is a commercial and compliance planning framework for a pre-launch venture. It is not legal, tax, accounting or investment advice, and it is not an offer, solicitation or recommendation to buy or sell any security, fund unit, token or financial product in any jurisdiction. All figures are design targets or illustrative specifications, not results, forecasts or promises. Any RWA or STO activity described here is conditional on (i) written legal opinions from licensed counsel in the relevant jurisdiction, (ii) the required licences, registrations or exemptions, and (iii) compliant KYC/AML, investor-appropriateness, disclosure, custody and audit arrangements. Nothing here may be used to circumvent REITs, collective-investment, deposit-taking, franchise or carbon-market regulation. No return is guaranteed; capital may be lost in full.</span>' +
        '<span class="zh"><b>状态说明。</b>本网站为一个尚未启动的商业项目的商业与合规规划框架，不构成法律、税务、会计或投资建议，也不构成在任何司法辖区购买或出售任何证券、基金份额、通证或金融产品的要约、招揽或推荐。所有数字均为设计目标或说明性规格，不是业绩、预测或承诺。文中所述任何 RWA 或 STO 活动，均以（一）相关辖区持牌律师出具的书面法律意见、（二）所需牌照/注册/豁免、（三）合规的 KYC/AML、投资者适当性、信息披露、托管与审计安排为前提。本网站任何内容不得用于规避 REITs、集合投资、吸收存款、特许经营或碳市场相关监管。不承诺任何收益；本金可能全部损失。</span>' +
      '</p>' +
      '<div class="foot-bottom">' +
        '<span class="small">© 2026 JEBI Trust · <span class="en">Hong Kong, China</span><span class="zh">中国香港</span></span>' +
        '<span class="small">PCX 40 · <span class="en">FLOOR, NOT TARGET</span><span class="zh">门槛，不是目标</span></span>' +
      '</div>' +
    '</div></footer>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page') || 'index.html';
    document.body.insertAdjacentHTML('afterbegin', buildHeader(page));
    document.body.insertAdjacentHTML('beforeend', buildFooter());
    if (window.JT_REFRESH) window.JT_REFRESH();

    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');
    if (burger && nav) {
      burger.addEventListener('click', function () { nav.classList.toggle('open'); });
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') nav.classList.remove('open');
      });
    }
  });
})();
