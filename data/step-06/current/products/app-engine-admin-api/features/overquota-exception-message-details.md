---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.565Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "OverQuota exception message details"
feature_slug: "overquota-exception-message-details"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/Shared.Types/ListOperationsResponse"
keywords:
  - "overquota"
  - "exception"
  - "message"
  - "details"
  - "messages"
  - "now"
  - "include"
  - "available"
---

# OverQuota exception message details

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

OverQuota exception messages now include available error details when present.

## Extended Definition

OverQuota exception messages now include available error details when present.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/Shared.Types/ListOperationsResponse)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your description, because it could be exposed in error messages.
- Don't use personally identifiable information (PII) or sensitive data in display names because this name could be exposed in error messages.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Reserved names: "default", "latest", and any name with the prefix "ah-". inbound services[] InboundServiceType Before an application can receive email or XMPP messages, the application must be configured to enable the service. instance class string Instance class that is used to run this version.
- Any value specified here in a request is ignored. warning[] string Durable messages that persist on every operation poll.
- INBOUND SERVICE XMPP MESSAGE Allows an application to receive instant messages.
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.

### ListOperationsResponse \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-api-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. details[] object A list of messages that carry the error details.
- JSON representation { "code" : integer , "message" : string , "details" : [ { "@type" : string , field1 : ... , ... } ] } Fields code integer The status code, which should be an enum value of google.rpc.Code . message string A developer-facing error message, which should be in English.
- Each Status message contains three pieces of data: error code, error message, and error details.
- JSON representation Operation JSON representation Status JSON representation The response message for Operations.ListOperations .

