$(function() {	
  	createList();
	btnBehaviour();
  //говнокод генерации списка
  function createList() {
  	var $randomNum = Math.floor(6 + Math.random() * 12),
    		$nestedItemNum = Math.floor(3 + Math.random() * 4),
    		$ul = "<ul class='container'></ul>",
        $ulNested = "<li class='nest'><ul class='container'></ul></li>",
        $li = "<li class='node'>Item</li>",
        $liNested = "<li class='nested'>Nested Item</li>";
    
    $('#tree').append($ul);
    
    for (var i = 0; i < $randomNum; i++) {
    	$('.container').append($li);
    }    
    
    if($randomNum % 2) {
    	$('.node:nth-child(even)').after(($ulNested));
      for(i = 0; i < $nestedItemNum; i++) {     	
        $('.nest > .container').append($liNested);
      }
    } else {    
    	$('.node:nth-child(3)').after(($ulNested));
      for(i = 0; i < $nestedItemNum; i++) {     
      	
        $('.nest > .container').append($liNested);
      }
    }    
  }
  
  //добавляем класс active элементу списка по клику
  $('.container li').click(function(event) {  
  	event.stopPropagation();
    $('.active').removeClass('active');
  	$(this).addClass('active');   
  });
  
  //поведение кнопок
  function btnBehaviour() {
    $('#parent').click(function() {
    	var $parent = $('.active').parent();
      $('.active').removeClass('active');
      $parent.addClass('active'); 
    });

    $('#prevSibling').click(function() {  
      var $curr = $('.active');    
        $curr = $curr.prev();
        $('.active').removeClass('active');
        $curr.addClass('active');   
    });
    
    $('#nextSibling').click(function() {  
      var $curr = $('.active');    
        $curr = $curr.next();
        $('.active').removeClass('active');
        $curr.addClass('active');   
    });
    
    $('#firstChild').click(function() {
    	var $fChild = $('.active').children('.container').children('li:first-child');
      $('.active').removeClass('active');
      $fChild.addClass('active');
    });
    
    $('#lastChild').click(function() {
    	var $lChild = $('.active').children('.container').children('li:last-child');
      $('.active').removeClass('active');
      $lChild.addClass('active');
    });
    
  }
  
});