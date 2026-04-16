---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.143Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee API hub automatic enablement for new organizations"
feature_slug: "apigee-api-hub-automatic-enablement-for-new-organizations"
latest_feature_date: "2025-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
keywords:
  - "automatically"
  - "enablement"
  - "automatic"
  - "enabled"
  - "organizations"
  - "regions"
---

# Apigee API hub automatic enablement for new organizations

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee API hub is automatically enabled for new Apigee organizations in supported regions.

## Extended Definition

Apigee API hub is automatically enabled for new Apigee organizations in supported regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- For example, shown below is a target endpoint that uses a reference to the keystore: <SSLInfo> <Enabled>true</Enabled> <ClientAuthEnabled>false</ClientAuthEnabled> <KeyStore>ref://keystoreref</KeyStore> <KeyAlias>myKeyAlias</KeyAlias> </SSLInfo> Use the following POST API call to create the reference named keystoreref : curl "https://apigee.googleapis.com/v1/organizations/ {org} /environments/ {env} /references" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -d '<ResourceReference name=" keystoreref "> <Refers> myTestKeystore </Refers> <ResourceType>KeyStore</ResourceType> </ResourceReference>' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .
- In this example, the GoogleAccessToken element is configured to generate a Google Auth Token to authenticate the target request: <HTTPTargetConnection> <Authentication> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> <URL> https://secretmanager.googleapis.com/v1/projects/project-id/secrets/secret-id </URL> </HTTPTargetConnection> The following example shows how to automatically set the audience of the GoogleIDToken.
- Suppose the request path is /foobar and the target server URL is https://xyz.com , the audience of the GoogleIDToken will automatically be set to https://xyz.com/foobar .

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Within your centralized Apigee API hub instance, you can attach those projects to view the results of those jobs and automatically compare them to "known" APIs documented in API hub.
- The following regions are currently supported for API observation and Shadow APIs: australia-southeast1 europe-west2 europe-west9 us-central1 us-east1 us-west1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable, disable, and delete observation jobs To change whether an existing observation job is enabled (active), select either Enable or Disable from the Actions menu in the row for that job in the Observation jobs page.
- View API Observations To view API Observations for enabled observation jobs, choose the API Observations tab and then select the Observation job from the list.

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- How to view the region If you have already provisioned your org ( PROJECT ID ) for use with data residency, you can use the getProjectMapping API to display the regions associated with a project: Authorize gcloud to access the Cloud Platform with your Google user credentials: gcloud auth login Call the API: curl -X GET https://apigee.googleapis.com/v1/organizations/ PROJECT ID :getProjectMapping \ -H "Authorization: Bearer $(gcloud auth print-access-token)" Where PROJECT ID is your Apigee organization name or Google Cloud project ID.
- Data residency and FedRAMP compliance Apigee is authorized as a FedRAMP High service for organizations where data residency is enabled.
- The following Apigee offerings are not in scope under Apigee's FedRAMP ATO: API analytics Advanced API Security Integrated portals Apigee evaluation organizations Apigee data collectors For more information about the significance of a FedRAMP ATO, see FedRAMP Compliance .
- Data residency: Prepend the control plane region to the service endpoint: CONTROL PLANE LOCATION -apigee.googleapis.com For example: curl "https:// CONTROL PLANE LOCATION -apigee.googleapis.com /v1/organizations?parent=projects/$PROJECT ID" ...

