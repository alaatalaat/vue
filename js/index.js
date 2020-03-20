$(document).ready(function(){
  /*Start Navbar*/
  $("#navbarDropdown , .dropdown-item").mouseenter(function(){
    $(".dropdown-menu").slideDown(500);
  });

   $("#navbarDropdown").mouseleave(function(){
    $(".dropdown-menu").slideUp(500);
  });

  $(".navbar-nav").mouseleave(function(){
    $(".dropdown-menu").hide();
  });
  $(" * #a-nav").mouseenter(function(){
    $(this).css("color","#007bff");
  });
  $(" * #a-nav").mouseleave(function(){
    $(this).css("color","#212529");
  });
  /*End Navbar*/
 /* Start Home*/
 $(".home .row div .btn").mouseenter(function(){
  $(this).css("background","#f5b509");
  $(this).css("border"," 1px solid #f5b509");
});
 $(".home .row div .btn").mouseleave(function(){
  $(this).css("background","#2593d5");
  $(this).css("border"," 1px solid #2593d5");
});
 /*End Home*/
 /* Start How does it work*/
 $(".work").css("backgroundColor","blue");
 /*End How does it work*/
 /*Start TYPES OF STUDENTS WE CAN HELP*/
 $(".card-menu>.list-group:first-child .list-group-item:first-child").css("background","#f5b509");
 $("#university").css("display","block")

 $(".card-menu>.list-group:first-child .list-group-item:first-of-type").click(function(){
    $(this).css("background","#f5b509");
    $("#graduation-cap,#school,#user-graduate,#torii-gate,#language,#anchor").css("display","none");
    $(".graduation-cap,.school,.user-graduate,.torii-gate,.anchor,.language").css("background","#1d94d8");
    $("#university").css("display","block");
    
  });

 $(".card-menu>.list-group:first-child .list-group-item:nth-of-type(2)").click(function(){
    $(this).css("background","#f5b509");
    $("#university,#school,#user-graduate,#torii-gate,#language,#anchor").css("display","none");
    $(".university,.school,.user-graduate,.torii-gate,.anchor,.language").css("background","#1d94d8");
    $("#graduation-cap").css("display","block");
  });

 $(".card-menu>.list-group:first-child .list-group-item:nth-of-type(3)").click(function(){
    $(this).css("background","#f5b509");
    $("#university,#graduation-cap,#user-graduate,#torii-gate,#language,#anchor").css("display","none");
    $(".university,.graduation-cap,.user-graduate,.torii-gate,.anchor,.language").css("background","#1d94d8");
    $("#school").css("display","block");
  });

 $(".card-menu>.list-group:first-child .list-group-item:nth-of-type(4)").click(function(){
    $(this).css("background","#f5b509");
    $("#university,#graduation-cap,#school,#torii-gate,#language,#anchor").css("display","none");
    $(".university,.graduation-cap,.school,.torii-gate,.anchor,.language").css("background","#1d94d8");
    $("#user-graduate").css("display","block");
  });

 $(".card-menu>.list-group:first-child .list-group-item:nth-of-type(5)").click(function(){
    $(this).css("background","#f5b509");
    $("#university,#graduation-cap,#school,#user-graduate,#language,#anchor").css("display","none");
    $(".university,.graduation-cap,.school,.user-graduate,.anchor,.language").css("background","#1d94d8");
    $("#torii-gate").css("display","block");
  });

 $(".card-menu>.list-group:first-child .list-group-item:nth-of-type(6)").click(function(){
    $(this).css("background","#f5b509");
    $("#university,#graduation-cap,#school,#user-graduate,#torii-gate,#anchor").css("display","none");
    $(".university,.graduation-cap,.school,.user-graduate,.torii-gate,.anchor").css("background","#1d94d8");
    $("#language").css("display","block");
  });

 $(".card-menu>.list-group:first-child .list-group-item:nth-of-type(7)").click(function(){
    $(this).css("background","#f5b509");
    $("#university,#graduation-cap,#school,#user-graduate,#torii-gate,#language").css("display","none");
    $(".university,.graduation-cap,.school,.user-graduate,.torii-gate,.language").css("background","#1d94d8");
    $("#anchor").css("display","block");
  });
/*End TYPES OF STUDENTS WE CAN HELP*/
/*Start UNIVERSITIES WE WORK WITH*/
$(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) .btn").click(function(){
  $(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) .btn").css("backgroundColor","#fff");
  $(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) .btn").css("color","gray");
  $(this).css("backgroundColor","#f5b509");
  $(this).css("color","#fff");   
});
$(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) #one").click(function(){
  $(".UNIVERSITIES .row:nth-of-type(2) *universities").addClass("d-inline");
  $(".UNIVERSITIES .row:nth-of-type(2)").removeClass("d-none");

  $(".UNIVERSITIES .row:nth-of-type(3)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(4)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(5)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(6)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(7)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(8)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(9)").addClass("d-none");
  
});

$(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) #two").click(function(){
  $(".UNIVERSITIES .row:nth-of-type(3) *universities").addClass("d-inline");
  $(".UNIVERSITIES .row:nth-of-type(3)").removeClass("d-none");

  
  $(".UNIVERSITIES .row:nth-of-type(2)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(4)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(5)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(6)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(7)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(8)").addClass("d-none");
  
});

$(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) #three").click(function(){
  $(".UNIVERSITIES .row:nth-of-type(4) *universities").addClass("d-inline");
  $(".UNIVERSITIES .row:nth-of-type(4)").removeClass("d-none");

  
  $(".UNIVERSITIES .row:nth-of-type(2)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(3)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(5)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(6)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(7)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(8)").addClass("d-none");
  
});
$(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) #four").click(function(){
  $(".UNIVERSITIES .row:nth-of-type(5) *universities").addClass("d-inline");
  $(".UNIVERSITIES .row:nth-of-type(5)").removeClass("d-none");

  
  $(".UNIVERSITIES .row:nth-of-type(2)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(3)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(4)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(6)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(7)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(8)").addClass("d-none");
  
});
$(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) #five").click(function(){
  $(".UNIVERSITIES .row:nth-of-type(6) *universities").addClass("d-inline");
  $(".UNIVERSITIES .row:nth-of-type(6)").removeClass("d-none");

  
  $(".UNIVERSITIES .row:nth-of-type(2)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(3)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(4)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(5)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(7)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(8)").addClass("d-none");
  
});
$(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) #six").click(function(){
  $(".UNIVERSITIES .row:nth-of-type(7) *universities").addClass("d-inline");
  $(".UNIVERSITIES .row:nth-of-type(7)").removeClass("d-none");

  
  $(".UNIVERSITIES .row:nth-of-type(2)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(3)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(4)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(5)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(6)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(8)").addClass("d-none");
  
});
$(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) #seven").click(function(){
  $(".UNIVERSITIES .row:nth-of-type(8) *universities").addClass("d-inline");
  $(".UNIVERSITIES .row:nth-of-type(8)").removeClass("d-none");

  
  $(".UNIVERSITIES .row:nth-of-type(2)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(3)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(4)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(5)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(6)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(7)").addClass("d-none");
  
});
$(".UNIVERSITIES .row:first-of-type div:nth-of-type(2) #eight").click(function(){
  $(".UNIVERSITIES .row:nth-of-type(9) *universities").addClass("d-inline");
  $(".UNIVERSITIES .row:nth-of-type(9)").removeClass("d-none");

  
  $(".UNIVERSITIES .row:nth-of-type(2)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(3)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(4)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(5)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(6)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(7)").addClass("d-none");
  $(".UNIVERSITIES .row:nth-of-type(8)").addClass("d-none");
  
});
/*End UNIVERSITIES WE WORK WITH*/
/*Start YOUR FUTURE EMPLOYMENT*/
$(".IT-btn").click(function(){
    $(".IT").css("display","block");
    $(this).css("backgroundColor","#f5b509");
    $(".Art-btn,.Biotechnology-btn,.Business-btn,.Aerospace-btn").css("backgroundColor","#1d94d8");
    $(".Art,.Biotechnology,.Business,.Aerospace").css("display","none");
  });

  $(".Art-btn").click(function(){
    $(".Art").css("display","block");
    $(this).css("backgroundColor","#f5b509");
    $(".IT-btn,.Biotechnology-btn,.Business-btn,.Aerospace-btn").css("backgroundColor","#1d94d8");
    $(".IT,.Biotechnology,.Business,.Aerospace").css("display","none"); //addClass d-none
  });

  $(".Biotechnology-btn").click(function(){
    $(".Biotechnology").css("display","block");
    $(this).css("backgroundColor","#f5b509");
    $(".IT-btn,.Art-btn,.Business-btn,.Aerospace-btn").css("backgroundColor","#1d94d8");
    $(".IT,.Art,.Business,.Aerospace").css("display","none");
  });

  $(".Business-btn").click(function(){
    $(".Business").css("display","block");
    $(this).css("backgroundColor","#f5b509");
    $(".IT-btn,.Art-btn,.Biotechnology-btn,.Aerospace-btn").css("backgroundColor","#1d94d8");
    $(".IT,.Art,.Biotechnology,.Aerospace").css("display","none");
  });

  $(".Aerospace-btn").click(function(){
    $(".Aerospace").css("display","block");
    $(this).css("backgroundColor","#f5b509");
    $(".IT-btn,.Art-btn,.Biotechnology-btn,.Business-btn").css("backgroundColor","#1d94d8");
    $(".IT,.Art,.Biotechnology,.Business").css("display","none");
  });
/*End YOUR FUTURE EMPLOYMENT*/
/* Start FAQ*/
$(".slide1-FAQ").click(function(){
  $(this).css( 'background','#f1be2f',);
  $(".slide1-FAQ a").css('color','white');
  $(".slide1-toggle").slideToggle(1000);
});
$(".slide2-FAQ").click(function(){
  $(this).css( 'background','#f1be2f',);
  $(".slide2-FAQ a").css('color','white');
  $(".slide2-toggle").slideToggle(1000);
});
$(".slide3-FAQ").click(function(){
  $(this).css( 'background','#f1be2f',);
  $(".slide3-FAQ a").css('color','white');
  $(".slide3-toggle").slideToggle(1000);
});
$(".slide4-FAQ").click(function(){
  $(this).css( 'background','#f1be2f',);
  $(".slide4-FAQ a").css('color','white');
  $(".slide4-toggle").slideToggle(1000);
});
$(".slide5-FAQ").click(function(){
  $(this).css( 'background','#f1be2f',);
  $(".slide5-FAQ a").css('color','white');
  $(".slide5-toggle").slideToggle(1000);
});
$(".slide6-FAQ").click(function(){
  $(this).css( 'background','#f1be2f',);
  $(".slide6-FAQ a").css('color','white');
  $(".slide6-toggle").slideToggle(1000);
});
$(".slide7-FAQ").click(function(){
  $(this).css( 'background','#f1be2f',);
  $(".slide7-FAQ a").css('color','white');
  $(".slide7-toggle").slideToggle(1000);
});
$(".slide8-FAQ").click(function(){
  $(this).css( 'background','#f1be2f',);
  $(".slide8-FAQ a").css('color','white');
  $(".slide8-toggle").slideToggle(1000);
});
/* End FAQ*/
/*Start Contact Us*/
$(".facebook").mouseenter(function(){
    $(this).css({
      backgroundColor:"#fff",
      border:"1px solid #3b5998",
    });
    $(".fa-facebook-f").css("color","#3b5998");
  });
  $(".facebook").mouseleave(function(){
    $(this).css("backgroundColor","#3b5998");
    $(".fa-facebook-f").css("color","#fff");
  });

  $(".twitter").mouseenter(function(){
    $(this).css({
      backgroundColor:"#fff",
      border:"1px solid #00aff0",
    });
    $(".fa-twitter").css("color","#00aff0");
  });
  $(".twitter").mouseleave(function(){
    $(this).css("backgroundColor","#00aff0");
    $(".fa-twitter").css("color","#fff");
  });

  $(".instagram").mouseenter(function(){
    $(this).css({
      backgroundColor:"#fff",
      border:"1px solid #da2c80",
    });
    $(".fa-instagram").css("color","#da2c80");
  });
  $(".instagram").mouseleave(function(){
    $(this).css("backgroundColor","#da2c80");
    $(".fa-instagram").css("color","#fff");
  });
/*End Contact Us*/

});
 
 































































/*---------------------------------------------------Vue.js Code---------------------------------*/
/*Start About us*/
Vue.component('different',{
  props:{
    card:{type:Object,required:true}
  },
  template:`<div class="col-sm-12 col-md-12 col-lg-4 mt-3">
      <div class=" text-center">
        <i :class="card.fas"  style="color: #f1be2f;font-size:70px;"></i>
        <div class="">
          <h5 class="card-title font-weight-bold mt-3">{{card.h5}}</h5>
          <p class="card-text mt-3">{{card.p}}</p>
        </div>
      </div>
    </div>`
});
new Vue({
  el:'#app',
  data:{
    firstDifferent:{
      fas:"fas fa-map-marker-alt",
      h5:"We are based in USA",
      p:"Our headquarters is in Seattle, USA."
    },
    secondDifferent:{
      fas:"fas fa-briefcase",
      h5:"Help you get a job",
      p:"We help college students find work while they study."
    },
    thirdDifferent:{
      fas:"fas fa-times",
      h5:"No English? No problem",
      p:"Don't worry about your English. We find you schools that accept your English level."
    },
  }
});
/*End About us*/
/*Start OUR TEACHERS*/
Vue.component('info',{
  props:{
    person:{type:Object,required:true}
  },
  template:`<div class="col-sm-12 col-md-4 col-lg-3 mt-5 text-center mx-auto our-teacher">
      <div class="card mx-auto" style="width: 270px;">
        <img :src="person.src" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title text-weight-bold text-center">{{person.h5}}</h5>
          <p class="card-text text-center">{{person.p}}</p>
        </div>
    </div>`
});
new Vue({
  el:'#app2',
  data:{
    firstCard:{
      src:"images/andy.jpg",
      h5:"Andy Allred",
      p:"Teacher,Consultant,Owner",
    },
    secondCard:{
      src:'images/teacher-alexa.jpg',
      h5:'Alexa J.',
      p:'Teacher, Essays',
    },
    thirdCard:{
      src:'images/teacher-taunya.jpg',
      h5:'Taunya A.',
      p:'Teacher',
    },
    forthCard:{
      src:'images/rick.jpg',
      h5:'Rick H.',
      p:'TOEFL / IELTS Teacher',
    },
    fifthCard:{
      src:'images/jennifer.jpg',
      h5:'Jennifer J.',
      p:'SAT Teacher, Essays',
    },
    sixCard:{
      src:'images/beth.jpg',
      h5:'Beth R.',
      p:'Admissions Coach, Essays',
    },
    sevenCard:{
      src:'images/armando.jpg',
      h5:'Armando R.',
      p:'Teacher, Admissions Coach',
    },
    eightCard:{
      src:'images/rachel.jpg',
      h5:'Rachel M.',
      p:'Teacher, Admissions Coach',
    },
    nineCard:{
      src:'images/kevin.jpg',
      h5:'Kevin D.',
      p:'English Teacher, Essays.',
    },
    tenCard:{
      src:'images/brian.jpg',
      h5:'Brian A.',
      p:'TOEFL / IELTS Teacher',
    },

  },
});
/* start UNIVERSITIES WE WORK WITH*/
Vue.component('universities',{
  props:{
    universities:{type:Object,required:true},
  },
  template:`
      <div class="col-sm-12 col-md-4 px-2">
        <div class="card mb-4">
            <img :src="universities.src" class="card-img-top">
          <div class="card-body">
              <h6 class="font-weight-bold">{{universities.text1}}<br>{{universities.text2}}<br>{{universities.text3}}
              </h6>
          </div>
        </div>
      </div>
  `,
});
new Vue({
  el:"#app3",
  data:{
    Universities1:{
      src:'images/northwestern (1).jpg',
      text1:'Northwestern University',
      text2:'Tuition $54,567',
      text3:'Application Deadline Jan 1',
    },
    Universities2:{
      src:'images/duke.jpg',
      text1:'Duke University',
      text2:'Tuition $55,960',
      text3:'Application Deadline Jan 3',
    },
    Universities3:{
      src:'images/columbia.jpg',
      text1:'Columbia University',
      text2:'Tuition $59,430 ',
      text3:'Application Deadline Jan 1',
    },
    Universities4:{
      src:'images/nyu.jpg',
      text1:'New York University',
      text2:'Tuition $51,828 ',
      text3:'Application Deadline Jan 1',
    },
    Universities5:{
      src:'images/chicago.jpg',
      text1:'University of Chicago',
      text2:'Tuition $57,006',
      text3:'Application Deadline Jan 1',
    },
    Universities6:{
      src:'images/rice.jpg',
      text1:'Rice University',
      text2:'Tuition $47,350',
      text3:'Application Deadline Jan 1',
    },
    Universities7:{
      src:'images/vanderbilt.jpg',
      text1:'Venderbilt University',
      text2:'Tuition $49,816',
      text3:'Application Deadline Jan 1',
    },
    Universities8:{
      src:'images/princeton.jpg',
      text1:'Princeton',
      text2:'Tuition $47,140',
      text3:'Application Deadline Jan 1',
    },
    Universities9:{
      src:'images/wakeforest.jpg',
      text1:'Wake Forest',
      text2:'Tuition $53,322',
      text3:'Application Deadline Jan 1',
    },
    Universities10:{
      src:'images/uw.jpg',
      text1:'University of Washington',
      text2:'Tuition $36,898',
      text3:'Application Deadline Feb 15',
    },
    Universities11:{
      src:'images/mit.jpg',
      text1:'MIT',
      text2:'Tuition $51,832',
      text3:'Application Deadline Jan 1',
    },
    Universities12:{
      src:'images/harvard.jpg',
      text1:'Harvard University',
      text2:'Tuition $50,420',
      text3:'Application Deadline Jan 1',
    },
    Universities13:{
      src:'images/California Institute of Technology.jpg',
      text1:'California Institute of Technology',
      text2:'Tuition $52,362',
      text3:'Application Deadline Jan 3',
    },
    Universities14:{
      src:'images/brown.jpg',
      text1:'Brown University',
      text2:'Tuition $55,656',
      text3:'Application Deadline Jan 1',
    },
    Universities15:{
      src:'images/cornell.jpg',
      text1:'Cornell University',
      text2:'Tuition $55,188',
      text3:'Application Deadline Jan 2',
    },
    Universities16:{
      src:'images/Dartmouth College.jpg',
      text1:'Dartmouth College',
      text2:'Tuition $55,035',
      text3:'Application Deadline Jan 1',
    },
    Universities17:{
      src:'images/emory.jpg',
      text1:'Emory University',
      text2:'Tuition $51,306',
      text3:'Application Deadline Jan 1',
    },
    Universities18:{
      src:'images/Georgetown University.jpg',
      text1:'Georgetown University',
      text2:'Tuition $54,104',
      text3:'Application Deadline Jan 10',
    },
    Universities19:{
      src:'images/mit (1).jpg',
      text1:'MIT',
      text2:'Tuition $51,832',
      text3:'Application Deadline Jan 1',
    },
    Universities20:{
      src:'images/university of chicago.jpg',
      text1:'University of Chicago',
      text2:'Tuition $57,006',
      text3:'Application Deadline Jan 1',
    },
    Universities21:{
      src:'images/northwestern.jpg',
      text1:'Northwestern University',
      text2:'Tuition $54,567',
      text3:'Application Deadline Jan 1',
    },
    Universities22:{
      src:'images/Rhode Island School of Design.jpg',
      text1:'Rhode Island School of Design',
      text2:'Tuition $50,960',
      text3:'Application Deadline Feb 1',
    },
    Universities23:{
      src:'images/harvard (1).jpg',
      text1:'Harvard University',
      text2:'Tuition $50,420',
      text3:'Application Deadline Jan 1',
    },
    Universities24:{
      src:'images/cooperunion.jpg',
      text1:'The Cooper Union for the Advancement',
      text2:'Tuition $44,550',
      text3:'Application Deadline Jan 7',
    },
    Universities25:{
      src:'images/usc.jpg',
      text1:'University of Southern California',
      text2:'Tuition $56,255',
      text3:'Application Deadline Jan 15',
    },
    Universities26:{
      src:'images/rice (1).jpg',
      text1:'Rice University',
      text2:'Tuition $47,350',
      text3:'Application Deadline Jan 1',
    },
    Universities27:{
      src:'images/pomona.jpg',
      text1:'Pomona College',
      text2:'Tuition $52,780',
      text3:'Application Deadline Jan 1',
    },
    Universities28:{
      src:'images/pennsylvania.jpg',
      text1:'University of Pennsylvania',
      text2:'Tuition $55,584',
      text3:'Application Deadline Jan 5',
    },
    Universities29:{
      src:'images/brown (1).jpg',
      text1:'Brown University',
      text2:'Tuition $55,656',
      text3:'Application Deadline Jan 1',
    },
    Universities30:{
      src:'images/california institute.jpg',
      text1:'California Institute of the Arts',
      text2:'Tuition $48,660',
      text3:'Application Deadline Jan 7',
    },
    Universities31:{
      src:'images/Pratt Institute.jpg',
      text1:'Pratt Institute',
      text2:'Tuition $51,870',
      text3:'Application Deadline Jan 5',
    },
    Universities32:{
      src:'images/tufts.jpg',
      text1:'Tufts University',
      text2:'Tuition $56,382',
      text3:'Application Deadline Jan 1',
    },
    Universities33:{
      src:'images/saic chicago.jpg',
      text1:'School of the Art Institute of Chicago',
      text2:'Tuition $50,160',
      text3:'Application Deadline Jan 15',
    },
    Universities34:{
      src:'images/yale.jpg',
      text1:'Yale University',
      text2:'Tuition $62,170',
      text3:'Application Deadline Feb 28',
    },
    Universities35:{
      src:'images/stanford (1).jpg',
      text1:'Stanford University',
      text2:'Tuition $60,270',
      text3:'Application Deadline Feb 1',
    },
    Universities36:{
      src:'images/harvard (3).jpg',
      text1:'Harvard University',
      text2:'Tuition $62,792',
      text3:'Application Deadline Feb 1',
    },
    Universities37:{
      src:'images/chicago (1).jpg',
      text1:'University of Chicago',
      text2:'Tuition $62,865',
      text3:'Application Deadline Feb 1',
    },
    Universities38:{
      src:'images/columbia (1).jpg',
      text1:'Columbia University',
      text2:'Tuition $67,564',
      text3:'Application Deadline Feb 15',
    },
    Universities35:{
      src:'images/nyu (1).jpg',
      text1:'New York University',
      text2:'Tuition $63,986',
      text3:'Application Deadline Feb 15',
    },
    Universities36:{
      src:'images/pennsylvania (1).jpg',
      text1:'University of Pennsylvania',
      text2:'Tuition $63,364',
      text3:'Application Deadline Mar 1',
    },
    Universities37:{
      src:'images/um-annarbor.jpg',
      text1:'University of Michigan - Ann Arbor',
      text2:'Tuition $60,508',
      text3:'Application Deadline Feb 15',
    },
    Universities38:{
      src:'images/berkeley.jpg',
      text1:'University of California—Berkeley',
      text2:'Tuition $53,315',
      text3:'Application Deadline Feb 1',
    },
    Universities39:{
      src:'images/virgina (1).jpg',
      text1:'University of Virginia',
      text2:'Tuition $61,300',
      text3:'Application Deadline Mar 12',
    },
    Universities40:{
      src:'images/duke (1).jpg',
      text1:'Duke University',
      text2:'Tuition $62,247',
      text3:'Application Deadline Feb 15',
    },
    Universities41:{
      src:'images/nw-pritzker.jpg',
      text1:'Northwestern University (Pritzker)',
      text2:'Tuition $62,084',
      text3:'Application Deadline Feb 15',
    },
    Universities42:{
      src:'images/stanford (2).jpg',
      text1:'Stanford University',
      text2:'Tuition $60,270',
      text3:'Application Deadline Feb 1',
    },
    Universities43:{
      src:'images/harvard (4).jpg',
      text1:'Harvard University',
      text2:'Tuition $62,792',
      text3:'Application Deadline Feb 1',
    },
    Universities44:{
      src:'images/chicago (2).jpg',
      text1:'University of Chicago',
      text2:'Tuition $62,865',
      text3:'Application Deadline Feb 1',
    },
    Universities45:{
      src:'images/columbia (2).jpg',
      text1:'Columbia University',
      text2:'Tuition $67,564',
      text3:'Application Deadline Feb 15',
    },
    Universities46:{
      src:'images/notredame.jpg',
      text1:'University of Notre Dame',
      text2:'Tuition $53,391',
      text3:'Application Deadline Jan 1',
    },
    Universities47:{
      src:'images/indiana.jpg',
      text1:'Indiana University - Bloomington',
      text2:'Tuition $35,456',
      text3:'Application Deadline Rolling',
    },
    Universities48:{
      src:'images/cornell (1).jpg',
      text1:'Cornell University',
      text2:'Tuition $55,188',
      text3:'Application Deadline Jan 2',
    },
    Universities49:{
      src:'images/carnegie.jpg',
      text1:'Carnegie Mellon Universit',
      text2:'Tuition $55,465',
      text3:'Application Deadline Jan 1',
    },
    Universities50:{
      src:'images/ut.jpg',
      text1:'University of Texas',
      text2:'Tuition $37,480',
      text3:'Application Deadline Dec 1',
    },
    Universities51:{
      src:'images/um.jpg',
      text1:'University of Michigan',
      text2:'Tuition $49,350',
      text3:'Application Deadline Feb 1',
    },
    Universities52:{
      src:'images/unc.jpg',
      text1:'University of North Carlolina-Chapel Hill',
      text2:'Tuition $35,169',
      text3:'Application Deadline Jan 15',
    },
    Universities53:{
      src:'images/pennsylvania (2).jpg',
      text1:'University of Pennsylvania',
      text2:'Tuition $55,584',
      text3:'Application Deadline Jan 5',
    },
    Universities54:{
      src:'images/mit (2).jpg',
      text1:'Massachusette Institute of Technology',
      text2:'Tuition $51,832',
      text3:'Application Deadline Jan 1',
    },
    Universities55:{
      src:'images/virgina (2).jpg',
      text1:'University of Virginia',
      text2:'Tuition $48,891',
      text3:'Application Deadline Jan 1',
    },
    Universities56:{
      src:'images/berkeley (1).jpg',
      text1:'University of California - Berkley',
      text2:'Tuition $43,232',
      text3:'Application Deadline Nov 30',
    },
    Universities57:{
      src:'images/cornell (2).jpg',
      text1:'Cornell University',
      text2:'Tuition $55,188',
      text3:'Application Deadline Jan 2',
    },
    Universities58:{
      src:'images/adelphi.jpg',
      text1:'Adelphi University',
      text2:'Tuition $38,660',
      text3:'Application Deadline Rolling',
    },
    Universities59:{
      src:'images/fordham.jpg',
      text1:'Fordham University',
      text2:'Tuition $52,248',
      text3:'Application Deadline Jan 1',
    },
    Universities60:{
      src:'images/nyu (2).jpg',
      text1:'New York University',
      text2:'Tuition $51,828',
      text3:'Application Deadline Jan 1',
    },
    Universities61:{
      src:'images/rutgers.jpg',
      text1:'Rutgers University',
      text2:'Tuition $47,518',
      text3:'Application Deadline Feb 15',
    },
    Universities62:{
      src:'images/stcatherine.jpg',
      text1:'St. Catherine University',
      text2:'Tuition $39,669',
      text3:'Application Deadline Rolling',
    },
    Universities63:{
      src:'images/syracuse.jpg',
      text1:'Syracuse University',
      text2:'Tuition $51,853',
      text3:'Application Deadline Jan 1',
    },
    Universities64:{
      src:'images/ut (1).jpg',
      text1:'University of Texas',
      text2:'Tuition $51,786',
      text3:'Application Deadline Dec 1',
    },
    Universities65:{
      src:'images/berkeley (2).jpg',
      text1:'University of California - Berkley',
      text2:'Tuition $42,184',
      text3:'Application Deadline Nov 30',
    },
    Universities66:{
      src:'images/georgia.jpg',
      text1:'University of Georgia',
      text2:'Tuition $30,404',
      text3:'Application Deadline Jan 1',
    },
    Universities67:{
      src:'images/newhampshire.jpg',
      text1:'University of New Hampshire',
      text2:'Tuition $47,570',
      text3:'Application Deadline Feb 1',
    },
    Universities68:{
      src:'images/stthomas.jpg',
      text1:'University of St. Thomas',
      text2:'Tuition $54,674',
      text3:'Application Deadline Rolling',
    },
    Universities69:{
      src:'images/wisconsin.jpg',
      text1:'University of Wisconsin',
      text2:'Tuition $49,885',
      text3:'Application Deadline Feb 1',
    },
    Universities70:{
      src:'images/yale (1).jpg',
      text1:'Yale University',
      text2:'Tuition $53,430',
      text3:'Application Deadline Jan 1',
    },
    Universities71:{
      src:'images/brown (2).jpg',
      text1:'Brown University',
      text2:'Tuition $55,656',
      text3:'Application Deadline Jan 1',
    },
    Universities72:{
      src:'images/columbia (3).jpg',
      text1:'Columbia University',
      text2:'Tuition $59,430',
      text3:'Application Deadline Jan 1',
    },
    Universities73:{
      src:'images/emory (1).jpg',
      text1:'Emory University',
      text2:'Tuition $51,306',
      text3:'Application Deadline Jan 1',
    },
    Universities74:{
      src:'images/northwestern (2).jpg',
      text1:'Northwestern University',
      text2:'Tuition $54,567',
      text3:'Application Deadline Jan 1',
    },
    Universities75:{
      src:'images/notredame (1).jpg',
      text1:'Notre Dame University',
      text2:'Tuition $53,391',
      text3:'Application Deadline Jan 1',
    },
    Universities76:{
      src:'images/pomona (1).jpg',
      text1:'Pomona College',
      text2:'Tuition $52,780',
      text3:'Application Deadline Jan 1',
    },
    Universities77:{
      src:'images/rice (2).jpg',
      text1:'Rice University',
      text2:'Tuition $47,350',
      text3:'Application Deadline Jan 1',
    },
    Universities78:{
      src:'images/pennsylvania (3).jpg',
      text1:'University of Pennsylvania',
      text2:'Tuition $55,584',
      text3:'Application Deadline Jan 5',
    },
    Universities79:{
      src:'images/usc (1).jpg',
      text1:'University of Southern California',
      text2:'Tuition $56,255',
      text3:'Application Deadline Jan 15',
    },
    Universities80:{
      src:'images/virgina (3).jpg',
      text1:'University of Virginia',
      text2:'Tuition $48,891',
      text3:'Application Deadline Jan 1',
    },
    Universities81:{
      src:'images/washstlouis.jpg',
      text1:'University of Washington-St. Louis',
      text2:'Tuition $53,399',
      text3:'Application Deadline Jan 2',
    },
    Universities82:{
      src:'images/uw.jpg',
      text1:'University of Washington',
      text2:'Tuition $36,898',
      text3:'Application Deadline Feb 15',
    },
    Universities83:{
      src:'images/ucla.jpg',
      text1:'University of California - Los Angeles',
      text2:'Tuition $38,000',
      text3:'Application Deadline Nov 30',
    },
    Universities84:{
      src:'images/usc (2).jpg',
      text1:'University of Southern California',
      text2:'Tuition $56,255',
      text3:'Application Deadline Jan 15',
    },
    Universities85:{
      src:'images/um (1).jpg',
      text1:'University of Michigan',
      text2:'Tuition $49,350',
      text3:'Application Deadline Feb 1',
    },
    Universities86:{
      src:'images/pennsylvania (4).jpg',
      text1:'University of Pennsylvania',
      text2:'Tuition $55,584',
      text3:'Application Deadline Jan 5',
    },
    Universities87:{
      src:'images/unc (1).jpg',
      text1:'University of North Carolina',
      text2:'Tuition $34,938',
      text3:'Application Deadline Jan 15',
    },
    Universities88:{
      src:'images/florida.jpg',
      text1:'University of Florida',
      text2:'Tuition $28,658',
      text3:'Application Deadline Mar 1',
    },
    Universities89:{
      src:'images/tufts (1).jpg',
      text1:'Tufts University',
      text2:'Tuition $56,382',
      text3:'Application Deadline Jan 1',
    },
    Universities90:{
      src:'images/boston.jpg',
      text1:'Boston University',
      text2:'Tuition $53,948',
      text3:'Application Deadline Jan 2',
    },
    Universities91:{
      src:'images/columbia (4).jpg',
      text1:'Columbia University',
      text2:'Tuition $59,430',
      text3:'Application Deadline Jan 1',
    },
    Universities92:{
      src:'images/harvard (5).jpg',
      text1:'Harvard University',
      text2:'Tuition $50,420',
      text3:'Application Deadline Jan 1',
    },
    Universities93:{
      src:'images/nyu (3).jpg',
      text1:'New York University',
      text2:'Tuition $51,828',
      text3:'Application Deadline Jan 1',
    },
  },
});
/* End UNIVERSITIES WE WORK WITH*/





































































