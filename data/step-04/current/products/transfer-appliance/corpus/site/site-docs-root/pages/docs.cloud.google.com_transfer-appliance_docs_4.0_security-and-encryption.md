---
title: "Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview
source_metadata:
  url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption
  title: "Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Transfer Appliance
Guides
Send feedback
Security and encryption
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how Transfer Appliance secures and encrypts your
data.
Google's infrastructure data security
When you return an appliance, we receive it at one of our Google data centers.
When you order an appliance for data export, we prepare it at one of our Google
data centers.
Securing customer data is our top priority and responsibility. For more
information about our infrastructure security, see Google Infrastructure
Security Design
Overview , and for more
information about our data center security practices, see Data and
Security .
Securing the appliance in transit
When you receive your appliance, you run the
Transfer Appliance Attestation Application . This application
validates the appliance identity and its state, to ensure that the appliance is
in the same state as it was when we shipped it to you. The application generates
an attestation passcode that you share with us. If the attestation passcode
matches what we expect, we provide the login credentials for the appliance.
When you're done using the appliance and we've received the appliance from you,
we validate the appliance again to ensure that it wasn't tampered with during
shipping. After we've verified the appliance, we upload your data to
Cloud Storage.
If the appliance validation indicates that the appliance was tampered with at
any point, we invalidate the entire transfer session and work with you to ship
you a replacement appliance.
Data encryption
Your data is encrypted during upload, during transit to our data centers,
after it has been uploaded to Cloud Storage, and during download to the
appliance when using data export feature. The following are details of how
we encrypt your data:
During transit to Cloud Storage : Your data is encrypted on
Transfer Appliance with dm-encrypt and partition-level
encryption, with the AES-256 encryption algorithm.
During upload to Cloud Storage : Your data is encrypted using secure
TLS connections. We transfer the encrypted data on your appliance to
Cloud Storage. For customers using VPC Service Controls, this process occurs
within your VPC Service Controls perimeter.
On Cloud Storage : Your data is encrypted on Cloud Storage by
default. For more details, see
Data encryption options .
During download to Transfer Appliance : Your data is encrypted
in the cloud before it is downloaded to the appliance when data export feature is used.
Encrypting data in transit to your appliance
We do not apply encryption between your storage or network devices and your
appliance. Securing the network and physical access to the appliance is your
responsibility. We do not access or monitor the appliance while it is connected
to your network.
Encrypting data on your appliance
We use two keys to encrypt data on your appliance:
A key encryption key , which is applied to the data
encryption key before you return the appliance to us.
A data encryption key , which is applied to your data
before it is written to the appliance's disks.
Key encryption key
You have the following two choices for the key encryption key (KEK):
You can create a customer-managed key, where you generate and manage the
key yourself.
You can select a Google-owned and managed key, in which we
generate and manage the key.
Google-owned and managed keys are unique per session, and
are not shared with other Google Cloud services. When a session is
completed or cancelled, or if an appliance is lost, we destroy the key to
ensure your data security.
The following are the settings used to create
Google-owned and managed keys:
Region : Global
Protection level: Software
Purpose : Asymmetric decrypt
Algorithm: 4096-bit RSA - OAEP Padding - SHA256 Digest
Destroying the KEK before the session is completed results in complete data loss
on the appliance.
The KEK is generated as a Cloud Key Management Service (Cloud KMS) asymmetric key in
Google Cloud, and we download the KEK public key to the appliance before we ship
it to you.
Data encryption key (DEK)
The DEK is generated on the appliance. The DEK is kept in memory, and is stored
on the appliance's Trusted Platform Module to persist the key across reboots.
The DEK is never stored on a local disk unencrypted.
The appliance applies the generated DEK to your data before writing your data to
disk. When you finalize the data on the appliance, the KEK public key is applied
to the DEK, and then the DEK is removed from the appliance.
Data is never stored unencrypted on the appliance.
Encrypt data for data export from Cloud Storage
When you order an appliance for data export, your appliance is prepared in a
secured Google data center and your data is encrypted first. The encrypted data is then
securely moved to the appliance which is further secured with disk level encryption.
Your data remains encrypted on the appliance while in the data center and during
transit and is only accessible once you activate the appliance.
Restrict access to data on your appliance
To restrict access to the data stored on your appliance's NFS shares, you can
apply an IP filter that allows specific hosts on your network to access the
appliance. Contact your network administrator for assistance.
For more information about the IP network ports that Transfer Appliance
uses, see Configuring IP network ports .
Upload data to Cloud Storage
When we receive your appliance in one of our secured data centers, we upload
your encrypted data into your VPC Service Controls perimeter before applying the KEK
to decrypt the DEK and your data. The DEK is never persisted at any point during
the transfer lifecycle. Then we securely move your data to
Cloud Storage on our private data center network using secure TLS
connections. Your data is encrypted in Cloud Storage by default, and is
accessible only to you.
Appliance media sanitization
After uploading your data or receiving the appliance for data export,
we sanitize the drive media in the appliance you
returned by applying NIST 800-88 standards for purging information.
Specifically, we use cryptographic erasure to sanitize all encrypted data
previously stored on the appliance's drives. If a drive suffers a failure during
use that renders it inoperable and unable to be erased, we physically destroy
the affected physical media. For more information on our media sanitization
processes, see
Ensure safe and secure media sanitization .
You can request a wipe certificate for proof that we've securely sanitized the
appliance media within 4 weeks after your data is available within
Cloud Storage or after you've returned the appliance after data export.
Transfer Appliance refurbishment
Once we've destroyed your data on the appliance you returned, we prepare to ship
the appliance out to the next customer. The following is a summary of how we
refurbish each appliance after media sanitization:
We partition the drives on the appliance. Media sanitization also destroys
our data partitions, so we start fresh each time.
Then we reformat the drives, preparing them to store data and the
appliance's software.
Next, we install the appliance's software, and apply any necessary updates.
Finally, we package and prepare to ship the appliance to the next customer.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
