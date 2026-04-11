---
title: "Squarespace purchase of Google Domains FAQ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/domains/docs/faq
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/faq
  title: "Squarespace purchase of Google Domains FAQ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud Domains
Resources
Send feedback
Squarespace purchase of Google Domains FAQ
Stay organized with collections
Save and categorize content based on your preferences.
This page provides help and answers to frequently asked questions about the
Squarespace purchase of Google Domains registrations. For more information
about deprecations and shut down features, see
Deprecations and shut down features .
How does the sale of Google Domains affect Cloud Domains?
Google Cloud continues to provide and support Cloud Domains
following the Squarespace purchase of
Google Domains . Because Google Domains was the
underlying domains registrar for Cloud Domains prior to
Squarespace's purchase, there are some important changes that affect
Cloud Domains.
Following the Squarespace purchase of Google Domains, Squarespace
Domains is the registrar for your domains managed by
Cloud Domains. Squarespace Domains is an independent domain
registrar service provided by Squarespace. Your domain registrations with
Cloud Domains and related data such as domain configurations and
WHOIS data (which includes customer contact info and DNS delegation) are
migrating to Squarespace Domains after a transition period which we anticipate
completing no sooner than early 2024. Google and Squarespace are working to
make the migration as seamless as possible.
After the migration, the information associated with your domain is governed by
Squarespace's Privacy Policy , and the Squarespace
Terms of Service applies to your
registrations. No Google Cloud customer data is transferred to or
exchanged with Squarespace.
Google continues to offer first-line customer support for
Cloud Domains and is responsible for billing your account.
Cloud Domains UI, Cloud Domains API, and
Cloud Domains gcloud CLI continue to be supported.
Are there changes to features after the Squarespace purchase of Google Domains?
After your domain registrations and related data are migrated to
Squarespace, Cloud Domains continues to support searching and
registering new domains, renewing existing domains, updating your contact,
DNS settings, and transferring a registered domain to another registrar.
These activities rely on Squarespace Domains.
Squarespace has publicly committed to continue to use Google Cloud DNS
infrastructure, so that the reliability and performance of DNS remains unchanged
during the migration.
After the transition is complete, transferring domains from third-party
registrars to Cloud Domains isn't supported.
Furthermore, importing and exporting domains to and from Google Domains
isn't supported.
Whom do I contact for customer support for my domains?
Google Cloud continues to provide first-line customer support for
all domains purchased through Cloud Domains. For more information,
see Support for Cloud Domains .
To get support for domains purchased directly through Google Domains contact Squarespace
support .
Can I continue to purchase domains using Cloud Domains?
Yes, you can continue to search and register for new domains using
Cloud Domains. After migration, Google Cloud becomes
a reseller of Squarespace Domains. When you buy new domains using
Cloud Domains after migration, the registrar of record is
Squarespace.
What happens if my domain registered with Cloud Domains comes up for renewal?
Cloud Domains automatically renews your domains registered with
Cloud Domains when they come up for renewal. But, you can turn
off automatic renewal at any time.
How can I disable automatic renewal of my domain?
To turn off automatic renewal of your domain,
see Turn off automatic renewal for a domain name .
What terms and conditions are applicable after the Squarespace purchase of Google Domains?
After the transaction closes, existing domain accounts are owned by Squarespace,
and you can continue to manage your domains by using
Cloud Domains. Google's Privacy
Policy
and Terms of Service
continue to apply.
After your domain is migrated, the information associated
with your domain registrations—including domain configuration and WHOIS
data, which includes customer contact info and DNS delegation—is governed
by Squarespace's Privacy Policy , and Squarespace's
Terms of Service apply to your
registrations.
Ensure that you read Squarespace's Terms of
Service and Privacy
Policy .
Any new domain registrations purchased through Cloud Domains
after the sale closes are governed by Squarespace's Terms of
Service and, following migration, information
associated with such domain registrations is governed by Squarespace's
Privacy Policy .
Are other Google Cloud services affected?
This change doesn't affect other Google Cloud services, including
Cloud DNS.
How do I manage domains purchased through a mix of Google Domains and Cloud Domains?
You can continue to manage domains that are registered with or imported to
Cloud Domains by using Cloud Domains API.
What happens to my domains on Cloud Domains that use Google Domains DNS as the DNS provider?
After each domain is migrated to Squarespace, if your domain uses
Google Domains DNS, you can't make any changes to your DNS records.
You must change your DNS provider to make changes.
DNS resolution continues to use the last successful
configuration of your static DNS records. Domain forwarding and email forwarding
use your last successful configuration, and you can no longer change these
settings. Dynamic DNS updates no longer work, and dynamic DNS records
point to the last known IP address before the retirement.
For new domain registrations, you cannot configure Google Domains DNS as
your DNS provider. However, if you have already registered domains that use
Google Domains, you can export your Google Domains DNS settings
to Cloud DNS or another DNS provider. You can also export your domain
and email forwarding configurations to another hosting provider. For more
information, see Migrate Google Domains DNS
settings .
What changes do I need to make to my DNS provider settings for my domains in Cloud Domains?
If you use Cloud DNS or another third-party DNS provider for
your domain using the CustomDNS
field ,
you don't need to take any action.
If you use Google Domains DNS as your DNS provider, we recommend
updating your domain's DNS
setting
to use Cloud DNS or another third-party DNS provider. For steps to
migrate your DNS provider from Google Domains DNS to Cloud DNS,
see How do I update the DNS setting for my domain in
Cloud Domains from Google Domains DNS to
Cloud DNS .
If you use domain forwarding, email forwarding, or Dynamic DNS features from
Google Domains DNS, migrate your DNS to Cloud Domains or
a third-party DNS provider. For more information, see Migrate
Google Domains DNS settings .
How do I update the DNS settings for my domain in Cloud Domains from Google Domains DNS to Cloud DNS?
To migrate your Google Domains DNS settings and export domain and email
forwarding configurations, see Migrate
Google Domains DNS settings .
What happens to my domains that use the deprecated privacy protection contact privacy settings?
Squarespace is the registrar for your domains managed by
Cloud Domains. All domains with
Contact details Privacy Protection On
are updated to Limited info available to the
public .
This means that your contact data isn't shared with the third-party
contacts-proxy provider, and all your contact details are marked as
REDACTED FOR PRIVACY in the WHOIS
database. The exceptions are the contact's country and state or province
which are publicly visible. If you provide an organization name, it might be
publicly visible.
Can I import domain registrations from Google Domains to Cloud Domains?
No. You cannot import domain registrations from Google Domains to Cloud Domains.
Can I import my domain registrations from Squarespace to Cloud Domains?
No. You cannot import or export domain registrations between Squarespace and Cloud Domains.
Can I export domain registrations from Cloud Domains to Google Domains?
No. All domains managed by Google Domains are
migrated to Squarespace, and you can't
export a registered domain from Cloud Domains to Google Domains.
For more information, see Deprecations and shut down features .
Can I move registrations in Cloud Domains between Google Cloud projects?
Domain registrations with Cloud Domains
cannot be moved between Google Cloud projects.
Can I delete a domain registration in Cloud Domains?
You can't delete active domains from Cloud Domains .
You can transfer your domain registration to a third-party domain registrar
or turn off automatic renewal of your domain.
Can I transfer a registered domain from a third-party domain registrar to Cloud Domains?
You can't transfer a registered domain from another registrar.
Can I transfer a registered domain from Cloud Domains to another registrar?
Yes, you can transfer a registered domain to another registrar .
Can I use Squarespace to manage my domain registrations with Cloud Domains?
You can't use Squarespace to view or manage
your domains that are registered with Cloud Domains. To manage
your domains in Cloud Domains, use the Google Cloud console,
the Cloud Domains API, and the Google Cloud CLI.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
