---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.997Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Organization-level secure tags"
feature_slug: "organization-level-secure-tags"
latest_feature_date: "2025-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs"
  - "https://docs.cloud.google.com/firewall/docs/custom-constraints"
  - "https://docs.cloud.google.com/firewall/docs/configure-security-profiles"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial"
keywords:
  - "organization"
  - "level"
  - "secure"
  - "tags"
  - "can"
  - "be"
  - "created"
  - "and"
---

# Organization-level secure tags

Product: Cloud NGFW
Coverage: MEDIUM

## Step 02 Summary

Organization-level secure tags can be created and bound to all virtual machine instances across an organization; Organization-level secure tags can be created and bound to all virtual machine instances across an organization.

## Extended Definition

Organization-level secure tags can be created and bound to all virtual machine instances across an organization; Organization-level secure tags can be created and bound to all virtual machine instances across an organization.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- [https://docs.cloud.google.com/firewall/docs/configure-security-profiles](https://docs.cloud.google.com/firewall/docs/configure-security-profiles)
- [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial)

## Supporting Pages

### "Create and manage firewall rules for RoCE VPC networks \_|\_ Cloud Next\

- URL: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin, review the following information: RDMA RoCE network profile Cloud NGFW for RoCE VPC networks Because the rules in a regional network firewall policy used by an RoCE VPC network rely heavily on target secure tags and source secure tags, ensure that you're familiar with how to create and manage secure tags and bind secure tags to the VM instances.
- Click Create . gcloud To create an ingress rule that uses the --src-ip-ranges=0.0.0.0/0 flag and applies to all network interfaces in the RoCE VPC network, use the gcloud compute network-firewall-policies rules create command : gcloud compute network-firewall-policies rules create PRIORITY \ --direction=ingress \ --layer4-configs=all \ --enable-logging \ --action ACTION \ --firewall-policy FIREWALL POLICY NAME \ --firewall-policy-region FIREWALL POLICY REGION \ --src-ip-ranges=0.0.0.0/0 To create an ingress rule that uses a source secure tag and applies to specific network interfaces of VMs with an associated secure tag value, use the gcloud compute network-firewall-policies rules create command : gcloud compute network-firewall-policies rules create PRIORITY \ --direction=ingress \ --layer4-configs=all \ --enable-logging \ --action ALLOW \ --firewall-policy FIREWALL POLICY NAME \ --firewall-policy-region FIREWALL POLICY REGION \ --src-secure-tag SRC SECURE TAG [, SRC SECURE TAG ,...] \ --target-secure-tag TARGET SECURE TAG [, TARGET SECURE TAG ,...] Replace the following: PRIORITY : the priority of the rule ACTION : the action on match of the rule If you use --src-ip-ranges=0.0.0.0/0 , you can use either ALLOW or DENY .
- On the Select a resource page, select the organization or project in which you want to create secure tags.
- For Source , select Secure tags and do the following: Click Select scope for tags .

### "Manage VPC firewall rule resources by using custom constraints \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All IP address ranges that include TCP port 22 are also blocked. gcloud Create a restrictSshRanges.yaml constraint file with the following information. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSshRanges resource types : compute.googleapis.com/Firewall condition : "resource.direction.matches('INGRESS') && resource.allowed.containsFirewallPort('tcp', '22') && !resource.sourceRanges.all(range, range == '35.235.240.0/20' range.startsWith('10.') range.startsWith('192.168.'))" action type : DENY method types : CREATE display name : Limit firewall rules that allow ingress SSH traffic description : Firewall rules that allow ingress SSH traffic can only be created with allowed source ranges.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies for Cloud Next Generation Firewall resources: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and enforce those custom constraints in a custom organization policy.

### "Create and manage threat prevention security profiles \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-security-profiles](https://docs.cloud.google.com/firewall/docs/configure-security-profiles)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions networksecurity.securityProfiles.create networksecurity.securityProfiles.update (required only if a profile with the same name already exists) Roles Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) gcloud To import a threat prevention security profile from a YAML file, use the gcloud beta network-security security-profiles import command : gcloud beta network-security security-profiles import NAME \ --organization ORGANIZATION ID \ --location LOCATION \ --source FILE NAME Replace the following: NAME : the name of the security profile of type threat-prevention that you want to import; you can specify the name as a string or as a unique URL identifier.
- Permissions networksecurity.securityProfiles.describe Roles Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) gcloud To export a threat prevention security profile to a YAML file, use the gcloud beta network-security security-profiles export command : gcloud beta network-security security-profiles export NAME \ --organization ORGANIZATION ID \ --location LOCATION \ --destination FILE NAME Replace the following: NAME : the name of the security profile of type threat-prevention that you want to export; you can specify the name as a string or as a unique URL identifier.
- Click a security profile of type Threat prevention to view the profile details. gcloud To view the details of a threat prevention security profile, use the gcloud beta network-security security-profiles describe command : gcloud beta network-security security-profiles describe NAME \ --organization ORGANIZATION ID \ --location LOCATION Replace the following: NAME : the name of the security profile of type threat-prevention that you want to describe; you can specify the name as a string or as a unique URL identifier.
- The unique URL for an organization-scoped security profile can be constructed in the following format: organization/ ORGANIZATION ID /locations/ LOCATION /securityProfiles/ SECURITY PROFILE NAME If you use a unique URL identifier for the security profile name, the organization and location of the security profile is already included in the URL identifier.

### "Set up intrusion detection and prevention service in your network \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial](https://docs.cloud.google.com/firewall/docs/tutorials/set-up-ips-tutorial)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you can't remember how you created the association or get the The network firewall policy does not have an association with pol-association-fw-rules error when you run the command, use the Google Cloud console to remove the association.
- To add the firewall rule to enable IAP access, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy fw-policy-ips \ --direction INGRESS \ --action ALLOW \ --src-ip-ranges 35.235.240.0/20 \ --layer4-configs tcp:22, tcp:3389 \ --global-firewall-policy \ --enable-logging To add the firewall rule to enable Layer 7 inspection for threat prevention and detection, run the following command: gcloud compute network-firewall-policies rules create 200 \ --direction INGRESS \ --firewall-policy fw-policy-ips \ --action apply security profile group \ --dest-ip-ranges SERVER VM IP \ --layer4-configs tcp:0-65535 \ --global-firewall-policy \ --security-profile-group \ //networksecurity.googleapis.com/organizations/ ORGANIZATION ID \ /locations/global/securityProfileGroups/sec-profile-group-ips \ --enable-logging Replace the following: SERVER VM IP : the external IP address of the server VM that you created in the Create the server VM instances section.
- Click Create . gcloud To create a security profile group, run the following command: gcloud network-security security-profile-groups \ create sec-profile-group-ips \ --organization ORGANIZATION ID \ --location global \ --project PROJECT ID \ --threat-prevention-profile \ organizations/ ORGANIZATION ID /locations/global/securityProfiles/sec-profile-ips \ --description "Security profile group to set up intrusion detection and prevention service." Replace the following: ORGANIZATION ID : the organization where the security profile group is created.
- Click Create . gcloud To create a firewall endpoint association, run the following command: gcloud network-security firewall-endpoint-associations \ create endpoint-association-ips \ --endpoint organizations/ ORGANIZATION ID /locations/asia-southeast1-a/firewallEndpoints/endpoint-ips \ --network vpc-ips \ --zone asia-southeast1-a \ --project PROJECT ID Replace the following: ORGANIZATION ID : the organization where the firewall endpoint is created.

