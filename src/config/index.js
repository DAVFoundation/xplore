const config = {
  default_port: 8545,
<<<<<<< HEAD
  default_url: 'http://localhost'
=======
  max_events_count: 10
>>>>>>> upstream/master
};

export default (key) => {
  if (!(key in config)) {
    throw `The given key "${key}" to config was invalid`;
  } else {
    return config[key];
  }
};
