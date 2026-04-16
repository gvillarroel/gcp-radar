---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.547Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Data location support"
feature_slug: "data-location-support"
latest_feature_date: "2021-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/docs/understand-locations"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient"
keywords:
  - "location"
  - "eventarc"
  - "can"
  - "be"
  - "configured"
  - "for"
  - "and"
  - "used"
---

# Data location support

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc can be configured for data location and can be used as a resource location.

## Extended Definition

Eventarc can be configured for data location and can be used as a resource location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/docs/understand-locations](https://docs.cloud.google.com/eventarc/docs/understand-locations)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)

## Supporting Pages

### "Understand Eventarc locations \_|\_ Eventarc Standard \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/eventarc/docs/understand-locations](https://docs.cloud.google.com/eventarc/docs/understand-locations)
- Source ID: `site-docs-root-2`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to capture Cloud Storage events from a bucket in the europe-west1 region with an audit logs trigger, create a trigger in the same location: gcloud eventarc triggers create trigger-auditlog \ --destination-run-service = hello \ --destination-run-region = us-central1 \ --location = europe-west1 \ --event-filters = "type=google.cloud.audit.log.v1.written" \ --event-filters = "serviceName=storage.googleapis.com" \ --event-filters = "methodName=storage.objects.create" \ --service-account = $PROJECT NUMBER -compute@developer.gserviceaccount.com As there's no filtering by bucket when you use a Cloud Audit Logs trigger, this will match all buckets in the europe-west1 region. (To filter by bucket, you can instead use a direct Cloud Storage trigger.) Or, to match a dual-region or multi-region bucket such as eu , you can create a trigger with a global location and this will match all buckets in all regions for which the event filters match: gcloud eventarc triggers create trigger-storage \ --destination-run-service = hello \ --destination-run-region = us-central1 \ --location = global \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket=my-bucket-in-europe-west1-region" \ --service-account = $PROJECT NUMBER -compute@developer.gserviceaccount.com Note: There is a known issue with Cloud Audit Logs triggers for Compute Engine that results in events originating from a single region: us-central1 .
- Cloud Storage Important: Because Eventarc Standard uses Pub/Sub as its transport layer, Cloud Storage triggers can fail if a Cloud Storage event originates from a region not permitted by your Pub/Sub message storage policy, and if in-transit operations are enforced ( "enforceInTransit": true ).
- In the following example, the trigger location matches that of the Cloud Storage bucket (the eu multi-region location): gcloud eventarc triggers create trigger-storage \ --destination-run-service = hello \ --destination-run-region = us-central1 \ --location = eu \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket=my-bucket-in-eu-multi-region" \ --service-account = $PROJECT NUMBER -compute@developer.gserviceaccount.com If the bucket and trigger regions don't match, you will see an error similar to the following: ERROR: ( gcloud.eventarc.triggers.create ) INVALID ARGUMENT: The request was invalid: Bucket "my-bucket-in-eu-multi-region" location "eu" does not match trigger location "europe-west1" .
- In the following example, since the Cloud Storage bucket is in the europe-west1 region, the trigger must also be located in europe-west1 . gcloud eventarc triggers create trigger-storage \ --destination-run-service = hello \ --destination-run-region = us-central1 \ --location = europe-west1 \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket=my-bucket-in-europe-west1-region" \ --service-account = $PROJECT NUMBER -compute@developer.gserviceaccount.com Target location When deploying your event target (for example, a Cloud Run service), you choose a supported region as its location.

### "Route AlloyDB for PostgreSQL events to GKE \_|\_ Eventarc Standard \_|\_\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb)
- Source ID: `site-iam-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Example: gcloud eventarc triggers create helloworld-trigger \ --location=us-central1 \ --destination-gke-cluster=gke-events-cluster \ --destination-gke-location=us-central1-a \ --destination-gke-namespace=default \ --destination-gke-service=helloworld-events \ --destination-gke-path=/ \ --event-filters="type=google.cloud.alloydb.cluster.v1.updated" \ --event-filters-path-pattern="cluster=my-cluster- " \ --service-account=${SERVICE ACCOUNT NAME}@${PROJECT ID}.iam.gserviceaccount.com This command creates a trigger called helloworld-trigger for the event identified as google.cloud.alloydb.cluster.v1.updated and matches events for cluster IDs starting with my-cluster- .
- To sort your triggers, beside any supported column heading, click arrow upward Sort . gcloud Run the following command to list your triggers: gcloud eventarc triggers list --location = - This command lists your triggers in all locations, and includes details such as names, types, destinations, and statuses.
- For each trigger pointing to a GKE destination, the event forwarder (a specifically configured gke-forwarder pod) does the following: It uses the Pub/Sub API to open a StreamingPull connection to the trigger transporter (a Pub/Sub topic and subscription) and receives events as they become available.

### "Route backup for GKE events to GKE \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke)
- Source ID: `site-iam-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Example: gcloud eventarc triggers create helloworld-trigger \ --location=us-central1 \ --destination-gke-cluster=gke-events-cluster \ --destination-gke-location=us-central1-a \ --destination-gke-namespace=default \ --destination-gke-service=helloworld-events \ --destination-gke-path=/ \ --event-filters="type=google.cloud.gkebackup.backupPlan.v1.updated" \ --event-filters-path-pattern="backupplan=my-backupplan- " \ --service-account=${SERVICE ACCOUNT NAME}@${PROJECT ID}.iam.gserviceaccount.com This command creates a trigger called helloworld-trigger for the event identified as google.cloud.gkebackup.backupPlan.v1.updated and matches events for backupplan IDs starting with my-backupplan- .
- To sort your triggers, beside any supported column heading, click arrow upward Sort . gcloud Run the following command to list your triggers: gcloud eventarc triggers list --location = - This command lists your triggers in all locations, and includes details such as names, types, destinations, and statuses.
- For each trigger pointing to a GKE destination, the event forwarder (a specifically configured gke-forwarder pod) does the following: It uses the Pub/Sub API to open a StreamingPull connection to the trigger transporter (a Pub/Sub topic and subscription) and receives events as they become available.

### "Class EventarcAsyncClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- Source ID: `site-python-reference`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get location get location ( request : typing .
- If the GOOGLE API USE CLIENT CERTIFICATE environment variable is "true", then the client cert source property can be used to provide a client certificate for mTLS transport.
- ClientInfo ) Eventarc allows users to subscribe to various events that are provided by Google Cloud services and forward them to supported destinations.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . channel connection path channel connection path ( project : str , location : str , channel connection : str ) - > str Returns a fully-qualified channel connection string. channel path channel path ( project : str , location : str , channel : str ) - > str Returns a fully-qualified channel string. cloud function path cloud function path ( project : str , location : str , function : str ) - > str Returns a fully-qualified cloud function string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create channel create channel ( request : typing .

