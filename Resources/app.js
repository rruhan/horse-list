var homeWindow = Titanium.UI.createWindow({
	backgroundGradient : {
		layout : 'vertical',
		type : 'linear',
		startPoint : {
			x : '0%',
			y : '0%'
		},
		endPoint : {
			x : '0%',
			y : '100%'
		},
		colors : [{
			color : '#36A9E1',
			offset : 0.25
		}, {
			color : '#297DA4',
			offset : 0.5
		}],
	},

	fullscreen : true,
	exitOnClose : true
});

var actionBar;
homeWindow.addEventListener("open", function(e) {
	actionBar = homeWindow.activity.actionBar;
	if (actionBar) {
		actionBar.icon = "/images/TitleHorse.png";
		actionBar.title = "";
	}

	homeWindow.activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;
		var homeMenu = menu.add({
			icon : "Home_Main.png",
			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
		});

		var logoutMenu = menu.add({
			icon : "/images/Logout.png",
			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
		});

		logoutMenu.addEventListener("click", function(e) {
			//
		});
	};
});

homeWindow.orientationModes = [Titanium.UI.PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT];

var scrollView = Ti.UI.createScrollView({
	//backgroundColor: 'green',
	layout : 'vertical',
	contentWidth : Ti.UI.SIZE,
	contentHeight : Ti.UI.SIZE,
	showVerticalScrollIndicator : true,
	//showHorizontalScrollIndicator : true,
	height : '100%',
	width : Ti.UI.FILL,
	top : '0dp'
});

var HomeTitleLabel1 = Ti.UI.createLabel({
	//backgroundColor: 'green',
	color : '#FFF',
	text : 'Welcome to My App',
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : '18dp'
	},
	textAlign : 'center',
	top : '20dp',
	height : Ti.UI.SIZE,
	width : '250dp'
});

scrollView.add(HomeTitleLabel1);

var username = Titanium.UI.createTextField({
	backgroundColor : '#FFF',
	color : '#336699',
	value : '',
	top : '20dp',
	height : Ti.UI.SIZE,
	width : '250dp',
	hintText : 'Username',
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : '14dp'
	},
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var password = Titanium.UI.createTextField({
	backgroundColor : '#FFF',
	color : '#336699',
	value : '',
	top : '10dp',
	height : Ti.UI.SIZE,
	width : '250dp',
	hintText : 'Password',
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : '14dp'
	},
	passwordMask : true,
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var checkbox = Ti.UI.createSwitch({
	//backgroundColor : 'blue',
	top : '10dp',
	style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
	title : "Remember me",
	value : true
});

checkbox.addEventListener("change", function(e) {
	Ti.API.info("The checkbox has been set to " + e.value);
});

var HomeImg = Titanium.UI.createImageView({
	width : 100,
	height : 100,
	image : '/images/Home_Main.png',
	opacity : 1,
});

scrollView.add(username);
scrollView.add(password);
scrollView.add(checkbox);
scrollView.add(HomeImg);
homeWindow.add(scrollView);

homeWindow.open();
