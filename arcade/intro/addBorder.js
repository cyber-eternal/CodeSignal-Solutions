function addBorder(picture) {
  for(let item of picture){
      picture[picture.indexOf(item)] = `*${item}*`;
  }
  picture.unshift(new Array(picture[0].length).fill('*').join(''));
  picture.push(new Array(picture[0].length).fill('*').join(''));
  return picture;
}