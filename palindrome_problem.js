function checkPalindrome(word){
    let low = 0;
    let hi = word.length - 1;
    isPalindrome = true;

    while(low < hi){
        if(word[low] != word[hi]){
            isPalindrome = false;
            break;
        }
        low++;
        hi--;
    }

    if(isPalindrome){
        console.log(word + " is a palindrome");
    }
    else{
        console.log(word + " is not a palindrome");
    }

}

checkPalindrome("nitin")