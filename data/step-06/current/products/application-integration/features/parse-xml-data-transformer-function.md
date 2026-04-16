---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.480Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Parse XML data transformer function"
feature_slug: "parse-xml-data-transformer-function"
latest_feature_date: "2023-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference"
  - "https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference"
keywords:
  - "parse"
  - "converts"
  - "input"
  - "transformer"
  - "added"
---

# Parse XML data transformer function

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added a Parse XML data transformer function that converts XML input into a JSON object.

## Extended Definition

Application Integration added a Parse XML data transformer function that converts XML input into a JSON object.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)
- [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference)

## Supporting Pages

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Jsonnet script local f = impor t "functions" ; // Import predefined Data Transformer function library local s tr 1 = f .ex t Var( "inputVar1" ); // Access integration input variable "Inputstr1" with value "Hello" local s tr 2 = f .ex t Var( "inputVar2" ); // Access integration input variable "Inputstr2" with value "World" { Ou t pu t Var : s tr 1 + " " + s tr 2 + "!" , // Write to Jsonnet output variable "OutputVar" "output-str-var" : s tr 1 + " Integration " + s tr 2 + "!" , // Write to Jsonnet output variable "output-str-var" } Output Jsonnet usage reference Jsonnet is a purely functional language and its programs are composed of expressions.
- You can map the newly added constant from the Input section to the field in the Output section.
- The following image shows the sample layout of the Data Transformer Script editor : Access integration variables To read an existing integration variable from the Data Transformer Script editor use the extVar function from the predefined functions library.
- The Data Transformer Script editor provides the following features to enrich your scripting experience: Syntax/code highlighting, indentation, and line numbering for easier code readability and structure recognition.

### "Data Transformer functions \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Recommendation Lean how to add and configure a Data Transformer Script task ( Preview ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Data Transformer functions This page describes the additional set of predefined Jsonnet functions for Data Transformer Script task available in Application Integration.
- Preview — Data Transformer Script task This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Importing the functions library lets you use both the standard Jsonnet functions and the predefined Data Transformer functions.

### "Data Mapping functions \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference)
- Source ID: `site-api-reference`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A mapping function can have one or more input parameters, wherein each parameter can further hold a literal value, a variable, or a base function with mapping functions applied.
- You can use multiple mapping functions for a single input source, forming a mapping transform expression .
- EPOCH TO HUMAN READABLE TIME Converts Unix epoch time (in milliseconds) to human-readable time format.
- FLOOR Computes the greatest integer that is less than or equal to the provided input.

