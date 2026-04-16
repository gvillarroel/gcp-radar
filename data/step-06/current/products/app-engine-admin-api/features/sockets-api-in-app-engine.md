---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.536Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Sockets API in App Engine"
feature_slug: "sockets-api-in-app-engine"
latest_feature_date: "2018-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/trying-the-api"
keywords:
  - "sockets"
  - "app"
  - "engine"
  - "became"
  - "generally"
  - "available"
---

# Sockets API in App Engine

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The Sockets API became generally available in App Engine.

## Extended Definition

The Sockets API became generally available in App Engine.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/admin-api/trying-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/trying-the-api)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Create a connector using an existing subnet : gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region REGION \ --subnet SUBNET NAME \ --subnet-project HOST PROJECT ID \ --min-instances MIN \ --max-instances MAX \ --machine-type MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector, matching Compute Engine naming conventions , with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Any value specified here in a request is ignored. flexible environment available bool App Engine flexible environment is available in the given location.
- Fields standard environment available bool App Engine standard environment is available in the given location.
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instance class automatic scaling in the standard environment: automatic scaling.min idle instances automatic scaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: serving status manual scaling.instances Flexible environment serving status automatic scaling in the flexible environment: automatic scaling.min total instances automatic scaling.max total instances automatic scaling.cool down period sec automatic scaling.cpu utilization.target utilization manual scaling in the flexible environment: manual scaling.instances Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .

### Trying Out the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/trying-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/trying-the-api)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- In Step 3, the Request URI field is pre-populated with the example URI: https://appengine.googleapis.com/v1/apps/{appsId}/services/default You must replace {appsId} with your Google Cloud Platform project ID and then click Send the request to view the details about the default service of your project.
- Home Technology areas App Engine Admin API Reference Send feedback Trying Out the Admin API Stay organized with collections Save and categorize content based on your preferences.
- Tip: You can also click List possible operations and then scroll to the App Engine Admin API section to view a list of HTTP request.

