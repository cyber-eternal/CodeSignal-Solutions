function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (yourLeft+yourRight === friendsLeft+friendsRight && Math.abs(yourLeft-yourRight) === Math.abs(friendsLeft-friendsRight));
}
