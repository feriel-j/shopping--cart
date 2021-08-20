var colorHeartButton = document.getElementsByClassName('like')
console.log(colorHeartButton)
for( var i=0 ; i< colorHeartButton.length; i++) {
     let likeButton = colorHeartButton[i]
     likeButton.addEventListener('click', function()
     {
         if(likeButton.style.color !="red"){
             likeButton.style.color ="red"
         }
         else{
            likeButton.style.color ="black"
         }
     })
}

   

var minusButtonChange = document.getElementsByClassName('minus-btn')
console.log(minusButtonChange)
for( var i=0 ; i < minusButtonChange.length; i++) {
    let minusButton = minusButtonChange[i]
    minusButton.addEventListener('click',function(){
        if ( minusButton.nextElementSibling.value >= 1)
        {
        minusButton.nextElementSibling.value--;
        }
        updatedTotal()
    }) 
}
var plusButtonChange =document.getElementsByClassName('plus-btn')
console.log(plusButtonChange)
for (var i=0; i<plusButtonChange.length; i++) {
    let plusButton = plusButtonChange [i]
    plusButton.addEventListener('click', function(){
        plusButton.previousElementSibling.value ++;
     
     updatedTotal()
    } 
    )
}


var quantityInputs = document.getElementsByClassName('Quant')
for ( var i=0; i< quantityInputs.length; i++) {
    var input = quantityInputs [i]
    input.addEventListener('change', quantityChanged )
}

function quantityChanged (event) {
    var input =event.target
    if(isNaN(input.value)|| input.value <= 0) {
        input.value = 1
    }
    updatedTotal()
}


var removefromcart = document.getElementsByClassName('delete')
console.log(removefromcart)
for( var i =0 ; i < removefromcart.length ; i++) 
{
    var button = removefromcart[i]
    button.addEventListener('click', function(event){
        var buttonclicked = event.target
        buttonclicked.parentElement.remove ()
        updatedTotal()
    })
}
function updatedTotal() 
{
    var cartItemContainer = document.getElementsByClassName('items')[0]
    var cartItems = document.getElementsByClassName('Item')
     var total = 0
    for( var i =0; i< cartItems.length ; i++){
         var cartItem = cartItems [i]
         var priceElement = cartItem.getElementsByClassName('price')[0]
         var quantityElement = cartItem.getElementsByClassName('Quant')[0]
         
         var price = parseFloat (priceElement.innerText)
         var quantity = quantityElement.value
         console.log( price * quantity)
         total = total+( price * quantity)
     }
    document.getElementById('finalPrice').value = total

}
