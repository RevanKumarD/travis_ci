
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const usrname = process.env.DOCKER_USERNAME;
    console.log(`My name is ${usrname}`); 
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
