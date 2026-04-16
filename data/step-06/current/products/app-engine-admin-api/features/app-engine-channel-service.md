---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.560Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine Channel service"
feature_slug: "app-engine-channel-service"
latest_feature_date: "2016-10-27"
deprecation_date: "2017-10-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
keywords:
  - "app"
  - "engine"
  - "channel"
  - "has"
  - "been"
  - "deprecated"
  - "2017"
  - "10"
---

# App Engine Channel service

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The App Engine Channel service has been deprecated; deprecated on 2017-10-31.

## Extended Definition

The App Engine Channel service has been deprecated; deprecated on 2017-10-31.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)

## Supporting Pages

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to the default channel. threadsafe bool Whether multiple requests can be dispatched to this version at once. vm bool Whether to deploy this version in a container on a virtual machine. flexible runtime settings FlexibleRuntimeSettings Settings for App Engine flexible runtimes. app engine apis bool Allows App Engine second generation runtimes to access the legacy bundled services. beta settings map<string, string> Metadata settings that are supplied to this version to enable beta runtime features. env string App Engine execution environment for this version.
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instance class automatic scaling in the standard environment: automatic scaling.min idle instances automatic scaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: serving status manual scaling.instances Flexible environment serving status automatic scaling in the flexible environment: automatic scaling.min total instances automatic scaling.max total instances automatic scaling.cool down period sec automatic scaling.cpu utilization.target utilization manual scaling in the flexible environment: manual scaling.instances Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .
- Authorization requires the following IAM permission on the specified resource parent : appengine.applications.get view AuthorizedCertificateView Controls the set of fields returned in the LIST response. page size int32 Maximum results to return per page. page token string Continuation token for fetching the next page of results.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.

### Accessing the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- This cURL command deploys the resources defined in the app.json configuration file to the v1 version of the default service in the application of project MY PROJECT ID . curl - X POST - T "app.json" - H "Content-Type: application/json" - H "Authorization: Bearer [MY ACCESS TOKEN]" https : // appengine . googleapis . com / v1 / apps /[ MY PROJECT ID ]/ services / default / versions What's next Deploying Versions To Your Application Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Important: This API requires that you request access to one of the following OAuth 2.0 scopes in your code: https://www.googleapis.com/auth/appengine.admin https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-platform.read-only The Authorization section on each method's reference page describes which OAuth scopes are required.
- Configuring your project and creating credentials To configure your Google Cloud project and create credentials: Enable both the App Engine Admin API and Cloud Storage API in your Google Cloud project: Enable both APIs Create credentials that users and applications use to access the Admin API in your project.
- Before users or applications can use the App Engine Admin API, you as a Google Cloud project owner must first enable the API in your project and then create credentials that users or applications can use to authorize HTTP requests.

