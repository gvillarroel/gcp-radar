---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.801Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Datastore empty list properties"
feature_slug: "datastore-empty-list-properties"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "properties"
  - "datastore"
  - "represent"
  - "entity"
  - "list"
  - "allows"
  - "empty"
---

# Datastore empty list properties

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Datastore now allows entity properties to represent an empty list.

## Extended Definition

Datastore now allows entity properties to represent an empty list.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The kind of the entity for the query. properties A list of properties to include as columns of the index, in the order to be sorted: properties used in equality filters first, followed by the property used in inequality filters, then the sort orders and their directions.
- Each element in this list has the following elements: name The datastore name of the property. direction The direction to sort, either asc for ascending or desc for descending.
- Each element in the list represents an index for the application.
- The following is an example of an index.yaml file: indexes : - kind : Cat ancestor : no properties : - name : name - name : age direction : desc - kind : Cat properties : - name : name direction : asc - name : whiskers direction : desc - kind : Store ancestor : yes properties : - name : business direction : asc - name : owner direction : asc The syntax of index.yaml is the YAML format.

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference-3`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The kind of the entity for the query. properties A list of properties to include as columns of the index, in the order to be sorted: properties used in equality filters first, followed by the property used in inequality filters, then the sort orders and their directions.
- Each element in this list has the following elements: name The datastore name of the property. direction The direction to sort, either asc for ascending or desc for descending.
- Each element in the list represents an index for the application.
- The following is an example of an index.yaml file: indexes : - kind : Cat ancestor : no properties : - name : name - name : age direction : desc - kind : Cat properties : - name : name direction : asc - name : whiskers direction : desc - kind : Store ancestor : yes properties : - name : business direction : asc - name : owner direction : asc The syntax of index.yaml is the YAML format.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App Engine resets all resource measurements at the beginning of each calendar day (except for Stored Data, which always represents the amount of datastore storage in use).
- Each entity stored in the datastore requires the following metadata: The entity key, including the kind, the ID or key name, and the keys of the entity's ancestors.
- Since the datastore is schemaless, the name of each property must be stored with the property value for any given entity.
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.

