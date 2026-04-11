---
title: "Apply a CMEK organization policy \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/cmek-organization-policy
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/cmek-organization-policy
  title: "Apply a CMEK organization policy \_|\_ Filestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Apply a CMEK organization policy
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud offers two organization policy constraints to help ensure CMEK
usage across an organization:
constraints/gcp.restrictNonCmekServices is used to require CMEK
protection.
constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which
Filestore keys are used for CMEK protection.
CMEK organization policies only apply to newly created resources within
supported Google Cloud services .
For a more detailed explanation of how this works, see
Google Cloud resource hierarchy
and CMEK organization policies .
Control CMEK use with organization policy
Filestore integrates with CMEK
organization policy constraints
to let you specify encryption compliance requirements for
Filestore resources in your organization.
This integration lets you do the following:
Require CMEKs for all Filestore resources .
Restrict which Cloud KMS keys can be used to protect resources in a
project .
The following sections cover both of these tasks.
Require CMEKs for all Filestore resources
A common policy is to require CMEKs to be used to protect all resources in an
organization. You can use the constraints/gcp.restrictNonCmekServices
constraint to enforce this policy in Filestore.
If set, this organization policy causes all resource creation requests without a
specified Cloud KMS key to fail.
After you set this policy, it applies only to new resources in the project. Any
existing resources without Cloud KMS keys set continue to exist and are
accessible without issue.
Console
Open the Organization policies page.
Go to Organization policies
In the Filter field, enter
constraints/gcp.restrictNonCmekServices , and then click
Restrict which services may create resources without CMEK .
Click edit Manage Policy .
On the Edit policy page, select Override parent's policy .
Select Add a rule .
For Policy values , select Custom .
For Policy type , select Deny .
In the Custom values field, enter is:file.googleapis.com .
Click Done , and then click Set policy .
gcloud
Create a temporary file /tmp/policy.yaml to store the policy:
name: projects/ PROJECT_ID /policies/gcp.restrictNonCmekServices
spec:
rules:
- values:
deniedValues:
- is:file.googleapis.com
Replace PROJECT_ID with the project ID of the project you want to
use.
Run the org-policies set-policy command:
gcloud org-policies set-policy /tmp/policy.yaml
To verify that the policy is successfully applied, you can try to create an
instance or backup in the project. The process fails unless you specify a
Cloud KMS key.
Restrict Cloud KMS keys for a Filestore project
You can use the constraints/gcp.restrictCmekCryptoKeyProjects constraint to
restrict the Cloud KMS keys that you can use to protect a resource in a
Filestore project.
You might specify a rule, for example, "For all Filestore
resources in projects/my-company-data-project, Cloud KMS keys used in
this project must come from projects/my-company-central-keys OR
projects/team-specific-keys."
Console
Open the Organization policies page.
Go to Organization policies
In the Filter field, enter
constraints/gcp.restrictCmekCryptoKeyProjects , and then click
Restrict which projects may supply KMS CryptoKeys for CMEK .
Click edit Manage Policy .
On the Edit policy page, select Override parent's policy .
Select Add a rule .
For Policy values , select Custom .
For Policy type , select Allow .
In the Custom values field, enter the following:
under:projects/ KMS_PROJECT_ID
Replace KMS_PROJECT_ID with the project ID where the
Cloud KMS keys you want to use are located.
For example, under:projects/my-kms-project .
Click Done , and then click Set policy .
gcloud
Create a temporary file /tmp/policy.yaml to store the policy:
name: projects/ PROJECT_ID /policies/gcp.restrictCmekCryptoKeyProjects
spec:
rules:
- values:
allowedValues:
- under:projects/ KMS_PROJECT_ID
Where:
PROJECT_ID is the project ID of the project you want to
use.
KMS_PROJECT_ID is the project ID where the Cloud KMS
keys you want to use are located.
Run the org-policies set-policy command:
gcloud org-policies set-policy /tmp/policy.yaml
To verify that the policy is successfully applied, you can try to create an
instance or backup using a Cloud KMS key from a different project. The
process will fail.
Limitations
The following limitations apply when setting an organization policy.
CMEK availability
As a reminder, CMEK support is not available for the basic HDD and basic SSD
service tiers. Given the way these constraints are defined, if you apply an
organization policy that requires CMEK use and then attempt to create a
basic-tier instance or backup in the associated project, those create operations
fail.
Existing resources
Existing resources are not subject to newly created organization policies.
For example, if you create an organization policy that requires you to specify a
CMEK for every create operation, the policy does not retroactively apply to
existing instances and backup chains. Those resources are still accessible
without a CMEK. If you want to apply the policy to existing resources, whether
instances or backup chains, you must replace them.
Required permissions to set an organization policy
The permission to set or update the organization policy might be difficult to
acquire for testing purposes. You must be granted the
Organization Policy Administrator role ,
which can only be granted at the organization level.
Although the role must be granted at the organization level, it is still
possible to specify a policy that only applies to a specific project
or folder.
Impact of Cloud KMS key rotation
Filestore doesn't automatically rotate a resource's encryption key
when the Cloud KMS key associated with that resource is rotated.
All data in existing instances and backups continues to be protected by
the key version with which they were created.
Any newly-created instances or backups use the primary key version specified
at the time of their creation.
When you rotate a key, data that was encrypted with previous key versions isn't
automatically re-encrypted. To encrypt your data with the latest key version,
you must decrypt the old key version from the resource, and then re-encrypt the
same resource with the new key version. In addition, rotating a key does not
automatically disable or destroy any existing key versions.
For detailed instructions on how to perform each of these tasks, see the
following guides:
Rotate a key
Decrypt and re-encrypt data
Enable and disable key versions
Destroy and restore key versions
Filestore access to the Cloud KMS key
A Cloud KMS key is considered available and accessible by
Filestore under the following conditions:
The key is enabled
The Filestore service account has encrypt and decrypt
permissions on the key
What's next
Learn how to encrypt a Filestore instance or backup .
Learn about CMEK .
Learn about encryption in transit in Google Cloud .
Learn about organization policies .
Learn about CMEK organization policies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
