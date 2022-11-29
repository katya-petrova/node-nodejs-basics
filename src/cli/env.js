const parseEnv = () => {
  let firstVal = process.env.RSS_foo;
  let secondVal = process.env.RSS_bar;
  console.log(`RSS_foo=${firstVal}; RSS_bar=${secondVal}`);
};

parseEnv();
