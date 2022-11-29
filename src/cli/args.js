const parseArgs = () => {
  const args = process.argv.slice(2);
  let arr = [];

  args.map((el, i) => {
    if (i % 2 === 0) {
      arr.push(el.slice(2));
    } else {
      arr.push(el);
    }
  });
  console.log(
    `${arr[0]} is ${arr[1]}, ${arr[2]} is ${args[3]}, ${arr[4]} is ${arr[5]} `
  );
};

parseArgs();
