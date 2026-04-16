---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.155Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "CMEK organization policy constraint enforcement"
feature_slug: "cmek-organization-policy-constraint-enforcement"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
keywords:
  - "constraint"
  - "enforcement"
  - "cmek"
  - "enforces"
  - "organization"
  - "policy"
---

# CMEK organization policy constraint enforcement

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee now enforces CMEK organization policy constraints and blocks non-compliant feature configurations.

## Extended Definition

Apigee now enforces CMEK organization policy constraints and blocks non-compliant feature configurations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)

## Supporting Pages

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you have a Google Cloud organization policy that uses a resource location constraint ( constraints/gcp.resourceLocations ), the constraint will apply to the following Apigee resources that are created when Apigee is provisioned: Control plane Consumer data Runtime Endpoints attachment Analytics If you are provisioning a new Apigee organization within a Google Cloud project with a resource location constraint applied, you must ensure that the location constraint is compatible with the control plane location specified for your Apigee organization: If you provision an Apigee organization without data residency, the resource location constraint in your Google Cloud organization policy must be set to global .
- Data residency and organization policy constraints Google Cloud's organization policy constraints make it possible to define a set of locations where location-based Google Cloud resources can be created for your Google Cloud organization.
- If you provision an Apigee organization with data residency, confirm that any resource location constraint that may be set in your Google Cloud organization policy does not exclude the region you select for your control plane data.
- Something similar to the following is returned: { "organization": "my-project", "projectIds": [ "my-project" ], "projectId": "my-project" "location": "us" } Data residency encryption See Introduction to CMEK .

### AccessEntity policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample XPath: /Developer/Attributes/Attribute[Name='my custom attribute']/Value/text() /Developer/Email/text() Sample profile: < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Developer > < Apps > < App>weatherappx < / App > < App>weatherapp < / App > < / Apps > < Email>ntesla @ theramin . com < / Email > < DeveloperId>4Y4xd0KRZ1wmHJqu < / DeveloperId > < FirstName>Nikola < / FirstName > < LastName>Tesla < / LastName > < UserName>theramin < / UserName > < OrganizationName>apigee - pm < / OrganizationName > < Status>active < / Status > < Attributes > < Attribute > < Name>project type < / Name > < Value>public < / Value > < / Attribute > < / Attributes > < CreatedAt>1349797040634 < / CreatedAt > < CreatedBy>rsaha @ apigee . com < / CreatedBy > < LastModifiedAt>1349797040634 < / LastModifiedAt > < LastModifiedBy>rsaha @ apigee . com < / LastModifiedBy > < / Developer > Flow variables When the entity profile specified in the AccessEntity policy is retrieved, the profile object is added to the message context as a variable.
- You can use the profile information returned by this policy to enable dynamic behavior, such as conditional endpoint routing, flow execution, policy enforcement.
- GetDeveloperProfile < / Source > < VariablePrefix>developer < / VariablePrefix > < XMLPayload > < Variable name = "email" type = "string" > < !-- You parse elements from the developer profile using XPath . -- > < XPath > / Developer / Email < / XPath > < / Variable > < / XMLPayload > < / ExtractVariables > The following AssignMessage policy retrieves the developer email set by the ExtractVariables policy . < !-- We 'll use this policy to return the variables set in the developer profile, just so that we can easily see them in the response . -- > < AssignMessage name = "EchoVariables" > < AssignTo createNew = "false" type = "response" >< / AssignTo > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < Set > < Headers > < Header name = "X-Developer-email" > { developer . email } < / Header > < / Headers > < / Set > < / AssignMessage > Element reference The basic of structure of an AccessEntity policy is: < AccessEntity name = "policy name" > < EntityType value = "entity type" / > < EntityIdentifier ref = "entity identifier" type = "identifier type" / > < SecondaryIdentifier ref = "secondary identifier" type = "identifier type" / > < / AccessEntity > You can access multiple entities of the same type by grouping them in an Identifiers element: < AccessEntity name = "name of the policy" > < EntityType value = "type of entity" / > < Identifiers > < Identifier > < EntityIdentifier ref = "reference to entity identifier" type = "identifier type" / > < SecondaryIdentifier ref = "reference to secondary entity identifier" type = "identifier type" / >< ! -- optional -- > < / Identifier > < Identifier > < EntityIdentifier ref = "reference to entity identifier" type = "identifier type" / > < SecondaryIdentifier ref = "reference to secondary entity identifier" type = "identifier type" / >< ! -- optional -- > < / Identifier > < / Identifiers > < / AccessEntity > <AccessEntity> attributes <AccessEntity async="false" continueOnError="false" enabled="true" name="policy name"> The following table describes attributes that are common to all policy parent elements: Attribute Description Default Presence name The internal name of the policy.
- Sample XPath, retrieves the second API resource (URI) from the API product named weather free : / ApiProduct [ '@name=weather free' ]/ ApiResources / ApiResource [ 1 ]/ text () Sample profile returned as XML: < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < ApiProduct name = "weather free" > < ApiResources > < ApiResource > / forecastrss , / reports < / ApiResource > < / ApiResources > < ApprovalType>auto < / ApprovalType > < Attributes > < Attribute > < Name>description < / Name > < Value>Introductory API Product < / Value > < / Attribute > < Attribute > < Name>developer . quota . interval < / Name > < Value>1 < / Value > < / Attribute > < Attribute > < Name>developer . quota . limit < / Name > < Value>1 < / Value > < / Attribute > < Attribute > < Name>developer . quota . timeunit < / Name > < Value>minute < / Value > < / Attribute > < Attribute > < Name>servicePlan < / Name > < Value>Introductory < / Value > < / Attribute > < / Attributes > < CreatedAt>1355847839224 < / CreatedAt > < CreatedBy>andrew @apigee . com < / CreatedBy > < Description>Free API Product < / Description > < DisplayName>Free API Product < / DisplayName > < Environments / > < LastModifiedAt>1355847839224 < / LastModifiedAt > < LastModifiedBy>andrew @apigee . com < / LastModifiedBy > < Proxies / > < Scopes / > < / ApiProduct > Consumer key curl https://apigee.googleapis.com/v1/organizations/ $ORG developers/ $DEVELOPER EMAIL /apps/ $APP /keys/ $KEY \ -X GET \ -H "Accept:text/xml" \ -H "Authorization: Bearer $TOKEN" See also Get key details for a developer app in the Apigee API reference.

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- For details, see Authentication element in the ServiceCallout policy reference. <Authentication> element error reference If you are using the <Authentication> element, you can find possible error messages and troubleshooting tips for deployment and runtime errors in the Errors section of the ServiceCallout policy documentation. <Authentication> element examples The following example shows how to call a service deployed on Cloud Run as the target using the Authentication element to generate an OpenID Connect token needed to authenticate the call: <TargetEndpoint name="TargetEndpoint-1"> <HTTPTargetConnection> <Properties/> <URL>https://cloudrun-hostname.a.run.app/test</URL> <Authentication> <GoogleIDToken> <Audience>https://cloudrun-hostname.a.run.app/test</Audience> </GoogleIDToken> </Authentication> </HTTPTargetConnection> </TargetEndpoint> The following example shows how to call a TargetService that points to Cloud Run using the Authentication element to generate an OpenID Connect token needed to authenticate the call.
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- The following is a sample ProxyEndpoint configuration: <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request> <Step> <Name>my-set-integration-request-policy</Name> </Step> </Request> </PreFlow> <Flows/> <PostFlow name="PostFlow"/> <HTTPProxyConnection> <BasePath>/integration-endpoint-test</BasePath> <Properties/> </HTTPProxyConnection> <RouteRule name="default"> <IntegrationEndpoint>my-int-endpoint</IntegrationEndpoint> </RouteRule> </ProxyEndpoint> In the sample ProxyEndpoint configuration, Apigee performs the following tasks: In the PreFlow, executes the policy named my-set-integration-request-policy , which sets the integration request object and integration flow variables.

