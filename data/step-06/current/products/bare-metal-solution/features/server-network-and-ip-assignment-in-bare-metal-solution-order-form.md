---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.441Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Server network and IP assignment in Bare Metal Solution Order Form"
feature_slug: "server-network-and-ip-assignment-in-bare-metal-solution-order-form"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/order-bms-resources"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-deploy"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-setup"
keywords:
  - "assignment"
  - "network"
  - "order"
  - "server"
---

# Server network and IP assignment in Bare Metal Solution Order Form

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Enables assigning networks and IP addresses to each server as part of Order Form deployment.

## Extended Definition

Enables assigning networks and IP addresses to each server as part of Order Form deployment.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)

## Supporting Pages

### Order Bare Metal Solution resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use procurements to order the following Bare Metal Solution resources: Servers ( available server configurations ) Storage ( available storage choices ) Partner Interconnect bandwidth To procure any other Bare Metal Solution resource, contact Google Cloud sales .
- The following pages show you the pods that contain your existing resources: Servers Networks Volumes NFS Shares If you're unsure about which pod to select, contact Google Cloud Sales .
- As your resources are procured, you can provision them through the following options and start using them: Google Cloud console intake form Create a network UI Create a storage volume UI Create an NFS volume UI What's next Deploy your Bare Metal Solution environment .
- After you've executed a simplified, one-time Bare Metal Solution Order Form, you can order your Bare Metal Solution resources online by creating procurements through the Google Cloud console.

### "Quickstart: Set up Google Cloud to work with your Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Installing http server sudo yum install httpd sudo systemctl restart httpd Testing curl http://127.0.0.1:80 Create an instance group. gcloud compute instance-groups unmanaged create INSTANCE GROUP NAME --project= PROJECT ID --zone= ZONE Replace the following: INSTANCE GROUP NAME : the name of the instance group PROJECT ID : the ID of the project ZONE : the zone in which to create the instance group Add the VM to the instance group. gcloud compute instance-groups unmanaged add-instances INSTANCE GROUP NAME --project= PROJECT ID --zone= ZONE --instances= VM NAME Replace the following: INSTANCE GROUP NAME : the name of the instance group PROJECT ID : the ID of the project ZONE : the zone in which to create the instance group VM NAME : the name of the VM Create an internal passthrough Network Load Balancer: Start your configuration In the Google Cloud console, go to the Load balancing page.
- The following example, adds the 0.0.0.0/0 custom IP to the Cloud Router's advertisements: gcloud compute routers update-bgp-peer router-name \ --peer-name bgp-session-name \ --add-advertisement-ranges 0.0.0.0/0 Optionally, set the VPC Network Dynamic Routing Mode to global If you have Bare Metal Solution servers in two different regions, consider enabling global routing mode on the VPC network to have your Bare Metal Solution regions talk to each other directly over the VPC network.
- Add the network tag ( default-igw-tags ) that you just created to any existing VMs in your VPC network that need internet access, so that they can continue to access the internet after you create a new default route that your Bare Metal Solution servers can also use.
- Within your Bare Metal Solution environment, if you need to control network traffic between the bare-metal servers or between the servers and destinations not on Google Cloud, you need to implement a control mechanism yourself.

### Deploy your Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you start filling out the Bare Metal Solution intake form, do the following: Place your order for networking, servers, and storage with Google Cloud Sales .
- Before you begin, you need to decide which networks, servers, and storage components from your Bare Metal Solution order that you want to bring online.
- This can be a new subnet that you specified earlier in the Networks section, an existing subnet, or a subnet from another project. network-2 (192.168.2.0/24) Private address IP address for your server selected from the private subnet.
- This can be a new subnet that you specified earlier in the Networks section, an existing subnet, or a subnet from another project. network-1 (172.16.0.0/24) Client address IP address for your server selected from the client subnet.

