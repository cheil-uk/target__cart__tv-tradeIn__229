// ==========================================================================
//  This is a boilerplate to use for target activities
//
//	URL example: add in url of project for visibility here
// ==========================================================================

// ==========================================================================
// Scripts, helper widgets - import below
// ==========================================================================

var cheillondon = cheillondon || {};

cheillondon.targetBoilerplate = (function () {

	'use strict';

	var main = {

		// ==========================================================================
		// Variables and config Properties add below
		// ==========================================================================


		//Init
		init: function () {
			main.doEverythingTimeout();
		},


		// ==========================================================================
		// Checking jQuery
		// ==========================================================================
		doEverythingTimeout: function () {
			var _self = this;

			console.log('XXX - doEverythingTimeout');

			setTimeout(function () {
				if (window.$) {
					console.log('doEverythingTimeout - jQuery loaded');
					main.kickoff();
					// main.tagging();
					main.trackElementMutations();
					main.appendNewStyle();

					$(document).on('change', function() {
						setTimeout(() => {
							main.trackElementMutations();
						}, 1000)
					});

				} else {
					console.log('no jquery')
					_self.doEverythingTimeout();
				}
			}, 1500)
		},


		// ==========================================================================
		// Adding style
		// ==========================================================================
		appendNewStyle: function () {

			/* FYI: the CSS code is in separated file, in SCSS format that generates the CSS file. After, the gulp file finds the [CSS] and replaces with minified code from file */

			//To insert minified inline string uncomment this variable and paste here
			//Else, use default uncommented variable
			// var _css = '';

			var _css = '[[CSS]]';

			//
			// Adding style definitions to DOM
			// --------------------------------------------------------------------------
			var _head = document.head || document.getElementsByTagName('head')[0],
				_style = document.createElement('style');

			_style.type = 'text/css';
			if (_style.styleSheet) { // This is required for IE8 and below.
				_style.styleSheet.cssText = _css;
			} else {
				_style.appendChild(document.createTextNode(_css));
			}
			_head.appendChild(_style);

		},



		// ==========================================================================
		// When page is already loaded we need to add the new elements
		// ==========================================================================
		kickoff: function () {

		console.log('we have kickoff') // this is purely for testing
    const cartWrappers = document.querySelectorAll('.cart-item__services');


    const spreadsheetSkus = [
    "QE85QN900ATXXU","QE75QN900ATXXU","QE65QN900ATXXU","QE85QN800ATXXU","QE75QN800ATXXU","QE65QN800ATXXU","QE75QN700ATXXU","QE65QN700ATXXU","QE55QN700ATXXU",

    "QE85QN95AATXXU","QE75QN95AATXXU","QE65QN95AATXXU","QE55QN95AATXXU","QE85QN94CATXXU","QE75QN94AATXXU","QE65QN94AATXXU","QE55QN94AATXXU","QE50QN94AATXXU","QE43QN94AATXXU","QE98QN90AATXXU","QE85QN90AATXXU","QE75QN90AATXXU","QE65QN90AATXXU","QE55QN90AATXXU","QE50QN90AATXXU","QE43QN90AATXXU","QE85QN85AATXXU","QE75QN85AATXXU","QE65QN85AATXXU","QE55QN85AATXXU",

    "QE85QN900BTXXU","QE75QN900BTXXU","QE65QN900BTXXU","QE85QN800BTXXU","QE75QN800BTXXU","QE65QN800BTXXU","QE75QN700BTXXU","QE65QN700BTXXU","QE55QN700BTXXU",

    "QE85QN95BATXXU","QE75QN95BATXXU","QE65QN95BATXXU","QE55QN95BATXXU","QE85QN90BATXXU","QE75QN90BATXXU","QE65QN90BATXXU","QE55QN90BATXXU","QE50QN90BATXXU","QE43QN90BATXXU","QE85QN85BATXXU","QE75QN85BATXXU","QE65QN85BATXXU","QE55QN85BATXXU"
    ];

    const termsandconditions = "Please note: The discount you receive is an incentive to recycle and to purchase a new Samsung television; it is not a trade-in value for the recycled TV. Recycled TVs are non-returnable and have a zero value. If you return your purchased TV for a refund (for any reason) you will not receive any amount or value for your recycled TV."


			cartWrappers.forEach((cartWrapper) => { // Loop through each cartWrapper
							const wrapperMessaging = cartWrapper.querySelector('.service-item__applied-message');
							const tradeInContainer = cartWrapper.parentElement.querySelector('.cart-item__services');
							const currentCartSku = cartWrapper.parentElement.querySelector('.cart-item__sku').innerText;
							let tradeInName = tradeInContainer.querySelector('.service-item__name')
							let tradeInMessage = tradeInContainer.querySelector('.service-item__applied-message')
							// console.log(tradeInName, tradeInMessage);

							for (const skus in spreadsheetSkus) { // Loop through each sku
											if (Object.hasOwnProperty.call(spreadsheetSkus, skus)) { // Check if sku is in spreadsheet aka the array above
											const spreadsheetSkuValue = spreadsheetSkus[skus];
															if ( currentCartSku === spreadsheetSkuValue ) {
																			if (wrapperMessaging === null ) {
																							// cartWrapper.querySelector('.service-item').style.display = 'none'
																							const tradeInContainer = cartWrapper.querySelector('.service-item');
																							tradeInContainer.querySelector('.service-item__name').innerText = 'Trade-Up';
																							tradeInContainer.querySelector('.service-item__description').innerText = 'TV Trade-up'
																			} else {
																							const paragraph = document.createElement('p');
																							paragraph.innerText = termsandconditions;
																							paragraph.style.cssText = `
																							font-size: 12px;
																							font-style: italic;
																							padding-top: 5px;
																							font-weight: bold;
																							font-family: 'SamsungOne700';
																							`
																							tradeInName.innerText = "Trade-Up"
																							tradeInMessage.innerText = "Your trade-up discount has been successfully applied"
																							wrapperMessaging.append(paragraph);
																			}
															}
											}
							}
			});



		},


		// ==========================================================================
		// Set Events
		// ==========================================================================
		setEvents: function (elm = '') {

			console.log('XXX - setEvents: ' + elm);

			switch (elm) {
				case 'modal':
					//code to open modal;
					break;
				case 'financePopup':
				//code to open something else;
				default:
					break;
			}



		},

		resizeWindow: function () {
			// as new elements added to panel we need to resize window to activate amend height of Product Panels
			setTimeout(function () {
				$(window).resize();
				console.log('window resized');
			}, 100);
		},

		tagging: function () {
			function addTagging(el, attrs) {
							for(let key in attrs) {
							el.setAttribute(key, attrs[key]);
							}
			}

			function tagging(data) {
							s.linkTrackVars = "eVar41,events";
							s.linkTrackEvents = "scAdd,scView";
							s.events = "scAdd,scView";
							s.eVar41 = data;
							s.tl(this, 'o');
			};

			const continueBtn = document.querySelector(".order-summary__btn")
			addTagging(continueBtn,{
				"data-omni-type"  : "microsite",
				"ga-ac"           : "pd buying tool",
				"ga-ca"           : "option input"
			})

			continueBtn.onclick = () => {
					tagging(continueBtn.getAttribute('data-omni-type'));
				}
		},

		trackElementMutations: function () {
			const spreadsheetSkus = [
    "QE85QN900ATXXU","QE75QN900ATXXU","QE65QN900ATXXU","QE85QN800ATXXU","QE75QN800ATXXU","QE65QN800ATXXU","QE75QN700ATXXU","QE65QN700ATXXU","QE55QN700ATXXU",

    "QE85QN95AATXXU","QE75QN95AATXXU","QE65QN95AATXXU","QE55QN95AATXXU","QE85QN94CATXXU","QE75QN94AATXXU","QE65QN94AATXXU","QE55QN94AATXXU","QE50QN94AATXXU","QE43QN94AATXXU","QE98QN90AATXXU","QE85QN90AATXXU","QE75QN90AATXXU","QE65QN90AATXXU","QE55QN90AATXXU","QE50QN90AATXXU","QE43QN90AATXXU","QE85QN85AATXXU","QE75QN85AATXXU","QE65QN85AATXXU","QE55QN85AATXXU",

    "QE85QN900BTXXU","QE75QN900BTXXU","QE65QN900BTXXU","QE85QN800BTXXU","QE75QN800BTXXU","QE65QN800BTXXU","QE75QN700BTXXU","QE65QN700BTXXU","QE55QN700BTXXU",

    "QE85QN95BATXXU","QE75QN95BATXXU","QE65QN95BATXXU","QE55QN95BATXXU","QE85QN90BATXXU","QE75QN90BATXXU","QE65QN90BATXXU","QE55QN90BATXXU","QE50QN90BATXXU","QE43QN90BATXXU","QE85QN85BATXXU","QE75QN85BATXXU","QE65QN85BATXXU","QE55QN85BATXXU"
    ];
			 const cartWrappers = document.querySelectorAll('.cart-item__services');
				cartWrappers.forEach((cartWrapper) => {
					const tradeInContainer = cartWrapper.parentElement.querySelector('.cart-item__services');
					const cartSku = cartWrapper.parentElement.querySelector('.cart-item__sku').innerText;
					// Select the node that will be observed for mutations
							const targetNode = tradeInContainer

							// Options for the observer (which mutations to observe)
							const config = { attributes: true, childList: true, subtree: true };

							// Callback function to execute when mutations are observed
							const callback = function(mutationsList, observer) {
											// Use traditional 'for loops' for IE 11
											for(const mutation of mutationsList) {
															if (mutation.type === 'childList' && cartSku.includes(spreadsheetSkus)) {
																// console.log(mutation.target.parentElement)
																			mutation.target.parentElement.style.display = 'none'
															}
															// else if (mutation.type === 'attributes') {
															// 				console.log('And element was modified');
															// }
											}
							};

							// Create an observer instance linked to the callback function
							const observer = new MutationObserver(callback);

							// Start observing the target node for configured mutations
							observer.observe(targetNode, config);

							// Later, you can stop observing
							// observer.disconnect();
				});

		},


	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

