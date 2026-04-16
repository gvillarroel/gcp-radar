---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.795Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security posture management in the Google Cloud console"
feature_slug: "security-posture-management-in-the-google-cloud-console"
latest_feature_date: "2024-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "security"
  - "posture"
  - "management"
  - "console"
  - "you"
  - "can"
  - "create"
  - "deploy"
---

# Security posture management in the Google Cloud console

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

You can create, deploy, update, and delete security postures from the Google Cloud console.

## Extended Definition

You can create, deploy, update, and delete security postures from the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial](https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### "Create a sample IaC validation report \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial](https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Paste the following code into your file: name: organizations/ ORGANIZATION ID /locations/global/postures/example-standard state: ACTIVE policySets: - policies: - constraint: orgPolicyConstraintCustom: customConstraint: actionType: ALLOW condition: "resource.initialNodeCount == 3" description: Set initial node count to be exactly 3. displayName: fixedNodeCount methodTypes: - CREATE name: organizations/ ORGANIZATION ID /customConstraints/custom.fixedNodeCount resourceTypes: - container.googleapis.com/NodePool policyRules: - enforce: true policyId: fixedNodeCount - constraint: securityHealthAnalyticsCustomModule: config: customOutput: {} description: Set MTU for a network to be exactly 1000. predicate: expression: "!(resource.mtu == 1000)" recommendation: Only create networks whose MTU is 1000. resourceSelector: resourceTypes: - compute.googleapis.com/Network severity: HIGH displayName: fixedMTU moduleEnablementState: ENABLED policyId: fixedMTU - constraint: securityHealthAnalyticsModule: moduleEnablementState: ENABLED moduleName: BUCKET POLICY ONLY DISABLED policyId: bucket policy only disabled - constraint: securityHealthAnalyticsModule: moduleEnablementState: ENABLED moduleName: BUCKET LOGGING DISABLED policyId: bucket logging disabled policySetId: policySet1 Replace ORGANIZATION ID with your organization ID.
- Deploy the posture to your project: gcloud scc posture-deployments create organizations/ ORGANIZATION ID /locations/global/postureDeployments/example-standard \ --posture-name=organizations/ ORGANIZATION ID /locations/global/postures/example-standard \ --posture-revision-id=" POSTURE REVISION ID " \ --target-resource=projects/ PROJECT NUMBER Replace the following: ORGANIZATION ID : your organization ID.
- Enable the Security posture service and Security Command Center management APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the Security posture service and Security Command Center management APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### "Use Security Command Center in the Google Cloud console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Posture management Premium and Enterprise service tiers (requires organization-level activation ) On the Posture page, you can view details about the security postures that you created in your organization and apply the postures to an organization, folder, or project.
- Risk overview Graph Search Issues page Findings Assets Compliance Posture Management Sources Settings Setup Guide Cases Risk overview Standard-legacy, Standard, Premium, and Enterprise service tiers The Risk overview page serves as your first-contact security dashboard, highlighting high-priority risks in your cloud environments identified by all built-in and integrated services.
- Risk overview Graph Search Issues page Findings Assets Compliance Posture Management Sources Settings Enterprise In the Security Command Center Enterprise left navigation, Cases links to pages in the Google Security Operations tenant that was configured during Security Command Center Enterprise activation.
- Security Operations console pages The Security Operations console page lets you perform tasks such as the following: Connect to other cloud environments to collect log data for curated detections in security information and event management (SIEM).

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Data Security Posture Management Standard, Premium, and Enterprise service tiers (requires organization-level activation ) Data Security Posture Management (DSPM) creates findings for potential violations to the data security frameworks and cloud controls that you apply in your environment.
- You can filter in the following investigative views: Risk Overview > All risk dashboard Risk Overview > Data dashboard Findings page Issues page Compliance > Monitor (New) tab Compliance > Monitor (New) > Framework Details page The application filter is available when viewing data for an organization and lists applications that are created in App Hub and deployed in the same organization where Security Command Center was activated.
- Standard-legacy, Standard, Premium, and Enterprise service tiers The Google Kubernetes Engine (GKE) security posture dashboard is a page in the Google Cloud console that provides you with opinionated, actionable findings about potential security issues in your GKE clusters.
- Mandiant Attack Surface Management is automatically enabled when you activate the Security Command Center Enterprise tier and findings are available in the Google Cloud console.

