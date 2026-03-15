// Login authentication only checks who the user is
// This checks whether the command sent to the system is valid

export const validateCommand = (command) => {

  const commands = ["start", "stop", "pause"];

  if (!commands.includes(command)) {

    throw new Error("Invalid robot command");
  }

  return true;
  
};