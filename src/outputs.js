export function printOutput({ problem, inputs, outputs, constraints, invariants }) {
  console.log("\n========== PROBLEM DECOMPOSITION ==========\n");

  console.log("PROBLEM:");
  console.log(problem, "\n");

  printSection("INPUTS", inputs);
  printSection("OUTPUTS", outputs);
  printSection("CONSTRAINTS", constraints);
  printSection("INVARIANTS", invariants);

  console.log("==========================================\n");
}

function printSection(title, items) {
  console.log(`${title}:`);
  if (items.length === 0) {
    console.log("- None\n");
    return;
  }

  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });

  console.log("");
}
