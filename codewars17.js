function anagrams(word, words) {
 word = word.split('').sort().join('');
 return  words.filter(el => word == el.split('').sort().join(''))

}
anagrams('abba',['bbaa','cbba'])