---
title: "Overview of Sensitive Actions notifications \_|\_ Advisory Notifications \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/sensitive-actions-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/recommendations-overview
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/sensitive-actions-overview
  title: "Overview of Sensitive Actions notifications \_|\_ Advisory Notifications\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Overview of Sensitive Actions notifications | Advisory Notifications | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Advisory Notifications
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Discover
Product overview
Security and Privacy Advisory notifications overview
Sensitive Actions notifications overview
Security MSA notifications overview
Threat Horizons preview notifications overview
Get started
View notifications
Recommendations
Opt in to or out of notifications
Respond
Respond to Sensitive Actions notifications
Monitor
Audit logging
Work with Sensitive Actions logs
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Who receives Sensitive Actions notifications Opting out
How Sensitive Actions works Notification frequency
When Sensitive Actions are not produced
Sensitive Actions in Security Command Center
Pricing
Types of Sensitive Actions Sensitive Roles Added
Billing Admin Removed
Organization Policy Changed
Project-level SSH Key Added
GPU Instance Created
Many Instances Created
Many Instances Deleted
What's next
Home
Documentation
Security
Advisory Notifications
Guides
Was this helpful?
Send feedback
Overview of Sensitive Actions notifications
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Who receives Sensitive Actions notifications Opting out
How Sensitive Actions works Notification frequency
When Sensitive Actions are not produced
Sensitive Actions in Security Command Center
Pricing
Types of Sensitive Actions Sensitive Roles Added
Billing Admin Removed
Organization Policy Changed
Project-level SSH Key Added
GPU Instance Created
Many Instances Created
Many Instances Deleted
What's next
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Protecting cloud environments requires protecting Identity and Access Management accounts against
compromise. Compromising a privileged user account enables an attacker to make
changes to a cloud environment, so detecting potential compromises is essential
for securing organizations of every size. To help organizations stay secure,
Google Cloud logs sensitive actions that are taken by IAM
user accounts and notifies organization administrators of those actions directly
through Advisory Notifications.
Sensitive actions are actions that can have a significant negative effect on
your Google Cloud organization if they are taken by a malicious actor
using a compromised account. These actions by themselves do not necessarily
represent a threat to your organization or indicate that an account has been
compromised. However, we recommend that you confirm that the actions were taken
by your users with legitimate purposes.
Who receives Sensitive Actions notifications
Google Cloud notifies your organization of sensitive actions by sending an
email notification to your organization-level
essential contacts for
security. If there are no essential contacts configured, the email notification
is sent to all accounts that have the Organization Admin IAM role
at the organization level.
Important: If you are using
Google Cloud without an organization, you do not receive Sensitive Actions
notifications.
Opting out
If you don't want to receive Sensitive Actions notifications in your
organization, you can opt out of these notifications. For more information, see
Configure notifications .
Opting out of Sensitive Actions notifications only affects the notifications
delivered through Advisory Notifications.
Sensitive Actions logs
are always generated and are not affected by opting out of notifications. If you
use Security Command Center, the Sensitive Actions Service is not affected by
opting out of Sensitive Actions notifications.
How Sensitive Actions works
Google Cloud detects sensitive actions by monitoring your organization's
Admin Activity Audit Logs . When a
sensitive action is detected, Google Cloud writes the action in the
Sensitive Actions Service platform log
in the same resource where the activity occurred. Google Cloud also
includes the event in a notification delivered through
Advisory Notifications.
Notification frequency
The first time a sensitive action is observed in your organization, you receive
a report that includes the initial action, plus any other actions that occur in
the following hour. After the initial report, you receive reports for new
sensitive actions in your organization at most once every 30 days. If there have
not been any sensitive actions in your organization for a long time, you might
receive the one-hour report the next time a sensitive action is observed.
When Sensitive Actions are not produced
Google Cloud reports sensitive actions only if the principal that performs
the action is a user account. Actions taken by a
service account are not reported. Google
developed this capability to protect against adversaries who gain access to
end-user credentials and use those to take unwanted actions in cloud
environments. Because many of these actions are common behavior for service
accounts, logs and advisory notifications are not produced for these identities.
Sensitive actions cannot be detected if you have configured your Admin Activity
Audit Logs to be located in a specific region (that is, not the global
region). For example, if you have
specified a storage region
for the _Required logs bucket in a certain resource, logs from that resource
cannot be scanned for sensitive actions.
If you have configured your Admin Activity Audit Logs to be encrypted with
customer-managed encryption keys ,
your logs cannot be scanned for sensitive actions.
Sensitive Actions in Security Command Center
If you use Security Command Center, you can receive Sensitive Actions as findings
through the Sensitive Actions Service.
Although the Sensitive Actions logs and Advisory Notifications
provide one lens on account behavior in your organization, Security Command Center
provides additional insight and management capabilities for security teams who
are protecting more complex, large, or important workloads and environments. We
recommend monitoring Sensitive Actions as one piece of your overall security
monitoring strategy.
For more information about Security Command Center, see the following:
Sensitive Actions Service
Security Command Center
Pricing
Notifications for Sensitive Actions in Advisory Notifications are
provided at no additional charge. Sensitive Actions logs in Cloud Logging
incur ingestion and storage costs in accordance with
Logging pricing . The volume of
Sensitive Actions log entries depends on how often user accounts in your
organization perform sensitive actions. These actions are typically uncommon.
Types of Sensitive Actions
Google Cloud informs you of the following types of sensitive actions.
Sensitive Roles Added
A principal with an Owner ( roles/owner ) or Editor ( roles/editor )
IAM role was granted at the organization level. These roles
permit a large number of actions across your organization.
Billing Admin Removed
A Billing Account Administrator ( roles/billing.admin ) IAM role
was removed at the organization level. Removing this role can prevent users from
having visibility and provide a mechanism for an adversary to remain undetected.
Organization Policy Changed
An organization policy
was created, updated, or deleted at the organization level. Organization
policies at this level can affect the security of all your organization's
Google Cloud resources.
Project-level SSH Key Added
A project-level SSH key was added to a Google Cloud project that did not
previously have such a key. Project-level SSH keys can grant access to all the
virtual machines (VMs) in the project.
GPU Instance Created
A VM with a GPU was created in a project by a person who had not created a GPU
instance in that project recently. Compute Engine instances with GPUs can host
workloads such as cryptocurrency mining.
Many Instances Created
Multiple VM instances were created by a user in a certain project. Large numbers
of VM instances can be used for unexpected workloads such as cryptocurrency
mining or denial-of-service attacks.
Many Instances Deleted
Multiple VM instances were deleted by a user in a certain project. Large numbers
of instance deletions can disrupt your business.
What's next
Learn how to
view notifications .
Learn how to
respond to Sensitive Actions notifications .
Learn how to
opt in to or out of notifications .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
