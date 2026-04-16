---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.928Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Organization-scoped address groups"
feature_slug: "organization-scoped-address-groups"
latest_feature_date: "2025-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/address-groups-overview"
  - "https://docs.cloud.google.com/armor/docs/address-groups-using"
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory"
keywords:
  - "organization"
  - "scoped"
  - "address"
  - "groups"
  - "that"
  - "can"
  - "be"
  - "used"
---

# Organization-scoped address groups

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Address groups that can be used in security policies at the organization scope; Address groups that can be used in security policies at the organization scope.

## Extended Definition

Address groups that can be used in security policies at the organization scope; Address groups that can be used in security policies at the organization scope.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/address-groups-overview](https://docs.cloud.google.com/armor/docs/address-groups-overview)
- [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)

## Supporting Pages

### Address groups overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/address-groups-overview](https://docs.cloud.google.com/armor/docs/address-groups-overview)
- Source ID: `site-iam-reference`
- Final score: 318
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Organization-scoped address groups Use organization-scoped address groups when you want to define a central list of IP addresses that can be used in high-level rules to provide consistent control for the entire organization and reduce the overhead for individual network and project owners to maintain common lists, such as trusted services and internal IP addresses.
- Address groups are categorized into the following types: Project-scoped address groups Organization-scoped address groups An address group can be either project-scoped or organization-scoped, but not both.
- Name: The address group name with the following format: A string 1-63 characters long Includes only alphanumeric characters Must not start with a number You can construct a unique URL identifier for an address group in the following format: <containerType>/<containerId>/locations/<location>/addressGroups/<address-group-name> For example, a global address group example-address-group in project myproject has the following unique 4-tuple identifier: projects/myproject/locations/global/addressGroups/example-address-group Each address group has an associated type that can be either IPv4 or IPv6, but not both.
- You can't use project-scoped address groups in any security policies outside of the project in which they exist, but you can share organization-scoped address groups with security policies across your entire organization; this makes organization-scoped address groups with security policies especially helpful when you use them with hierarchical security policies.

### Configure address groups \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using)
- Source ID: `site-iam-reference`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud The following example uses the gcloud network-security org-address-groups create command to create an organization-scoped address group called GROUP NAME with a capacity of 1,000 IPv4 addresses, which can be used with both Cloud Armor or Cloud NGFW: gcloud network-security org-address-groups create GROUP NAME \ --location global \ --description "org address group description" \ --capacity 1000 \ --type IPv4 \ --purpose DEFAULT,CLOUD ARMOR Alternatively, you can create an organization-scoped address group with a larger capacity by setting the purpose exclusively to CLOUD ARMOR .
- Click Create . gcloud The following example uses the gcloud network-security address-groups create command to create an address group called GROUP NAME with a capacity of 1,000 IPv4 addresses, which can be used with both Cloud Armor or Cloud NGFW: gcloud network-security address-groups create GROUP NAME \ --location global \ --description "address group description" \ --capacity 1000 \ --type IPv4 \ --purpose DEFAULT,CLOUD ARMOR Alternatively, you can create an address group with a larger capacity by setting the purpose exclusively to CLOUD ARMOR .
- Click Save . gcloud The following example uses the gcloud network-security org-address-groups remove-items command to remove the IP addresses 192.168.1.2 , 192.168.1.8 , and 192.168.1.9 that you added in the previous command: gcloud network-security org-address-groups remove-items GROUP NAME \ --location global \ --items 192.168.1.2,192.168.1.8,192.168.1.9 Clone an organization-scoped address group Use the following steps to clone items from an address group: Console In the Google Cloud console, go to the Address groups page.
- Click Clone . gcloud In the following example, you use the gcloud network-security org-address-groups clone-items command to clone the IP addresses from a source address group SOURCE GROUP NAME into a target address group GROUP NAME : gcloud network-security org-address-groups clone-items GROUP NAME \ --location global \ --source SOURCE GROUP NAME Delete an organization-scoped address group You can't delete an organization-scoped address group if it is referenced by a resource, including a firewall policy or security policy.

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.
- They can be simultaneously applied to a backend service regardless of the resources that the backend service points to—for example, instance groups or network endpoint groups.
- You can configure Cloud Armor to block gRPC calls from being established, for example, by using an IP address denylist that blocks the client's IP address.
- Cloud Armor security policies are available for the following load balancer and endpoint types: All external Application Load Balancers, including classic Application Load Balancers Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) External passthrough Network Load Balancer (TCP/UDP) External protocol forwarding VMs with external IPv4 addresses or external IPv6 address ranges assigned to a network interface (NIC) The load balancer can be in Premium Tier or Standard Tier .

### "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs The Search Active Directory action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Output messages Available Script result Available JSON result The following example shows the JSON result output received when using the Search Active Directory action: [ { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ " GUID " ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example" ], "name" : [ "user" ], "memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ] } ] Output messages The Search Active Directory action can return the following output messages: Output message Message description Successfully performed the query " QUERY STRING " in Active Directory.
- JSON result The following example shows the JSON result output received when using the Get Manager Contact Details action: [ { "EntityResult" : { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ "{id}" ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example" ], "name" : [ "user" ], "memberOf" : [ "CN= u05e7 u05d1 u05d5 u05e6 u05d4 u05d1 u05e2 u05d1 u05e8 u05d9 u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ] }, "Entity" : "user@example.com" } ] Output messages The Ping action can return the following output messages: Output message Message description All entities were processed successfully.
- JSON result The following example shows the JSON result output received when using the Enrich Entities action: [ { "EntityResult" : { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ " GUID " ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example user" ], "name" : [ "user" ], "memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ]}, "Entity" : "user@example.com" } ] Script result The following table lists the value for the script result output when using the Enrich Entities action: Script result name Value is success True or False Force Password Update Use the Force Password Update action to require a user to change their password upon the following sign-in.
- Action outputs The Is User in Group action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example shows the JSON result output received when using the Is User in Group action: [ { "EntityResult" : true , "Entity" : "USER1@EXAMPLE.COM" }, { "EntityResult" : false , "Entity" : "USER2@EXAMPLE.COM" }, { "EntityResult" : true , "Entity" : "USER3@EXAMPLE.COM" } ] Script result The following table lists the value for the script result output when using the Is User in Group action: Script result name Value is success True or False List User Groups Use the List User Groups action to obtain a list of all user groups that are available in Active Directory.

