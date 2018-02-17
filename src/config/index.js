const config = {
  default_port: 8545
};

export default (key) => {
  if (!(key in config)) {
    throw `The given key "${key}" to config was invalid`;
  } else {
    return config[key];
  }
};
