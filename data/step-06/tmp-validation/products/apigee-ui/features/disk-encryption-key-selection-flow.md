---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.438Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Disk encryption key selection flow"
feature_slug: "disk-encryption-key-selection-flow"
latest_feature_date: "2022-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "selection"
  - "encryption"
  - "disk"
  - "management"
  - "flow"
  - "instance"
---

# Disk encryption key selection flow

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The instance management UI lets users select a disk encryption key from a list and create a new key through the interface.

## Extended Definition

The instance management UI lets users select a disk encryption key from a list and create a new key through the interface.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The following table maps each Apigee UI feature page to its current location in the Apigee UI: Feature Apigee UI Proxies Proxy development > API proxies Go to API proxies Sharedflows Proxy development > Sharedflows Go to Sharedflows Offline debug Proxy development > Offline debug Go to Offline debug API products Distribution > API products Go to API products Portals Distribution > Portals Go to Portals Monetization Distribution > Monetization Go to Monetization Developers Distribution > Developers Go to Developers Apps Distribution > Apps Go to Apps API monitoring Proxy development > API monitoring Go to API monitoring API metrics Analytics > API metrics Go to API metrics Developer Engagement Analytics > Developer analysis Go to Developer analysis Traffic Composition Analytics > Developer analysis Go to Developer analysis Devices Analytics > End user analysis Go to End user analysis Geomap Analytics > End user analysis Go to End user analysis Custom reports Analytics > Custom reports Go to Custom reports Instances Management > Instances Go to Instances Data collectors Management > Data collectors Go to Data collectors Environments Management > Environments Go to Environments Endpoint attachments Management > Endpoint attachments Go to Endpoint attachments Roles Identity and Access Management (IAM) > Roles Go to Roles Users IAM Go to IAM Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Using the Apigee UI, you can: Build an API proxy Deploy and undeploy API proxies to your cluster Create, edit, and delete environments and environment groups Assign environment-level access control to users Work with target servers , KVMs , and shared flows Use the Apigee UI To open the Apigee UI, go to the Apigee API management page.
- Whether you are a Pay-as-you-go or Subscription customer, this view provides you with a snapshot of key resource usage, as well as shortcuts to other monitoring and identity management resources for your organization, including: Cloud Monitoring Cloud Billing Identity and Access Management Explore Apigee API management features From the main navigation menu, you can explore the range of Apigee API management features available for your organization, as described in the table below: Main navigation menu Purpose Proxy development Develop and deploy API proxies .
- Apigee API management From the Overview page, you can: Get started as a new Apigee user Test your Apigee runtime View key resource usage metrics Explore Apigee API management features Get started as a new Apigee user If you just are new to Apigee, you can begin your API management journey with quickstart learning options launched from the Overview page: Begin by deploying your first proxy : Watch a video tutorial that walks you through the steps required to create and deploy an API proxy.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- The XML specification for the proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> </ProxyEndpoints> </APIProxy> Configure the EventFlow in the proxy: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoints> </APIProxy> Follow the steps in Deploy an API proxy to deploy the proxy to the environment you created earlier.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $ORG NAME $REGION $INSTANCE $VPC NETWORK NAME $SUBNET Configure an authentication token To configure an authentication token, run the following command: export TOKEN = $( gcloud auth print-access-token ) echo $TOKEN Configure a load balancer for a backend service The following sections describe the steps to set up a global external Application Load Balancer for a backend service, using httpbin.org as an example: Create a global external Application Load Balancer .
- Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export ORG NAME = $PROJECT ID export REGION = REGION export INSTANCE = INSTANCE export VPC NETWORK NAME = VPC NETWORK NAME export SUBNET = SUBNET Where: PROJECT ID is the ID of the project with your Apigee instance.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- Enable the API Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export REGION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.
- To configure token verification, place an OAuthV2 policy with the VerifyAccessToken operation at the very beginning of the API proxy flow (the beginning of the ProxyEndpoint Preflow ).
- The MCP Discovery proxy is not supported for use with Apigee Edge for Public cloud or Apigee Edge for Private Cloud plugin instances in API hub.

