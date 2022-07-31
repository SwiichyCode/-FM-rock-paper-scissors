export const normalModeRules = {
  rock: {
    rock: "draw",
    paper: "lose",
    scissors: "win",
  },
  paper: {
    rock: "win",
    paper: "draw",
    scissors: "lose",
  },
  scissors: {
    rock: "lose",
    paper: "win",
    scissors: "draw",
  },
};

export const hardcoreModeRules = {
  rock: {
    rock: "draw",
    paper: "lose",
    scissors: "win",
    lizard: "win",
    spock: "lose",
  },
  paper: {
    rock: "win",
    paper: "draw",
    scissors: "lose",
    lizard: "lose",
    spock: "win",
  },
  scissors: {
    rock: "lose",
    paper: "win",
    scissors: "draw",
    lizard: "win",
    spock: "lose",
  },
  lizard: {
    rock: "lose",
    paper: "win",
    scissors: "lose",
    lizard: "draw",
    spock: "win",
  },
  spock: {
    rock: "win",
    paper: "lose",
    scissors: "win",
    lizard: "lose",
    spock: "draw",
  },
};
