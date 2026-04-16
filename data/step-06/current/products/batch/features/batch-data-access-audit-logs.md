---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.662Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch Data Access audit logs"
feature_slug: "batch-data-access-audit-logs"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval"
  - "https://docs.cloud.google.com/iam/docs/overview"
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
keywords:
  - "provides"
  - "access"
  - "audit"
  - "enabling"
  - "logs"
  - "preview"
---

# Batch Data Access audit logs

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

Batch now provides Data Access audit logs in Preview, enabling auditing of data-access actions for Batch operations.

## Extended Definition

Batch now provides Data Access audit logs in Preview, enabling auditing of data-access actions for Batch operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)

## Supporting Pages

### "Access Approval roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Controls Partner Access Approval Service Agent ( roles/ cloudcontrolspartner.accessApprovalServiceAgent ) accessapproval. requests. invalidate Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Approver ( roles/ accessapproval.approver ) Access Approval Invalidator ( roles/ accessapproval.invalidator ) accessapproval.requests.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Accessapproval Admin ( roles/ accessapproval.admin ) Accessapproval Editor ( roles/ accessapproval.editor ) Access Approval Viewer ( roles/ accessapproval.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Access Approval Approver ( roles/ accessapproval.approver ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Audit Manager Auditing Service Agent ( roles/ auditmanager.serviceAgent ) Cloud Security Compliance Service Agent ( roles/ cloudsecuritycompliance.serviceAgent ) accessapproval.settings.update Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Config Editor ( roles/ accessapproval.configEditor ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access Approval roles Role Permissions Accessapproval Admin ( roles/ accessapproval.admin ) Admin role for accessapproval accessapproval. accessapproval. requests. approve accessapproval. requests. dismiss accessapproval.requests.get accessapproval. requests. invalidate accessapproval.requests.list accessapproval. serviceAccounts. get accessapproval.settings.delete accessapproval.settings.get accessapproval.settings.update resourcemanager.projects.get resourcemanager.projects.list Accessapproval Editor ( roles/ accessapproval.editor ) Editor role for accessapproval accessapproval.requests.get accessapproval.requests.list accessapproval. serviceAccounts. get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list Access Approval Viewer ( roles/ accessapproval.viewer ) Ability to view access approval requests and configuration accessapproval.requests.get accessapproval.requests.list accessapproval. serviceAccounts. get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list Access Approval Approver ( roles/ accessapproval.approver ) Ability to view or act on access approval requests and view configuration. accessapproval.requests. accessapproval. requests. approve accessapproval. requests. dismiss accessapproval.requests.get accessapproval. requests. invalidate accessapproval.requests.list accessapproval. serviceAccounts. get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list Access Approval Config Editor ( roles/ accessapproval.configEditor ) Ability to update the Access Approval configuration accessapproval. serviceAccounts. get accessapproval.settings. accessapproval.settings.delete accessapproval.settings.get accessapproval.settings.update resourcemanager.projects.get resourcemanager.projects.list Access Approval Invalidator ( roles/ accessapproval.invalidator ) Ability to invalidate existing approved approval requests accessapproval. requests. invalidate accessapproval. serviceAccounts. get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list Access Approval permissions Permission Included in roles accessapproval. requests. approve Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Approver ( roles/ accessapproval.approver ) accessapproval. requests. dismiss Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Approver ( roles/ accessapproval.approver ) accessapproval.requests.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Accessapproval Admin ( roles/ accessapproval.admin ) Accessapproval Editor ( roles/ accessapproval.editor ) Access Approval Viewer ( roles/ accessapproval.viewer ) Access Approval Approver ( roles/ accessapproval.approver ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Controls Partner Access Approval Service Agent ( roles/ cloudcontrolspartner.accessApprovalServiceAgent ) accessapproval. serviceAccounts. get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Accessapproval Admin ( roles/ accessapproval.admin ) Accessapproval Editor ( roles/ accessapproval.editor ) Access Approval Viewer ( roles/ accessapproval.viewer ) Access Approval Approver ( roles/ accessapproval.approver ) Access Approval Config Editor ( roles/ accessapproval.configEditor ) Access Approval Invalidator ( roles/ accessapproval.invalidator ) Support User ( roles/ iam.supportUser ) accessapproval.settings.delete Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Config Editor ( roles/ accessapproval.configEditor ) accessapproval.settings.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Accessapproval Admin ( roles/ accessapproval.admin ) Accessapproval Editor ( roles/ accessapproval.editor ) Access Approval Viewer ( roles/ accessapproval.viewer ) Access Approval Approver ( roles/ accessapproval.approver ) Access Approval Config Editor ( roles/ accessapproval.configEditor ) Access Approval Invalidator ( roles/ accessapproval.invalidator ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

### "IAM overview \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advanced access control In addition to allow policies, IAM provides the following access control mechanisms to help you refine who has access to what resources: Additional policy types : IAM offers the following policy types in addition to allow policies: Deny policies : Deny policies prevent principals from using certain permissions, even if they're granted a role with the permission.
- Privileged Access Manager (PAM) : With Privileged Access Manager, you can let principals request and be given temporary, auditable access to resources.
- For example, the Pub/Sub Publisher role ( roles/pubsub.publisher ) provides access to publish messages to a Pub/Sub topic.
- Log buckets don't have their own allow policies, so to give someone this permission, you can instead grant them the Logs Bucket Writer role ( roles/logging.bucketWriter ) on the project that contains the log bucket.

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Networking overview provides an overview of when and how you can customize the networking configuration for a job, including specifying the job's network, blocking external connections, and protecting data and resources by using VPC Service Controls.
- Control access for a job: Control access for a job using a custom service account explains how to specify a job's service account, which influences the resources and applications that a job's VMs can access.
- VM OS environment overview provides an overview of when and how you can customize the VM operating system (OS) environment for a job, including the job's VM OS image and boot disks.
- Schedule dependent jobs ( Preview ) explains how to specify a job that doesn't run until one or more existing dependency jobs have succeeded or failed.

