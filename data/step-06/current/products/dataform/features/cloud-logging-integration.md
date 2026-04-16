---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.752Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Cloud Logging integration"
feature_slug: "cloud-logging-integration"
latest_feature_date: "2023-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/overview"
  - "https://docs.cloud.google.com/dataform/docs/cmek"
  - "https://docs.cloud.google.com/dataform/docs/javascript-in-dataform"
  - "https://docs.cloud.google.com/dataform/docs/monitor-runs"
keywords:
  - "logging"
  - "integration"
  - "makes"
  - "dataform"
  - "logs"
  - "available"
  - "in"
---

# Cloud Logging integration

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging integration makes Dataform logs available in Cloud Logging.

## Extended Definition

Cloud Logging integration makes Dataform logs available in Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- [https://docs.cloud.google.com/dataform/docs/monitor-runs](https://docs.cloud.google.com/dataform/docs/monitor-runs)

## Supporting Pages

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- To debug errors, you can monitor runs in the following ways: View detailed Dataform execution logs View audit logs for Dataform View Cloud Logging logs for Dataform Dataform core Dataform core is an open source meta-language to create SQL tables and workflows.
- Dataform offers a web environment for the following activities: Workflow development Connection with GitHub, GitLab, Azure DevOps Services, and Bitbucket Continuous integration and continuous deployment Workflow execution The following sections describe the main features of Dataform.
- Dataform lets you manage data transformation in the Extraction, Loading, and Transformation (ELT) process for data integration.
- The following code sample shows you how to reference a table in a SQLX file with the ref function. config { type : "table" } SELECT order date AS date , order id AS order id , order status AS order status , SUM ( item count ) AS item count , SUM ( amount ) AS revenue FROM ${ ref ( "store clean" ) } GROUP BY 1 , 2 , 3 The output is similar to the following: CREATE OR REPLACE TABLE Dataform . orders AS SELECT order date AS date , order id AS order id , order status AS order status , SUM ( item count ) AS item count , SUM ( amount ) AS revenue FROM Dataform stg . store clean GROUP BY 1 , 2 , 3 For more information on additional dependency management, for example, executing code conditionally, using other Dataform core built-in functions, see the Dataform core reference .

### Use customer-managed encryption keys \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- This integration lets you specify the following encryption compliance requirements for Dataform repositories in your organization: Require CMEKs for all new Dataform repositories Restrict Cloud KMS keys for a Dataform project Considerations when applying organization policies Before applying any CMEK organization policies, you should be aware of the following.
- How an unavailable key status is handled In rare scenarios, such as during periods when Cloud KMS is unavailable, Dataform might be unable to retrieve the status of your key from Cloud KMS.
- Logging You can audit the requests that Dataform sends to Cloud KMS on your behalf in Cloud Logging, if you have enabled audit logging for the Cloud KMS API in your project.
- Click Save to apply the role to the service account. gcloud You can use the Google Cloud CLI to assign the role: gcloud kms keys add-iam-policy-binding \ --project= KMS PROJECT ID \ --member serviceAccount: SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location= KMS KEY LOCATION \ --keyring= KMS KEY RING \ KMS KEY Replace the following: KMS PROJECT ID : the ID of your Google Cloud project that is running Cloud KMS SERVICE AGENT : the email address of your default Dataform service agent KMS KEY LOCATION : the location name of your Cloud KMS key KMS KEY RING : the key ring name of your Cloud KMS key KMS KEY : the key name of your Cloud KMS key Apply a CMEK organization policy Dataform is integrated with two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Cloud KMS keys are used for CMEK protection.

### Use JavaScript in Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- Source ID: `site-docs-root-2`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create your own custom package in Dataform or use one of the open-source Dataform packages, available on the GitHub open-source Dataform page .
- The following code sample shows the includes/script builder.js file with the renderScript JavaScript function that aggregates metrics by using SUM and groups them by dimension: function renderScript ( table , dimensions , metrics ) { return SELECT ${ dimensions . map (( field ) = > ${ field } AS ${ field } ). join ( ",\\n" ) } , ${ metrics . map (( field ) = > SUM( ${ field } ) AS ${ field } ). join ( ",\\n" ) } FROM ${ table } GROUP BY ${ dimensions . map (( field , i ) = > ${ i + 1 } ). join ( ", " ) } ; } module . exports = { renderScript }; The following code sample shows the renderScript JavaScript function used in the definitions/stats per country and device.sqlx file with the Dataform core ref function passed as an argument: $ { script builder . renderScript ( ref ( "source table" ), [ "country" , "device type" ], [ "revenue" , "pageviews" , "sessions" ])} The following code sample shows the definitions/stats per country and device.sqlx query compiled to SQL: SELECT country AS country, device type AS device type, SUM(revenue) AS revenue, SUM(pageviews) AS pageviews, SUM(sessions) AS sessions FROM my schema.source table GROUP BY 1, 2 For more information about the Dataform core ref function, see Dataform core .
- The function generates a SQL script: function renderScript ( table , dimensions , metrics ) { return select ${ dimensions . map ( field = > ${ field } as ${ field } ). join ( "," ) } , ${ metrics . map ( field = > sum( ${ field } ) as ${ field } ). join ( ",\n" ) } from ${ table } group by ${ dimensions . map (( field , i ) = > ${ i + 1 } ). join ( ", " ) } ; } module . exports = { renderScript }; The following code sample shows the use of the custom renderScript JavaScript function in a Dataform core table definition query: config { type: "table", tags: ["advanced", "hourly"], disabled: true } ${functions.renderScript(ref("source table"), ["country", "device type"], ["revenue", "pageviews", "sessions"] )} The following code sample shows the previous Dataform core table definition query compiled into SQL: select country as country, device type as device type, sum(revenue) as revenue, sum(pageviews) as pageviews, sum(sessions) as sessions from "dataform"."source table" group by 1, 2 Reference an include in a SQLX file You can reference any include function or constant inside a SQLX file.
- The following JavaScript code sample lets you create a view of each table where the value of the user id field does not correspond to one of the values in the blocked user ids list: const tableNames = [ "user events" , "user settings" , "user logs" ]; tableNames . forEach ( tableName = > { publish ( tableName + " blocked removed" ). query ( ctx = > SELECT FROM ${ ctx . ref ( tableName ) } WHERE user id NOT IN ( SELECT user id FROM ${ ctx . ref ( "blocked user ids" ) } ) ); }); This code sample creates three views named user events blocked removed , user settings blocked removed , and user logs blocked removed that don't contain any of the blocked user IDs.

### Monitor runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/monitor-runs](https://docs.cloud.google.com/dataform/docs/monitor-runs)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Log format Dataform sends workflow invocation log messages in the following format: { "insertId" : "14ip1tza5" , "jsonPayload" : { "terminalState" : "SUCCEEDED" , "workflowInvocationId" : "1678383230-ac4ed48c-eb70-4555-b2b0-cda54d13edfa" , "@type" : "type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry" }, "resource" : { "type" : "dataform.googleapis.com/Repository" , "labels" : { "repository id" : "repository-name-example" , "resource container" : " PROJECT ID " , "location" : "us-central1" } }, "timestamp" : "2023-03-09T17:34:06.965981805Z" , "severity" : "INFO" , "logName" : "projects/project-name-example/logs/dataform.googleapis.com%2Fworkflow invocation completion" , "receiveTimestamp" : "2023-03-09T17:34:07.362371980Z" } What is logged Dataform log entries contain information that is useful for monitoring and debugging your workflow invocations.
- Go to Logs Explorer In the Query pane, select Show query and enter the following query: resource.type="dataform.googleapis.com/Repository" jsonPayload.@type="type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry" jsonPayload.terminalState="FAILED" This query alerts you of all failed Dataform workflow invocations.
- To configure log-based alerts for failed Dataform workflow invocations, follow these steps: In the Google Cloud console, select Logging , and then select Logs Explorer .
- You can use Monitoring to observe trends in Logging logs for Dataform workflow invocations and to notify you when conditions that you describe occur.

