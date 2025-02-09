export class Player {

  level: number;
  experience: number;

  constructor(level: number, experience: number) {
    this.level = level;
    this.experience = experience;
  }


  newDay(){
    if(this.experience > 100){
      this.resetExperience();
    }
    this.updateExperience();

    if(this.experience < 0){
      this.resetExperience();
    }
    if(this.level < 0){
      this.level = 0
    }

    if(this.experience >= 100 && this.level < 10){
      this.updateLevel();
      this.resetExperience();
    }
  }

  resetExperience(){
      this.experience -= 100;
  }

  updateExperience(){
    this.experience += 10;
  }

  updateLevel(){
    this.level += 1
  }


}
