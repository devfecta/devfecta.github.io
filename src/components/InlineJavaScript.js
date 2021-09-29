import { useEffect }  from 'react';

function InlineJavaScript() {
	/* Add back in for adding inline code.
    useEffect(() => {
		const zohoTag = document.createElement("script");
		//zohoTag.src = "https://use.typekit.net/hello.js";
		zohoTag.async = true;
		zohoTag.innerText = 'var $zoho=$zoho || {};	$zoho.salesiq = $zoho.salesiq || {widgetcode:"b4f79c387194ce745848fed69c9d1c8d52a915a4c0eeeb8e9be93d5169c4d2341a2010ab7b6727677d37b27582c0e9c4", values:{}, ready:function(){}};var d=document; s=d.createElement("script"); s.type="text/javascript"; s.id="zsiqscript"; s.defer=true; s.src="https://salesiq.zoho.com/widget"; t=d.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s,t);';
        
        if (document.querySelector("#zsiqcustomcss")) {
			const zohoCssTag = document.querySelector("#zsiqcustomcss");
			zohoCssTag.innerText = "";
			zohoCssTag.append('.zsiq_flt_rel {background-color: #000306 !important;} .zsiq_seasonal, .st2 { background-color:#00528C !important;}');
		}
        

		document.body.appendChild(zohoTag);
		return () => {
			document.body.removeChild(zohoTag);
		}
	}, []);

    return false;
	*/
}

export default InlineJavaScript;