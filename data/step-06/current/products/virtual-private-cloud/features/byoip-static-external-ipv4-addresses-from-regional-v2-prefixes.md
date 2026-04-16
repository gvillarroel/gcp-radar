---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.428Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "BYOIP static external IPv4 addresses from regional v2 prefixes"
feature_slug: "byoip-static-external-ipv4-addresses-from-regional-v2-prefixes"
latest_feature_date: "2026-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/subnets"
keywords:
  - "byoip"
  - "static"
  - "external"
  - "ipv4"
  - "addresses"
  - "from"
  - "regional"
  - "v2"
---

# BYOIP static external IPv4 addresses from regional v2 prefixes

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

This feature enables creating individual static external IPv4 addresses from BYOIP prefixes, limited to IPv4 regional v2 prefixes created after December 13, 2025, and available in GA.

## Extended Definition

This feature enables creating individual static external IPv4 addresses from BYOIP prefixes, limited to IPv4 regional v2 prefixes created after December 13, 2025, and available in GA.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)

## Supporting Pages

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Support for BYOIP addresses IPv4 BYOIP addresses can be used with most resources that support static external IP addresses.
- Stateful managed instance groups (MIGs) support using IPv4 BYOIP addresses for configuring static IP addresses on VM creation in a MIG .
- You can use IPv4 BYOIP addresses to create external forwarding rules used with GKE ingress for external Application Load Balancers .
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Limit name: STATIC-BYOIP-ADDRESSES-per-project-region Metric: compute.googleapis.com/regional static byoip addresses Static BYOIP IP addresses global The number of bring your own IP global external IP addresses that you can create in your project.
- Bring your own IP (BYOIP) Static BYOIP IP addresses The number of bring your own IP regional external IP addresses that you can reserve in each region in your project.
- External IP addresses Static IP addresses The number of static regional external IPv4 addresses that you can reserve in each region in your project.
- Internal IP addresses Internal IP addresses The number of static regional internal IPv4 addresses that you can reserve in each region in your project.

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Use private.googleapis.com to access Google APIs and services by using a set of IP addresses only routable from within Google Cloud.
- Access APIs from VMs with external IP addresses A virtual machine (VM) instance with an external IP address assigned to its network interface can connect to Google APIs and services if the network requirements described on this page are met.
- Google also publishes a list of global and regional external IP addresses ranges available for customers' Google Cloud resources in cloud.json .
- IPSet () for e in data [ "prefixes" ]: if "ipv4Prefix" in e : cidrs . add ( e . get ( "ipv4Prefix" )) if "ipv6Prefix" in e : cidrs . add ( e . get ( "ipv6Prefix" )) return cidrs def main (): cidrs = { group : get data ( link ) for group , link in IPRANGE URLS . items ()} if len ( cidrs ) != 2 : raise ValueError ( "ERROR: Could process data from Google" ) print ( "IP ranges for Google APIs and services default domains:" ) for ip in ( cidrs [ "goog" ] - cidrs [ "cloud" ]) . iter cidrs (): print ( ip ) if name == " main " : main () Note: In the past, Google Cloud published a list of IP address ranges in the spf.google.com DNS TXT record (and the records it referenced).

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- If you reserve a static regional external IPv6 /96 range from a BYOIP-provided IPv6 subnet range, you must specify VM for the endpoint type.
- A subnet's external IPv6 address range comes from one of the following sources: By default : Google Cloud assigns an unused /64 GUA range from Google's regional external IPv6 addresses .
- If using BYOIP external IPv6 addresses, the IPv6 address range comes from a BYOIP IPv6 address sub-prefix in forwarding rule creation mode .
- External (internet routable) GUAs : Automatically assigned from Google's regional external IPv6 addresses .

