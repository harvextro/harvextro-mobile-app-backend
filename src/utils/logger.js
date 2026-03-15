// This helps you track system activity

export const logEvent = (message) => {

  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${message}`);

};