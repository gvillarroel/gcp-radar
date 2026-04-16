---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.471Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "XSLT Transform data transformer function"
feature_slug: "xslt-transform-data-transformer-function"
latest_feature_date: "2024-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference"
keywords:
  - "transform"
  - "specified"
  - "xslt"
  - "string"
  - "converts"
  - "transformer"
---

# XSLT Transform data transformer function

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The XSLT Transform function converts an XML string using a specified XSL string in data transformation workflows.

## Extended Definition

The XSLT Transform function converts an XML string using a specified XSL string in data transformation workflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference)

## Supporting Pages

### "Data Transformer functions \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Recommendation Lean how to add and configure a Data Transformer Script task ( Preview ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Data Transformer functions This page describes the additional set of predefined Jsonnet functions for Data Transformer Script task available in Application Integration.
- Preview — Data Transformer Script task This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Importing the functions library lets you use both the standard Jsonnet functions and the predefined Data Transformer functions.

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Jsonnet script local f = impor t "functions" ; // Import predefined Data Transformer function library local s tr 1 = f .ex t Var( "inputVar1" ); // Access integration input variable "Inputstr1" with value "Hello" local s tr 2 = f .ex t Var( "inputVar2" ); // Access integration input variable "Inputstr2" with value "World" { Ou t pu t Var : s tr 1 + " " + s tr 2 + "!" , // Write to Jsonnet output variable "OutputVar" "output-str-var" : s tr 1 + " Integration " + s tr 2 + "!" , // Write to Jsonnet output variable "output-str-var" } Output Jsonnet usage reference Jsonnet is a purely functional language and its programs are composed of expressions.
- The following image shows the sample layout of the Data Transformer Script editor : Access integration variables To read an existing integration variable from the Data Transformer Script editor use the extVar function from the predefined functions library.
- The Data Transformer Script editor provides the following features to enrich your scripting experience: Syntax/code highlighting, indentation, and line numbering for easier code readability and structure recognition.
- Configure the Data Transformer task To add a Data Transformer task to your integration, perform the following steps: In the Google Cloud console, go to the Application Integration page.

### "Data Mapping functions \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CONTAINS Checks the occurrence of the specified value in a given string or string array.
- CONCAT Concatenates the specified characters to an existing string.
- TO LOWERCASE Converts all the characters in a string to lowercase.
- TO UPPERCASE Converts all the characters in a string to uppercase.

