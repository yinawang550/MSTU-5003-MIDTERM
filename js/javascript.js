$(function(){
  $('[data-toggle="popover"]').popover();
});



$( function() {
   $( ".sortable" ).sortable({
     placeholder: "ui-state-highlight"
   });
   $( ".sortable" ).disableSelection();
 } );
