---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.250Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Regional system firewall policies"
feature_slug: "regional-system-firewall-policies"
latest_feature_date: "2026-02-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups"
  - "https://docs.cloud.google.com/firewall/docs/custom-constraints"
keywords:
  - "regional"
  - "system"
  - "firewall"
  - "policies"
  - "are"
  - "read"
  - "only"
  - "used"
---

# Regional system firewall policies

Product: Cloud NGFW
Coverage: LOW

## Step 02 Summary

Regional system firewall policies are read-only policies used by internal Google services to secure operations within a VPC network.

## Extended Definition

Regional system firewall policies are read-only policies used by internal Google services to secure operations within a VPC network.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies](https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)
- [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)

## Supporting Pages

### "Address groups for firewall policies \_|\_ Cloud Next Generation Firewall\

- URL: [https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies](https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Project-scoped address groups can only be used in global network firewall policies and regional network firewall policies .
- Organization-scoped address groups can be used in hierarchical firewall policies , global network firewall policies , and regional network firewall policies .
- Consider the following additional specifications when you use address groups with firewall policies: The capacity of an address group gets added to the total attribute count of the firewall policy where the address group is used.
- You can share the IP addresses across firewall policies and define more complex, consistent, and robust firewall policies for your network with reduced maintenance overhead.

### "Configure address groups for firewall policies \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Create . gcloud To create a producer VM, run the following command: gcloud compute instances create vm-producer \ --network=vpc-producer \ --zone=us-central1-a \ --stack-type=IPV4 ONLY \ --no-address \ --subnet=subnet-vpc-producer \ --image-project=debian-cloud \ --image-family=debian-10 \ --metadata=startup-script='#! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl Read VM network configuration: md vm="http://169.254.169.254/computeMetadata/v1/instance/" vm hostname="$(curl $md vm/name -H "Metadata-Flavor:Google" )" filter="{print \$NF}" vm network="$(curl $md vm/network-interfaces/0/network \ -H "Metadata-Flavor:Google" awk -F/ "${filter}")" vm zone="$(curl $md vm/zone \ -H "Metadata-Flavor:Google" awk -F/ "${filter}")" Apache configuration: echo "Page on $vm hostname in network $vm network zone $vm zone" \ tee /var/www/html/index.html systemctl restart apache2' Create a VPC Network Peering connection To privately connect your vpc-consumer and vpc-producer VPC networks in the same project, use VPC Network Peering.
- In the Delete a firewall policy dialog, click Delete . gcloud Remove the association between the firewall policy and the VPC producer network. gcloud compute network-firewall-policies associations delete \ --name=pol-association-vpc-producer \ --firewall-policy=fw-policy-addressgrp \ --global-firewall-policy Note: If you used the Google Cloud console to set up the association between the firewall policy and the VPC network, don't use the gcloud CLI command to remove the association.
- Click Create . gcloud To let IAP access the VM instances in the vpc-producer network, run the following command: To create a firewall policy, run the following command: gcloud compute network-firewall-policies create fw-policy-addressgrp \ --global To create a firewall rule that allows traffic to all destinations and enables logs, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy=fw-policy-addressgrp \ --direction=INGRESS \ --action=ALLOW \ --layer4-configs=tcp:22 \ --src-ip-ranges=35.235.240.0/20 \ --global-firewall-policy To associate the firewall policy with the producer VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy-addressgrp \ --network=vpc-producer \ --name=pol-association-vpc-producer \ --global-firewall-policy To associate the firewall policy with the consumer VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy-addressgrp \ --network=vpc-consumer \ --name=pol-association-vpc-consumer \ --global-firewall-policy Create a project-scoped address group Create a project-scoped address group that uses the IP address assigned to the subnet-consumer-allowed subnet of the vpc-consumer VPC network.
- In the navigation menu, click Advanced and enter the following script in the Startup script field: #! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl Read VM network configuration: md vm="http://169.254.169.254/computeMetadata/v1/instance/" vm hostname="$(curl $md vm/name -H "Metadata-Flavor:Google" )" filter="{print \$NF}" vm network="$(curl $md vm/network-interfaces/0/network \ -H "Metadata-Flavor:Google" awk -F/ "${filter}")" vm zone="$(curl $md vm/zone \ -H "Metadata-Flavor:Google" awk -F/ "${filter}")" Apache configuration: echo "Page on $vm hostname in network $vm network zone $vm zone" \ tee /var/www/html/index.html systemctl restart apache2 The preceding script deploys and starts an Apache web server in this VM.

### "Manage VPC firewall rule resources by using custom constraints \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/custom-constraints](https://docs.cloud.google.com/firewall/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- All IP address ranges that include TCP port 22 are also blocked. gcloud Create a restrictSshRanges.yaml constraint file with the following information. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSshRanges resource types : compute.googleapis.com/Firewall condition : "resource.direction.matches('INGRESS') && resource.allowed.containsFirewallPort('tcp', '22') && !resource.sourceRanges.all(range, range == '35.235.240.0/20' range.startsWith('10.') range.startsWith('192.168.'))" action type : DENY method types : CREATE display name : Limit firewall rules that allow ingress SSH traffic description : Firewall rules that allow ingress SSH traffic can only be created with allowed source ranges.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies for Cloud Next Generation Firewall resources: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Example: Restrict ingress traffic to only standard web ports This constraint blocks the creation of ingress firewall rules that allow traffic from 0.0.0.0/0 on TCP ports other than 80 or 443 . gcloud Create a restrictWebPorts.yaml constraint file with the following information. name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictWebPorts resource types : compute.googleapis.com/Firewall condition : "resource.direction.matches('INGRESS') && resource.sourceRanges.all(range, range == '0.0.0.0/0') && resource.allowed.exists(allowed, allowed.IPProtocol != 'tcp' allowed.ports.exists(port, port != '80' && port != '443'))" action type : DENY method types : CREATE display name : Limit firewall rules that allow ingress traffic from 0.0.0.0/0 description : Firewall rules that allow ingress traffic from 0.0.0.0/0 on TCP ports other than 80 or 443.
- Required roles To get the permissions that you need to manage organization policies for Cloud Next Generation Firewall resources, ask your administrator to grant you the following IAM roles: Organization policy administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To test the constraints: Compute Network Admin ( roles/compute.networkAdmin ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .

