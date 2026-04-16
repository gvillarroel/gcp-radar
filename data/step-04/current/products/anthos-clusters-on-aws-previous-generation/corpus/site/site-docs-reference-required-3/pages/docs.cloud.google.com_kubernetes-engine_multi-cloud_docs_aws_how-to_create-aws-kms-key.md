---
title: "Create an AWS KMS key \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-kms-key
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-kms-key
  title: "Create an AWS KMS key \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Create an AWS KMS key
Stay organized with collections
Save and categorize content based on your preferences.
Overview
GKE on AWS uses customer-managed
AWS Key Management Service
(KMS) symmetric keys to encrypt:
Kubernetes state data in
etcd
EC2 instance
user data
EBS volumes for
at-rest encryption
of control plane and node pool data
For production environments, we recommend using different keys for configuration
and volume encryption. To further minimize risks if a key is compromised, you
can also create different keys for each of the following:
Cluster control plane configuration
Cluster control plane database
Cluster control plane main volume
Cluster control plane root volume
Node pool configuration
Node pool root volume
For additional security, you can create an AWS KMS key policy that assigns only
the minimum required set of permissions. For more information, see
Creating KMS keys with specific permissions .
Create an AWS KMS key
To create a key, run the following command:
aws -- region AWS_REGION kms create - key \
-- description " KEY_DESC "
Replace the following:
AWS_REGION with the name of your AWS region
KEY_DESC with a text description of your key
For each key you create, save the value named KeyMetadata.Arn in the output of
this command for later use.
Creating KMS keys with specific permissions
If you create separate keys for different functions, you need to provide a
KMS key policy
for each key that grants appropriate permissions on that key. If you don't
specify a key policy when you create a key, AWS KMS will create a default key
policy that gives all
principals
in the owning account unlimited access to all operations for the key.
When you create a key policy, you must allow an AWS IAM policy access to the key
policy. The key policy must also give your account permissions to use IAM
policies. Without permission from the key policy, IAM policies that allow
permissions have no effect. For more information, see
Key policies in AWS KMS .
The following table describes the permissions for each of the
AWS IAM roles GKE on AWS
uses.
GKE Multi-Cloud API service agent role
Control plane role
Node pool role
AWS Service Role For AutoScaling
Cluster control plane configuration encryption
kms:Encrypt
kms:Decrypt
N/A
N/A
Cluster control plane database encryption
N/A
kms:Encrypt
kms:Decrypt
N/A
N/A
Cluster control plane main volume encryption
kms:GenerateDataKeyWithoutPlaintext
kms:CreateGrant
N/A
N/A
Cluster control plane root volume encryption
N/A
N/A
N/A
See
Key policy sections that allow access to the customer managed key
Node pool configuration encryption
kms:Encrypt
N/A
kms:Decrypt
N/A
Node pool root volume encryption
N/A
N/A
N/A
See
Key policy sections that allow access to the customer managed key
Other requirements
kms:DescribeKey
N/A
N/A
N/A
What's next
Create an SSH key pair .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
