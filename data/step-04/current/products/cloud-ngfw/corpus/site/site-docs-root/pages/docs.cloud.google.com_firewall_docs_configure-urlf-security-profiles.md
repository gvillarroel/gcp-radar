---
title: "Create and manage URL filtering security profiles \_|\_ Cloud Next Generation\
  \ Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles
  title: "Create and manage URL filtering security profiles \_|\_ Cloud Next Generation\
    \ Firewall \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Create and manage URL filtering security profiles
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create and manage security profiles
of type url-filtering by using the Google Cloud console and the Google Cloud CLI.
Note: To check the progress of the operations listed on this page,
make sure that your user role has the following
Compute Network User role ( roles/compute.networkUser )
permissions:
networksecurity.operations.get
networksecurity.operations.list
Before you begin
You must enable
the Network Security API
in your project.
Install the gcloud CLI if you want to run the gcloud
command-line examples in this guide.
Roles
To get the permissions that you need to create, view, update, or delete
security profiles, ask your administrator to grant you the necessary
IAM roles on your
organization. For more information about granting roles, see
Manage access .
Create a URL filtering security profile
When you create a URL filtering security profile (security profile of the type
url-filtering ), you can specify the name of the security
profile as a string or as a unique URL identifier. The unique URL for an
organization-scoped security profile can be constructed in the following format:
organization/ ORGANIZATION_ID /locations/ LOCATION /securityProfiles/ SECURITY_PROFILE_NAME
If you use a unique URL identifier for the security profile name,
the organization and location of the security profile is already included in
the URL identifier. However, if you use only the security profile name, you must
specify the organization and location separately.
For more information about unique URL identifiers, see
security profile specifications .
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.create
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
In the project selector menu, select your organization.
Select the Security profiles tab.
Click Create profile .
Enter a name in the Name field.
Don't include sensitive information such as
personally identifiable information or security data in the
security profile name.
Optional: Enter a description in the Description field.
To create a Cloud Next Generation Firewall Enterprise security profile, in the Purpose
section, select Cloud NGFW Enterprise .
To create a URL filtering security profile, in the Type section,
select URL Filtering .
In the URL filters section, click the Create URL filter button.
In the Create a URL filter pane, specify the following details:
Priority : specify the priority of the URL filter.
Action : specify the action that Cloud NGFW
performs on the traffic.
Allow : allows the connections that matches a URL.
Deny : denies the connections that matches a URL.
URL list : specify a list of URLs or matcher
strings. Each URL or matcher string entry must appear in its own line
without any spaces or delimiters. Each entry can consist of a domain
only. For more information about the matcher strings, see
Matcher strings for URLs .
Click Create .
gcloud
Create a YAML file with the following content:
name: NAME
type: PROFILE_TYPE
urlFilteringProfile:
urlFilters:
- filteringAction: ACTION
priority: PRIORITY
urls: URL [, URL ,...]
Replace the following:
NAME : the name of the URL filtering security profile; you can
specify the name as a string or as a unique URL identifier.
Don't include sensitive information such as
personally identifiable information or security data in the
security profile name.
PROFILE_TYPE : specify the security profile type as
url-filtering .
ACTION : specify one of the following actions:
allow : allows connections that match against a URL
deny : denies connections that match against a URL
PRIORITY : priority of a URL filter ranging from 0 to
2147483647.
URLs : a comma-separated list of matcher strings. For
example, www.example.com and www.examplepetstore.com .
To create the URL filtering security profile, run the
gcloud network-security security-profiles import command :
gcloud network-security security-profiles import NAME \
--location LOCATION \
--source FILE_NAME \
--organization ORGANIZATION_ID
Alternatively, you can create a URL filtering security profile without a
YAML file by using the gcloud network-security security-profiles url-filtering create command :
gcloud network-security security-profiles url-filtering create NAME \
--location LOCATION \
--organization ORGANIZATION_ID \
--description DESCRIPTION
Replace the following:
NAME : the name of the URL filtering security profile; you can
specify the name as a string or as a unique URL identifier.
Don't include sensitive information such as
personally identifiable information or security data in the
security profile name.
If you use a unique URL identifier for the NAME flag, you can omit
the LOCATION and ORGANIZATION flags.
LOCATION : the location of the URL filtering security profile.
Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
FILE_NAME : the name of the YAML file. For example,
url-filtering-sp.yaml .
ORGANIZATION_ID : the organization where the URL filtering security
profile is created. If you use a unique URL identifier for the
name flag, you can omit the ORGANIZATION_ID flag.
DESCRIPTION : an optional description for the URL filtering security
profile.
For example, the following code snippet shows an example of a URL filtering
security profile that allows requests to www.example.com and www.examplepetstore.com ,
but denies requests to all other domains:
urlFilteringProfile:
urlFilters:
- filteringAction: ALLOW
priority: 1000
urls: ['www.example.com', 'www.examplepetstore.com']
# the following URL filter is implicit and will be processed last
- filteringAction: DENY
priority: 2147483647
urls: ['*']
Implicit deny URL filter
The URL filtering security profile always includes a default URL filter with the
lowest priority (2147483647) that denies all connections that don't match the
higher priority URL filters. The following code snippet shows an example of the
implicit deny URL filter:
urlFilteringProfile:
urlFilters:
# user-specified URL filters
- filteringAction: DENY
priority: 1000
urls: ['www.example.com','www.examplepetstore.com']
- filteringAction: ALLOW
priority: 2000
urls: ['www.example.org','www.example.net']
# implicit deny URL filter that will be processed last
- filteringAction: DENY
priority: 2147483647
urls: ['*']
You can see the implicit deny URL filter when viewing or exporting a URL
filtering security profile. You cannot modify or remove the implicit filter.
For example, if you want to change the default action of a profile from DENY
(enforced by implicit filter) to ALLOW , you must add an explicit filter that
Cloud NGFW processes before the implicit filter.
urlFilteringProfile:
urlFilters:
# user-specified filters
- filteringAction: DENY
priority: 1000
urls: ['www.example.com','www.examplepetstore.com']
# explicit allow URL filter that you can add
- filteringAction: ALLOW
priority: 2000
urls: ['*']
# implicit deny URL filter that will be processed last
- filteringAction: DENY
priority: 2147483647
urls: ['*']
Matcher strings for URLs
Matcher strings are the values that you specify in the urls field of a URL
filter. You can specify one or more matcher strings inside a URL
filter.
Wildcards
Each matcher string in a URL list supports a wildcard character (*) in a limited
manner.
Each matcher string can support only a single asterisk (*) such that the
asterisk is either the first or the only character.
The asterisk (*) can have the following interpretations:
An asterisk (*) before a period (.) indicates all subdomains of the
domain.
For example, the matcher string *.example.com matches with
a.example.com and a.b.c.example.com but doesn't match with
example.com .
urlFilteringProfile:
urlFilters:
# user-specified filters
- filteringAction: ALLOW
priority: 1000
urls: ['*.example.com']
# implicit deny URL filter that will be processed last
- filteringAction: DENY
priority: 2147483647
urls: ['*']
In the preceding example, Cloud NGFW allows traffic towards
the subdomains of example.com but denies the rest of the outbound traffic.
An asterisk (*) before a label indicates the domain and all the subdomains.
For example, the matcher string *example.com matches with
a.example.com , a.b.c.example.com , as well as example.com .
urlFilteringProfile:
urlFilters:
# user-specified filters
- filteringAction: ALLOW
priority: 1000
urls: ['*example.com']
# implicit deny URL filter that will be processed last
- filteringAction: DENY
priority: 2147483647
urls: ['*']
In the preceding example, Cloud NGFW allows traffic towards
example.com as well as the subdomains of example.com but denies the rest
of the outbound traffic.
An asterisk (*) before a domain extension (such as .com ) indicates
all domains (and their subdomains) that use the domain extension.
For example, the matcher string *.com matches with example.com
and examplepetstore.com and all their subdomains.
The following code snippet demonstrates how to allow
all domains (and their subdomains) that end in .com but deny the
remaining traffic.
urlFilteringProfile:
urlFilters:
# Allow all domains (and their subdomains) that end in '.com'
- filteringAction: ALLOW
priority: 2000
urls: ['*.com']
# implicit deny URL filter that will be processed last
- filteringAction: DENY
priority: 2147483647
urls: ['*']
The following code snippet demonstrates how to deny all
subdomains of example.com and examplepetstore.com but allow these
domains and all other domains (and their subdomains) that end in
.com .
urlFilteringProfile:
urlFilters:
# Deny all subdomains of example.com
- filteringAction: DENY
priority: 1000
urls: ['*.example.com']
# Deny all subdomains of examplepetstore.com
- filteringAction: DENY
priority: 1500
urls: ['*.examplepetstore.com']
# Allow all domains (and their subdomains) that end in '.com'
- filteringAction: ALLOW
priority: 2000
urls: ['*.com']
# implicit deny URL filter that will be processed last
- filteringAction: DENY
priority: 2147483647
urls: ['*']
Cloud NGFW doesn't interpret the asterisk (*) as a regular
expression wildcard.
For example, *example.test doesn't match with
newexample.test or a.newexample.test . It only matches with
example.test and the subdomains of example.test .
A single asterisk (*) with no other characters indicates a match for
all requests.
For example, the matcher string in the lowest priority explicit allow URL
filter contains only an asterisk (*) and has an ALLOW action
that overrides the default action of DENY . This happens because the
implicit deny URL filter enforces the default DENY for any requests
that don't match higher priority URL filters.
The highest priority URL filter—which is either an explicit ALLOW or
an implicit DENY —determines whether Cloud NGFW allows or
denies connections when it lacks SNI or domain information. This can
happen with unencrypted HTTP traffic, or when TLS inspection is
disabled for encrypted message headers.
urlFilteringProfile:
urlFilters:
# user-specified filters
- filteringAction: DENY
priority: 1000
urls: ['www.example.com','www.examplepetstore.com']
# explicit allow URL filter that you can add
- filteringAction: ALLOW
priority: 2000
urls: ['*']
# implicit deny URL filter that will be processed last
- filteringAction: DENY
priority: 2147483647
urls: ['*']
Limitations
Matcher strings represent either domains or subdomains.
Matcher strings don't support the slash character (/). For example: www.example.com/images .
Matcher strings don't support schemes or protocol names. For example: http://www.example.com .
Matcher strings don't support port numbers. For example: www.example.com:80 .
Matcher strings support only ASCII letters, numbers, and special characters:
hyphen (-), dot (.), and asterisk (*).
You must use Punycode to
convert domain names that contain characters other
than ASCII letters, numbers, hyphens (-), periods (.), or asterisks (*).
Punycode is an encoding standard that transforms Unicode domain names into
an ASCII-compatible format.
If you have two or more labels, use periods (.) to separate them. A label can
contain one or more hyphens (-); however, the label must not start or end with a
hyphen. Each label can include a maximum of 63 characters.
A URL filter doesn't support using a period at the beginning of a domain name
or consecutive periods within a matcher string. A URL filter allows trailing
periods, but Cloud NGFW removes them before saving a URL filter.
Cloud NGFW converts the matcher strings to lowercase before it
saves the URL filter. Cloud NGFW doesn't perform any other
normalization.
Each domain name can include a maximum of 255 characters.
URL filters for multi-level subdomains
You can use URL filters with different priorities and actions to control network
traffic to multi-level subdomains. You can also use the wildcard character (*)
in matcher strings to specify domains and subdomains.
For example, consider a scenario where you implement the following
behavior:
Allow a.b.c.example.com
Deny *.b.c.example.com (deny all other subdomains of b.c.example.com )
Allow *.c.example.com (allow all other subdomains of c.example.com )
Deny *.example.com (deny all other subdomains of example.com )
Allow example.com
Allow everything else
The following code snippet implements this scenario:
urlFilteringProfile:
urlFilters:
# Allow 'a.b.c.example.com'
- filteringAction: ALLOW
priority: 1000
urls: ['a.b.c.example.com']
# Deny all subdomains of 'b.c.example.com'
- filteringAction: DENY
priority: 2000
urls: ['*.b.c.example.com']
# Allow all subdomains of 'c.example.com'
- filteringAction: ALLOW
priority: 3000
urls: ['*.c.example.com']
# Deny all subdomains of 'example.com'
- filteringAction: DENY
priority: 4000
urls: ['*.example.com']
# explicit allow URL filter
- filteringAction: ALLOW
priority: 5000
urls: ['*']
# implicit deny URL filter that will be processed last
- filteringAction: DENY
priority: 2147483647
urls: ['*']
View a URL filtering security profile
You can view the details of a specific URL filtering security profile in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.describe
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
Click a security profile of type URL filtering to view the
profile details.
gcloud
To view the details of a URL filtering security profile, use the
gcloud network-security security-profiles url-filtering describe command :
gcloud network-security security-profiles url-filtering describe NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
Replace the following:
NAME : the name of the security profile of type
url-filtering that you want to describe; you can specify the name
as a string or as a unique URL identifier.
ORGANIZATION_ID : the organization where the URL filtering
security profile is created. If you use a unique URL identifier
for the NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the URL filtering security
profile. Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
List URL filtering security profiles
You can list all the URL filtering security profiles in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.list
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
gcloud
To list all the URL filtering security profiles, use the
gcloud network-security security-profiles url-filtering list command :
gcloud network-security security-profiles url-filtering list \
--organization ORGANIZATION_ID \
--location LOCATION
Replace the following:
ORGANIZATION_ID : the organization where the URL filtering security
profiles are created.
LOCATION : the location of the URL filtering security profiles.
Location is always set to global .
Delete a URL filtering security profile
You can delete a URL filtering security profile by specifying its name,
location, and organization. However, if a security profile is referenced by a
security profile group, that security profile cannot be deleted.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.delete
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
Select the security profile that you want to delete, and then
click Delete .
Click Delete again to confirm.
gcloud
To delete a URL filtering security profile, use the
gcloud network-security security-profiles url-filtering delete command :
gcloud network-security security-profiles url-filtering delete NAME \
--organization ORGANIZATION_ID \
--location LOCATION
Replace the following:
NAME : the name of the URL filtering security profile that you want to
delete; you can specify the name as a string or as a unique URL
identifier.
ORGANIZATION_ID : the organization where the URL filtering security
profile is created. If you use a unique URL identifier for the
NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the URL filtering security profile.
Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
Import a URL filtering security profile
You can import a URL filtering security profile (either custom-created or
previously exported) from YAML file. When
importing a URL filtering security profile, if a profile with the same name
already exists, Cloud NGFW updates the existing profile.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.create
networksecurity.securityProfiles.update (required only if a
profile with the same name already exists)
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
gcloud
To import a URL filtering security profile from a YAML file, use the
gcloud network-security security-profiles import command :
gcloud network-security security-profiles import NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--source FILE_NAME
Replace the following:
NAME : the name of the security profile of type
url-filtering that you want to import; you can specify the name
as a string or as a unique URL identifier.
If you use a unique URL identifier for the NAME flag, you can omit
the ORGANIZATION_ID and LOCATION flags.
ORGANIZATION_ID : the organization where the URL filtering
security profile is created. If you use a unique URL identifier
for the NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the URL filtering security
profile. Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
FILE_NAME : the path to the YAML file containing the
configuration export data for the URL filtering security profile. For
example, url-filtering-sp.yaml .
The YAML file must not contain any output-only fields. Alternatively, you
can omit the source flag to read from the standard input.
Export a URL filtering security profile
You can export a URL filtering security profile to a YAML file. For
example, instead of using the user-interface to modify a large security profile,
you can use this functionality to export the security profile, modify it
quickly, and import it back.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.describe
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
gcloud
To export a URL filtering security profile to a YAML file, use the
gcloud network-security security-profiles export command :
gcloud network-security security-profiles export NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--destination FILE_NAME
Replace the following:
NAME : the name of the security profile of type
url-filtering that you want to export; you can specify the name
as a string or as a unique URL identifier.
If you use a unique URL identifier for the NAME flag, you can omit
the ORGANIZATION_ID and LOCATION flags.
ORGANIZATION_ID : the organization where the URL filtering
security profile is created. If you use a unique URL identifier
for the NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the URL filtering security
profile. Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
FILE_NAME : the path to the YAML file into which
Cloud NGFW will export the configuration for the URL filtering
security profile. For example, url-filtering-sp.yaml .
The exported configuration data doesn't contain any output-only fields.
Alternatively, you can omit the destination flag to write to the
standard output.
What's next
Create and manage security profile groups
Create and manage firewall endpoints
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
