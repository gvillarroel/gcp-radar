---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.392Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "Workforce Identity Federation Microsoft Entra ID group mapping"
feature_slug: "workforce-identity-federation-microsoft-entra-id-group-mapping"
latest_feature_date: "2025-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation"
  - "https://docs.cloud.google.com/iam/docs/configure-scim-ms-entra"
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "workforce"
  - "identity"
  - "federation"
  - "microsoft"
  - "entra"
  - "id"
  - "group"
  - "mapping"
---

# Workforce Identity Federation Microsoft Entra ID group mapping

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Workforce Identity Federation can map up to 400 groups from Microsoft Entra ID.

## Extended Definition

Workforce Identity Federation can map up to 400 groups from Microsoft Entra ID.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- [https://docs.cloud.google.com/iam/docs/configure-scim-ms-entra](https://docs.cloud.google.com/iam/docs/configure-scim-ms-entra)
- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### "Configure Workforce Identity Federation \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 356
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For IdP-specific instructions, see the following: Configure Microsoft Entra ID-based Workforce Identity Federation Configure Okta-based Workforce Identity Federation Before you begin Make sure that you have a Google Cloud organization set up.
- In the example that follows, the command grants the Storage Admin role ( roles/storage.admin ) to all identities within the group GROUP ID : gcloud projects add-iam-policy-binding my-project \ --role = "roles/storage.admin" \ --member = "principalSet://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL ID /group/ GROUP ID " For more information about the principal format, see Principal identifiers for Workforce Identity Federation.
- Delete workforce identity federation encryption keys To delete SAML encryption keys run the following command: gcloud iam workforce-pools providers keys delete KEY ID \ --workforce-pool WORKFORCE POOL ID \ --provider WORKFORCE PROVIDER ID \ --location global Replace the following: KEY ID : the key name WORKFORCE POOL ID : the pool ID WORKFORCE PROVIDER ID : the workforce identity pool provider ID Supported SAML encryption algorithms Workforce identity federation supports the following key transport algorithms: http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p http://www.w3.org/2009/xmlenc11#rsa-oaep" http://www.w3.org/2001/04/xmlenc#rsa-1 5" Workforce identity federation supports the following block encryption algorithms: http://www.w3.org/2001/04/xmlenc#aes128-cbc http://www.w3.org/2001/04/xmlenc#aes192-cbc http://www.w3.org/2001/04/xmlenc#aes256-cbc http://www.w3.org/2009/xmlenc11#aes128-gcm http://www.w3.org/2009/xmlenc11#aes256-gcm SAML X.509 signing key requirements The following key specifications apply to SAML X.509 signing keys: An RSA public key that is wrapped in an X.509 v3 certificate .
- In Google Cloud, to create the provider, do the following: gcloud Code flow To create an OIDC provider that uses authorization code flow for web sign-in, run the following command: gcloud iam workforce-pools providers create-oidc WORKFORCE PROVIDER ID \ --workforce-pool= WORKFORCE POOL ID \ --display-name=" DISPLAY NAME " \ --description=" DESCRIPTION " \ --issuer-uri=" ISSUER URI " \ --client-id=" OIDC CLIENT ID " \ --client-secret-value=" OIDC CLIENT SECRET " \ --web-sso-response-type="code" \ --web-sso-assertion-claims-behavior="merge-user-info-over-id-token-claims" \ --web-sso-additional-scopes=" WEB SSO ADDITIONAL SCOPES " \ --attribute-mapping=" ATTRIBUTE MAPPING " \ --attribute-condition=" ATTRIBUTE CONDITION " \ --jwk-json-path=" JWK JSON PATH " \ --detailed-audit-logging \ --location=global Replace the following: WORKFORCE PROVIDER ID : A unique workforce identity pool provider ID.

### "Configure SCIM in Microsoft Entra ID \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/configure-scim-ms-entra](https://docs.cloud.google.com/iam/docs/configure-scim-ms-entra)
- Source ID: `site-docs-root-2`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows you how to map attributes in token claims and SCIM attributes: Google attribute Workforce identity pool provider mapping SCIM tenant mapping google.subject assertion.oid user.externalId google.subject assertion.attributes['http://schemas.microsoft.com/identity/claims/objectidentifier'][0] user.externalId google.subject assertion.email user.emails[0].value google.subject assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'][0] user.emails[0].value google.subject assertion.email.lowerAscii() user.emails[0].value.lowerAscii() google.subject assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'][0].lowerAscii() user.emails[0].value.lowerAscii() google.subject assertion.preferred username user.userName google.subject assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'][0] user.userName google.subject assertion.preferred username.lowerAscii() user.userName.lowerAscii() google.subject assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'][0].lowerAscii() user.userName.lowerAscii() google.group make sure you update your provider with --scim-usage=enabled-for-groups N/A group.externalId Force delete a SCIM tenant To force delete a SCIM tenant, do the following: If --scim-usage=enabled-for-groups is set for your provider, disable it from the provider configuration: gcloud iam workforce-pools providers update-oidc --provider= PROVIDER ID \ --workforce-pool= WORKFORCE POOL ID \ --location= global --scim-usage=SCIM USAGE UNSPECIFIED Replace the following: PROVIDER ID : the ID of the workforce identity pool provider WORKFORCE POOL ID : the ID of the workforce pool Delete the SCIM tenant: gcloud iam workforce-pools providers scim-tenants delete SCIM TENANT ID \ --workforce-pool= WORKFORCE POOL ID \ --provider= PROVIDER ID \ --hard-delete \ --location=global Replace the following: SCIM TENANT ID : the ID of the SCIM tenant to delete WORKFORCE POOL ID : the ID of the workforce pool PROVIDER ID : the ID of the workforce identity pool provider To learn more about SCIM, including deleting SCIM tenants, see SCIM support .
- To configure System for Cross-domain Identity Management (SCIM) , do the following: Configure a SCIM tenant and token in Google Cloud Configure SCIM in Microsoft Entra ID Configure a SCIM tenant and token in Google Cloud To configure a SCIM tenant in Google Cloud, do the following: Create a SCIM tenant. gcloud iam workforce-pools providers scim-tenants create SCIM TENANT ID \ --workforce-pool=" WORKFORCE POOL ID " \ --provider=" PROVIDER ID " \ --display-name=" SCIM TENANT DISPLAY NAME " \ --description=" SCIM TENANT DESCRIPTION " \ --claim-mapping=" CLAIM MAPPING " \ --location="global" Replace the following: SCIM TENANT ID : an ID for your SCIM tenant.
- The following mapping is recommended for Gemini Enterprise: google.subject=user.emails[0].value.lowerAscii(),google.group=group.externalId The google.subject attribute that you map in the SCIM tenant must uniquely refer to the same identities that are mapped in the google.subject attribute in the workforce identity pool provider by using the --attribute-mapping flag.
- Update the provider to enable SCIM To enable SCIM for a provider, do the following: OIDC gcloud iam workforce-pools providers update-oidc PROVIDER ID \ --workforce-pool= WORKFORCE POOL ID \ --location= LOCATION \ --scim-usage=enabled-for-groups Replace the following: PROVIDER ID : the ID of the workforce identity pool provider WORKFORCE POOL ID : the ID of the workforce pool LOCATION : the location of the workforce pool SAML gcloud iam workforce-pools providers update-saml PROVIDER ID \ --workforce-pool= WORKFORCE POOL ID \ --location= LOCATION \ --scim-usage=enabled-for-groups Replace the following: PROVIDER ID : the ID of the workforce identity pool provider WORKFORCE POOL ID : the ID of the workforce pool LOCATION : the location of the workforce pool Map token and SCIM attributes You must consistently map attributes, both in the workforce identity pool provider and in the SCIM tenant that's configured for the provider.

### "Example logs for Workforce Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- Source ID: `site-docs-root-2`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 400." }, "authenticationInfo": { "principalSubject": "3Kn-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc" }, "requestMetadata": { "callerIp": "2601:647:4680:9140:9d68:88c9:cab9:a908", "callerSuppliedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "requestAttributes": { "time": "2025-04-09T18:32:34.979311Z", "auth": {} }, "destinationAttributes": {} }, "serviceName": "sts.googleapis.com", "methodName": "google.identity.sts.SecurityTokenService.WebSignIn", "authorizationInfo": [ { "permission": "sts.identityProviders.checkLogging", "granted": false, "permissionType": "ADMIN READ" } ], "resourceName": "locations/global/workforcePools/my-pool/providers/my-provider", "request": { "@type": "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest", "provider": "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider", "host": "auth-staging.corp.cloud.google" }, "metadata": { "mappedAttributes": { "google.subject": "3Nk-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc", "google.providerId": "my-provider-id", "google.groups": "[group-claim-1, group-claim-2, ..., group-claim-800]" } } }, "insertId": "-llnhbmck3a", "resource": { "type": "audited resource", "labels": { "service": "sts.googleapis.com", "method": "google.identity.sts.SecurityTokenService.WebSignIn" } }, "timestamp": "2025-04-09T18:32:34.208412Z", "severity": "ERROR", "logName": "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access", "receiveTimestamp": "2025-04-09T18:32:35.059811619Z" } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- In this case, the number of groups exceeded the Workforce Identity Federation limit. { "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "code": 3, "message": "The current count of 800 mapped attribute google.groups exceeds the 400 count limit.
- In this example, an OIDC token is exchanged for a federated token: { "logName" : "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "b6112abb-5791-4507-adb5-7e8cc306eb2e" }, "metadata" : { "mapped principal" : "principal://iam.googleapis.com/locations/global/workforcePools/oidc-pool/subject/a1234bcd-5678-9012-efa3-4b5cd678ef9a" }, "methodName" : "google.identity.sts.v1.SecurityTokenService.ExchangeToken" , "resourceName" : "locations/global/workforcePools/oidc-pool/providers/oidc-provider" , "serviceName" : "sts.googleapis.com" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.v1.SecurityTokenService.ExchangeTokenRequest" , "audience" : "//iam.googleapis.com/locations/global/workforcePools/oidc-pool/providers/oidc-provider" , "grantType" : "urn:ietf:params:oauth:grant-type:token-exchange" , "requestedTokenType" : "urn:ietf:params:oauth:token-type:access token" , "subjectTokenType" : "urn:ietf:params:oauth:token-type:id token" } }, "resource" : { "type" : "audited resource" } } Failed token exchange: Too many groups The following example log describes a token exchange that failed because the number of groups claims exceeded the maximum of 400.
- For Workforce Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "use": "verify" "fingerprint": "3C:B2:47:F8:A5:9A:8A:52:BD:1C:BC:96:B5:45:C1:8D:A7:F1:73:2D" }, { "use": "decrypt" "resourceName": "//iam.googleapis.com/locations/global/workforcePools/ WORKFORCE POOL NAME /providers/ PROVIDER NAME /keys/ KEY NAME " } ] This output includes the following values: fingerprint : the hexadecimal representation of the SHA-256 hash of the X.509 certificate that was used to verify the signature on the SAML credential.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-api-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Live Stream API GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Looker (Google Cloud core) Unsupported Alternatives: No alternatives available Looker Studio Unsupported Alternatives: No alternatives available Managed Service for Microsoft Active Directory GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Workforce Identity Federation users can't use IAP TCP forwarding to access the Active Directory management VM .
- Other: No known limitations Confidential Space GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Context-Aware Access Preview Console (federated): In Add principals to the Google Cloud console & APIs , the Group ID text field doesn't support autocomplete or provide validation for Workforce Identity Federation users.
- Workforce Identity Federation groups are identified by their IDs rather than their names.
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.

