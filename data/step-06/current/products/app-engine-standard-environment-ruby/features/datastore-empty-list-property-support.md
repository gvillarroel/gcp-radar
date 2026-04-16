---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.428Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Datastore empty list property support"
feature_slug: "datastore-empty-list-property-support"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/quotas"
keywords:
  - "properties"
  - "datastore"
  - "represent"
  - "property"
  - "value"
  - "list"
  - "empty"
---

# Datastore empty list property support

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Datastore properties can represent an empty list value.

## Extended Definition

Datastore properties can represent an empty list value.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- The kind of the entity for the query. properties A list of properties to include as columns of the index, in the order to be sorted: properties used in equality filters first, followed by the property used in inequality filters, then the sort orders and their directions.
- Each element in this list has the following elements: name The datastore name of the property. direction The direction to sort, either asc for ascending or desc for descending.
- Each element in the list represents an index for the application.
- The following is an example of an index.yaml file: indexes : - kind : Cat ancestor : no properties : - name : name - name : age direction : desc - kind : Cat properties : - name : name direction : asc - name : whiskers direction : desc - kind : Store ancestor : yes properties : - name : business direction : asc - name : owner direction : asc The syntax of index.yaml is the YAML format.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Since the datastore is schemaless, the name of each property must be stored with the property value for any given entity.
- App Engine resets all resource measurements at the beginning of each calendar day (except for Stored Data, which always represents the amount of datastore storage in use).
- Each row contains the entity kind, any number of property values depending on the index definition, and the entity key.
- The name and value of each property.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Since the datastore is schemaless, the name of each property must be stored with the property value for any given entity.
- App Engine resets all resource measurements at the beginning of each calendar day (except for Stored Data, which always represents the amount of datastore storage in use).
- Each row contains the entity kind, any number of property values depending on the index definition, and the entity key.
- The name and value of each property.

