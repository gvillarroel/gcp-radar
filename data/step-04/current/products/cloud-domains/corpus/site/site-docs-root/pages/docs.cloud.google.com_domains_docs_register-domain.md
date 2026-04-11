---
title: "Register a domain \_|\_ Cloud Domains \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/domains/docs/register-domain
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/register-domain
  title: "Register a domain \_|\_ Cloud Domains \_|\_ Google Cloud Documentation"
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
Register a domain
Stay organized with collections
Save and categorize content based on your preferences.
Note: On September 7, 2023 Squarespace acquired all domain registrations and related
customer accounts from Google Domains. For more information about how this change affects
Cloud Domains, see
Cloud Domains feature deprecations ,
Renew an expired domain registration , and Squarespace purchase of Google Domains FAQ .
This page describes how to search for an available domain name and register the
domain by using Cloud Domains. Cloud Domains lets you
to choose your DNS provider and customize your DNS settings.
After you register your domain, Cloud Domains automatically
renews your domain registration as long as your Cloud Billing account
stays active. You can turn off automatic renewal at any time after your domain is
registered.
Before you begin
Before you start using Cloud Domains to register your domains,
complete the following steps:
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
Note: You can delete the project that you create, but the domain remains
registered.
Set up and register a domain
To use Cloud Domains to register a domain, complete the
following tasks:
Search for a domain name.
Configure DNS for the domain.
Choose privacy settings for your domain.
Specify your contact information .
Note: Starting in August 2025: For generic TLD domains, the
ICANN Registration Data Policy
no longer requires both administrative and technical registrant
contact information. If you submit administrative and technical
contact information, it is ignored for generic TLD domains.
There are no changes for country-code TLD domains and all contact
information continues to be required.
Verify your contact information.
When registering a domain that is owned by a company, the registrant must
provide the company's contact details, such as the email address and phone
number. If the registrant provides their personal contact details, the company
might lose access to the domain when the registrant leaves.
Note: Cloud Domains does not support premium
domains for registration.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
domains.registrations.list (to search for and to get register
parameters for the domain)
domains.registrations.create (to register the domain)
productrequirementsservice.requirements.check (to verify
that the Squarespace Terms of Service are accepted for the project)
productrequirementsservice.requirements.record (to record
the acceptance of Squarespace Terms of Service)
Roles
roles/domains.admin
Console
In the Google Cloud console, go to the
Cloud Domains page.
Go to Cloud Domains
Click Register domain .
You must accept the Squarespace Terms of Service for your project.
If not previously accepted, you are prompted to first read the
Squarespace Terms of Service page and then accept to continue.
Search for an available domain, and then identify the domain name that
you want to purchase. Pricing is listed for each available domain.
Click add_shopping_cart Select
next to the domain name that you want to purchase.
You can add as many domains as you like, subject to your available
quota. For details, see Quotas and limits .
The total pricing based on your selection is calculated and displayed
in the Search domain section. To remove a domain from your cart,
click delete Deselect next to the
domain name.
After you set up billing and complete your domain registration,
Cloud Domains automatically sets the registration to
Auto-renew .
Note: You can turn off automatic renewal at any time after you've
registered your domain. For more information, see
Turn off automatic renewal for a domain name .
Click Continue .
In the DNS configuration section, choose one of the following DNS
providers for your name servers. If you are registering multiple
domains, you can choose individual settings for each domain.
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
Enter your contact information
for the domain, which is necessary for
ICANN to
reach you if there are any problems. By default, the same contact
details that you enter are applied to the registrant, administrative,
and technical contacts. To enter different information for each type of
contact, you can edit your contact
settings
later.
If you are registering more than one domain, you can choose to
apply the same contact details to all domains or choose
to enter different contact details for each domain.
Click Register .
Processing your registration can take a few minutes.
Cloud Domains or Squarespace sends a verification
email to the email address that you enter.
gcloud
To search for an available domain name, use the
gcloud domains registrations search-domains command :
gcloud domains registrations search-domains SEARCH_TERM
Replace SEARCH_TERM with any non-empty string to
search for a domain name, such as example . This search returns
suggestions for possible domain names that you can register.
To check up-to-date availability for a domain name and get the
parameters needed to register a new domain, including price,
availability, supported privacy modes, and notices, use the
gcloud domains registrations get-register-parameters command :
gcloud domains registrations get-register-parameters DOMAIN_NAME
Replace DOMAIN_NAME with the domain name that you
want to check availability for, such as example.app .
Your output looks similar to the following:
availability: AVAILABLE
domainName: example.app
domainNotices:
‐ HSTS_PRELOADED
supportedPrivacy:
‐ PRIVATE_CONTACT_DATA
‐ PUBLIC_CONTACT_DATA
yearlyPrice:
currencyCode: USD
units: '12'
You can choose a DNS provider for your name servers based on the
DNS provider options explained
in the overview. If you choose Cloud DNS as your DNS provider,
you must first create a managed public zone for your domain.
To create a managed public zone, use the
dns managed-zones create command :
gcloud dns managed-zones create CLOUD_DNS_ZONE_NAME \
--description=" DESCRIPTION " \
--dns-name= DOMAIN_NAME \
Replace the following:
CLOUD_DNS_ZONE_NAME : a name for your zone
DESCRIPTION : a description for your zone
DOMAIN_NAME : the DNS domain name for your zone,
such as example.com
Use the same domain name that you used in the previous commands,
which is the domain name that you are registering.
To register the domain, use the gcloud domains registrations
register command :
gcloud domains registrations register DOMAIN_NAME
Replace DOMAIN_NAME with the domain name that you want
to register, such as example.app .
Your output looks similar to the following when you register the domain
example.com by using name servers provided by Cloud DNS:
Yearly price: 12.00 USD
Do you agree to pay this yearly price for your domain (y/N)? y
You can provide your DNS settings by specifying name servers or a Cloud
DNS Managed Zone name
[1] Provide name servers list
[2] Provide Cloud DNS managed zone name
Please enter your numeric choice (2): NAME_SERVER_CHOICE
Cloud DNS Managed Zone name: CLOUD_DNS_ZONE
Cloud DNS Zone ' CLOUD_DNS_ZONE ' is not signed. DNSSEC won't be enabled.
Contact data not provided using the --contact-data-from-file flag.
Do you want to enter it interactively (Y/n)? y
Full name: NAME
Organization (if applicable): ORGANIZATION
Email: EMAIL_ADDRESS
Enter phone number with country code, e.g. "+1.8005550123".
Phone number: PHONE_NUMBER
Enter fax number with country code, e.g. "+1.8005550123".
Fax number (if applicable): FAX_NUMBER
Enter two-letter Country / Region code, e.g. "US" or "PL".
Refer to the guidelines for entering address field information at https://support.google.com/business/answer/6397478.
Country / Region code: COUNTRY_CODE
Postal / ZIP code: ZIP_CODE
State / Administrative area (if applicable): STATE
City / Locality: CITY
Address Line 1: ADDRESS_LINE_1
Address Line 2 (if applicable): ADDRESS_LINE_2
Address Line 3 (if applicable):
Specify contact privacy
[1] private-contact-data
[2] public-contact-data
Please enter your numeric choice (1): DATA_PRIVACY_CHOICE
Waiting for 'operation-1597880129306-5ad437580410d-2c65d582-0861c5b7' to
complete...done.
Created registration [example.com] Note:
The domain is not yet registered.
Wait until the registration resource changes state to ACTIVE.
Replace the following:
NAME_SERVER_CHOICE : choose the name server option
based on your
DNS provider choice
CLOUD_DNS_ZONE : the Cloud DNS managed zone
name
NAME : your full name—for example,
Alice Smith
ORGANIZATION : (optional) your organization—for
example, Doe Corp
EMAIL_ADDRESS : your email address for
verification—for example, alice@example.net
PHONE_NUMBER : the phone number of the contact in
international format—for example, +1-800-555-0123
FAX_NUMBER : (optional) the phone number of the
contact in international format—for example, +1-800-555-0123
COUNTRY_CODE : the country or region code of the
address—for example, US for United States
ZIP_CODE : the postal code or ZIP code of the
address—for example, 94043
STATE : the state or administrative area of the
address—for example, CA
CITY : the city or locality of the
address—for example, Mountain View
ADDRESS_LINE_1 : the first address line of the
registrant—for example, 1599 Bayview Parkway
You can have up to 5 address lines, but only the first one is required.
ADDRESS_LINE_2 : (optional) the second address line
of the registrant—for example, APT. 123
You must enter the address accurately because it is used for domain
recovery in case you lose access to your registration. For details, see
the guidelines for entering address field information .
DATA_PRIVACY_CHOICE : your data privacy choice
For detailed information about privacy options, see
Privacy protection .
API
To search for an available domain name, use the
registrations.searchDomains method
with an empty request body:
GET https://domains.googleapis.com/v1/projects/ PROJECT_ID /locations/global/registrations:searchDomains?query= SEARCH_TERM
Replace the following:
PROJECT_ID : the ID of the project where the domain
registration is created
SEARCH_TERM : any non-empty string to
search for a domain name, such as example
This search returns suggestions for possible domain names that you can
register.
To check up-to-date availability for a domain name and get the
parameters needed to register a new domain, including price,
availability, supported privacy modes, and notices, use the
registrations.retrieveRegisterParameters method
with an empty body:
GET https://domains.googleapis.com/v1/projects/ PROJECT_ID /locations/global/registrations:retrieveRegisterParameters?domainName= DOMAIN_NAME
Replace the following:
PROJECT_ID : the ID of the project where the
managed zone is created
DOMAIN_NAME : the domain name that you want to check
availability for, such as example.app
The resulting response contains the yearlyPrice for the domain, which
you need to use in the registrations.register API call.
You can choose a DNS provider for your name servers based on the
DNS provider options explained
in the overview. If you choose Cloud DNS as your DNS provider,
you must first create a managed public zone for your domain.
To create a managed public zone, use the
managedZones.create method :
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones
{
"name": " ZONE_NAME ",
"description": " DESCRIPTION ",
"dnsName": " DOMAIN_NAME. ",
"visibility": "public"
}
Replace the following:
PROJECT_ID : the ID of the project where the managed
zone is created
ZONE_NAME : a name for your zone
DESCRIPTION : a description for your zone
DOMAIN_NAME. : the DNS suffix for your zone,
such as example.com
Important: The trailing dot in the managedZones.create method is
required.
The resulting response contains a nameServers list that you must use
in the registrations.register API call.
To register the domain, use the registrations.register
method :
POST https://domains.googleapis.com/v1/projects/ PROJECT_ID /locations/global/registrations:register
{
"registration": {
"domainName": " DOMAIN_NAME ",
"dnsSettings": {
"customDns": {
"nameServers": [
" NAME_SERVERS "
]
}
},
"contactSettings": {
"privacy": " CONTACT_PRIVACY ",
"registrantContact": {
"postalAddress": {
"regionCode": " REGION_CODE ",
"postalCode": " POSTAL_CODE ",
"administrativeArea": " SUBDIVISION ",
"locality": " CITY ",
"addressLines": [
" ADDRESS "
],
"recipients": [
" CONTACT_NAME "
],
"organization": " ORGANIZATION "
},
"email": " EMAIL_ADDRESS ",
"phoneNumber": " PHONE_NUMBER ",
"faxNumber": " FAX_NUMBER "
},
"adminContact": {
"postalAddress": {
"regionCode": " REGION_CODE ",
"postalCode": " POSTAL_CODE ",
"administrativeArea": " SUBDIVISION ",
"locality": " CITY ",
"addressLines": [
" ADDRESS "
],
"recipients": [
" CONTACT_NAME "
],
"organization": " ORGANIZATION "
},
"email": " EMAIL_ADDRESS ",
"phoneNumber": " PHONE_NUMBER ",
"faxNumber": " FAX_NUMBER "
},
"technicalContact": {
"postalAddress": {
"regionCode": " REGION_CODE ",
"postalCode": " POSTAL_CODE ",
"administrativeArea": " SUBDIVISION ",
"locality": " CITY ",
"addressLines": [
" ADDRESS "
],
"recipients": [
" CONTACT_NAME "
],
"organization": " ORGANIZATION "
},
"email": " EMAIL_ADDRESS ",
"phoneNumber": " PHONE_NUMBER ",
"faxNumber": " FAX_NUMBER "
}
}
},
"yearlyPrice": {
"currencyCode": " CURRENCY_CODE ",
"units": NUMBER_OF_UNITS
}
}
Replace the following:
PROJECT_ID : the ID of the project where you created
the registration resource
DOMAIN_NAME : the domain name that you want to
register, such as example.com
NAME_SERVERS : the name servers that you want to use
If you are using
Cloud DNS, use the nameServers field output that you got
from the managedZones.create.post API call.
CONTACT_PRIVACY : the preferred privacy setting for
the contact data
For detailed information about the available privacy options, see the
ContactPrivacy resource
in the Cloud Domains API.
Replace the following values for registrantContact , adminContact ,
and technicalContact . For detailed information about each type of
contact, see
Contact information .
REGION_CODE : the region code of the
address—for example, US for United States
POSTAL_CODE : the postal code of the
address—for example, 94043
SUBDIVISION : the highest administrative subdivision
of an address, such as a state, a province, an oblast, or a
prefecture—for example, CA for the state of California
CITY : the name of the city or town of the
address—for example, Mountain View
ADDRESS : the lower levels of an address—for
example, 1599 Amphitheater Parkway
CONTACT_NAME : the name of the contact
ORGANIZATION : (optional) the name of the
organization that is registering the domain—for example,
Doe Corporation
EMAIL_ADDRESS : the email address of the
contact—for example, john@example.com
PHONE_NUMBER : the phone number of the contact in
international format—for example, +1-800-555-0123
FAX_NUMBER : (optional) the fax number of the
contact in international format—for example, +1-800-555-0123
You must enter the address accurately because it is used for domain
recovery in case you lose access to your registration. For details, see
the guidelines for entering address field
information .
Replace the following values for the yearly price of the domain. This is
the amount obtained from the yearlyPrice field in the
registrations.retrieveRegisterParameters API call:
CURRENCY_CODE : the three-letter currency code
as defined in ISO
4217 —for
example, USD
NUMBER_OF_UNITS : the whole units of the
amount—for example, if currencyCode is USD , then one unit
is one US dollar
After the registration resource is created, it is in the state
REGISTRATION_PENDING . It should transition to the state ACTIVE in a few
minutes. This means that the registration process is successful and the domain
is ready to use.
To resolve any issues that arise, see the Troubleshooting section
During registration, a registration resource seems to be stuck in state
REGISTRATION_PENDING .
See also List registered domains .
If you receive an error message during the registration process, see
Errors during domain registration .
Verify your contact information
After you register your domain, Cloud Domains sends a
verification email to the address that you provided in your contact
information for the domain. This email includes a subject line that
states Action required: Please verify your email address or
[Action Required] Verify your Squarespace domain contact .
You must verify your contact information within 15 days or your domain
becomes inactive.
To verify your email address, complete the following steps:
Open the verification email from no-reply@squarespace.com .
Click Verify email now .
After Cloud Domains verifies your contact information, a
confirmation message is displayed that indicates that your email address is
verified.
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
To learn about Cloud DNS, see the
Cloud DNS overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
