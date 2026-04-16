---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.713Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Microsoft Azure support"
feature_slug: "microsoft-azure-support"
latest_feature_date: "2025-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
keywords:
  - "microsoft"
  - "azure"
  - "security"
  - "command"
  - "center"
  - "can"
  - "collect"
  - "resource"
---

# Microsoft Azure support

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can collect Microsoft Azure resource and configuration data.

## Extended Definition

Security Command Center can collect Microsoft Azure resource and configuration data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Security Command Center can collect Microsoft Azure resource and configuration data .
- July 01, 2025 Change Security Command Center now supports the detection of Chokepoints for the following cloud service provider platforms: Amazon Web Services (AWS) Microsoft Azure Support for Chokepoints with Microsoft Azure and AWS is in Preview .
- Home Documentation Security Security Command Center Resources Send feedback Security Command Center release notes Stay organized with collections Save and categorize content based on your preferences.
- With Security Command Center Enterprise, the page includes a selector to filter by cloud provider: Google Cloud, Amazon Web Service (AWS), and Microsoft Azure.

### "Integrate Microsoft Entra ID with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs The List User's Groups Membership action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Available Enrichment table Not available JSON result Available Output messages Available Script result Available Case wall table The List User's Groups Membership action can return the following table in Google SecOps: Table name: Group Memberships Columns: ID Display Name Description Security Enabled Security Identifier Created DateTime Classification Visibility Mail Mail Enabled Mail Nickname JSON result The following example shows the JSON result output received when using the List User's Groups Membership action: { "@odata.context" : "https://graph.microsoft.com/v1.0/$metadata#Collection(Edm.String)" , "value" : [ " ID " , " ID " , " ID " , ] } Output messages The List User's Groups Membership action can return the following output messages: Output message Message description Successfully found groups for the provided criteria for the following entities: ENTITY ID The following entities were not found in the Azure AD: ENTITY ID No groups were found in Azure Active Directory for the following entities: ENTITY ID The filter was not applied, because parameter "Filter Value" has an empty value.
- JSON result The following example shows the JSON result output received when using the Enrich User action: [ { "Entity" : "user@domain.com" , "EntityResult" : { "@odata.context" : "https://graph.microsoft.com/v1.0/$metadata#users/$entity" , "accountEnabled" : true , "ageGroup" : null , "businessPhones" : [], "city" : "New York" , "companyName" : "ExampleCorp" , "consentProvidedForMinor" : null , "country" : "US" , "createdDateTime" : "2025-01-01T00:00:00Z" , "creationType" : null , "department" : "Security" , "displayName" : "User Name" , "mail" : "user@domain.com" , "employeeId" : "12345" , "employeeHireDate" : null , "employeeType" : null , "externalUserStateChangeDateTime" : null , "faxNumber" : null , "givenName" : "User" , "imAddresses" : [], "externalUserState" : null , "jobTitle" : "Security Analyst" , "surname" : "Surname" , "lastPasswordChangeDateTime" : "2025-01-01T00:00:00Z" , "legalAgeGroupClassification" : null , "mailNickname" : "usernickname" , "mobilePhone" : "+11234567890" , "id" : "user-id-12345" , "officeLocation" : null , "onPremisesSamAccountName" : null , "onPremisesDistinguishedName" : null , "onPremisesDomainName" : null , "onPremisesImmutableId" : null , "onPremisesLastSyncDateTime" : null , "onPremisesProvisioningErrors" : [], "onPremisesSecurityIdentifier" : null , "onPremisesSyncEnabled" : null , "onPremisesUserPrincipalName" : null , "otherMails" : [], "passwordPolicies" : "None" , "preferredDataLocation" : null , "preferredLanguage" : "en-US" , "proxyAddresses" : [], "signInSessionsValidFromDateTime" : "2025-01-01T00:00:00Z" , "state" : "NY" , "streetAddress" : "123 Main St" , "usageLocation" : "US" , "userPrincipalName" : "user@domain.com" , "userType" : "Member" , "postalCode" : "10001" , "deletedDateTime" : null , "showInAddressList" : null , "isResourceAccount" : null , "refreshTokensValidFromDateTime" : "2025-01-01T00:00:00Z" , "employeeOrgData" : null , "passwordProfile" : null , "authorizationInfo" : { "certificateUserIds" : [] }, "mfa details" : { "id" : "user-id-12345" , "userPrincipalName" : "user@domain.com" , "userDisplayName" : "User Name" , "userType" : "member" , "isAdmin" : false , "isSsprRegistered" : true , "isSsprEnabled" : true , "isSsprCapable" : true "isMfaRegistered" : true , "isMfaCapable" : true , "isPasswordlessCapable" : false , "methodsRegistered" : [ "email" , "mobilePhone" ], "defaultMfaMethod" : "mobilePhone" , "isSystemPreferredAuthenticationMethodEnabled" : false , "systemPreferredAuthenticationMethods" : [], "userPreferredMethodForSecondaryAuthentication" : "oath" , "lastUpdatedDateTime" : "2026-01-01T00:00:00Z" } } } ] Output messages The Enrich User action can return the following output messages: Output message Message description User details were fetched successfully: USERNAME .
- JSON result The following example shows the JSON result output received when using the Get Manager Contact Details action: [ { "Entity" : "user@example.com" , "EntityResult" : { "@odata.context" : "https://graph.microsoft.com/v1.0/$metadata#users/$entity" , "accountEnabled" : true , "ageGroup" : null , "businessPhones" : [], "city" : "Anytown" , "companyName" : "Example Corporation" , "consentProvidedForMinor" : null , "country" : "US" , "createdDateTime" : "2025-01-01T00:00:00Z" , "creationType" : null , "department" : "Security Operations" , "displayName" : "Internal User" , "mail" : "user@example.com" , "employeeId" : "ID-00001" , "employeeHireDate" : null , "employeeType" : "Full-time" , "externalUserStateChangeDateTime" : null , "faxNumber" : null , "givenName" : "Alex" , "imAddresses" : [], "externalUserState" : null , "jobTitle" : "Security Lead" , "surname" : "Doe" , "lastPasswordChangeDateTime" : "2025-01-01T00:00:00Z" , "legalAgeGroupClassification" : null , "mailNickname" : "alexdoe" , "mobilePhone" : "+1 555-0100" , "id" : "00000000-0000-0000-0000-000000000000" , "officeLocation" : null , "usageLocation" : "US" , "userPrincipalName" : "user@example.com" , "userType" : "Member" , "postalCode" : "00000" , "deletedDateTime" : null , "showInAddressList" : null , "isResourceAccount" : null , "refreshTokensValidFromDateTime" : "2025-01-01T00:00:00Z" , "employeeOrgData" : null , "authorizationInfo" : { "certificateUserIds" : [] }, "sponsors" : [], "mfa details" : { "id" : "00000000-0000-0000-0000-000000000000" , "userPrincipalName" : "user@example.com" , "userDisplayName" : "Internal User" , "userType" : "member" , "isAdmin" : true , "isSsprRegistered" : false , "isSsprEnabled" : true , "isSsprCapable" : false , "isMfaRegistered" : true , "isMfaCapable" : true , "isPasswordlessCapable" : false , "methodsRegistered" : [ "mobilePhone" , "softwareOneTimePasscode" ], "defaultMfaMethod" : "softwareOneTimePasscode" , "isSystemPreferredAuthenticationMethodEnabled" : true , "systemPreferredAuthenticationMethods" : [ "SoftwareOTP" ], "userPreferredMethodForSecondaryAuthentication" : "oath" , "lastUpdatedDateTime" : "2026-01-01T00:00:00Z" } } } ] Output messages The Get Manager Contact Details action can return the following output messages: Output message Message description User manager details were fetched successfully.
- Before you begin Before you configure the integration in Google SecOps, verify that you have the following requirements met in your Microsoft environment: Azure App Registration : You must register an application in the Microsoft Entra admin center to obtain a Client ID and Tenant ID.

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Connect to Microsoft Azure for configuration and resource data collection in the Security Command Center documentation.
- Workflow The high-level workflow for profiling Azure Blob Storage data is as follows: In Security Command Center, create a connector for Microsoft Azure .
- Before you begin In Security Command Center, create a connector for Microsoft Azure.
- Note: You can also configure Security Command Center to automatically prioritize resources for the attack path simulation feature according to the calculated sensitivity of the data that the resources contain.

