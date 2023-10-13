const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	let ans = 0;
	for(let i=0; i<library.length; i++){
		let lib = library[i];
		if(lib.readingStatus === true) ans++;
	}
	return ans;

	
};

// Do not change the code below

// alert(numberOfBooksRead());
