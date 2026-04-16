---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.569Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Faceted Search"
feature_slug: "faceted-search"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates"
keywords:
  - "faceted"
  - "search"
  - "reached"
  - "availability"
  - "status"
---

# Faceted Search

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

Faceted Search reached general availability status.

## Extended Definition

Faceted Search reached general availability status.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)

## Supporting Pages

### "Faceted search \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- Source ID: `site-docs-reference-required-5`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use this parameter to override the default behavior of faceted search. options = FacetOptions(discover facet limit=5, discover facet value limit=10, depth=6000); Parameter Description Default discover facet limit Number of facets to discover if facet discovery is turned on.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Faceted search Stay organized with collections Save and categorize content based on your preferences.
- Retrieving facet results When you use faceted search parameters in a query, the aggregated facet information comes with the query result itself.
- Using a faceted search to retrieve facet information You can ask the search backend to discover the most frequently used facets for you.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instance class automatic scaling in the standard environment: automatic scaling.min idle instances automatic scaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: serving status manual scaling.instances Flexible environment serving status automatic scaling in the flexible environment: automatic scaling.min total instances automatic scaling.max total instances automatic scaling.cool down period sec automatic scaling.cpu utilization.target utilization manual scaling in the flexible environment: manual scaling.instances Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .
- Any value specified here in a request is ignored. default cookie expiration Duration Cookie expiration policy for this application. serving status ServingStatus Serving status of this application. default hostname string Output only.
- To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch method.

### "REST Resource: apps.authorizedCertificates \_|\_ App Engine Admin API \_\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- Source ID: `site-api-reference`
- Final score: 21
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource: AuthorizedCertificate JSON representation CertificateRawData JSON representation ManagedCertificate JSON representation ManagementStatus Methods Resource: AuthorizedCertificate An SSL certificate that a user has been authorized to administer.
- JSON representation { "lastRenewalTime" : string , "status" : enum ( ManagementStatus ) } Fields lastRenewalTime string ( Timestamp format) Time at which the certificate was last renewed.
- Any value specified here in a request is ignored. status enum ( ManagementStatus ) Status of certificate management.
- Enums MANAGEMENT STATUS UNSPECIFIED OK Certificate was successfully obtained and inserted into the serving system.

