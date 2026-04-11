---
title: "Boost results \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/retail/docs/boosting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/how-it-works
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/boosting
  title: "Boost results \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Vertex AI Search for commerce
Guides
Send feedback
Boost results
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI Search for commerce offers a feature that lets you specify records that should be elevated in searches. You can control the result ranking by applying a boosting rule to
prioritize or de-prioritize returned search items.
Boosting lets you control the ranking of results by promoting (boosting) or demoting (burying) specific items based on criteria you define. Unlike filtering, which removes items from the result set, boosting adjusts the position of items that are already eligible to be returned.
Boost and filter overrides
Note: Filtering rules always take precedence over boost rules. For more information about filtering and ordering search results, see Filter and order results .
These are examples of common filter types that take precedence over boosting rules:
User-specified . These can be things like price or brand. They appear to the end user as tiles or facets on the website.
Topicality (relevance) . These filters only exist for search queries (not browsing). They exclude less relevant products from the search results. For example, the search refrigerator doesn't return microwaves or accessories, such as refrigerator handles. The filter recognizes not to boost a microwave for a refrigerator search.
Boosting rules
Boosting rules can only be applied when there's a base relevance score, such as in relevance-ordered searches or browse results with pre-sort scores. Boosting is a multiplier function applied to search and browse results. The syntax and logic of boosting can be broken down into:
Availability . Boosting cannot override availability rules. If an item is filtered out (such as out-of-stock), boosting it won't make it appear.
Operators . You can use operations like greater-than and less-than for numerical fields in boosting conditions, which are not available in standard strict filtering.
Boost or bury values
One product can be conditioned by multiple boost or bury rules, which are set in the
boostSpec class of the Search API. A boost value is a floating-point number between -1.0 and 1.0 .
Positive value (0.0 to 1.0) : Promotes the item, moving it higher in the results. A value of 1.0 gives the maximum promotion.
Negative value (-1.0 to 0.0) : Demotes (buries) the item, moving it lower in the results. A value of -1.0 gives the maximum demotion.
Multiple boost or bury rules on a single product
Multiple boost or bury rules can affect a product, with either a sum or max of the boost values determining the final score. When several boosting rules are applied to the same product, always check if another product's score has ousted the product from the top spot. The maximum mode is set to default so that this problem is less likely to occur.
Assume one product gets boosts of 2, 3, and 0.5, and another product gets one boost of 0.5. Although the product only received a 0.5 boost score, when it's boosted repeatedly, it outranks the other product. Carefully check the boosting specification to make sure it's not overlapping—or is, as intended.
Conflict resolution
If multiple boosting rules apply to the same product, you can define how they interact.
Max boost rule (default ): Vertex AI Search for commerce checks whichever is the maximum value and ignores the other rules.
Sum of boost effect (alternative setting) : If there's a demotion plus a promotion, Vertex AI Search for commerce adds up the values of all applicable boost and bury rules. This allows for a cumulative effect. The resulting sum is either a lowered boost or net bury effect.
Configure boost
To configure a dataset with boost or bury rules, you define conditions based on product attributes (such as brand or price) and assign a boost value between -1.0 (bury) and 1.0 (boost) to adjust the ranking score of matching items. The following products are available for configuring boost or bury controls:
Search : Topicality filter plus any other user-applied filters such as on-site facets. Read more on how to configure boost for search .
Browse : Since there is no text-query, only the user-applied filters are applied. Filters are also applied to check that the product (let's say, suits) belongs to the correct product category (not sweaters, for example). Read more on how to configure boost for recommendations .
Example dataset
View example product dataset
id
title
brands
categories
price_info.price
"nest_mini_2nd_gen"
"Nest Mini (2nd gen)"
["Google", "Nest"]
["Nest > speakers and displays"]
49.00
"nest_audio"
"Nest Audio"
["Google", "Nest"]
["Nest > speakers and displays"]
99.99
"nest_hub_max"
"Nest Hub Max"
["Google", "Nest"]
["Nest > speakers and displays"]
229.00
"nest_hub"
"Nest Hub"
["Google", "Nest"]
["Nest > speakers and displays"]
88.99
"google_home_max"
"Google Home Max"
["Google", "Nest"]
["Nest > speakers and displays"]
299.00
"google_home_mini"
"Google Home Mini"
["Google", "Nest"]
["Nest > speakers and displays"]
49.00
"google_pixel_5"
"Google Pixel 5"
["Google", "Pixel"]
["Pixel > phones"]
699.00
"google_pixel_4a_with_5g"
"Google Pixel 4a with 5G"
["Google", "Pixel"]
["Pixel > phones"]
499.00
"google_pixel_4a"
"Google Pixel 4a Phones"
["Google", "Pixel"]
["Pixel > phones"]
349.00
"google_pixel_stand"
"Google Pixel Stand"
["Google", "Pixel"]
["Pixel > featured accessories"]
79.00
"google_pixel_buds"
"Google Pixel Buds"
["Google", "Pixel"]
["Pixel > featured accessories"]
179.00
"google_pixel_5_case"
"Google Pixel 5 Case"
["Google", "Pixel"]
["Pixel > featured accessories"]
40.00
"google_pixel_4a_5g_case"
"Google Pixel 4a (5G) Case"
["Google", "Pixel"]
["Pixel > featured accessories"]
40.00
"google_pixel_4a_case"
"Google Pixel 4a Case"
["Google", "Pixel"]
["Pixel > featured accessories"]
40.00
Configuration options
In Vertex AI Search for commerce, boosting is applied as a multiplier to the base relevance score generated by the search algorithm. You can configure boosting rules directly in a search request using a boost specification or by attaching serving controls to a serving configuration. In the response, items matching these conditions receive a modified relevance score, causing them to appear higher or lower in the results list without being removed entirely. To configure a search boost or bury control:
Cloud console
Go to the Controls page in the Search for commerce console.
Go to the Controls page
Under the Serving controls tab, click Edit edit to the right of a control.
In the Edit control fly-out, click the field under Control name field to modify the control name.
Optional: For search, in the Triggers section, select what type of user behavior triggers
this control. The Browse categories and Search sections are dimmed.
Optional: Edit Matching search terms .
Note: If you specify a category or query term condition plus time
range conditions, the control only applies when both conditions are
met.
Optional: Click the Add Time Range option to add one or more
time ranges during which this control can be applied.
Note: If you specify time range conditions in addition to this type of
condition, the control is applied only if both conditions are met.
Click Continue to proceed to the Actions section.
Add filters for product attributes in the Boost/bury product field.
Use the filter expression syntax documented in Filter and
order results . For example, to specify red and blue versions of
"product1" and "product2": (id: ANY("product1","product2")) AND
(colorFamily: ANY("Red","Blue"))
For Boost/bury value , use the slider to set the strength of the
boost. Positive values boost the results, and negative values bury
them. Click Continue .
In the Serving configs section, select which serving configs to apply
the control to.
Submit your control settings.
You can now find the boost or bury control rule added as a new Control type listed under the Serving Controls for your project. Find out how to create a new boost and bury control under Create controls .
JSON
This demonstrates an example of boosting by price.
Suppose that you want to prioritize the cheaper products (less than 95 US$) and de-prioritize the expensive ones (higher than 95 US$). You can
apply a boost specification.
{
"condition_boost_specs" : [
{
"condition" : "price: IN(*, 95.0e)" ,
"boost" : 0.5
},
{
"condition" : "price: IN(95.0e, *)" ,
"boost" : -0.5
}
]
}
In this example, products under 95 US dollars receive a promotion (0.5), while those over 95 US dollars are demoted (-0.5).
In the result, "nest_mini_2nd_gen" , "google_home_mini" and "nest_hub" might be the
first three, while "nest_audio" , "nest_hub_max" and "google_home_max" might be
last three. However, no specific order is predetermined, in contrast to
ordering by price, as discussed in Filter and order results .
Boost in search
For search, apply the ranking score of matching items dynamically by including a boost specification ( boostSpec ) with condition_boost_specs directly in the SearchRequest .
Conditions and triggers
Search boosting can be conditional. You can trigger a boost rule based on these conditions:
Query terms : Apply the boost only when the user searches for specific terms (such as boosting winter coats when the query contains jacket).
Time ranges : Apply the boost only during a specific promotional period.
Global : Apply the boost to all queries served by a specific configuration.
Example search request and response
In the example dataset shown previously, if you search for "Google speaker", then you would get
"nest_mini_2nd_gen", "nest_audio", "nest_hub_max", "nest_hub", "google_home_max"
and "google_home_mini" in no specific order.
View example search request and response
Java
import com.google.cloud.retail.v2. SearchRequest ;
import com.google.cloud.retail.v2. SearchRequest . BoostSpec ;
import com.google.cloud.retail.v2. SearchRequest . BoostSpec . ConditionBoostSpec ;
import com.google.cloud.retail.v2. SearchResponse ;
import com.google.cloud.retail.v2. SearchServiceClient ;
public static void searchProductsWithBoostSpec ( String query , int pageSize ,
String condition , float boostStrength ) throws IOException , InterruptedException {
BoostSpec boostSpec = BoostSpec . newBuilder ()
. addConditionBoostSpecs ( ConditionBoostSpec . newBuilder ()
. setCondition ( condition )
. setBoost ( boostStrength )
. build ())
. build ();
SearchRequest searchRequest = SearchRequest . newBuilder ()
. setPlacement ( DEFAULT_SEARCH_PLACEMENT_NAME )
. setBranch ( DEFAULT_BRANCH_NAME )
. setVisitorId ( VISITOR_ID )
. setQuery ( query )
. setPageSize ( pageSize )
. setBoostSpec ( boostSpec )
. build ();
try ( SearchServiceClient searchClient = SearchServiceClient . create ()) {
SearchResponse response = searchClient . search ( searchRequest ). getPage (). getResponse ();
System . out . println ( "Search response: " + searchResponse );
}
}
Boost in recommendations
Boosting for recommendations is managed using serving controls. Unlike search, recommendation boosting does not support query-based conditions (as there is no user query). Instead, the control applies to all predictions generated by the serving config it is attached to. For this reason, you typically configure recommendations by attaching boost or bury serving controls to the serving config, rather than passing a boosting specification in the request.
Supported fields for recommendations
When defining which products to boost in recommendations, use a filter expression. While standard recommendation filtering is limited to textual fields, boosting supports additional numerical fields.
Field type
Supported fields
Description
Textual
productId , brands , categories , genders , ageGroups , colorFamilies , colors , sizes , title , materials , patterns , conditions , attributes.key , tags
Standard fields available for both filtering and boosting. Note that tags are custom tags associated with the product.
Numerical
price , discount , rating , ratingCount
Exclusive to boost/bury. These fields allow you to boost products based on price, discounts, or user ratings.
For more information, see the Boost/bury supported fields section in Filter recommendations .
Boost highly rated products
Say you want to ensure that highly-rated movies appear higher in their "Others You May Like" recommendation panel. For this use case, create a serving control to boost items with a rating count greater than 100. Configure your controls, taking into account the following:
Control Type : Boost or bury
Product Selection : Recommendation
Action :
Filter Expression : ratingCount > 100
Boost Value : 0.5
This control ensures that popular, well-rated items are prioritized in the recommendation list, while still maintaining personalization relevance for the user.
Debug and troubleshoot
Every product is eligible for unlimited boosting, but user-applied filters eliminate products from the search response. To troubleshoot why a boosted product might not appear in search and browse results, check for:
Multiple boost rules (including bury demotions) : Check boost mode configuration (sum or max) and determine the final score.
Relevance : A product must be relevant for the query and pass the relevance filters. If a search query is for Nike shoes and the product title is Air Jordans, the words don't match, but their close semantic relationship results in a high relevance score. A product title such as yellow jacket has a low relevance score with a Nike search query. Similarly, if the product title is a cryptic model number that has no relationship to any word whatsoever, the relevance score will be low for any query.
Filters : Filtering rules override any boost rule, and prevent boosted products from appearing in results. The filter is always applied atop the boost. If a product has user-applied filters, or if a product category filters for browsing, the boost won't work at all.
Boosting tutorial
This tutorial shows you some examples of product boosting.
To follow step-by-step guidance for this task directly in the
Cloud Shell Editor, click Guide me :
Guide me
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
