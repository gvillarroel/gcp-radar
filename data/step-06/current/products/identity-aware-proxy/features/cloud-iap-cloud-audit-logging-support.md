---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.779Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Cloud IAP Cloud Audit Logging support"
feature_slug: "cloud-iap-cloud-audit-logging-support"
latest_feature_date: "2017-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/audit-log-howto"
  - "https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto"
  - "https://docs.cloud.google.com/iap/docs/managing-access"
  - "https://docs.cloud.google.com/iap/docs/create-custom-auth-ui"
keywords:
  - "iap"
  - "audit"
  - "logging"
  - "supports"
---

# Cloud IAP Cloud Audit Logging support

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud IAP supports Cloud Audit Logging.

## Extended Definition

Cloud IAP supports Cloud Audit Logging.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/audit-log-howto](https://docs.cloud.google.com/iap/docs/audit-log-howto)
- [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui)

## Supporting Pages

### Identity-Aware Proxy audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/audit-log-howto](https://docs.cloud.google.com/iap/docs/audit-log-howto)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIamPolicy google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIapSettings google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.GetIamPolicy ADMIN WRITE google.cloud.iap.v1.IdentityAwareProxyAdminService.SetIamPolicy google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.SetIamPolicy DATA READ google.cloud.iap.v1.IdentityAwareProxyAdminService.GetTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.ListTunnelDestGroups DATA WRITE google.cloud.iap.v1.IdentityAwareProxyAdminService.CreateTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.DeleteTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateIapSettings google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.ValidateIapAttributeExpression API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Identity-Aware Proxy. google.cloud.iap.v1.IdentityAwareProxyAdminService The following audit logs are associated with methods belonging to google.cloud.iap.v1.IdentityAwareProxyAdminService .
- The following methods don't produce audit logs: google.cloud.iap.v1.IdentityAwareProxyOAuthService.CreateBrand google.cloud.iap.v1.IdentityAwareProxyOAuthService.CreateIdentityAwareProxyClient google.cloud.iap.v1.IdentityAwareProxyOAuthService.DeleteIdentityAwareProxyClient google.cloud.iap.v1.IdentityAwareProxyOAuthService.GetBrand google.cloud.iap.v1.IdentityAwareProxyOAuthService.GetIdentityAwareProxyClient google.cloud.iap.v1.IdentityAwareProxyOAuthService.ListBrands google.cloud.iap.v1.IdentityAwareProxyOAuthService.ListIdentityAwareProxyClients google.cloud.iap.v1.IdentityAwareProxyOAuthService.ResetIdentityAwareProxyClientSecret google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.TestIamPermissions Fields The logs only contain information about the access levels that a user has met.
- Filter for this method : protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.SetIamPolicy" UpdateIapSettings Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateIapSettings Audit log type : Data access Permissions : iap.projects.updateSettings - DATA WRITE iap.web.updateSettings - DATA WRITE iap.webServiceVersions.updateSettings - DATA WRITE iap.webServices.updateSettings - DATA WRITE iap.webTypes.updateSettings - DATA WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIamPolicy" GetIapSettings Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIapSettings Audit log type : Data access Permissions : iap.projects.getSettings - ADMIN READ iap.web.getSettings - ADMIN READ iap.webServiceVersions.getSettings - ADMIN READ iap.webServices.getSettings - ADMIN READ iap.webTypes.getSettings - ADMIN READ Method is a long-running or streaming operation : No.

### "Setting up context-aware access with Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Audit Logs and access levels Enabling Cloud Audit Logs for your IAP-secured project lets you see authorized and unauthorized access requests.
- The data access log type only appears if there was traffic to your resource after you enabled Cloud Audit Logs for IAP.
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group" : EXAMPLE GROUP@GOOGLE.COM , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Content-Type:application/json" \ -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${IAP BASE URL}/compute/services/${BACKEND SERVICE NAME}:setIamPolicy \ -d @${JSON NEW POLICY} Use hostname and path conditions Access to your app can be secured using the hostname and path of a request URL.
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group: EXAMPLE GROUP@GOOGLE.COM " , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${GAE BASE URL}:setIamPolicy -d @${JSON NEW POLICY} App Engine services and versions You can also update the IAM policy of a App Engine service, all versions, or a specific version of a service.

### "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- Source ID: `site-iam-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- If public access is granted, IAP won't generate Cloud Audit Logs logs for the request.
- Security Reviewer : Grants permission to view and audit IAP policies.
- The following is an example of an IAM deny policy to deny access to the getSettings API to a principal at an organization and its descendants. { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/iap.organizations.getSettings" , "iap.googleapis.com/iap.folders.getSettings" , "iap.googleapis.com/iap.projects.getSettings" , "iap.googleapis.com/iap.web.getSettings" , "iap.googleapis.com/iap.webTypes.getSettings" , "iap.googleapis.com/iap.webServices.getSettings" , "iap.googleapis.com/iap.webServicesVersions.getSettings" , ], } } ] } Instead of specifying all granular permissions, the following is an example of the IAM deny policy with only one permission: .getSettings . { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/ .getSettings" , ], } } ] } The following are some simpler ways to create an IAM deny policy without having to specify all of the granular permissions.
- Path https://iap.googleapis.com/v1/projects/ PROJECT NUMBER /iap tunnel/zones/ ZONE NAME iap.tunnelZones.getIamPolicy iap.tunnelZones.setIamPolicy An individual VM instance Path https://iap.googleapis.com/v1/projects/ PROJECT NUMBER /iap tunnel/zones/ ZONE NAME /instances/ INSTANCE ID or INSTANCE NAME iap.tunnelInstances.getIamPolicy iap.tunnelInstances.setIamPolicy A region that has at least one destination group, for example, us-central1 Path https://iap.googleapis.com/v1/projects/ PROJECT NUMBER /iap tunnel/locations/ REGION NAME iap.tunnelLocations.getIamPolicy iap.tunnelLocations.setIamPolicy An individual destination group Path https://iap.googleapis.com/v1/projects/ PROJECT NUMBER /iap tunnel/locations/ REGION NAME /destGroups/ GROUP NAME iap.tunnelDestGroups.getIamPolicy iap.tunnelDestGroups.setIamPolicy Roles The following table lists the IAP IAM roles with a corresponding list of all of the IAP-specific permissions each role includes.

### "Creating a custom sign-in page \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OAuthProvider ( 'microsoft.com' ); provider . setCustomParameters ({ login hint : selectedTenantInfo . email undefined , }); } else { // Figure out the provider used... } auth . signInWithPopup ( provider ) . then (( userCredential ) = > { resolve ( userCredential ); }) . catch (( error ) = > { // Show the error message. }); }); } gcip-iap v2.0.0 import { signInWithPopup , OAuthProvider } from 'firebase/auth' ; startSignIn ( auth , selectedTenantInfo ) { // Show the UI to sign in or sign up a user. return new Promise (( resolve , reject ) = > { // Use selectedTenantInfo to determine the provider and pass the login hint // if that provider supports it and the user specified an email address. if ( selectedTenantInfo && selectedTenantInfo . providerIds && selectedTenantInfo . providerIds . indexOf ( 'microsoft.com' ) !== - 1 ) { const provider = new OAuthProvider ( 'microsoft.com' ); provider . setCustomParameters ({ login hint : selectedTenantInfo . email undefined , }); } else { // Figure out the provider used... } signInWithPopup ( auth , provider ) . then (( userCredential ) = > { resolve ( userCredential ); }) . catch (( error ) = > { // Show the error message. }); }); } See Authenticating with multi-tenancy for more information.
- When the page redirects back and sign-in completes, // ciap will detect the result and complete sign-in without any additional // action. signInWithRedirect ( auth , provider ); }); } Some OAuth providers support passing a login hint for sign-in: gcip-iap v1.0.0 startSignIn ( auth , selectedTenantInfo ) { // Show the UI to sign-in or sign-up a user. return new Promise (( resolve , reject ) = > { // Use selectedTenantInfo to determine the provider and pass the login hint // if that provider supports it and the user specified an email address. if ( selectedTenantInfo && selectedTenantInfo . providerIds && selectedTenantInfo . providerIds . indexOf ( 'microsoft.com' ) !== - 1 ) { const provider = new firebase . auth .
- IAP supports the same providers as Identity Platform, such as: Email and password OAuth (Google, Facebook, Twitter, GitHub, Microsoft, etc) SAML OIDC Phone number Custom Anonymous Phone number, custom, and anonymous authentication types are not supported for multi-tenancy.
- The following is an example of implementing processUser() : gcip-iap v1.0.0 processUser ( user ) { return lastAuthUsed . getRedirectResult (). then ( function ( result ) { // Save additional data, or ask the user for additional profile information // to store in database, etc. if ( result ) { // Save result.additionalUserInfo. // Save result.credential.accessToken for OAuth provider, etc. } // Return the user. return user ; }); } gcip-iap v2.0.0 import { getRedirectResult } from 'firebase/auth' ; processUser ( user ) { return getRedirectResult ( lastAuthUsed ). then ( function ( result ) { // Save additional data, or ask the user for additional profile information // to store in database, etc. if ( result ) { // Save result.additionalUserInfo. // Save result.credential.accessToken for OAuth provider, etc. } // Return the user. return user ; }); } If you want any changes to a user reflected in the ID token claims propagated by IAP to your app, you must force the token to refresh: gcip-iap v1.0.0 processUser ( user ) { return user . updateProfile ({ photoURL : 'https://example.com/profile/1234/photo.png' , }). then ( function () { // To reflect updated photoURL in the ID token, force token // refresh. return user . getIdToken ( true ); }). then ( function () { return user ; }); } gcip-iap v2.0.0 import { updateProfile } from 'firebase/auth' ; processUser ( user ) { return updateProfile ( user , { photoURL : 'https://example.com/profile/1234/photo.png' , }). then ( function () { // To reflect updated photoURL in the ID token, force token // refresh. return user . getIdToken ( true ); }). then ( function () { return user ; }); } Testing the UI After you've created a class that implements AuthenticationHandler , you can use it to create a new Authentication instance, and start it: // Implement interface AuthenticationHandler . // const authHandlerImplementation = .... const ciapInstance = new ciap .

