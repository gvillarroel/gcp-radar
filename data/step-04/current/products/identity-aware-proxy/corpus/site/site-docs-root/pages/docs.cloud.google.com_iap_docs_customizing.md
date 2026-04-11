---
title: "Customize IAP \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/customizing
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/customizing
  title: "Customize IAP \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Customize IAP
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to customize Identity-Aware Proxy
(IAP) settings. With these settings, you can control
behaviors including:
Compatibility with GKE Enterprise and Istio on Google Kubernetes Engine.
The handling of CORS preflight requests.
How users are authenticated.
The error page shown to users when access is denied.
Manage settings
You can view and update IAP settings on load balancer and
App Engine apps using the Google Cloud console, the IAP API,
or the Google Cloud CLI.
To update IAP settings on all resources, including folders,
projects, and organizations, use the Google Cloud CLI or API.
To manage settings in IAP:
Console
To view and modify settings using the Google Cloud console:
Go to the Identity-Aware Proxy page .
Go to the Identity-Aware Proxy page
Find your resource on the APPLICATIONS tab.
Open the more actions menu more_vert and click Settings .
Click Save .
gcloud
To get and modify settings using the Google Cloud CLI, use the
gcloud iap settings get
and
gcloud iap settings set
commands as follows:
To get settings for a project, folder, or organization, use the following
commands. To configure the IAP settings by using the Google Cloud console or the gcloud CLI, see Customizing IAP .
gcloud iap settings get --project = PROJECT-ID
gcloud iap settings get --folder = FOLDER-ID
gcloud iap settings get --organization = ORGANIZATION-ID
To get settings for a specific IAP resource type
under a project:
gcloud iap settings get --project = PROJECT-ID \
--resource-type = RESOURCE-TYPE-NAME
To set settings for a project, folder, or organization, or an
IAP resource type under a project, create a JSON or
YAML file that contains the desired new settings and specify the path to
the file. See the
gcloud iap settings set
topic for more information:
gcloud iap settings set SETTING_FILE --project = PROJECT-ID \
--resource-type = RESOURCE-TYPE-NAME
API
To get and modify settings using the IAP API, make
requests using either the GET or PATCH HTTP verbs to the selected
resource endpoint in Google Cloud. Combine the :iapSettings path
suffix, a resource path (as detailed in
Resources and permissions ),
and an appropriate HTTP method to get or modify a setting. See
getIapSettings()
and
updateIapSettings()
for more information:
To get or set settings for a specific IAP resource type
under a project:
https://iap.googleapis.com/v1/projects/ PROJECT-ID /iap_web/appengine- APP-ID /services/ SERVICE-ID /versions/ VERSION-ID :iapSettings
To get or set settings for a project:
https://iap.googleapis.com/v1/projects/ PROJECT-ID :iapSettings
To get or set settings for a folder:
https://iap.googleapis.com/v1/folders/ FOLDER-ID :iapSettings
To get or set settings for an organization:
https://iap.googleapis.com/v1/organizations/ ORGANIZATION-ID :iapSettings
IAP settings roles and permissions
This section describes the roles and permissions
that are required to view and update IAP settings.
Settings roles
You can grant the IAP Settings Admin
( roles/iap.settingsAdmin ) role at the organization, folder, and
project level. To see the permissions that the IAP Settings Admin role grants,
see Settings permissions .
To learn more about roles and permissions for IAP, see
Identity-Aware Proxy roles and permissions .
The following basic roles provide these permissions:
The Project Viewer ( roles/viewer ) role grants all
getSettings permissions.
The Editor ( roles/editor ) role grants all of the permissions that
are described in the table.
Important: Don't grant IAM basic roles
in a production environment, but you can grant them in a development or test
environment.
Settings permissions
The following table lists the IAM permissions that are
required to read and modify settings for each resource type. For a description
of the different resource types, see Resources and permissions .
Resource
Permission for viewing settings
Permission for modifying settings
Organization
iap.organizations.getSettings
iap.organizations.updateSettings
Folder
iap.folders.getSettings
iap.folders.updateSettings
Project
iap.projects.getSettings
iap.projects.updateSettings
All web services
iap.web.getSettings
iap.web.updateSettings
Web Types
iap.webTypes.getSettings
iap.webTypes.updateSettings
Web Services
iap.webServices.getSettings
iap.webServices.updateSettings
Web Service Versions
iap.webServiceVersions.getSettings
iap.webServiceVersions.updateSettings
Web Types
iap.webTypes.getSettings
iap.webTypes.updateSettings
To learn more about granting IAM roles, see Granting, changing, and revoking access .
Customize IAP settings
IAP provides the following customization settings:
Field
Description
access_settings.cors_settings.allow_http_options
Control HTTP OPTIONS (CORS preflight)
access_settings.oauth_settings.login_hint
Simplify login for users of a G Suite domain
application_settings.access_denied_page_settings.access_denied_page_uri
Show a custom error page when access is denied
application_settings.csm_settings.rctoken_aud
Issue GKE Enterprise and Istio RCTokens
access_settings.gcip_settings
Authenticate with Identity Platform
access_settings.ReauthSettings
Set a reauthentication policy. For details, see Configuring reauthentication
You can apply settings at the project level, or at any lower
IAP resource level.
You can configure settings for web-based IAP resources but
not resources accessed with
IAP for TCP forwarding .
Using access_settings.cors_settings.allow_http_options as an example, you can
configure customization settings as follows:
YAML
access_settings:
cors_settings:
allow_http_options: "false"
JSON
{
"access_settings": {
"cors_settings": {
"allow_http_options": "false"
}
}
}
The following sections provide more information on each setting.
Allow HTTP OPTIONS requests (CORS preflight)
Field
Default value
access_settings.cors_settings.allow_http_options
false
The web's
same-origin policy
blocks browsers from sending AJAX requests between websites.
By default, JavaScript on a page served from one origin can't use AJAX to send
a request to an app secured with IAP hosted on a different
origin.
In some cases ,
browsers will automatically try a request, but discard the content of the
response if it doesn't include an Access-Control-Allow-Origin header. To allow
these types of requests, include this header in your app's responses.
In other cases, the browser will send a
CORS preflight request ,
a type of HTTP OPTIONS request, before sending the cross-origin request. If
your app doesn't respond with an appropriate preflight response (containing the
required Access-Control-* response headers), the browser will block the
request with an error. Additionally, since preflight requests aren't sent with
any authentication credentials (such as a IAP session
cookie), IAP will also respond with an error.
To allow these requests:
Add code to your app that responds to the OPTIONS requests.
Change the setting access_settings.cors_settings.allow_http_options to
true so that IAP passes OPTIONS requests through
to your application.
Authenticate using a Google Workspace domain
Note: This feature is available only as part of a paid enterprise security
subscription. You can
sign up if interested.
Field
Default value
access_settings.oauth_settings.login_hint
""
If only members of a specific Google Workspace domain will use your app,
you can configure IAP to optimize the authentication flow.
This has several benefits:
If a user is signed in with multiple accounts (such as work account
and a personal account), the system will automatically select their work
account instead of displaying the account selection UI.
If a user isn't signed into their Google Account, the sign-in UI
will automatically fill the domain portion of their email address (meaning
the user only needs to type alice instead of alice@example.com , for
example).
If your Google Workspace domain is configured to
use a third-party single sign-on provider ,
the system will show that custom sign-in page instead of Google's.
To enable this behavior, set the value of
access_settings.oauth_settings.login_hint to your Google Workspace
domain name (such as example.com ). Domain ownership must have been verified :
you cannot use arbitrary internet DNS domains that you own. (Domains that have
been added as a Google Workspace primary or secondary domain
are verified and thus can be used here.)
If you need to authenticate users outside the domain, you can use
programmatic authentication .
Warning: The login_hint setting is not a replacement for access control. Always
enforce an appropriate access policy if you want
to restrict access to users outside your domain.
For more information, see the
OpenID Connect documentation .
Set a custom access denied error page
Note: This feature is available only as part of a paid enterprise security
subscription. You can
sign up if interested.
Field
Default value
application_settings.access_denied_page_settings.access_denied_page_uri
""
You can set a URL in this field that redirects users to a custom page instead of
the default IAP error page whenever access is denied by a
policy.
You can also embed the troubleshooting URL with this feature. For more information, see Enabling the troubleshooting URL for your custom Access Denied error page .
Issue GKE Enterprise and Istio RCToken mesh IDs
Beta
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Field
Default value
application_settings.csm_settings.rctoken_aud
""
If you're using Istio on
GKE , you can configure
IAP to produce an Istio-compatible RCToken. If this field is
set to a non-empty string, IAP will add an
Ingress-Authorization HTTP header containing an RCToken. The aud claim
will be set to the value of the field.
Authenticate with Identity Platform
Warning: Enabling the gcip_settings setting significantly changes the way
IAP authenticates users. Identity Platform
doesn't support IAM, so IAP won't enforce
any IAM policies for requests to your application.
Field
Default value
access_settings.gcip_settings
null
By default, IAP uses Google's built-in identity
system. If this field is set, IAP will use
Identity Platform instead to authenticate users.
Note: This field cannot be set using the Google Cloud console.
Understand settings inheritance in the resource hierarchy
IAP always evaluates requests for a specific
web service version . This type of resource is at the lowest level of the
resource hierarchy, which looks like this:
- Organization
- Folder
- Project
- All web services
- Web service type
- Web service
- Web service version
To determine the settings to apply for a web service version,
IAP starts with a default set of values, and then
walks the hierarchy from top to bottom. Settings are applied as they are found,
so values set at a lower level override values set at a higher level.
For example, if access_settings.cors_settings.allow_http_options is set to
true at the project level, but false at the service level, then effective
value will be false .
See Resources and permissions
to learn more about the IAP resource hierarchy.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
