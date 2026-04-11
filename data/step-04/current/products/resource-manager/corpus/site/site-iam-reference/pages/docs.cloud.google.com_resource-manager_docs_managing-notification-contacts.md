---
title: "Essential Contacts overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/access-control-folders
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts
  title: "Essential Contacts overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Essential Contacts overview
Stay organized with collections
Save and categorize content based on your preferences.
Essential Contacts helps you direct critical Google Cloud notifications
to the appropriate personnel across your projects, folders, and organization
resources.
You can define a directory of custom contacts for the following specific
notification categories:
Billing
Legal
Product updates
Security
Suspension
Technical
Additionally, you can define contacts to receive notifications from all of
these categories at once.
This document describes Essential Contacts capabilities and benefits to
help you understand how you can use these contacts for your critical
Google Cloud notifications. To configure Essential Contacts, see
Manage Essential Contacts .
Why are Essential Contacts important?
By default, Identity and Access Management (IAM) roles manage permissions and access
controls for Google Cloud resources. However, individuals assigned to these
roles might not always be the best contacts for all operational notifications,
especially when organizations have specialized teams for areas such as billing,
legal, or security. Additionally, due to personnel and role changes, relying
solely on default IAM principals for all notifications can lead
to the overlook of crucial alerts about your projects or folders.
Essential Contacts lets you designate custom individuals or teams as
points of contact for specific
notification categories . We recommend configuring
Essential Contacts to make sure important information about your
Google Cloud resources reaches the correct personnel promptly. Think of
Essential Contacts as a primary contact directory to improve
responsiveness and accountability across diverse operational functions. Failure
to establish and maintain Essential Contacts can result in missed
critical notifications within those designated categories.
The following are some key benefits of configuring Essential Contacts:
Receive targeted notifications : Make sure that designated teams or
individuals receive specific messages directly, such as security alerts or
billing updates.
Improve reliability and prevent missed notifications : Reduce the risk of
missed notifications because of incorrect contact information.
Maintain operational awareness and compliance : Establish clear
notification channels for operational, security, and compliance issues to
support business continuity.
Facilitate proactive management : Control who gets notified to help you
manage your organization effectively, respond to issues promptly, and plan
for product changes based on critical updates.
How do notifications work?
Essential Contacts acts exclusively as a central directory for your
custom contacts, with IAM principals as a fallback if you don't
configure contacts for a specific category. For more information about
recommended contacts per category, see
Notification categories .
Essential Contacts only provides contact information that other
Google Cloud services can use, but it doesn't send or manage notification emails
itself. Individual services retrieve contact details for their purposes and have
their independent permission mechanisms. For example,
Advisory Notifications retrieves details from
Essential Contacts to display sensitive data from critical
notifications within the Google Cloud console, including security and privacy
information. However, you require additional roles to access
Advisory Notifications.
Each Google Cloud service determines its own notification needs and specifics,
including message content, sender email addresses, and delivery frequency.
Consequently, not all Google Cloud offerings use Essential Contacts to
send notifications.
Note: This document doesn't provide a comprehensive list of all services using
Essential Contacts, their sender email addresses, or any additional
IAM roles to access those services. For detailed information
about notifications from specific Google Cloud services, refer to their
documentation.
To help you anticipate who to expect Google Cloud notification emails from,
sender email addresses end with the @google.com address domain. Some
notifications for Essential Contacts might include a footer similar to
the following to help you identify why you received the message:
"You are receiving this message because your administrator has designated you
as an essential contact for the CATEGORY_NAME category."
Notification categories
You can assign custom contacts to several notification categories. If you don't
add a specific contact to a category, notifications in that category typically
go to the fallback contact , selected based on their IAM role.
We strongly recommend adding custom contacts for all relevant categories.
You can add both individuals and groups as custom contacts. For information on
best practices, see
Best practices for Essential Contacts .
Review the following table to learn about notification categories, examples of
notifications you might receive, recommended recipients, and why using a custom
contact is preferable to relying on the fallback.
Category
Description and importance
Examples of notifications
Recommended custom contact
Fallback contact
Fallback contact drawbacks
Billing
Critical billing and payment notifications regarding your Google Cloud account and services.
Price updates for services you use
Payment method errors or expiration warnings
Budget alerts
Changes to billing accounts, invoices, and payment instruments
Overdue payments
Catalog approvals
Finance department staff. Contacts might include:
Budget owners
Accounts planners
Other individuals who manage your financial relationship with Google Cloud
Billing Account Administrator ( roles/billing.admin )
The Billing Account Administrator might not be the day-to-day finance contact; a dedicated custom billing contact supports prompt attention to financial matters.
Legal
Official legal and compliance notifications.
Enforcement actions related to your services
Regulatory compliance updates
Government notices or legal requests concerning your account
Changes to Terms of Service or other legal agreements
Legal counsel
Compliance officers
Government relations specialists
Other relevant legal team members from your organization
Billing Account Administrator ( roles/billing.admin )
Legal matters often require specialized legal team review; direct routing to custom contacts is crucial.
Product updates
Information about changes to Google Cloud products and services.
Feature announcements
Version updates
Product terms updates
Deprecation notices
Service migrations
Product managers
Solution architects
Lead engineers
Technical teams who need to plan for or adapt to product changes
Project Owner ( roles/owner )
Project Owners might not be focused on strategic product evolution; dedicated custom contacts make sure relevant teams are informed.
Security
Urgent notifications regarding security and privacy issues affecting your resources or account.
Security bulletins
Vulnerability alerts, including details on detected critical vulnerabilities affecting your resources
Data breach incidents
Information on detected malicious attacks originating from or targeting your resources
Advisories on widespread threats that might require user attention
Abuse and security incident notifications
Terms of Service violations
Notifications related to project deletion
IT security teams
Security Operations Center (SOC)
Operations security personnel
Incident response teams
Chief Information Security Officer (CISO)
Organization Administrator ( roles/resourcemanager.organizationAdmin )
Security is a highly specialized area; direct alerts to security experts that you set as custom contacts help with rapid response and mitigation.
Suspension
Notifications about potential or actual account and project suspensions because of policy violations or other issues.
Apigee evaluation compliance issues or expiration
Copyright infringements
Critical abuse alerts that might
lead to suspension
General notifications because of non-payment
or Terms of Service violations
Operations leads and other individuals or teams immediately responsible for IT infrastructure and business application uptime.
Project Owner ( roles/owner )
Suspension notices require immediate action; making sure they reach the custom operational team responsible for resolution is critical.
Technical
Operational issues, technical events, and important updates relevant to the stability and functioning of your services.
Logging configuration errors
Data loss prevention updates
Upcoming maintenance
Service disruptions, outages, or degradations
Updates regarding SLO breaches
Actions on Google status
IT operations staff
Site Reliability Engineers (SREs)
System administrators
On-call engineers
Technical support teams
Project Owner ( roles/owner )
Technical notifications can be high volume and require specific technical expertise; routing to custom operational teams is more effective.
All
All notifications from each of the categories listed earlier.
(It is a superset.)
Contacts in this category receive notifications from all of the
following categories:
Billing
Legal
Product updates
Security
Suspension
Technical
Automated systems, such as ticketing or logging, and central operations teams.
For example, you can use it for comprehensive logging or routing by
automated systems for a potentially large number of notifications.
N/A
(It is recommended for broad oversight if specific categories aren't granularly assigned.)
N/A
Best practices for Essential Contacts
Follow these best practices to configure and manage your
Essential Contacts effectively:
Use group aliases, mailing lists, or shared email addresses : Configure
distribution lists or group email addresses like
security-team@yourcompany.com or gcp-billing@yourcompany.com instead of
individual email addresses to receive notifications.
This practice significantly reduces the risk of missed notifications because
of personnel changes and simplifies ongoing management.
Assign custom contacts for every relevant category : Verify that proper
contacts are assigned for each notification category
that is important to your organization to achieve comprehensive coverage.
Keep contacts up to date and verify details : Regularly review and update
contact information. Periodic review and updates help contacts remain
current.
Important: Google Cloud cannot automatically detect if an individual
contact's email address is no longer valid because of personnel changes,
as email addresses can be from any domain. Therefore, establish a regular
review cycle to verify and update your Essential Contacts. This
practice is critical to make sure notifications reach the intended
recipients.
Choose the right resource hierarchy level based on inheritance
preferences : You can assign contacts at the project, folder, or
organization level. Contacts are inherited through the
Google Cloud resource hierarchy .
As a result, organizational-level contacts receive notifications for the
organization and all its folders and projects, while folder-level contacts
receive notifications for that folder and its nested items. Where you assign
contacts depends on your organization's structure.
Generally, we recommend the following structure based on organizational
practices, especially for sensitive categories like Billing, Legal, and
Security:
Recommended level
Notification category
Organization level
The level for security contacts depends on your organization's
specific security practices. Assign these at the project level if
project owners manage their own project security or at the
organization level if a central group manages security for all
projects. However, as a general guide, we recommend the following
notification categories at the organization level:
Billing
Legal
Security
Folder or project level
Technical contacts might receive a large number of notifications.
Assign these at the folder or project level to help manage the flow.
As a general guide, we recommend the following notification
categories at the folder or project level:
Product updates
Security
Suspension
Technical
All
Supported languages
In Essential Contacts, each contact has a preferred language setting.
Notification creators can reference this setting when sending notifications.
When you add a contact in the Google Cloud console, the Google Cloud console
automatically configures the contact's preferred language based on the contact
creator's preferred language settings .
When you add a contact using the API, you manually configure the contact's
preferred language using a language code. This language code can refer to any of
the languages that Essential Contacts supports.
If a notification is not available in the contact's preferred language, the
system sends it in English.
Supported languages
Language
Language code
Afrikaans
af
Albanian
sq
Amharic
am
Arabic
ar
Arabic (Egyptian)
ar-EG
Armenian
hy
Azerbaijani
az
Basque
eu
Belarusian
be
Bengali
bn
Bosnian
bs
Bulgarian
bg
Burmese
my
Catalan
ca
Chinese
zh
Chinese (Hong Kong)
zh-HK
Chinese (Taiwan)
zh-TW
Croatian
hr
Czech
cs
Danish
da
Dutch
nl
English
en
English (Australia)
en-AU
English (UK)
en-GB
English (US)
en-US
Estonian
et
Filipino
fil
Finnish
fi
French
fr
French (Canada)
fr-CA
Galician
gl
German
de
Gerogian
ka
Greek
el
Gujarati
gu
Hebrew
iw
Hindi
hi
Hungarian
hu
Icelandic
is
Indonesian
id
Irish
ga
Italian
it
Japanese
ja
Javanese
jv
Kannada
kn
Kazakh
kk
Khmer
km
Korean
ko
Kyrgyz
ky
Lao
lo
Latvian
lv
Lithuanian
lt
Macedonian
mk
Malay
ms
Malayalam
ml
Marathi
mr
Mongolian
mn
Nepali
ne
Norwegian
no
Pashto
ps
Persian
fa
Polish
pl
Portuguese
pt
Portuguese (Brazil)
pt-BR
Portuguese (Portugal)
pt-PT
Punjabi
pa
Romanian
ro
Russian
ru
Serbian
sr
Sindhi
sd
Sinhala
si
Slovak
sk
Slovenian
sl
Somali
so
Spanish
es
Spanish (Latin America)
es-419
Swahili
sw
Swedish
sv
Tamil
ta
Telugu
te
Thai
th
Turkish
tr
Turkmen
tk
Ukranian
uk
Urdu
ur
Uzbek
uz
Vietnamese
vi
Welsh
cy
Zulu
zu
What's next
Manage Essential Contacts .
Create custom constraints for Essential Contacts .
Learn how to associate a domain with a project for
verification purposes.
Understand how to manage notification preferences .
Learn about Advisory Notifications .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
