let tests = [
  {
    "input": "https://cdn.shopify.com/e.jpg?v=15",
    "output": "https://cdn.shopify.com/e_100x.jpg?v=15",
    "size": "100x"
  },
  {
    "input": "https://cdn.shopify.com/e_100x200.jpg?v=15",
    "output": "https://cdn.shopify.com/e_x200.jpg?v=15",
    "size": "x200"
  },
  {
    "input": "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
    "output": "https://cdn.shopify.com/e-jpg_100x.jpg?v=15",
    "size": "100x"
  },
  {
    "input": "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
    "output": "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_x100.jpg?v=15",
    "size": "x100"
  },
  {
    "input": "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
    "output": "https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15",
    "size": "100x200"
  }
]

let replaceSize = function (inputUrl, size) {
  // regex check if string end with kind of pattern : _100x100, _x100, _100x
  const pattern = /[_]\d+x\d+$|[_]x+\d+$|[_]\d+x+$/;
  const subStr = ".jpg?v=15";
  // slice image type from url, split size pattern with regex, add new size and image type again
  return inputUrl.slice(0, inputUrl.indexOf(subStr)).split(pattern).join('').concat(`_${size}`).concat(subStr)

}

console.log(replaceSize("https://cdn.shopify.com/e.jpg?v=15", "100x"));
console.log(replaceSize("https://cdn.shopify.com/e_100x200.jpg?v=15", "x200"));
console.log(replaceSize("https://cdn.shopify.com/e-jpg_200x100.jpg?v=15", "100x"));
console.log(replaceSize("https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15", "x100"));
console.log(replaceSize("https://cdn.shopify.com/e-800x600-jpg.jpg?v=15", "100x200"));
