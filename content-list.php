<div class="events-list">
	
	<div class="content-filters clearfix">
		<form>
			<div class="filters clearfix">
				<div class="form-input-wrapper">
					<label class="visuallyhidden" for="event-types">Event types</label>
					<div class="input-wrapper">
						<select name="event-types" id="event-types" tabindex="1">
							<option value="all">All events</option>
							<option value="some">Some events</option>
							<option value="other">Other events</option>
						</select>
					</div>
				</div>
				<div class="clear-filters"><a href="">Clear all filters</a></div>
			</div>

			<div class="sort clearfix">
				<label for="event-popularity">Sort by
					<div class="input-wrapper">
						<select name="event-popularity" id="event-sort" tabindex="2">
							<option value="very">Popularity</option>
							<option value="quite">Price</option>
							<option value="not">Date</option>
						</select>
					</div>
				</label>
			</div>

			<div class="content-results clearfix">
				<p class="num-results">Showing 1-20 of 42 results</p>

				<p class="change-view">
					<span>View:</span>
					<span class="grid-view-button current ir">Gallery</span>
					<span class="list-view-button ir">Calendar</span>
				</p>
			</div>
		</form>
	</div>

	<div class="content-list grid-view clearfix">

		<?php include("includes/teaser.php"); ?>
		<?php include("includes/teaser.php"); ?>
		<?php include("includes/teaser.php"); ?>
		<?php include("includes/teaser.php"); ?>
		<?php include("includes/teaser.php"); ?>
		<?php include("includes/teaser.php"); ?>
		<?php include("includes/teaser.php"); ?>
		<?php include("includes/teaser.php"); ?>
		<?php include("includes/teaser.php"); ?>

		<div class="content-list-footer clearfix">
			<div class="content-results">
				<p class="num-results">Showing 1-20 of 42 results</p>
			</div>
			<div class="pagination results-list">
				<ul>
					<li class="previous"><a href="" class="ir">Previous</a></li>
					<li><a href="">1</a></li>
					<li class="current"><a href="">2</a></li>
					<li><a href="">3</a></li>
					<li><a href="">4</a></li>
					<li><a href="">5</a></li>
					<li><a href="">6</a></li>
					<li class="next"><a href="" class="ir">Next</a></li>
				</ul>
			</div>
		</div>

	</div> 

</div><!-- .events-list -->