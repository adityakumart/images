/*
 * Exercise 1
 *
 * Implement 1 observable that when subscribed to will emit the following at the indicated times after subscription starts:
 *
 * 00:00:01 => A
 * 00:00:02 => BB
 * 00:00:02 => 10
 * 00:00:03 => CCC
 * 00:00:04 => DDDD
 * 00:00:04 => 20
 * 00:00:05 => EEEEE
 * 00:00:06 => FFFFFF
 * 00:00:06 => 30
 * ...
 *
 * The emissions should begin when clicking on the page, clicking on the page while observable is emitting should pause
 * the emissions, clicking again should resume emissions and so on.
 *
 * It is required that you use an online editor (jsbin, codepen, jsfiddle, stackblitz, etc) and send a link as your submission. This
 * should be a separate link apart from the other exercises. Submissions that do not use an online editor or are not separate
 * links will not be considered.
 *
 * IMPORTANT: all exercises are best effort. If you cannot arrive at the working solution requested, please just include an explanation
 * as to your approach, what worked, what didn't, and anything else you feel may be relevant.
 */

