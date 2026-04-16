---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.477Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "getIntegrationVersionId data transformer function"
feature_slug: "getintegrationversionid-data-transformer-function"
latest_feature_date: "2024-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/quotas"
  - "https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference"
keywords:
  - "getintegrationversionid"
  - "current"
  - "version"
  - "return"
  - "transformer"
  - "available"
---

# getIntegrationVersionId data transformer function

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

A new data transformer function, getIntegrationVersionId(), is now available to return the current integration version ID.

## Extended Definition

A new data transformer function, getIntegrationVersionId(), is now available to return the current integration version ID.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/quotas](https://docs.cloud.google.com/application-integration/docs/quotas)
- [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)

## Supporting Pages

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For details of the available custom functions, see Data Transformer functions .
- Jsonnet script local f = impor t "functions" ; // Import predefined Data Transformer function library local s tr 1 = f .ex t Var( "inputVar1" ); // Access integration input variable "Inputstr1" with value "Hello" local s tr 2 = f .ex t Var( "inputVar2" ); // Access integration input variable "Inputstr2" with value "World" { Ou t pu t Var : s tr 1 + " " + s tr 2 + "!" , // Write to Jsonnet output variable "OutputVar" "output-str-var" : s tr 1 + " Integration " + s tr 2 + "!" , // Write to Jsonnet output variable "output-str-var" } Output Jsonnet usage reference Jsonnet is a purely functional language and its programs are composed of expressions.
- The following image shows the sample layout of the Data Transformer Script editor : Access integration variables To read an existing integration variable from the Data Transformer Script editor use the extVar function from the predefined functions library.
- The Data Transformer Script editor provides the following features to enrich your scripting experience: Syntax/code highlighting, indentation, and line numbering for easier code readability and structure recognition.

### Quotas and limits \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/quotas](https://docs.cloud.google.com/application-integration/docs/quotas)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Quota Value Integration execution Default concurrent executions per project 50 Number of integration execution requests per minute 24000 Integration Connectors See Integration Connectors limits Integration execution logs and monitoring Number of read executions requests per minute 18000 Integrations page (This page lists all the available integrations in your project) Number of read integration requests per minute 12000 Integration editor page (This page loads a whole integration including all the integration versions and configured task entities) Number of read task entity requests per minute 12000 Number of read integration version requests per minute 12000 Number of write integration version requests per minute 12000 Authentication profiles page (This page lists all the available authentication profiles in your project) Number of read requests per minute 12000 Number of write requests per minute 12000 Salesforce trigger Number of read Salesforce channel requests per minute 12000 Number of write Salesforce channel requests per minute 12000 Number of read Salesforce instance requests per minute 12000 Number of write Salesforce instance requests per minute 12000 Request a quota increase To adjust most quotas, use the Google Cloud console.
- It uses caches throughout the system that may take time to clear and refresh 10 minutes Maximum numbers of integrations per project 1000 Maximum number of tasks in an integration If there is a need for more tasks, it is recommended that you split your integration into multiple integrations 100 Maximum versions allowed for an integration 100 Number of days an integration execution can last, including the pause during the approval task 31 days API trigger Maximum characters for TRIGGER NAME in Trigger ID Trigger ID format: api trigger/ TRIGGER NAME 64 characters Apps Script task Maximum active deployments for an Apps Script 50 Queries per second (QPS) for API executables 5000 per minute Queries per second (QPS) for Webapp deployments 5000 per minute Latency for API executables 1.5 seconds Latency for Webapp 2.5 seconds Maximum cumulative size of all the integration variables in an Apps Script 15 MB Call REST Endpoint task Maximum number of concurrent REST calls 100 Maximum size of the request from the REST endpoint 25 MB Maximum size of the response from the REST endpoint 25 MB Call Integration task Maximum number of sub-integrations that can run from the main integration 10000 Connectors task Timeout for Connector task execution 3 minutes Maximum size of the response from the connector 20 MB Execute Custom Query: Maximum timeout 180 seconds Execute Custom Query: Maximum number of rows 50,000 While Loop task and For Each Loop task Maximum cumulative size of data processed 20 MB Maximum number of iterations 8000 Maximum cumulative size of data collected from each sub-integration call 50 MB For Each Parallel task Maximum cumulative size of data processed 20 MB Maximum number of iterations 10000 Maximum number of parallel executions To increase this limit, you must request an increase for the Default concurrent executions per project quota.
- 50 Data Mapping task Maximum size of an array data type variable 100000 elements Maximum size of a JSON data type variable 20 MB Maximum size of a string data type variable 20 MB Data Transformer task Maximum memory available for script evaluation 300 MB JavaScript task Maximum request size for the script 25 MB Send Email task Maximum recipient count for the task 30 Data processing limits We don't recommend using integrations in the following scenarios: Integration requires movement of bulk data or focus on extract, transform, and load (ETL) processes Cumulative size of all the integration data is greater than 10 MB during execution When calculating the cumulative data size, add the size of all types of data such as input variables, output variables, and other intermediate task variables Caution: If the data size exceeds 10 MB, Application Integration runs the integration, but disables local logging .
- Examples of external system calls include, calling external endpoints, calling Salesforce using connectors, and calling Google Cloud functions 2 minutes Timeout for asynchronous (ASYNC) integration executions If your sub-integration takes longer than 2 minutes to run, consider executing your integration in ASYNC mode 10 minutes Maximum time till which an older version of the integration can run after publishing the new version (system consistency) This is because Application Integration is a distributed system that provides eventual consistency .

### "Data Transformer functions \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data Transformer functions This page describes the additional set of predefined Jsonnet functions for Data Transformer Script task available in Application Integration.
- Recommendation Lean how to add and configure a Data Transformer Script task ( Preview ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Functions The following table lists the predefined functions available in Application Integration: Functions Description Array functions Functions that operate on arrays.
- Preview — Data Transformer Script task This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

