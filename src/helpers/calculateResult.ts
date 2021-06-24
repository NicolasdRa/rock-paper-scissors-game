export const calculateResult = (pick: string, housePick: string): string => {
  if (
    (pick === "rock" && housePick === "scissors") ||
    (pick === "scissors" && housePick === "paper") ||
    (pick === "paper" && housePick === "rock")
  ) {
    return "you win";
  } else if (
    (pick === "rock" && housePick === "paper") ||
    (pick === "scissors" && housePick === "rock") ||
    (pick === "paper" && housePick === "scissors")
  ) {
    return "you lose";
  } else {
    return "draw";
  }
};
