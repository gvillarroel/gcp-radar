---
title: "Interface ConfigureDnsSettingsRequestOrBuilder (1.85.0) \_|\_ Java client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ConfigureDnsSettingsRequestOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ConfigureDnsSettingsRequestOrBuilder
  title: "Interface ConfigureDnsSettingsRequestOrBuilder (1.85.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface ConfigureDnsSettingsRequestOrBuilder (1.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.85.0 (latest)
1.84.0
1.82.0
1.80.0
1.79.0
1.78.0
1.77.0
1.75.0
1.73.0
1.72.0
1.71.0
1.70.0
1.69.0
1.67.0
1.65.0
1.64.0
1.61.0
1.60.0
1.59.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.49.0
1.48.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.37.0
1.36.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.24.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.0
1.8.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.6
0.7.0
0.6.1
0.5.4
public interface ConfigureDnsSettingsRequestOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getDnsSettings()
public abstract DnsSettings getDnsSettings ()
Fields of the DnsSettings to update.
.google.cloud.domains.v1.DnsSettings dns_settings = 2;
Returns
Type
Description
DnsSettings
The dnsSettings.
getDnsSettingsOrBuilder()
public abstract DnsSettingsOrBuilder getDnsSettingsOrBuilder ()
Fields of the DnsSettings to update.
.google.cloud.domains.v1.DnsSettings dns_settings = 2;
Returns
Type
Description
DnsSettingsOrBuilder
getRegistration()
public abstract String getRegistration ()
Required. The name of the Registration whose DNS settings are being updated,
in the format projects/*/locations/*/registrations/* .
string registration = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The registration.
getRegistrationBytes()
public abstract ByteString getRegistrationBytes ()
Required. The name of the Registration whose DNS settings are being updated,
in the format projects/*/locations/*/registrations/* .
string registration = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for registration.
getUpdateMask()
public abstract FieldMask getUpdateMask ()
Required. The field mask describing which fields to update as a comma-separated list.
For example, if only the name servers are being updated for an existing
Custom DNS configuration, the update_mask is
"custom_dns.name_servers" .
When changing the DNS provider from one type to another, pass the new
provider's field name as part of the field mask. For example, when changing
from a Google Domains DNS configuration to a Custom DNS configuration, the
update_mask is "custom_dns" . //
.google.protobuf.FieldMask update_mask = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
FieldMask
The updateMask.
getUpdateMaskOrBuilder()
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder ()
Required. The field mask describing which fields to update as a comma-separated list.
For example, if only the name servers are being updated for an existing
Custom DNS configuration, the update_mask is
"custom_dns.name_servers" .
When changing the DNS provider from one type to another, pass the new
provider's field name as part of the field mask. For example, when changing
from a Google Domains DNS configuration to a Custom DNS configuration, the
update_mask is "custom_dns" . //
.google.protobuf.FieldMask update_mask = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
FieldMaskOrBuilder
getValidateOnly()
public abstract boolean getValidateOnly ()
Validate the request without actually updating the DNS settings.
bool validate_only = 4;
Returns
Type
Description
boolean
The validateOnly.
hasDnsSettings()
public abstract boolean hasDnsSettings ()
Fields of the DnsSettings to update.
.google.cloud.domains.v1.DnsSettings dns_settings = 2;
Returns
Type
Description
boolean
Whether the dnsSettings field is set.
hasUpdateMask()
public abstract boolean hasUpdateMask ()
Required. The field mask describing which fields to update as a comma-separated list.
For example, if only the name servers are being updated for an existing
Custom DNS configuration, the update_mask is
"custom_dns.name_servers" .
When changing the DNS provider from one type to another, pass the new
provider's field name as part of the field mask. For example, when changing
from a Google Domains DNS configuration to a Custom DNS configuration, the
update_mask is "custom_dns" . //
.google.protobuf.FieldMask update_mask = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the updateMask field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
