<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */

get_header(); ?>

<div class="row-fluid">
  <div class="span6">
		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'content', 'single' ); ?>

			<?php comments_template( '', true ); ?>

		<?php endwhile; // end of the loop. ?>
	</div>
  <div class="span1">&nbsp;</div>
  <?php get_sidebar(); ?>
</div>
<?php get_footer(); ?>