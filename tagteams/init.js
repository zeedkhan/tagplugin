

chrome.storage.sync.get({ 
	mycountry: "thailand", 
	ouremail: "xxx@google.com",
	optionkl__modecase: "Auto",
	optionkl__disable_stylebytheme: false,
},
function (result) {

	if (result.mycountry == "Vietnam") {


        var _default_action = () => {
            window.dataTagteam.language = vi_language;
            window.dataTagteam.panel_div = vi_panel_div;
            window.dataTagteam.panel_div_style = vi_panel_div_style;
            window.dataTagteam.api_blog = vi_api_blog;
            window.dataTagteam.current_case = {};
    
            // Focus case code vanbo
            window.dataTagteam.tagteamFocusCase = () => { vi_TagteamFocusCase() } ;
            window.dataTagteam.sendFirstEmail = () => { vi_sendFirstEmail() } ;
			
            vi_tagTeamTDCXLoad(window);
        }

		vi_load_remote(result, _default_action);
		vi_checkStyleByTheme(result.optionkl__disable_stylebytheme);
	}

	// // Update file overwrite /tagteams/groups
	// if (result.mycountry == "Japan") {
		// window.dataTagteam.language = ja_language;
		// window.dataTagteam.panel_div = ja_panel_div;
		// window.dataTagteam.api_blog = ja_api_blog;

		// // Focus case code vanbo
		// window.dataTagteam.tagteamFocusCase = () => { ja_TagteamFocusCase() } ;
		// window.dataTagteam.sendFirstEmail = () => { ja_sendFirstEmail() } ;
		
		// ja_tagTeamTDCXLoad();
	// }


	// // Update file overwrite /tagteams/groups
	// if (result.mycountry == "Thailan") {
		// window.dataTagteam.language = thailan_language;
		// window.dataTagteam.panel_div = thailan_panel_div;
		// window.dataTagteam.api_blog = thailan_api_blog;

		// // Focus case code vanbo
		// window.dataTagteam.tagteamFocusCase = () => { thailan_TagteamFocusCase() } ;
		// window.dataTagteam.sendFirstEmail = () => { thailan_sendFirstEmail() } ;
		
		// thailan_tagTeamTDCXLoad();
	// }
	
}
);
