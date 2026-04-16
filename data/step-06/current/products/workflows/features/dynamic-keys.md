---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.525Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Dynamic keys"
feature_slug: "dynamic-keys"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions"
  - "https://docs.cloud.google.com/workflows/docs/troubleshooting"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets"
keywords:
  - "structures"
  - "computed"
  - "dynamic"
  - "expressions"
  - "keys"
---

# Dynamic keys

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

Dynamic keys let workflows use computed keys in supported data structures and expressions.

## Extended Definition

Dynamic keys let workflows use computed keys in supported data structures and expressions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions](https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions)
- [https://docs.cloud.google.com/workflows/docs/troubleshooting](https://docs.cloud.google.com/workflows/docs/troubleshooting)
- [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)

## Supporting Pages

### Expressions \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions](https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions)
- Source ID: `site-docs-reference-required-2`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported elements The Workflows syntax supports the following elements in the definition of an expression: [0...9] : numbers "" : strings - (minus sign): indicates negative numbers . (dot): indicates decimal place + : arithmetic addition and string concatenation - : arithmetic subtraction and negation : arithmetic multiplication / : float division % : remainder division // : floor division () : parentheses Logical operators variableName : reference a variable object.field : reference a value in an object object["field"] : reference a value in an object list[index] : reference an index in a list Expression helpers that can: Convert data such as int and string Operate on lists, maps, and strings such as in and keys Conditionally access data inline such as default and if Function expressions Functions such as len() can be used in expressions, and the functions defined in the standard library are all supported (with the exception of blocking calls such as HTTP calls, sys.sleep , and sys.log ).
- All expressions must begin with a $ and be enclosed in curly brackets: ${ EXPRESSION } You can use expressions to: Assign values to variables Form call arguments , including all parameters in the body , header , query , and url sections Call subworkflows Apply conditions Retry values , including max retries and multiplier Return values from a workflow step Important: In YAML, expressions containing colons can cause unexpected behaviour when the colon is interpreted as defining a map.
- For example: YAML - initVariables : assign : - project : ${ sys.get env("GOOGLE CLOUD PROJECT ID") } JSON [ { "initVariables" : { "assign" : [ { "project" : "${ sys.get env(\"GOOGLE CLOUD PROJECT ID\") }" } ] } } ] Multi-line expressions You can extend an expression over multiple lines.
- Expressions are evaluated by the workflow engine and the output is used at the time of execution, such as assigning the result of an expression to a variable or returning the result of an expression.

### "Pause and resume a workflow using callbacks and Google Sheets \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)
- Source ID: `site-docs-root-2`
- Final score: 48
- Re-rank relevance: N/A

### Troubleshoot issues \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/troubleshooting](https://docs.cloud.google.com/workflows/docs/troubleshooting)
- Source ID: `site-docs-reference-required-2`
- Final score: 47
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you try to deploy the following source code, a token recognition error is thrown: - init : assign : - var : key : "special!key" : bar - returnOutput : return : '${"foo" + var.key[special!key]}' To resolve this, use the following code instead to return the output: '${"foo" + var.key["special!key"]}' Multiple expressions in a list Using multiple expressions inside a list like the following iteration range example is not valid YAML: [${rangeStart}, ${rangeEnd}]) You can resolve this issue by doing one of the following: Place the list inside an expression: ${[rangeStart, rangeEnd]} Wrap each expression in single quotes: ['${rangeStart}', '${rangeEnd}'] The result is then a list of two values, as expected.
- If creating a workflow using the Google Cloud console, the workflow can't be visually rendered in the Google Cloud console, and you might receive a warning similar to the following: You can resolve this issue by wrapping the YAML expression in single quotes: Recommended: '${"a: " +string(a)}' Not recommended: ${"a: " +string(a)} Map keys using non-alphanumeric characters When accessing map keys with non-alphanumeric characters (for example, the exclamation point in "special!key": value ), you must wrap the key name in quotes.
- For example: "description" : "must conform to RFC 1123: only lowercase, digits, hyphens, and periods are allowed, must begin and end with letter or digit, and less than 64 characters." To resolve this issue, make sure that your resource name follows the DNS label standard as defined in RFC 1123 , and that when assigning variables, you are concatenating strings and expressions correctly.
- Instead, do the following: YAML - assign vars : assign : - string : "hello" - string : ${string+" "+"world"} JSON [ { "assign vars" : { "assign" : [ { "string" : "hello" }, { "string" : "${string+" "+" world "}" }, ] } } ] Expressions containing colons In YAML, expressions containing colons can cause unexpected behaviour when the colon is interpreted as defining a map.

