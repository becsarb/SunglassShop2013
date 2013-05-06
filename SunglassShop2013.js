/**
 * User: u029337
 * Date: 4/18/13
 * Time: 5:29 PM
 * Sunglass Shop 2013 jquery/javascript file
 */

var CatEyeIMALink = baseServerURL + '/shop/jewelry-accessories/cat-eye?id=20024';
var ShieldIMALink = baseServerURL + '/shop/jewelry-accessories/shield?id=20025';
var OversizedIMALink = baseServerURL + '/shop/jewelry-accessories/oversized?id=21104';
var WayfarerIMALink = baseServerURL + '/shop/jewelry-accessories/wayfarer?id=1000091';
var PolarizedIMALink = baseServerURL + '/shop/jewelry-accessories/polarized?id=1001443';
var AviatorIMALink = baseServerURL + '/shop/jewelry-accessories/aviator?id=4522';

mapDomCmArray = [];



$(function() {
    initCoremetrics();

    $('#SunglassShop2013 map .sun_bottommenu').mouseover(function(){
        if ($('.imageoverlay').length != 0)
            $('.imageoverlay').remove();
        
        if ($('.SunglassShop2013LinkOverlay').length != 0)
            $('.SunglassShop2013LinkOverlay').remove();
        
        if ($('.menuoverlay').length != 0)
            $('.menuoverlay').remove();

        var divid = this.id + 'OverlayDiv';
        var classid = this.id + 'hover';

        var insertDiv = '<div id="';
        insertDiv += divid;
        insertDiv += '" class="menuoverlay ' + classid + '"></div>';

        $('#SunglassShop2013').append(insertDiv);
    });

    $('#SunglassShop2013 map .sun_bottommenu').mouseout(function(evt){
        if ($('.menuoverlay').length != 0)
            $('.menuoverlay').remove();
        evt.stopImmediatePropagation();
        return false;
    });

    $('#SunglassShop2013 map .sun_bottomimage').mouseover(function(evt){
        if ($('.menuoverlay').length != 0)
            $('.menuoverlay').remove();
        
        if ($('.SunglassShop2013LinkOverlay').length != 0)
            $('.SunglassShop2013LinkOverlay').remove();       

        if ($('.imageoverlay').length != 0)
            $('.imageoverlay').remove();

        var odiv = this.id + 'OverlayDiv';
        var oclass = this.id + 'Overlay';
        var tlink = this.id + 'Link';

        var insertDiv = '<a href="' + window[tlink] + '" class="imageoverlaylink">';
        insertDiv += '<div id="' + odiv;
        insertDiv += '" class="' + 'imageoverlay ' + oclass + '"></div></a>';

        $('#SunglassShop2013').append(insertDiv);
        evt.stopImmediatePropagation();
        return false;
    });

    $('#SunglassShop2013').mouseleave(function(evt){
        if ($('.SunglassShop2013LinkOverlay').length != 0)
            $('.SunglassShop2013LinkOverlay').remove();
        
        if ($('.imageoverlay').length != 0)
            $('.imageoverlay').remove();
        evt.stopImmediatePropagation();
        return false;
    });

    function mapDomToCoremetricsTags(){
        mapDomCmArray.push(new mapDomCmItem('TheSunglassShopIMA', 'top_nav--sun_shop'));
        mapDomCmArray.push(new mapDomCmItem('DiorIMA', 'top_nav--dior'));
        mapDomCmArray.push(new mapDomCmItem('GucciIMA', 'top_nav--gucci'));
        mapDomCmArray.push(new mapDomCmItem('PradaIMA', 'top_nav--prada'));
        mapDomCmArray.push(new mapDomCmItem('RayBanIMA', 'top_nav--rayban'));
        mapDomCmArray.push(new mapDomCmItem('TomFordIMA', 'top_nav--tomford'));
        mapDomCmArray.push(new mapDomCmItem('KateSpadeNewYorkIMA', 'top_nav--katespadenewyork'));

        mapDomCmArray.push(new mapDomCmItem('CatEyeIMA', 'cat-eye'));
        mapDomCmArray.push(new mapDomCmItem('ShieldIMA', 'shield'));
        mapDomCmArray.push(new mapDomCmItem('OversizedIMA', 'oversized'));
        mapDomCmArray.push(new mapDomCmItem('WayfarerIMA', 'wayfarer'));
        mapDomCmArray.push(new mapDomCmItem('PolarizedIMA', 'polarized'));
        mapDomCmArray.push(new mapDomCmItem('AviatorIMA', 'aviator'));
    };

    function initCoremetrics (){
        mapDomToCoremetricsTags();
        BLOOMIES.coremetrics.cmCreatePageviewTag('spring13_sun_shop--hp', 'spring13_sun_shop', '', '');

        $('#SunglassShop2013 #map1 area').click (function(evt){
            BLOOMIES.coremetrics.cmCreatePageElementTag(mapDomToCoremetricksLookup(this.id), 'spring13_sun_shop');
        });

        $('div #SunglassShop2013').click (function(evt){
        	if ($('.imageoverlaylink').length != 0) {
        		var tid = $('.imageoverlay')[0].id.replace('OverlayDiv','');
        		
                BLOOMIES.coremetrics.cmCreatePageElementTag(mapDomToCoremetricksLookup(tid), 'spring13_sun_shop--hp');
        	}         	
        });
    };
});

