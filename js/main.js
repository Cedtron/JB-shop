$(function() {
	
	const clearInput = () => {
		const input = document.getElementsByClassName("input")[0];
		input.value = "";
	  }
	
	
		const featuredProducts = [];
	
		// Iterate through categories
		$.each(productsData.categories, function(_, category) {
			// Iterate through products in each category
			$.each(category.products, function(_, product) {
				// Check if the product is featured
				if (product.featured) {
					// Add the featured product to the featuredProducts array
					featuredProducts.push(product);
				}
			});
		});
	
		// Shuffle the featuredProducts array
		shuffleArray(featuredProducts);
	
		// Now you have an array of only featured products in featuredProducts, shuffled randomly
		// You can use this array to display the featured products in your HTML
	
		const container = $("#featured-products-container");
	
		// Clear existing content in the container
		container.empty();
	
		// Display only first 6 items
		const slicedProducts = featuredProducts.slice(0, 6);
	
		// Iterate through slicedProducts array and create HTML elements for each product
		$.each(slicedProducts, function(_, product) {
			const productHTML = `
				<div class="col-sm-6 col-md-4 col-lg-4">
					<div  class="card m-2 card-shadow text-center">
						<img src="images/${product.image}" class="card-img-top img" alt="${product.name}">
						<div class="card-body">
							<div class="detail-box mb-2">
								<h5>${product.name}</h5>
								<h6>Ugx ${product.price}</h6>
							</div>
							<a href="#" class="button btn-p w-45 rtl-1">View</a>
							<a href="whatsapp://send?phone=+25677278459&text=I%20want%20to%20buy%20${encodeURIComponent(product.name)}%20-%20UGX%20${product.price}" class="button btn-s w-45 rtr-1">Buy</a>
						</div>
					</div>
				</div>`;
			// Append the productHTML to the container
			container.append(productHTML);
		});
	
	
	// Function to shuffle array
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});