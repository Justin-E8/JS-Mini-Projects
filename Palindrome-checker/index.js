function checkPalindrome(word){
    let left = 0;
    let right = word.length-1;
    while (left<right){
        if (word[left] != word[right]){
            return "Not today!";
        }
        left++;
        right--;
    }
    return "P A L I N D R O M E";
    
}
function check(){
    const value = input.value
    alert(checkPalindrome(value));
    input.value = "";
}
const input = document.getElementById("input");

