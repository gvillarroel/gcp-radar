---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.800Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Cloud Datastore API v1"
feature_slug: "cloud-datastore-api-v1"
latest_feature_date: "2016-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest"
  - "https://docs.cloud.google.com/datastore/docs/reference/admin/rest"
keywords:
  - "datastore"
  - "api"
  - "v1"
  - "is"
  - "the"
  - "general"
  - "for"
  - "application"
---

# Cloud Datastore API v1

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Cloud Datastore API v1 is the general Datastore API for application access.

## Extended Definition

Cloud Datastore API v1 is the general Datastore API for application access.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest](https://docs.cloud.google.com/python/docs/reference/datastore/latest)
- [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)

## Supporting Pages

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Strong Consistency on Reading Entity Values and Indexes In Datastore, there are only two APIs that provide a strongly consistent view for reading entity values and indexes: (1) the lookup by key method and (2) the ancestor query.
- Besides reducing the possibility of having increases times for consistency, these index optimizations may result in quite a large reduction of Datastore storage costs in a large application which heavily uses indexes.
- Using this policy, it is likely that the traffic of the large application will be better distributed among a set of Datastore servers with reduced time for consistency.
- So, in data modeling for Datastore, it is important to make a decision on the entity group design in the early phase of the application design.

### "Getting started with the Firestore in Datastore mode API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- Source ID: `site-iam-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Extract the download: unzip master . zip Change directories to the TaskList application: cd google - cloud - ruby - master / google - cloud - datastore / samples Install the dependencies: bundle install At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export GOOGLE CLOUD PROJECT = < project - id > (Windows users: use set instead of export .) Run the application! bundle exec ruby tasks . rb Creating an Authorized Service Object In order to make authenticated requests to Google Cloud APIs using the Google APIs Client libraries, you must: Fetch the credential to use for requests.
- For more information, see Set up authentication for a local development environment . def add task description require "google/cloud/datastore" datastore = Google :: Cloud :: Datastore . new task = datastore . entity "Task" do t t [ "description" ] = description t [ "created" ] = Time . now t [ "done" ] = false t . exclude from indexes! "description" , true end datastore . save task puts task . key . id task . key . id end For this application, we also provide a method to update the done property, to indicate the task is complete: C# To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- Go Clone the TaskList sample application. go get github . com / GoogleCloudPlatform / golang - samples / datastore / tasks Change directories to where you cloned the sample: cd $ GOPATH / src / github . com / GoogleCloudPlatform / golang - samples / datastore / tasks At a command prompt, run the following, where <project-id> is the ID of your Google Cloud project. export DATASTORE PROJECT ID = < project - id > (Windows users: use set instead of export .) Run the application! go run tasks . go Java Ensure you have Maven and Java (version 8 or later) installed.
- For more information, see Set up authentication for a local development environment . // Create an authorized Datastore service using Application Default Credentials. private final Datastore datastore = DatastoreOptions . getDefaultInstance (). getService (); // Create a Key factory to construct keys associated with this project. private final KeyFactory keyFactory = datastore . newKeyFactory (). setKind ( "Task" ); Node.js To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

### "Python Client for Google Cloud Datastore API \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest](https://docs.cloud.google.com/python/docs/reference/datastore/latest)
- Source ID: `site-python-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code-Based Examples Configuring a handler for all Google-based loggers import logging from google.cloud import library v1 base logger = logging.getLogger("google") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Configuring a handler for a specific Google module (for a client library called library v1 ): import logging from google.cloud import library v1 base logger = logging.getLogger("google.cloud.library v1") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Logging details Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root logger from the google-level logger.
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.
- 2.24.0 (latest) 2.23.0 2.22.0 2.21.0 2.20.2 2.19.0 2.18.0 2.17.0 2.16.1 2.15.2 2.14.0 2.13.2 2.12.0 2.11.1 2.10.0 2.9.0 2.8.3 2.7.2 2.6.2 2.5.1 2.4.0 2.3.0 2.2.0 2.1.6 2.0.1 1.15.5 1.14.0 1.13.2 1.12.0 1.11.0 1.10.0 1.9.0 Google Cloud Datastore API : is a fully managed, schemaless database for storing non-relational data.

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta1.projects Methods export POST /v1beta1/projects/{projectId}:export Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. import POST /v1beta1/projects/{projectId}:import Imports entities into Google Cloud Datastore.
- This service provides the following discovery documents: https://datastore.googleapis.com/$discovery/rest?version=v1 https://datastore.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta1.projects REST Resource: v1.projects REST Resource: v1.projects.indexes REST Resource: v1.projects.operations Service: datastore.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

