---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.009Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Minimal AWS Permissions"
feature_slug: "minimal-aws-permissions"
latest_feature_date: "2018-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies"
keywords:
  - "minimal"
  - "aws"
  - "permissions"
  - "documentation"
  - "describes"
  - "reduced"
  - "permission"
  - "set"
---

# Minimal AWS Permissions

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Documentation describes a reduced AWS permission set for using Monitoring with AWS.

## Extended Definition

Documentation describes a reduced AWS permission set for using Monitoring with AWS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies)

## Supporting Pages

### Use agent policies \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/monitoring/managing-agent-policies)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash set-permissions.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] The diagnose.sh script Given a project ID, a Compute Engine instance ID, and the agent policy ID, the diagnose.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS Config guest policy The policies that are applicable to this Compute Engine instance The agent package repositories that are pulled on to this Compute Engine instance To invoke the script, run the following command: bash diagnose.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID Terraform integration To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The set-permissions.sh script The diagnose.sh script The set-permissions.sh script After you download the set-permissions.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- If you haven't done so already, install the beta component of the gcloud CLI: gcloud components install beta To check if you have the beta component for the installed, run: gcloud components list If you previously installed the beta component, ensure you have the latest version: gcloud components update Download and use the following script to enable the APIs and to set the proper permissions for using the Google Cloud CLI: set-permissions.sh .
- Insufficient IAM permission If a gcloud beta compute instances ops-agents policies command fails with a permission error, then make sure you have run the set-permissions.sh script as described in Create an agent policy to set up the OS Config policy roles: GuestPolicy Admin ( roles/osconfig.guestPolicyAdmin ) : Provides full access to guest policies.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- Explore trace data Note: If your dashboards aren't displaying the trace data that you expect, then you might need to configure the default trace scope or you might need additional Identity and Access Management permissions.
- Explore log data Note: If your dashboards aren't displaying the log data that you expect, then you might need to configure the default log scope or you might need additional Identity and Access Management permissions.
- You might also be able to get the required permissions through custom roles or other predefined roles .

### Use agent policies (beta) \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/managing-agent-policies)
- Source ID: `site-iam-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- To enable the APIs, grant the necessary roles to the default service account, and enable the OS Config metadata for a project, run the script as follows: bash set-permissions.sh --project= PROJECT ID To additionally grant one of the OS Config roles to a user who does not have the Owner ( roles/owner ) role on the project, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-user= USER EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] To additionally grant one of the OS Config roles to a non-default service account, run the script as follows: bash set-permissions.sh --project= PROJECT ID \ --iam-service-account= SERVICE ACCT EMAIL \ --iam-permission-role=guestPolicy [Admin Editor Viewer] The diagnose.sh script Given a project ID, a Compute Engine instance ID, and the agent policy ID, the diagnose.sh script automatically collects the necessary information to help diagnose issues with the policy: The OS Config agent version The underlying OS Config guest policy The policies that are applicable to this Compute Engine instance The agent package repositories that are pulled on to this Compute Engine instance To invoke the script, run the following command: bash diagnose.sh --project-id= PROJECT ID \ --gce-instance-id= INSTANCE ID \ --policy-id= POLICY ID Terraform integration To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- To enable debug-level logging for the entire project, run the following command: gcloud compute project-info add-metadata \ --project PROJECT ID \ --metadata osconfig-log-level=debug To enable debug-level logging for one VM, run the following command: gcloud compute instances add-metadata INSTANCE ID \ --project PROJECT ID \ --metadata osconfig-log-level=debug Helper scripts This section provides additional information about the helper scripts described in this document: The set-permissions.sh script The diagnose.sh script The set-permissions.sh script After you download the set-permissions.sh script, you can use the script to perform the following actions, based on the arguments you provide: Enable the Cloud Logging API, the Cloud Monitoring API, and the OS Config API for the project.
- If you haven't done so already, install the beta component of the gcloud CLI: gcloud components install beta To check if you have the beta component for the installed, run: gcloud components list If you previously installed the beta component, ensure you have the latest version: gcloud components update Download and use the following script to enable the APIs and to set the proper permissions for using the Google Cloud CLI: set-permissions.sh .
- Insufficient IAM permission If a gcloud beta compute instances ops-agents policies command fails with a permission error, then make sure you have run the set-permissions.sh script as described in Create an agent policy to set up the OS Config policy roles: GuestPolicy Admin ( roles/osconfig.guestPolicyAdmin ) : Provides full access to guest policies.

