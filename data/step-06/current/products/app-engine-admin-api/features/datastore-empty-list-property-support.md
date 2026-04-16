---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.573Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Datastore empty-list property support"
feature_slug: "datastore-empty-list-property-support"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps"
keywords:
  - "datastore"
  - "empty"
  - "list"
  - "property"
  - "enabled"
  - "properties"
  - "represent"
  - "value"
---

# Datastore empty-list property support

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

Enabled Datastore properties to represent an empty list value.

## Extended Definition

Enabled Datastore properties to represent an empty list value.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps)

## Supporting Pages

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped.
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- Defaults to a runtime-specific value. max idle instances int32 Maximum number of idle instances that should be maintained for this version. max total instances int32 Maximum number of instances that should be started to handle requests for this version. max pending latency Duration Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. min idle instances int32 Minimum number of idle instances that should be maintained for this version.
- Authorization requires the following IAM permission on the specified resource parent : appengine.applications.get view AuthorizedCertificateView Controls the set of fields returned in the LIST response. page size int32 Maximum results to return per page. page token string Continuation token for fetching the next page of results.

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The kind of the entity for the query. properties A list of properties to include as columns of the index, in the order to be sorted: properties used in equality filters first, followed by the property used in inequality filters, then the sort orders and their directions.
- Each element in this list has the following elements: name The datastore name of the property. direction The direction to sort, either asc for ascending or desc for descending.
- Each element in the list represents an index for the application.
- The following is an example of an index.yaml file: indexes : - kind : Cat ancestor : no properties : - name : name - name : age direction : desc - kind : Cat properties : - name : name direction : asc - name : whiskers direction : desc - kind : Store ancestor : yes properties : - name : business direction : asc - name : owner direction : asc The syntax of index.yaml is the YAML format.

### REST Resource: apps \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Any value specified here in a request is ignored. iap object ( IdentityAwareProxy ) gcrDomain string The Google Container Registry domain used for storing managed build docker images for this application. databaseType enum ( DatabaseType ) The type of the Cloud Firestore or Cloud Datastore database associated with this application. featureSettings object ( FeatureSettings ) The feature specific settings to be used in the application.
- IdentityAwareProxy Identity-Aware Proxy JSON representation { "enabled" : boolean , "oauth2ClientId" : string , "oauth2ClientSecret" : string , "oauth2ClientSecretSha256" : string } Fields enabled boolean Whether the serving infrastructure will authenticate and authorize all incoming requests.
- JSON representation { "splitHealthChecks" : boolean , "useContainerOptimizedOs" : boolean } Fields splitHealthChecks boolean Boolean value indicating if split health checks should be used instead of the legacy health checks.
- JSON representation { "name" : string , "id" : string , "dispatchRules" : [ { object ( UrlDispatchRule ) } ] , "authDomain" : string , "locationId" : string , "codeBucket" : string , "defaultCookieExpiration" : string , "servingStatus" : enum ( ServingStatus ) , "defaultHostname" : string , "defaultBucket" : string , "iap" : { object ( IdentityAwareProxy ) } , "gcrDomain" : string , "databaseType" : enum ( DatabaseType ) , "featureSettings" : { object ( FeatureSettings ) } } Fields name string Full path to the Application resource in the API.

