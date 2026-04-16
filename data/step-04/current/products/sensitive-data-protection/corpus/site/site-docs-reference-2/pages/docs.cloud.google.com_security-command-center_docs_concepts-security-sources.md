---
title: "Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources
  title: "Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Detection services
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
This page contains a list of the detection services, sometimes also
referred to as security sources , that Security Command Center uses to detect
security issues in your cloud environments.
When these services detect an issue, they generate a finding , which is
a record that identifies the security issue and provides you with the
information you need to prioritize and resolve the issue.
You can view findings in the Google Cloud console and filter them
in many different ways, such as by finding type, resource type, or for
a specific asset. Each security source might provide more filters to
help you organize your findings.
The IAM roles for Security Command Center can be granted at the organization,
folder, or project level. Your ability to view, edit, create, or update findings, assets,
and security sources depends on the level for which you are granted access. To learn more about
Security Command Center roles, see Access control .
Vulnerability detection services
Vulnerability detection services include built-in and integrated services
that detect software vulnerabilities, misconfigurations, and
posture violations in your cloud environments. Collectively, these types
of security issues are referred to as vulnerabilities .
Artifact Registry vulnerability assessment
Standard-legacy, Standard, Premium, and Enterprise service tiers
Artifact Registry vulnerability assessment is a detection service that alerts
you to vulnerabilities in your deployed container images.
This detection service generates vulnerability findings for container
images under the following conditions:
The container image is stored in Artifact Registry .
The container image is deployed to one of the following assets:
Google Kubernetes Engine cluster
Cloud Run service
Cloud Run job
App Engine
Artifact Registry vulnerability assessment surfaces findings for vulnerabilities that are
classified a HIGH or CRITICAL severity. Artifact Registry vulnerability assessment won't
generate findings for vulnerabilities that have a lower severity.
If you enable Artifact Registry vulnerability assessment with Security Command Center,
Artifact Registry vulnerability assessment automatically writes high and critical
findings to Security Command Center. If your container images have vulnerabilities
categorized as medium or low, you can manage them in the
Artifact Registry vulnerability assessment, but Security Command Center doesn't display them.
Artifact Registry vulnerability assessment only scans images that were pulled in the last 30
days. Artifact Registry vulnerability assessment continues to scan the image and create new
findings until the image has not been pulled for more than 30 days.
After Artifact Registry vulnerability assessment findings are generated, they remain available
for you to query up to 30 days after the last vulnerability finding update.
For more information about Security Command Center data retention, see Data
retention .
Enable Artifact Registry vulnerability assessment findings
For Artifact Registry vulnerability assessment to generate findings in
Security Command Center for deployed container images stored in Artifact Registry,
the Container Scanning API
must be enabled for your project.
If you haven't enabled the Container Scanning API, do the following:
In the Google Cloud console, go to the Container Scanning API page.
Go to Container Scanning API
Select the project you want to enable the Container Scanning API for.
Click Enable .
Security Command Center will display findings for scanned vulnerable container
images that are actively deployed to the applicable runtime
assets . However, the detection service behaves differently
depending on when you enabled Security Command Center and when you enabled the
Container Scanning API.
Enablement scenario
Detection service behavior
You enabled Security Command Center after you enabled the Container Scanning API and deployed a container image.
Artifact Registry vulnerability assessment will generate findings for existing vulnerabilities found with previous Artifact Registry scans within 24 hours of enablement.
You enabled Security Command Center and deployed a container image before you enabled the Container Scanning API.
Artifact Registry vulnerability assessment won't automatically generate vulnerability findings for container images you deployed before enabling the API until a new scan is triggered. To manually trigger a new scan, redeploy the container image to the same runtime resource. Artifact Registry vulnerability assessment will immediately generate findings if any vulnerabilities are detected during the scan.
You enabled Security Command Center and the Container Scanning API before you deployed a container image.
The newly deployed container image is immediately scanned in Artifact Registry and Artifact Registry vulnerability assessment generates findings if any vulnerabilities are detected by the scan.
Disable Artifact Registry vulnerability assessment findings
To disable Artifact Registry vulnerability assessment findings, do the following:
In the Google Cloud console, go to the API/Service Details page for the
Container Scanning API.
Go to API/Service Details
Select the project you want to disable the Container Scanning API for.
Click Disable API .
Security Command Center doesn't display findings for vulnerabilities detected in future
container image scans. Security Command Center keeps Artifact Registry vulnerability assessment
findings active for 30 days after the last vulnerability finding update.
The findings are then deactivated, and they're deleted 7 days after deactivation.
For more information about Security Command Center data retention, see
Data retention .
You can also disable Artifact Registry vulnerability assessment by disabling the Vulnerability
Assessment source ID in the Security Command Center settings; however, we don't
recommend this. Disabling the Vulnerability Assessment source ID will disable
all the detection services classified under the Vulnerability Assessment source
ID. Therefore, we recommend disabling the Container Scanning API with the
preceding procedure.
Artifact Registry vulnerability assessment detectors
Detector
Summary
Container image vulnerability
Category name in the API: CONTAINER_IMAGE_VULNERABILITY
Finding description : A vulnerability was detected in a container image that was
scanned in Artifact Registry. This image is deployed to one of the following assets:
Google Kubernetes Engine cluster
Cloud Run service
Cloud Run job
App Engine
Pricing tier : Standard, Premium, or
Enterprise
Fix this finding build :
Depending on the resource type, do the following:
For Cloud Run jobs or executions, update the job configuration with a fixed
image version. The finding is resolved if the Cloud Run job with the vulnerable
image version isn't executed for 12 hours.
For Cloud Run services or revisions, allocate traffic to a different
revision that is deployed with a fixed image version. Make sure that traffic is not allocated to the
revision with the vulnerable image.
For Google Kubernetes Engine or App Engine assets, upgrade or delete the container image
version.
You can resolve the finding by either removing the runtime
association or removing the vulnerable image version in Artifact Registry.
Refer to the details of the finding for specific remediation steps based on the
appropriate runtime resource.
For Standard-legacy tier customers, using the Asset query
feature of Cloud Asset Inventory to determine where the vulnerable container image is deployed is
not supported. We recommend upgrading to the Premium or Enterprise tiers to get more
detailed information.
View Artifact Registry vulnerability assessment findings in the console
In the Google Cloud console, go to the Findings page of Security Command Center.
Go to Findings
Select your Google Cloud project or organization.
In the Quick filters section, in the Source display name subsection, select
Vulnerability Assessment . The findings query results are updated to show only the findings
from this source.
To view the details of a specific finding, click the finding name in the Category column.
The details panel for the finding opens and displays the Summary tab.
On the Summary tab, review the details of the finding, including information about what
was detected, the affected resource, and—if available—steps that you can take to
remediate the finding.
Optional: To view the full JSON definition of the finding, click the JSON tab.
Compliance Manager findings
Standard, Premium, and Enterprise service tiers (requires organization-level activation )
Compliance Manager creates findings for the detective and
preventive cloud controls that you deploy in your Google Cloud environment.
You can view these findings on the Findings page in Security Command Center.
Compliance Manager provides a different set of capabilities for
each service tier. For more information, see
Compliance Manager overview .
View Compliance Manager findings in the console
In the Google Cloud console, go to the Findings page of Security Command Center.
Go to Findings
Select your Google Cloud project or organization.
In the Quick filters section, in the Source display name subsection, select
Compliance Evaluation Service . The findings query results are updated to show only the findings
from this source.
To view the details of a specific finding, click the finding name in the Category column.
The details panel for the finding opens and displays the Summary tab.
On the Summary tab, review the details of the finding, including information about what
was detected, the affected resource, and—if available—steps that you can take to
remediate the finding.
Optional: To view the full JSON definition of the finding, click the JSON tab.
Data Security Posture Management
Standard, Premium, and Enterprise service tiers (requires organization-level activation )
Data Security Posture Management (DSPM)
creates findings for potential violations to the data security frameworks and
cloud controls that you apply in your environment. You can view these findings
on the Data Security & Compliance page, the Risk Overview page (under
the Data tab), or in the Findings page in
Security Command Center. DSPM provides a different set of capabilities
for each service tier. For more information, see
Data Security Posture Management (DSPM) overview .
View DSPM findings in the console
In the Google Cloud console, go to the Findings page of Security Command Center.
Go to Findings
Select your Google Cloud organization.
Use the following query to view the findings for DSPM:
state="ACTIVE" AND NOT mute="MUTED" AND resource.name="//aiplatform.googleapis.com/projects/478190632149/locations/us-central1/models/1244151282898305024" AND category="DATA_SECURITY_POSTURE_ACCESS_VIOLATION" OR category="DATA_SECURITY_POSTURE_FLOW_VIOLATION" OR category="DATA_SECURITY_POSTURE_DELETION_VIOLATION" OR category="DATA_SECURITY_POSTURE_PROTECTION_KEY_GOVERNANCE" OR category="BIGQUERY_TABLE_CMEK_DISABLED" OR category="VERTEX_AI_MODEL_CMEK_DISABLED" OR category="VERTEX_AI_METADATA_STORE_CMEK_DISABLED" OR category="VERTEX_AI_DATASET_CMEK_DISABLED" OR category="VERTEX_AI_FEATURE_STORE_TABLE_CMEK_DISABLED" OR category="DATA_SECURITY_POSTURE_CMEK_POLICY_MISCONFIGURED" OR category="DATA_SECURITY_POSTURE_CMEK_POLICY_DELETED" OR category="DATA_SECURITY_POSTURE_CMEK_VIOLATION" OR category="SENSITIVE_DATA_PUBLIC_SQL_INSTANCE" OR category="SENSITIVE_DATA_PUBLIC_DATASET" OR category="SENSITIVE_DATA_BIGQUERY_TABLE_CMEK_DISABLED" OR category="SENSITIVE_DATA_DATASET_CMEK_DISABLED" OR category="SENSITIVE_DATA_SQL_CMEK_DISABLED" OR category="PUBLIC_DATASET" OR category="PUBLIC_SQL_INSTANCE" OR category="SQL_PUBLIC_IP" OR category="ACCESS_TRANSPARENCY_DISABLED" OR category="ORG_POLICY_LOCATION_RESTRICTION" OR category="BUCKET_POLICY_ONLY_DISABLED" OR category="DATA_EXFILTRATION_BIG_QUERY" OR category="DATA_EXFILTRATION_BIG_QUERY_EXTRACTION" OR category="DATA_EXFILTRATION_BIG_QUERY_TO_GOOGLE_DRIVE"
To view the details of a specific finding, click the finding name in the
Category column. The details panel for the finding opens and displays the
Summary tab.
On the Summary tab, review the details of the finding, including
information about what was detected, the affected resource, and—if
available—steps that you can take to remediate the finding.
Optional: To view the full JSON definition of the finding, click the JSON
tab.
GKE security posture dashboard
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Standard-legacy, Standard, Premium, and Enterprise service tiers
The Google Kubernetes Engine (GKE) security posture dashboard is a page in the
Google Cloud console that provides you with opinionated, actionable findings
about potential security issues in your GKE clusters.
To see these findings, enable any of the following GKE
security posture dashboard features:
GKE security posture dashboard pane
Security Command Center finding class
Workload
configuration auditing 1
MISCONFIGURATION
Top threats 2
THREAT
Container
OS vulnerability scanning 1
Language
package vulnerability scanning 1
Actionable
security bulletins 1 ( Preview )
Top software vulnerabilities 2
( Preview )
VULNERABILITY
Available only if you enable this feature in GKE.
Available for Security Command Center Premium and Enterprise
service tiers .
The findings display information about the security issue and provide
recommendations to resolve them in your workloads or clusters.
Important : Security bulletin findings that are published in Security Command Center
don't include a cve field that lists the associated CVEs. To view the CVEs,
check the finding's description field, or review the security bulletin in the
security posture dashboard
.
View GKE security posture dashboard findings in the console
In the Google Cloud console, go to the Findings page of Security Command Center.
Go to Findings
Select your Google Cloud project or organization.
In the Quick filters section, in the Source display name subsection, select
GKE Security Posture . The findings query results are updated to show only the findings
from this source.
To view the details of a specific finding, click the finding name in the Category column.
The details panel for the finding opens and displays the Summary tab.
On the Summary tab, review the details of the finding, including information about what
was detected, the affected resource, and—if available—steps that you can take to
remediate the finding.
Optional: To view the full JSON definition of the finding, click the JSON tab.
IAM recommender
Standard-legacy, Standard, Premium, and Enterprise service tiers
IAM recommender
generates recommendations that you can follow to improve security by removing
or replacing IAM roles from principals when the roles contain
IAM permissions that the principal does not need.
IAM recommender is automatically enabled when you activate
Security Command Center.
Enable or disable IAM recommender findings
To enable or disable IAM recommender findings in Security Command Center,
follow these steps:
Go to the Integrated services tab of the Security Command Center
Settings page in the Google Cloud console:
Go to Integrated Services
Go to the IAM recommender entry.
To the right of the entry, select Enable or Disable .
Findings from IAM recommender are classified as vulnerabilities.
To remediate an IAM recommender finding, expand the following section to
see a table of the IAM recommender findings. The remediation steps for
each finding are included in the table entry.
IAM recommender detectors
Detector
Summary
IAM role has excessive permissions
Category name in the API: IAM_ROLE_HAS_EXCESSIVE_PERMISSIONS
Finding description : IAM recommender detected a service account that has
one or more IAM roles that give excessive permissions to the user
account.
Pricing tier : Premium
Supported assets :
google. cloud. resourcemanager. Project
google. cloud. resourcemanager. Folder
google. cloud. resourcemanager. Organization
Fix this finding build :
Use IAM recommender to apply the recommended fix for this finding by following
these steps:
In the Next steps section of the finding details in the Google Cloud console,
copy and paste the URL for the IAM page into a browser address
bar and press Enter . The IAM page loads.
Near the top of the IAM page on the right side, click
View recommendations in table . The recommendations are displayed in a table.
In the Security insights column, click any recommendation that relates to
excess permissions. The recommendation details panel opens.
Review the recommendation for the actions that you can take to resolve the issue.
Click Apply .
After the issue is fixed, IAM recommender updates the status of the finding to
INACTIVE within 10 days.
Service agent role replaced with basic role
Category name in the API: SERVICE_AGENT_ROLE_REPLACED_WITH_BASIC_ROLE
Finding description : IAM recommender detected that the original default
IAM role granted to a service agent was replaced with one of the basic
IAM roles: Owner , Editor , or Viewer . Basic roles are
excessively permissive legacy roles and should not be granted to service agents.
Pricing tier : Premium
Supported assets :
google. cloud. resourcemanager. Project
google. cloud. resourcemanager. Folder
google. cloud. resourcemanager. Organization
Fix this finding build :
Use IAM recommender to apply the recommended fix for this finding by following
these steps:
In the Next steps section of the finding details in the Google Cloud console,
copy and paste the URL for the IAM page into a browser address bar
and press Enter . The IAM page loads.
Near the top of the IAM page on the right side, click
View recommendations in table . The recommendations are displayed in a table.
In the Security insights column, click any permission that relates to excess
permissions. The recommendation details panel opens.
Review the excess permissions.
Click Apply .
After the issue is fixed, IAM recommender updates the status of the finding to
INACTIVE within 10 days.
Service agent granted basic role
Category name in the API: SERVICE_AGENT_GRANTED_BASIC_ROLE
Finding description :
IAM recommender detected IAM that a service agent was granted one
of the basic IAM roles: Owner , Editor , or Viewer .
Basic roles are excessively permissive legacy roles and should not be granted to service
agents.
Pricing tier : Premium
Supported assets :
google. cloud. resourcemanager. Project
google. cloud. resourcemanager. Folder
google. cloud. resourcemanager. Organization
Fix this finding build :
Use IAM recommender to apply the recommended fix for this finding by following
these steps:
In the Next steps section of the finding details in the Google Cloud console,
copy and paste the URL for the IAM page into a browser address bar
and press Enter . The IAM page loads.
Near the top of the IAM page on the right side, click
View recommendations in table . The recommendations are displayed in a table.
In the Security insights column, click any permission that relates to excess
permissions. The recommendation details panel opens.
Review the excess permissions.
Click Apply .
After the issue is fixed, IAM recommender updates the status of the finding to
INACTIVE within 10 days.
Unused IAM role
Category name in the API: UNUSED_IAM_ROLE
Finding description : IAM recommender detected a user account that has an
IAM role that has not been used in the last 90 days.
Pricing tier : Premium
Supported assets :
google. cloud. resourcemanager. Project
google. cloud. resourcemanager. Folder
google. cloud. resourcemanager. Organization
Fix this finding build :
Use IAM recommender to apply the recommended fix for this finding by following
these steps:
In the Next steps section of the finding details in the Google Cloud console,
copy and paste the URL for the IAM page into a browser address bar
and press Enter . The IAM page loads.
Near the top of the IAM page on the right side, click
View recommendations in table . The recommendations are displayed in a table.
In the Security insights column, click any permission that relates to excess
permissions. The recommendation details panel opens.
Review the excess permissions.
Click Apply .
After the issue is fixed, IAM recommender updates the status of the finding to
INACTIVE within 10 days.
View IAM recommender findings in the console
In the Google Cloud console, go to the Findings page of Security Command Center.
Go to Findings
Select your Google Cloud project or organization.
In the Quick filters section, in the Source display name subsection, select
IAM Recommender . The findings query results are updated to show only the findings
from this source.
To view the details of a specific finding, click the finding name in the Category column.
The details panel for the finding opens and displays the Summary tab.
On the Summary tab, review the details of the finding, including information about what
was detected, the affected resource, and—if available—steps that you can take to
remediate the finding.
Optional: To view the full JSON definition of the finding, click the JSON tab.
In Security Command Center Premium, you can also view the IAM recommender
findings on the legacy
Vulnerabilities page by selecting
the IAM recommender query preset.
Mandiant Attack Surface Management
Enterprise service tier (not available if data residency controls are enabled)
Mandiant is a world leader in frontline threat intelligence.
Mandiant Attack Surface Management identifies vulnerabilities and misconfigurations
in your external attack surfaces to help you stay up-to-date against the
latest cyber attacks.
Mandiant Attack Surface Management is automatically enabled when you activate the
Security Command Center Enterprise tier and findings are available in the Google Cloud console.
For information about how the standalone Mandiant Attack Surface Management product differs
from the Mandiant Attack Surface Management integration within Security Command Center, see
ASM and Security Command Center
on the Mandiant documentation portal. This link requires Mandiant
authentication.
Review Mandiant Attack Surface Management findings in the console
In the Google Cloud console, go to the Findings page of Security Command Center.
Go to Findings
Select your Google Cloud project or organization.
In the Quick filters section, in the Source display name subsection, select
Mandiant Attack Surface Management . The findings query results are updated to show only the findings
from this source.
To view the details of a specific finding, click the finding name in the Category column.
The details panel for the finding opens and displays the Summary tab.
On the Summary tab, review the details of the finding, including information about what
was detected, the affected resource, and—if available—steps that you can take to
remediate the finding.
Optional: To view the full JSON definition of the finding, click the JSON tab.
Neither Security Command Center nor Mandiant Attack Surface Management mark findings as resolved. Once
you resolve an issue, you can manually mark the issue resolved. If it is not
identified in the next Mandiant Attack Surface Management scan, it stays resolved.
Model Armor
Standard-legacy, Standard, Premium, and Enterprise service tiers
Model Armor is a fully managed Google Cloud service that enhances the
security and safety of AI applications by screening LLM prompts and responses.
Vulnerability findings from the Model Armor service
Finding
Summary
Floor settings violation
Category name in the API: FLOOR_SETTINGS_VIOLATION
Finding description : A floor setting violation that occurs when a Model Armor
template fails to meet the minimum security standards defined by the resource hierarchy
floor settings.
Pricing tier : Premium
Fix this finding build :
This finding requires that you update the Model Armor template to be in conformance with
the floor settings defined at the resource hierarchy.
Notebook Security Scanner
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Premium and Enterprise service tiers
Notebook Security Scanner is a built-in package vulnerability detection service
of
Security Command Center. After Notebook Security Scanner is enabled, it automatically
scans Colab Enterprise notebooks (files with the ipynb filename extension)
every 24 hours to detect vulnerabilities in Python packages and publishes
these findings to the Security Command Center Findings page.
You can use Notebook Security Scanner for Colab Enterprise notebooks
that are created in the following regions: us-central1 , us-east4 , us-west1 ,
and europe-west4 .
To get started with Notebook Security Scanner, see
Enable and use Notebook Security Scanner .
Policy Controller
Standard-legacy, Standard, Premium, and Enterprise service tiers (requires organization-level activation )
Policy Controller
enables the application and enforcement of programmable policies
for your Kubernetes clusters. These policies act as guardrails and can help
with best practices, security, and compliance management of your clusters and
fleet.
If you install Policy Controller ,
and enable any of the Policy Controller bundles ,
Policy Controller automatically writes
cluster violations to Security Command Center as Misconfiguration class
findings. The finding description and next steps in the Security Command Center
findings are the same as the constraint description and remediation steps
of the corresponding Policy Controller bundle.
The Policy Controller findings come from the following Policy Controller bundles:
CIS Kubernetes Benchmark v.1.5.1 ,
a set of recommendations for configuring Kubernetes to support a strong security
posture. You can also view information about this bundle in the
GitHub repository for cis-k8s-v1.5.1 .
PCI-DSS v3.2.1 ,
a bundle which evaluates the compliance of your cluster resources against
some aspects of the Payment Card Industry Data Security Standard (PCI-DSS) v3.2.1.
You can also view information about this bundle in the
GitHub repository for pci-dss-v3 .
To find and remediate Policy Controller findings, see
Remediating Policy Controller findings .
Risk Engine
Premium and Enterprise service tiers
The Security Command Center Risk Engine assesses the risk exposure of your
cloud deployments, assigns attack exposure scores to vulnerability findings
and your high-value resources, and diagrams paths that a potential
attacker could take to reach your high-value resources.
In the Enterprise or Premium tier of Security Command Center, the Risk Engine
detects groups of security issues that, when they occur together in a
particular pattern, create a path to one or more of your high-value
resources that a determined attacker could
potentially use to reach and compromise those resources.
When Risk Engine detects one of these combinations, it generates
a TOXIC_COMBINATION class finding. In the finding, Risk Engine
is listed as the source of the finding.
Risk Engine also identifies common resources or resource groups
where multiple attack paths converge, and then generates a CHOKEPOINT class
finding.
For more information, see
Toxic combinations and chokepoints overview .
Security Health Analytics
Standard-legacy, Standard, Premium, and Enterprise service tiers
Security Health Analytics is a built-in detection service of Security Command Center
that provides managed scans of your cloud resources to detect
common misconfigurations.
When a misconfiguration is detected, Security Health Analytics generates a finding.
Most Security Health Analytics findings are mapped to security standard controls so
that you can assess compliance.
Security Health Analytics scans your resources on Google Cloud. If you are
using the Enterprise tier and establish connections to other cloud platforms,
Security Health Analytics can also scan your resources on those cloud platforms.
Depending on the Security Command Center
service tier you are using, the available
detectors differ:
In the Standard-legacy tier, Security Health Analytics includes only a
basic group of medium-severity and high-severity vulnerability detectors.
The
Premium tier includes all vulnerability detectors for Google Cloud.
The
Enterprise tier includes additional detectors for other cloud platforms.
Security Health Analytics is automatically enabled when you activate
Security Command Center.
For more information, see the following:
Security Health Analytics overview
How to use Security Health Analytics
Remediating Security Health Analytics findings
Reference of Security Health Analytics findings
Security posture service
Premium and Enterprise service tiers (requires organization-level activation )
The
security posture service
is a built-in service for the Security Command Center Premium tier that lets you define,
assess, and monitor the overall status of your security in Google Cloud.
It provides information about how your environment aligns with the policies that
you define in your security posture.
The security posture service isn't related to the GKE
security posture dashboard , which only shows findings in GKE
clusters.
Security posture service findings
Finding
Summary
SHA Canned Module Drifted
Category name in the API: SECURITY_POSTURE_DETECTOR_DRIFT
Finding description : The security posture service detected a change to a
Security Health Analytics detector that occurred outside of a posture update.
Pricing tier : Premium
Fix this finding build :
This finding requires that you accept the change or revert the change so that the
detector settings in your posture and your environment match. You have two options to
resolve this finding: you can update the Security Health Analytics detector or you can update the
posture and posture deployment.
To revert the change, update the Security Health Analytics detector in the Google Cloud console.
For instructions, see
Enable and disable detectors .
To accept the change, complete the following:
Update the posture.yaml file with the change.
Run the gcloud scc postures update command. For instructions, see
Update the policy definitions in a posture .
Deploy the updated posture with the new revision ID. For instructions, see
Update a posture deployment .
SHA Custom Module Drifted
Category name in the API: SECURITY_POSTURE_DETECTOR_DRIFT
Finding description : The security posture service detected a change to a
Security Health Analytics custom module that occurred outside of a posture update.
Pricing tier : Premium
Fix this finding build :
This finding requires that you accept the change or revert the change so that the custom
module settings in your posture and your environment match. You have two options to
resolve this finding: you can update the Security Health Analytics custom module or you can update the
posture and posture deployment.
To revert the change, update the Security Health Analytics custom module in the
Google Cloud console. For instructions, see
Update a custom module .
To accept the change, complete the following:
Update the posture.yaml file with the change.
Run the gcloud scc postures update command. For instructions, see
Update the policy definitions in a posture .
Deploy the updated posture with the new revision ID. For instructions, see
Update a posture deployment .
SHA Custom Module Deleted
Category name in the API: SECURITY_POSTURE_DETECTOR_DELETE
Finding description : The security posture service detected that a
Security Health Analytics custom module was deleted. This deletion occurred outside of a posture
update.
Pricing tier : Premium
Fix this finding build :
This finding requires that you accept the change or revert the change so that the custom
module settings in your posture and your environment match. You have two options to
resolve this finding: you can update the Security Health Analytics custom module or you can update the
posture and posture deployment.
To revert the change, update the Security Health Analytics custom module in the
Google Cloud console. For instructions, see
Update a custom module .
To accept the change, complete the following:
Update the posture.yaml file with the change.
Run the gcloud scc postures update command. For instructions, see
Update the policy definitions in a posture .
Deploy the updated posture with the new revision ID. For instructions, see
Update a posture deployment .
Org Policy Canned Constraint Drifted
Category name in the API: SECURITY_POSTURE_POLICY_DRIFT
Finding description : The security posture service detected a change to an
organization policy that occurred outside of a posture update.
Pricing tier : Premium
Fix this finding build :
This finding requires that you accept the change or revert the change so that the
organization policy definitions in your posture and your environment match. You have two
options to resolve this finding: you can update the organization policy or you can update
the posture and posture deployment.
To revert the change, update the organization policy in the Google Cloud console. For
instructions, see
Creating and editing policies .
To accept the change, complete the following:
Update the posture.yaml file with the change.
Run the gcloud scc postures update command. For instructions, see
Update the policy definitions in a posture .
Deploy the updated posture with the new revision ID. For instructions, see
Update a posture deployment .
Org Policy Canned Constraint Deleted
Category name in the API: SECURITY_POSTURE_POLICY_DELETE
Finding description : The security posture service detected that an
organization policy was deleted. This deletion occurred outside of a posture update.
Pricing tier : Premium
Fix this finding build :
This finding requires that you accept the change or revert the change so that the
organization policy definitions in your posture and your environment match. You have two
options to resolve this finding: you can update the organization policy or you can update
the posture and posture deployment.
To revert the change, update the organization policy in the Google Cloud console. For
instructions, see
Creating and editing policies .
To accept the change, complete the following:
Update the posture.yaml file with the change.
Run the gcloud scc postures update command. For instructions, see
Update the policy definitions in a posture .
Deploy the updated posture with the new revision ID. For instructions, see
Update a posture deployment .
Org Policy Custom Constraint Drifted
Category name in the API: SECURITY_POSTURE_POLICY_DRIFT
Finding description : The security posture service detected a change to a
custom organization policy that occurred outside of a posture update.
Pricing tier : Premium
Fix this finding build :
This finding requires that you accept the change or revert the change so that the custom
organization policy definitions in your posture and your environment match. You have two
options to resolve this finding: you can update the custom organization policy or you can
update the posture and posture deployment.
To revert the change, update the custom organization policy in the
Google Cloud console. For instructions, see
Update a custom constraint .
To accept the change, complete the following:
Update the posture.yaml file with the change.
Run the gcloud scc postures update command. For instructions, see
Update the policy definitions in a posture .
Deploy the updated posture with the new revision ID. For instructions, see
Update a posture deployment .
Org Policy Custom Constraint Deleted
Category name in the API: SECURITY_POSTURE_POLICY_DELETE
Finding description : The security posture service detected that a custom
organization policy was deleted. This deletion occurred outside of a posture update.
Pricing tier : Premium
Fix this finding build :
This finding requires that you accept the change or revert the change so that the custom
organization policy definitions in your posture and your environment match. You have two
options to resolve this finding: you can update the custom organization policy or you can
update the posture and posture deployment.
To revert the change, update the custom organization policy in the
Google Cloud console. For instructions, see
Update a custom constraint .
To accept the change, complete the following:
Update the posture.yaml file with the change.
Run the gcloud scc postures update command. For instructions, see
Update the policy definitions in a posture .
Deploy the updated posture with the new revision ID. For instructions, see
Update a posture deployment .
Sensitive Data Protection
Standard-legacy, Premium, and Enterprise service tiers
Sensitive Data Protection is a fully managed Google Cloud service
that helps you discover, classify, and protect your sensitive data. You can use
Sensitive Data Protection to determine whether you're storing sensitive
or personally identifiable information (PII), like the following:
Person names
Credit card numbers
National or state ID numbers
Health insurance ID numbers
Secrets
In Sensitive Data Protection, each type of sensitive data that you
search for is called an
infoType .
If you configure your Sensitive Data Protection operation to send
results to Security Command Center, you can see the findings directly in the
Security Command Center section of the Google Cloud console, in addition to the
Sensitive Data Protection section.
If you use VPC Service Controls service perimeters and you want to discover sensitive
data within those perimeters, see Allow sensitive data
discovery within service perimeters .
Vulnerability findings from the Sensitive Data Protection discovery service
The Sensitive Data Protection discovery service helps you determine whether you are
storing highly sensitive data that is not protected.
Category
Summary
Public sensitive data
Category name in the API:
PUBLIC_SENSITIVE_DATA
Finding description : The specified resource has
high-sensitivity data
that can be accessed by anyone on the internet.
Note: Sensitive Data Protection might produce a data access audit log entry when
analyzing ( profiling ) a tuning job within a Cloud Storage bucket. The action is
performed by an internal Sensitive Data Protection service account.
Supported assets :
aiplatform. googleapis. com/ Dataset
aiplatform. googleapis. com/ TuningJob
bigquery. googleapis. com/ Dataset
bigquery. googleapis. com/ Table
sqladmin. googleapis. com/ Instance
storage. googleapis. com/ Bucket
Amazon S3 bucket
Azure Blob Storage container
Remediation :
For Google Cloud data, remove allUsers and
allAuthenticatedUsers from the data asset's IAM policy.
For Amazon S3 data, configure block public access settings or update the object's ACL to
deny public read access. For more information, see
Configuring block public access settings for your S3 buckets and
Configuring
ACLs in the AWS documentation.
For Azure Blob Storage data, remove public access to the container and the blobs. For
more information, see
Overview:
Remediating anonymous read access for blob data in the Azure documentation.
Compliance standards : Not mapped
Secrets in environment variables
Category name in the API:
SECRETS_IN_ENVIRONMENT_VARIABLES
Finding description : There are
secrets —such
as passwords, authentication tokens, and Google Cloud credentials—in
environment variables.
To enable this detector, see
Report secrets in environment variables to Security Command Center
in the Sensitive Data Protection documentation.
Supported assets :
cloudfunctions. googleapis. com/ CloudFunction
run. googleapis. com/ Revision
Remediation :
For Cloud Run functions environment variables, remove the secret from the environment
variable and
store it in Secret Manager
instead.
For Cloud Run service revision environment variables, move all traffic off
of the revision, and then delete the revision.
Compliance standards :
CIS GCP Foundation 1.3 : 1.18
CIS GCP Foundation 2.0 : 1.18
Secrets in storage
Category name in the API:
SECRETS_IN_STORAGE
Finding description : There are
secrets —such
as passwords, authentication tokens, and cloud credentials—in the specified
resource.
Supported assets :
aiplatform. googleapis. com/ Dataset
aiplatform. googleapis. com/ TuningJob
bigquery. googleapis. com/ Dataset
bigquery. googleapis. com/ Table
sqladmin. googleapis. com/ Instance
storage. googleapis. com/ Bucket
Amazon S3 bucket
Azure Blob Storage container
Remediation :
For Google Cloud data, use Sensitive Data Protection to
run a deep inspection scan of the specified resource
to identify all affected resources. For Cloud SQL data, export that data to a CSV
or AVRO file in a Cloud Storage bucket and run a deep inspection scan of the
bucket.
For data from other cloud providers, manually inspect the specified bucket or
container.
Remove the detected secrets.
Consider resetting the credentials.
For Google Cloud data, consider storing the detected secrets in
Secret Manager instead.
Compliance standards : Not mapped
Misconfiguration findings from the Sensitive Data Protection discovery service
The Sensitive Data Protection discovery service helps you determine whether you have
misconfigurations that might expose sensitive data.
Category
Summary
Sensitive data CMEK disabled
Category name in the API:
SENSITIVE_DATA_CMEK_DISABLED
Finding description : The specified resource has
high-sensitivity or moderate-sensitivity data and the resource isn't using a
customer-managed encryption key (CMEK).
Supported assets :
aiplatform. googleapis. com/ Dataset
bigquery. googleapis. com/ Dataset
bigquery. googleapis. com/ Table
sqladmin. googleapis. com/ Instance
storage. googleapis. com/ Bucket
Amazon S3 bucket
Azure Blob Storage container
Remediation :
For BigQuery data, use
CMEK on the table or dataset .
For Cloud SQL data, see the CMEK documentation for Cloud SQL for MySQL or Cloud SQL for PostgreSQL .
For Cloud Storage data,
use CMEK on the
bucket .
Compliance standards : Not mapped
Observation findings from Sensitive Data Protection
This section describes the observation findings that Sensitive Data Protection generates in Security Command Center.
Observation findings from the discovery service
The Sensitive Data Protection discovery service helps you determine
whether your data contains specific infoTypes and where they reside in your
organization, folders, and projects. It generates
the following observation finding categories in Security Command Center:
Data sensitivity
An indication of the sensitivity level of the data in a particular data asset.
Data is sensitive if it contains PII or other elements that might require
additional control or management. The severity of the finding is the
sensitivity level that Sensitive Data Protection
calculated when
generating the data profile.
Data risk
The risk associated with the data in its current state. When calculating data
risk, Sensitive Data Protection considers the sensitivity level of
the data in the data asset and the presence of access controls to protect that
data. The severity of the finding is the data risk level that
Sensitive Data Protection
calculated when generating
the data profile.
Depending on the size of your organization, Sensitive Data Protection
findings can start appearing in Security Command Center within a few minutes after
you enable sensitive data discovery. For larger organizations or
organizations with specific configurations that affect finding generation, it
can take up to 12 hours before initial findings appear in Security Command Center.
Subsequently, Sensitive Data Protection generates findings in
Security Command Center within a few minutes after the discovery service scans your
resources.
For information about how to send data profile results to Security Command Center,
see Enable sensitive data
discovery .
Observation findings from the Sensitive Data Protection inspection service
A Sensitive Data Protection inspection job identifies each instance of
data of a specific infoType in a storage system like a Cloud Storage bucket
or a BigQuery table. For example, you can run an inspection job
that searches for all strings that match the CREDIT_CARD_NUMBER infoType
detector in a Cloud Storage bucket.
For each infoType detector that has one or more matches, Sensitive Data Protection
generates a corresponding Security Command Center finding. The finding category is
the name of the infoType detector that had a match—for example, Credit
card number . The finding includes the number of matching strings that were
detected in text or images in the resource.
For security reasons, the actual strings that were detected aren't included in
the finding. For example, a Credit card number finding shows how many
credit card numbers were found, but doesn't show the actual credit card numbers.
Because there are more than 150 built-in infoType detectors in
Sensitive Data Protection, all possible Security Command Center finding
categories aren't listed here. For a full list of infoType detectors, see
InfoType detector reference .
For information on how to send the results of an inspection job to
Security Command Center, see Send Sensitive Data Protection inspection job results to
Security Command Center .
Review Sensitive Data Protection findings in the console
In the Google Cloud console, go to the Findings page of Security Command Center.
Go to Findings
Select your Google Cloud project or organization.
In the Quick filters section, in the Source display name subsection, select
Sensitive Data Protection . The findings query results are updated to show only the findings
from this source.
To view the details of a specific finding, click the finding name in the Category column.
The details panel for the finding opens and displays the Summary tab.
On the Summary tab, review the details of the finding, including information about what
was detected, the affected resource, and—if available—steps that you can take to
remediate the finding.
Optional: To view the full JSON definition of the finding, click the JSON tab.
VM Manager
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Premium and Enterprise service tiers (requires organization-level activation )
VM Manager is a suite of tools that
can be used to manage operating systems for large virtual machine (VM) fleets
running Windows and Linux on Compute Engine.
To use VM Manager with
project-level activations
of Security Command Center Premium, activate the Security Command Center Standard-legacy
tier in the parent organization.
If you enable VM Manager with
the Security Command Center Premium tier, VM Manager
automatically writes high and critical findings from its vulnerability reports , which
are in preview, to Security Command Center. The reports identify vulnerabilities in
operating systems (OS) that are installed on VMs, including
Common Vulnerabilities and Exposures (CVEs) .
Vulnerability reports are not available for the Security Command Center Standard-legacy tier.
Findings simplify the process of using VM Manager's Patch
Compliance feature ( Preview ). When integrated with the
Security Command Center Premium tier, the feature enables organization-level
visibility and patch management
across all your projects. Although individual patch jobs are configured within
VM Manager at the project level, Security Command Center provides a
consolidated view that helps you manage patch jobs across your organization.
To remediate VM Manager findings, see
Remediating VM Manager findings .
To stop vulnerability reports from being written to Security Command Center, see
Mute VM Manager findings .
Vulnerabilities of this type all relate to installed operating system packages in
supported Compute Engine VMs.
Detector
Summary
Asset scan settings
OS vulnerability
Category name in the API: OS_VULNERABILITY
Finding description : VM Manager detected a vulnerability in the
installed operating system (OS) package for a Compute Engine VM.
Pricing tier : Premium
Supported assets
compute. googleapis. com/ Instance
Fix this finding build
VM Manager's
vulnerability reports
detail vulnerabilities in installed operating system packages for Compute Engine
VMs, including
Common Vulnerabilities and Exposures (CVEs) .
For a complete list of supported operating systems, see
Operating system details .
Findings appear in Security Command Center shortly after vulnerabilities are detected.
Vulnerability reports in VM Manager are generated as follows:
When a package is installed or updated in a VM's operating system, you can expect to see
Common Vulnerabilities and Exposures (CVEs)
information for the VM in Security Command Center within two hours after the change.
When new security advisories are published for an operating system, updated CVEs are
normally available within 24 hours after the operating system vendor publishes the
advisory.
Vulnerability Assessment for AWS
Enterprise service tier
The Vulnerability Assessment for Amazon Web Services (AWS) service detects software vulnerabilities
in your workloads that are running on EC2 virtual machines (VMs) on the
AWS cloud platform.
For each detected vulnerability, Vulnerability Assessment for AWS generates a
Vulnerability class finding in the Software vulnerability finding
category in Security Command Center.
The Vulnerability Assessment for AWS service scans snapshots of the running EC2 machine
instances, so production workloads are unaffected. This scan method is
called agentless disk scanning , because no agents are installed the
scan targets.
For more information, see the following:
Overview of Vulnerability Assessment for AWS
Enable and use Vulnerability Assessment for AWS
Vulnerability Assessment for Google Cloud
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Standard, Premium, and Enterprise service tiers
The Vulnerability Assessment for Google Cloud service detects software vulnerabilities in the following
resources on the Google Cloud platform:
Running Compute Engine VM instances
Nodes in GKE Standard clusters
Containers running in GKE Standard and
GKE Autopilot clusters
For each detected vulnerability, Vulnerability Assessment for Google Cloud generates a Vulnerability
class finding in the Software vulnerability or OS vulnerability finding
category in Security Command Center.
The Vulnerability Assessment for Google Cloud service scans your Compute Engine VM instances by
cloning their disks approximately every 12 hours, mounting them in a secure VM
instance, and assessing them with the
SCALIBR scanner.
For more information, see
Vulnerability Assessment for Google Cloud .
Web Security Scanner
Standard-legacy, Premium, and Enterprise service tiers
Web Security Scanner
provides managed and custom web vulnerability scanning for public
App Engine, GKE, and Compute Engine serviced web
applications.
Managed scans
Premium and Enterprise service tiers
Web Security Scanner managed scans are configured and managed by
Security Command Center. Managed scans automatically run once each week to detect and
scan public web endpoints. These scans don't use authentication and they send
GET-only requests so they don't submit any forms on live websites.
Managed scans run separately from custom scans.
If Security Command Center is activated at the
organization level ,
you can use managed scans to centrally manage basic web application
vulnerability detection for projects in your organization, without having to
involve individual project teams. When findings are discovered, you can work
with those teams to set up more comprehensive custom scans.
When you enable Web Security Scanner as a service, managed scan findings are
automatically available in the Security Command Center Vulnerabilities page and
related reports. For information about how to enable Web Security Scanner
managed scans, see
Configure Security Command Center services .
Managed scans support only applications that use the default port, which is 80
for HTTP connections and 443 for HTTPS connections. If your application uses
a non-default port, do a custom scan instead.
Custom scans
Standard-legacy, Premium, and Enterprise service tiers
Web Security Scanner custom scans provide granular information about
application vulnerability findings, like outdated libraries, cross-site
scripting, or use of mixed content.
You define custom scans at the project level.
Custom scan findings are available in
Security Command Center after you complete the guide to
set up Web Security Scanner custom scans .
Detectors and compliance
Web Security Scanner supports categories in the
OWASP Top Ten ,
a document that ranks and provides remediation guidance for the top 10 most
critical web application security risks, as determined by the Open Web
Application Security Project (OWASP). For guidance on mitigating OWASP risks,
see OWASP Top 10 mitigation options on Google Cloud .
Note: The category
A09:2021
Security Logging and Monitoring Failures
(previously A10:2017 Insufficient Logging & Monitoring ) is not supported.
This category describes insufficiencies that allow attackers to remain undetected. Unlike
the other nine OWASP categories, it doesn't pertain to specific vulnerabilities
that attackers can exploit. Similarly, Web Security Scanner can't attack web
applications to provoke a detectable response. The issues included in this
category require human judgment.
The compliance mapping is included for reference and is not provided or reviewed
by the OWASP Foundation.
This functionality is only intended for you to monitor for compliance controls
violations. The mappings are not provided for use as the basis of, or as a
substitute for, the audit, certification, or report of compliance of your
products or services with any regulatory or industry benchmarks or standards.
For more information, see Web Security Scanner Overview .
Threat detection services
Threat detection services include built-in and integrated services
that detect events that might indicate potentially harmful events,
such as compromised resources or cyberattacks.
Anomaly Detection
Standard-legacy, Standard, Premium, and Enterprise service tiers (requires organization-level activation )
Anomaly Detection is a built-in service that uses behavior signals from
outside your system. It displays granular information about security
anomalies detected for your service accounts, such
as potential leaked credentials. Anomaly Detection is
automatically enabled when you activate Security Command Center Standard-legacy or
Premium tier, and findings are available in the Google Cloud console.
Anomaly Detection findings include the following:
Anomaly name
Finding category
Description
Account has leaked credentials
account_has_leaked_credentials
Credentials for a Google Cloud service account are accidentally
leaked online or are compromised.
Severity: Critical
Account has leaked credentials
GitHub notified Security Command Center that the credentials
that were used for a commit appear to be the credentials for a
Google Cloud Identity and Access Management service account.
The notification includes the service account name and the private key
identifier. Google Cloud also sends your
designated contact for security and privacy
issues a notification by email.
To remediate this issue, take one or more of the following actions:
Identify the legitimate user of the key.
Rotate the key.
Remove the key.
Investigate any actions that were taken by the key after the
key was leaked to ensure that none of the actions were malicious.
JSON: leaked account credentials finding
{
"findings" : {
"access" : {},
"assetDisplayName" : " PROJECT_NAME " ,
"assetId" : "organizations/ ORGANIZATION_ID /assets/ ASSET_ID " ,
"canonicalName" : "projects/ PROJECT_ID /sources/ SOURCE_INSTANCE_ID /findings/ FINDING_ID " ,
"category" : "account_has_leaked_credentials" ,
"contacts" : {
"security" : {
"contacts" : [
{
"email" : " EMAIL_ADDRESS "
}
]
}
},
"createTime" : "2022-08-05T20:59:41.022Z" ,
"database" : {},
"eventTime" : "2022-08-05T20:59:40Z" ,
"exfiltration" : {},
"findingClass" : "THREAT" ,
"findingProviderId" : "organizations/ ORGANIZATION_ID /firstPartyFindingProviders/cat" ,
"indicator" : {},
"kubernetes" : {},
"mitreAttack" : {},
"mute" : "UNDEFINED" ,
"name" : "organizations/ ORGANIZATION_ID /sources/ SOURCE_INSTANCE_ID /findings/ FINDING_ID " ,
"parent" : "organizations/ ORGANIZATION_ID /sources/ SOURCE_INSTANCE_ID " ,
"parentDisplayName" : "Cloud Anomaly Detection" ,
"resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID " ,
"severity" : "CRITICAL" ,
"sourceDisplayName" : "Cloud Anomaly Detection" ,
"state" : "ACTIVE" ,
"vulnerability" : {},
"workflowState" : "NEW"
},
"resource" : {
"name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID " ,
"display_name" : " PROJECT_NAME " ,
"project_name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT_ID " ,
"project_display_name" : " PROJECT_NAME " ,
"parent_name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION_ID " ,
"parent_display_name" : " ORGANIZATION_NAME " ,
"type" : "google.cloud.resourcemanager.Project" ,
"folders" : []
},
"sourceProperties" : {
"project_identifier" : " PROJECT_ID " ,
"compromised_account" : " SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" ,
"finding_type" : "Potential compromise of a resource in your organization." ,
"summary_message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." ,
"action_taken" : "Notification sent" ,
"private_key_identifier" : " SERVICE_ACCOUNT_KEY_ID " ,
"url" : "https://github.com/ KEY_FILE_PATH / KEY_FILE_NAME .json"
}
}
Container Threat Detection
Premium and Enterprise service tiers
Container Threat Detection can detect the most common container runtime attacks and alert you
in Security Command Center and optionally in Cloud Logging. Container Threat Detection
includes several detection capabilities, an analysis tool, and an API.
Container Threat Detection detection instrumentation collects low-level behavior in the
guest kernel and performs natural language processing on code to detect the
following events:
Added Binary Executed
Added Library Loaded
Command and Control: Steganography Tool Detected ( Preview )
Credential Access: Find Google Cloud Credentials
Credential Access: GPG Key Reconnaissance
Credential Access: Search Private Keys or Passwords
Defense Evasion: Base64 ELF File Command Line
Defense Evasion: Base64 Encoded Python Script Executed
Defense Evasion: Base64 Encoded Shell Script Executed
Defense Evasion: Launch Code Compiler Tool In Container ( Preview )
Execution: Added Malicious Binary Executed
Execution: Added Malicious Library Loaded
Execution: Built in Malicious Binary Executed
Execution: Container Escape
Execution: Fileless Execution in /memfd:
Execution: Ingress Nightmare Vulnerability Execution ( Preview )
Execution: Kubernetes Attack Tool Execution
Execution: Local Reconnaissance Tool Execution
Execution: Malicious Python executed
Execution: Modified Malicious Binary Executed
Execution: Modified Malicious Library Loaded
Execution: Netcat Remote Code Execution In Container
Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47076)
Execution: Possible Remote Command Execution Detected ( Preview )
Execution: Program Run with Disallowed HTTP Proxy Env
Execution: Socat Reverse Shell Detected
Execution: Suspicious OpenSSL Shared Object Loaded
Exfiltration: Launch Remote File Copy Tools in Container
Impact: Detect Malicious Cmdlines ( Preview )
Impact: Remove Bulk Data From Disk
Impact: Suspicious crypto mining activity using the Stratum Protocol
Malicious Script Executed
Malicious URL Observed
Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287)
Privilege Escalation: Fileless Execution in /dev/shm
Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034)
Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156)
Reverse Shell
Unexpected Child Shell
Learn more about Container Threat Detection .
Event Threat Detection
Premium and Enterprise service tiers
Event Threat Detection uses log data from inside your systems. It watches
Cloud Logging stream for projects, and consumes
logs as they become available. When a threat is detected, Event Threat Detection
writes a finding to Security Command Center and to a Cloud Logging project.
Event Threat Detection is automatically enabled when you activate the
Security Command Center Premium tier and findings are available in the
Google Cloud console.
The following table lists examples of Event Threat Detection findings.
Project-level activations - unsupported findings
When Security Command Center is
activated
at the project level ,
certain Event Threat Detection detection modules are unsupported.
For a list of Event Threat Detection findings that are unavailable with
project-level activations as a result, see
Event Threat Detection
findings that are unsupported .
Table C. Event Threat Detection finding types
Data destruction
Event Threat Detection detects data destruction by examining audit logs from the Backup and DR Service Management Server for the following scenarios:
Deletion of a backup image
Deletion of all backup images associated with an application
Deletion of a backup/recovery appliance
Data exfiltration
Event Threat Detection detects data exfiltration from BigQuery and
Cloud SQL by examining audit logs for the following scenarios:
An identity associated with an AI agent deployed to Vertex AI Agent Engine initiated a BigQuery data exfiltration by saving resources outside of your organization. The finding is classified as High severity. Preview
An identity associated with an AI agent deployed to Vertex AI Agent Engine attempted to access BigQuery resources protected by VPC Service Controls. The finding is classified as Low severity. Preview
An identity associated with an AI agent deployed to Vertex AI Agent Engine initiated a
BigQuery data extraction to a bucket outside of your organization or to a public Cloud Storage
bucket. Preview
An identity associated with an AI agent deployed to Vertex AI Agent Engine initiated a Cloud SQL data exfiltration to a
Cloud Storage bucket outside of your organization or to a bucket
that is owned by your organization and is publicly accessible. Preview
A BigQuery resource is saved outside of your
organization, or a copy operation is attempted that is blocked by
VPC Service Controls.
An attempt is made to access BigQuery resources that
are protected by VPC Service Controls.
A Cloud SQL resource is fully or partially exported to a
Cloud Storage bucket outside of your organization or to a bucket
that is owned by your organization and is publicly accessible.
A Cloud SQL backup is restored to a Cloud SQL
instance outside your organization.
A BigQuery resource that your organization owns
is exported to a Cloud Storage bucket outside your
organization, or to a bucket in your organization that is
publicly accessible.
A BigQuery resource that your organization owns is
exported to a Google Drive folder.
A BigQuery resource is saved to a public resource
owned by your organization.
Cloud SQL suspicious activity
Event Threat Detection examines audit logs to detect the following events
that might indicate a compromise of a valid user account on
Cloud SQL instances:
A database user is granted all privileges to a
Cloud SQL for PostgreSQL database, or to all tables, procedures, or
functions in a schema.
A Cloud SQL default database account superuser (`postgres`
on PostgreSQL instances or 'root' on MySQL instances) is used to write
to non-system tables.
AlloyDB for PostgreSQL suspicious activity
Event Threat Detection examines audit logs to detect the following events
that might indicate a compromise of a valid user account on
AlloyDB for PostgreSQL instances:
A database user is granted all privileges to a
AlloyDB for PostgreSQL database, or to all tables, procedures, or
functions in a schema.
An AlloyDB for PostgreSQL default database account superuser
(`postgres`) is used to write to non-system tables.
Brute force SSH
Event Threat Detection detects brute force of password authentication SSH by
examining syslog logs for repeated failures followed by a success.
Cryptomining
Event Threat Detection detects coin mining malware by examining VPC Flow Logs
and Cloud DNS logs for connections to known bad domains or IP addresses
of mining pools.
IAM abuse
Anomalous IAM grants: Event Threat Detection detects the addition of
IAM grants that might be considered anomalous, like:
Adding a gmail.com user to a policy with the project editor
role.
Inviting a gmail.com user as a project owner from the
Google Cloud console.
Service account granting sensitive permissions.
Custom role granted sensitive permissions.
Service account added from outside your organization.
Inhibit System Recovery
Event Threat Detection detects anomalous changes to Backup and DR that may impact backup posture, including major policy changes and removal of critical Backup and DR components.
Log4j
Event Threat Detection detects possible attempts at Log4j exploitation and
active Log4j vulnerabilities.
Malware
Event Threat Detection detects malware by examining VPC Flow Logs and
Cloud DNS logs for connections to known command and control
domains and IPs.
Outgoing DoS
Event Threat Detection examines VPC Flow Logs to detect outgoing denial of
service traffic.
Anomalous access
Event Threat Detection detects anomalous access by examining
Cloud Audit Logs for Google Cloud service modifications that originated
from anonymous proxy IP addresses, like Tor IP addresses.
Anomalous IAM behavior
Event Threat Detection detects anomalous IAM behavior by examining
Cloud Audit Logs for the following scenarios:
IAM user and service accounts accessing Google Cloud from anomalous IP addresses.
IAM service accounts accessing Google Cloud from anomalous user agents.
Principals and resources impersonating IAM service accounts to access Google Cloud.
Service account self-investigation
Event Threat Detection detects when a service account credential is used to
investigate the roles and permissions associated with that same service
account.
Compute Engine Admin Added SSH Key
Event Threat Detection detects a modification to the Compute Engine instance metadata
ssh key value on an established instance (older than 1 week).
Compute Engine Admin Added Startup Script
Event Threat Detection detects a modification to the Compute Engine instance
metadata startup script value on an established instance (older than 1
week).
Suspicious account activity
Event Threat Detection detects potential compromise of Google Workspace
accounts by examining audit logs for anomalous account activities,
including leaked passwords and attempted suspicious logins.
Government-backed attack
Event Threat Detection examines Google Workspace audit logs to
detect when government-backed attackers might have tried to compromise a
user's account or computer.
Single sign-on (SSO) changes
Event Threat Detection examines Google Workspace audit logs to
detect when SSO is disabled or settings are changed for
Google Workspace administrator accounts.
2-step verification
Event Threat Detection examines Google Workspace audit logs to
detect when 2-step verification is disabled on user and administrator accounts.
Anomalous API behavior
Event Threat Detection detects anomalous API behavior by examining Cloud Audit Logs for requests to Google Cloud services that a principal
has not seen before.
Defense Evasion
Event Threat Detection detects Defense Evasion by examining Cloud Audit Logs
for the following scenarios:
Changes to existing VPC Service Controls perimeters that would
lead to a reduction in the protection offered.
Deployments or updates to workloads that use the
break-glass flag to override Binary Authorization controls. Preview
Disable storage.secureHttpTransport policy in project-level, folder-level or organization-level.
Change the ip-filtering configuration for a Cloud Storage bucket.
Discovery
Event Threat Detection detects discovery operations by
examining audit logs for the following scenarios:
A potentially malicious actor attempted to determine what
sensitive objects in GKE they can
query for, by using the
kubectl
command.
An identity associated with an AI agent deployed to Vertex AI Agent Engine used a service
account credential to investigate the roles and permissions associated
with that same service account. Preview
A service account credential is being used to investigate the roles
and permissions associated with that same service account.
An identity associated with an AI agent deployed to Vertex AI Agent Engine made an unauthorized API call to an outside project. Preview
An identity associated with an AI agent deployed to Vertex AI Agent Engine exhibited port scanning behavior. Preview
Credential Access
Event Threat Detection detects credential access operations by
examining Vertex AI Agent Engine logs for the following scenarios:
An identity associated with an AI agent deployed to Vertex AI Agent Engine fetched a service account token from the metadata server. Preview
Initial Access
Event Threat Detection detects initial access operations by
examining audit logs for the following scenarios:
A dormant user-managed service
account triggered an action. Preview
A principal attempted to invoke various
Google Cloud methods but failed repeatedly because of permission
denied errors. Preview
An identity associated with an AI agent deployed to Vertex AI Agent Engine repeatedly triggered
permission denied errors by invoking various Google Cloud methods. Preview
Privilege escalation
Event Threat Detection detects privilege escalation in GKE by
examining audit logs for the following scenarios:
An identity associated with an AI agent deployed to Vertex AI Agent Engine generated a token by abusing the signJwt permission that can be used for privilege escalation. Preview
An identity associated with an AI agent deployed to Vertex AI Agent Engine generated a token that could be used for privilege escalation. Preview
To escalate privilege, a potentially malicious actor attempted to
modify a ClusterRole , RoleBinding , or ClusterRoleBinding
role-based access control (RBAC) object of the sensitive cluster-admin
role by using a PUT or PATCH request.
A potentially malicious actor created a Kubernetes control plane certificate
signing request (CSR), which gives them cluster-admin
access.
To escalate privilege, a potentially malicious actor attempted to create
a new RoleBinding or ClusterRoleBinding
object for the cluster-admin role.
A potentially malicious actor queried for a
certificate signing request (CSR), with the kubectl
command, using compromised bootstrap credentials.
A potentially malicious actor created a Pod that contains privileged
containers or containers with privilege escalation capabilities.
Cloud IDS detections
Cloud IDS detects layer 7 attacks by analyzing mirrored packets
and, when it detects a suspicious event, triggers an Event Threat Detection
finding. To learn more about Cloud IDS detections, see
Cloud IDS Logging information .
Preview
Lateral movement
Event Threat Detection detects potential modified-boot-disk attacks by examining Cloud Audit Logs for frequent boot disk detachments and re-attachments across Compute Engine instances.
Learn more about Event Threat Detection .
Google Cloud Armor
Standard-legacy, Standard, Premium, and Enterprise service tiers (requires organization-level activation )
Cloud Armor helps protect your
application by providing Layer 7 filtering. Cloud Armor scrubs incoming
requests for common web attacks or other Layer 7 attributes to potentially block
traffic before it reaches your load-balanced backend services or backend
buckets.
Cloud Armor exports two findings to Security Command Center:
Allowed Traffic Spike
Increasing Deny Ratio
Virtual Machine Threat Detection
Premium and Enterprise service tiers
Virtual Machine Threat Detection is a built-in service of Security Command Center. This service scans
virtual machines to detect potentially malicious applications, such as
cryptocurrency mining software, kernel-mode rootkits, and malware running in
compromised cloud environments.
VM Threat Detection is part of the Security Command Center threat detection
suite and is designed to complement the existing capabilities of
Event Threat Detection and
Container Threat Detection .
For more information about VM Threat Detection, see VM Threat Detection
overview .
VM Threat Detection threat findings
VM Threat Detection can generate the following threat findings.
Cryptocurrency mining threat findings
VM Threat Detection detects the following finding categories through hash matching or YARA rules.
VM Threat Detection cryptocurrency mining threat findings
Category
Module
Description
Execution: Cryptocurrency Mining Hash Match
CRYPTOMINING_HASH
Matches memory hashes of running programs against known memory hashes of
cryptocurrency mining software. Findings are classified as High severity by default.
Execution: Cryptocurrency Mining YARA Rule
CRYPTOMINING_YARA
Matches memory patterns, such as proof-of-work constants, known to be used
by cryptocurrency mining software. Findings are classified as High severity by default.
Execution: Cryptocurrency Mining Combined Detection
CRYPTOMINING_HASH
CRYPTOMINING_YARA
Identifies a threat that was detected by both the
CRYPTOMINING_HASH and CRYPTOMINING_YARA modules.
For more information, see
Combined detections . Findings are classified as High severity by default.
Kernel-mode rootkit threat findings
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
VM Threat Detection analyzes kernel integrity at run time to detect common evasion techniques
that are used by malware.
The KERNEL_MEMORY_TAMPERING
module detects threats by doing a hash comparison on the
kernel code and kernel read-only data memory of a virtual machine.
The KERNEL_INTEGRITY_TAMPERING module detects threats by checking
the integrity of important kernel data structures.
VM Threat Detection kernel-mode rootkit threat findings
Category
Module
Description
Rootkit
Defense Evasion: Rootkit
KERNEL_MEMORY_TAMPERING
KERNEL_INTEGRITY_TAMPERING
A combination of signals matching a known kernel-mode rootkit is present. To receive
findings of this category, make sure both modules are enabled. Findings are classified as High severity by default.
Kernel memory tampering
Defense Evasion: Unexpected kernel read-only data modification
KERNEL_MEMORY_TAMPERING
Unexpected modifications of kernel read-only data memory are present. Findings are classified as High severity by default.
Kernel integrity tampering
Defense Evasion: Unexpected ftrace handler
KERNEL_INTEGRITY_TAMPERING
ftrace points are present with callbacks pointing to regions that are not in
the expected kernel or module code range. Findings are classified as High severity by default.
Defense Evasion: Unexpected interrupt handler
KERNEL_INTEGRITY_TAMPERING
Interrupt handlers that aren't in the expected kernel or module code regions are present. Findings are classified as High severity by default.
Defense Evasion: Unexpected kernel modules
KERNEL_INTEGRITY_TAMPERING
Kernel code pages that are not in the expected kernel or module code regions are present. Findings are classified as High severity by default.
Defense Evasion: Unexpected kprobe handler
KERNEL_INTEGRITY_TAMPERING
kprobe points are present with callbacks pointing to regions that are not in
the expected kernel or module code range. Findings are classified as High severity by default.
Defense Evasion: Unexpected processes in runqueue
KERNEL_INTEGRITY_TAMPERING
Unexpected processes in the scheduler run queue are present. Such processes are in the run
queue, but not in the process task list. Findings are classified as High severity by default.
Defense Evasion: Unexpected system call handler
KERNEL_INTEGRITY_TAMPERING
System call handlers that aren't in the expected kernel or module code regions are present. Findings are classified as High severity by default.
Errors
Error detectors can help you detect errors in your configuration that prevent
security sources from generating findings. Error findings are generated by
the Security Command Center security source and
have the finding class SCC errors .
Inadvertent actions
Standard-legacy, Premium, and Enterprise service tiers (requires organization-level activation )
The following finding categories represent errors possibly caused by unintentional actions.
Inadvertent actions
Category name
API name
Summary
Severity
API disabled
API_DISABLED
Finding description:
A required API is disabled for the project. The disabled service can't send findings to
Security Command Center.
Pricing tier:
Premium or Standard
Supported assets
cloudresourcemanager.googleapis.com/Project
Batch scans : Every 60 hours
Fix this finding build
Critical
Attack path simulation: no resource value configs match any resources
APS_NO_RESOURCE_VALUE_CONFIGS_MATCH_ANY_RESOURCES
Finding description:
Resource value configurations
are defined for attack path simulations, but they do
not match any resource instances in your environment. The simulations are using the
default high-value resource set instead.
This error can have any of the following causes:
None of the resource value configurations match any resource instances.
One or more resource value configurations that specify NONE override every
other valid configuration.
All the defined resource value configurations specify a value of NONE .
Pricing tier:
Premium
Supported assets
cloudresourcemanager.googleapis.com/Organizations
Batch scans : Before every attack path simulation.
Fix this finding build
Critical
Attack path simulation: resource value assignment limit exceeded
APS_RESOURCE_VALUE_ASSIGNMENT_LIMIT_EXCEEDED
Finding description:
In the last
attack path simulation ,
the number of high-value resource instances, as identified by the
resource value configurations ,
exceeded the limit of 1,000 resource instances in a high-value
resource set. As a result, Security Command Center excluded the excess number of
instances from the high-value resource set.
The total number of matching instances and the total number of instances excluded
from the set are identified in the SCC Error finding in the
Google Cloud console.
The attack exposure scores on any findings that affect excluded resource
instances do not reflect the high-value designation of the resource instances.
Pricing tier:
Premium
Supported assets
cloudresourcemanager.googleapis.com/Organizations
Batch scans : Before every attack path simulation.
Fix this finding build
High
Container Threat Detection
Image Pull Failure
KTD_IMAGE_PULL_FAILURE
Finding description:
Container Threat Detection can't be enabled on the cluster because a required container
image can't be pulled (downloaded) from gcr.io , the
Container Registry image host. The image is
needed to deploy the Container Threat Detection DaemonSet that Container Threat Detection requires.
The attempt to deploy the Container Threat Detection DaemonSet resulted in the following error:
Failed to pull image
"badurl.gcr.io/watcher-daemonset:ktd_release.watcher_20220831_RC00": rpc error:
code = NotFound desc = failed to pull and unpack image
"badurl.gcr.io/watcher-daemonset:ktd_release.watcher_20220831_RC00": failed to
resolve reference "badurl.gcr.io/watcher-daemonset:ktd_release.watcher_20220831_RC00":
badurl.gcr.io/watcher-daemonset:ktd_release.watcher_20220831_RC00: not found
Pricing tier:
Premium
Supported assets
container.googleapis.com/Cluster
Batch scans : Every 30 minutes
Fix this finding build
Critical
Container Threat Detection
Blocked By Admission Controller
KTD_BLOCKED_BY_ADMISSION_CONTROLLER
Finding description:
Container Threat Detection can't be enabled on a Kubernetes cluster. A third-party admission
controller is preventing the deployment of a Kubernetes DaemonSet object that
Container Threat Detection requires.
When viewed in the Google Cloud console, the finding details include the
error message that was returned by Google Kubernetes Engine when Container Threat Detection attempted to
deploy a Container Threat Detection DaemonSet Object.
Pricing tier:
Premium
Supported assets
container.googleapis.com/Cluster
Batch scans : Every 30 minutes
Fix this finding build
High
Container Threat Detection service account missing permissions
KTD_SERVICE_ACCOUNT_MISSING_PERMISSIONS
Finding description:
A service account is missing permissions that Container Threat Detection requires. Container Threat Detection
could stop functioning properly because the
detection instrumentation cannot be enabled, upgraded, or disabled.
Pricing tier:
Premium
Supported assets
cloudresourcemanager.googleapis.com/Project
Batch scans : Every 30 minutes
Fix this finding build
Critical
GKE service account missing
permissions
GKE_SERVICE_ACCOUNT_MISSING_PERMISSIONS
Finding description:
Container Threat Detection can't generate findings for a Google Kubernetes Engine cluster, because the
GKE default service account on the cluster is missing permissions. This
prevents Container Threat Detection from being successfully enabled on the cluster.
Pricing tier:
Premium
Supported assets
container.googleapis.com/Cluster
Batch scans : Every week
Fix this finding build
High
Misconfigured Cloud Logging Export
MISCONFIGURED_CLOUD_LOGGING_EXPORT
Finding description:
The project configured for
continuous export to Cloud Logging is unavailable. Security Command Center
can't send findings to Logging.
Pricing tier:
Premium
Supported assets
cloudresourcemanager.googleapis.com/Organization
Batch scans : Every 30 minutes
Fix this finding build
High
VPC Service Controls Restriction
VPC_SC_RESTRICTION
Finding description:
Security Health Analytics can't produce certain findings for a project. The project is protected by a
service perimeter , and the
Security Command Center service account doesn't have access to the perimeter.
Pricing tier:
Premium or Standard
Supported assets
cloudresourcemanager.googleapis.com/Project
Batch scans : Every 6 hours
Fix this finding build
High
Security Command
Center service account missing permissions
SCC_SERVICE_ACCOUNT_MISSING_PERMISSIONS
Finding description:
The Security Command Center service account is missing permissions required to function
properly. No findings are produced.
Pricing tier:
Premium or Standard
Supported assets
cloudresourcemanager.googleapis.com/Organization
cloudresourcemanager.googleapis.com/Project
Batch scans : Every 30 minutes
Fix this finding build
Critical
For more information, see Security Command Center errors .
App Hub
Standard-legacy, Standard, Premium, and Enterprise service tiers
Security Command Center and Compliance Manager let you view findings, issues, and
compliance information for resources within a specific App Hub
application. You can filter investigative views to view data for only those
resources that are registered to an App Hub application .
You can filter in the following investigative views:
Risk Overview > All risk dashboard
Risk Overview > Data dashboard
Findings page
Issues page
Compliance > Monitor (New) tab
Compliance > Monitor (New) > Framework Details page
The application filter is available when viewing data for an organization and
lists applications that are created in App Hub and deployed in the
same organization where Security Command Center was activated. Information in the
application filter is retrieved from Cloud Asset Inventory and App Hub.
The application filter is not available when viewing data for a single project
or folder.
What's next
Learn about Security Command Center in the
Security Command Center overview .
Learn how to add new security sources by
configuring Security Command Center services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
