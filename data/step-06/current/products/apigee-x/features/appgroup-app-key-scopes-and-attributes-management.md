---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.146Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "AppGroup App Key scopes and attributes management"
feature_slug: "appgroup-app-key-scopes-and-attributes-management"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "scopes"
  - "appgroups"
  - "appgroup"
  - "attributes"
  - "management"
---

# AppGroup App Key scopes and attributes management

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

AppGroups now support adding scopes and attributes to an AppGroup App Key through a POST operation.

## Extended Definition

AppGroups now support adding scopes and attributes to an AppGroup App Key through a POST operation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### AccessEntity policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample XPath, retrieves the second API resource (URI) from the API product named weather free : / ApiProduct [ '@name=weather free' ]/ ApiResources / ApiResource [ 1 ]/ text () Sample profile returned as XML: < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < ApiProduct name = "weather free" > < ApiResources > < ApiResource > / forecastrss , / reports < / ApiResource > < / ApiResources > < ApprovalType>auto < / ApprovalType > < Attributes > < Attribute > < Name>description < / Name > < Value>Introductory API Product < / Value > < / Attribute > < Attribute > < Name>developer . quota . interval < / Name > < Value>1 < / Value > < / Attribute > < Attribute > < Name>developer . quota . limit < / Name > < Value>1 < / Value > < / Attribute > < Attribute > < Name>developer . quota . timeunit < / Name > < Value>minute < / Value > < / Attribute > < Attribute > < Name>servicePlan < / Name > < Value>Introductory < / Value > < / Attribute > < / Attributes > < CreatedAt>1355847839224 < / CreatedAt > < CreatedBy>andrew @apigee . com < / CreatedBy > < Description>Free API Product < / Description > < DisplayName>Free API Product < / DisplayName > < Environments / > < LastModifiedAt>1355847839224 < / LastModifiedAt > < LastModifiedBy>andrew @apigee . com < / LastModifiedBy > < Proxies / > < Scopes / > < / ApiProduct > Consumer key curl https://apigee.googleapis.com/v1/organizations/ $ORG developers/ $DEVELOPER EMAIL /apps/ $APP /keys/ $KEY \ -X GET \ -H "Accept:text/xml" \ -H "Authorization: Bearer $TOKEN" See also Get key details for a developer app in the Apigee API reference.
- Sample profile: < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < App name = "thomas-app" > < AccessType>read < / AccessType > < ApiProducts / > < Credentials > < Credential > < Attributes / > < ConsumerKey>wrqOOOiPArFI0WRoB1gAJMRbOguekJ5w < / ConsumerKey > < ConsumerSecret>WvOhDrJ8m6kzz7Ni < / ConsumerSecret > < ApiProducts > < ApiProduct > < Name>FreeProduct < / Name > < Status>approved < / Status > < / ApiProduct > < / ApiProducts > < Scopes / > < Status>approved < / Status > < / Credential > < / Credentials > < AppFamily>default < / AppFamily > < AppId>ab308c13 - bc99 - 4 c50 - 8434 - 0e0 ed1b86075 < / AppId > < Attributes > < Attribute > < Name>DisplayName < / Name > < Value>Tom ' s Weather App < / Value > < / Attribute > < / Attributes > < CallbackUrl>http : // tom . app / login < / CallbackUrl > < CreatedAt>1362502872727 < / CreatedAt > < CreatedBy>admin @apigee . com < / CreatedBy > < DeveloperId>PFK8IwOeAOW01JKA < / DeveloperId > < LastModifiedAt>1362502872727 < / LastModifiedAt > < LastModifiedBy>admin @apigee . com < / LastModifiedBy > < Scopes / > < Status>approved < / Status > < / App > API product curl https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT \ -X GET \ -H "Accept:text/xml" \ -H "Authorization: Bearer $TOKEN" See also Get API product in the Apigee API reference.
- Sample XPath: /Credential/ApiProducts/ApiProduct[Name='weather free']/Status/text() Sample profile: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <Credential> <Attributes/> <ConsumerKey>XLotL3PRxNkUGXhGAFDPOr6fqtvAhuZe</ConsumerKey> <ConsumerSecret>iNUyEaOOh96KR3YL</ConsumerSecret> <ApiProducts> <ApiProduct> <Name>weather free</Name> <Status>approved</Status> </ApiProduct> </ApiProducts> <Scopes/> <Status>approved</Status> </Credential> Developer curl https://apigee.googleapis.com/v1/organizations/ $ORG developers/ $DEVELOPER EMAIL \ -X GET \ -H "Accept:text/xml" \ -H "Authorization: Bearer $TOKEN" See also Get developer in the Apigee API reference.
- For information about AppGroups and supported functionality, see Using AppGroups to organize app ownership .

### Organizing client app ownership \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership](https://docs.cloud.google.com/apigee/docs/api-platform/publish/organizing-client-app-ownership)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Managing AppGroups using the Apigee APIs Use these APIs to manage AppGroups in your orgs: Activities Link View and manage AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups View and manage the apps that belong to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps View and manage the app keys associated to AppGroups https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.apps.keys View and manage AppGroup subscriptions to API products https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions See also AppGroup subscription management .
- Important: AppGroups provide an abstraction to manage grouped developers as a single entity for the purposes of app ownership and management.
- Description Permissions Manage AppGroups and associated apps and keys. apigee.appgroups.list apigee.appgroups.get apigee.appgroups.create apigee.appgroups.update apigee.appgroups.delete Manage AppGroup apps. apigee.appgroupapps.list apigee.appgroupapps.get apigee.appgroupapps.create apigee.appgroupapps.manage apigee.appgroupapps.delete Manage app keys for AppGroups: apigee.appkeys.get apigee.appkeys.create apigee.appkeys.manage apigee.appkeys.delete Manage AppGroup subscriptions and monetization configurations. apigee.appgroupbalances.adjust apigee.appgroupbalances.get apigee.appgroupbalances.update apigee.appgroupmonetizationconfigs.get apigee.appgroupmonetizationconfigs.update apigee.appgroupsubscriptions.create apigee.appgroupsubscriptions.get apigee.appgroupsubscriptions.list apigee.appgroupsubscriptions.update Viewing and managing AppGroups This section shows how to view and manage AppGroups.
- View and manage AppGroup monetization configurations and balances (if enabled) https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.subscriptions https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.appgroups.balance See also Use AppGroups to manage API product subscriptions and Manage prepaid balances .

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Required Type Complex object Parent Element N/A Child Elements <Add> <AssignTo> <AssignVariable> <Copy> <DisplayName> <IgnoreUnresolvedVariables> <Remove> <Set> The <AssignMessage> element uses the following syntax: Syntax The <AssignMessage> element uses the following syntax: < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < !-- All AssignMessage child elements are optional -- > < Add > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < / Add > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < AssignVariable > < Name> VARIABLE NAME < / Name > < PropertySetRef> SOURCE VARIABLE < / PropertySetRef > < Ref> SOURCE VARIABLE < / Ref > < ResourceURL> RESOURCE URL OR TEMPLATE < / ResourceURL > < Template> MESSAGE TEMPLATE < / Template > or < Template ref = ' TEMPLATE VARIABLE ' >< / Template > < Value> VARIABLE VALUE < / Value > < / AssignVariable > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < !-- Copy all headers -- > < Headers / > < !-- or , copy specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Path > [ false true ] < / Path > < Payload > [ false true ] < / Payload > < !-- Can also be an empty array ( < QueryParams / > ) --> < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode > [ false true ] < / StatusCode > < Verb > [ false true ] < / Verb > < Version > [ false true ] < / Version > < / Copy > < DisplayName> POLICY DISPLAY NAME < / DisplayName > < IgnoreUnresolvedVariables > [ true false ] < / IgnoreUnresolvedVariables > < !-- Can also be empty to remove everything from the message ( < Remove / > ) -- > < Remove > < !-- Remove all form parameters -- > < FormParams / > < !-- or , remove specific form parameters by name -- > < FormParams > < FormParam name = " FORMPARAM NAME " / > < !-- or -- > < FormParam name = " FORMPARAM NAME " > [ false true ] < / FormParam > ... < / FormParams > < !-- Remove all headers -- > < Headers / > < !-- or , remove specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Payload > [ false true ] < / Payload > < !-- Remove all query parameters -- > < QueryParams / > < !-- or , remove specific query parameters by name -- > < QueryParams > < QueryParam name = " QUERYPARAM NAME " / > < !-- or -- > < QueryParam name = " QUERYPARAM NAME " > [ false true ] < / QueryParam > ... < / QueryParams > < / Remove > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Default Policy The following example shows the default settings when you add an AssignMessage policy to your flow in the Apigee UI.
- Optional Type Complex type Parent Element <Set> Child Elements <HeaderName> <GoogleAccessToken> <GoogleIdToken> The Authentication element uses the following syntax: Syntax <AssignMessage> ... <Set> <Authentication> <HeaderName> HEADER NAME </HeaderName> --EITHER-- <GoogleAccessToken> <Scopes> <Scope> SCOPE </Scope> ... </Scopes> <GoogleAccessToken> --OR-- <GoogleIDToken> <Audience ref=" FLOW VARIABLE "> TARGET URL </Audience> </GoogleIDToken> </Authentication> </Set> ... </AssignMessage> Using Access Token The following example shows the GoogleAccessToken element: <Authentication> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> Using ID Token The following example shows the GoogleIDToken element: <Authentication> <GoogleIDToken> <Audience>https://httpserver0-bar.run.app</Audience> </GoogleIDToken> </Authentication> Using HeaderName The following example shows the HeaderName element: <Authentication> <HeaderName>Authorization</HeaderName> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scopes> </Scopes> </GoogleAccessToken> </Authentication> <HeaderName> (child of <Authentication> ) By default, when an Authentication configuration is present, Apigee generates a bearer token and injects it into the Authorization header in the message sent to the target system.
- The <Set> element uses the following syntax: Syntax < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Example 1 The following example sets a specific header.
- Optional Type Boolean Parent Element <Copy> Child Elements None The <Version> element uses the following syntax: Syntax <AssignMessage continueOnError="[false true]" enabled="[true false]" name=" POLICY NAME " > <Copy source=" VARIABLE NAME "> <Version>[false true]</Version> </Copy> </AssignMessage> Example 1 The following example sets <Version> to true on the request, which copies the version from the default request object to a new, custom request object: < AssignMessage name = "copy-version-1" > < Copy source = "request" > < Version>true < / Version > < / Copy > < AssignTo createNew = "true" transport = "http" type = "request" > MyCustomRequest < / AssignTo > < / AssignMessage > You can use <Copy> / <Version> only when the following criteria are met: The Message type for both source and destination is request <DisplayName> Use in addition to the name attribute to label the policy in the management UI proxy editor with a different, more natural-sounding name.

