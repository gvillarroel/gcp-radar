---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.252Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Custom constraints for firewall policy resources"
feature_slug: "custom-constraints-for-firewall-policy-resources"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/custom-constraints"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation"
  - "https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress"
keywords:
  - "custom"
  - "constraints"
  - "for"
  - "firewall"
  - "policy"
  - "resources"
  - "provide"
  - "granular"
---

# Custom constraints for firewall policy resources

Product: Cloud NGFW
Coverage: LOW

## Step 02 Summary

Custom constraints provide granular and customizable control over specific fields for firewall policy resources.

## Extended Definition

Custom constraints provide granular and customizable control over specific fields for firewall policy resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)
- [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress)

## Supporting Pages

### "Manage VPC firewall rule resources by using custom constraints \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies for Cloud Next Generation Firewall resources: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to manage organization policies for Cloud Next Generation Firewall resources, ask your administrator to grant you the following IAM roles: Organization policy administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To test the constraints: Compute Network Admin ( roles/compute.networkAdmin ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and enforce those custom constraints in a custom organization policy.
- Defining custom constraints A custom constraint is defined by the resources, methods, conditions, and actions that are supported by the service on which you are enforcing the organization policy.

### "Configure global network firewall policy to deny egress connections to specific\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Hit count column, select the number for the rule you created during Create a global network firewall policy .
- For conceptual information about firewall policy rules, see Firewall policy rule components .
- Click Create . gcloud To allow IAP access to all VM instances in the vpc-geo-location network, run the following command: To create a firewall policy, run the following command: gcloud compute network-firewall-policies create fw-policy \ --global To create a firewall rule that allows traffic to all destinations and enables logs, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy=fw-policy \ --direction=INGRESS \ --action=ALLOW \ --layer4-configs=tcp:22 \ --src-ip-ranges=35.235.240.0/20 \ --global-firewall-policy \ --enable-logging To associate the firewall policy with the VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy \ --network=vpc-geo-location \ --name=pol-association-fw-rules \ --global-firewall-policy Create a firewall rule In this section, you create a firewall rule to allow ingress connection on the instance-2-sg VM.
- Click Create . gcloud To add a new rule in the fw-policy that you created in the Create a global network firewall policy section, run the following command: gcloud compute network-firewall-policies rules create 200 \ --firewall-policy=fw-policy \ --direction=EGRESS \ --action=DENY \ --dest-region-codes=SG,PL,IT \ --layer4-configs=all \ --global-firewall-policy \ --enable-logging Test the geolocation firewall rule Console After you have added the rule to block egress traffic to Singapore (SG), Poland (PL), and Italy (IT), follow these steps to test the rule: In the Google Cloud console, go to the VM instances page.

### "Configure a global network firewall policy to allow egress traffic to an\

- URL: [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to create a custom VPC network, VM, Cloud Router, Cloud NAT, global network firewall policy and its rules, and to view the logs, ask your administrator to grant you the following IAM roles on the project: Compute Network Admin role ( roles/compute.networkAdmin ) Compute Instance Admin (v1) role ( roles/compute.instanceAdmin.v1 ) Compute Security Admin role ( roles/compute.securityAdmin ) Logs Viewer role ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a global network firewall policy to allow IAP TCP tunneling To allow Identity-Aware Proxy tunneling for the VMs in your network, create a global network firewall policy and add a firewall rule to the policy.
- In the Hit count column, click the number for the rule that you created in the Create a global network firewall policy section.
- This quickstart creates a Virtual Private Cloud (VPC) network with a subnet, creates a virtual machine (VM) instance in the VPC network, sets up a firewall policy that uses egress rules, and then tests the firewall policy from the VM.

