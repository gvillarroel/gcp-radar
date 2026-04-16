---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.765Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Snyk integration"
feature_slug: "snyk-integration"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai"
keywords:
  - "snyk"
  - "integration"
  - "security"
  - "command"
  - "center"
  - "can"
  - "integrate"
---

# Snyk integration

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can integrate with Snyk.

## Extended Definition

Security Command Center can integrate with Snyk.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai)

## Supporting Pages

### "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure the integration with a CA certificate, complete the following steps: To obtain the CA certificate, enter the cat mycert.crt command: bash-3.2# cat mycert.crt -----BEGIN CERTIFICATE----- CERTIFICATE STRING -----END CERTIFICATE----- bash-3.2# To encode the root CA certificate file to the base64 format with the -----BEGIN CERTIFICATE----- and -----END CERTIFICATE----- strings, enter the cat mycert.crt base64 command: bash-3.2# cat mycert.crt base64 BASE64 ENCODED CERTIFICATE STRING bash-3.2# Copy the BASE64 ENCODED CERTIFICATE STRING value and enter it in the CA Certificate File - parsed into Base64 String parameter value field in Google SecOps Active Directory integration configuration .
- Integrate Active Directory with Google SecOps This document explains how to integrate Active Directory with Google Security Operations (Google SecOps).
- Action outputs The Search Active Directory action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Output messages Available Script result Available JSON result The following example shows the JSON result output received when using the Search Active Directory action: [ { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ " GUID " ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example" ], "name" : [ "user" ], "memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ] } ] Output messages The Search Active Directory action can return the following output messages: Output message Message description Successfully performed the query " QUERY STRING " in Active Directory.
- JSON result The following example shows the JSON result output received when using the Enrich Entities action: [ { "EntityResult" : { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ " GUID " ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example user" ], "name" : [ "user" ], "memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ]}, "Entity" : "user@example.com" } ] Script result The following table lists the value for the script result output when using the Enrich Entities action: Script result name Value is success True or False Force Password Update Use the Force Password Update action to require a user to change their password upon the following sign-in.

### "Integrate Microsoft Entra ID with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you configure the integration in Google SecOps, verify that you have the following requirements met in your Microsoft environment: Azure App Registration : You must register an application in the Microsoft Entra admin center to obtain a Client ID and Tenant ID.
- Integrate Microsoft Entra ID with Google SecOps This document provides guidance on how to integrate Microsoft Entra ID with Google Security Operations (Google SecOps).
- Security alerting and incident response: integrate the Microsoft Entra ID security alerts into Google SecOps to automate incident response workflows.
- JSON result The following example shows the JSON result output received when using the Enrich User action: [ { "Entity" : "user@domain.com" , "EntityResult" : { "@odata.context" : "https://graph.microsoft.com/v1.0/$metadata#users/$entity" , "accountEnabled" : true , "ageGroup" : null , "businessPhones" : [], "city" : "New York" , "companyName" : "ExampleCorp" , "consentProvidedForMinor" : null , "country" : "US" , "createdDateTime" : "2025-01-01T00:00:00Z" , "creationType" : null , "department" : "Security" , "displayName" : "User Name" , "mail" : "user@domain.com" , "employeeId" : "12345" , "employeeHireDate" : null , "employeeType" : null , "externalUserStateChangeDateTime" : null , "faxNumber" : null , "givenName" : "User" , "imAddresses" : [], "externalUserState" : null , "jobTitle" : "Security Analyst" , "surname" : "Surname" , "lastPasswordChangeDateTime" : "2025-01-01T00:00:00Z" , "legalAgeGroupClassification" : null , "mailNickname" : "usernickname" , "mobilePhone" : "+11234567890" , "id" : "user-id-12345" , "officeLocation" : null , "onPremisesSamAccountName" : null , "onPremisesDistinguishedName" : null , "onPremisesDomainName" : null , "onPremisesImmutableId" : null , "onPremisesLastSyncDateTime" : null , "onPremisesProvisioningErrors" : [], "onPremisesSecurityIdentifier" : null , "onPremisesSyncEnabled" : null , "onPremisesUserPrincipalName" : null , "otherMails" : [], "passwordPolicies" : "None" , "preferredDataLocation" : null , "preferredLanguage" : "en-US" , "proxyAddresses" : [], "signInSessionsValidFromDateTime" : "2025-01-01T00:00:00Z" , "state" : "NY" , "streetAddress" : "123 Main St" , "usageLocation" : "US" , "userPrincipalName" : "user@domain.com" , "userType" : "Member" , "postalCode" : "10001" , "deletedDateTime" : null , "showInAddressList" : null , "isResourceAccount" : null , "refreshTokensValidFromDateTime" : "2025-01-01T00:00:00Z" , "employeeOrgData" : null , "passwordProfile" : null , "authorizationInfo" : { "certificateUserIds" : [] }, "mfa details" : { "id" : "user-id-12345" , "userPrincipalName" : "user@domain.com" , "userDisplayName" : "User Name" , "userType" : "member" , "isAdmin" : false , "isSsprRegistered" : true , "isSsprEnabled" : true , "isSsprCapable" : true "isMfaRegistered" : true , "isMfaCapable" : true , "isPasswordlessCapable" : false , "methodsRegistered" : [ "email" , "mobilePhone" ], "defaultMfaMethod" : "mobilePhone" , "isSystemPreferredAuthenticationMethodEnabled" : false , "systemPreferredAuthenticationMethods" : [], "userPreferredMethodForSecondaryAuthentication" : "oath" , "lastUpdatedDateTime" : "2026-01-01T00:00:00Z" } } } ] Output messages The Enrich User action can return the following output messages: Output message Message description User details were fetched successfully: USERNAME .

### "Integrate Akamai with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integrate Akamai with Google SecOps This document explains how to integrate Akamai with Google Security Operations (Google SecOps).
- Home Documentation Security Google Security Operations Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Integration parameters The Akamai integration requires the following parameters: Parameter Description Host Required.
- For instructions about how to configure an integration in Google SecOps, see Configure integrations .

