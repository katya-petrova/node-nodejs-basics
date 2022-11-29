const parseEnv = () => {
  let firstVal = `RSS_${process.env.RSS_foo}`;
  //   let secondVal = `RSS_${process.env.name2}`
  console.log(firstVal);
};

parseEnv();
