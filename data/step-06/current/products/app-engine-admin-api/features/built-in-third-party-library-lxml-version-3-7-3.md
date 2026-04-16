---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.554Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Built-in third-party library lxml version 3.7.3"
feature_slug: "built-in-third-party-library-lxml-version-3-7-3"
latest_feature_date: "2017-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "built"
  - "third"
  - "party"
  - "library"
  - "lxml"
  - "version"
  - "app"
  - "engine"
---

# Built-in third-party library lxml version 3.7.3

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

App Engine added lxml version 3.7.3 to its built-in third-party libraries.

## Extended Definition

App Engine added lxml version 3.7.3 to its built-in third-party libraries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- Only returned in GET requests if view=FULL is set. libraries[] Library Configuration for third-party Python runtime libraries that are required by the application.
- Library Third-party Python runtime library that is required by the application.
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instance class automatic scaling in the standard environment: automatic scaling.min idle instances automatic scaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: serving status manual scaling.instances Flexible environment serving status automatic scaling in the flexible environment: automatic scaling.min total instances automatic scaling.max total instances automatic scaling.cool down period sec automatic scaling.cpu utilization.target utilization manual scaling in the flexible environment: manual scaling.instances Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .

### "Structuring web services in App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- You can serve your app's static content directly from that app in App Engine, host your static content on a Google Cloud option like Cloud Storage, or use a third-party content delivery network (CDN).
- You also have the option to use an external or third-party database if that database is supported by your language and accessible from your App Engine instance.
- Directory structure Each version of your App Engine service is defined in an app.yaml configuration file.
- Similarly, both service2 and service3 are in separate directories, which contain each service's files, although service3 includes two versions of the YAML configuration file: In the following example, a single service has the optional dispatch.yaml file and two configuration files that represent different versions of that service, service1.yaml and service2.yaml : Design considerations for instance uptime Hardware or software failures that cause early termination or frequent instance restarts can occur without warning and can take considerable time to resolve.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Client () Make an authenticated API request buckets = list ( storage client . list buckets ()) print ( buckets ) Ruby project id = "Your Google Cloud project ID" require "google/cloud/storage" If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. storage = Google :: Cloud :: Storage . new project : project id Make an authenticated API request storage . buckets . each do bucket puts bucket . name end By default, the app's environment contains credentials from the default App Engine service account .
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- If you don't specify credentials when constructing // the client, the client library will look for credentials in the // environment. const storage = new Storage (); // Makes an authenticated API request. async function listBuckets () { try { const results = await storage . getBuckets (); const [ buckets ] = results ; console . log ( 'Buckets:' ); buckets . forEach ( bucket = > { console . log ( bucket . name ); }); } catch ( err ) { console . error ( 'ERROR:' , err ); } } listBuckets (); PHP // Imports the Cloud Storage client library. use Google\Cloud\Storage\StorageClient; / Authenticate to a cloud client library using a service account implicitly. @param string $projectId The Google project ID. / function auth cloud implicit($projectId) { $config = [ 'projectId' => $projectId, ]; If you don't specify credentials when constructing the client, the client library will look for credentials in the environment. $storage = new StorageClient($config); Make an authenticated API request (listing storage buckets) foreach ($storage->buckets() as $bucket) { printf('Bucket: %s' .

