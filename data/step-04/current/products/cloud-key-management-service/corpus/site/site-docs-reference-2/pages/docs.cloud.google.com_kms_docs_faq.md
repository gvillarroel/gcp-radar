---
title: "Cloud KMS FAQ \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/faq
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/faq
  title: "Cloud KMS FAQ \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Resources
Send feedback
Cloud KMS FAQ
Stay organized with collections
Save and categorize content based on your preferences.
About Cloud KMS
What is Cloud KMS? What can it do?
Cloud Key Management Service (Cloud KMS) is a cloud-hosted key management service that lets you
manage encryption for your cloud services the same way you do on-premises. You
can generate, use, rotate, and destroy cryptographic keys.
Cloud KMS is integrated with Identity and Access Management (IAM) and Cloud Audit Logs so
you can manage permissions on individual keys, and monitor how they are used.
Can I store secrets?
Cloud KMS stores keys and metadata about keys, and does not
have a general data storage API. Secret Manager is
recommended for storing and accessing sensitive data for use in Google Cloud.
Is there an SLA?
Yes, see Cloud KMS Service Level Agreement .
How do I provide product feedback?
Contact the engineering team at cloudkms-feedback@google.com .
How do I provide documentation feedback?
While viewing Cloud KMS documentation, click Send feedback near
the top right of the page. This will open a feedback form.
If I need help, what are my options?
We invite our users to post their questions on Stack Overflow . Along with
the active Stack Overflow community, our team actively monitors Stack Overflow
posts and answers questions with the tag google-cloud-kms .
We also offer various levels of support depending on your needs. For additional
support options, see our Google Cloud Support Packages .
Does Cloud KMS have any quotas?
Yes. For information about quotas, including viewing or requesting additional
quotas, see Cloud KMS quotas .
There is no limit on the number of keys, key rings, or key versions. Additionally,
there is no limit on the number of keys per key ring and key versions per key.
In what countries can I use Cloud KMS?
You can use Cloud KMS in any country where Google Cloud services
are supported.
Keys
Does key rotation re-encrypt data? If not, why?
Key rotation does not automatically re-encrypt data. When you decrypt data,
Cloud KMS knows which key version to use for the decryption. As
long as a key version is not disabled or destroyed, Cloud KMS can
decrypt data protected with that key.
Important: If you suspect unauthorized use of a key, you should re-encrypt
the data protected by that key,
revoke IAM access to the key, and either
disable or schedule destruction of the compromised key version.
Why can't I delete keys or key rings?
To prevent resource name collisions, key ring and key resources CANNOT be
deleted. Key versions also cannot be deleted, but key version material can be
destroyed so that the resources can no longer be used. For more information,
see Lifetime of objects . Billing is based on the number of active
key versions; if you destroy all active key version material, there is no charge
for the key rings, keys, and key versions which remain.
Authorization and authentication
How do I authenticate to the Cloud KMS API?
How clients authenticate may vary a bit depending on the platform on which the
code is running. For details, see Accessing the API .
What IAM roles should I use?
To enforce the principle of least privilege, ensure that the user and service
accounts in your organization have only the permissions essential to performing
their intended functions. For more information, see Separation of duties .
How quickly is an IAM permission removed?
Removal of a permission should be in effect in less than one hour.
Miscellaneous
What is additional authenticated data, and when would I use it?
Additional authenticated data (AAD) is any string that you pass to
Cloud KMS as part of an encrypt or decrypt request. It is used as
an integrity check and can help protect your data from a confused deputy
attack . For more information, see Additional authenticated data .
Are data access logs enabled by default? How do I enable data access logs?
Data access logs are not enabled by default. For more information, see
Enabling data access logs .
How do Cloud KMS keys relate to service account keys?
Service account keys are used for service-to-service authentication within
Google Cloud. Service account keys are unrelated to Cloud KMS
keys.
How do Cloud KMS keys relate to API keys?
An API key is a simple encrypted string that can be used when calling
certain APIs that don't need access to private user data. API keys track
API requests associated with your project for quota and billing. API keys are
unrelated to Cloud KMS keys.
Do you have additional details about the HSMs used by Cloud HSM?
All HSM devices are manufactured by Marvell (formerly Cavium). The
FIPS certificate for the devices is on the NIST website .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
