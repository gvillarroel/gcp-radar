---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.528Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Iteration over sequences and collections"
feature_slug: "iteration-over-sequences-and-collections"
latest_feature_date: "2021-09-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/overview"
  - "https://docs.cloud.google.com/workflows/docs/controlling-execution-order"
  - "https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview"
keywords:
  - "collections"
  - "sequences"
  - "iterating"
  - "numbers"
  - "over"
  - "iteration"
  - "supports"
---

# Iteration over sequences and collections

Product: Workflows
Coverage: LOW

## Step 02 Summary

Workflows supports iterating over sequences of numbers and collections of data.

## Extended Definition

Workflows supports iterating over sequences of numbers and collections of data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- [https://docs.cloud.google.com/workflows/docs/controlling-execution-order](https://docs.cloud.google.com/workflows/docs/controlling-execution-order)
- [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)

## Supporting Pages

### Workflows overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/overview](https://docs.cloud.google.com/workflows/docs/overview)
- Source ID: `site-docs-root`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Iteration You can use a for loop to iterate over a sequence of numbers or through a collection of data, such as a list or map.
- Home Documentation Application development Workflows Guides Send feedback Workflows overview Stay organized with collections Save and categorize content based on your preferences.
- For example: Track an order from request to fulfillment Automate resource requests with approvals IT process automation Managed execution of service operations —Easily script sequences of Google Cloud service operations.
- The following diagram shows an example of using Workflows to orchestrate services: Key use cases Workflows supports many use cases.

### Standard library overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- Source ID: `site-api-reference-required-2`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Workflows Reference Send feedback Standard library overview Stay organized with collections Save and categorize content based on your preferences.
- You can use sys.now to generate multiple random numbers. (The function returns a floating point number with nanosecond precision.) If you need only one number, use sys.get env to retrieve the workflow's execution identifier.
- Functions abs Returns the absolute value of a number. floor Returns the floor of a number. max Returns the maximum of two numbers. min Returns the minimum of two numbers.
- Generate random identifiers or numbers You can use uuid.generate to return a random 128‑bit universally unique identifier (UUID) in string form.

### "Control the order of execution in a workflow \_|\_ Workflows \_|\_ Google\

- URL: [https://docs.cloud.google.com/workflows/docs/controlling-execution-order](https://docs.cloud.google.com/workflows/docs/controlling-execution-order)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Use for loops to iterate You can use for loops to iterate over a sequence of numbers or through a collection of data, such as a list or map.
- The workflow doesn't execute the step friday because the conditional jump skips over it, and the workflow doesn't execute the step workWeek because return stops the execution of the workflow at the end of the weekend step.
- Home Documentation Application development Workflows Guides Send feedback Control the order of execution in a workflow Stay organized with collections Save and categorize content based on your preferences.
- If you have a specific range of numeric values to iterate through, you can use range-based iteration.

