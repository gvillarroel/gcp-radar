---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.568Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Endpoints API discoverable annotation flag"
feature_slug: "endpoints-api-discoverable-annotation-flag"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps"
keywords:
  - "endpoints"
  - "discoverable"
  - "annotation"
  - "flag"
  - "developers"
  - "can"
  - "set"
  - "boolean"
---

# Endpoints API discoverable annotation flag

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

Developers can set a discoverable boolean on the @Api annotation to disable API discovery behavior.

## Extended Definition

Developers can set a discoverable boolean on the @Api annotation to disable API discovery behavior.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps)

## Supporting Pages

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- If endpoints api service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app. entrypoint Entrypoint The entrypoint for the application. vpc access connector VpcAccessConnector Enables VPC connectivity for standard apps.
- Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag. handlers[] UrlMap An ordered list of URL-matching patterns that should be applied to incoming requests.
- Only the auto value is supported for Node.js in the App Engine standard environment, for example "script": "auto" . api endpoint ApiEndpointHandler Uses API Endpoints to handle requests.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.
- For more information about the required and optional flags for creating firewall rules, refer to the documentation for gcloud compute firewall-rules create .

### REST Resource: apps \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IdentityAwareProxy Identity-Aware Proxy JSON representation { "enabled" : boolean , "oauth2ClientId" : string , "oauth2ClientSecret" : string , "oauth2ClientSecretSha256" : string } Fields enabled boolean Whether the serving infrastructure will authenticate and authorize all incoming requests.
- Once the legacy 'healthCheck' behavior is deprecated, and this value is always true, this setting can be removed. useContainerOptimizedOs boolean If true, use Container-Optimized OS base image for VMs, rather than a base Debian image.
- JSON representation { "splitHealthChecks" : boolean , "useContainerOptimizedOs" : boolean } Fields splitHealthChecks boolean Boolean value indicating if split health checks should be used instead of the legacy health checks.
- For details, see the Google Developers Site Policies .

