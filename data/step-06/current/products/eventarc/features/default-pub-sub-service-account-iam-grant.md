---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.547Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Default Pub/Sub service account IAM grant"
feature_slug: "default-pub-sub-service-account-iam-grant"
latest_feature_date: "2021-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/quickstart-pubsub"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient"
keywords:
  - "default"
  - "pub"
  - "sub"
  - "account"
  - "iam"
  - "grant"
  - "eventarc"
  - "grants"
---

# Default Pub/Sub service account IAM grant

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc grants roles/iam.serviceAccountTokenCreator to the Pub/Sub service account by default.

## Extended Definition

Eventarc grants roles/iam.serviceAccountTokenCreator to the Pub/Sub service account by default.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/gke/quickstart-pubsub)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)

## Supporting Pages

### "Quickstart: Trigger Workflows using Pub/Sub messages (Google Cloud CLI)\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub)
- Source ID: `site-iam-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: Eventarc Admin ( roles/eventarc.admin ) Logs View Accessor ( roles/logging.viewAccessor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Pub/Sub Publisher ( roles/pubsub.publisher ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Workflows Admin ( roles/workflows.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Grant the Workflows Invoker role ( roles/workflows.invoker ) on the project to the Compute Engine default service account so that the account has permission to trigger your workflow execution. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/workflows.invoker If you enabled the Cloud Pub/Sub service agent on or before April 8, 2021, to support authenticated Pub/Sub push requests, grant the Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ) to the service agent.
- Otherwise, this role is granted by default: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \ --role = roles/iam.serviceAccountTokenCreator Create and deploy a workflow Create and deploy a workflow that gets executed when a message published to a Pub/Sub topic triggers a workflow with an HTTP request.
- Note: The iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint prevents the Editor role from being automatically granted to default service accounts.

### "Quickstart: Receive events using Pub/Sub message (Google Cloud CLI) \_|\_\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/gke/quickstart-pubsub)
- Source ID: `site-iam-reference`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- Grant the Pub/Sub Subscriber role ( roles/pubsub.subscriber ) on the project to the Compute Engine default service account so that the Eventarc trigger can pull events from Pub/Sub. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/pubsub.subscriber If you enabled the Cloud Pub/Sub service agent on or before April 8, 2021, to support authenticated Pub/Sub push requests, grant the Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ) to the service agent.
- Required permissions To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: Eventarc Admin ( roles/eventarc.admin ) Kubernetes Engine Admin ( roles/container.admin ) Logs View Accessor ( roles/logging.viewAccessor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Pub/Sub Publisher ( roles/pubsub.publisher ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Otherwise, this role is granted by default: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \ --role = roles/iam.serviceAccountTokenCreator Create a GKE cluster A GKE cluster consists of at least one cluster control plane machine and multiple worker machines called nodes.
- Existing Pub/Sub topic gcloud eventarc triggers create gke-trigger-pubsub \ --location = " $LOCATION " \ --destination-gke-cluster = $CLUSTER NAME \ --destination-gke-location = $LOCATION \ --destination-gke-namespace = default \ --destination-gke-service = $SERVICE NAME \ --destination-gke-path = / \ --event-filters = "type=google.cloud.pubsub.topic.v1.messagePublished" \ --service-account = " PROJECT NUMBER -compute@developer.gserviceaccount.com" \ --transport-topic = projects/ PROJECT ID /topics/ TOPIC ID Replace the following: PROJECT ID : your Google Cloud project ID TOPIC ID : the ID of the existing Pub/Sub topic This creates a trigger called gke-trigger-pubsub for the existing Pub/Sub topic.

### "Class EventarcAsyncClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- Source ID: `site-python-reference`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . test iam permissions test iam permissions ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get location get location ( request : typing .
- Channel () channel.pubsub topic = "pubsub topic value" channel.name = "name value" request = eventarc v1 .
- Dict [ str , str ] Parses a workflow path into its component segments. pipeline path pipeline path ( project : str , location : str , pipeline : str ) - > str Returns a fully-qualified pipeline string. provider path provider path ( project : str , location : str , provider : str ) - > str Returns a fully-qualified provider string. service account path service account path ( project : str , service account : str ) - > str Returns a fully-qualified service account string. service path service path () - > str Returns a fully-qualified service string. set iam policy set iam policy ( request : typing .

### "Class EventarcClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- Source ID: `site-python-reference`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . test iam permissions test iam permissions ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get location get location ( request : typing .
- Channel () channel.pubsub topic = "pubsub topic value" channel.name = "name value" request = eventarc v1 .
- Dict [ str , str ] Parses a workflow path into its component segments. pipeline path pipeline path ( project : str , location : str , pipeline : str ) - > str Returns a fully-qualified pipeline string. provider path provider path ( project : str , location : str , provider : str ) - > str Returns a fully-qualified provider string. service account path service account path ( project : str , service account : str ) - > str Returns a fully-qualified service account string. service path service path () - > str Returns a fully-qualified service string. set iam policy set iam policy ( request : typing .

