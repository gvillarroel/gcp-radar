---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.575Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON_OBJECT"
feature_slug: "json-object"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/api-performance"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-routines"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials"
keywords:
  - "json"
  - "object"
  - "creates"
---

# JSON_OBJECT

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

JSON_OBJECT creates a JSON object.

## Extended Definition

JSON_OBJECT creates a JSON object.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials)

## Supporting Pages

### "Create a client with a service account key file \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials)
- Source ID: `site-docs-reference-required-15`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Credentials . from service account file ( key path , scopes = [ "https://www.googleapis.com/auth/cloud-platform" ], ) Alternatively, use service account.Credentials.from service account info() to set credentials directly via a json object rather than set a filepath TODO(developer): Set key json to the content of the service account key file. credentials = service account.Credentials.from service account info(key json) client = bigquery .
- For more information, see Set up authentication for client libraries . // Create a BigQuery client explicitly using service account credentials. // by specifying the private key file. const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const options = { keyFilename : 'path/to/service account.json' , projectId : 'my project' , }; const bigquery = new BigQuery ( options ); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery from google.oauth2 import service account TODO(developer): Set key path to the path to the service account key file. key path = "path/to/service account.json" credentials = service account .
- String projectId = "MY PROJECT ID" ; File credentialsPath = new File ( "path/to/your/service account.json" ); // Load credentials from JSON key file.

### API performance tips \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 200 OK { "kind": "demo", "items": [{ "title": "First title", "characteristics": { "length": "short" } }, { "title": "Second title", "characteristics": { "length": "long" } }, ... ] } Note that the response is a JSON object that includes only the selected fields and their enclosing parent objects.
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag": " ETagString " "title": "" , / Clear the value of the title by setting it to the empty string. / "comment": null , / Delete the comment by replacing its value with null. / "characteristics": { "length": "short", "level": "10" , / Modify the level value. / "followers": ["Jo", "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy": "high" / Add a new characteristic. / }, } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag": " newETagString " "title": "" , / Title is cleared; deleted comment field is missing. / "characteristics": { "length": "short", "level": "10" , / Value is updated. / "followers": ["Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy": "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title": "New title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... } The server returns a 200 OK status code, along with the full representation of the updated resource.
- Here is an example: PATCH https://www.googleapis.com/demo/v1/324?fields=comment,characteristics Authorization: Bearer your auth token Content-Type: application/json { "comment": "A new comment", "characteristics": { "volume": "loud", "accuracy": null } } With this request, if the comment field has an existing value, the new value overwrites it; otherwise it is set to the new value.

### Authorized routines \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- Source ID: `site-docs-reference-5`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Edit the file to add the following JSON object to the access array in the Dataset resource: { "routine" : { "datasetId" : " DATASET NAME " , "projectId" : " PROJECT ID " , "routineId" : " ROUTINE NAME " } } Replace the following: DATASET NAME : the name of the dataset that contains the routine.
- Add the following JSON object to the access array in the Dataset resource: { "routine" : { "datasetId" : " DATASET NAME " , "projectId" : " PROJECT ID " , "routineId" : " ROUTINE NAME " } } Replace the following: DATASET NAME : the name of the dataset that contains the UDF.
- To do this, add "role" to the JSON object: { "role" : " ROLE NAME " , "routine" : { "datasetId" : " DATASET NAME " , "projectId" : " PROJECT ID " , "routineId" : " ROUTINE NAME " } } Replace ROLE NAME with the name of the role that you want to attach.
- To do this, add "role" to the JSON object: { "role" : " ROLE NAME " , "routine" : { "datasetId" : " DATASET NAME " , "projectId" : " PROJECT ID " , "routineId" : " ROUTINE NAME " } } Replace ROLE NAME with the name of the role that you want to attach.

