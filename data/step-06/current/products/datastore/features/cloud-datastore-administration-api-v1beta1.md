---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.795Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Cloud Datastore Administration API v1beta1"
feature_slug: "cloud-datastore-administration-api-v1beta1"
latest_feature_date: "2018-02-28"
deprecation_date: "2018-02-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/reference/admin/rest"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest"
keywords:
  - "datastore"
  - "administration"
  - "api"
  - "v1beta1"
  - "is"
  - "an"
  - "older"
  - "version"
---

# Cloud Datastore Administration API v1beta1

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Cloud Datastore Administration API v1beta1 is an older administration API version for Datastore; deprecated on 2018-02-28.

## Extended Definition

Cloud Datastore Administration API v1beta1 is an older administration API version for Datastore; deprecated on 2018-02-28.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest](https://docs.cloud.google.com/python/docs/reference/datastore/latest)

## Supporting Pages

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are currently using the older DB Client Library, read the DB to NDB Migration Guide Contents NoSQL and Eventual Consistency Eventual Consistency in Datastore Ancestor Query and Entity Group Limitations of Entity Group and Ancestor Query Alternatives to Ancestor Queries Minimizing Time to Achieve Full Consistency Conclusion Additional Resources NoSQL and Eventual Consistency Non-relational databases, also known as NoSQL databases, have emerged in recent years as an alternative to relational databases.
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.
- Strong Consistency on Reading Entity Values and Indexes In Datastore, there are only two APIs that provide a strongly consistent view for reading entity values and indexes: (1) the lookup by key method and (2) the ancestor query.
- The different varieties of Datastore query APIs and their corresponding consistency models are shown in Table 1.

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service provides the following discovery documents: https://datastore.googleapis.com/$discovery/rest?version=v1 https://datastore.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta1.projects Methods export POST /v1beta1/projects/{projectId}:export Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. import POST /v1beta1/projects/{projectId}:import Imports entities into Google Cloud Datastore.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datastore.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- REST Resource: v1beta1.projects REST Resource: v1.projects REST Resource: v1.projects.indexes REST Resource: v1.projects.operations Service: datastore.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Extract the download: unzip master . zip Change directories to the TaskList application: cd google - cloud - ruby - master / google - cloud - datastore / samples Install the dependencies: bundle install At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export GOOGLE CLOUD PROJECT = < project - id > (Windows users: use set instead of export .) Run the application! bundle exec ruby tasks . rb Creating an Authorized Service Object In order to make authenticated requests to Google Cloud APIs using the Google APIs Client libraries, you must: Fetch the credential to use for requests.
- Go Clone the TaskList sample application. go get github . com / GoogleCloudPlatform / golang - samples / datastore / tasks Change directories to where you cloned the sample: cd $ GOPATH / src / github . com / GoogleCloudPlatform / golang - samples / datastore / tasks At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export DATASTORE PROJECT ID = < project - id > (Windows users: use set instead of export .) Run the application! go run tasks . go Java Ensure you have Maven and Java (version 8 or later) installed.
- Extract the download: unzip master . zip Change directories to the TaskList application: cd nodejs - datastore - master / samples Install the dependencies and link the application: npm install At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export GCLOUD PROJECT = < project - id > (Windows users: use set instead of export .) Run the application! node tasks . js PHP Ensure you have PHP (version 5.6 or later) and Composer installed.
- Extract the download: unzip master.zip Change directories to the TaskList application: cd php-docs-samples-master/datastore/tutorial Install dependencies. composer install Run the application! php src/list tasks.php Python Ensure you have Python (version 2.7.9 or later), pip , and virtualenv installed.

### "Python Client for Google Cloud Datastore API \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest](https://docs.cloud.google.com/python/docs/reference/datastore/latest)
- Source ID: `site-python-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 2.24.0 (latest) 2.23.0 2.22.0 2.21.0 2.20.2 2.19.0 2.18.0 2.17.0 2.16.1 2.15.2 2.14.0 2.13.2 2.12.0 2.11.1 2.10.0 2.9.0 2.8.3 2.7.2 2.6.2 2.5.1 2.4.0 2.3.0 2.2.0 2.1.6 2.0.1 1.15.5 1.14.0 1.13.2 1.12.0 1.11.0 1.10.0 1.9.0 Google Cloud Datastore API : is a fully managed, schemaless database for storing non-relational data.
- Cloud Datastore automatically scales with your users and supports ACID transactions, high availability of reads and writes, strong consistency for reads and ancestor queries, and eventual consistency for all other queries.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Google Cloud Datastore API Stay organized with collections Save and categorize content based on your preferences.
- These isolated environments can have separate versions of Python packages, which allows you to isolate one project’s dependencies from the dependencies of other projects.

