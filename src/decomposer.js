import { askProblemStatement, askList } from "./prompts.js";
import { printOutput } from "./outputs.js";

export async function runDecomposer() {
  const { problem } = await askProblemStatement();

  console.log("\n--- Define Inputs ---");
  const inputs = await askList("Input");

  console.log("\n--- Define Outputs ---");
  const outputs = await askList("Output");

  console.log("\n--- Define Constraints ---");
  const constraints = await askList("Constraint");

  console.log("\n--- Define Invariants ---");
  const invariants = await askList("Invariant");

  const decomposition = {
    problem,
    inputs,
    outputs,
    constraints,
    invariants,
  };

  printOutput(decomposition);
}
