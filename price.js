// first, bring over the elements i will use and store them inside a variable
let width = document.getElementById("width")
let length = document.getElementById("length")
let price = document.getElementById("price")

//this function will calculate the price, by first calculating the dimension
function calculatePrice() {
    //assigning the value, that is inside the dimensions input fields, to a variable
    let widthNum = width.value
    let lengthNum = length.value
    //i used parseFloat method to calculate the dimensions because the user may input a decimal (parseInt === integer && parseFloat === decimal)
    let dimension = parseFloat(widthNum) * parseFloat(lengthNum)
    let result = 11 * (dimension) + 4000
    console.log(dimension)

    if (width.value && length.value) {
        price.value = '$' + result
    } else {
        price.value = ""
    }
}

