---
title: "Search for resources in Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/search-assets
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/search-assets
  title: "Search for resources in Knowledge Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Search for resources in Knowledge Catalog
Stay organized with collections
Save and categorize content based on your preferences.
Knowledge Catalog (formerly Dataplex Universal Catalog) provides a powerful search feature that lets you find and manage data assets across
your organization through a unified discovery experience.
Knowledge Catalog uses AI-powered natural language search, allowing you
to ask questions in plain language to find the data you need.
Knowledge Catalog offers two search modes:
Keyword search lets you find resources using specific keywords, filters, and a
defined syntax.
Natural language search leverages AI to support semantic search queries. It
lets you find resources using everyday language, eliminating the need for
complex syntax.
Use cases
The Knowledge Catalog search feature offers the following
experiences for various organizations and stakeholders:
Self-service data discovery: Empower analytics and data science teams
to quickly find, understand, and trust relevant data for BI dashboards,
machine learning models, and generative AI applications. For example, a
retail company can quickly locate all datasets related to customer behavior
to build a recommendation engine.
Centralized governance and compliance: Enable data stewards to manage
metadata, classify sensitive data, and monitor access in one place. This
helps financial institutions meet stringent regulatory reporting requirements
by maintaining a clear data lineage for risk analysis.
Enterprise-wide data visibility: Break down data silos by providing a
single catalog for all your data, whether it's in BigQuery,
Cloud SQL, Cloud Storage, or on-premises systems. This allows
healthcare organizations to create a unified view of patient data for better
clinical insights.
How it works
Knowledge Catalog automatically indexes metadata from
integrated Google Cloud data sources such as BigQuery and
Cloud SQL, and provides connectors to ingest metadata from other systems,
creating a comprehensive, organization-wide catalog. Think of it like a smart
library catalog for all your data: you can search for data assets using either
keyword search with rich filters or by asking questions in natural language,
such as show me tables with revenue data . Streamline data discovery with
AI-powered search that surfaces most relevant files, tables, and datasets by
understanding your intent. This feature provides comprehensive technical details
and business context to ensure you find exactly what you need.
Search scope
The search results in Knowledge Catalog respect permissions that
you have over the corresponding resources in source systems.
For example, if you have BigQuery metadata read access to an
object, that object appears in your Knowledge Catalog search
results. If you have access to a BigQuery table but not to the
dataset containing that table, the table still shows up as expected in the
Knowledge Catalog search.
By default, search is scoped to your organization. Results include only
resources from the same organization as the project you're searching in.
The search results include only those resources that belong to the same VPC Service Controls
perimeter as the project under which search is performed. When using the
Google Cloud console, this is the project that is selected in the
console.
To broaden the scope of your search results beyond the resources within your
project's VPC Service Controls perimeter, use
VPC Service Controls ingress and egress rules .
These rules facilitate private and efficient data exchange across your
organization. You can configure ingress and egress rules using the
Google Cloud console or through JSON or YAML files. Refer to the following YAML
example and consult the VPC Service Controls documentation
to tailor the rule to your specific requirements.
egressPolicies :
- egressFrom :
identityType : ANY_USER_ACCOUNT
egressTo :
# Specify which resources should be present in the search results. In this example,
# BigQuery.
operations :
- methodSelectors :
- method : '*'
serviceName : bigquery.googleapis.com
# Specify project ids under which the search is performed.
resources :
- projects/ SEARCH_PROJECT_ID
ingressPolicies :
- ingressFrom :
identityType : ANY_USER_ACCOUNT
sources :
- accessLevel : '*'
ingressTo :
# Specify which resources should be present in the search results. In this example,
# BigQuery.
operations :
- methodSelectors :
- method : '*'
serviceName : bigquery.googleapis.com
# Specify project ids to expose in search results.
resources :
- projects/ INGRESS_PROJECT_ID
For more information about the Identity and Access Management roles that you need to use
Knowledge Catalog search,
see Knowledge Catalog IAM roles .
Note: Permissions propagation to search might be delayed if the change affects
a large number of resources or principals.
Isolate search results by environment using VPC Service Controls
To isolate Knowledge Catalog search results between environments
like development, test, and production,
configure separate VPC Service Controls perimeters
for each environment. Assign both the projects that contain the data assets and the projects that are used
for performing searches to the corresponding environment's perimeter.
Searches that are performed from a project within a specific perimeter will
only return results for assets that are also located within that same perimeter.
Recall limitations in search
Knowledge Catalog search queries don't guarantee full recall.
Results that match your query mightn't be returned. Additionally, returned
(and not returned) results can vary if you repeat search queries.
To query all Knowledge Catalog metadata, you can export the
metadata to Cloud Storage and then query it from BigQuery.
For more information, see Export metadata .
Filters
Filters let you narrow down the search results. Filters are available in both
keyword and natural language search, but the available options might differ
slightly depending on the mode.
When you provide filters in multiple sections, they are evaluated using the
AND logical operator. The search results contain resources that match at least
one condition from every selected section. For example, if you select the
BigQuery system and the dataset resource type, the search
results includes BigQuery datasets but not
Vertex AI datasets.
If you select multiple filters within a single section, they are evaluated using
the OR logical operator. For example, if you select the dataset resource type
and the table resource type, the search results includes both datasets and
tables.
Keyword search filters
For keyword search, filters are grouped into the following sections:
Systems such as BigQuery, Cloud SQL, and others. The
Knowledge Catalog system contains custom entries.
Aspects (tags) list all aspects available to you.
Project lists all projects available to you.
Type aliases describe resource types, such as databases, datasets,
models, tables, views, services, and custom types.
Datasets come from BigQuery.
Filter by aspect value
Note: The Aspects filter doesn't support aspects on entry links.
The Aspects filters let you query for assets tagged using a specific
template. You can use the Customize menu to further refine results and
filter by specific aspect values. The aspect value filter conditions depend on
that aspect field's data type. For example, for the datetime and number
fields, you can specify a specific date or a range.
Filter visibility
The filters Systems , Type aliases , Project , and Datasets are
displayed depending on the current query in the Search field.
Note: Filter sets aren't refreshed if you change selected filters. For example,
if you select the BigQuery system in the Systems section, the
data type filters don't narrow down to the BigQuery-specific
filters such as table, view, or dataset.
Natural language search filters
For natural language search, the following filters are available:
Scope : search across the organization (default), the current project,
or only for starred resources. For more information, see the
Search scope section of this document.
Systems : the Google Cloud service that the resource belongs to,
such as BigQuery. The Knowledge Catalog system
contains entry groups .
Projects : the projects to search in.
Type : the resource type, such as BigQuery connection,
Cloud Storage bucket, or database. Depending on the
resource type, you can also filter by subtype, such as the connection
type or SQL dialect.
Select locations : the locations to search in.
Select datasets : the search results are limited to BigQuery
resources that belong to the selected BigQuery datasets.
In the Type to filter field, enter the name of the dataset.
Aspect types : the Knowledge Catalog
aspect types that
are associated with the resource that you're searching for. To filter by
aspect values, click Filter on annotation values , and then select the
values.
Note: The Aspect types filter doesn't support aspects on entry links.
Before you begin
Before you perform search, ensure that you are granted the required roles and
have enabled the necessary API.
Required roles
This section describes the roles and permissions required to search for
resources and to access the search results.
For more information about granting roles, see
Manage access .
You might also be able to get the required permissions through
custom roles or other
predefined roles .
Required roles for searching entries
To search for entries, you need at least one of the following
IAM roles
on the project that is used for search: Dataplex Catalog Admin,
Dataplex Catalog Editor, or Dataplex Catalog Viewer. Permissions on search
results are checked independently of the selected project.
Required roles for accessing search results
The search results in Knowledge Catalog are scoped according to
your role. To search for an asset in Knowledge Catalog, you must
have permissions to access the corresponding resource in the source system.
For more information, see the Search scope section
of this document.
For example, to search for BigQuery datasets, tables, views, and
models, you need respective permissions for those entries. For more information,
see
BigQuery permissions .
The following list describes the minimum permissions required:
To search for a table, you need bigquery.tables.get permission for that
table.
To search for a dataset, you need bigquery.datasets.get permission for that
dataset.
To search for metadata for a dataset or a table, you need the
BigQuery Metadata Viewer role ( roles/bigquery.metadataViewer ).
As another example, to search for Cloud SQL instances, databases, schemas,
tables, and views, you need respective permissions on those entries. For more
information, see
Cloud SQL roles and permissions .
To search for custom entries, you need the Dataplex Catalog Viewer role
( roles/dataplex.catalogViewer ).
Enable the API
Enable the Dataplex API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Search for resources
Console
To search for resources, follow these steps:
In the Google Cloud console, go to the Knowledge Catalog Search
page.
Go to Search
If your search platform is set to Data Catalog , in the
Choose search platform menu, select Knowledge Catalog .
Selecting Knowledge Catalog lets you search the
Knowledge Catalog metadata storage. Selecting
Data Catalog lets you search your Data Catalog
repository, if you're an existing Data Catalog user.
To use keyword search, follow these steps:
In the Find resources across projects field, enter your query.
To refine your search, use the Filters panel.
For the list of available filters, see
Keyword search filters .
You can manually add the following filters:
Add a project filter: in Project , click Add project . Search
for a specific project, select the project, and then click Open .
Add an aspect type filter: in Aspects , click the
Add more aspect types menu. Search for a specific template, select
it, and then click OK .
Optional: In addition to the assets available to you, you can search for
resources that are publicly available in Google Cloud by selecting
Include public datasets .
Use the following tips to construct a search query:
Enclose your search expression in quotes if it contains spaces. For
example, "search terms" .
Precede a keyword with NOT to match the logical negation of the
keyword:term filter. You can also use AND and OR Boolean
operators to combine search expressions. The AND , OR , and NOT
operators aren't case-sensitive.
For example, NOT column:term lists all columns except those that
match the specified term. For a list of keywords and other terms you
can use in a Knowledge Catalog search expression, see
Search syntax .
To use natural language search, follow these steps:
Click Try natural language search .
In the Find resources across projects with natural language field,
enter your query in natural language and then press Enter .
The following are some sample queries:
Show me the datasets that contain taxi information
Find data on vaccine distribution across different countries
Get tables with historical temperature data for major world cities
Search for hurricane tracking and storm activity datasets
Population data by country
To refine your search, click Filters .
For the list of available filters, see
Natural language search filters .
To view more information about the searched resource, in the search results,
click the resource name. This opens the entry details page.
gcloud
To search for resources, use the
gcloud dataplex entries search command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax ;
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Dataplex.V1 ;
using System ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for SearchEntries</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void SearchEntriesRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
SearchEntriesRequest request = new SearchEntriesRequest
{
LocationName = LocationName . FromProjectLocation ( "[PROJECT]" , "[LOCATION]" ),
Query = "" ,
OrderBy = "" ,
Scope = "" ,
SemanticSearch = false ,
};
// Make the request
PagedEnumerable<SearchEntriesResponse , SearchEntriesResult > response = catalogServiceClient . SearchEntries ( request );
// Iterate over all response items, lazily performing RPCs as required
foreach ( SearchEntriesResult item in response )
{
// Do something with each item
Console . WriteLine ( item );
}
// Or iterate over pages (of server-defined size), performing one RPC per page
foreach ( SearchEntriesResponse page in response . AsRawResponses ())
{
// Do something with each page of items
Console . WriteLine ( "A page of results:" );
foreach ( SearchEntriesResult item in page )
{
// Do something with each item
Console . WriteLine ( item );
}
}
// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10 ;
Page<SearchEntriesResult> singlePage = response . ReadPage ( pageSize );
// Do something with the page of items
Console . WriteLine ( $"A page of {pageSize} results (unless it's the final page):" );
foreach ( SearchEntriesResult item in singlePage )
{
// Do something with each item
Console . WriteLine ( item );
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage . NextPageToken ;
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
"google.golang.org/api/iterator"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . SearchEntriesRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#SearchEntriesRequest.
}
it := c . SearchEntries ( ctx , req )
for {
resp , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
// If you need to access the underlying RPC response,
// you can do so by casting the `Response` as below.
// Otherwise, remove this line. Only populated after
// first call to Next(). Not safe for concurrent access.
_ = it . Response .( * dataplexpb . SearchEntriesResponse )
}
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. LocationName ;
import com.google.cloud.dataplex.v1. SearchEntriesRequest ;
import com.google.cloud.dataplex.v1. SearchEntriesResult ;
public class SyncSearchEntries {
public static void main ( String [] args ) throws Exception {
syncSearchEntries ();
}
public static void syncSearchEntries () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
SearchEntriesRequest request =
SearchEntriesRequest . newBuilder ()
. setName ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setQuery ( "query107944136" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setScope ( "scope109264468" )
. setSemanticSearch ( true )
. build ();
for ( SearchEntriesResult element : catalogServiceClient . searchEntries ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_search_entries ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . SearchEntriesRequest (
name = "name_value" ,
query = "query_value" ,
)
# Make the request
page_result = client . search_entries ( request = request )
# Handle the response
for response in page_result :
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the search_entries call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#search_entries.
#
def search_entries
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: SearchEntriesRequest . new
# Call the search_entries method.
result = client . search_entries request
# The returned object is of type Gapic::PagedEnumerable. You can iterate
# over elements, and API calls will be issued to fetch pages as needed.
result . each do | item |
# Each element is of type ::Google::Cloud::Dataplex::V1::SearchEntriesResult.
p item
end
end
REST
To search for resources, use the
searchEntries method .
View details of an entry
Console
Use Knowledge Catalog search to view the details of an entry.
Search for an entry in Knowledge Catalog.
In the search results, click the entry for which you want to view the
details.
The entry details page opens. The page includes the following sections:
Entry details : includes information such as the entry type, system,
platform, fully qualified name, creation time, last modification time,
description, and stewards.
Overview : an overview of the entry, if available.
Aspects : the required and optional aspects defined for the entry.
For more information, see
Categories of aspects .
gcloud
To view the details of an entry, use the
gcloud dataplex entries lookup command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for LookupEntry</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void LookupEntryRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
LookupEntryRequest request = new LookupEntryRequest
{
Name = "" ,
View = EntryView . Unspecified ,
AspectTypes = { "" , },
Paths = { "" , },
EntryAsEntryName = EntryName . FromProjectLocationEntryGroupEntry ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_GROUP]" , "[ENTRY]" ),
};
// Make the request
Entry response = catalogServiceClient . LookupEntry ( request );
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . LookupEntryRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#LookupEntryRequest.
}
resp , err := c . LookupEntry ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. Entry ;
import com.google.cloud.dataplex.v1. EntryName ;
import com.google.cloud.dataplex.v1. EntryView ;
import com.google.cloud.dataplex.v1. LookupEntryRequest ;
import java.util.ArrayList ;
public class SyncLookupEntry {
public static void main ( String [] args ) throws Exception {
syncLookupEntry ();
}
public static void syncLookupEntry () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
LookupEntryRequest request =
LookupEntryRequest . newBuilder ()
. setName ( "name3373707" )
. setView ( EntryView . forNumber ( 0 ))
. addAllAspectTypes ( new ArrayList<String> ())
. addAllPaths ( new ArrayList<String> ())
. setEntry (
EntryName . of ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_GROUP]" , "[ENTRY]" ). toString ())
. build ();
Entry response = catalogServiceClient . lookupEntry ( request );
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_lookup_entry ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . LookupEntryRequest (
name = "name_value" ,
entry = "entry_value" ,
)
# Make the request
response = client . lookup_entry ( request = request )
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the lookup_entry call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#lookup_entry.
#
def lookup_entry
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: LookupEntryRequest . new
# Call the lookup_entry method.
result = client . lookup_entry request
# The returned object is of type Google::Cloud::Dataplex::V1::Entry.
p result
end
REST
To view the details of an entry, use the
lookupEntry method .
Limitations
The following are the limitations of natural language search:
Natural language search is optimized for discovery and exploration by
returning a limited set of the most relevant results. It might not provide an
exhaustive list of all matching items and therefore might not be suitable for
workloads depending on this, such as curation pipelines.
Natural language search takes into account only the resource metadata,
including schemas, descriptions, and aspects attached to entries. It doesn't
answer questions about the data within the tables (for example, "What were
last month's sales?") or perform analytical queries on the metadata (for
example, "How many tables are in dataset X?").
Public resources are outside the scope of natural language search.
Aspects attached to entry links are outside the scope of natural language search.
What's next
Understand search syntax for Knowledge Catalog .
Learn more about metadata management in Knowledge Catalog .
Learn how to enrich entries and entry links with metadata using aspects .
Learn how to manage entries and ingest custom sources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
