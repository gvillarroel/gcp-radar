---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.544Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Eventarc for Google Kubernetes Engine"
feature_slug: "eventarc-for-google-kubernetes-engine"
latest_feature_date: "2022-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub"
keywords:
  - "eventarc"
  - "for"
  - "kubernetes"
  - "engine"
  - "can"
  - "receive"
  - "and"
  - "route"
---

# Eventarc for Google Kubernetes Engine

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc can receive and route events for Google Kubernetes Engine.

## Extended Definition

Eventarc can receive and route events for Google Kubernetes Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub)

## Supporting Pages

### "Route backup for GKE events to GKE \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-backup-gke)
- Source ID: `site-iam-reference`
- Final score: 351
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure event routing by specifying filters for the trigger, including the event source, and the target Google Kubernetes Engine (GKE) service running in a GKE cluster.
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Enable the Eventarc, Eventarc Publishing, Google Kubernetes Engine, and Resource Manager APIs. gcloud services enable eventarc.googleapis.com \ eventarcpublishing.googleapis.com \ container.googleapis.com \ cloudresourcemanager.googleapis.com If applicable, enable the API related to the direct events.
- Home Documentation Application development Eventarc Standard Guides Send feedback Route backup for GKE events to GKE Stay organized with collections Save and categorize content based on your preferences.

### "Route AlloyDB for PostgreSQL events to GKE \_|\_ Eventarc Standard \_|\_\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb)
- Source ID: `site-iam-reference`
- Final score: 349
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure event routing by specifying filters for the trigger, including the event source, and the target Google Kubernetes Engine (GKE) service running in a GKE cluster.
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Enable the Eventarc, Eventarc Publishing, Google Kubernetes Engine, and Resource Manager APIs. gcloud services enable eventarc.googleapis.com \ eventarcpublishing.googleapis.com \ container.googleapis.com \ cloudresourcemanager.googleapis.com If applicable, enable the API related to the direct events.
- Home Documentation Application development Eventarc Standard Guides Send feedback Route AlloyDB for PostgreSQL events to GKE Stay organized with collections Save and categorize content based on your preferences.

### "Route API Gateway events to GKE \_|\_ Eventarc Standard \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway)
- Source ID: `site-iam-reference`
- Final score: 335
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure event routing by specifying filters for the trigger, including the event source, and the target Google Kubernetes Engine (GKE) service running in a GKE cluster.
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Enable the Eventarc, Eventarc Publishing, Google Kubernetes Engine, and Resource Manager APIs. gcloud services enable eventarc.googleapis.com \ eventarcpublishing.googleapis.com \ container.googleapis.com \ cloudresourcemanager.googleapis.com If applicable, enable the API related to the direct events.
- If you don't already have one, create a user-managed service account, then grant it the roles and permissions necessary so that Eventarc can manage events for your target GKE destination.

### "Route Apigee API hub events to GKE \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub)
- Source ID: `site-iam-reference`
- Final score: 335
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure event routing by specifying filters for the trigger, including the event source, and the target Google Kubernetes Engine (GKE) service running in a GKE cluster.
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Enable the Eventarc, Eventarc Publishing, Google Kubernetes Engine, and Resource Manager APIs. gcloud services enable eventarc.googleapis.com \ eventarcpublishing.googleapis.com \ container.googleapis.com \ cloudresourcemanager.googleapis.com If applicable, enable the API related to the direct events.
- If you don't already have one, create a user-managed service account, then grant it the roles and permissions necessary so that Eventarc can manage events for your target GKE destination.

