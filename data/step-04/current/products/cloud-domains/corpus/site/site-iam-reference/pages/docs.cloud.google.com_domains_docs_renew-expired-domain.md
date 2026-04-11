---
title: "Renew a recently expired domain \_|\_ Cloud Domains \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/domains/docs/renew-expired-domain
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/renew-expired-domain
  title: "Renew a recently expired domain \_|\_ Cloud Domains \_|\_ Google Cloud Documentation"
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
Renew a recently expired domain
Stay organized with collections
Save and categorize content based on your preferences.
Note: On September 7, 2023 Squarespace acquired all domain registrations and related
customer accounts from Google Domains. For more information about how this change affects
Cloud Domains, see
Cloud Domains feature deprecations ,
Renew an expired domain registration , and Squarespace purchase of Google Domains FAQ .
This page describes how to manually renew a domain that has expired.
To renew your domain, complete the following steps.
Before you begin
You can renew your domain only within 30 days of its expiration date.
If you choose to enable automatic renewal settings, you must enable it 15 days
before the expiration date. Learn how to
change automatic renewal settings .
For domains that use a country-code TLD, you must wait 72 hours
after the expiration date before you can renew those domains.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
domains.registrations.configureManagement
Roles
roles/domains.admin
gcloud
Use the
gcloud domains registrations renew-domain command :
gcloud domains registrations renew-domain DOMAIN_NAME \
[--yearly-price= YEARLY_PRICE ]
Replace the following:
DOMAIN_NAME : the name of the registered domain that you
want to renew—for example, example.app .
YEARLY_PRICE : the yearly price, followed by a
currency code (for example, 12.00 USD). The --yearly-price flag is
optional. If you omit this flag, gcloud CLI prompts you to
confirm the yearly price. For information about pricing, see
Cloud Domains pricing .
API
Use the
registrations.renewDomain method :
POST https://domains.googleapis.com/v1/projects/ PROJECT_ID /locations/global/registrations/ DOMAIN_NAME :renewDomain
{
"yearlyPrice": {
"currencyCode": " CURRENCY_CODE ",
"units": NUMBER_OF_UNITS
}
}
Replace the following:
PROJECT_ID : the name of your project
DOMAIN_NAME : the name of the domain that you want to
renew
CURRENCY_CODE : the three-letter currency code defined
in ISO 4217—for example, USD .
NUMBER_OF_UNITS : the yearly price in units. For
example, if the currencyCode is USD , then one unit is equal to
one US dollar. For information about pricing,
see Cloud Domains pricing .
What's next
To view a list of your registered domains, see
List registered domains .
To access API information, see the
Cloud Domains API .
To find solutions for common issues that you might encounter when using
Cloud Domains, see Troubleshoot Cloud Domains .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
