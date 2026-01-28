import inquirer from "inquirer";

export async function askProblemStatement() {
  return inquirer.prompt({
    type: "input",
    name: "problem",
    message: "Describe the problem you want to solve:",
  });
}

export async function askList(title) {
  const items = [];

  while (true) {
    const { value } = await inquirer.prompt({
      type: "input",
      name: "value",
      message: `${title} (leave empty to finish):`,
    });

    if (!value) break;
    items.push(value);
  }

  return items;
}
