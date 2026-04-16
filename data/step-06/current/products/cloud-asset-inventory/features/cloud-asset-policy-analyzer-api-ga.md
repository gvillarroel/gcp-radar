---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.747Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Policy Analyzer API GA"
feature_slug: "cloud-asset-policy-analyzer-api-ga"
latest_feature_date: "2020-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-cloud-storage"
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy"
keywords:
  - "reached"
  - "analyzer"
  - "enabling"
  - "analysis"
  - "policy"
---

# Cloud Asset Policy Analyzer API GA

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Policy Analyzer API reached GA, enabling IAM policy analysis for projects, folders, and organizations with results export to BigQuery.

## Extended Definition

Policy Analyzer API reached GA, enabling IAM policy analysis for projects, folders, and organizations with results export to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-cloud-storage)
- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)

## Supporting Pages

### "Write policy analysis to BigQuery \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Policy Analyzer runs your query and exports the results to the specified table. gcloud The AnalyzeIamPolicyLongrunning method allows you to issue an analysis request and get results in the specified BigQuery destination.
- HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID :analyzeIamPolicyLongrunning Request JSON body: { "analysisQuery": { "resourceSelector": { "fullResourceName": " FULL RESOURCE NAME " }, "identitySelector": { "identity": " PRINCIPAL " }, "accessSelector": { "permissions": [ " PERMISSION 1 ", " PERMISSION 2 ", " PERMISSION N " ] } }, "outputConfig": { "bigqueryDestination": { "dataset": " DATASET ", "tablePrefix": " TABLE PREFIX ", "partitionKey": " PARTITION KEY ", "writeDisposition": " WRITE DISPOSITION " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- BQ TABLE PREFIX analysis result WHERE opName = opName AND analysisId = 0 ORDER BY 1 , 2 ; List IAM policy bindings with ACE(Access Control Entry) in one Analysis In this query, we list the IAM policy bindings with their derived ACEs in one analysis DECLARE opName STRING DEFAULT "organizations/ ORG ID /operations/AnalyzeIamPolicyLongrunning/ OP ID " ; SELECT analysisResult . attachedResourceFullName as iam policy attached resource , TO JSON STRING ( analysisResult . iamBinding , true ) as iam policy binding , TO JSON STRING ( analysisResult . identityList . identities , true ) as identities , TO JSON STRING ( acls . accesses , true ) as accesses , TO JSON STRING ( acls . resources , true ) as resources FROM BQ PROJECT ID .
- BQ TABLE PREFIX analysis result , UNNEST ( analysisResult . identityList . identities ) AS ids , UNNEST ( analysisResult . accessControlLists ) AS acls , UNNEST ( acls . accesses ) AS accesses , UNNEST ( acls . resources ) AS resources WHERE opName = opName AND analysisId = 0 ORDER BY 1 , 2 , 3 , 4 ; List ACEs(Access Control Entries) with IAM policy binding in one Analysis In this query, we list both ACE and the IAM policy binding that generates this ACE for one analysis.

### "Write policy analysis to Cloud Storage \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-cloud-storage)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID :analyzeIamPolicyLongrunning Request JSON body: { "analysisQuery": { "resourceSelector": { "fullResourceName": " FULL RESOURCE NAME " }, "identitySelector": { "identity": " PRINCIPAL " }, "accessSelector": { "permissions": [ " PERMISSION 1 ", " PERMISSION 2 ", " PERMISSION N " ] }, "outputConfig": { "gcsDestination": { "uri": " STORAGE OBJECT URI " } } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- You should receive a JSON response similar to the following: { "name": "projects/my-project/operations/AnalyzeIamPolicyLongrunning/1206385342502762515812063858425027606003", "metadata": { "@type": "type.googleapis.com/google.cloud.asset.v1.AnalyzeIamPolicyLongrunningMetadata", "createTime": "2022-04-12T21:31:10.753173929Z" } } View IAM policy analysis results To view your IAM policy analysis results: In the Google Cloud console, go to the Buckets page.
- Analyze policies and export results The AnalyzeIamPolicyLongrunning method allows you to issue an analysis request and get results in the specified Cloud Storage bucket . gcloud Before using any of the command data below, make the following replacements: RESOURCE TYPE : The type of the resource that you want to scope your search to.
- Home Documentation Security Policy Intelligence Guides Send feedback Write policy analysis to Cloud Storage Stay organized with collections Save and categorize content based on your preferences.

### Analyze allow policies \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The following table describes the available options: Option Description analyzeServiceAccountImpersonation If this option is enabled, Policy Analyzer runs additional analysis queries to determine who can impersonate the service accounts that have the specified access to the specified resources.
- Flag Description --analyze-service-account-impersonation If this option is enabled, Policy Analyzer runs additional analysis queries to determine who can impersonate the service accounts that have the specified access to the specified resources.
- Execute the gcloud asset analyze-iam-policy command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud asset analyze-iam-policy -- RESOURCE TYPE = RESOURCE ID \ --full-resource-name = FULL RESOURCE NAME \ --identity = PRINCIPAL Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud asset analyze-iam-policy -- RESOURCE TYPE = RESOURCE ID --full-resource-name = FULL RESOURCE NAME --identity = PRINCIPAL Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud asset analyze-iam-policy -- RESOURCE TYPE = RESOURCE ID ^ --full-resource-name = FULL RESOURCE NAME ^ --identity = PRINCIPAL You receive a YAML response with analysis results.
- HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID :analyzeIamPolicy Request JSON body: { "analysisQuery": { "identitySelector": { "identity": " PRINCIPAL " }, "resourceSelector": { "fullResourceName": " FULL RESOURCE NAME " }, "accessSelector": { "permissions": [ " PERMISSION 1 ", " PERMISSION 2 ", " PERMISSION N " ] }, "conditionContext": { "accessTime": " ACCESS TIME " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

