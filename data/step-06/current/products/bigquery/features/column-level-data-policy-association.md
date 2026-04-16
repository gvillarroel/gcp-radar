---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.221Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Column-level data policy association"
feature_slug: "column-level-data-policy-association"
latest_feature_date: "2026-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "column"
  - "level"
  - "policy"
  - "association"
  - "bigquery"
  - "lets"
  - "administrators"
  - "associate"
---

# Column-level data policy association

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets administrators associate data policies directly with columns for access control, masking, and transformations; Data policies can be associated directly with columns to control access and apply masking and transformation rules.

## Extended Definition

BigQuery lets administrators associate data policies directly with columns for access control, masking, and transformations; Data policies can be associated directly with columns to control access and apply masking and transformation rules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data policies define rules for data masking, row-level security, or column-level security. @param {string} projectId The Google Cloud project ID. (for example, 'example-project-id') @param {string} location The Google Cloud location of the data policies. (For example, 'us') / async function listDataPolicies ( projectId , location ) { const parent = projects/ ${ projectId } /locations/ ${ location } ; const request = { parent , }; try { console . log ( Listing data policies for project: ${ projectId } in location: ${ location } , ); const [ dataPolicies ] = await client . listDataPolicies ( request ); if ( dataPolicies . length === 0 ) { console . log ( No data policies found in location ${ location } for project ${ projectId } . , ); return ; } console . log ( 'Data Policies:' ); for ( const dataPolicy of dataPolicies ) { console . log ( Data Policy Name: ${ dataPolicy . name } ); console . log ( ID: ${ dataPolicy . dataPolicyId } ); console . log ( Type: ${ dataPolicy . dataPolicyType } ); if ( dataPolicy . policyTag ) { console . log ( Policy Tag: ${ dataPolicy . policyTag } ); } if ( dataPolicy . grantees && dataPolicy . grantees . length > 0 ) { console . log ( Grantees: ${ dataPolicy . grantees . join ( ', ' ) } ); } if ( dataPolicy . dataMaskingPolicy ) { if ( dataPolicy . dataMaskingPolicy . predefinedExpression ) { console . log ( Data Masking Predefined Expression: ${ dataPolicy . dataMaskingPolicy . predefinedExpression } , ); } else if ( dataPolicy . dataMaskingPolicy . routine ) { console . log ( Data Masking Routine: ${ dataPolicy . dataMaskingPolicy . routine } , ); } } } console . log ( Successfully listed ${ dataPolicies . length } data policies. ); } catch ( err ) { if ( err . code === status .
- Data policies are used to define rules for data masking or row-level security on BigQuery tables. @param {string} projectId The Google Cloud project ID (for example, 'example-project-id') @param {string} [location='us'] The Google Cloud location of the data policy (For example, 'us', 'europe-west2'). @param {string} [dataPolicyId='example-data-policy'] The ID of the data policy to retrieve. / async function getDataPolicy ( projectId , location = 'us' , dataPolicyId = 'example-data-policy' , ) { const name = client . dataPolicyPath ( projectId , location , dataPolicyId ); const request = { name , }; try { const [ dataPolicy ] = await client . getDataPolicy ( request ); console . log ( 'Successfully retrieved data policy:' ); console . log ( Name: ${ dataPolicy . name } ); console . log ( Type: ${ dataPolicy . dataPolicyType } ); if ( dataPolicy . dataMaskingPolicy ) { console . log ( Data Masking Policy: ${ dataPolicy . dataMaskingPolicy . predefinedExpression dataPolicy . dataMaskingPolicy . routine } , ); } if ( dataPolicy . grantees && dataPolicy . grantees . length > 0 ) { console . log ( Grantees: ${ dataPolicy . grantees . join ( ', ' ) } ); } } catch ( err ) { if ( err . code === status .
- For more information, see Set up authentication for client libraries . const datapolicy = require ( ' @google-cloud/bigquery-datapolicies ' ); const { DataPolicyServiceClient } = datapolicy . v2 ; const protos = datapolicy . protos . google . cloud . bigquery . datapolicies . v2 ; const { status } = require ( '@grpc/grpc-js' ); const dataPolicyServiceClient = new DataPolicyServiceClient (); / Creates a data policy to apply a data masking rule to a specific BigQuery table column.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to assign a data policy directly on a column: bigquery.tables.update bigquery.tables.setColumnDataPolicy bigquery.dataPolicies.attach You might also be able to get these permissions with custom roles or other predefined roles .

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Authorization inheritance in a policy tag hierarchy Roles are evaluated starting at the policy tag associated with a column, and then checked at each ascending level of the taxonomy, until the user either is determined to have appropriate permissions or the top of the policy tag hierarchy is reached.
- Given the tags that are associated with the columns, running SELECT FROM Accounts; leads to the following results for the different groups: data-users@example.com : This group has been granted the BigQuery Masked Reader role on both the PII and Confidential policy tags.
- The policy tag that is associated with a data policy can also be used for column-level access control.
- Roles for creating and managing data policies You need one of the following BigQuery roles to create and manage data policies: Role/ID Permissions Description BigQuery Data Policy Admin ( bigquerydatapolicy.admin ) BigQuery Admin ( bigquery.admin ) BigQuery Data Owner ( bigquery.dataOwner ) bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery.dataPolicies.getIamPolicy bigquery.dataPolicies.list bigquery.dataPolicies.setIamPolicy bigquery.dataPolicies.update The bigquery.dataPolicies.create and bigquery.dataPolicies.list permissions apply at the project level.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.rowAccessPolicies.delete The row-level access policy to delete. bigquery.rowAccessPolicies.setIamPolicy The row-level access policy to delete. bigquery.rowAccessPolicies.list The table to delete all row-level access policies on.
- For example, if the age column is dropped from the mydataset.people table, then the view created in the previous example becomes invalid. view column option list The view column option list lets you specify optional top-level column options.
- Setting the VALUE to NULL clears the column's value for that option. view column set options list The view column option list lets you specify optional top-level column options.
- Stored columns are not used if the table has a row-level access policy or the column has a policy tag.

