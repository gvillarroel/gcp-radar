---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.551Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "dev_appserver.py security response headers"
feature_slug: "dev-appserver-py-security-response-headers"
latest_feature_date: "2017-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server"
keywords:
  - "dev"
  - "appserver"
  - "py"
  - "security"
  - "response"
  - "headers"
  - "app"
  - "engine"
---

# dev_appserver.py security response headers

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The App Engine dev_appserver.py admin console began returning security response headers, including X-Frame-Options, X-XSS-Protection, and Content-Security-Policy.

## Extended Definition

The App Engine dev_appserver.py admin console began returning security response headers, including X-Frame-Options, X-XSS-Protection, and Content-Security-Policy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)

## Supporting Pages

### Using the local development server | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)
- Source ID: `feature-recovery-http`
- Final score: 221
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev_appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD_SDK_ROOT /bin/dev_appserver.py Note the path to the dev_appserver.py for later.
- To start the local development server: In the directory that contains your app.yaml configuration file, run the dev_appserver.py command. dev_appserver.py Specify the directory path to your app, for example: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py PATH_TO_YOUR_APP Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py app . yaml To change the port, you include the --port option: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py -- port = 9999 PATH_TO_YOUR_APP goapp serve The goapp serve command is included with the original App Engine SDK for Go and wraps the underlying dev_appserver.py Python tool.
- Clear the local Datastore To clear the local Datastore for an application, invoke the local development server as follows: python3 CLOUD_SDK_ROOT /bin/dev_appserver.py --clear_datastore=yes app.yaml Change the local Datastore location To change the location used for the Datastore file, use the --datastore_path option: python3 CLOUD_SDK_ROOT /bin/dev_appserver.py --datastore_path=/tmp/myapp_datastore app.yaml Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- To specify the automatic ID assignment policy, use the --auto_id_policy option: python3 CLOUD_SDK_ROOT /bin/dev_appserver.py --auto_id_policy=sequential where --auto_id_policy can be one of the following: scattered : (default) IDs are assigned from a non-repeating sequence of approximately uniformly distributed integers. sequential : IDs are assigned from the sequence of consecutive integers.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- The path can refer to text matched in groupings in the URL pattern. upload path regex string Regular expression that matches the file paths for all files that should be referenced by this handler. http headers map<string, string> HTTP headers to use for all responses from these URLs. mime type string MIME type used to serve all files served by this handler.
- Authorization requires the following IAM permission on the specified resource parent : appengine.applications.get view AuthorizedCertificateView Controls the set of fields returned in the LIST response. page size int32 Maximum results to return per page. page token string Continuation token for fetching the next page of results.
- Authorization requires the following IAM permission on the specified resource parent : appengine.versions.list view VersionView Controls the set of fields returned in the List response. page size int32 Maximum results to return per page. page token string Continuation token for fetching the next page of results.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Security scanner The Google Cloud Web Security Scanner discovers vulnerabilities by crawling your App Engine app, following all that links within the scope of your starting URLs, and attempting to exercise as many user inputs and event handlers as possible.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of app security Stay organized with collections Save and categorize content based on your preferences.
- OK Security is a core feature of the Google Cloud, but there are still steps you should take to protect your App Engine app and identify vulnerabilities.
- You can run security scans from the Google Cloud console to identify security vulnerabilities in your App Engine app.

