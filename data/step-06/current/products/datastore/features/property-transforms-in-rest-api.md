---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.768Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Property transforms in REST API"
feature_slug: "property-transforms-in-rest-api"
latest_feature_date: "2024-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/datastore/docs/concepts/entities"
  - "https://docs.cloud.google.com/datastore/docs/concepts/indexes"
  - "https://docs.cloud.google.com/datastore/docs/concepts/queries"
keywords:
  - "property"
  - "transforms"
  - "in"
  - "rest"
  - "api"
  - "the"
  - "supports"
  - "such"
---

# Property transforms in REST API

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

The REST API supports property transforms such as increment operations.

## Extended Definition

The REST API supports property transforms such as increment operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/concepts/entities](https://docs.cloud.google.com/datastore/docs/concepts/entities)
- [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)

## Supporting Pages

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Getting started with the Firestore in Datastore mode API Stay organized with collections Save and categorize content based on your preferences.
- This page provides a short exercise in building a command-line TaskList application with the Firestore in Datastore mode API.
- For more information, see Set up authentication for a local development environment . def add task description require "google/cloud/datastore" datastore = Google :: Cloud :: Datastore . new task = datastore . entity "Task" do t t [ "description" ] = description t [ "created" ] = Time . now t [ "done" ] = false t . exclude from indexes! "description" , true end datastore . save task puts task . key . id task . key . id end For this application, we also provide a method to update the done property, to indicate the task is complete: C# To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- Extract the download: unzip master . zip Change directories to the TaskList application: cd google - cloud - ruby - master / google - cloud - datastore / samples Install the dependencies: bundle install At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export GOOGLE CLOUD PROJECT = < project - id > (Windows users: use set instead of export .) Run the application! bundle exec ruby tasks . rb Creating an Authorized Service Object In order to make authenticated requests to Google Cloud APIs using the Google APIs Client libraries, you must: Fetch the credential to use for requests.

### Entities, Properties, and Keys \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/entities](https://docs.cloud.google.com/datastore/docs/concepts/entities)
- Source ID: `site-iam-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, starting with the following entity: REST entity: { "key" : { "path": [ { "kind": "Kind 1", "name": "entity 1" } ] } "properties" : { "a": 1, "b": 2, "c": 3 } } The following request updates both a and b and then applies a property transform to property b : POST https://datastore.googleapis.com/v1/projects/ { projectId }: commit { "mode" : "NON TRANSACTIONAL" , "mutations" : [ { "propertyMask" : { "a" , "b" }, // update property a , b "update" : { "key" : { "path" : [ { "kind" : "Kind 1" , "name" : "entity 1" } ] } "properties" : { "a" : "new value" , "b" : -2 } }, "propertyTransforms" : [ { "property" : "b" , "increment" : { "integerValue" : 2 } } ] } ] } The result is the following: REST entity: { "key" : { "path": [ { "kind": "Kind 1", "name": "entity 1" } ] } "properties" : { "a": "new value", "b": 0, "c": 3 } } Kinds and identifiers Each entity is of a particular kind , which categorizes the entity for the purpose of queries.
- This operation increments properties by the specified values: REST POST https://datastore.googleapis.com/v1/projects/{projectId}:commit { "mode": "NON TRANSACTIONAL", "mutations": [ { "propertyMask": {}, // Empty write mask indicates only transforms can change the entity. "propertyTransforms": [ { "property": "quantity", "increment": { "integerValue": 2 } }, { "property": "inStock", "maximum": { "integerValue": 100 } }, ] "upsert": { "key": { "path": [ { "kind": "Items", "name": "entity 1" } ] } } } ] } The following example sets a property value to the time at which the server processed the request with millisecond precision.
- REST POST https://datastore.googleapis.com/v1/projects/{projectId}:commit { "mode": "NON TRANSACTIONAL", "mutations": [ { "propertyMask": {}, // Empty write mask indicates only transforms can change the entity. "propertyTransforms": [ { "property": "arrayField", "appendMissingElements": { "values": [ { "stringValue": "str" }, { "integerValue": 10 } ] } }, ] "upsert": { "key": { "path": [ { "kind": "Kind 1", "name": "entity 1" } ] } } } ] } Mixed types with maximum and minimum The maximum and minimum property transforms take either an integer or a double (floating-point number) value as input.
- REST POST https://datastore.googleapis.com/v1/projects/{projectId}:commit { "mode": "NON TRANSACTIONAL", "mutations": [ { "propertyMask": {}, // // Empty write mask indicates only transforms can change the entity. "propertyTransforms": [ { "property": "timeField", "setToServerValue": "REQUEST TIME" }, ] "upsert": { "key": { "path": [ { "kind": "Kind 1", "name": "entity 1" } ] } } } ] } The following example appends array elements if they are missing.

### Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Index configuration Firestore in Datastore mode provides built-in , or automatic, indexes for queries of the following forms: Kindless queries using only ancestor and key filters Queries using only ancestor and equality filters Queries using only inequality filters (which are limited to a single property ) Queries using only ancestor filters, equality filters on properties, and inequality filters on keys Queries with no filters and only one sort order on a property, either ascending or descending As an example, by default, Datastore mode databases automatically predefine two single property indexes for each property of each entity kind, one in ascending order and one in descending order.
- This will require 9 index entries, one for each possible combination of property values: ( 'fun' , 'alice' , NOW() ) ( 'fun' , 'bob' , NOW() ) ( 'fun' , 'charlie' , NOW() ) ( 'programming' , 'alice' , NOW() ) ( 'programming' , 'bob' , NOW() ) ( 'programming' , 'charlie' , NOW() ) ( 'learn' , 'alice' , NOW() ) ( 'learn' , 'bob' , NOW() ) ( 'learn' , 'charlie' , NOW() ) When the same property is repeated multiple times, Firestore in Datastore mode can detect exploding indexes and suggest an alternative index.
- Multiple databases You can use gcloud firestore to manage a single index for Datastore mode or use gcloud datastore with an index.yaml file to manage all the indexes under a database. gcloud firestore gcloud firestore indexes composite create --api-scope=datastore-mode-api --query-scope= QUERY SCOPE --database= DATABASE ID gcloud datastore gcloud alpha datastore indexes create index.yaml --database= DATABASE ID Replace the following: DATABASE ID : a database ID.
- Similarly, an entity that can have multiple values for the same property requires a separate index entry for each value; again, if the number of possible values is large, such an entity can exceed the entry limit.

### Datastore queries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Note that if a set of inequality filters on a property translate into an equality filter, such as WHERE tag >= 'math' AND tag <= 'math' any sort order on that property is ignored, as the filters evaluate the same as the equality filter WHERE tag = 'math' Projections and array-valued properties Projecting a property with array values won't populate all values for that property.
- Java Query<Entity> query = Query . newEntityQueryBuilder () . setKind ( "Task" ) . setFilter ( CompositeFilter . or ( PropertyFilter . eq ( "starred" , true )), PropertyFilter . ge ( "priority" , 4 )) . build (); The earlier query includes an implied order-by on the inequality such as the following.
- Restrictions Sort orders have the following restrictions: Because of the way Datastore mode executes queries, if a query specifies inequality filters on a property and sort orders on other properties, the property used in the inequality filters must be ordered before the other properties .
- Additionally, the following restrictions apply: Entities lacking a property named in the query are ignored Entities of the same kind need not have the same properties.

