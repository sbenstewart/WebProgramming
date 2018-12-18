function chkhover(){
  if ( document.contact_form.contact_name.value != "" )
  {
          document.contact_form.gender[0].disabled = false;
          document.contact_form.gender[1].disabled = false;
          document.contact_form.age.disabled = false;
          document.contact_form.terms.disabled == false;
          valid = false;
  }
    setTimeout(chkhover, 500);
}
valid=false;
$(document).ready(chkhover);
