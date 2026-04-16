---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.581Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Recently accessed resources in BigQuery console"
feature_slug: "recently-accessed-resources-in-bigquery-console"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial"
keywords:
  - "recently"
  - "accessed"
  - "resources"
  - "bigquery"
  - "console"
  - "welcome"
  - "page"
  - "shows"
---

# Recently accessed resources in BigQuery console

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery console Welcome page shows the 10 most recently accessed resources.

## Extended Definition

The BigQuery console Welcome page shows the 10 most recently accessed resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)

## Supporting Pages

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Go to Studio Alternatively, enter the following URL in your browser: https://console.cloud.google.com/bigquery The Studio page opens in your most recently accessed project.
- Go to Overview You can also open the BigQuery Overview page by entering the following URL in your browser: https://console.cloud.google.com/bigquery/overview Review the following sections of the Overview page: The Introduction section: gives you a quick video overview of BigQuery's capabilities.
- Note: To see how to use keyboard shortcuts in Studio, click keyboard BigQuery Studio shortcuts in the BigQuery Studio toolbar: To explore the Studio page, follow these steps: In the Google Cloud console, go to the BigQuery Studio page.
- Explore the Studio page The Studio page BigQuery is the central point for viewing your BigQuery resources and for performing common tasks such as creating datasets and creating and running notebooks.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The access policy details are available in the returned policy object. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const resourceName = "YOUR RESOURCE NAME"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function viewTableOrViewAccessPolicy () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( resourceName ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings if they don't exist if ( ! policy . bindings ) { policy . bindings = []; } // Show policy details. // Find more details for the Policy object here: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Policy console . log ( Access Policy details for table or view ' ${ resourceName } '. ); console . log ( Bindings: ${ JSON . stringify ( policy . bindings , null , 2 ) } ); console . log ( etag: ${ policy . etag } ); console . log ( Version: ${ policy . version } ); } Revoke access to a table or view To revoke access to a table or view, select one of the following options: Console Go to the BigQuery page.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to modify IAM policies for resources: To get a dataset's access policy: bigquery.datasets.get To set a dataset's access policy: bigquery.datasets.update To get a dataset's access policy (Google Cloud console only): bigquery.datasets.getIamPolicy To set a dataset's access policy (console only): bigquery.datasets.setIamPolicy To get a table or view's policy: bigquery.tables.getIamPolicy To set a table or view's policy: bigquery.tables.setIamPolicy To get a routine's access policy: bigquery.routines.getIamPolicy To set a routine's access policy: bigquery.routines.setIamPolicy To create bq tool or SQL BigQuery jobs (optional): bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- More details about the AccessEntry object here: https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.AccessEntry print ( f " { len ( dataset . access entries ) } Access entries found " f "in dataset ' { dataset id } ':" ) for access entry in dataset . access entries : print () print ( f "Role: { access entry . role } " ) print ( f "Special group: { access entry . special group } " ) print ( f "User by Email: { access entry . user by email } " ) Revoke access to a dataset To revoke access to a dataset, select one of the following options: Console Go to the BigQuery page.
- View access controls for a table or view To view the access controls for a table or view, choose one of the following options: Console Go to the BigQuery page.

### "Perform classification with a boosted trees model \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- XGBClassifier ( n estimators = 1 , booster = "gbtree" , tree method = "hist" , max iterations = 1 , # For a more accurate model, try 50 iterations. subsample = 0.85 , ) tree model . fit ( X , y ) tree model . to gbq ( your model id , # For example: "your-project.bqml tutorial.tree model" replace = True , ) Evaluate the model SQL Follow these steps to evaluate the model: In the Google Cloud console, go to the BigQuery page.
- If you prefer to reuse the project, you can delete the dataset you created in this tutorial: If necessary, open the BigQuery page in the Google Cloud console.
- Use the model to predict classifications SQL Follow these steps to forecast data with the model: In the Google Cloud console, go to the BigQuery page.
- Run the query that prepares the sample data: In the Google Cloud console, go to the BigQuery page.

