---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.567Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Managed VMs remote container build backend option"
feature_slug: "managed-vms-remote-container-build-backend-option"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "managed"
  - "vms"
  - "remote"
  - "container"
  - "build"
  - "backend"
  - "option"
  - "app"
---

# Managed VMs remote container build backend option

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

For App Engine Managed VMs, `gcloud preview app deploy` can build containers using either a default remote Compute Engine VM or Cloud Build, configurable via `app/use_cloud_build`.

## Extended Definition

For App Engine Managed VMs, `gcloud preview app deploy` can build containers using either a default remote Compute Engine VM or Cloud Build, configurable via `app/use_cloud_build`.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- The Google Container Registry domain used for storing managed build docker images for this application. database type DatabaseType The type of the Cloud Firestore or Cloud Datastore database associated with this application. feature settings FeatureSettings The feature specific settings to be used in the application.
- Only applicable for instances running in the App Engine flexible environment. zip ZipInfo The zip file for this deployment, if this is a zip deployment. cloud build options CloudBuildOptions Options for any Google Cloud Build builds created as a part of this deployment.
- Example: -----BEGIN RSA PRIVATE KEY----- -----END RSA PRIVATE KEY----- @InputOnly CloudBuildOptions Options for the build operations performed as a part of the version deployment.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- After you build your app, you can read other tutorials to learn how to integrate with other Google Cloud services and add more features to your app.
- For existing apps created before this date, the region ID is optional in the URL.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Storage storage = StorageOptions . getDefaultInstance (). getService (); System . out . println ( "Buckets:" ); Page<Bucket> buckets = storage . list (); for ( Bucket bucket : buckets . iterateAll ()) { System . out . println ( bucket . toString ()); } } Node.js // Imports the Google Cloud client library. const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiates a client.
- A user account can be used to authenticate from the following tools: Google Cloud console Google Cloud CLI IDEs and build tools that use the gcloud CLI to test and deploy App Engine apps A service account , which is intended to represent an application or a process instead of a person.
- A service account can be used to authenticate from the following tools: gcloud CLI IDEs and build tools that use gcloud CLI tools to test and deploy App Engine apps Creating a user account Open the IAM page in the Google Cloud console.
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.

