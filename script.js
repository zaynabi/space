let button = document.getElementById('btn');
button.addEventListener('click',() => {
    const month = parseInt(document.getElementById('month').value);
    const result = document.getElementById('output');
    console.log(result);
    let month_status=false ;

    if(month === " " || (month <= 0 )){
        document.getElementById('month_error').innerHTML = 'Please provide a valid height ';
    } else {
        document.getElementById('month_error').innerHTML = '';
        month_status = true ;
    }
    if(month_status==true){
      if(month === "January"){
        result.innerHTML= 'January , Your planet is Mercury';
      }else if(month === "February"){
        result.innerHTML = 'February , Your planet is Venus';
      }else if(month === 'March'){
        result.innerHTML='March , Your planet is Earth';
      }else if(month === 'April'){
        result.innerHTML="April , Your planet is Mars";
      }else if(month === 'May'){
        result.innerHTML="May , Your planet is Jupiter";
      }else if(month === 'June'){
        result.innerHTML="June Your planet is Neptun";
      }else if(month === 'July'){
        result.innerHTML="July Your planet is Uranus";
      }else if(month === 'Aygust'){
        result.innerHTML="August , Your planet is Venus";
      }else if(month === 'September'){
        result.innerHTML="September , Your planet is Earth";
      }else if(month === 'October'){
        result.innerHTML="October , Your planet is Uranus";
      }else if(month === 'November'){
        result.innerHTML="November , Your planet is Saturn";
      }else if(month === 'December'){
        result.innerHTML="December Your planet is Jupiter";
      }

    }
});