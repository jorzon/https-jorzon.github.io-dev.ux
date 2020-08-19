let page = document.querySelector('.page')

let rute = document.location.href

console.log(rute)

if (rute.includes('about')) {
	$('.page .page1__header .section1__main .item__list .item ul li:nth-child(2)').addClass('active')
	$('.page .page1__header .section2__main .item__list .item ul li:nth-child(2)').addClass('active')
} else {
	$('.page .page1__header .section1__main .item__list .item ul li:nth-child(1)').addClass('active')
	$('.page .page1__header .section2__main .item__list .item ul li:nth-child(1)').addClass('active')
}

// page.classList.add('loader')


// for (i = 0; i < child.length; i++) {
//   child[i].classList.add('skeletor')
// }


$('.page .up').click(function(){
	$('body,html').animate({
		scrollTop: '0px'
	}, 900);
})

$(window).scroll(function(){
	if( $(this).scrollTop() > 0  ){
		$('.page .up').slideDown(300);
	} else {
		$('.page .up').slideUp(300);
	}
})




window.onload = function() {
	
	page.classList.remove('loader')
	let child = document.querySelectorAll('.skeletor')

	for (i = 0; i < child.length; i++) {
	  child[i].classList.remove('skeletor')
	}	
}







let close = document.getElementById('close')
let menu = document.getElementById('menu')
let bg = document.getElementById('bg')

let contentMenu = document.getElementById('contentMenu')

menu.addEventListener('click' , () => {
	contentMenu.classList.add('active')
	bg.classList.add('active')
	$('body').css('overflow' , 'hidden')
})


close.addEventListener('click' , () => {
	contentMenu.classList.remove('active')
	bg.classList.remove('active')
	$('body').css('overflow' , 'visible')
})

if ('#competencia') {
	$('#competencia').slick({
	  	dots: false,
	  	arrows: false,
	  	speed: 300,
	  	infinite: false,
	  	//slidesToShow: 3,
	  	//variableWidth: true,
	  	responsive: [
		  	{
		     	breakpoint: 9999,
		     	settings: "unslick"
		    },
			  {
			    breakpoint: 1025,
			    settings: {
			      //centerMode: true,
			      variableWidth: true,
			      //slidesToShow: 1,
			      arrows: false,
			      slidesToScroll: 1
			    }

			 },
			 {
			    breakpoint: 650,
			    settings: {
			      //centerMode: true,
			      variableWidth: true,
			      //slidesToShow: 1,
			      arrows: false,
			      slidesToScroll: 1
			    }

			  }
		]
	});

}


if ('#wireframes') {
	$('#wireframes').slick({
	  	dots: false,
	  	arrows: false,
	  	speed: 300,
	  	infinite: false,
	  	//slidesToShow: 3,
	  	//variableWidth: true,
	  	responsive: [
		  	{
		     	breakpoint: 9999,
		     	settings: "unslick"
		    },
			  {
			    breakpoint: 1025,
			    settings: {
			      //centerMode: true,
			      variableWidth: true,
			      //slidesToShow: 1,
			      arrows: false,
			      slidesToScroll: 1
			    }

			  },
			 {
			    breakpoint: 650,
			    settings: {
			      //centerMode: true,
			      variableWidth: true,
			      //slidesToShow: 1,
			      arrows: false,
			      slidesToScroll: 1
			    }

			  }
		]
	});
}


if ('#diseno') {
	$('#diseno').slick({
	  	dots: false,
	  	arrows: false,
	  	speed: 300,
	  	infinite: false,
	  	//slidesToShow: 3,
	  	//variableWidth: true,
	  	responsive: [
		  	{
		     	breakpoint: 9999,
		     	settings: "unslick"
		    },
			  {
			    breakpoint: 1025,
			    settings: {
			      //centerMode: true,
			      variableWidth: true,
			      //slidesToShow: 1,
			      arrows: false,
			      slidesToScroll: 1
			    }

			  },
			 {
			    breakpoint: 650,
			    settings: {
			      //centerMode: true,
			      variableWidth: true,
			      //slidesToShow: 1,
			      arrows: false,
			      slidesToScroll: 1
			    }

			  }
		]
	});

}


if ('#test') {
	if ('#test') {
		$('#test').slick({
		  	dots: false,
		  	arrows: false,
		  	speed: 300,
		  	infinite: false,
		  	//slidesToShow: 3,
		  	//variableWidth: true,
		  	responsive: [
			  	{
			     	breakpoint: 9999,
			     	settings: "unslick"
			    },
				  {
				    breakpoint: 650,
				    settings: {
				      //centerMode: true,
				      variableWidth: true,
				      //slidesToShow: 1,
				      arrows: false,
				      slidesToScroll: 1
				    }

				  }
			]
		});
	}
}








