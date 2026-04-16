---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.550Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "dev_appserver.py origin header rejection"
feature_slug: "dev-appserver-py-origin-header-rejection"
latest_feature_date: "2017-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server"
keywords:
  - "dev"
  - "appserver"
  - "py"
  - "origin"
  - "header"
  - "rejection"
  - "app"
  - "engine"
---

# dev_appserver.py origin header rejection

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The App Engine dev_appserver.py admin console was updated to reject inbound requests that include an Origin header.

## Extended Definition

The App Engine dev_appserver.py admin console was updated to reject inbound requests that include an Origin header.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)

## Supporting Pages

### Using the local development server | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)
- Source ID: `feature-recovery-http`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To start the local development server: In the directory that contains your app.yaml configuration file, run the dev_appserver.py command. dev_appserver.py Specify the directory path to your app, for example: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py PATH_TO_YOUR_APP Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py app . yaml To change the port, you include the --port option: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py -- port = 9999 PATH_TO_YOUR_APP goapp serve The goapp serve command is included with the original App Engine SDK for Go and wraps the underlying dev_appserver.py Python tool.
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev_appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD_SDK_ROOT /bin/dev_appserver.py Note the path to the dev_appserver.py for later.
- Clear the local Datastore To clear the local Datastore for an application, invoke the local development server as follows: python3 CLOUD_SDK_ROOT /bin/dev_appserver.py --clear_datastore=yes app.yaml Change the local Datastore location To change the location used for the Datastore file, use the --datastore_path option: python3 CLOUD_SDK_ROOT /bin/dev_appserver.py --datastore_path=/tmp/myapp_datastore app.yaml Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- To specify the automatic ID assignment policy, use the --auto_id_policy option: python3 CLOUD_SDK_ROOT /bin/dev_appserver.py --auto_id_policy=sequential where --auto_id_policy can be one of the following: scattered : (default) IDs are assigned from a non-repeating sequence of approximately uniformly distributed integers. sequential : IDs are assigned from the sequence of consecutive integers.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instance class automatic scaling in the standard environment: automatic scaling.min idle instances automatic scaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: serving status manual scaling.instances Flexible environment serving status automatic scaling in the flexible environment: automatic scaling.min total instances automatic scaling.max total instances automatic scaling.cool down period sec automatic scaling.cpu utilization.target utilization manual scaling in the flexible environment: manual scaling.instances Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .
- Defaults to the default channel. threadsafe bool Whether multiple requests can be dispatched to this version at once. vm bool Whether to deploy this version in a container on a virtual machine. flexible runtime settings FlexibleRuntimeSettings Settings for App Engine flexible runtimes. app engine apis bool Allows App Engine second generation runtimes to access the legacy bundled services. beta settings map<string, string> Metadata settings that are supplied to this version to enable beta runtime features. env string App Engine execution environment for this version.
- The path can refer to text matched in groupings in the URL pattern. upload path regex string Regular expression that matches the file paths for all files that should be referenced by this handler. http headers map<string, string> HTTP headers to use for all responses from these URLs. mime type string MIME type used to serve all files served by this handler.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.

