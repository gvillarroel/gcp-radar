---
title: "DNS Client \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dns/latest/client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dns/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dns/latest/client
  title: "DNS Client \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
DNS Client
Stay organized with collections
Save and categorize content based on your preferences.
0.36.1 (latest)
0.36.0
0.35.1
0.34.2
0.33.1
0.32.3
0.31.0
0.30.2
Client for interacting with the Google Cloud DNS API.
class google.cloud.dns.client.Client(project=None, credentials=None, _http=None, client_info=None, client_options=None)
Bases: google.cloud.client.ClientWithProject
Client to bundle configuration needed for API requests.
Parameters
project ( str ) – the project which the client acts on behalf of. Will be
passed when creating a zone. If not passed,
falls back to the default inferred from the environment.
credentials ( Credentials ) – (Optional) The OAuth2 Credentials to use for this
client. If not passed (and if no _http object is
passed), falls back to the default inferred from the
environment.
_http ( Session ) – (Optional) HTTP object to make requests. Can be any object
that defines request() with the same interface as
requests.Session.request() . If not passed, an
_http object is created that is bound to the
credentials for the current object.
This parameter should be considered private, and could
change in the future.
client_info ( ClientInfo ) – The client info used to send a user-agent string along with API
requests. If None , then default info will be used. Generally,
you only need to set this if you’re developing your own library
or partner tool.
client_options ( ClientOptions
or dict ) – (Optional) Client options used to set user options
on the client. API Endpoint should be set through client_options.
SCOPE( : Union[Tuple[ str , ...], None = (' https://www.googleapis.com/auth/ndev.clouddns.readwrite ', )
The scopes required for authenticating as a Cloud DNS consumer.
list_zones(max_results=None, page_token=None)
List zones for the project associated with this client.
See
https://cloud.google.com/dns/api/v1/managedZones/list
Parameters
max_results ( int ) – maximum number of zones to return, If not
passed, defaults to a value set by the API.
page_token ( str ) – Optional. If present, return the next batch of
zones, using the value, which must correspond to the
nextPageToken value returned in the previous response.
Deprecated: use the pages property of the returned iterator
instead of manually passing the token.
Return type
Iterator
Returns
Iterator of ManagedZone
belonging to this project.
quotas()
Return DNS quotas for the project associated with this client.
See
https://cloud.google.com/dns/api/v1/projects/get
Return type
mapping
Returns
keys for the mapping correspond to those of the quota
sub-mapping of the project resource. kind is stripped
from the results.
zone(name, dns_name=None, description=None)
Construct a zone bound to this client.
Parameters
name ( str ) – Name of the zone.
dns_name ( str ) – (Optional) DNS name of the zone. If not passed, then calls to
zone.create() will fail.
description ( str ) – (Optional) the description for the zone. If not passed, defaults
to the value of ‘dns_name’.
Return type
google.cloud.dns.zone.ManagedZone
Returns
a new ManagedZone instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
