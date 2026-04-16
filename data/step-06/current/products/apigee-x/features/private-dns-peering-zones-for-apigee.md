---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.153Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Private DNS peering zones for Apigee"
feature_slug: "private-dns-peering-zones-for-apigee"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/locations"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure"
keywords:
  - "zones"
  - "peering"
  - "without"
  - "organizations"
  - "private"
---

# Private DNS peering zones for Apigee

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee organizations without VPC peering can now resolve private domains by peering DNS zones with Apigee.

## Extended Definition

Apigee organizations without VPC peering can now resolve private domains by peering DNS zones with Apigee.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)

## Supporting Pages

### Apigee locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following resources outline the steps required to select a control plane hosting jurisdiction, based on your organization type: Organization type Provisioning method Documentation Subscription organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering science Pay-as-you-go organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering science Available Apigee API control plane hosting jurisdictions The Apigee control plane directly binds to the API host name. apigee.googleapis.com has a global control plane; if you want to use a regionalized control plane, the API host name is CONTROL PLANE LOCATION -apigee.googleapis.com .
- The following resources outline the steps required to select a runtime hosting region, based on your organization type: Organization type Provisioning method Documentation Evaluation organization Apigee UI in Cloud console Command line interface Provisioning an eval org Provision an eval org with VPC peering Provision an eval org without VPC peering Subscription organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Pay-as-you-go organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Available Apigee runtime regions The following table lists available regions for the Apigee runtime.
- The following resources outline the steps required to select an Apigee API Analytics region, based on your organization type: Organization type Provisioning method Documentation Evaluation Apigee UI in Cloud console Command line interface Provisioning an eval org Provision an eval org with VPC peering Provision an eval org without VPC peering Subscription Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Pay-as-you-go Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Available Apigee API Analytics regions The following table lists available regions for Apigee API Analytics.
- Google manages these resources so that they are available redundantly in all zones within that region .

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- For example, shown below is a target endpoint that uses a reference to the keystore: <SSLInfo> <Enabled>true</Enabled> <ClientAuthEnabled>false</ClientAuthEnabled> <KeyStore>ref://keystoreref</KeyStore> <KeyAlias>myKeyAlias</KeyAlias> </SSLInfo> Use the following POST API call to create the reference named keystoreref : curl "https://apigee.googleapis.com/v1/organizations/ {org} /environments/ {env} /references" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -d '<ResourceReference name=" keystoreref "> <Refers> myTestKeystore </Refers> <ResourceType>KeyStore</ResourceType> </ResourceReference>' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .
- To later change the reference to point to a different keystore, ensuring that the alias has the same name, use the following PUT call: curl "https://apigee.googleapis.com/v1/organizations/ {org} /environments/ {env} /references/ keystoreref " \ -X PUT \ -H "Authorization: Bearer $TOKEN" \ -d '<ResourceReference name=" keystoreref "> <Refers> myNewKeystore </Refers> <ResourceType>KeyStore</ResourceType> </ResourceReference>' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .
- Enabling two-way TLS typically requires that you set up both a truststore and a keystore on Apigee. false No KeyStore A keystore containing private keys used for outbound client authentication N/A Yes (if ClientAuthEnabled is true) KeyAlias The key alias of the private key used for outbound client authentication N/A Yes (if ClientAuthEnabled is true) IgnoreValidationErrors Indicates whether validation errors are ignored.

### Understanding organizations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following curl request returns a list of all API proxies in an organization using the organizations API : curl https://apigee.googleapis.com/v1/organizations/ ORG ID /apis While you may have created only one organization, you can be authorized in other organizations as a user or administrator with specific permissions.
- For example, define some users as Organization Administrators and Operations Administrators with privileges to modify the organization and its components, and define other users with permissions to create API proxies and API products, but without the privileges to modify other users.
- For example, your company might define multiple organizations on Apigee to support different developer communities, even though internally, the same people build all of the API proxies and API products and are therefore members of all of your organizations.
- While the rest of this topic goes into more depth about organizations, here are a few practical points: An Apigee organization is distinct from and subsidiary to a Google Cloud organization.

