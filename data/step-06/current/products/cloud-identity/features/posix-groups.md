---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:29.219Z"
product_name: "Cloud Identity"
product_slug: "cloud-identity"
feature_name: "POSIX groups"
feature_slug: "posix-groups"
latest_feature_date: "2024-09-25"
deprecation_date: "2024-09-26"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity"
  - "https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation"
  - "https://docs.cloud.google.com/identity/docs/how-to/setup"
  - "https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys"
keywords:
  - "posix"
  - "groups"
  - "let"
  - "identity"
  - "use"
  - "attributes"
  - "for"
  - "unix"
---

# POSIX groups

Product: Cloud Identity
Coverage: MEDIUM

## Step 02 Summary

POSIX groups let Cloud Identity groups use POSIX attributes for Unix-style identity and access integration; deprecated on 2024-09-26.

## Extended Definition

POSIX groups let Cloud Identity groups use POSIX attributes for Unix-style identity and access integration; deprecated on 2024-09-26.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- [https://docs.cloud.google.com/identity/docs/how-to/setup](https://docs.cloud.google.com/identity/docs/how-to/setup)
- [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)

## Supporting Pages

### "Example logs for Workforce Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workforce-identity)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 400." }, "authenticationInfo": { "principalSubject": "3Kn-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc" }, "requestMetadata": { "callerIp": "2601:647:4680:9140:9d68:88c9:cab9:a908", "callerSuppliedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36", "requestAttributes": { "time": "2025-04-09T18:32:34.979311Z", "auth": {} }, "destinationAttributes": {} }, "serviceName": "sts.googleapis.com", "methodName": "google.identity.sts.SecurityTokenService.WebSignIn", "authorizationInfo": [ { "permission": "sts.identityProviders.checkLogging", "granted": false, "permissionType": "ADMIN READ" } ], "resourceName": "locations/global/workforcePools/my-pool/providers/my-provider", "request": { "@type": "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest", "provider": "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider", "host": "auth-staging.corp.cloud.google" }, "metadata": { "mappedAttributes": { "google.subject": "3Nk-kJQal4N-WXVjxMqcOF1tQcCdBliu97lV-2P-Khc", "google.providerId": "my-provider-id", "google.groups": "[group-claim-1, group-claim-2, ..., group-claim-800]" } } }, "insertId": "-llnhbmck3a", "resource": { "type": "audited resource", "labels": { "service": "sts.googleapis.com", "method": "google.identity.sts.SecurityTokenService.WebSignIn" } }, "timestamp": "2025-04-09T18:32:34.208412Z", "severity": "ERROR", "logName": "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access", "receiveTimestamp": "2025-04-09T18:32:35.059811619Z" } Logs for signed and encrypted SAML assertions This section describes the Cloud Audit Logs log entries that Security Token Service creates when it attempts to verify signed SAML assertions or decrypt encrypted assertions that are sent from your IdP.
- In this example, an OIDC token is exchanged for a federated token: { "logName" : "organizations/123456789012/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "b6112abb-5791-4507-adb5-7e8cc306eb2e" }, "metadata" : { "mapped principal" : "principal://iam.googleapis.com/locations/global/workforcePools/oidc-pool/subject/a1234bcd-5678-9012-efa3-4b5cd678ef9a" }, "methodName" : "google.identity.sts.v1.SecurityTokenService.ExchangeToken" , "resourceName" : "locations/global/workforcePools/oidc-pool/providers/oidc-provider" , "serviceName" : "sts.googleapis.com" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.v1.SecurityTokenService.ExchangeTokenRequest" , "audience" : "//iam.googleapis.com/locations/global/workforcePools/oidc-pool/providers/oidc-provider" , "grantType" : "urn:ietf:params:oauth:grant-type:token-exchange" , "requestedTokenType" : "urn:ietf:params:oauth:token-type:access token" , "subjectTokenType" : "urn:ietf:params:oauth:token-type:id token" } }, "resource" : { "type" : "audited resource" } } Failed token exchange: Too many groups The following example log describes a token exchange that failed because the number of groups claims exceeded the maximum of 400.
- In this case, the following Cloud Audit Logs entry is generated: { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignIn" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignInRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "continueUrl" : "https://console.cloud.google" , "host" : "http://auth.cloud.google" , }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignIn" , } }, } The Cloud Audit Logs entry for SAML providers can additionally contain signing key information in the metadata field. { "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , "keyInfo" : [ { "use" : "verify" , "fingerprint" : "AE:CK:LM:EF:LK:OG:EH:IJ:KN:AL:OM:AD:NO" , } ], } } Logs for failed sign-in This section provides an example Cloud Audit Logs entry that is logged as a result of a failed sign-in.
- In this case, the following Cloud Audit Logs entry is generated: Note: The Cloud Audit Logs entry is written only for the initiator of the sign-out action. { "logName" : "organizations/my-organization-id/logs/cloudaudit.googleapis.com%2Fdata access" , "protoPayload" : { "@type" : "type.googleapis.com/google.cloud.audit.AuditLog" , "authenticationInfo" : { "principalSubject" : "user@example.com" , }, "serviceName" : "sts.googleapis.com" , "methodName" : "google.identity.sts.SecurityTokenService.WebSignOut" , "resourceName" : "locations/global/workforcePools/my-pool/providers/my-provider" , "request" : { "@type" : "type.googleapis.com/google.identity.sts.SecurityTokenService.WebSignOutRequest" , "provider" : "//iam.googleapis.com/locations/global/workforcePools/my-pool/providers/my-provider" , "host" : "http://auth.cloud.google" }, "metadata" : { "mappedPrincipal" : "principal://iam.googleapis.com/locations/global/workforcePools/my-pool/subject/user@example.com" , } }, "resource" : { "type" : "audited resource" , "labels" : { "service" : "sts.googleapis.com" , "method" : "google.identity.sts.SecurityTokenService.WebSignOut" } }, } Logs for signing in with OAuth flow After you set up your workforce identity pool and workforce identity pool provider, you can use Google Cloud resources using the OAuth flow.

### "Integrate Cloud Run and Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a role binding for the user to impersonate the service account: gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT \ --role roles/iam.workloadIdentityUser \ --member "principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/cloudrun-oidc-pool/subject/ USER EMAIL Replace the following: SERVICE ACCOUNT with the email address of the service account that you created in Configure your Google Cloud environment .
- On the VM, set the sts.creds.json file as a variable for ADC: export GOOGLE APPLICATION CREDENTIALS =/ Users / USERNAME / sts - creds . json Replace USERNAME with your UNIX username.
- If you used an existing project for the tasks in this document, when you delete it, you also delete any other work you've done in the project.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, you can delete your project.

### Setting up the Groups API \_|\_ Cloud Identity \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/identity/docs/how-to/setup](https://docs.cloud.google.com/identity/docs/how-to/setup)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GsonFactory ; import com.google.common.collect.ImmutableList ; import java.io.FileInputStream ; / Command line tool to generate Oauth2 token for a given service account / without domain wide delegation. / public final class GenerateServiceAccountOauth2Token { private static final ImmutableList<String> API SCOPES = ImmutableList . of ( "https://www.googleapis.com/auth/cloud-identity.groups" , "https://www.googleapis.com/auth/admin.directory.group" , "https://www.googleapis.com/auth/admin.directory.group.member" , "https://www.googleapis.com/auth/apps.groups.settings" ); public static void main ( final String [] args ) throws Exception { String accessToken = getTokenFromJsonKey (); System . out . println ( "Token: " + accessToken ); } private static String getTokenFromJsonKey () throws Exception { GoogleCredential credential = GoogleCredential . fromStream ( new FileInputStream ( "<path for json file>" ), new NetHttpTransport (), GsonFactory . getDefaultInstance ()); System . out . println ( "ServiceAccountId=" + credential . getServiceAccountId ()); HttpTransport httpTransport = new NetHttpTransport (); JsonFactory jsonFactory = GsonFactory . getDefaultInstance (); GoogleCredential .
- Enable the API Installing the client libraries To install the client libraries, run the following command: Python For more on setting up your Python development environment, refer to the Python Development Environment Setup Guide . pip install -- upgrade google - api - python - client google - auth \ google - auth - oauthlib google - auth - httplib2 Authenticating with the Groups API You can authenticate with the Groups API as an end user, as a service account group admin without domain-wide delegation, or as a service account with domain-wide delegation.
- Credentials . from service account file ( SERVICE ACCOUNT FILE , scopes = SCOPES ) delegated credentials = credentials . with subject ( 'user@example.org' ) service name = 'cloudidentity' api version = 'v1' service = googleapiclient . discovery . build ( service name , api version , credentials = delegated credentials ) return service You can now begin making calls to the Groups API.
- Authenticating as a service account without domain-wide delegation If you're using a service account and want to use it to manage groups as a group admin, complete the steps below.

### "Best practices for managing service account keys \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use a dedicated key for each machine that runs an application If you run multiple copies of the same application across multiple machines, then the principalEmail field might let you identify the application, but not the machine where a particular activity originated from.
- When using domain-wide delegation, avoid service account keys and use the signJwt API instead: Authenticate a service account by using an attached service account , Workload Identity Federation for GKE , or Workload Identity Federation first.
- Instead of letting Google Cloud generate a key pair, you can use a hardware security module (HSM) or Trusted Platform Module (TPM) to create and manage keys: Use a HSM or TPM to generate a RSA key pair.
- Avoid using service account keys for domain-wide delegation Domain-wide delegation lets you impersonate a user so that you can access a user's data without any manual authorization on their part .

