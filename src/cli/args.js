const parseArgs = () => {
  const args = process.argv.slice(2);

  console.log(`${args[0]} is ${args[1]}, ${args[2]} is ${args[3]}`);
};

parseArgs();
