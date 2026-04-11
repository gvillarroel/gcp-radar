---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T05:21:46.866Z"
product_name: "Cloud VPN"
product_slug: "cloud-vpn"
feature_name: "Customizable tunnel ciphers"
feature_slug: "customizable-tunnel-ciphers"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes"
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
Coverage: LOW

## Step 02 Summary

Cloud VPN lets you configure VPN tunnel cipher options to meet security requirements; Cloud VPN lets you configure VPN tunnel cipher options to meet security requirements.

## Extended Definition

Cloud VPN lets you configure VPN tunnel cipher options to meet security requirements; Cloud VPN lets you configure VPN tunnel cipher options to meet security requirements.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)

## Supporting Pages

### Create an HA VPN gateway to a peer VPN gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- To create the first tunnel, run the following command: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnTunnels { "name": "ha-vpn-gw-a-tunnel-0", "ikeVersion": 2, "peerExternalGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways/my-peer-gateway", "peerExternalGatewayInterface": 0, "router": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/router-a", "sharedSecret": " SHARED SECRET ", "vpnGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnGateways/ha-vpn-gw-a", "vpnGatewayInterface": 0 } If you plan to enable IPv6 in the BGP session associated with this tunnel, or configure ciphers, you must specify 2 for the ikeVersion .
- NAME REGION GATEWAY VPN INTERFACE PEER GATEWAY PEER INTERFACE tunnel-a-to-on-prem-if-1 us-central1 ha-vpn-gw-a 1 peer-gw 0 Configure ciphers For both the previous options, you can also configure cipher algorithms when creating Cloud VPN tunnels.
- Configure ciphers You can configure ciphers when creating Cloud VPN tunnels.
- For example, to configure ciphers for the VPN tunnel 0, run the following command: POST https://www.googleapis.com/compute/{version}/projects/ PROJECT ID /regions/ REGION /vpntunnels/ha-vpn-gw-a-tunnel-0 { "name": "ha-vpn-gw-a-tunnel-0", "ikeVersion": 2, "peerExternalGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways/my-peer-gateway", "peerExternalGatewayInterface": 0, "router": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/router-a", "sharedSecret": " SHARED SECRET ", "vpnGateway": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /vpnGateways/ha-vpn-gw-a", "vpnGatewayInterface": 0 "ciphers": { "phase1": { "encryption": "3DES-CBC,AES-GCM-16-192,AES-GCM-16-256", "integrity": "AES-XCBC-96,HMAC-SHA2-256-128", "prf": "PRF-AES128-XCBC,PRF-AES128-CMAC,PRF-HMAC-SHA1", "dh": "Group-14,Group-15,Group-16" }, "phase2": { "encryption": "AES-CBC-128,AES-GCM-16-192,AES-GCM-16-256", "integrity": "HMAC-SHA2-256-128,HMAC-SHA2-512-256", "pfs": "Group-14,Group-15,Group-16" } } } For phase 1, specify the following values: encryption : a comma-separated list of encryption algorithms that are supported for phase 1 IKE security association (SA) negotiations.

### Cloud VPN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Configure ciphers in Cloud VPN tunnel With Cloud VPN, you can configure ciphers that help you tailor your VPN connections to meet compliance and security needs.
- You must configure ciphers from the supported list of ciphers that meet the following criteria: If you specify AEAD ciphers for encryption, you cannot specify separate ciphers for integrity because Cloud VPN uses the same encryption ciphers for handling integrity.
- You can configure cipher options when you create Cloud VPN tunnels.
- Configure two VPN tunnels from the perspective of the Cloud VPN gateway: If you have two peer VPN gateway devices , each of the tunnels from each interface on the Cloud VPN gateway must be connected to its own peer gateway.

### Cloud VPN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes](https://docs.cloud.google.com/network-connectivity/docs/vpn/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see View Monitoring dashboards September 30, 2025 Feature Cloud VPN supports customizable cipher options for your VPN tunnels.
- June 12, 2025 Feature Cloud VPN supports customizable cipher options for your VPN tunnels.
- For more information, see Configure ciphers in Cloud VPN tunnel .
- For more information, see Configure ciphers in Cloud VPN tunnel .

