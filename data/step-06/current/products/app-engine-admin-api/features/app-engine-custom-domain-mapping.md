---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.552Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine custom domain mapping"
feature_slug: "app-engine-custom-domain-mapping"
latest_feature_date: "2017-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest"
keywords:
  - "app"
  - "engine"
  - "custom"
  - "domain"
  - "mapping"
  - "domains"
  - "via"
  - "admin"
---

# App Engine custom domain mapping

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

Support for mapping custom domains via App Engine Admin API methods and gcloud commands became generally available.

## Extended Definition

Support for mapping custom domains via App Engine Admin API methods and gcloud commands became generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest)

## Supporting Pages

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- Authorization requires the following IAM permission on the specified resource parent : appengine.applications.update domain mapping DomainMapping Domain mapping configuration. override strategy DomainOverrideStrategy Whether the domain creation should override any existing mappings for this domain.
- Authorization requires the following IAM permission on the specified resource name : appengine.applications.update DeleteDomainMappingRequest Request message for DomainMappings.DeleteDomainMapping .
- Authorization requires the following IAM permission on the specified resource name : appengine.applications.update domain mapping DomainMapping A domain mapping containing the updated resource.

### App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc)
- Source ID: `site-docs-reference-3`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- UpdateAuthorizedCertificate Updates the specified SSL certificate. google.appengine.v1beta.AuthorizedDomains Methods ListAuthorizedDomains Lists all domains the user is authorized to administer. google.appengine.v1beta.DomainMappings Methods CreateDomainMapping Maps a domain to an application.
- UpdateAuthorizedCertificate Updates the specified SSL certificate. google.appengine.v1.AuthorizedDomains Methods ListAuthorizedDomains Lists all domains the user is authorized to administer. google.appengine.v1.DomainMappings Methods CreateDomainMapping Maps a domain to an application.
- UpdateDomainMapping Updates the specified domain mapping. google.appengine.v1beta.Firewall Methods BatchUpdateIngressRules Replaces the entire firewall ruleset in one bulk operation.
- UpdateDomainMapping Updates the specified domain mapping. google.appengine.v1.Firewall Methods BatchUpdateIngressRules Replaces the entire firewall ruleset in one bulk operation.

### App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.apps REST Resource: v1.apps.authorizedCertificates REST Resource: v1.apps.authorizedDomains REST Resource: v1.apps.domainMappings REST Resource: v1.apps.firewall.ingressRules REST Resource: v1.apps.locations REST Resource: v1.apps.operations REST Resource: v1.apps.services REST Resource: v1.apps.services.versions REST Resource: v1.apps.services.versions.instances REST Resource: v1beta.apps REST Resource: v1beta.apps.authorizedCertificates REST Resource: v1beta.apps.authorizedDomains REST Resource: v1beta.apps.domainMappings REST Resource: v1beta.apps.firewall.ingressRules REST Resource: v1beta.apps.locations REST Resource: v1beta.apps.operations REST Resource: v1beta.apps.services REST Resource: v1beta.apps.services.versions REST Resource: v1beta.apps.services.versions.instances Service: appengine.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1beta.apps.authorizedDomains Methods list GET /v1beta/{parent=apps/ }/authorizedDomains Lists all domains the user is authorized to administer.
- REST Resource: v1.apps.authorizedDomains Methods list GET /v1/{parent=apps/ }/authorizedDomains Lists all domains the user is authorized to administer.
- REST Resource: v1beta.apps.domainMappings Methods create POST /v1beta/{parent=apps/ }/domainMappings Maps a domain to an application. delete DELETE /v1beta/{name=apps/ /domainMappings/ } Deletes the specified domain mapping. get GET /v1beta/{name=apps/ /domainMappings/ } Gets the specified domain mapping. list GET /v1beta/{parent=apps/ }/domainMappings Lists the domain mappings on an application. patch PATCH /v1beta/{name=apps/ /domainMappings/ } Updates the specified domain mapping.

