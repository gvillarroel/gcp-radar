# Image export in Google Cloud Console

Product: Compute Engine
Feature slug: `image-export-in-google-cloud-console`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Image export in Google Cloud Console lets you export Compute Engine images to Cloud Storage through the console.

## Lifecycle

- Latest feature date: 2020-03-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- armor (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- audit (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- authorization (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- certificate (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- confidential (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- credential (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- encrypt (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- identity (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- key (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- kms (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- private (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- role (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- security (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))
- token (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/api/using-libraries](https://docs.cloud.google.com/compute/docs/api/using-libraries)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
