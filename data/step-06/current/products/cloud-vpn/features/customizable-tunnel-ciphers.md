---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.030Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Customizable tunnel ciphers"
feature_slug: "customizable-tunnel-ciphers"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/best-practices"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting"
keywords:
  - "customizable"
  - "tunnel"
  - "ciphers"
  - "vpn"
  - "lets"
  - "you"
  - "configure"
  - "cipher"
---

# Customizable tunnel ciphers

Product: Cloud VPN
Coverage: MEDIUM

## Step 02 Summary

Cloud VPN lets you configure VPN tunnel cipher options to meet security requirements; Cloud VPN lets you configure VPN tunnel cipher options to meet security requirements.

## Extended Definition

Cloud VPN lets you configure VPN tunnel cipher options to meet security requirements; Cloud VPN lets you configure VPN tunnel cipher options to meet security requirements.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/best-practices](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/best-practices)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- To create the first tunnel, run the following command: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnTunnels { "name": "ha-vpn-gw-a-tunnel-0", "ikeVersion": 2, "peerExternalGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways/my-peer-gateway", "peerExternalGatewayInterface": 0, "router": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/router-a", "sharedSecret": " SHARED SECRET ", "vpnGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnGateways/ha-vpn-gw-a", "vpnGatewayInterface": 0 } If you plan to enable IPv6 in the BGP session associated with this tunnel, or configure ciphers, you must specify 2 for the ikeVersion .
- NAME REGION GATEWAY VPN INTERFACE PEER GATEWAY PEER INTERFACE tunnel-a-to-on-prem-if-1 us-central1 ha-vpn-gw-a 1 peer-gw 0 Configure ciphers For both the previous options, you can also configure cipher algorithms when creating Cloud VPN tunnels.
- Configure ciphers You can configure ciphers when creating Cloud VPN tunnels.
- For example, to configure ciphers for the VPN tunnel 0, run the following command: POST https://www.googleapis.com/compute/{version}/projects/ PROJECT ID /regions/ REGION /vpntunnels/ha-vpn-gw-a-tunnel-0 { "name": "ha-vpn-gw-a-tunnel-0", "ikeVersion": 2, "peerExternalGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways/my-peer-gateway", "peerExternalGatewayInterface": 0, "router": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/router-a", "sharedSecret": " SHARED SECRET ", "vpnGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnGateways/ha-vpn-gw-a", "vpnGatewayInterface": 0 "ciphers": { "phase1": { "encryption": "3DES-CBC,AES-GCM-16-192,AES-GCM-16-256", "integrity": "AES-XCBC-96,HMAC-SHA2-256-128", "prf": "PRF-AES128-XCBC,PRF-AES128-CMAC,PRF-HMAC-SHA1", "dh": "Group-14,Group-15,Group-16" }, "phase2": { "encryption": "AES-CBC-128,AES-GCM-16-192,AES-GCM-16-256", "integrity": "HMAC-SHA2-256-128,HMAC-SHA2-512-256", "pfs": "Group-14,Group-15,Group-16" } } } For phase 1, specify the following values: encryption : a comma-separated list of encryption algorithms that are supported for phase 1 IKE security association (SA) negotiations.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Configure ciphers in Cloud VPN tunnel With Cloud VPN, you can configure ciphers that help you tailor your VPN connections to meet compliance and security needs.
- You must configure ciphers from the supported list of ciphers that meet the following criteria: If you specify AEAD ciphers for encryption, you cannot specify separate ciphers for integrity because Cloud VPN uses the same encryption ciphers for handling integrity.
- You can configure cipher options when you create Cloud VPN tunnels.
- Configure two VPN tunnels from the perspective of the Cloud VPN gateway: If you have two peer VPN gateway devices , each of the tunnels from each interface on the Cloud VPN gateway must be connected to its own peer gateway.

### Best practices for Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/best-practices](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/best-practices)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have not configured the cipher algorithms, then the Cloud VPN tunnel proposes the cipher algorithms in the order shown in the supported cipher tables for each cipher role.
- To prevent frequent changes in cipher selection, configure your peer VPN gateway and the Cloud VPN tunnel to propose and accept only one cipher for each cipher role.
- For HA VPN tunnel pairs, configure both HA VPN tunnels on your peer VPN gateway to use the same cipher and IKE Phase 2 lifetime values.
- For more information, see View Monitoring dashboards Configure your peer VPN gateway with only one cipher for each cipher role Cloud VPN can act as an initiator or a responder to IKE requests depending on the origin of traffic when a new security association is needed.

### Troubleshooting \_|\_ Cloud VPN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting](https://docs.cloud.google.com/network-connectivity/docs/vpn/support/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you use supported ciphers to configure your peer VPN gateway.
- If the VPN logs show a no-proposal-chosen error, this error indicates that Cloud VPN and your peer VPN gateway were unable to agree on a set of ciphers.
- To avoid this error, create a VPN tunnel that connects your HA VPN gateway to one of the following: Another HA VPN gateway An external VPN gateway that is not hosted in Google Cloud Compute Engine virtual machine (VM) instances Unable to connect to external destination through HA VPN When you use an HA VPN gateway, Google Cloud resources use the VPN tunnel to connect to only the destinations that are advertised by the peer router.
- Common problems and solutions Tunnel creation fails due to reserved IP ranges Cloud VPN tunnel creation might fail because the peer IP address that you have used at the time of configuration falls within the RFC 5737 or RFC 5735 reserved IP addresses range.

