---
title: "Asymmetric encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/asymmetric-encryption
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/asymmetric-encryption
  title: "Asymmetric encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Guides
Send feedback
Asymmetric encryption
Stay organized with collections
Save and categorize content based on your preferences.
Asymmetric encryption is the process of using a public key from a
public/private key pair to encrypt plaintext, and then using the corresponding
private key to decrypt the ciphertext. Asymmetric encryption relies on
asymmetric cryptography, also known as public key cryptography.
Symmetric encryption, on the other hand, uses the same key to encrypt and
decrypt data.
Asymmetric encryption workflow
The following describes the flow for using an asymmetric key to encrypt and
decrypt data. The two participants in this workflow consists of a sender and a
recipient. The sender creates ciphertext using the recipient's public key, and
then the recipient decrypts the ciphertext using the recipient's private key.
Only someone with knowledge of the private key can decrypt the ciphertext.
The sender retrieves the recipient's public key.
The sender uses the public key to encrypt plaintext.
The sender sends the ciphertext to the recipient.
The recipient uses the recipient's private key to decrypt the ciphertext. The
recipient can now view the plaintext.
Example use case for asymmetric encryption
Asymmetric encryption only supports a very small plaintext size, so
asymmetric encryption is generally used for encryption keys, not large pieces of
data. As an example, you can use asymmetric encryption as a variation of
envelope encryption . In this scenario, anyone with access to the public key
can encrypt the data encryption key (DEK). Only Cloud KMS can then
decrypt the encrypted DEK, on behalf of the owner of the asymmetric key.
Asymmetric encryption algorithms
Cloud Key Management Service supports RSA algorithms for asymmetric encryption. RSA is
an industry standard algorithm and offers choices of key size and digest
algorithm. RSA cryptography relies on the difficulty in factoring a large
integer into two or more factors. The larger the key size, the more difficult it
is to factor the integers.
Cloud KMS asymmetric encryption functionality
Cloud KMS provides the following functionality related to
asymmetric encryption.
Ability to create an asymmetric key with key purpose of
ASYMMETRIC_DECRYPT . For information about which algorithms
Cloud KMS supports, see asymmetric encryption algorithms .
Ability to retrieve the public key for an asymmetric key. You use the
public key to encrypt data . Cloud KMS does not directly
provide a method to asymmetrically encrypt data. Instead, you encrypt data using
openly available SDKs and tools, such as OpenSSL . These SDKs and tools
require the public key that you retrieve from Cloud KMS.
Ability to decrypt data with an asymmetric key .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
