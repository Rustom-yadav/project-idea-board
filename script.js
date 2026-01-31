
const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" }
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  unpin(projectIdea) {
    const index = this.ideas.indexOf(projectIdea);
    if (index !== -1) {
      this.ideas.splice(index, 1);
    }
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach((idea) => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return result;
  }
}

const techBoard = new ProjectIdeaBoard("Tech Board");
console.log(techBoard);
console.log(techBoard.formatToString());

const ai = new ProjectIdea("AI Tutor", "An app that teaches students using AI.");
console.log(ai);
console.log(ai.status);

techBoard.pin(ai);
console.log(techBoard.formatToString());

const robot = new ProjectIdea("Robot Chef", "A robot that cooks breakfast.");
techBoard.pin(robot);
ai.updateProjectStatus(projectStatus.SUCCESS);
console.log(techBoard.formatToString());

robot.updateProjectStatus(projectStatus.FAILURE);
console.log(techBoard.formatToString());

techBoard.unpin(ai);
console.log(techBoard.formatToString());
