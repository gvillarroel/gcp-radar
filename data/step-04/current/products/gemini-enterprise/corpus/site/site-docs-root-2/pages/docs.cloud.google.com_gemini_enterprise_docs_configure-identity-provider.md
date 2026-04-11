---
title: "Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider
  title: "Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Configure identity provider
Stay organized with collections
Save and categorize content based on your preferences.
To enforce data source access control and secure data in
Gemini Enterprise, you must configure an identity provider. This involves
setting up the identity provider and managing permissions for your data sources.
Google uses your identity provider to identify the end user performing a search
and determine if they have access to the documents that are returned as results.
Choose your identity provider type
The type of the identity provider you choose, depends on the data sources connected to your
Gemini Enterprise app. Gemini Enterprise supports
the following options:
Identity provider type
When to use
Google Identity
When you connect Gemini Enterprise to
Google Workspace data
sources, you must use Google Identity .
Before configuring Google identity, you must determine the unique user
attribute used by your organization, typically the user's email.
If users have more than one email address, you must add an email alias .
Third-party identity provider
When you only connect Gemini Enterprise to third-party data sources,
and you are already using a third-party identity provider that supports
OIDC or SAML 2.0, such as Microsoft Entra ID, Active Directory Federation
Services (AD FS), Okta, and others, you must use Workforce Identity Federation.
For more information, see
Workforce Identity Federation .
Before configuring Workforce Identity Federation, you must determine the
unique user attributes used by your organization, and these attributes
must be mapped with Workforce Identity Federation.
Workforce Identity Federation for third-party identity providers
This section describes how to configure Workforce Identity Federation for
third-party identity providers. Optionally, you can verify if the
Workforce Identity Federation set up works as expected.
Important: The workforce identity pool admin roles give the administrators
powerful permissions. For more information, see
Workforce Identity Federation and pool administrators .
Configure Workforce Identity Federation
For details on configuring Workforce Identity Federation with your third-party
identity connector, see the following resources:
Identity provider
Resources
Entra ID
Note: When using data ingestion to connect to Microsoft data sources like SharePoint, OneDrive, or Outlook, you must use Microsoft Entra ID groups to control
document access. This requires setting up Workforce Identity Federation with Microsoft Entra ID. This setup is necessary even if you use a different identity provider for
single sign-on (SSO) with Microsoft Entra ID. However, this requirement does not apply if you are connecting to a Microsoft data source using data federation.
Configure Workforce Identity Federation with Microsoft Entra ID and sign in users
Configure Workforce Identity Federation with Microsoft Entra ID and a large number of groups
Note: To fetch a large number of groups from Entra ID for
Gemini Enterprise, you must configure SCIM. For details, see
Configure SCIM .
Okta
Configure Workforce Identity Federation with Okta and sign in users
OIDC or SAML 2.0
Configure Workforce Identity Federation with an identity provider (IdP) that supports OIDC or SAML 2.0
Configure attribute mapping
Attribute mapping helps you connect your third-party identity information with
Google using Workforce Identity Federation.
When configuring attribute mapping in Workforce Identity Federation, consider the
following:
The google.subject attribute is used for attribute mapping, license
assignment, and sharing NotebookLMs. We recommend mapping
google.subject to the user's email address in lowercase, as license
assignment is case sensitive.
If your organization has more than one unique identifier, map these unique
organizational attributes using the
attribute.as_user_identifier_ number between 1 and 50
attribute.
For example, if your organization uses both email and principal name
as user identifiers across different applications, and the principal name is
set as the preferred_username in your third-party identity provider, you
can map it to Gemini Enterprise using the Workforce Identity Federation
attribute mapping (for example,
attribute.as_user_identifier_1=assertion.preferred_username ).
The following examples show the required attribute mappings for common identity
providers. You can add more attribute mappings to support additional unique
identifiers, as described previously.
Entra ID with OIDC protocol
This example uses the email to uniquely identify users.
google.subject=assertion.email.lowerAscii()
google.groups=assertion.groups
google.display_name=assertion.given_name
Entra ID with SAML protocol
This example uses the email to uniquely identify users.
google . subject = assertion . attributes [ ' http : //schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'][0].lowerAscii()
google . groups = assertion . attributes [ ' http : //schemas.microsoft.com/ws/2008/06/identity/claims/groups']
google . display_name = assertion . attributes [ ' http : //schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'][0]
Okta with OIDC protocol
This example uses the email to uniquely identify users.
google.subject=assertion.email.lowerAscii()
google.groups=assertion.groups
Okta with SAML protocol
This example uses the subject assertion of the JWT to uniquely identify
users.
google.subject=assertion.subject.lowerAscii()
google.groups=assertion.attributes['groups']
Optional: Verify Workforce Identity Federation setup
To verify successful sign-ins and correct attribute mapping using the
Workforce Identity Federation audit logging feature, do the following:
Enable audit logs for the Data Access activity's Security Token Service API.
In the Google Cloud console, go to the Audit Logs page:
Go to Audit Logs
If you use the search bar to find this page, then select the result whose subheading is
IAM & Admin .
Select an existing Google Cloud project, folder, or organization.
Enable the Data Access audit logs.
See the Logging documentation for detailed steps on how to Enable audit logs .
For the Security Token Service API , select the Admin Read audit
log type.
For more information, see
Example logs for Workforce Identity Federation .
Enable detailed logging in your workforce pool. The
Workforce Identity Federation extended groups feature for Microsoft Entra
ID doesn't produce detailed audit logging information.
Go to the Workforce Identity Pools page:
Go to Workforce Identity Pools
In the table, select the pool.
Click the Enable detailed audit logging toggle to the on position.
Click Save Pool .
In the Providers section, click the Sign in URL for your provider,
and sign in to Google Cloud console as a workforce pool user.
See the audit logs that generated when you signed in.
Go to the Workforce Identity Pools page:
Go to Workforce Identity Pools
In the table, select the pool you signed into.
Click View next to Logs .
On the audit log page clear the protoPayload.resourceName filter from the query.
Click Run query .
Check the audit logs for an entry with the google.identity.sts.SecurityTokenService.WebSignIn
method that matches the sign-in timestamp.
Confirm that the metadata.mapped_attributes field in the log matches the
attribute that you used when configuring Workforce Identity Federation for
third-party identity providers.
For example:
"metadata": {
"mapped_attributes": {
"attributes.as_user_identifier_1": "alex@admin.altostrat.com"
"google.subject": "alex@altostrat.com"
"google.groups": "[123abc-456d, efg-h789-ijk]"
}
},
Limitations
When connecting your data sources using a connector to create data stores,
the following limitations apply:
3000 readers are allowed per document. Each principal counts as a reader, where
a principal can be a group or an individual user.
You can select one identity provider type per location supported in
Gemini Enterprise.
If the identity provider settings are updated by changing the identity
provider type or the workforce pool, existing data stores won't automatically
update to the new settings. You must delete and recreate these data stores to
apply the new identity settings.
To set a data source as access-controlled, you must select this setting during
data store creation. You can't turn this setting on or off for an existing
data store.
To preview UI results for search apps that use third-party access
control, you must sign in to the federated console or use the web app.
See Preview your app .
Connect to your identity provider
The following section describes how to connect to your identity provider using
Google Cloud console.
Before you begin
Before connecting the identity provider, do the following:
Grant permissions to admins .
If you are connecting a third-party identity provider,
configure Workforce Identity Federation.
Connect identity provider
To specify an identity provider for Gemini Enterprise and turn on data
source access control, follow these steps:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Click Settings > Authentication .
Click Add identity provider for the location you want to update.
Click Add identity provider and select your identity provider type.
If you select 3rd party identity , you also need to select the workforce
pool that applies for your data sources.
Click Save changes .
Grant permissions to users
Users need the Discovery Engine User ( roles/discoveryengine.user ) role to access, manage, and
share apps.
Identity provider type
Description
Google Identity
If you use Google Identity, Google recommends
creating a Google group
that includes all employees who use the app.
If you're a Google Workspace
administrator, you can include all users in an organization to a
Google group by following the steps in
Add all your organization's users to a
group .
Grant the Discovery Engine User ( roles/discoveryengine.user ) role to users. For more
information on adding the role, see
Grant permissions to your users .
Third-party identity provider
Grant the Discovery Engine User ( roles/discoveryengine.user ) role to your users and
workforce pool
users in IAM policies . For more
information on adding the role, see
Grant permissions to your users .
Google recommends configuring group claims for your third-party
identities.
Impact of identity provider setting changes on ingestion connectors
When you change identity settings, such as the identity provider or
Workforce Identity Federation pool, existing data stores that use data ingestion are
not automatically updated. To apply the new identity settings, you must delete
and recreate the affected data stores.
The following table summarizes which identity setting changes require data store
recreation:
Change type
Requires data store recreation
Switching between Google Identity and a third-Party identity provider
Yes
Completely changing to a new Workforce Identity Federation pool
Yes
Editing attribute mapping within the current identity provider
No
Switching to a new provider within the same Workforce Identity Federation
pool. For example, using Entra instead of Okta.
No
What's next?
If you have Cloud Storage or BigQuery data stores and you want to
enforce access control on the data, then you must
configure access controls for custom data sources .
If you connect to your own custom data source, learn how you can
set up external identities .
Preview your app .
When you are ready to share the app with your users, you can turn on the app
and share the URL with your user. Users need to sign in before they can
access the app. For more information, see
View the search web app .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
