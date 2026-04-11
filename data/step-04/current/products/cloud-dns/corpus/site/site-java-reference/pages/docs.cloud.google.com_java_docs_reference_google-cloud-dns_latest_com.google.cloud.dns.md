---
title: "Package com.google.cloud.dns (2.86.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns
  title: "Package com.google.cloud.dns (2.86.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Package com.google.cloud.dns (2.86.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.86.0 (latest)
2.85.0
2.83.0
2.81.0
2.80.0
2.79.0
2.78.0
2.76.0
2.74.0
2.73.0
2.72.0
2.71.0
2.70.0
2.68.0
2.66.0
2.65.0
2.62.0
2.61.0
2.60.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.50.0
2.49.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.38.0
2.37.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.26.0
2.25.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.0
2.2.0
2.1.8
2.0.9
GitHub Repository
This package is not the recommended entry point to using this client library!
For this library, we recommend using com.google.cloud.dns.spi.v1 for new applications.
Classes
Class
Description
com. google. cloud. dns. Change Request
An immutable class representing an atomic update to a collection of RecordSet s within a
Zone .
See Also: Google Cloud DNS documentation
com. google. cloud. dns. Change Request. Builder
A builder for ChangeRequest s.
com. google. cloud. dns. Change Request Info
A class representing an atomic update to a collection of RecordSet s within a
Zone .
See Also: Google Cloud DNS documentation
com. google. cloud. dns. Change Request Info. Builder
A builder for ChangeRequestInfo .
com. google. cloud. dns. Change Request Info. Status
This enumerates the possible states of a change request.
See Also: Google Cloud DNS documentation
com. google. cloud. dns. Dns. Change Request List Option
Class for specifying change request listing options.
com. google. cloud. dns. Dns. Change Request Option
Class for specifying change request field options.
com. google. cloud. dns. Dns. Project Option
Class for specifying project options.
com. google. cloud. dns. Dns. Record Set List Option
Class for specifying record set listing options.
com. google. cloud. dns. Dns. Zone List Option
Class for specifying zone listing options.
com. google. cloud. dns. Dns. Zone Option
Class for specifying zone field options.
com. google. cloud. dns. Dns Batch
A batch of operations to be submitted to Google Cloud DNS using a single RPC request.
com. google. cloud. dns. Dns Batch Result
This class holds a single result of a batch call to the Cloud DNS.
com. google. cloud. dns. Dns Options
com. google. cloud. dns. Dns Options. Builder
com. google. cloud. dns. Dns Options. Default Dns Factory
com. google. cloud. dns. Dns Options. Default Dns Rpc Factory
com. google. cloud. dns. Project Info
The class provides the Google Cloud DNS information associated with this project. A project is a
top level container for resources including Zone s. Projects can be created only in the
APIs console.
See Also: Google Cloud DNS documentation
com. google. cloud. dns. Project Info. Quota
This class represents quotas assigned to the ProjectInfo .
See Also: Google Cloud DNS documentation
com. google. cloud. dns. Record Set
A class that represents a Google Cloud DNS record set.
A RecordSet is the unit of data that will be returned by the DNS servers upon a DNS
request for a specific domain. The RecordSet holds the current state of the DNS records
com. google. cloud. dns. Record Set. Builder
A builder for RecordSet .
com. google. cloud. dns. Record Set. Type
Enum for the DNS record types supported by Cloud DNS.
Google Cloud DNS currently supports records of type A, AAAA, CAA, CNAME, MX NAPTR, NS, PTR,
SOA, SPF, SRV, TXT.
com. google. cloud. dns. Zone
A Google Cloud DNS Zone object.
A zone is the container for all of your record sets that share the same DNS name prefix, for
example, example.com. Zones are automatically assigned a set of name servers when they are
com. google. cloud. dns. Zone. Builder
Builder for Zone .
com. google. cloud. dns. Zone Info
A Zone represents a DNS zone hosted by the Google Cloud DNS service. A zone is a subtree
of the DNS namespace under one administrative responsibility. See Google Cloud DNS documentation for
more information.
com. google. cloud. dns. Zone Info. Builder
Builder for ZoneInfo .
com. google. cloud. dns. Zone Info. Dns Sec Config
This class represents the DNSSEC configuration.
com. google. cloud. dns. Zone Info. Dns Sec Config. Builder
com. google. cloud. dns. Zone Info. Key Spec
This class represents the DNS key spec.
com. google. cloud. dns. Zone Info. Key Spec. Builder
Interfaces
Interface
Description
com. google. cloud. dns. Dns
An interface for the Google Cloud DNS service.
See Also: Google Cloud DNS
com. google. cloud. dns. Dns Factory
An interface for Dns factories.
Enums
Enum
Description
com. google. cloud. dns. Dns. Change Request Field
The fields of a change request.
These values can be used to specify the fields to include in a partial response when calling
Dns#applyChangeRequest(String, ChangeRequestInfo, ChangeRequestOption...) The ID is
com. google. cloud. dns. Dns. Project Field
The fields of a project.
These values can be used to specify the fields to include in a partial response when calling
Dns#getProject(ProjectOption...) . Project ID is always returned, even if not specified.
com. google. cloud. dns. Dns. Record Set Field
The fields of a record set.
These values can be used to specify the fields to include in a partial response when calling
Dns#listRecordSets(String, RecordSetListOption...) . The name and type are always
com. google. cloud. dns. Dns. Sorting Order
The sorting order for listing.
com. google. cloud. dns. Dns. Zone Field
The fields of a zone.
These values can be used to specify the fields to include in a partial response when calling
Dns#getZone(String, ZoneOption...) . The name is always returned, even if not specified.
Exceptions
Exception
Description
com. google. cloud. dns. Dns Exception
DNS service exception.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
