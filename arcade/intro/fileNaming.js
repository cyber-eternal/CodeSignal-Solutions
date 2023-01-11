const solution = names => {
  const used = {};
  return names.map(name => {
      let newName = name;
      while (used[newName]) {
          newName = `${name}(${used[name]++})`;
      }
      used[newName] = 1;
      return newName;
  });
};