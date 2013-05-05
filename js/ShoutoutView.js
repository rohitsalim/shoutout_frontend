var ShoutoutView = function (store) {
	this.initialize = function() {
		this.el = $('<div/>');
		//this.el.on('keyup', '.member-search', this.findByName);
	};

	this.findByName = function() {
		
	};

	this.render = function() {		
		this.el.html(ShoutoutView.template());
		this.el.append(ShoutoutView.textAreaTemplate());
		this.el.append(ShoutoutView.tabTemplate());
		this.setTabContent();
		return this;
	}

	this.setTabContent = function() {
		var navTabs = this.el.find('.nav-tabs');
		if (navTabs.attr('data-val') === "privacy") {
			this.el.find('#tab-content').html(ShoutoutView.privacyTemplate());
		} else {
			this.el.find('#tab-content').html(ShoutoutView.coreValTemplate());
		}
	}

	//Target is the tab-link class that is clicked
	//If the parent of the target is active, return immediately
	//otherwise, change the active tag to  
	this.changeTab = function(event) {
		var target = $(event.currentTarget);
		if (target.parent().hasClass('active')) {
			return;
		}
		var parentUl = target.closest('ul:not(.dropdown-menu)');
		var previousActive =  $($(parentUl).find('.active:last a')[0]);
		var dataValue = target.parent().attr('data-val');
		previousActive.parent().removeClass('active');
		target.parent().addClass('active');
		parentUl.attr('data-val', dataValue);
		this.setTabContent();
 	}

	this.initialize();
}

ShoutoutView.template = Handlebars.compile($("#shoutouts-main-tpl").html());
ShoutoutView.textAreaTemplate = Handlebars.compile($("#shoutout-reason-tpl").html());
ShoutoutView.tabTemplate = Handlebars.compile($("#tab-tpl").html());
ShoutoutView.privacyTemplate = Handlebars.compile($("#privacy-content-tpl").html());
ShoutoutView.coreValTemplate = Handlebars.compile($("#core-val-tpl").html());
