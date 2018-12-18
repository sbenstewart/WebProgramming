function chkhover(){
  if ( document.contact_form.contact_name.value != "" )
  {
          document.contact_form.gender[0].disabled = false;
          document.contact_form.gender[1].disabled = false;
          document.contact_form.age.disabled = false;
          document.contact_form.terms.disabled == false;
          valid = false;
  }
  if ($(document.activeElement).attr("type") == "text" || $(document.activeElement).attr("type") == "textarea")
  {
    $('link[href="css/style.css"]').prop('disabled', false);
  }
    setTimeout(chkhover, 500);
}
valid=false;
$(document).ready(chkhover);
$('link[href="css/style.css"]').prop('disabled', true);


function checkFocus() {

  if ($(document.activeElement).attr("type") == "text" || $(document.activeElement).attr("type") == "textarea") {

  //Something's selected

  return true;

 }

}
