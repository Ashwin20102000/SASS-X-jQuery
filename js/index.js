function iconsIntializer(){
  $('.handleIcon').css({
    cursor:'pointer',
  })
}

function bringCardsToShow(){
  setTimeout(()=>{
    $('.about_me').fadeIn('slow').css('display','flex')
    $('.handleIcon').fadeIn('slow')
  },
  1000)
}

function scaleWhenHover(selectors){
  $(selectors).each(function(idx,selector){
    $(selector).hover(function(){
      $(this).css({"transform":"scale(1.1)","transition":'1s'})
    },function(){
      $(this).css({"transform":"scale(1)","transition":'1s'})
    }) 
  })

}

function scrollVisible(){
  $('#scroll').addClass('occupier');
  $('.projects').hide()
  $(document).scroll(function(){
    if($(this).scrollTop()>500){
      $('#scroll').removeClass('occupier');
      $('.projects').fadeOut(2000)
    }
  })
}
const loadOtherProjects = () => {
  const otherProjects = [
    {
      title:'AlgoX',
      description:'Algorithm Visualizer',
      img:'../assests/AlgoX.png'
    }
  ];
  $.each(otherProjects,function(idx,project){
    $('#otherProjects').append(
      `
      <div class="otherProjects">
        <h1>${project.title}</h1>
        <span class="my-2">${project.description}</span>
        <img class="project_img"  src=${project.img}>
      </div>
      `
    )
  })
}


const intilizeFunctions = () => {
  const scaleHoverSelectors = ['.contain-image','.content']
  scrollVisible()
  scaleWhenHover(scaleHoverSelectors)
  iconsIntializer();
  bringCardsToShow();
  loadOtherProjects();
}

$(document).ready(function () {
  intilizeFunctions();
  (function loop() {
    $('.fadeTex').delay(900).fadeToggle("slow",loop);
  }())

});

