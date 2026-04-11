---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.587Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager general availability"
feature_slug: "access-context-manager-general-availability"
latest_feature_date: "2019-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/enterprise-certificates"
  - "https://docs.cloud.google.com/access-context-manager/docs/caa-enforcement-points"
  - "https://docs.cloud.google.com/access-context-manager/docs/overview"
keywords:
  - "product availability status"
  - "Access Context Manager general availability"
  - "generally available (GA)"
  - "service reaches GA"
  - "general availability"
  - "GA release"
  - "Access Context Manager GA"
  - "GA"
---

# Access Context Manager general availability

Product: Access Context Manager
Coverage: LOW

## Step 02 Summary

Access Context Manager reached general availability.

## Extended Definition

Based on the provided excerpts, Access Context Manager provides context-aware access control through access policies and enforcement points that are applied across Google Cloud services. The documentation explicitly marks Session controls as a Preview feature subject to Pre-GA terms, indicating limited support for that subfeature. However, the provided excerpts do not directly confirm that Access Context Manager itself reached General Availability on 2019-03-08.

## Evidence Summary

The cited pages confirm core Access Context Manager capabilities (attribute-based access control and enforcement) and explicitly identify Session controls as Preview/Pre-GA, but they do not provide evidence of a general-availability announcement or date.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/enterprise-certificates](https://docs.cloud.google.com/access-context-manager/docs/enterprise-certificates)
- [https://docs.cloud.google.com/access-context-manager/docs/caa-enforcement-points](https://docs.cloud.google.com/access-context-manager/docs/caa-enforcement-points)
- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)

## Supporting Pages

### "Configuring enterprise certificate conditions \_|\_ Access Context Manager\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/enterprise-certificates](https://docs.cloud.google.com/access-context-manager/docs/enterprise-certificates)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Access Context Manager Guides Send feedback Configuring enterprise certificate conditions Stay organized with collections Save and categorize content based on your preferences.
- In the Admin console, add the AutoSelectCertificateForUrls policy: Go to the Admin console and navigate to Devices > Chrome > Settings > User & Browser Settings > Client certificates .
- Complete the following steps to upload the trust anchors: Go to the Admin console and navigate to Devices > Networks > Certificates .
- The level of access given to a single user or a single device is dynamically inferred by interrogating multiple data sources.

### "Context-Aware Access enforcement points \_|\_ Access Context Manager \_\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/caa-enforcement-points](https://docs.cloud.google.com/access-context-manager/docs/caa-enforcement-points)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Access policy and session controls are applied whenever a Google service (such as the Google Cloud console, or the Google Cloud CLI when using Application Default Credentials) requests or validates access to a token containing one of the following scopes: https://www.googleapis.com/auth/acr https://www.googleapis.com/auth/acr.dev https://www.googleapis.com/auth/alloydb.login https://www.googleapis.com/auth/appengine.admin https://www.googleapis.com/auth/appengine.apis https://www.googleapis.com/auth/appengine.monitoring https://www.googleapis.com/auth/atap-walnut.upload https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigquery.insertdata https://www.googleapis.com/auth/bigquery.managetables https://www.googleapis.com/auth/bigquery.querytables https://www.googleapis.com/auth/bigquery.readonly https://www.googleapis.com/auth/bigtable.admin https://www.googleapis.com/auth/bigtable.admin.cluster https://www.googleapis.com/auth/bigtable.admin.instance https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/bigtable.data.readonly https://www.googleapis.com/auth/bigtable.keyvisualizer https://www.googleapis.com/auth/bio https://www.googleapis.com/auth/cloud debugger https://www.googleapis.com/auth/cloud debugletcontroller https://www.googleapis.com/auth/cloud-bigtable.admin https://www.googleapis.com/auth/cloud-bigtable.admin.cluster https://www.googleapis.com/auth/cloud-bigtable.admin.table https://www.googleapis.com/auth/cloud-bigtable.data https://www.googleapis.com/auth/cloud-bigtable.data.readonly https://www.googleapis.com/auth/cloud-billing https://www.googleapis.com/auth/cloud-billing-partner-subscriptions.readonly https://www.googleapis.com/auth/cloud-billing.readonly https://www.googleapis.com/auth/cloud-build-service https://www.googleapis.com/auth/cloud-healthcare https://www.googleapis.com/auth/cloud-language https://www.googleapis.com/auth/cloud-license-server https://www.googleapis.com/auth/cloud-messaging https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-platform.app-auth https://www.googleapis.com/auth/cloud-platform.read-only https://www.googleapis.com/auth/cloud-scheduler https://www.googleapis.com/auth/cloud-source-tools https://www.googleapis.com/auth/cloud-speech https://www.googleapis.com/auth/cloud-taskqueue https://www.googleapis.com/auth/cloud-taskqueue.consumer https://www.googleapis.com/auth/cloud-tasks https://www.googleapis.com/auth/cloud-tool-results https://www.googleapis.com/auth/cloud-translation https://www.googleapis.com/auth/cloud-video-intelligence https://www.googleapis.com/auth/cloud-vision https://www.googleapis.com/auth/cloud.tpu https://www.googleapis.com/auth/cloud.useraccounts https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/cloudcast https://www.googleapis.com/auth/cloudcast.inapp https://www.googleapis.com/auth/cloudcast.internal https://www.googleapis.com/auth/cloudcast.publisher https://www.googleapis.com/auth/cloudchannel.internal https://www.googleapis.com/auth/cloudfunctions https://www.googleapis.com/auth/cloudgroup https://www.googleapis.com/auth/cloudgroup.readonly https://www.googleapis.com/auth/cloudimagemanagement https://www.googleapis.com/auth/cloudinsights https://www.googleapis.com/auth/cloudiot https://www.googleapis.com/auth/cloudkms https://www.googleapis.com/auth/cloudlatencytest.updatestats https://www.googleapis.com/auth/cloudmarketplace https://www.googleapis.com/auth/cloudmarketplace.firstparty https://www.googleapis.com/auth/cloudmarketplace.firstparty.test https://www.googleapis.com/auth/cloudmarketplace.readonly https://www.googleapis.com/auth/cloudmarketplaceadmin https://www.googleapis.com/auth/cloudmarketplaceadmin.firstparty https://www.googleapis.com/auth/cloudmarketplaceadmin.firstparty.test https://www.googleapis.com/auth/cloudmarketplacepartner https://www.googleapis.com/auth/cloudmarketplacepartner.firstparty https://www.googleapis.com/auth/cloudmarketplacepartner.firstparty.test https://www.googleapis.com/auth/cloudplatformconfigpolicy https://www.googleapis.com/auth/cloudplatformconfigpolicy.readonly https://www.googleapis.com/auth/cloudplatformfolders https://www.googleapis.com/auth/cloudplatformfolders.readonly https://www.googleapis.com/auth/cloudplatformorganizations https://www.googleapis.com/auth/cloudplatformorganizations.readonly https://www.googleapis.com/auth/cloudplatformprojects https://www.googleapis.com/auth/cloudplatformprojects.readonly https://www.googleapis.com/auth/cloudprofile https://www.googleapis.com/auth/cloudruntimeconfig https://www.googleapis.com/auth/cloudsearch https://www.googleapis.com/auth/cloudsearch.readonly https://www.googleapis.com/auth/cloudsupport https://www.googleapis.com/auth/compute https://www.googleapis.com/auth/compute.readonly https://www.googleapis.com/auth/computeaccounts https://www.googleapis.com/auth/computeaccounts.readonly https://www.googleapis.com/auth/datastore https://www.googleapis.com/auth/datastore.overlay basis https://www.googleapis.com/auth/datastoremobile https://www.googleapis.com/auth/developersquota https://www.googleapis.com/auth/device registry https://www.googleapis.com/auth/devstorage.full control https://www.googleapis.com/auth/devstorage.read only https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/devstorage.write only https://www.googleapis.com/auth/dialogflow https://www.googleapis.com/auth/endpoints https://www.googleapis.com/auth/exacycle https://www.googleapis.com/auth/exacycle.readonly https://www.googleapis.com/auth/firebase.appdistribution.tester https://www.googleapis.com/auth/genomics https://www.googleapis.com/auth/genomics.readonly https://www.googleapis.com/auth/goma https://www.googleapis.com/auth/goma internal https://www.googleapis.com/auth/iam https://www.googleapis.com/auth/iam.test https://www.googleapis.com/auth/inquisition https://www.googleapis.com/auth/kharon https://www.googleapis.com/auth/learning powerhouse https://www.googleapis.com/auth/lifescience.dime https://www.googleapis.com/auth/logging.admin https://www.googleapis.com/auth/logging.read https://www.googleapis.com/auth/logging.write https://www.googleapis.com/auth/mobilecrashreporting https://www.googleapis.com/auth/monitoring https://www.googleapis.com/auth/monitoring.read https://www.googleapis.com/auth/monitoring.readonly https://www.googleapis.com/auth/monitoring.write https://www.googleapis.com/auth/ndev.alerting https://www.googleapis.com/auth/ndev.clouddns.readonly https://www.googleapis.com/auth/ndev.clouddns.readwrite https://www.googleapis.com/auth/ndev.cloudman https://www.googleapis.com/auth/ndev.cloudman.agent https://www.googleapis.com/auth/ndev.cloudman.readonly https://www.googleapis.com/auth/ndev.cloudworkflow https://www.googleapis.com/auth/ndev.licenseverification https://www.googleapis.com/auth/prediction https://www.googleapis.com/auth/projecthosting https://www.googleapis.com/auth/pubsub https://www.googleapis.com/auth/replicapool https://www.googleapis.com/auth/replicapool.readonly https://www.googleapis.com/auth/reportcard https://www.googleapis.com/auth/sasportal https://www.googleapis.com/auth/service.management https://www.googleapis.com/auth/service.management.readonly https://www.googleapis.com/auth/servicecontrol https://www.googleapis.com/auth/source.full control https://www.googleapis.com/auth/source.read only https://www.googleapis.com/auth/source.read write https://www.googleapis.com/auth/spanner.admin https://www.googleapis.com/auth/spanner.data https://www.googleapis.com/auth/sqlservice https://www.googleapis.com/auth/sqlservice.admin https://www.googleapis.com/auth/sqlservice.agent https://www.googleapis.com/auth/sqlservice.login https://www.googleapis.com/auth/stackdriver-integration https://www.googleapis.com/auth/stagedoor https://www.googleapis.com/auth/taskqueue https://www.googleapis.com/auth/taskqueue.consumer https://www.googleapis.com/auth/trace.append https://www.googleapis.com/auth/trace.readonly https://www.googleapis.com/auth/virgil https://www.googleapis.com/auth/virgil.managefleet https://www.googleapis.com/auth/virgil.managevm https://www.googleapis.com/auth/virgil.readonly https://www.googleapis.com/auth/virtualcluster https://www.googleapis.com/auth/workflow https://www.googleapis.com/auth/xflume https://www.googleapis.com/auth/zandor https://www.googleapis.com/auth/zandor.readonly Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security Access Context Manager Guides Send feedback Context-Aware Access enforcement points Stay organized with collections Save and categorize content based on your preferences.
- Preview — Session controls feature only This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Pre-GA features are available "as is" and might have limited support.

### Access Context Manager Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: The page is an overview of the service and does not explicitly state release milestones or GA status.

Evidence snippets:
- Home Documentation Security Access Context Manager Guides Send feedback Access Context Manager Overview Stay organized with collections Save and categorize content based on your preferences.
- Google Cloud organization administrators can use Access Context Manager to define fine-grained, attribute-based access control for projects and resources in Google Cloud.
- The delegated administrator to whom the scoped policy is assigned can manage only the scoped access policy and not the organization-level access policy.
- To delegate administration of an access policy, you can create a scoped access policy and set the scope of the policy at the folder or project level.

