---
title: "Quickstart: Register a domain with Cloud Domains \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/domains/docs/buy-register-domain
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/buy-register-domain
  title: "Quickstart: Register a domain with Cloud Domains \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud Domains
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Register a domain with Cloud Domains
Note: On September 7, 2023 Squarespace acquired all domain registrations and related
customer accounts from Google Domains. For more information about how this change affects
Cloud Domains, see
Cloud Domains feature deprecations ,
Renew an expired domain registration , and Squarespace purchase of Google Domains FAQ .
This quickstart shows you how to register a domain by using
Cloud Domains, including how to search for an available domain,
register it, and then verify the registration. After you register a domain,
Cloud Domains automatically renews your registration as long as
your Cloud Billing account stays active. After your
domain is registered, you can turn off automatic renewal at any time.
This page provides steps to register a domain by using the Google Cloud console.
To register a domain by using the Google Cloud CLI or the API, see
Register a domain .
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Domains API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Note: After you register a domain and enable billing, Google bills you for
the domain and automatically renews your registration. You can turn off
automatic renewal after you've registered your domain.
Get IAM permissions
This section provides information about Identity and Access Management (IAM) permissions
and how to get them.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
domains.registrations.create
productrequirementsservice.requirements.check
productrequirementsservice.requirements.record
Roles
roles/domains.admin
Console
In the Google Cloud console, go to the IAM page.
Go to IAM
Locate the principal that you want to grant administrator privileges,
then click Edit principal ( edit )
in that row.
In the Role list, select Cloud Domains Admin .
Click Save .
If you can't add the role, contact your administrator to add the role
before proceeding to the next step.
Register a domain
To register a domain, complete the steps in the following sections.
Search for a domain name
Console
In the Google Cloud console, go to the Cloud Domains page.
Go to Cloud Domains
Click Register domain .
You must accept the Squarespace Terms of Service for your project.
If not previously accepted, you are prompted to first read the
Squarespace Terms of Service page and then accept to continue.
Search for an available domain, and then identify the domain name that
you want to purchase. Pricing is listed for each available domain.
Click Select ( add_shopping_cart )
next to the domain name that you want to purchase.
You can add as many domains as you like, subject to your available
quota. For details, see Quotas and limits .
The total pricing based on your selection is calculated and displayed
in the Search domain section. To remove a domain from your cart,
click Deselect ( delete ) next to the
domain name.
After you set up billing and complete your domain registration,
Cloud Domains automatically sets the registration to
Auto-renew .
Note: You can turn off automatic renewal at any time. For more information,
see Turn off automatic renewal for a domain name .
Click Continue .
Configure DNS for the domain
Console
In the DNS configuration section, Use Cloud DNS is selected by
default. However, you can choose one of the DNS providers that's listed
in the following table. If you are registering multiple domains, you can
choose individual settings for each domain.
DNS provider
Description
Cost
Cloud DNS
Google recommends that you use Cloud DNS
as your DNS provider for all your name servers.
Additional Cloud DNS charges apply. For details,
see the Cloud DNS pricing page.
Custom name servers
If you choose this option, you can use Cloud Domains to configure your
name servers, and then use a third-party DNS provider to configure your DNS resource records.
Check with your DNS provider.
In the DNS provider section, select your DNS provider:
If you select the default value Use Cloud DNS (Recommended) ,
Google Cloud automatically creates a zone for you. To edit
the zone name and other details, do the following:
In the Cloud DNS zone list, select Setup new zone .
Make the required edits, and then click Save and continue .
If you already created a zone in Cloud DNS,
Cloud Domains selects that zone by default.
If you select Use custom name servers , enter at least two name
servers. To add more name servers, click Add another name server .
Click Continue .
Choose privacy settings for your domain
Console
By default, privacy protection is turned on. However, you can change the
settings to one of the privacy options in the following table.
Privacy option
Description
Privacy protection on
Caution: If your domain uses the PRIVATE_CONTACT_DATA setting for
contact privacy ,
it is changed to REDACTED_CONTACT_DATA when the domains are migrated to Squarespace.
Your data is not shared with a third-party contact privacy provider and is instead shown as
redacted in public contact databases like WHOIS. For more information, see
Cloud Domains feature deprecation .
Choosing this option ensures that your contact information is not available to the public. To
help protect your contact information and prevent spam, a third party provides alternate (proxy)
contact information for your domain in the public directory. The third-party provider forwards
all messages that are sent to your proxy contact information to the actual private contact
information.
Cloud Domains does not offer privacy protection for all domain endings or
top-level domains (TLDs) .
Registries , the organizations that manage
domain endings, have policies prohibiting the use of
privacy protection for certain TLDs.
Limit your info available to the public
Choosing this option makes limited non-identifying information available
to the public. The actual information available publicly depends on the domain that you have chosen. If you provide an organization name, it might be publicly visible.
Make all contact info public
Choosing this option makes all your contact information available to the public through the
WHOIS database .
For information about how to use contact privacy, see the ContactPrivacy section in the reference documentation.
To limit which information is available to the public, select
Limit your info available to the public . This option is only
available for .com and .net domains.
To make all contact information publicly available, select
Make all contact info public .
If you agree with the statement in the dialog, click I agree .
Click Continue .
Specify contact details
Console
Your contact information is necessary for
ICANN to reach
you if there are any problems. The information that you enter becomes the
public contact information for your domain in the
WHOIS database. For more information,
see Contact information .
Enter contact details for the domain. By default, the same contact
details that you enter are applied to the registrant, administrative, and
technical contacts. To enter different information for each type of
contact, you can edit your contact
settings
later.
If you are registering more than one domain, you can choose to apply the
same contact details to all domains or choose to enter different contact
details for each domain.
Click Register .
Processing your registration can take a few minutes.
Cloud Domains or Squarespace sends a verification email
to the email address that you enter.
Verify your contact information
After you register your domain, Cloud Domains or Squarespace
sends a verification email to the address that you provided in your contact
information for the domain. This email includes a subject line that states
Action required: Please verify your email address or [Action Required]
Verify your Squarespace domain contact .
You must verify your contact information within 15 days or your domain
becomes inactive.
To verify your email address, complete the following steps:
Open the verification email from no-reply@squarespace.com .
Click Verify email now .
After Cloud Domains verifies your contact information, a
confirmation message is displayed that indicates that your email
address is verified.
If there is an error in verifying your contact information, see the
Troubleshooting section
Registrant email verification issues .
What's next
To get an overview of Cloud Domains, see the
Cloud Domains overview .
To make changes to your registration settings, see
Edit registration settings for a domain .
To access API information, see the
Cloud Domains API .
To find solutions for common issues that you might encounter when using
Cloud Domains, see
Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
