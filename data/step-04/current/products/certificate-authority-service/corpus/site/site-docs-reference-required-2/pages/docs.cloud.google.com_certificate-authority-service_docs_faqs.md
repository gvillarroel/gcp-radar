---
title: "Frequently asked questions \_|\_ Certificate Authority Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/faqs
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/faqs
  title: "Frequently asked questions \_|\_ Certificate Authority Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Frequently asked questions
What is Certificate Authority Service?
Certificate Authority Service is a highly available, scalable Google Cloud service that enables customers to simplify, automate, and customize the deployment, management, and security of private certificate authorities (CAs) while staying in control of their private keys.
What are the common use cases for Certificate Authority Service?
Given below are some common use cases for CA Service.
Workload identities : Leverage APIs to get certificates for applications or use certificates in applications, containers, systems, and other resources.
Enterprise scenarios : Use certificates for VPN, Chrome Enterprise Premium, signing documents, WiFi access, email, smartcard, and more.
Centralized certificate issuance and management : Configure GKE Enterprise Service Mesh to use CA Service.
IoT and mobile device identity : Issue TLS certificates as identity for endpoints.
CI/CD channel, Binary Authorization, Istio, and Kubernetes.
Which compliance standards does CA Service support?
For information, see Security and Compliance .
Which locations can we create CA Service resources in?
CA Service resources can be created in one of many locations. For the complete list of locations, see Locations .
Does CA Service support a global PKI under a single root?
Yes, provided the root CA lives in a single region. However, you can create multiple issuing CAs in different regions that chain up to the same root.
Are labels supported for CAs?
Yes, you can associate labels to CA pools and CAs during create and update operations.
For information on updating labels on a CA pool, see Updating labels on a CA pool .
For information on updating labels on a CA, see Updating labels on a CA .
Is it possible to use Cloud Monitoring to track certificate creation and CA expiration? Is it possible to generate Pub/Sub events for them?
Yes, you can monitor all of these events. CA Service does not natively support Pub/Sub but you can configure it using Cloud Monitoring . For more information, see Using Cloud Monitoring with CA Service .
How long are unactivated CAs retained?
Subordinate CAs are created in the AWAITING_USER_ACTIVATION state, and they are set to the STAGED state after activation. If a subordinate CA is still in the AWAITING_USER_ACTIVATION state 30 days after it has been created, it is deleted.
For information about the various states a CA is in through its lifecycle, see Certificate authority states .
What access controls does CA Service support for certificate issuance?
CA Service supports setting IAM policies on a CA pool to control who can issue certificates. A CA admin can attach an issuance policy to a CA pool. This issuance policy defines restrictions on the type of certificates that the CAs in a CA pool can issue. These restrictions include placing limits on domain name, extensions, and certificate validity period, among other things.
For more information on how to configure an issuance policy on a CA pool, see Using an issuance policy .
For information on how to configure the necessary IAM policies for creating and managing CA Service resources, see Configuring IAM policies .
Does CA Service support multi-region Cloud KMS keys?
No, CA Service does not support multi-region Cloud KMS keys.
Will CA Service ever throttle my requests? What is the target QPS for CA Service?
Yes, there exists a throttling mechanism for CA Service. For more information, see Quotas and limits .
Does CA Service support VPC Service Controls?
Yes, CA Service supports VPC Service Controls. For more information, see Supported products and limitations > Certificate Authority Service and Security and Compliance .
How are PEM encoded public keys supposed to be used with REST APIs?
PEM encoded public keys can only be used with REST APIs after they have been Base64 encoded.
Can preview stage APIs still be used after CA Service announces general availability (GA)?
Yes, preview APIs can still be used for a short period after CA Service announces GA. This period is only intended for customers to smoothly transition to using the latest APIs and will be short-lived with limited support. We recommend that customers migrate to using the GA APIs as soon as they are available.
How can resources created during the preview period be accessed after CA Service announces general availability (GA)?
You cannot view or manage resources created during the preview period using the Google Cloud console.
To manage resources created during preview, use the preview APIs or the preview gcloud commands.
The preview APIs are accessible through the https://privateca.googleapis.com/v1beta1/ endpoint.
The preview gcloud commands are accessible through gcloud privateca beta . For more information about gcloud privateca beta commands, see gcloud privateca beta .
Can a subordinate CA be created with the same subject and key as another CA in its chain?
No, a subordinate CA cannot have the same subject and key as the root CA, or any other CA in its chain. RFC 4158 recommends that subject names and public key pairs are not repeated in paths.
Are customer-managed Cloud KMS keys the same as CMEK?
No, the customer-managed Cloud KMS
keys
supported in CA Service for the CA signing keys aren't the same as
customer-managed encryption keys
(CMEK) that are used to encrypt data at rest within
supported Google Cloud services.
CA Service supports CMEK for encrypting certain fields in certificates,
such as the certificate subject and Subject Alternative Names (SANs). For more
information, see Customer-managed encryption keys (CMEK) and CA Service .
Can resource names be reused after the resource is deleted?
No, resource names such as the names of CA pools, CAs, and certificate templates can't be reused in a new resource after the original resource
is deleted. For example, if you create a CA pool called projects/Charlie/locations/Location-1/caPools/my-pool , and then delete the CA
pool, you can't create another CA pool called my-pool in the project Charlie and location Location-1 .
What's next
Learn about the known limitations .
Read the release notes .
Learn how you can get support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
