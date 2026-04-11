---
title: "BiddingStrategy \_|\_ DV360 API \_|\_ Google for Developers"
url: https://developers.google.com/display-video/api/reference/rest/v4/BiddingStrategy
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/display-video/api/reference/rest
source_metadata:
  url: https://developers.google.com/display-video/api/reference/rest/v4/BiddingStrategy
  title: "BiddingStrategy \_|\_ DV360 API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Display & Video 360 API and Structured Data Files Discord channel in the Google Advertising and Measurement Community server.
Home
Products
DV360 API
Display & Video 360 API
Reference
Send feedback
BiddingStrategy
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Bid strategy settings control the bid price and can be a fixed bid, optimize spend to meet a performance goal, meet or beat a performance goal, or be specific for YouTube and Partners resources.
FixedBidStrategy uses a predetermined bid amount in micros of the advertiser's currency.
MaximizeSpendBidStrategy automatically adjusts bids to achieve a performance goal while spending the full budget, with support for various performance goal types and custom bidding algorithms.
PerformanceGoalBidStrategy automatically adjusts bids to meet or exceed a specified performance goal, applicable only to line items.
YoutubeAndPartnersBiddingStrategy offers different bidding types for YouTube and Partners resources, including manual and automated options like Target CPA, Target ROAS, and Maximize Conversions.
JSON representation
FixedBidStrategy
JSON representation
MaximizeSpendBidStrategy
JSON representation
BiddingStrategyPerformanceGoalType
PerformanceGoalBidStrategy
JSON representation
YoutubeAndPartnersBiddingStrategy
JSON representation
YoutubeAndPartnersBiddingStrategyType
BiddingSource
Settings that control the bid strategy. Bid strategy determines the bid price.
JSON representation
{
// Union field bid_strategy_scheme can be only one of the following:
"fixedBid" : {
object ( FixedBidStrategy )
} ,
"maximizeSpendAutoBid" : {
object ( MaximizeSpendBidStrategy )
} ,
"performanceGoalAutoBid" : {
object ( PerformanceGoalBidStrategy )
} ,
"youtubeAndPartnersBid" : {
object ( YoutubeAndPartnersBiddingStrategy )
}
// End of list of possible types for union field bid_strategy_scheme .
}
Fields
Union field bid_strategy_scheme . Required. bid_strategy_scheme can be only one of the following:
fixedBid
object ( FixedBidStrategy )
A strategy that uses a fixed bid price.
maximizeSpendAutoBid
object ( MaximizeSpendBidStrategy )
A strategy that automatically adjusts the bid to optimize to your performance goal while spending the full budget.
At insertion order level, the markupType of line items cannot be set to PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM .
In addition, the performanceGoalType value assigned to an insertion order determines the possible lineItemType values available for line items under that insertion order:
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA , BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC , and BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED only allow for LINE_ITEM_TYPE_DISPLAY_DEFAULT or LINE_ITEM_TYPE_VIDEO_DEFAULT line items.
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA and BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN only allow for LINE_ITEM_TYPE_VIDEO_DEFAULT line items.
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH only allows for LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP line items.
performanceGoalAutoBid
object ( PerformanceGoalBidStrategy )
A strategy that automatically adjusts the bid to meet or beat a specified performance goal. It is to be used only for a line item entity.
youtubeAndPartnersBid
object ( YoutubeAndPartnersBiddingStrategy )
A bid strategy used by YouTube and Partners resources. It can only be used for a YouTube and Partners line item or ad group entity.
FixedBidStrategy
A strategy that uses a fixed bidding price.
JSON representation
{
"bidAmountMicros" : string
}
Fields
bidAmountMicros
string ( int64 format)
The fixed bid amount, in micros of the advertiser's currency. For insertion order entity, bidAmountMicros should be set as 0. For line item entity, bidAmountMicros must be greater than or equal to billable unit of the given currency and smaller than or equal to the upper limit 1000000000.
For example, 1500000 represents 1.5 standard units of the currency.
MaximizeSpendBidStrategy
A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget.
JSON representation
{
"performanceGoalType" : enum ( BiddingStrategyPerformanceGoalType ) ,
"maxAverageCpmBidAmountMicros" : string ,
"raiseBidForDeals" : boolean ,
"customBiddingAlgorithmId" : string
}
Fields
performanceGoalType
enum ( BiddingStrategyPerformanceGoalType )
Required. The type of the performance goal that the bidding strategy tries to minimize while spending the full budget. BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM is not supported for this strategy.
maxAverageCpmBidAmountMicros
string ( int64 format)
The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency.
For example, 1500000 represents 1.5 standard units of the currency.
raiseBidForDeals
boolean
Whether the strategy takes deal floor prices into account.
customBiddingAlgorithmId
string ( int64 format)
The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performanceGoalType is set to BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO .
Assigning a custom bidding algorithm that uses floodlight activities not identified in floodlightActivityConfigs will return an error.
BiddingStrategyPerformanceGoalType
Possible types of performance goal for bidding strategy.
Enums
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED
Type value is not specified or is unknown in this version.
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA
Cost per action.
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC
Cost per click.
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM
Viewable CPM.
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO
Custom bidding algorithm.
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA
Completed inview and audible views.
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN
Inview time over 10 secs views.
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED
Viewable impressions.
PerformanceGoalBidStrategy
A strategy that automatically adjusts the bid to meet or beat a specified performance goal.
JSON representation
{
"performanceGoalType" : enum ( BiddingStrategyPerformanceGoalType ) ,
"performanceGoalAmountMicros" : string ,
"maxAverageCpmBidAmountMicros" : string ,
"customBiddingAlgorithmId" : string
}
Fields
performanceGoalType
enum ( BiddingStrategyPerformanceGoalType )
Required. The type of the performance goal that the bidding strategy will try to meet or beat.
For line item level usage, the value must be one of:
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM
BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO .
performanceGoalAmountMicros
string ( int64 format)
Required. The performance goal the bidding strategy will attempt to meet or beat, in micros of the advertiser's currency or in micro of the ROAS (Return On Advertising Spend) value which is also based on advertiser's currency. Must be greater than or equal to a billable unit of the given currency and smaller or equal to upper bounds. Each performanceGoalType has its upper bound:
when performanceGoalType is BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA , upper bound is 10000.00 USD.
when performanceGoalType is BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC , upper bound is 1000.00 USD.
when performanceGoalType is BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM , upper bound is 1000.00 USD.
when performanceGoalType is BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO , upper bound is 1000.00 and lower bound is 0.01.
Example: If set to BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM , the bid price will be based on the probability that each available impression will be viewable. For example, if viewable CPM target is $2 and an impression is 40% likely to be viewable, the bid price will be $0.80 CPM (40% of $2).
For example, 1500000 represents 1.5 standard units of the currency or ROAS value.
maxAverageCpmBidAmountMicros
string ( int64 format)
The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. Not applicable when performanceGoalType is set to BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM .
For example, 1500000 represents 1.5 standard units of the currency.
customBiddingAlgorithmId
string ( int64 format)
The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performanceGoalType is set to BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO .
Assigning a custom bidding algorithm that uses floodlight activities not identified in floodlightActivityConfigs will return an error.
YoutubeAndPartnersBiddingStrategy
Settings that control the bid strategy for YouTube and Partners resources.
JSON representation
{
"type" : enum ( YoutubeAndPartnersBiddingStrategyType ) ,
"value" : string ,
"adGroupEffectiveTargetCpaValue" : string ,
"adGroupEffectiveTargetCpaSource" : enum ( BiddingSource )
}
Fields
type
enum ( YoutubeAndPartnersBiddingStrategyType )
The type of the bidding strategy.
value
string ( int64 format)
The value used by the bidding strategy.
When the bidding strategy is assigned at the line item level, this field is only applicable for the following strategy types:
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS
When the bidding strategy is assigned at the ad group level, this field is only applicable for the following strategy types:
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_RESERVE_CPM
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS
If not using an applicable strategy, the value of this field will be 0.
adGroupEffectiveTargetCpaValue
string ( int64 format)
Output only. The effective target CPA for ad group, in micros of advertiser's currency.
adGroupEffectiveTargetCpaSource
enum ( BiddingSource )
Output only. Source of the effective target CPA value for ad group.
YoutubeAndPartnersBiddingStrategyType
Possible types of bidding strategy for YouTube and Partners resources.
Enums
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED
Type is not specified or unknown.
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV
A bidding strategy that pays a configurable amount per video view.
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM
A bidding strategy that pays a configurable amount per impression.
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA
A bidding strategy that automatically optimizes conversions per dollar.
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM
A bidding strategy that pays a configurable amount per impression.
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_RESERVE_CPM
A bidding strategy for YouTube Instant Reserve line items that pays a fixed amount per impression.
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT
An automated bidding strategy that sets bids to achieve maximum lift.
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS
A bidding strategy that automatically maximizes number of conversions given a daily budget.
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPV
A bidding strategy that automatically optimizes cost per video view.
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS
A bidding strategy that automatically maximizes revenue while averaging a specific target Return On Ad Spend (ROAS).
YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE
A bidding strategy that automatically sets bids to maximize revenue while spending your budget.
BiddingSource
Source of the bidding value.
Enums
BIDDING_SOURCE_UNSPECIFIED
Bidding source is not specified or unknown.
BIDDING_SOURCE_LINE_ITEM
Bidding value is inherited from the line item.
BIDDING_SOURCE_AD_GROUP
Bidding value is defined in the ad group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],["The Display & Video 360 API v4 (beta) uses various bidding strategies to determine bid prices. Key strategies include: `FixedBidStrategy` (using a set price), `MaximizeSpendBidStrategy` (adjusting bids to meet goals while spending the full budget), `PerformanceGoalBidStrategy` (adjusting bids to reach performance targets), and `YoutubeAndPartnersBiddingStrategy` (specific to YouTube, optimizing for views, conversions, or revenue). These strategies utilize different performance goal types, such as CPA, CPC, and viewable CPM, with associated fields like bid amounts, maximum CPM, and custom algorithms.\n"]]
