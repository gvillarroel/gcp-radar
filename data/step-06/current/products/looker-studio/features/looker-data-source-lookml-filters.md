---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.182Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker data source LookML filters"
feature_slug: "looker-data-source-lookml-filters"
latest_feature_date: "2024-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/filters"
  - "https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities"
  - "https://docs.cloud.google.com/iam/docs/full-resource-names"
keywords:
  - "looker"
  - "source"
  - "lookml"
  - "filters"
  - "studio"
  - "charts"
  - "now"
  - "display"
---

# Looker data source LookML filters

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Looker Studio charts with a Looker data source now display LookML filters defined with conditionally_filter and always_filter.

## Extended Definition

Looker Studio charts with a Looker data source now display LookML filters defined with conditionally_filter and always_filter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)

## Supporting Pages

### Filters \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The report user has configured two filters: country is IN LIST of Canada, USA source is IN LIST of Social, Organic The report user has configured a chart component with the source dimension and sessions metric getData() is executed by Looker Studio with the following request object: { "fields" : [ { "name" : "source" }, { "name" : "sessions" }, { "name" : "country" , "forFilterOnly" : true } ], "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" , "USA" ], "type" : "INCLUDE" , "operator" : "IN LIST" }], [{ "fieldName" : "source" , "values" : [ "Social" , "Organic" ], "type" : "INCLUDE" , "operator" : "IN LIST" }] ] } Connector responds with filtered data.
- For example, if you're connecting to a SQL database, applying the filters directly in the WHERE clause (B3 in diagram below) can drastically decrease the number of rows returned to Looker Studio.
- Page Summary outlined flag Looker Studio can apply filters to data from community connectors, but applying filters within the connector itself can significantly enhance performance.
- If a report contains filters and a community connector returns unfiltered data for all fields requested then Looker Studio will apply filters to the connector response.

### "Resource types with built-in identities \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- Source ID: `site-iam-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Format All resources for the specified service in the specified project principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / All resources in the specified project with the specified type principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / type/ RESOURCE TYPE / All resources with the specified ancestor principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / ancestor.name/ ANCESTOR RESOURCE TYPE / ANCESTOR RESOURCE NAME principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / ancestor.uid/ ANCESTOR RESOURCE TYPE / ANCESTOR RESOURCE UID All resources with the specified type and the specified ancestor principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / type/ RESOURCE TYPE / ancestor.name/ ANCESTOR RESOURCE TYPE / ANCESTOR RESOURCE NAME principalSet:// RESOURCE SERVICE / projects/ PROJECT NUMBER / type/ RESOURCE TYPE / ancestor.uid/ ANCESTOR RESOURCE TYPE / ANCESTOR RESOURCE UID Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource type Principal identifier format Parameter Manager parameters principal://parametermanager.googleapis.com/ projects/ PROJECT NUMBER / uid/ locations/ global/ parameters/ PARAMETER UID Workload identity pool (preview) principal://iam.googleapis.com/projects/ PROJECT NUMBER /name/locations/global/workloadIdentityPools/ WORKLOAD IDENTITY POOL NAME Principal identifiers for sets of resources Use the following formats in your allow policies to grant roles to sets of resources with built-in identities: Note: These principal sets don't include resources that don't have built-in identities.
- As a result, resources with built-in identities can do the following: Be granted IAM roles using the resource's principal identifier Access other resources without using service agents Principal identifiers for single resources The following table lists the resource types that have built-in identities.
- Home Documentation Security IAM Reference Send feedback Resource types with built-in identities Stay organized with collections Save and categorize content based on your preferences.

### "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- Source ID: `site-iam-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource type Full resource name format BigQuery datasets //bigquery.googleapis.com/projects/ PROJECT ID /datasets/ DATASET ID Cloud Billing accounts //cloudbilling.googleapis.com/billingAccounts/ BILLING ACCOUNT ID Cloud Run services //run.googleapis.com/projects/ PROJECT ID /locations/ LOCATION ID /services/ SERVICE ID Spanner instances //spanner.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud SQL instances //sqladmin.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud Storage buckets 1 //storage.googleapis.com/projects/ /buckets/ BUCKET ID Compute Engine instances //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE ID Compute Engine networks //compute.googleapis.com/projects/ PROJECT ID /global/networks/ NETWORK Compute Engine subnetworks //compute.googleapis.com/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK Google Kubernetes Engine clusters //container.googleapis.com/projects/ PROJECT ID /clusters/ CLUSTER ID IAM service accounts //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL IAM service account keys //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL /keys/ KEY ID Identity-Aware Proxy App Engine app service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/appengine- PROJECT ID /services/ APP SERVICE ID Identity-Aware Proxy Compute Engine backend service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/compute/services/ BACKEND SERVICE ID OR NAME Pub/Sub topics //pubsub.googleapis.com/projects/ PROJECT ID /topics/ TOPIC ID Resource Manager organizations //cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION NUMBER Resource Manager folders //cloudresourcemanager.googleapis.com/folders/ FOLDER NUMBER Resource Manager projects //cloudresourcemanager.googleapis.com/projects/ PROJECT ID 1 The format shown here is compatible with IAM.
- Some Identity and Access Management (IAM) features, such as troubleshooting access issues and viewing the grantable roles on a resource , require you to provide a full resource name .
- Home Documentation Security IAM Reference Send feedback Full resource names Stay organized with collections Save and categorize content based on your preferences.
- To learn more about how full resource names are formatted, see the resource names section of the API design guide.

