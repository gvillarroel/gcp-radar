---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.175Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Resource location organization policy constraint"
feature_slug: "resource-location-organization-policy-constraint"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
  - "https://docs.cloud.google.com/apigee/docs/apihub/locations"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy"
keywords:
  - "location"
  - "restrict"
  - "constraint"
  - "resource"
  - "organization"
  - "policy"
---

# Resource location organization policy constraint

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee can restrict creation of location-based resources to specific regions by using an Organization Policy Service constraint.

## Extended Definition

Apigee can restrict creation of location-based resources to specific regions by using an Organization Policy Service constraint.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy)

## Supporting Pages

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you have a Google Cloud organization policy that uses a resource location constraint ( constraints/gcp.resourceLocations ), the constraint will apply to the following Apigee resources that are created when Apigee is provisioned: Control plane Consumer data Runtime Endpoints attachment Analytics If you are provisioning a new Apigee organization within a Google Cloud project with a resource location constraint applied, you must ensure that the location constraint is compatible with the control plane location specified for your Apigee organization: If you provision an Apigee organization without data residency, the resource location constraint in your Google Cloud organization policy must be set to global .
- Data residency and organization policy constraints Google Cloud's organization policy constraints make it possible to define a set of locations where location-based Google Cloud resources can be created for your Google Cloud organization.
- If you provision an Apigee organization with data residency, confirm that any resource location constraint that may be set in your Google Cloud organization policy does not exclude the region you select for your control plane data.
- The admin who provisions Apigee must: Inform Apigee users, such as API developers and other admins, about the data residency configuration Set the location org policy as described in Restricting Resource Locations API developers, admins, or other users of Apigee management APIs must use the new data residency API service endpoint .

### API hub locations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If yes, then ensure the following: Ensure that the organization does not have the Google Cloud Platform - Resource Location Restriction organization policy constraint added.
- If your organization has a Resource Location Restriction policy that prevents resources from being created in the fallback location, provisioning will fail.
- Americas Region description Region name Details Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Montreal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Europe Region description Region name Details Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Asia-Pacific Region description Region name Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Middle East Region description Region name Dammam me-central2 Doha me-central1 Tel Aviv me-west1 Africa Region description Region name Johannesburg africa-south1 Cloud Scheduler location fallbacks API hub uses Cloud Scheduler for some of its features.
- API hub location Cloud Scheduler fallback location Johannesburg ( africa-south1 ) Belgium ( europe-west1 ) Delhi ( asia-south2 ) Mumbai ( asia-south1 ) Melbourne ( australia-southeast2 ) Sydney ( australia-southeast1 ) Finland ( europe-north1 ) Warsaw ( europe-central2 ) Madrid ( europe-southwest1 ) Belgium ( europe-west1 ) Netherlands ( europe-west4 ) Belgium ( europe-west1 ) Milan ( europe-west8 ) Zurich ( europe-west6 ) Paris ( europe-west9 ) Belgium ( europe-west1 ) Berlin ( europe-west10 ) Frankfurt ( europe-west3 ) Turin ( europe-west12 ) Zurich europe-west6 Doha ( me-central1 ) Mumbai ( asia-south1 ) Dammam ( me-central2 ) Mumbai ( asia-south1 ) Tel Aviv ( me-west1 ) Frankfurt ( europe-west3 ) Toronto ( northamerica-northeast2 ) Montreal ( northamerica-northeast1 ) Santiago ( southamerica-west1 ) São Paulo ( southamerica-east1 ) Columbus ( us-east5 ) Northern Virginia ( us-east4 ) Dallas ( us-south1 ) Iowa ( us-central1 ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### AccessEntity policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample XPath, retrieves the second API resource (URI) from the API product named weather free : / ApiProduct [ '@name=weather free' ]/ ApiResources / ApiResource [ 1 ]/ text () Sample profile returned as XML: < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < ApiProduct name = "weather free" > < ApiResources > < ApiResource > / forecastrss , / reports < / ApiResource > < / ApiResources > < ApprovalType>auto < / ApprovalType > < Attributes > < Attribute > < Name>description < / Name > < Value>Introductory API Product < / Value > < / Attribute > < Attribute > < Name>developer . quota . interval < / Name > < Value>1 < / Value > < / Attribute > < Attribute > < Name>developer . quota . limit < / Name > < Value>1 < / Value > < / Attribute > < Attribute > < Name>developer . quota . timeunit < / Name > < Value>minute < / Value > < / Attribute > < Attribute > < Name>servicePlan < / Name > < Value>Introductory < / Value > < / Attribute > < / Attributes > < CreatedAt>1355847839224 < / CreatedAt > < CreatedBy>andrew @apigee . com < / CreatedBy > < Description>Free API Product < / Description > < DisplayName>Free API Product < / DisplayName > < Environments / > < LastModifiedAt>1355847839224 < / LastModifiedAt > < LastModifiedBy>andrew @apigee . com < / LastModifiedBy > < Proxies / > < Scopes / > < / ApiProduct > Consumer key curl https://apigee.googleapis.com/v1/organizations/ $ORG developers/ $DEVELOPER EMAIL /apps/ $APP /keys/ $KEY \ -X GET \ -H "Accept:text/xml" \ -H "Authorization: Bearer $TOKEN" See also Get key details for a developer app in the Apigee API reference.
- Sample XPath: /Developer/Attributes/Attribute[Name='my custom attribute']/Value/text() /Developer/Email/text() Sample profile: < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Developer > < Apps > < App>weatherappx < / App > < App>weatherapp < / App > < / Apps > < Email>ntesla @ theramin . com < / Email > < DeveloperId>4Y4xd0KRZ1wmHJqu < / DeveloperId > < FirstName>Nikola < / FirstName > < LastName>Tesla < / LastName > < UserName>theramin < / UserName > < OrganizationName>apigee - pm < / OrganizationName > < Status>active < / Status > < Attributes > < Attribute > < Name>project type < / Name > < Value>public < / Value > < / Attribute > < / Attributes > < CreatedAt>1349797040634 < / CreatedAt > < CreatedBy>rsaha @ apigee . com < / CreatedBy > < LastModifiedAt>1349797040634 < / LastModifiedAt > < LastModifiedBy>rsaha @ apigee . com < / LastModifiedBy > < / Developer > Flow variables When the entity profile specified in the AccessEntity policy is retrieved, the profile object is added to the message context as a variable.
- GetDeveloperProfile < / Source > < VariablePrefix>developer < / VariablePrefix > < XMLPayload > < Variable name = "email" type = "string" > < !-- You parse elements from the developer profile using XPath . -- > < XPath > / Developer / Email < / XPath > < / Variable > < / XMLPayload > < / ExtractVariables > The following AssignMessage policy retrieves the developer email set by the ExtractVariables policy . < !-- We 'll use this policy to return the variables set in the developer profile, just so that we can easily see them in the response . -- > < AssignMessage name = "EchoVariables" > < AssignTo createNew = "false" type = "response" >< / AssignTo > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < Set > < Headers > < Header name = "X-Developer-email" > { developer . email } < / Header > < / Headers > < / Set > < / AssignMessage > Element reference The basic of structure of an AccessEntity policy is: < AccessEntity name = "policy name" > < EntityType value = "entity type" / > < EntityIdentifier ref = "entity identifier" type = "identifier type" / > < SecondaryIdentifier ref = "secondary identifier" type = "identifier type" / > < / AccessEntity > You can access multiple entities of the same type by grouping them in an Identifiers element: < AccessEntity name = "name of the policy" > < EntityType value = "type of entity" / > < Identifiers > < Identifier > < EntityIdentifier ref = "reference to entity identifier" type = "identifier type" / > < SecondaryIdentifier ref = "reference to secondary entity identifier" type = "identifier type" / >< ! -- optional -- > < / Identifier > < Identifier > < EntityIdentifier ref = "reference to entity identifier" type = "identifier type" / > < SecondaryIdentifier ref = "reference to secondary entity identifier" type = "identifier type" / >< ! -- optional -- > < / Identifier > < / Identifiers > < / AccessEntity > <AccessEntity> attributes <AccessEntity async="false" continueOnError="false" enabled="true" name="policy name"> The following table describes attributes that are common to all policy parent elements: Attribute Description Default Presence name The internal name of the policy.
- Sample profile: < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < App name = "thomas-app" > < AccessType>read < / AccessType > < ApiProducts / > < Credentials > < Credential > < Attributes / > < ConsumerKey>wrqOOOiPArFI0WRoB1gAJMRbOguekJ5w < / ConsumerKey > < ConsumerSecret>WvOhDrJ8m6kzz7Ni < / ConsumerSecret > < ApiProducts > < ApiProduct > < Name>FreeProduct < / Name > < Status>approved < / Status > < / ApiProduct > < / ApiProducts > < Scopes / > < Status>approved < / Status > < / Credential > < / Credentials > < AppFamily>default < / AppFamily > < AppId>ab308c13 - bc99 - 4 c50 - 8434 - 0e0 ed1b86075 < / AppId > < Attributes > < Attribute > < Name>DisplayName < / Name > < Value>Tom ' s Weather App < / Value > < / Attribute > < / Attributes > < CallbackUrl>http : // tom . app / login < / CallbackUrl > < CreatedAt>1362502872727 < / CreatedAt > < CreatedBy>admin @apigee . com < / CreatedBy > < DeveloperId>PFK8IwOeAOW01JKA < / DeveloperId > < LastModifiedAt>1362502872727 < / LastModifiedAt > < LastModifiedBy>admin @apigee . com < / LastModifiedBy > < Scopes / > < Status>approved < / Status > < / App > API product curl https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT \ -X GET \ -H "Accept:text/xml" \ -H "Authorization: Bearer $TOKEN" See also Get API product in the Apigee API reference.

