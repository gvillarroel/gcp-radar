---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.686Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Get Case Details predefined widget"
feature_slug: "get-case-details-predefined-widget"
latest_feature_date: "2025-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub"
keywords:
  - "get"
  - "case"
  - "details"
  - "predefined"
  - "widget"
  - "adds"
  - "for"
  - "the"
---

# Get Case Details predefined widget

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds a predefined widget for the Get Case Details action.

## Extended Definition

Adds a predefined widget for the Get Case Details action.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- Actions Name The Name of the action should point to the activity that is being performed; for example, Get Case Details , List Entity Events , or Execute Search .
- You should validate the logo on the following pages: Response > Integration Setup Response > Playbooks > Playbook Designer Cases > Alert > Alert Playbook View The following is an example of an SVG logo, designed to match our style guide: <?xml version="1.0" encoding="UTF-8"?><svg id="Layer 1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 23"> <defs> <style> .cls-1 { stroke-width: 0px; } </style> </defs> <path class="cls-1" d="M15.51,4.79H5.49c-.4,0-.72.32-.72.72v5.75c0,2.3,1.71,4.15,3.69,5.38.54.34,1.1.62,1.66.86l.09.04c.06.02.12.05.18.06.03,0,.07,0,.1,0,.1,0,.19-.03.28-.07l.09-.04c.76-.33,2.22-1.03,3.46-2.24,1.24-1.22,1.89-2.6,1.89-4v-5.75c0-.4-.32-.72-.72-.72ZM14.32,11.26c0,.88-.44,1.77-1.32,2.63-.65.64-1.55,1.22-2.5,1.68-.95-.46-1.84-1.04-2.5-1.68-.88-.86-1.32-1.75-1.32-2.63v-4.55h7.64v4.55ZM20.28,0H.72c-.4,0-.72.32-.72.72v10.77c0,2.56,1.18,4.99,3.51,7.21,2.29,2.18,5.12,3.56,6.61,4.2l.09.04s.1.04.15.05c.04,0,.09.01.13.01.1,0,.19-.02.28-.06l.09-.04c.53-.23,1.23-.55,2.02-.97,1.42-.75,3.11-1.82,4.59-3.23,2.33-2.22,3.51-4.64,3.51-7.21V.72c0-.4-.32-.72-.72-.72ZM16.17,17.31c-1.9,1.81-4.24,3.04-5.67,3.69-1.43-.65-3.77-1.88-5.67-3.69-1.94-1.84-2.92-3.8-2.92-5.82V1.92h17.18v9.57c0,2.02-.98,3.98-2.92,5.82Z"/></svg> Be sure to encode the SVG before adding it to the integration definition file, as can be found in other integrations in the Content Hub.
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.

### "Integrate Recommender with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table Available Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-27T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID ", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/", "member": "serviceAccount: SERVICE ACCOUNT ID ", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/i/locations/global/insightTypes/" } ], "priority": "P4" }, { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-27T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 5 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "user: USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/chroniclesm.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects", "member": "user: USER ID @example.com", "removedRole": "roles/chroniclesm.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully found recommendations for the provided criteria in the Google Cloud Recommender service.
- Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result { "applied recommendations": [ { "name": "projects/ PROJECT ID /locations/global/recommenders/google.iam.policy.Recommender/recommendations/217d3019-bae5-4a52-9968-787fdd546a53", "description": "Replace the current role with a smaller role to cover the permissions needed.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 610 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "add", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/-", "value": " USER ID @example.com", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /role": "roles/compute.instanceAdmin" } }, { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": " USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/compute.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "user: USER ID @example.com", "removedRole": "roles/compute.admin", "addedRoles": [ "roles/compute.instanceAdmin" ], "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "SUCCEEDED", "stateMetadata": { "applied by": "bulk apply by automated script-2023-08-11" } }, "etag": "\"892d57ee41baa03e\"", "recommenderSubtype": "REPLACE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/ INSIGHT ID " } ], "priority": "P4" }, { "name": "projects/ PROJECT ID /locations/global/recommenders/google.iam.policy.Recommender/recommendations/ RECOMMENDATION ID ", "description": "Replace the current role with a smaller role to cover the permissions needed.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 19 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "add", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/-", "value": "user: USER ID @example.com", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /role": "roles/storage.objectAdmin" } }, { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "user: USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/storage.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "user: USER ID @example.com", "removedRole": "roles/storage.admin", "addedRoles": [ "roles/storage.objectAdmin" ], "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "SUCCEEDED", "stateMetadata": { "applied by": "bulk apply by automated script-2023-08-11" } }, "etag": "\"af7635ffeb512998\"", "recommenderSubtype": "REPLACE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/ INSIGHT ID " } ], "priority": "P4" } ], "failed recommendations": [] } Case wall The action provides the following output messages: Output message Message description Successfully applied provided IAM recommendations.
- Example of the expected input: projects/projectname/locations/global/recommenders/google.iam.policy.Recommender/recommendations/0f262740-bf4a-4c3d-9573-0da3345cf3f7 Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully found recommendation in the Google Cloud Recommender service.
- Possible values are: Not Specified Failed Succeeded Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully updated recommendation in the Google Cloud Recommender service.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A dashboard widget then shows which users are approaching a daily egress limit (for example, 10,000 bytes).
- By setting a rule to detect only and then plotting its detections in a dashboard widget, you can track trends, identify outliers, and gain a high-level audit view of the activity without being overwhelmed by individual alerts.
- For example, if multiple rules share the same meta label tactic: exfiltration , you can have a composite rule that targets any detection where the tactic label has the value exfiltration .
- Consider the following high-level strategies for getting the most value out of composite detections while managing technical constraints.

### "Integrate AWS Security Hub with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs The Get Insight Details action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Available Enrichment table Not available JSON result Available Output messages Available Script result Available Case wall table The Get Insight Details action can return the following table in Google SecOps: Table name: ' NUMBER OF OBJECTS ' Bucket Objects Columns: Name (mapped as GroupByAttributeValue ) Count (mapped as Count ) JSON result The following example shows the JSON result output received when using the Get Insight Details action: "InsightResults" : { "InsightArn" : "arn:aws:securityhub: ID " , "GroupByAttribute" : "ResourceId" , "ResultValues" : [ { "GroupByAttributeValue" : "arn:aws:s3:::int-arcsight-v-27-0-getreportstatus" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-arcsight-v-27-0-searchactionbug" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-arcsight-v-27-0-unicodeandlogs" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-automation-v-1-0" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-awss3-v-1-0" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-azureactivedirectory-v-4-0" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-bootcamp-v-1-0" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-categories" , "Count" : 5 } ] } Output messages The Get Insight Details action can return the following output messages: Output message Message description Successfully returned details about Insight with ARN ' ARN ' in AWS Security Hub.
- Script result The following table lists the value for the script result output when using the Create Insight action: Script result name Value is success True or False Get Insight Details Use the Get Insight Details action to return detailed information about insights in AWS Security Hub.
- Script result The following table lists the value for the script result output when using the Get Insight Details action: Script result name Value is success True or False Ping Use the Ping action to test the connectivity to AWS Security Hub.
- To configure permissions that are required for the AWS Security Hub integration, and set the custom policy, use the following code: { "Sid" : "SecurityHubServiceRolePermissions" , "Effect" : "Allow" , "Action" : [ "securityhub:GetMasterAccount" , "securityhub:GetInsightResults" , "securityhub:CreateInsight" , "securityhub:UpdateInsight" , "securityhub:BatchUpdateFindings" , "securityhub:GetFindings" , "securityhub:GetInsight" , "securityhub:DescribeHub" , ], "Resource" : " " } For more information about configuring permissions, see AWS managed policy: AWSSecurityHubServiceRolePolicy in AWS documentation.

