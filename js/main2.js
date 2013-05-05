//<!--Main2.js-->

var app = {
	initialize: function() {
		var self = this;
		this.store = new  LocalStorageStore(function() {

		});
		this.shoutoutPage = new ShoutoutView(this.store).render();
		this.showPage(this.shoutoutPage);
		$('.tab-link').bind('touchstart click', goog.bind(this.shoutoutPage.changeTab, this.shoutoutPage));
	},

	showPage: function(page) {
		$('body').append(page.el);
		
	}

}

app.initialize();