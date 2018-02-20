const config = {
  default_port: 8545,
  max_events_count: 10,
  max_block_count: 3
};

export default (key) => {
  if (!(key in config)) {
    throw `The given key "${key}" to config was invalid`;
  } else {
    return config[key];
  }
};
