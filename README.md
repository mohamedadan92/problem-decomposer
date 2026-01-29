# Problem Decomposer Tool

## Overview

The **Problem Decomposer Tool** is a lightweight CLI / web-based utility designed to enforce *computational thinking before coding*.

Rather than jumping directly to implementation, the tool guides users through a formal decomposition process that transforms an informal problem statement into a structured, language-agnostic specification.

This project is based on a simple premise:

> **Correct software begins with correct problem formulation.**

---

## Motivation

Many software failures are not caused by bugs in code, but by ambiguity in problem definition. Developers often skip the most critical step in the software lifecycle: explicitly defining inputs, outputs, constraints, and invariants.

This tool exists to:

* Prevent premature implementation
* Encourage formal reasoning
* Make assumptions explicit
* Externalise thought processes in a reusable artifact

The result is a clear specification that can be reviewed, tested, versioned, or used as input for further system design.

---

## Core Concept

The tool models problem-solving as a **state-driven reasoning process**.

Users progress through a fixed sequence of stages:

1. Problem statement (immutable)
2. Inputs
3. Outputs
4. Constraints
5. Invariants

Each stage builds on the previous one, enforcing discipline and preventing conceptual shortcuts.

This mirrors how real-world engineering teams operate when writing:

* Technical specifications
* System designs
* API contracts
* Product requirements

---

## What This Tool Is (and Is Not)

### This tool **is**:

* A structured thinking aid
* A formalisation step before coding
* Language- and framework-agnostic
* Focused on correctness and clarity

### This tool **is not**:

* A code generator
* An AI problem solver
* A validator of correctness
* An implementation assistant

The goal is not automation — it is **understanding**.

---

## Decomposition Model

Each problem is decomposed into the following components:

### Problem Statement

A plain-text description of the problem to be solved.
Once entered, this is treated as immutable to preserve reasoning integrity.

### Inputs

All external values or data required to solve the problem.

Examples:

* User inputs
* Files
* Network data
* Environmental parameters

### Outputs

The expected results produced by the system.

Examples:

* Returned values
* Side effects
* Stored data
* External actions

### Constraints

Rules that restrict valid inputs, outputs, or behaviours.

Examples:

* Performance limits
* Resource bounds
* Business rules
* Legal or domain restrictions

### Invariants

Properties that must *always* hold true throughout execution.

Examples:

* Conservation laws
* Data consistency guarantees
* Safety properties
* Logical truths independent of implementation

---

## Design Principles

* **Specification before implementation**
* **Separation of concerns** (reasoning ≠ coding)
* **Immutability where correctness depends on order**
* **Human-readable, machine-processable output**
* **Explicit assumptions**

---

## Output Format

The final output is a structured, implementation-independent artifact (e.g. Markdown or JSON) that can be:

* Reviewed by stakeholders
* Version-controlled
* Converted into tests
* Used as input for system design or AI workflows

Example (simplified):

```
PROBLEM:
<original description>

INPUTS:
- ...

OUTPUTS:
- ...

CONSTRAINTS:
- ...

INVARIANTS:
- ...
```

---

## Why This Matters to Engineers

This project demonstrates:

* An understanding that **coding is not the starting point**
* Ability to model thinking as a computational process
* Familiarity with formal reasoning concepts (constraints, invariants)
* Product-oriented design thinking
* Respect for correctness, clarity, and maintainability

These skills are transferable across:

* Backend systems
* Data engineering
* Distributed systems
* AI-assisted development
* Product engineering roles

---

## Future Extensions (Out of Scope)

Documented but intentionally not implemented:

* Export to formal specification formats
* Automated test case generation
* AI-assisted decomposition (without replacing user reasoning)
* Integration with product requirement documents
* Comparison of multiple decompositions for the same problem

---

## License

MIT

---

## Author

Built as part of a broader effort to master **computational thinking, formal reasoning, and product-oriented software design**.

problem-decomposer/
├─ src/
│  ├─ index.js
│  ├─ prompts.js
│  ├─ decomposer.js
│  └─ output.js
├─ README.md
├─ LICENSE
├─ package.json