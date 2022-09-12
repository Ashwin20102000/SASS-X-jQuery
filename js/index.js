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

const scrollAnimate = (scrollRotate,selector,position='absolute') => {
 if(scrollRotate<1000){

   $(selector).css('position',position)
     .animate({ deg:scrollRotate},{
       duration: 0,
       step: function() {
         $(this).css({ transform: 'rotate(' + scrollRotate + 'deg)',left:`${scrollRotate}px` });
       }
     })
 }
}


function scrollVisible(){
  $('#scroll').addClass('occupier');
  $('.projects').hide()
  $(document).scroll(function(){
    let scroll = $(this).scrollTop() 
    let pigeonScroll=300,scrollAtFirst = 900,
    scrollAtSecond=1900,
    scrollAtThird=2800,
    scrollAtFour=3700

    let scrollPigeonRotate=scroll-pigeonScroll, scrollRotateFirst = (scroll-scrollAtFirst)
    ,scrollRotateSecond = (scroll-scrollAtSecond)
    ,scrollRotateThird = (scroll-scrollAtThird)
    ,scrollRotateFour = (scroll-scrollAtFour)
    if(scroll>300 
      && scroll < 650
      ){
     scrollAnimate(scrollPigeonRotate%700,'#pura','relative')
    }
    if(scroll>500){
      $('#scroll').removeClass('occupier');
      $('.projects').fadeOut(2000)
    }
     if(scroll<1300){
     scrollAnimate(scrollRotateFirst,'.slideBox-1')
    }
     if(scroll>1900){
     scrollAnimate(scrollRotateSecond,'.slideBox-2')
    }
     if(scroll>2500){
     scrollAnimate(scrollRotateThird,'.slideBox-3')
    }
     if(scroll>3100){
     scrollAnimate(scrollRotateFour,'.slideBox-4')
    }
  })
}

const loadOtherProjects = () => {
  const githubAsh = 'https://github.com/Ashwin20102000'
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
      github:`${githubAsh}/Apple-Watch`,
      link:'https://elegant-ritchie-273584.netlify.app/'
    },
    {
      title:'Post App',
      description:'Post App build using React-TS,Redux and MaterialUI',
      img:'../assests/PostApp.png',
      github:`${githubAsh}/crud-app`,
      link:''
    },
     {
      title:'Ash Image Editor',
      description:"It's Build using CamanJs(Effects & Filters) and Bootswatch.",
      img:'../assests/AshImageEditor.png',
      github:`${githubAsh}/AshPhotoEditor`,
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
      <div class="slideBox-${idx+1}">
      </div>
      <div class="otherProjects my-2">
        <h1>${project.title}</h1>
        <span class="my-1 p-1">${project.description}</span>
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
    $('.fadeText').delay(900).fadeToggle("slow",loop).toggle( "bounce", { times: 3 }, "slow" );

  }())

});

