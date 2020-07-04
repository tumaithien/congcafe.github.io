// JavaScript Document
var cart;
if(localStorage.getItem('cart')==null)
{
	cart=[];
}
else{
	cart=JSON.parse(localStorage.getItem('cart'));
	
}
console.log(cart);


$(document).ready(function(){
	
	renderCart();
	$(document).on('click','.btn-plus',function(){
		
		var id=$(this).attr('data-id');
		var index=cart.findIndex(function(a){
		return a.id===id;
		
	});
		cart[index].count++;
		localStorage.setItem('cart', JSON.stringify(cart));
		renderCart();
	
});
	$(document).on('click','.btn-minus',function(){
		
		var id=$(this).attr('data-id');
		var index=cart.findIndex(function(a){
		return a.id===id;
		
	});
		cart[index].count--;
		localStorage.setItem('cart', JSON.stringify(cart));
		if(cart[index].count==0)
			{
				cart.splice(index,1);
				localStorage.setItem('cart', JSON.stringify(cart));
			}
		renderCart();
	
});
	$(document).on('click','.addTocart',function(){
		var id=$(this).attr('data-id');
		var index=cart.findIndex(function(a){
			return a.id===id;
		});
		if(index==-1)
		{
			cart.push({id:id, count:1});
			localStorage.setItem('cart', JSON.stringify(cart));
			alert("Thêm vào giỏ hàng thành công");
		}
		else
		{
			cart[index].count++;
			localStorage.setItem('cart', JSON.stringify(cart));
		}
		
		renderCart();
	});
});
function renderCart(){
	var total=0;
	$('#my-cart .cart-items').empty();
	if(cart.length==0)
		{
			$('#my-cart .cart-items').append('<h3>Giỏ hàng trống</h3>');
		}
	else{
	
	for(var i=0; i<cart.length;i++){
		var index=products.findIndex(function(a){
		return a.id===cart[i].id;
		
	})
	
	$('#my-cart .cart-items').append('<div class="row">'+
			'<div class="col-4 col-md-5 my-3">'+
				'<div class="row">'+
				'<div class="col-4 d-none d-md-block">'+
					'<img src="images/'+products[index].picture+'" class="w-100 img-fluid" />'+
				'</div>'+
				'<div class="col-8 pt-3 pt-lg-5 d-none d-md-block">'+
					'<span class="t-main-green f-bold">'+products[index].name+'</span>'+
				'</div></div>'+
				'<img src="images/'+products[index].picture+'" class="img-fluid w-100 d-block d-md-none"/>'+
				
			'</div>'+
			'<div class="col-4 col-md-2 my-3">'+
				'<div class="mt-3 mt-lg-5">'+
					'<span class="t-main-red f-bold">'+products[index].price+' đ</span>'+
				'</div>'+
			'</div>'+
			'<div class="col-4 col-md-2 my-3">'+
				'<div class="mt-3 mt-lg-5">'+
					'<button class="btn-plus" data-id="'+products[index].id+'">+</button><div class="cow">'+cart[i].count+'</div><button class="btn-minus" data-id="'+products[index].id+'">-</button>'+
				'</div></div>'+
			'<div class="col-md-3 my-3 d-none d-md-block">'+
				'<div class="mt-3 mt-lg-5">'+
					'<span class="t-price t-main-red f-bold">'+cart[i].count*products[index].price+' đ</span>'+
				'</div></div></div>')
		total=total+cart[i].count*products[index].price;
	}
		}
	$('#sumtotal').html(total+'đ');
	$('#total-price').html(total+'đ');
}