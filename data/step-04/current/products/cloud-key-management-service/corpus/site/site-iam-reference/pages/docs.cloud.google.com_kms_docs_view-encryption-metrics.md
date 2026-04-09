---
title: "View encryption metrics \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/view-encryption-metrics
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/view-encryption-metrics
  title: "View encryption metrics \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View encryption metrics | Cloud Key Management Service | Google Cloud Documentation
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
Cloud KMS
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Protection levels
Overview
Cloud HSM overview
Single-tenant Cloud HSM overview
Cloud EKM overview
Reference architectures for Cloud EKM
CMEK overview
Cloud KMS with Autokey
Compatible services
Cloud HSM for Google Workspace
Locations
Get started
Cloud KMS resources
Key purposes and algorithms
Separation of duties
Create and use encryption keys
CMEK best practices
Create and manage Single-tenant Cloud HSM instances
Create keys
Automate key creation
Autokey overview
Enable Autokey
Create a resource with Autokey
Create a key ring
Create a key
Import keys
About key import
Key wrapping
Format a key for import
Manually wrap a key for import
Configure OpenSSL for manual key wrapping
Wrap a key using OpenSSL
Set up automatic key wrapping
Import a key version
Verify an imported key version
Create external keys
Set up Cloud EKM over the internet
Create an EKM connection
Create an external Key
Control access
Manage IAM roles
Use Organization Policy Contraints
Create custom organization policy constraints for Cloud KMS
CMEK organization policies
Control key destruction
Secure data using keys
Key APIs
Use gRPC
Access the API
Sort and filter API list results
Generate random bytes
Use Cloud KMS keys in Google Cloud
Encrypt and decrypt data
Envelope encryption
Additional authenticated data
Asymmetric encryption
Encrypt and decrypt data with a symmetric key
Encrypt and decrypt data with a raw symmetric key
Encrypt and decrypt data with an asymmetric key
Verify end-to-end data integrity
Encrypt application data
Set up client-side encryption with Tink
Onboard to Cloud HSM for Google Workspace
Sign and validate data
Digital signatures
Create and validate signatures
MAC signatures
Create and validate MAC signatures
Share secrets using key encapsulation mechanisms
Key encapsulation mechanisms
Encapsulate and decapsulate using KEMs
Manage keys
Resource consistency
Key version states
View keys and key details
View keys by project
View encryption metrics
View key usage
Get a Cloud KMS resource ID
Retrieve a public key
Attest a Cloud HSM key
Label a key
Create and manage tags
Enable and disable a key version
Destroy and restore a key version
Delete Cloud KMS resources
Rotate keys
About key rotation
Rotate a key
Re-encrypt data
Update external key reference
Monitor
Using Cloud Audit Logging
Cloud KMS Inventory Service audit logging
Monitor state changes
Monitor and adjust quotas
Use Cloud Monitoring
Monitor EKM usage
Troubleshoot
Troubleshoot failed imports
Troubleshoot EKM via VPC errors
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
Before you begin
View encryption metrics
View key alignment details
Understand encryption metrics CMEK coverage
Key alignment
Limitations
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
View encryption metrics
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
View encryption metrics
View key alignment details
Understand encryption metrics CMEK coverage
Key alignment
Limitations
What's next
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Cloud Key Management Service (Cloud KMS) displays metrics about the encryption keys that
protect your data at rest. These metrics show how your resources are protected
and whether your keys align with recommended practices. The metrics focus mostly
on customer-managed encryption keys (CMEKs) used to protect resources in
CMEK-integrated services. This guide shows you how to view your project's
encryption metrics and helps you understand what they mean for your
organization's security posture.
Important: Throughout this document, resources refers to resources in
CMEK-integrated services that support key usage
tracking . For example, "a key that doesn't
protect any resources" is a key that isn't used as a CMEK to protect a trackable
resource. Such a key might protect other data, including customer data in
non-trackable resources in a CMEK-integrated service or data in a custom
application.
For more information about recommended practices for using CMEKs to protect your
resources in Google Cloud, see Best practices for using
CMEKs .
Before you begin
To get the permissions that
you need to view encryption metrics,
ask your administrator to grant you the
Cloud KMS Viewer ( roles/cloudkms.viewer )
IAM role on project or a parent resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Grant the Cloud KMS Organization Service Agent
role to the Cloud
KMS Organization Service Agent :
gcloud organizations add-iam-policy-binding ORGANIZATION_ID \
--member=serviceAccount:service-org- ORGANIZATION_ID @gcp-sa-cloudkms.iam.gserviceaccount.com \
--role=roles/cloudkms.orgServiceAgent
If you skip this step, the Encryption metrics dashboard
might display incomplete information. For example, when you view
encryption metrics for PROJECT_A , resources in
PROJECT_B that are protected by a key in PROJECT_A
wouldn't be included in the metrics.
View encryption metrics
To view encryption metrics, follow these steps:
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the Overview tab, and then click Encryption metrics .
Use the project picker to select a project. The dashboard shows the following
encryption metrics for resources and keys in that project:
The Resources in this project by protection type and Resource
protection type by service charts show CMEK coverage summary
metrics .
The Alignment to key usage recommended practices chart shows key
alignment summary metrics ; you can also view key alignment
details.
View key alignment details
To view a list of keys in the project and see which recommended practices they
are aligned with, follow these steps:
On the Encryption metrics page, locate the Alignment to key usage
recommended practices chart.
Optional: To focus only on keys created by Cloud KMS Autokey, click the
Cloud KMS (Autokey) tab. To focus only on keys created manually, click
the Cloud KMS (Manual) tab.
To view a list of keys and see whether they are aligned with each
recommended practice, click the section that represents the category, and
then click View .
The Alignment to key usage recommended practices page lists
Cloud KMS keys in the selected project and shows whether each is
Aligned or Not aligned with each recommendation. To learn more about
what it means for a key to be Aligned or Not aligned for a
recommendation, see Key alignment in this document.
Optional: To filter the list of keys, enter your search terms in the
filter_list Filter box and then
press enter. For example, you can filter the list to only show keys that are
Aligned with the Granularity recommendation.
Understand encryption metrics
The encryption metrics dashboard uses the Cloud Asset Inventory service to gather
information about your resources and Cloud KMS keys. The dashboard
calculates metrics on demand using the latest available data.
The dashboard shows two main categories of metrics: CMEK coverage and key
alignment. Both metrics show a summary view with aggregated information and a
detailed view with a tabular list of resources or keys.
CMEK coverage
CMEK coverage metrics in the Resources in this project by protection type
and Resource protection type by service charts show how many of your
resources are protected by CMEKs. This metric looks at resources for which CMEK
integration and Cloud KMS key tracking are supported. Resources are
grouped into the following categories:
Google Managed Encryption : resources protected by Google default
encryption.
Cloud KMS (Manual) : resources protected by a CMEK that you create and
manage manually.
Cloud KMS (Autokey) : resources protected by a CMEK provisioned and
assigned by the Autokey service.
CMEK coverage metrics are shown for the project as a whole and broken down
by the service associated with each of the protected resources.
You can use this information to assess how many of the resources in the selected
project are using Google default encryption when they could use CMEKs.
For a list of supported resource types, see
Tracked resource types .
Key alignment
Key alignment metrics in the Alignment to key usage recommended practices
chart show whether your Cloud KMS keys align with the following
recommended security practices:
Rotation period : the key has an appropriate rotation period set.
Granularity : the key protects resources that are in one project and
belong to one service.
Separation of duties : only service accounts have permission to encrypt
and decrypt with the key.
Location : the key only protects resources that are in the same cloud
location.
Key alignment metrics include all Cloud KMS symmetric encryption keys
in the selected project, even if they aren't used to protect resources in a
CMEK-integrated service. These metrics are assessed for keys, not key versions.
For example, a key with no active key versions can still show as Aligned for
any or all of these recommended practices.
The following sections provide more information about each of these practices.
Granularity
Key granularity refers to the scale and scope of a key's intended usage. Keys
can be highly granular, protecting only a single resource, or they can be less
granular, protecting many resources. Using keys that are less granular increases
the potential impact of security incidents including unauthorized access and
accidental data loss.
In general, we recommend the following granularity strategy:
Each key protects resources in a single location—for example,
us-central1 .
Each key protects resources in a single service or product—for
example, BigQuery.
Each key protects resources in a single Google Cloud project.
This recommendation might not be the ideal granularity strategy for your
organization. For most organizations, this strategy provides a good balance
between the overhead of maintaining many highly granular keys and
the potential risks of using less granular keys that are shared between many
projects, services, or resources.
Keys created with Cloud KMS Autokey follow this recommendation.
Each key in your project is considered Aligned with this recommendation if
the resources that it protects are all located within the same location,
service, and project. A key is considered Not aligned with this
recommendation if the resources that it protect are located in two or more
locations, services, or projects.
If your keys are not aligned with this recommendation, consider whether
adjusting your key granularity strategy is right for your organization.
For more information about recommended practices for key granularity, see
Choose a key granularity strategy .
Location
In most cases, Cloud KMS keys used with CMEK-integrated services are
required to be in the exact same Google Cloud region or multi-region
where the resources they protect are located. However, a few services allow
exceptions to this rule.
Each key in your project is considered Aligned with this recommendation if
the resources that it protects are all located within the same location as the
key—for example, a key in us-central1 that protects resources in
us-central1 . Regional keys can protect zonal resources within the same
region—for example, a key in us-central1 that protects resources in
us-central1a .
A key is considered Not aligned with this recommendation if it protects a
resource in a different region or multi-region—for example, a key in the
us multi-region that protects a Compute Engine disk in the us-central1
region.
If your keys are not aligned with this recommendation, consider moving or
replacing your resources or keys so that they are in the same location.
For more information about locations, see Cloud KMS
locations .
Rotation
Rotating your keys regularly is an important aspect of information security. For
example, some standards require you to rotate your keys on a certain schedule.
Keys that protect sensitive workloads may need to be rotated more frequently.
Cloud KMS lets you set up automatic key rotation for your keys to help
ensure that your chosen schedule is followed.
Each key in your project is considered Aligned with this recommendation if
it has a rotation schedule set. A key is considered Not aligned if it is not
set up for automatic key rotation.
To enable automatic rotation, you can do any of the following:
Manually create a new key with a custom rotation
schedule .
Use Cloud KMS Autokey when you create a new resource .
Keys created by Cloud KMS Autokey have a default rotation period of one
year, but the rotation period can be changed after the key is created.
Update an existing key to add a rotation schedule .
Separation of duties
Separation of duties is a security practice that aims to avoid giving users or
other principals too many permissions. In the context of Cloud KMS and
CMEK integrations, this means that the users who maintain your
Cloud KMS keys shouldn't have permissions to use those keys, and the
principals that use the keys to encrypt and decrypt your resources don't have
other permissions on the keys.
Each key in your project is considered Aligned with this recommendation if
both of the following are true:
The service account for the protected resource is the only principal with
the cloudkms.cryptoKeyVersions.useToEncrypt and
cloudkms.cryptoKeyVersions.useToDecrypt permissions on the key.
The service account for the protected resource doesn't have a role that
grants key administration permissions on the key, including
roles/cloudkms.admin , roles/editor , and roles/owner .
A key is considered Not aligned if the service account has administration
permissions or another principal has encryption or decryption permissions.
If your keys are not aligned with this recommendation, review the
IAM roles and permissions on your keys and other
Cloud KMS resources and remove role and permission grants that are not
needed. For more information about Cloud KMS roles and the permissions
that they include, see Permissions and roles . For more
information about viewing and removing IAM roles on
Cloud KMS resources, see
Access control with IAM .
Limitations
The Encryption metrics dashboard has the following limitations:
The dashboard shows metrics for one project at a time.
The dashboard has a limit of 10,000 resources or keys per project. If your
project contains more than 10,000 keys or if the keys in your project
protect more than 10,000 resources, only partial metrics are shown.
The dashboard relies on data from the
Cloud Asset Inventory service . If any of the data in
the Cloud Asset Inventory is out of date, the dashboard may show inaccurate or
incomplete information.
The dashboard only considers symmetric keys for key alignment and CMEK
coverage.
The dashboard only considers
resources that support key usage tracking .
The key alignment metrics don't distinguish between keys that are in active
use as CMEKs protecting trackable resources, keys that are in active use for
other use cases, and keys that have no active key versions. For example,
your key alignment data might include keys that are used for custom
applications.
When key alignment data includes keys that protect non-trackable resources
and custom applications, alignment details for these keys might not be
accurate. For example, a key that is used in multiple custom applications
across multiple projects might show as Aligned with the key granularity
recommendations even though it isn't.
What's next
Learn more about key usage tracking .
Learn more about best practices for customer-managed encryption
keys .
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
