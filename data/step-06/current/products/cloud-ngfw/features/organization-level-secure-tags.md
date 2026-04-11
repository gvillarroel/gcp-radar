---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.251Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Organization-level secure tags"
feature_slug: "organization-level-secure-tags"
latest_feature_date: "2025-08-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs"
  - "https://docs.cloud.google.com/firewall/docs/configure-security-profiles"
  - "https://docs.cloud.google.com/firewall/docs/custom-constraints"
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
Coverage: LOW

## Step 02 Summary

Organization-level secure tags can be created and bound to all virtual machine instances across an organization; Organization-level secure tags can be created and bound to all virtual machine instances across an organization.

## Extended Definition

Organization-level secure tags can be created and bound to all virtual machine instances across an organization; Organization-level secure tags can be created and bound to all virtual machine instances across an organization.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/configure-security-profiles](https://docs.cloud.google.com/firewall/docs/configure-security-profiles)
- [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)

## Supporting Pages

### "Create and manage firewall rules for RoCE VPC networks \_|\_ Cloud Next\

- URL: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin, review the following information: RDMA RoCE network profile Cloud NGFW for RoCE VPC networks Because the rules in a regional network firewall policy used by an RoCE VPC network rely heavily on target secure tags and source secure tags, ensure that you're familiar with how to create and manage secure tags and bind secure tags to the VM instances.
- Click Create . gcloud To create an ingress rule that uses the --src-ip-ranges=0.0.0.0/0 flag and applies to all network interfaces in the RoCE VPC network, use the gcloud compute network-firewall-policies rules create command : gcloud compute network-firewall-policies rules create PRIORITY \ --direction=ingress \ --layer4-configs=all \ --enable-logging \ --action ACTION \ --firewall-policy FIREWALL POLICY NAME \ --firewall-policy-region FIREWALL POLICY REGION \ --src-ip-ranges=0.0.0.0/0 To create an ingress rule that uses a source secure tag and applies to specific network interfaces of VMs with an associated secure tag value, use the gcloud compute network-firewall-policies rules create command : gcloud compute network-firewall-policies rules create PRIORITY \ --direction=ingress \ --layer4-configs=all \ --enable-logging \ --action ALLOW \ --firewall-policy FIREWALL POLICY NAME \ --firewall-policy-region FIREWALL POLICY REGION \ --src-secure-tag SRC SECURE TAG [, SRC SECURE TAG ,...] \ --target-secure-tag TARGET SECURE TAG [, TARGET SECURE TAG ,...] Replace the following: PRIORITY : the priority of the rule ACTION : the action on match of the rule If you use --src-ip-ranges=0.0.0.0/0 , you can use either ALLOW or DENY .
- On the Select a resource page, select the organization or project in which you want to create secure tags.
- For Source , select Secure tags and do the following: Click Select scope for tags .

### "Create and manage threat prevention security profiles \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-security-profiles](https://docs.cloud.google.com/firewall/docs/configure-security-profiles)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permissions networksecurity.securityProfiles.create networksecurity.securityProfiles.update (required only if a profile with the same name already exists) Roles Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) gcloud To import a threat prevention security profile from a YAML file, use the gcloud beta network-security security-profiles import command : gcloud beta network-security security-profiles import NAME \ --organization ORGANIZATION ID \ --location LOCATION \ --source FILE NAME Replace the following: NAME : the name of the security profile of type threat-prevention that you want to import; you can specify the name as a string or as a unique URL identifier.
- Permissions networksecurity.securityProfiles.describe Roles Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) gcloud To export a threat prevention security profile to a YAML file, use the gcloud beta network-security security-profiles export command : gcloud beta network-security security-profiles export NAME \ --organization ORGANIZATION ID \ --location LOCATION \ --destination FILE NAME Replace the following: NAME : the name of the security profile of type threat-prevention that you want to export; you can specify the name as a string or as a unique URL identifier.
- Click a security profile of type Threat prevention to view the profile details. gcloud To view the details of a threat prevention security profile, use the gcloud beta network-security security-profiles describe command : gcloud beta network-security security-profiles describe NAME \ --organization ORGANIZATION ID \ --location LOCATION Replace the following: NAME : the name of the security profile of type threat-prevention that you want to describe; you can specify the name as a string or as a unique URL identifier.
- The unique URL for an organization-scoped security profile can be constructed in the following format: organization/ ORGANIZATION ID /locations/ LOCATION /securityProfiles/ SECURITY PROFILE NAME If you use a unique URL identifier for the security profile name, the organization and location of the security profile is already included in the URL identifier.

### "Manage VPC firewall rule resources by using custom constraints \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- All IP address ranges that include TCP port 22 are also blocked. gcloud Create a restrictSshRanges.yaml constraint file with the following information. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSshRanges resource types : compute.googleapis.com/Firewall condition : "resource.direction.matches('INGRESS') && resource.allowed.containsFirewallPort('tcp', '22') && !resource.sourceRanges.all(range, range == '35.235.240.0/20' range.startsWith('10.') range.startsWith('192.168.'))" action type : DENY method types : CREATE display name : Limit firewall rules that allow ingress SSH traffic description : Firewall rules that allow ingress SSH traffic can only be created with allowed source ranges.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies for Cloud Next Generation Firewall resources: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and enforce those custom constraints in a custom organization policy.

