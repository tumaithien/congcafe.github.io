// JavaScript Document
var products=[{id:"1", name:"BẠC SỈU", des:"Theo chân những người gốc Hoa đến định cư tại Sài Gòn, Bạc sỉu là cách gọi tắt của Bạc tẩy sỉu phé trong tiếng Quảng Đông, chính là: Ly sữa trắng kèm một chút cà phê.", price: 29000, picture:"suada.jpg"},
{
	id:"2", 
	name:"CARAMEL MACCHIATIO", 
	des:"Vị thơm béo của bọt sữa và sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng, và vị ngọt đậm của sốt caramel.", 
	price: 55000, 
	picture:"hinhgoc.jpg"},
	{
	id:"3", 
	name:"SÔ-CÔ-LA ĐÁ", 
	des:"Cacao nguyên chất hoà cùng sữa tươi béo ngậy. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi.", 
	price: 39000, 
	picture:"socolada.jpg"},
	{
	id:"4", 
	name:" TRÀ MATCHA LATTE", 
	des:"Với màu xanh mát mắt của bột trà Matcha, vị ngọt nhẹ nhàng, pha trộn cùng sữa tươi và lớp foam mềm mịn, Matcha Latte là thức uống yêu thích của tất cả mọi người khi ghé The Coffee House.", 
	price: 45000, 
	picture:"matcha.jpg"},
	{
	id:"5", 
	name:" TRÀ VẢI", 
	des:"Với những trái vải mọng nước và được pha chế phù hợp với khí hậu nhiệt đới sẽ mang cho bạn những cảm giác mát lạnh vào ngày hè nóng nực", 
	price: 44000, 
	picture:"travai.jpg"},
	{
	id:"6", 
	name:" TRÀ ĐÀO", 
	des:"Vị thanh ngọt của đào Hy Lạp, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.", 
	price: 44000, 
	picture:"tradao.jpg"},
	{
	id:"7", 
	name:" TRÀ ĐEN", 
	des:"Trà đen được ủ mới mỗi ngày, giữ nguyên được vị chát mạnh mẽ đặc trưng của lá trà, phủ bên trên là lớp Macchiato homemade bồng bềnh quyến rũ vị phô mai mặn mặn mà béo béo", 
	price: 45000, 
	picture:"traden.jpg"},
	{
	id:"8", 
	name:" CÀ PHÊ ĐEN", 
	des:"Một tách cà phê đen thơm ngào ngạt, phảng phất mùi cacao là món quà tự thưởng tuyệt vời nhất cho những ai mê đắm tinh chất nguyên bản nhất của cà phê. Một tách cà phê trầm lắng, thi vị giữa dòng đời vồn vã.", 
	price: 25000, 
	picture:"denda.jpg"},
	{
	id:"9", 
	name:" TRÀ GẠO RANG", 
	des:"Trà gạo rang, hay còn gọi là Genmaicha, hay Trà xanh gạo lứt có nguồn gốc từ Nhật Bản. Tại The Coffee House, chúng tôi nhấn nhá cho Genmaicha thêm lớp Macchiato để tăng thêm mùi vị cũng như trải nghiệm của chính bạn.", 
	price: 48000, 
	picture:"tragaorang.jpg"}
]
/*---Fancy box---*/
$(document).ready(function() {
	renderIndex();
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	/*Carousel Multi Items*/
		$('#recipeCarousel').carousel({
			interval :5000
		})
		$(' .multi-item-carousel .carousel-item').each(function(){
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
			for (var i=0;i<2;i++) {
				next=next.next();
				if (!next.length) {
					next = $(this).siblings(':first');
				}
				next.children(':first-child').clone().appendTo($(this));
			}
		});
	/*---Search item---*/
	$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
	
	
	$("#myInputa").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myLista li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

	$("#myInputb").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myListb li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
	
	/*---Loading News---*/
	
	$('.btn-load-news').click(function(){
		$('#load-news').css("display","block");
		$('.btn-load-news').css("display","none");
	});
	/*$('.btn-search').click(function(e){
		
		if(e.target.id=='')
			{
				
				$('.search-item').toggle();
			}
		
	});*/
	$(".out-banner a").click(function(event){
		let target = $(this).attr("href");

		  $('html,body').stop().animate({
		    scrollTop: $(target).offset().top
		  }, 1000);
  		event.preventDefault();
	})
	/*---Event Search item---*/
	$('body').click(function(e){
		if($(e.target).attr('class').includes('fa-search'))
			{
				$('.search-item').toggle();
			}else
				{
					if(e.target.id=='myInput'||e.target.id=='myInputa')
					$('.search-item').show();
					else $('.search-item').hide();
				}
	});
	
	
	for(var i=0;i<products.length;i++)
		{
			$('#myList').append('<li class="list-group-item"><div class="row"><div class="col-3"><img src="images/'+products[i].picture+'" class="img-fluid w-100"></div><div class="col-9"><a href="product-details.html?id='+products[i].id+'"'+'class="color-text">'+products[i].name+'</a></div></div></li>')
			$('#myLista').append('<li class="list-group-item"><div class="row"><div class="col-3"><img src="images/'+products[i].picture+'" class="img-fluid w-100"></div><div class="col-9"><a href="product-details.html?id='+products[i].id+'"'+'class="color-text">'+products[i].name+'</a></div></div></li>')
		}
	
	

});

/*---Zoom image in carousel---*/
function loadimg(stt)
{
	var anh = document.getElementById('big-img');
	anh.src="images/bg-shop-"+stt+".jpg";
}

function renderIndex(){
	for(var i=0; i<products.length;i++){
		$('#menu .list-menu').append('<div class="col-6 col-md-4 mt-4" style="z-index:100">'+
			'<div class="img-hover">'+
				'<img src="images/'+products[i].picture+'" class="pb-4 img-fluid w-100 image" />'+
				'<div class="middle">'+
				'<i class="fa fa-plus fa-2x addTocart" data-id="'+products[i].id+'"></i>'+
				'</div>'+
			'</div>'+		 
			'<h5 class="f-bold color-main-green pb-4">'+products[i].name+'</h5>'+
			'<span class="color-price pb-4">'+products[i].price+' đ</span><br><br>'+
			'<a href="cart.html" class="buy mr-2 addTocart" data-id="'+products[i].id+'">MUA NGAY</a>'+
			'<a href="product-details.html?id='+products[i].id+'" class="details">TÌM HIỂU THÊM</a>'+
		'</div>')
	}
}
