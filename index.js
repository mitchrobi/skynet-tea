class SkynetTea {
    constructor(teaType, brewingTimeSeconds) {
      this.teaType = teaType;
      this.brewingTimeSeconds = brewingTimeSeconds;
      this.isBrewing = false;
    }
  
    startBrewing() {
      if (!this.isBrewing) {
        console.log(`Skynet-Tea is brewing your ${this.teaType}. Please wait for ${this.brewingTimeSeconds} seconds.`);
        this.isBrewing = true;
  
        setTimeout(() => {
          console.log(`Your Skynet-Tea ${this.teaType} is ready! Enjoy.`);
          this.isBrewing = false;
        }, this.brewingTimeSeconds * 1000);
      } else {
        console.log('Skynet-Tea is already brewing. Please wait for it to finish.');
      }
    }
  
    displayTeaInfo() {
      console.log(`
        Skynet-Tea Information:
        Tea Type: ${this.teaType}
        Brewing Time: ${this.brewingTimeSeconds} seconds
        Brewing Status: ${this.isBrewing ? 'In Progress' : 'Not Brewing'}
      `);
    }
  }
  
  // Example usage
  const skynetEarlGrey = new SkynetTea('Earl Grey', 30);
  
  skynetEarlGrey.displayTeaInfo();
  skynetEarlGrey.startBrewing();
  