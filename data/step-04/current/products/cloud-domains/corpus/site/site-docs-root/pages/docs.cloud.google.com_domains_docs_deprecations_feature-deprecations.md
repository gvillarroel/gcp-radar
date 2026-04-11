---
title: "Deprecations and shut down features \_|\_ Cloud Domains \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/domains/docs/deprecations/feature-deprecations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/deprecations/feature-deprecations
  title: "Deprecations and shut down features \_|\_ Cloud Domains \_|\_ Google Cloud\
    \ Documentation"
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
Deprecations and shut down features
Stay organized with collections
Save and categorize content based on your preferences.
The
Google Cloud Platform Terms of Service (section "Discontinuation of Services")
defines the deprecation policy that applies to Cloud Domains.
The deprecation policy only applies to the services,
features, or products listed therein.
After a service, feature, or product is officially
deprecated, it continues to be available for at least the period of time defined in the
Terms of Service. After this period of time, the service is scheduled for shutdown.
Feature
Deprecation date
Shutdown date
Details
Google Domains as a Domain Name System (DNS)
provider
October 19, 2023
Google Domains as your Domain Name System (DNS)
provider for your domains in Cloud Domains is retired,
and some DNS features from Cloud Domains aren't
supported.
New domain registrations cannot use the free DNS zone provided by Google Domains
You can continue to use the existing domains names that use Google Domains as the DNS provider
You can continue to use the Google Domains user interface to update
the DNS settings until the domains are migrated to Squarespace
Domain forwarding (HTTP `301` and `302` response status codes) and email forwarding
October 19, 2023
January 22, 2024
Until the domain is migrated to Squarespace, you can use the Google Domains user interface to configure this setting. After the
domains are migrated, you can continue using domain and email forwarding. However, you won't be able to change your domain forwarding or email forwarding settings.
Dynamic DNS
October 19, 2023
January 22, 2024
You can
continue using the Google Domains user interface to configure this setting
until the domain is migrated to Squarespace. Afterward, Dynamic DNS updates
doesn't work, and your domain points to the last known IP address before
the retirement.
Import domains
October 19, 2023
January 22, 2024
You can't import your existing
registered domain from Google Domains to Cloud Domains.
Export domains
October 19, 2023
January 22, 2024
You can't export a registered domain from
Cloud Domains to Google Domains.
Transfer domains
October 19, 2023
January 22, 2024
You can't transfer a registered domain
from a third-party domain registrar to Cloud Domains.
Contact privacy
October 19, 2023
The PRIVATE_CONTACT_DATA
setting for contact privacy
is changed to REDACTED_CONTACT_DATA when a domain is
migrated to Squarespace.
On September 7, 2023 Squarespace acquired all domain registrations and related
customer accounts from Google Domains.
After January 22, 2024, you can't use the retired features of
Cloud Domains. For more information, see the
Squarespace purchase of Google Domains FAQ .
Google Domains as your Domain Name System (DNS) provider for your
domains in Cloud Domains is being retired. This change doesn't
affect your domains that use Cloud DNS as your DNS provider.
The following features from Google Domains
aren't supported in Cloud Domains:
Domain forwarding (HTTP 301 and 302 response status codes)
Email forwarding
Dynamic DNS
If your domain continues to use
Google Domains DNS
after Google Domains DNS is retired, your last Google Domains
DNS settings work, but you can't make any changes to
your DNS records until you change your DNS provider. Similarly, domain
forwarding and email forwarding work according to the last supported
configuration, but you can't change your domain forwarding or email forwarding
settings. Dynamic DNS updates no longer work, and dynamic DNS records
point to the last known IP address before the retirement.
Transfer-In
of your domain registrations from third-party domain registrars into
Cloud Domains isn't possible. You can
transfer-out
your domain registrations to third-party domain registrars.
In addition,
import
of domain registrations from Google Domains to
Cloud Domains or
export
of domain registrations from Cloud Domains to
Google Domains isn't
possible. You also can't move domain registrations with
Cloud Domains between your Google Cloud projects.
You can't
delete a domain registration resource
in Cloud Domains until it has expired. However, you can disable
auto-renewal of domain registrations in Cloud Domains by using
Cloud Domains registration resource management settings .
Domains that use the PRIVATE_CONTACT_DATA setting for
contact privacy
are changed to use REDACTED_CONTACT_DATA . Your data is not shared with a
third-party contact privacy provider, and it is instead shown as
redacted in public contact databases like WHOIS.
Also, you can't use the Google Domains user interface to
view and manage your domain registrations after your domain is migrated to
Squarespace. You can continue to use the Google Cloud CLI,
Cloud Domains, and the Google Cloud console to manage your domains.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
