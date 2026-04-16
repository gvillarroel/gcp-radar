---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.506Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "roles/iam.serviceAccountActor"
feature_slug: "roles-iam-serviceaccountactor"
latest_feature_date: "2016-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control"
  - "https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
keywords:
  - "roles"
  - "iam"
  - "serviceaccountactor"
  - "the"
  - "account"
  - "actor"
  - "role"
  - "is"
---

# roles/iam.serviceAccountActor

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

The IAM Service Account Actor role is now generally available for VPC.

## Extended Definition

The IAM Service Account Actor role is now generally available for VPC.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)

## Supporting Pages

### "Roles and permissions \_|\_ Network Intelligence Center - Connectivity Tests\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Alternatively, you can grant a user or service account one of the following predefined roles for Google Cloud projects: project.viewer has all the permissions of a networkmanagement.viewer role. project.editor or project.owner has all the permissions of the networkmanagement.admin role.
- This page describes the Identity and Access Management (IAM) roles and permissions needed for running Connectivity Tests.
- Lowest-level resources where you can grant this role: Project networkmanagement. connectivitytests. get networkmanagement. connectivitytests. getIamPolicy networkmanagement. connectivitytests. list networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. get networkmanagement. operations. list networkmanagement. providers. get networkmanagement. providers. list networkmanagement. topologygraphs. read networkmanagement. vpcflowlogsconfigs. get networkmanagement. vpcflowlogsconfigs. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Cloud Network Insights Admin Beta ( roles/ networkmanagement.CloudNetworkInsightsAdmin ) Full access to Cloud Network Insights resources. networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. networkmanagement. monitoringpoints. downloadConfig networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. get networkmanagement. operations. list networkmanagement.providers. networkmanagement. providers. create networkmanagement. providers. delete networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Cloud Network Insights Editor Beta ( roles/ networkmanagement.CloudNetworkInsightsEditor ) Editor access to Cloud Network Insights resources. networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. networkmanagement. monitoringpoints. downloadConfig networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. get networkmanagement. operations. list networkmanagement.providers. networkmanagement. providers. create networkmanagement. providers. delete networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Cloud Network Insights Viewer Beta ( roles/ networkmanagement.CloudNetworkInsightsViewer ) Read-only access to Cloud Network Insights resources. networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Service agent roles Service agent roles should only be granted to service agents .
- Lowest-level resources where you can grant this role: Project networkmanagement. networkmanagement. connectivitytests. create networkmanagement. connectivitytests. delete networkmanagement. connectivitytests. get networkmanagement. connectivitytests. getIamPolicy networkmanagement. connectivitytests. list networkmanagement. connectivitytests. rerun networkmanagement. connectivitytests. setIamPolicy networkmanagement. connectivitytests. update networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. downloadConfig networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement. operations. cancel networkmanagement. operations. delete networkmanagement. operations. get networkmanagement. operations. list networkmanagement. providers. create networkmanagement. providers. delete networkmanagement. providers. generateProviderAccessToken networkmanagement. providers. get networkmanagement. providers. list networkmanagement. topologygraphs. read networkmanagement. vpcflowlogsconfigs. create networkmanagement. vpcflowlogsconfigs. delete networkmanagement. vpcflowlogsconfigs. get networkmanagement. vpcflowlogsconfigs. list networkmanagement. vpcflowlogsconfigs. update networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Networkmanagement Editor ( roles/ networkmanagement.editor ) Editor role for networkmanagement networkmanagement. connectivitytests. create networkmanagement. connectivitytests. delete networkmanagement. connectivitytests. get networkmanagement. connectivitytests. getIamPolicy networkmanagement. connectivitytests. list networkmanagement. connectivitytests. rerun networkmanagement. connectivitytests. update networkmanagement.locations. networkmanagement. locations. get networkmanagement. locations. list networkmanagement. monitoringpoints. get networkmanagement. monitoringpoints. list networkmanagement. networkpaths. networkmanagement. networkpaths. get networkmanagement. networkpaths. list networkmanagement.operations. networkmanagement. operations. cancel networkmanagement. operations. delete networkmanagement. operations. get networkmanagement. operations. list networkmanagement. providers. get networkmanagement. providers. list networkmanagement. topologygraphs. read networkmanagement. vpcflowlogsconfigs. networkmanagement. vpcflowlogsconfigs. create networkmanagement. vpcflowlogsconfigs. delete networkmanagement. vpcflowlogsconfigs. get networkmanagement. vpcflowlogsconfigs. list networkmanagement. vpcflowlogsconfigs. update networkmanagement.webpaths. networkmanagement.webpaths.get networkmanagement. webpaths. list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Network Management Viewer ( roles/ networkmanagement.viewer ) Read-only access to Network Management resources.

### "Access the service from another VPC network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the API Make sure that you have the following role or roles on the project: Compute Engine > Compute Network Admin, Compute Engine > Compute Instance Admin Check for the roles In the Google Cloud console, go to the IAM page.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- For all rows that specify or include you, check the Role column to see whether the list of roles includes the required roles.

### "Access Google APIs through endpoints \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.
- Permissions required for this task To perform this task, you must have been granted the following permissions or one of the following IAM roles.

