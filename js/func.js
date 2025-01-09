$(function(){

    //Funçao para sistema de pequisa da pagina vendas

var currentValue = 0;
var isDrag = false;
var precoMax = 70000;
var precoAtual = 0;



$('.pointer-barra').mousedown(function(){
    isDrag = true;
})

$(document).mouseup(function(){
    enableTextSelection
    isDrag = false;
})

$('.barra-preco').mousemove(function(e){
    if(isDrag){
        disableTextSelection
        var elBase = $(this);
        var mouseX = e.pageX - elBase.offset().left;
        if(mouseX < 0){
            mouseX = 0;
        }if(mouseX > elBase.width()){
            mouseX = elBase.width();
        };

        $('.pointer-barra').css('left',mouseX - 13+'px')
            currentValue = (mouseX / elBase.width())*100;
        $('.barra-preco-fill').css('width',currentValue+'%');
        
        precoAtual = currentValue/100 * precoMax;
        precoAtual = formatarPreco(precoAtual);
        $('.preco_pesquisa').html('R$'+precoAtual);
        
    }
})

function formatarPreco(precoAtual){
    precoAtual = precoAtual.toFixed(2);
    preco_arr = precoAtual.split('.');

    var novoPreco = formatarTotal(preco_arr);

    return novoPreco;
}

function formatarTotal(preco_arr){
    
    if(preco_arr[0] < 1000){
        return preco_arr[0]+','+preco_arr[1];
    }else if(preco_arr[0] < 10000){
        return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+','+preco_arr[1];
    }else{
        return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+','+preco_arr[1];
    }
}



function disableTextSelection(){
    $( "body").css('-webkit-user-select','none')
    $( "body").css('-moz-user-select','none')
    $( "body").css('-ms-user-select','none')
    $( "body").css('-o-user-select','none')
    $( "body").css('user-select','none')
}

function enableTextSelection(){
    $( "body").css('-webkit-user-select','auto')
    $( "body").css('-moz-user-select','auto')
    $( "body").css('-ms-user-select','auto')
    $( "body").css('-o-user-select','auto')
    $( "body").css('user-select','auto')
}


//funçao para galeria da pagina veiculo teste


var imgShow = 3;
var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
var curIndex = 0;

initSlider();
navigateSlider();
clickSlider();

function initSlider(){
    var amt = $('.mini-img-wraper').length* 33.3;
    var elScroll = $('.nav-galeria-wraper');
    var elSingle = $('.mini-img-wraper');

    elScroll.css('width',amt+'%');
    elSingle.css('width',33.3*(100/amt)+'%');
    
}

function navigateSlider(){
    $('.arrow-right-nav').click(function(){
        if(curIndex < maxIndex){
            curIndex++;
            var elOff =$('.mini-img-wraper').eq(curIndex*3).offset().left -$('.nav-galeria-wraper').offset().left;
            $('.nav-galeria').animate({'scrollLeft':elOff+'px'})
        }else{
            
        }
    });

    $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff =$('.mini-img-wraper').eq(curIndex*3).offset().left -$('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'})
            }else{
                
            }
    })
}

function clickSlider(){
    $('.mini-img-wraper').click(function(){
        $('.mini-img-wraper').css('background-color','transparent');
        $(this).css('background-color','rgb(210,210,210');
        var img = $(this).children().css('background-image');
        $('.foto-destaque').css('background-image',img);
    })

    $(".mini-img-wraper").eq(0).click();
}




//clicar e mover para div contatos

$('[goto=contato]').click(function(){
    
    $('html,body').animate({'scrollTop':$('#contato').offset().top});
    return false ;
})


})