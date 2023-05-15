// The operating system (os) is a core module in javascript that allows you to interact with your operating system.
// It provides you with many functions to view your systems informaton

const os = require("os"); // Load os module

// .arch() will give you the architecture of the cpu as 'x64' or 'arm'
console.log("Architecture: ", os.arch());

// .cpus() will give you an array of objects with information about the according cpu core
// .cpus().length will give you the number of available cpu cores on your system
console.log("CPUs: ", os.cpus().length);

// We can get more information about the cpu by utilizing these cpu core objects

const cpus = os.cpus();

cpus.forEach((cpu, index) => {
  // .model is the cpu property that shows the model, .speed shows the cpu core speed in mhz
  console.log(`CPU CORE ${index}: ${cpu.model} @ ${cpu.speed} MHz`);
  // .times.user indicates how much time the cpu has spent executing user processes
  console.log(`  User mode: ${cpu.times.user}`);
  // .times.sys indicates how much time has spent executing kernel processes
  console.log(`  System mode: ${cpu.times.sys}`);
  // .times.idle indicates how much time the core has spent in idle state
  console.log(`  Idle time: ${cpu.times.idle}`);
  // .times.total indicates how much time the core has been processing since boot
  console.log(`  Total time: ${cpu.times.total}`);
});

// .freemem() will give you the amount of free memory available on the system
console.log("Free memory: ", os.freemem());

// .homedir() gives you the pathway to your home directory
console.log("Home directory: ", os.homedir());

// .hostname() will give you the registered hostname of current pc
console.log("Hostname: ", os.hostname());

// .loadavg() will give you the load averages for the last 1, 5 and 15 minutes, if your computer isnt experiencing much load it will show averages of 0
console.log("Load averages: ", os.loadavg());

// .networkInterfaces() will give you information about the network interfaces on the system
console.log("Network interfaces: ", os.networkInterfaces());

// .platform() will give you information such as 'win32' , 'win64' for windows or 'darwin' for macOS
console.log("Platform: ", os.platform());

// .release() will give you the release version of the current operating system
console.log("Release: ", os.release());

// .tmpdir() will give you the temporary directory pathway
console.log("Temporary directory: ", os.tmpdir());

// .totalmem() will give you the systems total memory
console.log("Total memory: ", os.totalmem());

// .type() will give you the system name such as 'Linus' or 'Windows_NT'
console.log("Type: ", os.type());

// .uptime() will give you the systems current uptime
console.log("Uptime: ", os.uptime());
