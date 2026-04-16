---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.421Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Service account keys enable and disable"
feature_slug: "service-account-keys-enable-and-disable"
latest_feature_date: "2021-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys"
  - "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts"
  - "https://docs.cloud.google.com/iam/docs/conditions-attribute-reference"
  - "https://docs.cloud.google.com/iam/docs/service-account-overview"
keywords:
  - "account"
  - "keys"
  - "enable"
  - "and"
  - "disable"
  - "lets"
  - "you"
  - "re"
---

# Service account keys enable and disable

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Lets you disable and re-enable service account keys.

## Extended Definition

Lets you disable and re-enable service account keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference)
- [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)

## Supporting Pages

### "Best practices for managing service account keys \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To prevent unnecessary usage of service account keys, use organization policy constraints : At the root of your organization's resource hierarchy , apply the Disable service account key creation and Disable service account key upload constraints to establish a default where service account keys are disallowed.
- You can reduce the risk of accidentally leaving copies of service account keys in temporary locations by using the Google Cloud CLI : The gcloud iam service-accounts keys create command lets you write the service account key file straight to the location where you need it.
- Additionally, set up your source control system so that it detects accidental submissions of service account keys: If you use Cloud Source Repositories , enable key detection to block git push operations that contain private keys and to notify users.
- Provide alternatives to creating service account keys Make sure that users in your organization are aware of alternatives and can justify the additional risk and management overhead of using a service account key: Educate your developers on more secure alternatives to service account keys Establish a process to help developers decide on the appropriate authentication method for their use case before creating a new service account key.

### "Best practices for using service accounts securely \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions that enable a user to impersonate a service account or attach a service account to a resource include the following: iam.serviceAccounts.getAccessToken iam.serviceAccounts.getOpenIdToken iam.serviceAccounts.actAs iam.serviceAccounts.implicitDelegation iam.serviceAccounts.signBlob iam.serviceAccounts.signJwt iam.serviceAccountKeys.create deploymentmanager.deployments.create cloudbuild.builds.create Roles that contain some of these permissions include (but aren't limited to): Owner ( roles/owner ) Editor ( roles/editor ) Service Account User ( roles/iam.serviceAccountUser ) Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Workload Identity User ( roles/iam.workloadIdentityUser ) Deployment Manager Editor ( roles/deploymentmanager.editor ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Before you assign any of these roles to a user, ask yourself: Which resources inside and outside the current Google Cloud project could the user gain access to by impersonating the service account?
- If your Google Cloud project doesn't require service account keys at all, apply the Disable service account key creation and Disable service account key upload organization policy constraints to the Google Cloud project or the enclosing folder.
- To recreate default service accounts, you must disable and reenable the respective API, which might break your existing deployment.
- In contrast, if you disable and re-enable a service account, all IAM bindings stay intact.

### "Attribute reference for IAM Conditions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples Returns true unless the resource is a Compute Engine image: resource.type != "compute.googleapis.com/Image" Returns true only if the resource is a Compute Engine image or persistent disk: (resource.type == "compute.googleapis.com/Image" resource.type == "compute.googleapis.com/Disk") Supported resource types Apigee API product attributes API products API proxies API proxy key-value map entries API proxy key-value maps API proxy revisions Caches Developer app attributes Developer apps Developer attributes Developers Environment key-value map entries Environment key-value maps Exports Flow hooks Keystore aliases Keystores Queries Rate plans References Shared flow revisions Shared flows Target servers Trace (debug) sessions Application Integration Auth configs Executions Integration versions Integrations Locations Suspensions Apigee API Hub APIs API operations Definitions Deployments Specs Versions Backup and DR Service Backup vaults BigQuery Datasets Models Routines Tables BigQuery Reservation API Assignments BI reservations Capacity commitments Locations Reservations Bigtable Clusters Instances Tables Binary Authorization Attestors Continuous Validation configs Policies Customer Experience Agent Studio Apps Operations Cloud Key Management Service Crypto key versions Crypto keys Key rings Locations Cloud Logging Log buckets Log views Cloud NGFW Address groups Cloud SQL Backup runs Instances Cloud Storage Buckets Managed folders Objects Compute Engine Backend services (global and regional) Firewalls Forwarding rules (global and regional) Images Instance templates Instances Persistent disks (regional and zonal) Snapshots Target HTTP(S) proxies (global and regional) Target SSL proxies Target TCP proxies Dataform Compilation results Locations Release configs Repositories Workflow configs Workflow invocations Workspaces Google Cloud Locations 1 Google Kubernetes Engine Clusters Firestore Databases Identity-Aware Proxy All backend services and App Engine apps All tunnel resources All tunnel zones All web services App Engine app service versions App Engine app services Compute Engine backend services Tunnel instances Integration Connectors Connections Connection schema metadata Endpoint attachments Event subscriptions Managed zones Google Cloud Managed Service for Apache Kafka Clusters Consumer groups Operations Topics Parameter Manager Parameter versions Parameters Pub/Sub Lite Locations Subscriptions Topics Network Security Integration Intercept Deployment Groups Intercept Deployments Intercept Endpoint Groups Intercept Endpoint Group Associations Mirroring Deployment Groups Mirroring Deployments Mirroring Endpoint Groups Mirroring Endpoint Group Associations Resource Manager Projects Secret Manager Secret versions Secrets Spanner Backups Databases Instances 1 Cloud Key Management Service uses this resource type as the parent of key ring resources. resource.name attribute The resource.name attribute lets you set a condition based on all or part of a resource name.
- Supported principal subjects Google Accounts Identifier: user's email address Example: alex@example.com Workforce identity pool identities Identifier: identity's subject attribute value Example: raha@altostrat.com Workload identity pool identities Identifier: identity's subject attribute value Service accounts Identifier: service account's email address Example: my-service-account@my-project.iam.gserviceaccount.com Agent identity (Preview) Identifier: the Agent Identity, starting with resources/ Example: resources/aiplatform/projects/9876543210/locations/us-central1/reasoningEngines/my-test-agent Example Evaluates to true if the principal in the request ends with @example.com : principal.subject.endsWith("@example.com") Evaluates to true if the principal in the request starts with resources/aiplatform , which is true for agent identities that use the Vertex AI platform: principal.subject.startsWith("resources/aiplatform/") Evaluates to true if the principal in the request is example-service-account@example-project.iam.gserviceaccount.com : principal.subject == "example-service-account@example-project.iam.gserviceaccount.com" Request attributes Request attributes enable you to create conditions that evaluate details about the request, such as its access level, its date and time, the destination IP address and port (for IAP TCP tunneling), or the expected URL path/host (for IAP and Cloud Run).
- Examples Returns true unless the resource name identifies a Cloud Storage bucket named secret-bucket-123 : resource.name != "projects/ /buckets/secret-bucket-123" Returns true if the resource name starts with the specified prefix, in the format used by Compute Engine VM instances: resource.name.startsWith("projects/project-123/zones/us-east1-b/instances/prod-") Returns true if the resource name starts with the specified prefix, in the format used by Cloud Storage buckets: resource.name.startsWith("projects/ /buckets/my bucket/objects/test-object-") Returns true if the resource name ends with the specified suffix—for example, the file extension of a Cloud Storage object: resource.name.endsWith(".jpg") Returns the project name or number if it's present: resource.name.extract("projects/{project}/") Supported resource types Apigee API product attributes API products API proxies API proxy key-value map entries API proxy key-value maps API proxy revisions Caches Developer app attributes Developer apps Developer attributes Developers Environment key-value map entries Environment key-value maps Exports Flow hooks Keystore aliases Keystores Queries Rate plans References Shared flow revisions Shared flows Target servers Trace (debug) sessions Application Integration Auth configs Executions Integration versions Integrations Locations Suspensions Apigee API Hub APIs API operations Definitions Deployments Specs Versions Backup and DR Service Backup vaults BigQuery Datasets Models Routines Tables BigQuery Reservation API Assignments BI reservations Capacity commitments Locations Reservations Bigtable Clusters Instances Tables Binary Authorization Attestors Continuous Validation configs Policies Cloud Deploy Automation runs Automations Custom target types Delivery pipelines Job runs Releases Rollouts Targets Customer Experience Agent Studio Apps Operations Cloud Key Management Service Crypto keys Crypto key versions Key rings Cloud Logging Log buckets Log views Cloud NGFW Address groups Cloud SQL Backup runs Instances Cloud Storage Buckets Managed folders Objects Compute Engine Backend services (global and regional) Firewalls Forwarding rules (global and regional) Images Instance templates Instances Persistent disks (regional and zonal) Snapshots Target HTTP(S) proxies (global and regional) Target SSL proxies Target TCP proxies Google Kubernetes Engine Clusters Firestore Databases Dataform Compilation results Locations Release configs Repositories Workflow configs Workflow invocations Workspaces Integration Connectors Connections Connection schema metadata Endpoint attachments Event subscriptions Managed zones Google Cloud Managed Service for Apache Kafka Clusters Consumer groups Operations Topics Parameter Manager Parameter versions Parameters Pub/Sub Lite Locations Subscriptions Topics Network Security Integration Intercept Deployment Groups Intercept Deployments Intercept Endpoint Groups Intercept Endpoint Group Associations Mirroring Deployment Groups Mirroring Deployments Mirroring Endpoint Groups Mirroring Endpoint Group Associations Secret Manager Secret versions Secrets Spanner Backups Databases Instances Resource tags The resource tag functions let you set a condition based on the tags that are attached to supported resources or inherited by those resources' descendants.
- Attribute variable principal.type Attribute type string Supported operators == , != , in Supported principal types Google Accounts iam.googleapis.com/WorkspaceIdentity Workforce identity pool identities iam.googleapis.com/WorkforcePoolIdentity Workload identity pool identities iam.googleapis.com/WorkloadPoolIdentity Service accounts iam.googleapis.com/ServiceAccount Agent identity (Preview) iam.googleapis.com/AgentPoolIdentity Examples Evaluates to true if the principal in the request is a service account: principal.type == "iam.googleapis.com/ServiceAccount" Evaluates to true if the principal in the request is an Agent Identity: principal.type == "iam.googleapis.com/AgentPoolIdentity" Evaluates to true if the principal in the request is a Google Workspace identity or workforce identity pool identity: principal.type in ["iam.googleapis.com/WorkspaceIdentity", "iam.googleapis.com/WorkforcePoolIdentity"] principal.subject attribute The principal.subject attribute lets you set a condition based on the principal issuing the request.

### "Service accounts overview \_|\_ Identity and Access Management (IAM) \_\

- URL: [https://docs.cloud.google.com/iam/docs/service-account-overview](https://docs.cloud.google.com/iam/docs/service-account-overview)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you must authenticate with a service account key, you are responsible for the security of the private key and for other operations described by Best practices for managing service account keys .
- When a service account is in one project, and it accesses a resource in another project, you usually must enable the API for that resource in both projects.
- For example, you could set up Workload Identity Federation to allow external workloads to authenticate as service accounts, or create a service account key and use it in any environment to obtain OAuth 2.0 access tokens.
- For example, if you have a service account in the project my-service-accounts and a Cloud SQL instance in the project my-application , you must enable the Cloud SQL API in both my-service-accounts and my-application .

