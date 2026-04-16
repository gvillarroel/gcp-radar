---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.165Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Private Service Connect endpoint attachments management"
feature_slug: "private-service-connect-endpoint-attachments-management"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
keywords:
  - "private"
  - "connect"
  - "endpoint"
  - "attachments"
  - "management"
  - "apigee"
  - "ui"
  - "supports"
---

# Private Service Connect endpoint attachments management

Product: Apigee UI
Coverage: LOW

## Step 02 Summary

The Apigee UI supports creating and managing Private Service Connect endpoint attachments.

## Extended Definition

The Apigee UI supports creating and managing Private Service Connect endpoint attachments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)

## Supporting Pages

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference-required-14`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- When the REST/SOAP/GraphQL endpoint already exists or can be easily implemented When using Apigee or Apigee hybrid on Google Cloud, consider using Cloud Functions or Cloud Run to host such logic.
- Consider the following recommended strategies for handling large message sizes in Apigee: We highly recommend isolating API proxies that frequently handle large payloads in a dedicated environment to avoid a potential "noisy neighbor" scenario.
- Home Documentation Application development Apigee Guides Send feedback Best practices for API proxy design and development with Apigee Stay organized with collections Save and categorize content based on your preferences.
- If you're connecting between proxies that are in the same organization and environment, be sure to see Chaining API proxies together for more on implementing a local connection that avoids unnecessary network overhead.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- The XML specification for the proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> </ProxyEndpoints> </APIProxy> Configure the EventFlow in the proxy: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoints> </APIProxy> Follow the steps in Deploy an API proxy to deploy the proxy to the environment you created earlier.
- Attach the new environment to the new environment group: curl -H "Authorization: Bearer $TOKEN " -X POST \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /envgroups/ ENV GROUP NAME /attachments" -H "content-type:application/json" -d \ '{ "name": " ENV GROUP NAME ", "environment": " ENV NAME " }' Where: ENV GROUP NAME is the name of the environment group you are creating.
- Attach the newly created environment to your Apigee instance: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /instances/ $INSTANCE /attachments" -H "Content-Type:application/json" -d \ '{ "environment": " ENV NAME " }' Where ENV NAME is the name of the environment you created in the previous step.

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-docs-reference-required-14`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- TargetEndpoint Settings for the outbound HTTP connection (from Apigee to the backend service), request and response flows, and policy attachments.
- ProxyEndpoint Settings for the inbound HTTP connection (from requesting apps to Apigee), request and response flows, and policy attachments.
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- The following is a sample ProxyEndpoint configuration: <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request> <Step> <Name>my-set-integration-request-policy</Name> </Step> </Request> </PreFlow> <Flows/> <PostFlow name="PostFlow"/> <HTTPProxyConnection> <BasePath>/integration-endpoint-test</BasePath> <Properties/> </HTTPProxyConnection> <RouteRule name="default"> <IntegrationEndpoint>my-int-endpoint</IntegrationEndpoint> </RouteRule> </ProxyEndpoint> In the sample ProxyEndpoint configuration, Apigee performs the following tasks: In the PreFlow, executes the policy named my-set-integration-request-policy , which sets the integration request object and integration flow variables.

