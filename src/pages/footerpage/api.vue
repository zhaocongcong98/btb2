<template>
<div class="terms">
    <div class="bg"></div>
    <div class="api-content">
        <Menu :active-name="activename" :open-names="opennames" @on-open-change="sss" ref="test" :accordion="true">
        <div class="title"></div>
        <Submenu name="1">
          <template slot="title">
            <span class="isclick"></span>
            <span class="content">{{$t('apiDocument.menu_1')}}</span>
          </template>
          <MenuItem name="1-1">
          <a href="#a1-1">{{$t('apiDocument.menu_11')}}</a>
          </MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <span class="isclick"></span>
            <span class="content">{{$t('apiDocument.menu_2')}}</span>
          </template>
          <MenuItem name="2-1">
          <a href="#a2-1">{{$t('apiDocument.menu_21')}}</a>
          </MenuItem>
          <MenuItem name="2-2">
          <a href="#a2-2">{{$t('apiDocument.menu_22')}}</a>
          </MenuItem>
          <MenuItem name="2-3">
          <a href="#a2-3">{{$t('apiDocument.menu_23')}}</a>
          </MenuItem>
          <MenuItem name="2-4">
          <a href="#a2-4">{{$t('apiDocument.menu_24')}}</a>
          </MenuItem>
           <MenuItem name="2-5">
          <a href="#a2-5">{{$t('apiDocument.menu_25')}}</a>
          </MenuItem>
           <MenuItem name="2-6">
          <a href="#a2-6">{{$t('apiDocument.menu_26')}}</a>
          </MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <span class="isclick"></span>
            <span class="content">{{$t('apiDocument.menu_3')}}</span>
          </template>
          <MenuItem name="3-1">
          <a href="#a3-1">{{$t('apiDocument.menu_31')}}</a>
          </MenuItem>
          <MenuItem name="3-2">
          <a href="#a3-2">{{$t('apiDocument.menu_32')}}</a>
          </MenuItem>
          <MenuItem name="3-3">
          <a href="#a3-3">{{$t('apiDocument.menu_33')}}</a>
          </MenuItem>
          <MenuItem name="3-4">
          <a href="#a3-4">{{$t('apiDocument.menu_34')}}</a>
          </MenuItem>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <span class="isclick"></span>
            <span class="content">{{$t('apiDocument.menu_4')}}</span>
          </template>
          <MenuItem name="4-1">
          <a href="#a4-1">{{$t('apiDocument.menu_41')}}</a>
          </MenuItem>
        </Submenu>
      </Menu>
      <div id="a1-1" class="content-right">
         <div class="right-nav"><a name="common"></a>
         <h1>{{$t('apiDocument.p_1')}}</h1>
         <p>{{$t('apiDocument.p_2')}}<a href="/api/authorization">{{$t('apiDocument.p_3')}}</a>{{$t('apiDocument.p_4')}}</p>
         <h1>{{$t('apiDocument.p_5')}}</h1>
         <h3>{{$t('apiDocument.p_6')}}</h3>
         <table id="a2-1">
             <thead>
                 <tr>
                     <th>{{$t('apiDocument.p_7')}}</th>
                     <th>{{$t('apiDocument.p_7')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{$t('apiDocument.p_8')}}</td>
                    <td>https://api.jingui360exchange.com</td>
                </tr>
            </tbody>
            </table>
            <h3 id="a2-2">HTTP Request Headers</h3>
            <table>
                <thead>
                    <tr>
                        <th>{{$t('apiDocument.p_9')}}</th>
                        <th>{{$t('apiDocument.p_10')}}</th>
                        <th>{{$t('apiDocument.p_11')}}</th>
                        <th>{{$t('apiDocument.p_12')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Content-type</td>
                                <td>{{$t('apiDocument.p_13')}}</td>
                                <td>{{$t('apiDocument.p_14')}}:application/x-www-form-urlencoded; charset=UTF-8</td>
                                <td></td>
                                </tr>
                            <tr>
                                <td>Accept-Language</td>
                                <td>{{$t('apiDocument.p_15')}}</td>
                                <td>{{$t('apiDocument.p_16')}}</td>
                                <td>en-US</td>
                                </tr>
                            </tbody>
                            </table>
                        <h3 id="a2-3">{{$t('apiDocument.p_17')}}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>{{$t('apiDocument.p_9')}}</th>
                                    <th>{{$t('apiDocument.p_13')}}</th>
                                    <th>{{$t('apiDocument.p_18')}}</th>
                                    <th>{{$t('apiDocument.p_19')}}</th>
                                    <th>{{$t('apiDocument.p_11')}}</th>
                                    <th>{{$t('apiDocument.p_12')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>accessKey</td>
                                    <td>String</td>
                                    <th>{{$t('apiDocument.p_13')}}</th>
                                    <td>32</td>
                                    <td>{{$t('apiDocument.p_20')}}</td>
                                    <td>64e744a3314033c67876846be192f64b</td>
                                    </tr>
                                    <tr>
                                        <td>timestamp</td>
                                        <td>String</td>
                                        <th>{{$t('apiDocument.p_13')}}</th>
                                        <td>10</td>
                                        <th>{{$t('apiDocument.p_21')}}</th>
                                        <td>1517068800</td>
                                        </tr>
                                        <tr>
                                            <td>version</td>
                                            <td>String</td>
                                            <th>{{$t('apiDocument.p_13')}}</th>
                                            <td>3</td>
                                            <td>{{$t('apiDocument.p_22')}}</td>
                                            <td>1.0</td>
                                            </tr><tr>
                                                <td>sign</td>
                                                <td>String</td>
                                                <th>{{$t('apiDocument.p_13')}}</th>
                                                <td>32</td>
                                                <td>{{$t('apiDocument.p_23')}} <a href="#sign">{{$t('apiDocument.p_24')}}</a></td>
                                                <td>1517068800</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    <h1 id="a2-4">{{$t('apiDocument.p_25')}}</h1>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>{{$t('apiDocument.p_26')}}</th>
                                                <th>{{$t('apiDocument.p_10')}}</th>
                                                <th>{{$t('apiDocument.p_19')}}</th>
                                                <th>{{$t('apiDocument.p_11')}}</th>
                                                <th>{{$t('apiDocument.p_12')}}</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>status</td>
                                                        <td>Int</td>
                                                        <th>{{$t('apiDocument.p_13')}}</th>
                                                        <td>--</td>
                                                        <td>{{$t('apiDocument.p_27')}}</td>
                                                        <td>1</td></tr>
                                                        <tr>
                                                            <td>msg</td>
                                                            <td>String</td>
                                                            <th>{{$t('apiDocument.p_13')}}</th>
                                                            <td>--</td>
                                                            <td>{{$t('apiDocument.p_28')}}</td>
                                                            <td>{{$t('apiDocument.p_29')}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>data</td>
                                                                <td>String</td>
                                                                <th>{{$t('apiDocument.p_13')}}</th>
                                                                <td>--</td>
                                                                <td>{{$t('apiDocument.p_30')}}</td>
                                                                <td>{"key": "value"}</td>
                                                                </tr></tbody>
                                                                </table>
                                                                <a name="inner"></a>
                                                                <h1>{{$t('apiDocument.p_9')}}</h1>
                                                                <h1>{{$t('apiDocument.p_31')}}</h1>
                                                                <table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>{{$t('apiDocument.p_32')}}</th>
                                                                            
                                                                            <th>URI</th>
                                                                        </tr></thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>GET</td>
                                                                            <td>/trade/myInfo</td>
                                                                        </tr>
                                                                    </tbody>
                                                                    </table>
                                                                    <h3>{{$t('apiDocument.p_33')}}</h3>
                                                                <table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>{{$t('apiDocument.p_26')}}</th>
                                                                
                                                                            <th>{{$t('apiDocument.p_10')}}</th>
                                                                            <th>{{$t('apiDocument.p_19')}}</th>
                                                                            <th>{{$t('apiDocument.p_11')}}</th>
                                                                            <th>{{$t('apiDocument.p_12')}}</th>
                                                                            </tr></thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>{{$t('apiDocument.p_5')}}</td>
                                                                                    <td></td>
                                                                                    <td>{{$t('apiDocument.p_13')}}</td>
                                                                                    <td></td>
                                                                                    <td>{{$t('apiDocument.p_34')}}<a href="#common">公共参数</a></td>
                                                                                    <td></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                    </table>
                                                                                    <h3>{{$t('apiDocument.p_35')}}</h3>
                                                                                    <table>
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>{{$t('apiDocument.p_26')}}</th>
                                                                                                <th>{{$t('apiDocument.p_10')}}</th>
                                                                                                <th>{{$t('apiDocument.p_19')}}</th>
                                                                                                <th>{{$t('apiDocument.p_11')}}</th>
                                                                                                <th>{{$t('apiDocument.p_12')}}</th>
                                                                                                </tr>
                                                                                        </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>phone</td>
                                                                                            <td>String</td>
                                                                                            <td>{{$t('apiDocument.p_13')}}</td>
                                                                                            <td>20</td>
                                                                                            <td>{{$t('apiDocument.p_36')}}</td>
                                                                                            <td>+8613712345678</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>assets</td>
                                                                                                <td>String</td>
                                                                                                <td>{{$t('apiDocument.p_13')}}</td>
                                                                                                <td>1000</td>
                                                                                                <td>{{$t('apiDocument.p_37')}}</td>
                                                                                                <td>"btc_over":"9985.452999","btc_lock":"20.300059826"</td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    <h1>{{$t('apiDocument.p_38')}}</h1>
                                                                                <div class="ant-tabs ant-tabs-top ant-tabs-card ant-tabs-no-animation">
                                                                                <div role="tablist" class="ant-tabs-bar ant-tabs-top-bar ant-tabs-card-bar" tabindex="0">
                                                                                    <div class="ant-tabs-nav-container">
                                                                                        <span unselectable="unselectable" class="ant-tabs-tab-prev ant-tabs-tab-btn-disabled">
                                                                                            <span class="ant-tabs-tab-prev-icon">
                                                                                                <i aria-label="图标: left" class="anticon anticon-left ant-tabs-tab-prev-icon-target">
                                                                                                    <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                                        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                                                                                                        </svg>
                                                                                                        </i>
                                                                                                        </span>
                                                                                                        </span>
                                                                                            <span unselectable="unselectable" class="ant-tabs-tab-next ant-tabs-tab-btn-disabled">
                                                                                                <span class="ant-tabs-tab-next-icon">
                                                                                                    <i aria-label="图标: right" class="anticon anticon-right ant-tabs-tab-next-icon-target">
                                                                                                        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                                                                                                            </svg>
                                                                                                            </i>
                                                                                                            </span>
                                                                                                            </span>
                                                                                                            <div class="ant-tabs-nav-wrap" id="a2-5">
                                                                                                                <div class="ant-tabs-nav-scroll">
                                                                                                                    <div class="ant-tabs-nav ant-tabs-nav-animated">
                                                                                                                        <div>
                                                                                                                            <div role="tab" aria-disabled="false" aria-selected="true" class="ant-tabs-tab-active ant-tabs-tab">{{$t('apiDocument.p_39')}}</div>
                                                                                                                            </div>
                                                                                                                            <div class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style="display: block; transform: translate3d(0px, 0px, 0px); width: 96px;"></div>
                                                                                                                            </div>
                                                                                                                            </div>
                                                                                                                            </div>
                                                                                                                            </div>
                                                                                                                            </div>
                                                                                                                            <div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
                                                                                                                            <div class="ant-tabs-content ant-tabs-content-no-animated ant-tabs-top-content ant-tabs-card-content">
                                                                                                                                <div role="tabpanel" aria-hidden="false" class="ant-tabs-tabpane ant-tabs-tabpane-active">
                                                                                                                                    <div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
                                                                                                                                    <p>GET https://api.jingui360exchange.com/trade/myInfo?accessKey=4900201404d07078fae624c186a79bc7&amp;timestamp=1525248088&amp;version=1.0&amp;sign=46755274063866776ea7cf1881029f090ee4c797</p>
                                                                                                                                    <div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    <div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div></div>
                                                                                                                                    <h1>{{$t('apiDocument.p_39')}}</h1>
                                                                                                                                    <div class="ant-tabs ant-tabs-top ant-tabs-card ant-tabs-no-animation" id="a2-6">
                                                                                                                                        <div role="tablist" class="ant-tabs-bar ant-tabs-top-bar ant-tabs-card-bar" tabindex="0">
                                                                                                                                            <div class="ant-tabs-nav-container">
                                                                                                                                                <span unselectable="unselectable" class="ant-tabs-tab-prev ant-tabs-tab-btn-disabled">
                                                                                                                                                    <span class="ant-tabs-tab-prev-icon">
                                                                                                                                                        <i aria-label="图标: left" class="anticon anticon-left ant-tabs-tab-prev-icon-target">
                                                                                                                                                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                                                                                                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                                                                                                                                                                </svg>
                                                                                                                                                                </i>
                                                                                                                                                                </span>
                                                                                                                                                                </span>
                                                                                                                                                                <span unselectable="unselectable" class="ant-tabs-tab-next ant-tabs-tab-btn-disabled">
                                                                                                                                                                    <span class="ant-tabs-tab-next-icon">
                                                                                                                                                                        <i aria-label="图标: right" class="anticon anticon-right ant-tabs-tab-next-icon-target">
                                                                                                                                                                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" id="a3-1">
                                                                                                                                                                                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                                                                                                                                                                                </svg>
                                                                                                                                                                                </i>
                                                                                                                                                                                </span>
                                                                                                                                                                                </span>
                                                                                                                                                                                <div class="ant-tabs-nav-wrap">
                                                                                                                                                                                    <div class="ant-tabs-nav-scroll">
                                                                                                                                                                                        <div class="ant-tabs-nav ant-tabs-nav-animated">
                                                                                                                                                                                            <div>
                                                                                                                                                                                            <div role="tab" aria-disabled="false" aria-selected="true" class="ant-tabs-tab-active ant-tabs-tab">{{$t('apiDocument.p_41')}}</div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                            <div class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style="display: block; transform: translate3d(0px, 0px, 0px); width: 110px;"></div></div></div></div></div></div><div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div><div class="ant-tabs-content ant-tabs-content-no-animated ant-tabs-top-content ant-tabs-card-content"><div role="tabpanel" aria-hidden="false" class="ant-tabs-tabpane ant-tabs-tabpane-active"><div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div><pre>
              {
                "status": "1",
                "msg": "",
                "data"{
                  "phone": "+8613712345678",
                  "assets"{
                    "btc_over": "9985.452999",
                    "btc_lock": "20.300059826",
                    "ltc_over": "10116.801",
                    "ltc_lock": "9910",
                    "eth_over": "97.5",
                    "eth_lock": "1",
                    "eos_over": "999.98979",
                    "eos_lock": "0.01021",
                    "mcc_over": "21692.6492146376",
                    "mcc_lock": "20.0499812",
                    "fdc_over": "999.994",
                    "fdc_lock": "0",
                    "rss_over": "7939.91601938156",
                    "rss_lock": "470.02700995",
                    "hxi_over": "0",
                    "hxi_lock": "0",
                    "jjf_over": "980.958",
                    "jjf_lock": "9",
                    "npc_over": "980",
                    "npc_lock": "20",
                    "gts_over": "0",
                    "gts_lock": "0",
                    "etc_over": "0",
                    "etc_lock": "0",
                    "gthx_over": "10000",
                    "gthx_lock": "0",
                    "bcd_over": "45.007550141557513829",
                    "bcd_lock": "0",
                    "htc_over": "998",
                    "htc_lock": "2",
                    "mac_over": "18",
                    "mac_lock": "10",
                    "sbtc_over": "9.0015100255115027658",
                    "sbtc_lock": "0",
                    "ubtc_over": "4.5007550127557513829",
                    "ubtc_lock": "0",
                    "etf_over": "89.859",
                    "etf_lock": "0",
                    "obtc_over": "4.5007550127557513829",
                    "obtc_lock": "0",
                    "lbtc_over": "11.0037091055115027658",
                    "lbtc_lock": "0",
                    "bvt_over": "207",
                    "bvt_lock": "0",
                    "btno_over": "300",
                    "btno_lock": "0",
                    "nano_over": "1999104",
                    "nano_lock": "996",
                    "dcon_over": "0",
                    "dcon_lock": "102",
                    "ptoc_over": "0",
                    "ptoc_lock": "1040.9",
                    "obc_over": "0",
                    "obc_lock": "500.000005",
                    "lcc_over": "0",
                    "lcc_lock": "0",
                    "ethms_over": "0",
                    "ethms_lock": "0",
                    "xtc_over": "0",
                    "xtc_lock": "0",
                    "dob_over": "662.94",
                    "dob_lock": "11.06",
                    "mbt_over": "0",
                    "mbt_lock": "0",
                  }
                }
              }</pre><div id="a3-2" tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div></div></div><div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div></div><h1>{{$t('apiDocument.p_42')}}</h1><a name="sign"></a><h3>{{$t('apiDocument.p_43')}}</h3><p>{{$t('apiDocument.p_44')}}</p><pre id="a3-3" class="json-show">
            {
              "accessKey": "4900201404d07078fae624c186a79bc7",
              "market": "mcc_btc",
              "number": "2",
              "price": "0.032",
              "timestamp": "1525314907",
              "type": "buy",
              "version": "1.0",
            }</pre><p id="a3-4">{{$t('apiDocument.p_45')}}</p><pre class="json-show">accessKey=4900201404d07078fae624c186a79bc7&amp;market=mcc_btc&amp;number=2&amp;price=0.032&amp;timestamp=1525314907&amp;type=buy&amp;version=1.0</pre><p>{{$t('apiDocument.p_46')}}</p><pre class="json-show" id="a4-1">c403f320a996bc2333a3d331da468fc815ac0d29</pre></div>
      </div>
    </div>
</div>
</template>
<style scoped lang="scss">
.terms {
    width: 100%;
    height: 100%;
    color: #333;
    .bg {
        width: 100%;
        height: 80px;
        background: #555;
    }
    .api-content {
        width: 100%;
        padding: 20px 50px;
        display: flex;
           ul.ivu-menu.ivu-menu-light.ivu-menu-vertical {
      li.ivu-menu-submenu {
          min-height: 40px;
        .ivu-menu-submenu-title {
         /*  height: 50px; */
          padding: 10px;
          border-radius: 5px;
          &:hover {
            background-color: #f0ac19;
            .isclick {
              background-color: #fff;
            }
            .content,.ivu-icon {
              color: #333;
            }
          }
          .isclick {
            width: 6px;
            height: 6px;
            background-color: #f0ac19;
            display: inline-block;
            border-radius: 50%;
            margin-top: 16px;
            line-height: 50px;
          }
          .content {
            padding-left: 5px;
            color:#333;
          }
          .ivu-icon {
            top: 9px;
          }
        }
        .ivu-menu {
            flex: 0 0 240px;
            width: 240px;
          li.ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected {
            color: #f0ac19;
            a {
              color: #f0ac19;
            }
          }
          li.ivu-menu-item {
            color: #333;
            background: #fff;
            padding: 0;
            text-align: left;
            a {
                text-indent: 20px;
              color: #333;
              display: block;
              height: 100%;
              padding: 14px 24px;
              font-size: 14px;
            }
          }
        }
      }
      li.ivu-menu-submenu.ivu-menu-opened {
        .ivu-menu-submenu-title {
          background-color: #f0ac19;
          .isclick {
            background-color: #fff;
          }
          .content,
          .ivu-icon {
            color: #f0ac19;
          }
        }
      }
    }
    }
    .content-right {
        margin-left: 20px;
        width: calc(100% - 280px );
        h1 {
            margin-top: 40px;
            margin-bottom: 24px;
            font-size: 24px;
            line-height: 32px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: bold;
        }
        h3 {
            margin-top: 32px;
            margin-bottom: 24px;
            font-size: 16px;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.85);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            tr {
                border: 1px solid #F7F7F7;
                border-right: none;
                height: 22px;
            }
        }
    }
}
</style>