const config = {
  default_port: 8545,
  default_url: 'http://localhost',
  max_events_count: 10,
};

export default key => {
  if (!(key in config)) {
    throw `The given key "${key}" to config was invalid`;
  } else {
    return config[key];
  }
};
