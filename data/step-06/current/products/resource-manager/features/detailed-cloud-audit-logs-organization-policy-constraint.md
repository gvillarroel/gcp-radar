---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.090Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Detailed Cloud Audit Logs organization policy constraint"
feature_slug: "detailed-cloud-audit-logs-organization-policy-constraint"
latest_feature_date: "2020-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/audit-logging"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
keywords:
  - "detailed"
  - "audit"
  - "logs"
  - "organization"
  - "policy"
  - "constraint"
  - "allows"
  - "organizations"
---

# Detailed Cloud Audit Logs organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Allows organizations to enable detailed Cloud Audit Logs through an organization policy constraint.

## Extended Definition

Allows organizations to enable detailed Cloud Audit Logs through an organization policy constraint.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)

## Supporting Pages

### Resource Manager audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in Resource Manager: Audit logs category Resource Manager operations Admin Activity logs (ADMIN WRITE) UpdateContactInfo v3: cloudresourcemanager.v3.organizations.setIamPolicy cloudresourcemanager.v3.folders.create cloudresourcemanager.v3.folders.delete cloudresourcemanager.v3.folders.move cloudresourcemanager.v3.folders.patch cloudresourcemanager.v3.folders.setIamPolicy cloudresourcemanager.v3.folders.undelete cloudresourcemanager.v3.projects.create cloudresourcemanager.v3.projects.delete cloudresourcemanager.v3.projects.move cloudresourcemanager.v3.projects.patch cloudresourcemanager.v3.projects.setIamPolicy cloudresourcemanager.v3.projects.undelete cloudresourcemanager.v3.tagBindings.create cloudresourcemanager.v3.tagBindings.delete cloudresourcemanager.v3.tagKeys.create cloudresourcemanager.v3.tagKeys.delete cloudresourcemanager.v3.tagKeys.patch cloudresourcemanager.v3.tagKeys.setIamPermissions cloudresourcemanager.v3.tagValues.create cloudresourcemanager.v3.tagValues.delete cloudresourcemanager.v3.tagValues.patch cloudresourcemanager.v3.tagValues.setIamPermissions v2beta1: cloudresourcemanager.v2beta1.folders.create cloudresourcemanager.v2beta1.folders.delete cloudresourcemanager.v2beta1.folders.move cloudresourcemanager.v2beta1.folders.update cloudresourcemanager.v2beta1.folders.setIamPolicy cloudresourcemanager.v2beta1.folders.undelete v2: cloudresourcemanager.v2.folders.create cloudresourcemanager.v2.folders.delete cloudresourcemanager.v2.folders.move cloudresourcemanager.v2.folders.update cloudresourcemanager.v2.folders.setIamPolicy cloudresourcemanager.v2.folders.undelete v1beta1: cloudresourcemanager.v1beta1.organizations.setIamPolicy cloudresourcemanager.v1beta1.organizations.update cloudresourcemanager.v1beta1.projects.create cloudresourcemanager.v1beta1.projects.delete cloudresourcemanager.v1beta1.projects.setIamPolicy cloudresourcemanager.v1beta1.projects.undelete cloudresourcemanager.v1beta1.projects.update v1: cloudresourcemanager.v1.folders.clearOrgPolicy cloudresourcemanager.v1.folders.setOrgPolicy cloudresourcemanager.v1.organizations.clearOrgPolicy cloudresourcemanager.v1.organizations.setIamPolicy cloudresourcemanager.v1.organizations.setOrgPolicy cloudresourcemanager.v1.projects.clearOrgPolicy cloudresourcemanager.v1.projects.create cloudresourcemanager.v1.projects.delete cloudresourcemanager.v1.projects.setIamPolicy cloudresourcemanager.v1.projects.setOrgPolicy cloudresourcemanager.v1.projects.undelete cloudresourcemanager.v1.projects.update Data Access logs (ADMIN READ) GetContactInfo v3: cloudresourcemanager.v3.organizations.get cloudresourcemanager.v3.organizations.getIamPolicy cloudresourcemanager.v3.organizations.search cloudresourcemanager.v3.organizations.testIamPermissions cloudresourcemanager.v3.folders.get cloudresourcemanager.v3.folders.getIamPolicy cloudresourcemanager.v3.folders.list cloudresourcemanager.v3.folders.search cloudresourcemanager.v3.folders.testIamPermissions cloudresourcemanager.v3.projects.get cloudresourcemanager.v3.projects.getIamPolicy cloudresourcemanager.v3.projects.list cloudresourcemanager.v3.projects.search cloudresourcemanager.v3.projects.testIamPermissions cloudresourcemanager.v3.tagKeys.get cloudresourcemanager.v3.tagKeys.getIamPolicy cloudresourcemanager.v3.tagKeys.list cloudresourcemanager.v3.tagKeys.testIamPermissions cloudresourcemanager.v3.tagValues.get cloudresourcemanager.v3.tagValues.getIamPolicy cloudresourcemanager.v3.tagValues.list cloudresourcemanager.v3.tagValues.testIamPermissions v2beta1: cloudresourcemanager.v2beta1.folders.get cloudresourcemanager.v2beta1.folders.getIamPolicy cloudresourcemanager.v2beta1.folders.list v2: cloudresourcemanager.v2.folders.get cloudresourcemanager.v2.folders.getIamPolicy cloudresourcemanager.v2.folders.list v1beta1: cloudresourcemanager.v1beta1.organizations.get cloudresourcemanager.v1beta1.organizations.getIamPolicy cloudresourcemanager.v1beta1.projects.get cloudresourcemanager.v1beta1.projects.getIamPolicy v1: cloudresourcemanager.v1.folders.getEffectiveOrgPolicy cloudresourcemanager.v1.folders.getOrgPolicy cloudresourcemanager.v1.folders.listAvailableOrgPolicyConstraints cloudresourcemanager.v1.folders.listOrgPolicies cloudresourcemanager.v1.organizations.get cloudresourcemanager.v1.organizations.getEffectiveOrgPolicy cloudresourcemanager.v1.organizations.getIamPolicy cloudresourcemanager.v1.organizations.getOrgPolicy cloudresourcemanager.v1.organizations.listAvailableOrgPolicyConstraints cloudresourcemanager.v1.organizations.listOrgPolicies cloudresourcemanager.v1.projects.get cloudresourcemanager.v1.projects.getEffectiveOrgPolicy cloudresourcemanager.v1.projects.getIamPolicy cloudresourcemanager.v1.projects.listAvailableOrgPolicyConstraints cloudresourcemanager.v1.projects.listOrgPolicies Data Access logs (ADMIN READ under integrating service name) [1] v3: cloudresourcemanager.v3.tagBindings.list cloudresourcemanager.v3.effectiveTags.list Data Access logs (ADMIN READ under Organization Policy Service) [2] v2: orgpolicy.policies.getEffectivePolicy [1] ADMIN READ must be enabled under the service for the particular resource to which the tag is attached in order to enable this log [2] ADMIN READ must be enabled under the Organization Policy Service API in order to enable this log Note: The audit logs for projects.delete operations are written to the project's parent resource, which might not be the organization resource.
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Other Google Cloud resources, such as folders, organizations, and billing accounts, contain the audit logs for the entity itself.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Create the constraint To define a constraint that denies all project create and updates if the project ID does not start with dev , create the constraint-allow-dev-projects.yaml with the following contents: name : organizations/ ORGANIZATION ID /customConstraints/custom.allowProjectForDevIdOnly resourceTypes : - cloudresourcemanager.googleapis.com/Project methodTypes : - CREATE - UPDATE condition : "resource.projectId.startsWith(\"dev \")" actionType : ALLOW displayName : Allow dev projects description : All projects in the org should start with dev .
- Disable creation of a folder within another folder to control the depth of the resource hierarchy tree. name : organizations/ ORGANIZATION ID /customConstraints/custom.disableFolderCreation resourceTypes : - cloudresourcemanager.googleapis.com/Folder methodTypes : - CREATE condition : "resource.parent.startsWith(" folders")" actionType : DENY displayName : Disable creation of a folder inside another folder description : Do not allow creation of a folder within another folder when the resource hierarchy is set to a maximum value of 1.
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- Description Constraint syntax Deny creation of new projects in folder 1234 (secure admin folder). name : organizations/ ORGANIZATION ID /customConstraints/custom.disableNewProjectInSecureAdminFolder resourceTypes : - cloudresourcemanager.googleapis.com/Project methodTypes : - CREATE condition : "resource.parent == " organizations/1234"" actionType : DENY displayName : Disable new project creation in the secure admin folder description : Do not allow creation of new projects in the secure folders.

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Note: For some organizations created after August 15, 2024, the constraints/compute.restrictProtocolForwardingCreationForTypes organization policy constraint might already be applied.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.

