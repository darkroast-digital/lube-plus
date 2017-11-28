<?php include 'snippets/header.php' ?>

	<?php include 'snippets/nav.php' ?>

		<main class="offpage">

			<aside class="sidebar">
				<ul class="sidebar__nav">
					<li>
						<a href="locations.php">Locations</a></li>
					<li>
						<a href="about-us.php">About Us</a>
					</li>
					<li>
						<a href="guarantee.php">Our Guarantee</a>
					</li>
					<li>
						<a href="reviews.php">Reviews</a>
					</li>
					<li>
						<a href="contact.php">Contact Us</a>
					</li>
				</ul>
				<a href="locations.php" class="sidebar__location">
					<img src="/assets/img/lubeplus-near.png" alt="">
				</a>
				<img src="/assets/img/warranty-yellow.png" alt="">
			</aside>

			<article class="content">
				<h4>Locations</h4>

				<div class="tabs">
					<ul class="tabs__nav">
						<li rel="tab1">Windsor Airport</li>
						<li rel="tab2">Chatham</li>
						<li rel="tab3">Emeryville</li>
						<li rel="tab4">Techumseh Rd East</li>
						<li rel="tab5">Amherstburg</li>
					</ul>

					<div class="tabs__container">
						<h6 class="tab__drawer" rel="tab1">Windsor Airport</h6>
						<div id="tab1" class="tab__content">
							<h6>Windsor Airport</h6>
							<p><i class="fa fa-map-marker"></i> 2955 County Road 42, Windsor Airport (YQG), Windsor, ON N8V 1A1, Canada</p>
							<p><i class="fa fa-phone"></i> 519-969-9393</p>
							<h6>Hours</h6>
							<ul>
								<li>Monday - Friday: 8AM to 7PM</li>
								<li>Saturday: 8AM to 6PM</li>
								<li>Sunday: 10AM to 4PM</li>
							</ul>
						</div>
						<!-- Tab One -->
						<h6 class="tab__drawer" rel="tab2">Chatham</h6>
						<div id="tab2" class="tab__content">
							<h6>Chatham</h6>
							<p><i class="fa fa-map-marker"></i> 191 Keil Drive Chattam Ontario</p>
							<p><i class="fa fa-phone"></i> 519-352-3523</p>
							<h6>Hours</h6>
							<ul>
								<li>Monday-Saturday: 8AM to 6PM</li>
							</ul>
						</div>
						<!-- Tab Two -->
						<h6 class="tab__drawer" rel="tab3">Emeryville</h6>
						<div id="tab3" class="tab__content">
							<h6>Emeryville</h6>
							<p><i class="fa fa-map-marker"></i> 1196 County rd 22 Emeryville Ontario Canada</p>
							<p><i class="fa fa-phone"></i> 519-727-1002</p>
							<h6>Hours</h6>
							<ul>
								<li>Monday - Saturday: 8AM to 6PM</li>
							</ul>
						</div>
						<!-- Tab Three -->
						<h6 class="tab__drawer" rel="tab4">Techumseh Rd East</h6>
						<div id="tab4" class="tab__content">
							<h6>Howard Ave</h6>
							<p><i class="fa fa-map-marker"></i> 3880 Tecumseh Road East, Windsor, ON N8W 1J2, Canada</p>
							<p><i class="fa fa-phone"></i> 519-988-0909</p>
							<h6>Hours</h6>
							<ul>
								<li>Monday - Saturday: 8AM to 6PM</li>
							</ul>
						</div>
						<!-- Tab Four -->
						<h6 class="tab__drawer" rel="tab5">Amherstburg</h6>
						<div id="tab5" class="tab__content">
							<h6>Amherstburg</h6>
							<p><i class="fa fa-map-marker"></i> 105 Richmond Street, Amherstburg, ON N9V, Canada</p>
							<p><i class="fa fa-phone"></i> 519-713-9661</p>
							<h6>Hours</h6>
							<ul>
								<li>Monday - Wednesday: 9:00 AM to 6:00PM</li>
								<li>Thursday - Sunday: 8:00 AM  to 6:00PM</li>
							</ul>
						</div>
						<!-- Tab Five -->
					</div>
				</div>
				<!-- End Tabs -->


				<input id="input" class="controls">
				<div id="map-canvas"></div>

			</article>

		</main>

		<?php include 'snippets/footer.php' ?>
