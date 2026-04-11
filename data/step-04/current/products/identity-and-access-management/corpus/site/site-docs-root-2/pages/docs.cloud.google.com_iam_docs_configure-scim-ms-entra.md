---
title: "Configure SCIM in Microsoft Entra ID \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/configure-scim-ms-entra
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/configure-scim-ms-entra
  title: "Configure SCIM in Microsoft Entra ID \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Send feedback
Configure SCIM in Microsoft Entra ID
Stay organized with collections
Save and categorize content based on your preferences.
Important: SCIM is available only for Gemini Enterprise.
This document describes how to configure a SCIM tenant in a workforce identity pool. To learn more about SCIM, see SCIM provisioning for Workforce Identity Federation .
Each workforce identity pool supports only one SCIM tenant. To configure a new SCIM tenant in a pool that already has one, you must first hard-delete the existing tenant .
The --claim-mapping flag for a SCIM tenant can contain only specific Common Expression Language (CEL) expressions. To learn which expressions are supported, see Map token and SCIM attributes .
Important: Make sure that your IdP provides unique values for the attributes that you map to google.subject and google.group using SCIM. To learn more, see SCIM support .
To configure System for Cross-domain Identity Management (SCIM) , do the following:
Configure a SCIM tenant and token in Google Cloud
Configure SCIM in Microsoft Entra ID
Configure a SCIM tenant and token in Google Cloud
To configure a SCIM tenant in Google Cloud, do the following:
Create a SCIM tenant.
gcloud iam workforce-pools providers scim-tenants create SCIM_TENANT_ID \
--workforce-pool=" WORKFORCE_POOL_ID " \
--provider=" PROVIDER_ID " \
--display-name=" SCIM_TENANT_DISPLAY_NAME " \
--description=" SCIM_TENANT_DESCRIPTION " \
--claim-mapping=" CLAIM_MAPPING " \
--location="global"
Replace the following:
SCIM_TENANT_ID : an ID for your SCIM tenant.
WORKFORCE_POOL_ID : the ID of the workforce pool that you created earlier in this document.
PROVIDER_ID : the ID of the workforce identity pool provider that you created earlier in this document.
SCIM_TENANT_DISPLAY_NAME : a display name for your SCIM tenant.
SCIM_TENANT_DESCRIPTION : a description for your SCIM tenant.
CLAIM_MAPPING : a comma-separated list of attribute mappings. For the extended list of mapping attributes, see Map token and SCIM attributes . The following mapping is recommended for Gemini Enterprise:
google.subject=user.emails[0].value.lowerAscii(),google.group=group.externalId
The google.subject attribute that you map in the SCIM tenant must uniquely refer to the same identities that are mapped in the google.subject attribute in the workforce identity pool provider by using the --attribute-mapping flag.
After the SCIM tenant is created, you can't update the claim mapping. To replace it, you can hard-delete the SCIM tenant and immediately create a new one. To learn more about considerations for using SCIM, see SCIM support .
When the command completes, do the following:
In the baseUri field in the output, save the entire URI, which is formatted as https://iamscim.googleapis.com/v1alpha1/tenants/ SCIM_TENANT_UID . You need to provide this URI to your IdP.
Additionally, from the URI, save only the SCIM_TENANT_UID .
You need this UID to set an IAM allow policy on the SCIM tenant later in this document.
Create a SCIM token:
gcloud iam workforce-pools providers scim-tenants tokens create SCIM_TOKEN_ID \
--display-name DISPLAY_NAME \
--scim-tenant SCIM_TENANT_ID \
--workforce-pool WORKFORCE_POOL_ID \
--provider PROVIDER_ID \
--location global
Replace the following:
SCIM_TOKEN_ID : an ID for the SCIM token
DISPLAY_NAME : the display name of the SCIM token
WORKFORCE_POOL_ID : the ID of the workforce pool
SCIM_TENANT_ID : the ID of the SCIM tenant
PROVIDER_ID : the ID of the workforce identity pool provider
When the gcloud iam workforce-pools providers scim-tenants tokens create command completes, do the following:
In the output, save the value of SCIM_TOKEN in the
securityToken field. You need to provide this security
token to your IdP. The security token is displayed only in this output,
and if it's lost, you must create a new SCIM token.
To check if SCIM_TOKEN is rejected by your
organization policy, run the following command:
curl -v -H "Authorization: Bearer SCIM_TOKEN " https://iamscim.googleapis.com/v1alpha1/tenants/ SCIM_TENANT_UID /Users
If the command fails with a permissions-related error, run gcloud organizations add-iam-policy-binding , described in a later step. If the command succeeds, you can skip that step.
Set an IAM allow policy on the SCIM tenant and token. If the curl command in a previous step failed with a permissions-related error, you must run the following command:
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member=serviceAccount: SERVICE_AGENT_EMAIL \
--role roles/iam.scimSyncer
Replace the following:
ORGANIZATION_ID : the ID of the organization.
SERVICE_AGENT_EMAIL : the email address of the service agent. The email address is in the following format: o- ORGANIZATION_ID - SCIM_TENANT_UID @gcp-sa-iamscim.iam.gserviceaccount.com . SCIM_TENANT_UID is returned when you create the SCIM tenant.
When you provision groups in your IdP, make sure that each group's display name, as provided in
the displayName field, is unique within a SCIM tenant. To learn more about groups and
SCIM in Microsoft Entra ID, see
Groups .
Configure SCIM in Microsoft Entra ID
To configure SCIM in Microsoft Entra ID, do the following:
Open the Azure portal and sign in as a user that has global administrator privileges.
Select Microsoft Entra ID > Enterprise Apps .
Click New application .
In Browse Microsoft Entra App gallery , click Create your own application .
In the Create your own application panel that appears, do the following:
For What's the name of your app , enter the name of your app.
Select Integrate any other application you don't find in gallery (Non-gallery) .
To create the app, click Create .
In your application, do the following:
In the Manage section, click Provisioning .
In the right pane that appears, click New Configuration .
Under the Admin Credentials , in the Tenant URL , enter the SCIM URL that you obtained when you created the SCIM tenant, appended with ?aadOptscim062020 .
You must append ?aadOptscim062020 to the end of the base URI.
This query parameter is required by Microsoft Entra ID to ensure that SCIM PATCH
requests are compliant with SCIM RFC standards. For more details, see
Microsoft's documentation .
The final Tenant URL in Microsoft Entra ID should be in the following format:
https://iamscim.googleapis.com/v1alpha1/tenants/ SCIM_TENANT_UID ?aadOptscim062020
Replace SCIM_TENANT_UID with the SCIM tenant UID.
In Secret token , enter the secret token that you obtained when you created the SCIM tenant.
To test the SCIM configuration with Workforce Identity Federation,
click Test connection .
To save the configuration, click Create .
In the Manage section, do the following:
Click Attribute mapping .
Click Provision Microsoft Entra ID Users .
In the Attribute Mapping page, do the following:
In the Attribute mappings table, find the row for externalId and click Edit in that row.
In the Edit attributes page, do the following:
In the Source attribute drop-down list, select objectId .
Click Ok .
To save the attribute mapping, click Save .
Update the provider to enable SCIM
To enable SCIM for a provider, do the following:
OIDC
gcloud iam workforce-pools providers update-oidc PROVIDER_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--location= LOCATION \
--scim-usage=enabled-for-groups
Replace the following:
PROVIDER_ID : the ID of the workforce identity pool provider
WORKFORCE_POOL_ID : the ID of the workforce pool
LOCATION : the location of the workforce pool
SAML
gcloud iam workforce-pools providers update-saml PROVIDER_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--location= LOCATION \
--scim-usage=enabled-for-groups
Replace the following:
PROVIDER_ID : the ID of the workforce identity pool provider
WORKFORCE_POOL_ID : the ID of the workforce pool
LOCATION : the location of the workforce pool
Map token and SCIM attributes
You must consistently map attributes, both in the workforce identity pool provider and in the SCIM tenant that's configured for the provider. For the workforce identity pool provider, you use the
--attribute-mapping flag, and for the SCIM tenant, you use the --claim-mapping flag. The IdP attribute that is mapped to google.subject for users must uniquely refer to the same identity, whether defined in a token or SCIM mapping. To learn more about mapping attributes when you use SCIM, see the
SCIM support section.
The following table shows you how to map attributes in token claims and SCIM attributes:
Google attribute
Workforce identity pool provider mapping
SCIM tenant mapping
google.subject
assertion.oid
user.externalId
google.subject
assertion.attributes['http://schemas.microsoft.com/identity/claims/objectidentifier'][0]
user.externalId
google.subject
assertion.email
user.emails[0].value
google.subject
assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'][0]
user.emails[0].value
google.subject
assertion.email.lowerAscii()
user.emails[0].value.lowerAscii()
google.subject
assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'][0].lowerAscii()
user.emails[0].value.lowerAscii()
google.subject
assertion.preferred_username
user.userName
google.subject
assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'][0]
user.userName
google.subject
assertion.preferred_username.lowerAscii()
user.userName.lowerAscii()
google.subject
assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'][0].lowerAscii()
user.userName.lowerAscii()
google.group make sure you update your provider with --scim-usage=enabled-for-groups
N/A
group.externalId
Force delete a SCIM tenant
To force delete a SCIM tenant, do the following:
If --scim-usage=enabled-for-groups is set for your provider, disable it from the provider configuration:
gcloud iam workforce-pools providers update-oidc
--provider= PROVIDER_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--location= global
--scim-usage=SCIM_USAGE_UNSPECIFIED
Replace the following:
PROVIDER_ID : the ID of the workforce identity pool provider
WORKFORCE_POOL_ID : the ID of the workforce pool
Delete the SCIM tenant:
gcloud iam workforce-pools providers scim-tenants delete SCIM_TENANT_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--provider= PROVIDER_ID \
--hard-delete \
--location=global
Replace the following:
SCIM_TENANT_ID : the ID of the SCIM tenant to delete
WORKFORCE_POOL_ID : the ID of the workforce pool
PROVIDER_ID : the ID of the workforce identity pool provider
To learn more about SCIM, including deleting SCIM tenants, see SCIM support .
What's next
Delete Workforce Identity Federation users and their data
Learn which Google Cloud products support Workforce Identity Federation
Set up user access to console (federated)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
