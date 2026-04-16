---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:53.000Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Ingress and egress IP range matching"
feature_slug: "ingress-and-egress-ip-range-matching"
latest_feature_date: "2023-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation"
  - "https://docs.cloud.google.com/firewall/docs/configure-global-fw-policies"
  - "https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress"
keywords:
  - "ingress"
  - "and"
  - "egress"
  - "ip"
  - "range"
  - "matching"
  - "firewall"
  - "rules"
---

# Ingress and egress IP range matching

Product: Cloud NGFW
Coverage: MEDIUM

## Step 02 Summary

Firewall rules can specify source IP ranges for egress traffic and destination IP ranges for ingress traffic.

## Extended Definition

Firewall rules can specify source IP ranges for egress traffic and destination IP ranges for ingress traffic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)
- [https://docs.cloud.google.com/firewall/docs/configure-global-fw-policies](https://docs.cloud.google.com/firewall/docs/configure-global-fw-policies)
- [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress)

## Supporting Pages

### "Configure a hierarchical firewall policy to allow egress traffic from a\

- URL: [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To verify that the egress traffic from testvpc-vm to testvpc-apache-vm is blocked, run the following command: curl < internal IP testvpc apache vm > -m 2 The preceding command returns a Connection timed out message, which is expected because you created a firewall rule to deny egress traffic from all VPC networks in the organization except from myvpc .
- Learn how to create and configure a hierarchical firewall policy to allow egress traffic originating from a specific Virtual Private Cloud (VPC) network in your folder to a specific IP address as the destination.
- To verify that the egress traffic to testvpc-apache-vm from myvpc is allowed, run the following command: curl < external ephemeral IP testvpc apache vm > -m 2 The preceding command returns the content that you have specified for the index.html page of the Apache web server, which means that egress connections from myvpc are allowed.
- Add a firewall rule to delegate the egress traffic from the myvpc network to the next rule in the hierarchy Add a firewall rule that uses the goto next action to delegate the egress traffic from the myvpc network to the next rule in the firewall, which is the implied IPv4 allow egress VPC firewall rule.

### "Configure global network firewall policy to deny egress connections to specific\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud To allow IAP access to all VM instances in the vpc-geo-location network, run the following command: To create a firewall policy, run the following command: gcloud compute network-firewall-policies create fw-policy \ --global To create a firewall rule that allows traffic to all destinations and enables logs, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy=fw-policy \ --direction=INGRESS \ --action=ALLOW \ --layer4-configs=tcp:22 \ --src-ip-ranges=35.235.240.0/20 \ --global-firewall-policy \ --enable-logging To associate the firewall policy with the VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy \ --network=vpc-geo-location \ --name=pol-association-fw-rules \ --global-firewall-policy Create a firewall rule In this section, you create a firewall rule to allow ingress connection on the instance-2-sg VM.
- Click Create . gcloud To update the firewall policy, run the following command: gcloud compute network-firewall-policies rules create 500 \ --firewall-policy=fw-policy \ --direction=INGRESS \ --action=ALLOW \ --src-ip-ranges= NAT IP ADDRESS \ --layer4-configs=all \ --global-firewall-policy \ --enable-logging Replace NAT IP ADDRESS with the IP address assigned to your Cloud NAT.
- This IP address is used when you validate the connection between the instance-1-us VM and instance-2-sg VM. gcloud To create a Cloud Router, run the following command: gcloud compute routers create router-fw-rules \ --network=vpc-geo-location \ --region=us-central1 To create a Cloud NAT gateway, run the following command: gcloud compute routers nats create nat-gateway \ --router=router-fw-rules \ --region=us-central1 \ --auto-allocate-nat-external-ips \ --nat-all-subnet-ip-ranges To view the Cloud NAT IP address, run the following command: gcloud compute routers get-nat-ip-info \ router-fw-rules \ --region=us-central1 Remember to copy the IP address of your Cloud NAT ( natIp ).
- Click Create . gcloud To add a new rule in the fw-policy that you created in the Create a global network firewall policy section, run the following command: gcloud compute network-firewall-policies rules create 200 \ --firewall-policy=fw-policy \ --direction=EGRESS \ --action=DENY \ --dest-region-codes=SG,PL,IT \ --layer4-configs=all \ --global-firewall-policy \ --enable-logging Test the geolocation firewall rule Console After you have added the rule to block egress traffic to Singapore (SG), Poland (PL), and Italy (IT), follow these steps to test the rule: In the Google Cloud console, go to the VM instances page.

### "Configure a global network firewall policy to enable ingress traffic \_\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-global-fw-policies](https://docs.cloud.google.com/firewall/docs/configure-global-fw-policies)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud To create a firewall policy, run the following command: gcloud compute network-firewall-policies create fw-policy \ --global To create a firewall rule that allows traffic to all destinations and enables logs, run the following command: gcloud compute network-firewall-policies rules create 65534 \ --firewall-policy=fw-policy \ --direction=EGRESS \ --action=ALLOW \ --dest-ip-ranges=0.0.0.0/0 \ --layer4-configs=all \ --global-firewall-policy \ --enable-logging To associate the firewall policy with the VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy \ --network=vpc-fw-rules \ --name=pol-association-fw-rules \ --global-firewall-policy Add a firewall rule for IAP In the previous section, you created Linux VMs without external IP addresses.
- Click Create . gcloud To create a Cloud Router, run the following command: gcloud compute routers create router-fw-rules \ --network=vpc-fw-rules \ --region=us-central1 To create a Cloud NAT gateway, run the following command: gcloud compute routers nats create gateway-fw-rules \ --router=router-fw-rules \ --region=us-central1 \ --auto-allocate-nat-external-ips \ --nat-all-subnet-ip-ranges Create a global network firewall policy In this section, you create a global network firewall policy with the following: An egress rule with 0.0.0.0./0 as the destination.
- Click Create . gcloud To update the firewall policy, run the following command: gcloud compute network-firewall-policies rules create 501 \ --firewall-policy=fw-policy \ --direction=INGRESS \ --action=ALLOW \ --src-ip-ranges=192.168.10.0/24 \ --dest-ip-ranges=10.0.0.0/24 \ --layer4-configs=all \ --global-firewall-policy \ --enable-logging Test the connection After creating the firewall policy, connect to the server VM from the client VM using the internal IP address of the server VM.
- Click Create . gcloud To allow RDP and SSH access to all VM instances in the vpc-fw-rules network, run the following command: gcloud compute network-firewall-policies rules create 500 \ --firewall-policy=fw-policy \ --direction=INGRESS \ --action=ALLOW \ --src-ip-ranges=35.235.240.0/20 \ --global-firewall-policy \ --layer4-configs tcp:22,tcp:3389 \ --enable-logging Install the Apache server In this section, you install the Apache server on the server VM.

### "Configure a global network firewall policy to allow egress traffic to an\

- URL: [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This quickstart creates a Virtual Private Cloud (VPC) network with a subnet, creates a virtual machine (VM) instance in the VPC network, sets up a firewall policy that uses egress rules, and then tests the firewall policy from the VM.
- Required roles To get the permissions that you need to create a custom VPC network, VM, Cloud Router, Cloud NAT, global network firewall policy and its rules, and to view the logs, ask your administrator to grant you the following IAM roles on the project: Compute Network Admin role ( roles/compute.networkAdmin ) Compute Instance Admin (v1) role ( roles/compute.instanceAdmin.v1 ) Compute Security Admin role ( roles/compute.securityAdmin ) Logs Viewer role ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To verify that the egress traffic is blocked to any other destination, specify any FQDN and run the following command: curl -m 2 -I https://mail.yahoo.com The preceding command returns a Connection timed out message, which is expected because you created a firewall rule to deny egress traffic to all destinations except https://ads.google.com .
- Home Documentation Networking Cloud NGFW Guides Send feedback Configure a global network firewall policy to allow egress traffic to an FQDN Stay organized with collections Save and categorize content based on your preferences.

