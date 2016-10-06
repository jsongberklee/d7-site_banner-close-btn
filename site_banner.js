/**
	loading below if it is active
**/
jQuery(document).ready(function(){
	var $cookie = jQuery.cookie('site_banner');
	var $this = jQuery(this);
	var $banners = $this.find('#siteBannerFooterBanner, #siteBannerHeaderBanner');
	if($cookie == null){
		jQuery.cookie('site_banner', null);
		var $button = jQuery('<button />', {title:'Close banner', text:'CLOSE', class:'site-banner-close'}).on('click',{obj:$banners},function(event){
			event.data.obj.remove();
			jQuery.cookie('site_banner', 1);
		})
		$banners.append($button);
	}else if($cookie == 1){
		$banners.remove();
	}
});