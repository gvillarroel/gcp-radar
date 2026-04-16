---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.156Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Cloud IAM-based API authorization and authentication"
feature_slug: "cloud-iam-based-api-authorization-and-authentication"
latest_feature_date: "2024-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy"
keywords:
  - "consumers"
  - "invoke"
  - "authorization"
  - "authentication"
  - "based"
  - "lets"
---

# Cloud IAM-based API authorization and authentication

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Cloud IAM-based API authorization and authentication lets API consumers invoke Apigee APIs using required Google Cloud IAM roles or permissions.

## Extended Definition

Cloud IAM-based API authorization and authentication lets API consumers invoke Apigee APIs using required Google Cloud IAM roles or permissions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy)

## Supporting Pages

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Optional Type Complex type Parent Element <Set> Child Elements <HeaderName> <GoogleAccessToken> <GoogleIdToken> The Authentication element uses the following syntax: Syntax <AssignMessage> ... <Set> <Authentication> <HeaderName> HEADER NAME </HeaderName> --EITHER-- <GoogleAccessToken> <Scopes> <Scope> SCOPE </Scope> ... </Scopes> <GoogleAccessToken> --OR-- <GoogleIDToken> <Audience ref=" FLOW VARIABLE "> TARGET URL </Audience> </GoogleIDToken> </Authentication> </Set> ... </AssignMessage> Using Access Token The following example shows the GoogleAccessToken element: <Authentication> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> Using ID Token The following example shows the GoogleIDToken element: <Authentication> <GoogleIDToken> <Audience>https://httpserver0-bar.run.app</Audience> </GoogleIDToken> </Authentication> Using HeaderName The following example shows the HeaderName element: <Authentication> <HeaderName>Authorization</HeaderName> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scopes> </Scopes> </GoogleAccessToken> </Authentication> <HeaderName> (child of <Authentication> ) By default, when an Authentication configuration is present, Apigee generates a bearer token and injects it into the Authorization header in the message sent to the target system.
- The Authorization header, if present, is left unmodified and also sent in the request. < Authentication > < HeaderName ref = 'my-variable' > Authorization < / HeaderName > < GoogleAccessToken > < Scopes > < Scopes>https : // www . googleapis . com / auth / cloud - platform < / Scopes > < / Scopes > / GoogleAccessToken > < / Authentication > <GoogleAccessToken> (child of <Authentication> ) Generates Google OAuth 2.0 tokens to make authenticated calls to Google services.
- Optional Type String Parent Element <Authentication> Child Elements None The HeaderName element uses the following syntax: Syntax <AssignMessage> ... <Authentication> <HeaderName> HEADER NAME </HeaderName> <GoogleAccessToken> ... </GoogleAccessToken> </Authentication> ... </AssignMessage> With static string In this example, the generated bearer token is added, by default, to a header named Authorization that is sent to the target system.
- The Authorization header, if present, is left unmodified and also sent in the request. <Authentication> <HeaderName>Authorization</HeaderName> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> With variable reference In this example, the generated bearer token is added, by default, to a header named Authorization that is sent to the target system.

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- The Authorization header, if present, is left unmodified and also sent in the request. < TargetEndpoint name = "TargetEndpoint-1" > < HTTPTargetConnection > < Authentication > < HeaderName>X - Serverless - Authorization < / HeaderName > < GoogleIDToken > < Audience ref = "flow.variable.audience" > https : // cloudrun - hostname . a . run . app < / Audience > < / GoogleIDToken > < / Authentication > < LoadBalancer > < Server name = "cloud-run-target" / > < / LoadBalancer > < / HTTPTargetConnection > < / TargetEndpoint > The following example shows how to call a TargetService that points to the Google Secret Manager service.
- For details, see Authentication element in the ServiceCallout policy reference. <Authentication> element error reference If you are using the <Authentication> element, you can find possible error messages and troubleshooting tips for deployment and runtime errors in the Errors section of the ServiceCallout policy documentation. <Authentication> element examples The following example shows how to call a service deployed on Cloud Run as the target using the Authentication element to generate an OpenID Connect token needed to authenticate the call: <TargetEndpoint name="TargetEndpoint-1"> <HTTPTargetConnection> <Properties/> <URL>https://cloudrun-hostname.a.run.app/test</URL> <Authentication> <GoogleIDToken> <Audience>https://cloudrun-hostname.a.run.app/test</Audience> </GoogleIDToken> </Authentication> </HTTPTargetConnection> </TargetEndpoint> The following example shows how to call a TargetService that points to Cloud Run using the Authentication element to generate an OpenID Connect token needed to authenticate the call.
- For example, shown below is a target endpoint that uses a reference to the keystore: <SSLInfo> <Enabled>true</Enabled> <ClientAuthEnabled>false</ClientAuthEnabled> <KeyStore>ref://keystoreref</KeyStore> <KeyAlias>myKeyAlias</KeyAlias> </SSLInfo> Use the following POST API call to create the reference named keystoreref : curl "https://apigee.googleapis.com/v1/organizations/ {org} /environments/ {env} /references" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -d '<ResourceReference name=" keystoreref "> <Refers> myTestKeystore </Refers> <ResourceType>KeyStore</ResourceType> </ResourceReference>' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .

### BasicAuthentication policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Consider that you have a key/value map with the following entry: { "encrypted" : true, "entry" : [ { "name" : "username", "value" : "MyUsername }, { "name" : "password", "value" : "MyPassword } ], "name" : "BasicAuthCredentials" } Attach the following KeyValueMapOperations policies before the BasicAuthentication policy to be able to extract the values for your <User> and <Password> elements from the key/value store and populate them to the variables credentials.username and credentials.password . < KeyValueMapOperations name = "getCredentials" mapIdentifier = "BasicAuthCredentials" > < Scope>apiproxy < / Scope > < Get assignTo = "credentials.username" index = '1' > < Key > < Parameter>username < / Parameter > < / Key > < / Get > < Get assignTo = "credentials.password" index = '1' > < Key > < Parameter>password < / Parameter > < / Key > < / Get > < / KeyValueMapOperations > Inbound decoding <BasicAuthentication name="DecodeBaseAuthHeaders"> <DisplayName>Decode Basic Authentication Header</DisplayName> <Operation>Decode</Operation> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <User ref="request.header.username" /> <Password ref="request.header.password" /> <Source>request.header.Authorization</Source> </BasicAuthentication> In this policy sample, the policy decodes the username and password from the Authorization HTTP header, as specified by the <Source> element.
- Element reference The element reference describes the elements and attributes of the BasicAuthentication policy. <BasicAuthentication async="false" continueOnError="false" enabled="true" name="Basic-Authentication-1"> <DisplayName>Basic Authentication 1</DisplayName> <Operation>Encode</Operation> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <User ref="request.queryparam.username" /> <Password ref="request.queryparam.password" /> <AssignTo createNew="false">request.header.Authorization</AssignTo> <Source>request.header.Authorization</Source> </BasicAuthentication> <BasicAuthentication> attributes <BasicAuthentication async="false" continueOnError="false" enabled="true" name="Basic-Authentication-1"> The following table describes attributes that are common to all policy parent elements: Attribute Description Default Presence name The internal name of the policy.
- Samples Outbound encoding <BasicAuthentication name="ApplyBasicAuthHeader"> <DisplayName>ApplyBasicAuthHeader</DisplayName> <Operation>Encode</Operation> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <User ref="BasicAuth.credentials.username" /> <Password ref="BasicAuth.credentials.password" /> <AssignTo createNew="false">request.header.Authorization</AssignTo> </BasicAuthentication> In the sample policy configuration above, the username and password to be encoded are derived from the variables specified by the ref attributes on the <User> and <Password> elements.
- Home Documentation Application development Apigee Reference Send feedback BasicAuthentication policy Stay organized with collections Save and categorize content based on your preferences.

