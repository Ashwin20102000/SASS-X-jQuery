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
    let scroll = $(this).scrollTop() 
    let scrollAtFirst = 900;
    let scrollRotate = (scroll-scrollAtFirst);
    if(scroll>500){
      $('#scroll').removeClass('occupier');
      $('.projects').fadeOut(2000)
    }
     if(scroll>900){

      $('.slideBox-1').text(scrollRotate).animate({
        // WebkitTransform: 'rotate(' + scrollRotate + 'deg)',
        '-moz-transform': 'rotate(' + scrollRotate + 'deg)'
      },1000);
    }
  })
}

const loadOtherProjects = () => {
  const linkTemplate = (attr,link)=>{
    return  `
      <div class='links mt-2'>
          <h4>${attr} : </h4>
          <a target="_blank" href=${link}>${link}</a>
      </div>
    ` 
  }
  const otherProjects = [
     {
      title:'Apple Watch',
      description:'Clone of Apple Watch by HTML and CSS',
      img:'../assests/AppleWatch.png',
      github:'https://github.com/Ashwin20102000/Apple-Watch',
      link:'https://elegant-ritchie-273584.netlify.app/'
    },
     {
      title:'Ash Image Editor',
      description:"It's Build using CamanJs(Effects & Filters) and Bootswatch.",
      img:'../assests/AshImageEditor.png',
      github:'https://github.com/Ashwin20102000/AshPhotoEditor/',
      link:'https://ashimageeditor.ashwinj2.repl.co/'
    },
    {
      title:'AlgoX',
      description:'Algorithm Visualizer',
      img:'../assests/AlgoX.png',
      github:'',
      link:''
    },
  ];
  $.each(otherProjects,function(idx,project){
    $('#otherProjects').append(
      `
      <div class="slideBox-${idx+1}">${idx+1}</div>
      <div class="otherProjects my-2">
        <h1>${project.title}</h1>
        <span class="my-2">${project.description}</span>
        <img class="project_img"  src=${project.img}>
        ${project.github!==""?linkTemplate('Github',project.github) :""}
        ${project.link!==""?linkTemplate('Live Link',project.link) :""}
      </div>
      `
    )
  })
}


const intilizeFunctions = () => {
  const scaleHoverSelectors = ['.contain-image','.content']
  bringCardsToShow();
  scrollVisible()
  scaleWhenHover(scaleHoverSelectors)
  iconsIntializer();
  loadOtherProjects();
}

$(document).ready(function () {
  intilizeFunctions();
  // $( ".fadeText" ).toggle( "bounce", { times: 2 }, "slow" );
  (function loop() {
    $('.fadeText').delay(900).fadeToggle("slow",loop).toggle( "bounce", { times: 3 }, "slow" );;
    $('.bb-2').delay(4000).fadeToggle("slow",loop).toggle( "bounce", { times: 2 }, "slow" );

  }())

});

