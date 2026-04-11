---
title: "Customize search results ranking \_|\_ Vertex AI Search \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking
  title: "Customize search results ranking \_|\_ Vertex AI Search \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Customize search results ranking
Stay organized with collections
Save and categorize content based on your preferences.
Because search needs can differ for different industries and can vary from
time to time, the default ranking behavior might not be optimal for every business
need. To address this, you can modify the ranking behavior using custom ranking.
This page describes how to use a custom ranking formula in your search request
and how to tune the formula. This feature is available for structured,
unstructured, and website data.
Overview
Custom ranking lets you provide a mathematical expression that relies on a set
of model-computed signals, such as semantic relevance score and keyword
similarity score; and document-based signals, such as a custom field like
distance or document age.
With custom ranking, you can achieve the following:
Gain visibility : Understand which signals contribute to the final
ranking of your search results.
Tune existing signals : Adjust the weights of various signals like
semantic similarity, keyword matching, or document freshness.
Incorporate business logic : Add your own custom signals from your
document data directly into the ranking formula.
Optimize systematically : Use the open-source Python library to
programmatically discover the optimal ranking formula.
Need for custom ranking—an example
Consider a scenario where the following string is queried on a hotel
booking website:
luxury hotel with a large rooftop pool in Vancouver, pet-friendly and close to airport.
Say, the following entries are retrieved:
Hotel A: "Vancouver's premier luxury hotel overlooking the
airport . Features a stunning rooftop pool . No pets allowed. "
Hotel B: "Modern, stylish hotel in downtown
Vancouver . Pet-friendly with spacious rooms. Features a large indoor
pool and fitness center."
Hotel C: "A charming pet-friendly boutique
hotel near Aquarium (a 10-minute walk from downtown ). Features a lovely
garden courtyard. No pool. "
Hotel D: "An iconic rustic resort. Known for its exquisite dining and
impeccable service. Features an indoor pool and spa.
Pet-friendly options available on request."
All hotels in the catalog include a field distance_from_airport in kilometers
(km).
Embedding-based ranking
The search system converts the query into a single embedding. It then
compares this query embedding to the embeddings of all hotels in its catalog.
Hotels with embeddings that are numerically closest to the query's embedding are
ranked higher.
Here's the likely ranking from a purely embedding-based relevance search:
Ranking
Hotel
Possible reason for this ranking
1
Hotel A
Very strong semantic match for luxury, airport, rooftop pool. The
"no pets" isn't desirable, but the other strong matches dominate.
2
Hotel B
Good semantic match for "pet-friendly" and "pool". But "indoor"
instead of "rooftop", "modern" and "stylish" instead of "luxury" and
"downtown" instead of "airport" make it less relevant than A.
3
Hotel D
Strong semantic match for pet-friendly, large pool,
but "indoor" instead of "rooftop" and "rustic" instead of "luxury"
make it slightly less semantically relevant than A and D.
4
Hotel C
Strong pet-friendly, but "no pool" and "boutique" significantly
reduce its relevance to this specific query.
This ranking doesn't deliver the most relevant results. Hotel A is ranked at the
top, even though with "no pets allowed" it might not be preferred by many users.
Hotel D, fits many criteria, is ranked lower because its "rustic" status
doesn't necessarily map to "luxury" and the "indoor" pool is ranked lower than
exact matches of "large" and "outdoor".
Custom ranking
Say, you have configured the following ranking expression for this example
scenario. For information about the components of this expression, see
About implementing custom ranking .
rankingExpression = rr(semantic_similarity_score, 32) * 0.4 + rr(keyword_similarity_score, 32) * 0.3 + rr(c.distance_from_airport * -1, 32) * 0.8
Where distance_from_airport is a retrievable field in the catalog and
c.distance_from_airport acts as a signal.
In custom ranking, you consider different signals that influence the relevance
of a document. Then, you create a mathematical expression containing these
signals using a valid syntax . In this expression, you
normalize the signals and add weights to their derived scores. The final custom
score is calculated and the documents are ranked.
In this example, this process can be explained as follows:
Each hotel is awarded a semantic similarity score and a keyword similarity
score. Additionally, distance from the airport is an important signal
derived from the document.
The reciprocal rank transformation function or rr() is used to transform
all the scores to the same scale.
The score derived from each signal is given a weight and then the sum of
all the individual scores becomes the custom-ranking score for each hotel.
The different signals for each hotel are tabulated as follows:
Hotel
semantic_similarity_score
keyword_similarity_score
c.distance_from_airport
Custom ranking score
Custom ranking
Embedding-based ranking
Hotel A
9.0
6.2 ("airport", "luxury", "rooftop pool")
5.0
0.04879
2
1
Hotel B
7.5
5.6 ("pet-friendly", "downtown", "indoor pool",
"stylish")
12.5
0.04691
3
2
Hotel C
5.0
3.4 ("pet-friendly", "downtown")
18
0.04525
4
4
Hotel D
8.0
4.5 ("indoor pool", "pet-friendly", "rustic")
1
0.04890
1
3
Comparing the two ranking methods, custom ranking gives a more considered
ranking that likely matches a user's needs better than a purely embedding-based
ranking.
About implementing custom ranking
To get custom ranking in your search results, you must call the
search
method by providing the following fields:
Ranking expression backend ( rankingExpressionBackend ): This field
indicates which of the following ranking mechanisms is to be used.
RANK_BY_EMBEDDING : This is the default value when this field is
unspecified. Choosing this ranks the results according to a predefined
ranking expression that's either embedding-based or relevance-based.
RANK_BY_FORMULA : This overrides the default ranking and lets you provide
your custom formula in the rankingExpression field.
Ranking expression ( rankingExpression ): This field contains a
mathematical formula that decides the ranking of the retrieved documents.
For RANK_BY_EMBEDDING , this is either relevance-score based
( double * relevanceScore ) or embedding-based
( double * dotProduct(embedding_field_path) ).
For RANK_BY_FORMULA , this is a curated expression that combines
multiple signals to compute a new score for each search result.
Standard signals
Vertex AI Search offers a variety of signals that you can use
to formulate custom ranking. Here are the standard signals available:
Signal name
Description
default_rank
The default rank of the document as determined by the standard VAIS
ranking algorithm
semantic_similarity_score
A score computed based on query and content embeddings to determine
how similar is a search query to a document's content. This is computed
using a proprietary Google algorithm.
relevance_score
A score produced by a deep-relevance model, which handles complex
query-document interactions. The model determines the meaning and
intention of a query in the context of the content. This is computed
using a proprietary Google algorithm.
keyword_similarity_score
A score with a strong emphasis on keyword matching. This signal uses
the Best Match 25 (BM25) ranking function.
document_age
The age of the document in hours. Supports floating point values. For
example, a value of 0.5 means 30 minutes while 50 means 2 days
and 2 hours.
pctr_rank
A rank to denote predicted conversion rates, computed based on user
event data. This signal uses predicted Click-through rate (pCTR) to gauge
the relevance of a search result from a user's perspective.
topicality_rank
A rank to denote keyword similarity adjustment computed using a
proprietary Google algorithm.
boosting_factor
A combination of all custom boosts you have applied to the document.
Custom signals
In addition to the standard signals, you can use signals from any numeric custom
field in a document that is marked as retrievable. To do so, add c. prefix to
their field names. For example, if you have a custom field named
date_approved , then you can use c.date_approved as a custom signal.
Signal names are a combination of alphabetical characters and underscores ( _ ).
The following is a list of reserved names that can't be used as signal names:
log , exp , rr , is_nan , and fill_nan .
Geodistance—a derived signal
Private Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To access this feature, you must be on the allowlist. For more
information, contact your Google account manager.
Derived signals, such as geodistance, are computed based on standard and custom
signals. Geodistance is a function that computes the distance between a source
and a destination location. The geo_distance() function is expressed as
geo_distance(source_location, destination_location) . It is composed of the
following arguments:
The source location or source_location : The origin for calculating
distance, which can be one of the following types:
Query location : the location that's parsed from the query using
natural language understanding models. For example, in the query
Hotels along the M6 , the natural language understanding model extracts
Hotels as the what and M6 as the where part of the search
parameters. The where part is the query location and can be represented
as a point, polyline, circle, or polygon.
{
"query" : "Hotels along M6" ,
"ranking_expression" : "geo_distance(query_loc, c.hotel_location)" ,
"ranking_expression_backend" : "RANK_BY_FORMULA"
}
Request location coordinates : a location that's explicitly provided in
the search request, such as a user's latitude and longitude. For example,
you can provide the query as Hotels and provide a location using the
latitude and longitude.
{
"query" : "Hotels" ,
"user_info" : {
"precise_location" : {
"point" : {
"lat" : 52.23034637633789 ,
"lon" : 20.98339855121653 ,
}
}
},
"ranking_expression" : "geo_distance(request_loc, c.hotel_location)" ,
"ranking_expression_backend" : "RANK_BY_FORMULA"
}
Request location address : an address that's explicitly provided in the
search request. For example, you can provide the query as Hotels and
provide an address for reference.
{
"query" : "Hotels" ,
"user_info" : {
"precise_location" : {
"address" : "1800 Amphibious Blvd. Mountain View, CA 94045"
}
},
"ranking_expression" : "geo_distance(request_loc, c.hotel_location)" ,
"ranking_expression_backend" : "RANK_BY_FORMULA"
}
The destination location or destination_location : The destination for
calculating distance, which is a custom retrievable
field such as c.office_location or c.home_location .
The order of these arguments within the function must remain the same. That is,
the source location must always be the first argument within the
geo_distance() function followed by the destination location.
The function computes the distance, in meters, using the latitude and longitude
of the source and destination locations.
Ranking formula syntax
The custom ranking formula is a mathematical expression with the following
components:
Numbers ( double ) : A positive or negative floating-point values that
adds a weight to a signal or an expression.
Signals ( signal ) : The names of the signals listed in the
Standard signals section.
Arithmetic operators : + (addition) and * (multiplication).
Mathematical functions :
log(expression) : The natural logarithm
exp(expression) : The natural exponent
Each of these expressions accepts exactly one argument, which is an expression
written in terms of a signal.
Examples of a valid function: exp(c.document_age) and
log(keywordSimilarityScore * 0.2 + 1.0) .
Reciprocal rank transformation function ( rr ) :
This function is expressed as rr(expression, k) . It first sorts documents
by the value of the expression in descending order and assigns the
documents a rank. It then calculates the final value using the expressions
1 / (rank_i + k) ; where, rank_i is the document's position in the sorted
list starting from 0 and k is a positive floating-point number you provide.
The rr() function transforms all scores to the same scale and eliminates the
need for additional normalization.
Not a number (NaN) handling functions :
is_nan(expression) : When the expression evaluates to being NaN, such as
when a signal is missing for a document, 1 is returned. Otherwise, 0
is returned.
fill_nan(arg_expression, fill_with_expression) : If arg_expression
evaluates to being a NaN, returns fill_with_expression . Otherwise, returns
arg_expression . This is crucial for handling documents that might be
missing certain signals.
Ranking formula examples
Here are a few examples of ranking formula that you can use in the
rankingExpression field of your search request:
An elementary linear combination:
semantic_similarity_score * 0.7 + keyword_similarity_score * 0.3
A complex formula using reciprocal rank and NaN handling:
rr(fill_nan(semantic_similarity_score, 0), 40) * 0.5 + topicality_rank * 0.5
A complex formula using reciprocal rank, exponential function, and NaN
handling:
rr(fill_nan(semantic_similarity_score, 0), 40) * 0.2 + exp(keyword_similarity_score) * 0.3 + is_nan(keyword_similarity_score) * 0.1
A complex formula using reciprocal rank with the geo_distance() function
(Private preview):
rr(keyword_similarity_score, 16) * 0.8 + rr(geo_distance(query_loc, c.office_location) * -1, 16) * 0.2
In this formula, the multiplication factor is a negative value so that larger
distance correspond to higher expression value and, therefore, the reciprocal
rank assigns lower ranks to greater distances.
Signals in the response
When a document is returned in the search response, the search result lists the
standard and custom signals that
contribute to retrieving the document from the
data store. The
rankSignals
field lists these signals.
Text fields for keyword similarity
In structured data stores, to obtain the keywordSimilarityScore signal in
your search response, you must
update your schema to do the following:
Map the text fields essential for keyword matching to the key properties
title and description
Update the annotation for the text fields as Searchable
Customize ranking using ranking formula in search
To customize the ranking for your documents in your search results, manually
draft a formula and add it to your
search
API call.
Formulate a ranking expression.
Get search results.
curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https://discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/collections/default_collection/engines/ APP_ID /servingConfigs/default_search:search" \
-d '{
"servingConfig": "projects/ PROJECT_ID /locations/global/collections/default_collection/engines/ APP_ID /servingConfigs/default_search",
"query": " QUERY ",
"rankingExpression": " RANKING_EXPRESSION ",
"rankingExpressionBackend": "RANK_BY_FORMULA"
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
APP_ID : the ID of the Vertex AI Search app that you
want to query.
QUERY : the query text to search.
RANKING_EXPRESSION : the custom ranking formula that
you can write using the available signals with a valid
ranking formula syntax .
For valid examples, see Ranking formula examples .
To tune the ranking formula, which can give you the best results, see
Tune ranking formula using the Python library .
Tune ranking formula using the Python library
For more advanced use cases, finding the optimal weights for your formula can be
challenging. To overcome this, you can use Vertex AI Search's
ranking tuning Python library, which is an open-source tool, and arrive at a
suitable formula for your use case.
The general workflow is as follows:
Prepare a dataset of queries with corresponding golden labels. These golden
labels can be unique identifying fields, such as the document ID, that can
help you associate the SearchResult object in the search response.
For a set of representative queries, call the
search
API to get the available ranking signals for all returned documents. You can
find this in the SearchResult.rankSignals field. Store this data along
with your golden labels.
Use the Python library to train a ranking model on this dataset.
For more information, see
Clearbox Python library .
To see an example of custom ranking using a tuned formula,
run the "Custom ranking tuning" notebook in one of the following
environments:
Open in Colab
|
View on GitHub
Convert the formula from the training results into a ranking expression,
which you can then use in your API calls.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
