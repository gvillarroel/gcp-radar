---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.843Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security posture service"
feature_slug: "security-posture-service"
latest_feature_date: "2024-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial"
keywords:
  - "security"
  - "posture"
  - "lets"
  - "you"
  - "create"
  - "deploy"
  - "postures"
  - "define"
---

# Security posture service

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The security posture service lets you create and deploy postures to define organization policies and monitor for drift.

## Extended Definition

The security posture service lets you create and deploy postures to define organization policies and monitor for drift.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial](https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- August 12, 2025 Feature Data Security Posture Management (DSPM) lets you define, deploy, monitor, and audit data security postures for your Google Cloud environment.
- This service lets you create and deploy postures so that you can define the policies for your Google Cloud organization and monitor for drift.
- Feature Pane on Overview page that supports postures for Vertex AI released to Preview A pane on the Overview page lets you monitor for vulnerabilities that were found by the Security Health Analytics custom modules that apply to Vertex AI, and lets you view any drift from the Vertex AI organization policies that are defined in a posture.
- October 04, 2024 Feature Manage security postures using the Google Cloud console You can now create, deploy, update, and delete security postures using the Google Cloud console.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: Security Health Analytics overview How to use Security Health Analytics Remediating Security Health Analytics findings Reference of Security Health Analytics findings Security posture service Premium and Enterprise service tiers (requires organization-level activation ) The security posture service is a built-in service for the Security Command Center Premium tier that lets you define, assess, and monitor the overall status of your security in Google Cloud.
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.
- You can filter in the following investigative views: Risk Overview > All risk dashboard Risk Overview > Data dashboard Findings page Issues page Compliance > Monitor (New) tab Compliance > Monitor (New) > Framework Details page The application filter is available when viewing data for an organization and lists applications that are created in App Hub and deployed in the same organization where Security Command Center was activated.
- Data Security Posture Management Standard, Premium, and Enterprise service tiers (requires organization-level activation ) Data Security Posture Management (DSPM) creates findings for potential violations to the data security frameworks and cloud controls that you apply in your environment.

### "Create a sample IaC validation report \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial](https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Paste the following code into your file: name: organizations/ ORGANIZATION ID /locations/global/postures/example-standard state: ACTIVE policySets: - policies: - constraint: orgPolicyConstraintCustom: customConstraint: actionType: ALLOW condition: "resource.initialNodeCount == 3" description: Set initial node count to be exactly 3. displayName: fixedNodeCount methodTypes: - CREATE name: organizations/ ORGANIZATION ID /customConstraints/custom.fixedNodeCount resourceTypes: - container.googleapis.com/NodePool policyRules: - enforce: true policyId: fixedNodeCount - constraint: securityHealthAnalyticsCustomModule: config: customOutput: {} description: Set MTU for a network to be exactly 1000. predicate: expression: "!(resource.mtu == 1000)" recommendation: Only create networks whose MTU is 1000. resourceSelector: resourceTypes: - compute.googleapis.com/Network severity: HIGH displayName: fixedMTU moduleEnablementState: ENABLED policyId: fixedMTU - constraint: securityHealthAnalyticsModule: moduleEnablementState: ENABLED moduleName: BUCKET POLICY ONLY DISABLED policyId: bucket policy only disabled - constraint: securityHealthAnalyticsModule: moduleEnablementState: ENABLED moduleName: BUCKET LOGGING DISABLED policyId: bucket logging disabled policySetId: policySet1 Replace ORGANIZATION ID with your organization ID.
- Deploy the posture to your project: gcloud scc posture-deployments create organizations/ ORGANIZATION ID /locations/global/postureDeployments/example-standard \ --posture-name=organizations/ ORGANIZATION ID /locations/global/postures/example-standard \ --posture-revision-id=" POSTURE REVISION ID " \ --target-resource=projects/ PROJECT NUMBER Replace the following: ORGANIZATION ID : your organization ID.
- You will need the project number to set the target resource while deploying the posture. gcloud projects describe PROJECT ID Initialize Terraform: terraform init Create and deploy a posture In Cloud Shell, launch the Cloud Shell Editor.
- In Cloud Shell, create the posture: gcloud scc postures create organizations/ ORGANIZATION ID /locations/global/postures/example-standard --posture-from-file=example-standard.yaml Copy the posture revision ID that the command generates.

