function openPortfolio(evt, portfolioName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}

	document.getElementById(portfolioName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

var btnTop = document.getElementById('btnTop');

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		btnTop.style.display = 'block';
	} else {
		btnTop.style.display = 'none';
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function openMessage() {
	window.open(
		'https://api.whatsapp.com/send/?phone=%2B923352522522&text=This+is+Muhammad+Osama%2C+how+may+I+assist+you%3F&app_absent=0'
	);
}
