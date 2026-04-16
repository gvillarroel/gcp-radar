---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.546Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Path pattern filtering"
feature_slug: "path-pattern-filtering"
latest_feature_date: "2022-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry"
keywords:
  - "path"
  - "pattern"
  - "filtering"
  - "eventarc"
  - "supports"
  - "matching"
  - "in"
  - "trigger"
---

# Path pattern filtering

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc supports path pattern matching in trigger filters.

## Extended Definition

Eventarc supports path pattern matching in trigger filters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry)

## Supporting Pages

### "Route AlloyDB for PostgreSQL events to GKE \_|\_ Eventarc Standard \_|\_\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-alloydb)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Example: gcloud eventarc triggers create helloworld-trigger \ --location=us-central1 \ --destination-gke-cluster=gke-events-cluster \ --destination-gke-location=us-central1-a \ --destination-gke-namespace=default \ --destination-gke-service=helloworld-events \ --destination-gke-path=/ \ --event-filters="type=google.cloud.alloydb.cluster.v1.updated" \ --event-filters-path-pattern="cluster=my-cluster- " \ --service-account=${SERVICE ACCOUNT NAME}@${PROJECT ID}.iam.gserviceaccount.com This command creates a trigger called helloworld-trigger for the event identified as google.cloud.alloydb.cluster.v1.updated and matches events for cluster IDs starting with my-cluster- .
- PATH PATTERN : the path pattern to apply when filtering for the resource.
- To sort your triggers, beside any supported column heading, click arrow upward Sort . gcloud Run the following command to list your triggers: gcloud eventarc triggers list --location = - This command lists your triggers in all locations, and includes details such as names, types, destinations, and statuses.

### "Route API Gateway events to GKE \_|\_ Eventarc Standard \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-api-gateway)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Example: gcloud eventarc triggers create helloworld-trigger \ --location=us-central1 \ --destination-gke-cluster=gke-events-cluster \ --destination-gke-location=us-central1-a \ --destination-gke-namespace=default \ --destination-gke-service=helloworld-events \ --destination-gke-path=/ \ --event-filters="type=google.cloud.apigateway.gateway.v1.updated" \ --event-filters-path-pattern="gateway=my-gateway- " \ --service-account=${SERVICE ACCOUNT NAME}@${PROJECT ID}.iam.gserviceaccount.com This command creates a trigger called helloworld-trigger for the event identified as google.cloud.apigateway.gateway.v1.updated and matches events for gateway IDs starting with my-gateway- .
- PATH PATTERN : the path pattern to apply when filtering for the resource.
- To sort your triggers, beside any supported column heading, click arrow upward Sort . gcloud Run the following command to list your triggers: gcloud eventarc triggers list --location = - This command lists your triggers in all locations, and includes details such as names, types, destinations, and statuses.

### "Route Apigee API hub events to GKE \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-api-hub)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Example: gcloud eventarc triggers create helloworld-trigger \ --location=us-central1 \ --destination-gke-cluster=gke-events-cluster \ --destination-gke-location=us-central1-a \ --destination-gke-namespace=default \ --destination-gke-service=helloworld-events \ --destination-gke-path=/ \ --event-filters="type=google.cloud.apihub.deployment.v1.updated" \ --event-filters-path-pattern="deployment=my-deployment- " \ --service-account=${SERVICE ACCOUNT NAME}@${PROJECT ID}.iam.gserviceaccount.com This command creates a trigger called helloworld-trigger for the event identified as google.cloud.apihub.deployment.v1.updated and matches events for deployment IDs starting with my-deployment- .
- PATH PATTERN : the path pattern to apply when filtering for the resource.
- To sort your triggers, beside any supported column heading, click arrow upward Sort . gcloud Run the following command to list your triggers: gcloud eventarc triggers list --location = - This command lists your triggers in all locations, and includes details such as names, types, destinations, and statuses.

### "Route Apigee Registry events to GKE \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry](https://docs.cloud.google.com/eventarc/standard/docs/gke/route-trigger-apigee-registry)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Manage triggers . gcloud You can create a trigger by running a gcloud eventarc triggers create command along with required and optional flags. gcloud eventarc triggers create TRIGGER \ --location = LOCATION \ --destination-gke-cluster = DESTINATION GKE CLUSTER \ --destination-gke-location = DESTINATION GKE LOCATION \ --destination-gke-namespace = DESTINATION GKE NAMESPACE \ --destination-gke-service = DESTINATION GKE SERVICE \ --destination-gke-path = DESTINATION GKE PATH \ --event-filters = "type= EVENT FILTER TYPE " \ --event-filters = " COLLECTION ID = RESOURCE ID " \ --event-filters-path-pattern = " COLLECTION ID = PATH PATTERN " \ --event-data-content-type = " EVENT DATA CONTENT TYPE " \ --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com " Replace the following: TRIGGER : the ID of the trigger or a fully qualified identifier LOCATION : the location of the Eventarc trigger.
- Example: gcloud eventarc triggers create helloworld-trigger \ --location=us-central1 \ --destination-gke-cluster=gke-events-cluster \ --destination-gke-location=us-central1-a \ --destination-gke-namespace=default \ --destination-gke-service=helloworld-events \ --destination-gke-path=/ \ --event-filters="type=google.cloud.apigeeregistry.apiDeployment.v1.updated" \ --event-filters-path-pattern="deployment=my-deployment- " \ --service-account=${SERVICE ACCOUNT NAME}@${PROJECT ID}.iam.gserviceaccount.com This command creates a trigger called helloworld-trigger for the event identified as google.cloud.apigeeregistry.apiDeployment.v1.updated and matches events for deployment IDs starting with my-deployment- .
- PATH PATTERN : the path pattern to apply when filtering for the resource.
- To sort your triggers, beside any supported column heading, click arrow upward Sort . gcloud Run the following command to list your triggers: gcloud eventarc triggers list --location = - This command lists your triggers in all locations, and includes details such as names, types, destinations, and statuses.

