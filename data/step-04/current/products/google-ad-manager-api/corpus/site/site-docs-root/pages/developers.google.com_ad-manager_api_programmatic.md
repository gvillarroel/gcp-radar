---
title: "Programmatic \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/programmatic
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/programmatic
  title: "Programmatic \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Send feedback
Programmatic
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide provides a high-level overview of using Programmatic Direct features via the API to create and negotiate proposals.
A programmatic proposal is similar to an order in Google Ad Manager and represents an offer of inventory to a buyer.
Creating a proposal via the API requires specifying the name and programmatic buyer, with additional fields needed before sending it for negotiation.
Programmatic proposals move through various states during the negotiation process, represented by specific field combinations.
The negotiation walkthrough covers preparing, requesting buyer review, the negotiation phase with potential edits, and the finalization state where Ad Manager creates line items.
This guide is a high-level overview of how to use
Programmatic Direct
features via the API. It describes how to create a Proposal and how to perform
negotiation .
Primer
A programmatic proposal is similar to an order in Google Ad Manager. Programmatic proposals
contain broad information about a proposed transaction between you and a buyer.
A proposal, together with its line items, represents an offer of inventory to a
buyer.
For more information see the Help Center .
Creating a proposal via the API
To create a Proposal object, only the name and programmatic buyer are
required. The programmatic buyer ID can be obtained through the UI or
the Programmatic_Buyer
PQL table.
Java
Proposal proposal = new Proposal ();
// Setting required Marketplace information.
ProposalMarketplaceInfo proposalMarketplaceInfo = new ProposalMarketplaceInfo ();
proposalMarketplaceInfo . setBuyerAccountId ( programmaticBuyerId );
// Set common required fields for a proposal.
proposal . setName ( "Proposal #" + new Random (). nextInt ( Integer . MAX_VALUE ));
proposal . setPrimaryTraffickerId ( primaryTraffickerId );
proposal . setMarketplaceInfo ( proposalMarketplaceInfo );
View on GitHub
Python
proposal = {
# Setting required Marketplace information.
'isProgrammatic' : 'true' ,
'marketplaceInfo' : {
'buyerAccountId' : programmatic_buyer_id ,
},
# Set common required fields for proposals.
'name' : 'Proposal # %s ' % uuid . uuid4 (),
# ...
}
View on GitHub
PHP
$proposal = new Proposal();
$proposal->setName('Proposal #' . uniqid());
// Set the required Marketplace information.
$proposalMarketplaceInfo = new ProposalMarketplaceInfo();
$proposalMarketplaceInfo->setBuyerAccountId($buyerId);
$proposal->setMarketplaceInfo($proposalMarketplaceInfo);
View on GitHub
C#
// Create a proposal with the minimum required fields.
Proposal proposal = new Proposal ()
{
name = "Programmatic proposal #" + new Random (). Next ( int . MaxValue ),
// Set required Marketplace information
marketplaceInfo = new ProposalMarketplaceInfo ()
{
buyerAccountId = programmaticBuyerId
}
};
View on GitHub
Ruby
# Create proposal configuration object.
proposal = {
:marketplace_info = > {
:buyer_account_id = > buyer_id
},
:name = > 'Proposal %s' % SecureRandom . uuid (),
# ...
}
View on GitHub
Before sending to the buyer for negotiation, additional fields will need to be set.
The proposal must have an advertiser, salesperson, trafficker, and seller contacts.
Java
SalespersonSplit primarySalesperson = new SalespersonSplit ();
primarySalesperson . setUserId ( primarySalespersonId );
proposal . setPrimarySalesperson ( primarySalesperson );
View on GitHub
Python
'primarySalesperson' : {
'userId' : primary_salesperson_id ,
},
'primaryTraffickerId' : primary_trafficker_id ,
'probabilityOfClose' : '100000' ,
View on GitHub
PHP
// Create salesperson splits for the primary salesperson.
$primarySalesperson = new SalespersonSplit();
$primarySalesperson->setUserId($primarySalespersonId);
$proposal->setPrimarySalesperson($primarySalesperson);
// Set the primary trafficker on the proposal for when it becomes an
// order.
$proposal->setPrimaryTraffickerId($primaryTraffickerId);
$advertiser = new ProposalCompanyAssociation();
$advertiser->setType(
ProposalCompanyAssociationType::ADVERTISER
);
$advertiser->setCompanyId($advertiserId);
$proposal->setAdvertiser($advertiser);
View on GitHub
C#
// Set fields that are required before sending the proposal to the buyer.
proposal . primaryTraffickerId = primaryTraffickerId ;
proposal . sellerContactIds = new long [] { primarySalespersonId };
proposal . primarySalesperson = new SalespersonSplit ()
{
userId = primarySalespersonId ,
};
proposal . advertiser = new ProposalCompanyAssociation ()
{
type = ProposalCompanyAssociationType . ADVERTISER ,
companyId = advertiserId
};
View on GitHub
Ruby
:primary_salesperson = > {
:user_id = > primary_salesperson_id
},
:primary_trafficker_id = > primary_trafficker_id
View on GitHub
Since proposals are generally comprised of
ProposalLineItem
objects, the next step would be to add proposal line items beneath your newly
created proposal.
States of a programmatic proposal
The following figure depicts a programmatic proposal at various points during
the negotiation process from an API standpoint. Each state is represented by
various combinations of the following fields:
ProposalMarketplaceInfo.hasLocalVersionEdits
ProposalMarketplaceInfo.negotiationStatus
Proposal.status
For more information see the Ad Manager Help Center .
Figure 1 : States of a programmatic proposal
Negotiation walkthrough
Here, we'll walk you through using the API to complete a negotiation for a
programmatic proposal with a buyer. We'll reference the states in the diagram
above.
Preparing for buyer review or acceptance
First, you need to draft a programmatic proposal with proposal line items that
you want to send to a buyer. This is state C in the figure above.
Requesting buyer review or acceptance
Once you're ready to have the buyer review the programmatic proposal, you can
RequestBuyerReview or RequestBuyerAcceptance by using the
ProposalService.performProposalAction method.
This will bring you into the negotiation phase.
Negotiation
In this phase, a number of things may happen.
The buyer may accept your programmatic proposal without changes.
The buyer may propose changes. In this case, the proposal will be sent back
to a draft state ( state B in Figure 1). You will then need to
open the proposal for edit ,
make the proposed changes, and send it back for the buyer's review.
You may also decide to make changes even before the buyer replies. You can
do this by opening the proposal for edit from state D in Figure 1.
Note: When a programmatic proposal is open for edit ( state A in Figure 1),
it will not automatically receive updates from Marketplace. This means if the
buyer makes a change before you request buyer acceptance, you will receive the
error message
NEW_VERSION_FROM_BUYER
when trying to request buyer acceptance. To fix this, perform the action
DiscardProposalDrafts ,
which will overwrite your local edits with the latest buyer changes from
Marketplace. You will then need to re-apply your local edits.
This negotiation continues until you reach an agreement with the buyer. Comments
between you and the buyer can be retrieved using
getMarketplaceCommentsByStatement .
You can send a comment to the buyer while in state A . To do
this, you will need to update the
marketplaceComment
field on the proposal using
updateProposals .
The comment will then be sent when you request buyer acceptance.
Finalized
When both you and the buyer have both accepted the programmatic proposal, it
goes into a finalized state ( state F in Figure 1).
Ad Manager then automatically creates line items from this programmatic proposal.
In most cases you are now done with the programmatic proposal; however, there
are two actions you can perform from this state:
You can re-open the programmatic proposal for renegotiation by editing
serving-related fields on the proposal. You can do this by opening the
proposal for edit ( state E to A in Figure 1), making changes, and then
requesting buyer acceptance.
You can make non-serving related edits, such as updating the proposal's
name, and reflecting these changes in the Ad Manager order and line items created
from this deal. You do this by editing the from state
E in Figure 1 and then performing the UpdateOrderWithSellerData action.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["This content details creating and negotiating programmatic proposals via the API. Key actions include: creating a `Proposal` object with a name and programmatic buyer ID; setting required fields such as salesperson, trafficker, and advertiser before sending; using `RequestBuyerReview` or `RequestBuyerAcceptance`; managing negotiation, including handling buyer changes and edits; using comments for communication; and finalizing the proposal. The document explains how to perform the necessary actions in Java, Python, PHP, C# and Ruby.\n"]]
