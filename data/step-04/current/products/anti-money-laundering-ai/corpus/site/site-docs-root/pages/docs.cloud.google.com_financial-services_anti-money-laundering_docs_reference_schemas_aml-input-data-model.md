---
title: "AML input data model \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model
  title: "AML input data model \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Send feedback
AML input data model
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the AML input data model and its requirements. To see the
AML schema, see the tables starting in
Core banking data tables . The full AML schema is
available in the AML input data model CSV file or
JSON file . A synthetic example dataset
is also available through the
quickstart .
Data model requirements
The following sections describe the table-level requirements and field-level
requirements of the data model.
Table-level requirements
Table classification indicates when to include the table in a dataset:
MANDATORY: This table must always be included and populated.
RECOMMENDED: This table is optional. See the table description for
information on how and when to use it.
EXPERIMENTAL: This table is optional and it is not used in any production
Engine Versions. If provided, you can benefit from upcoming Engine Version
releases or other functionality.
Field-level requirements
Detailed descriptions for each field are provided in the corresponding section
of this document.
MANDATORY: This field must always be included.
AML AI relies on completeness and correctness of these
fields for basic functioning and performance. If you don't correctly
complete these fields, you may receive data validation errors or
the product may function incorrectly.
If a field is NULLABLE, the field description specifies when NULL
values are accepted.
RECOMMENDED: This field should be included for best AML performance and AML
typology coverage, or other use cases.
It is strongly recommended that you include these fields for optimal
performance and risk typology coverage. However, AML AI
is designed to work correctly in the absence of this data.
If you don't populate a RECOMMENDED field, you may omit it from your
BigQuery dataset.
EXPERIMENTAL: This field is not used in any production Engine Versions. It
can optionally be included to participate in early experimentation of
upcoming Engine Version releases.
To help you prioritize which RECOMMENDED fields you should invest the time to
populate, see
Select data for best performance and risk typology coverage .
Other fields should not be included in your BigQuery dataset.
Completeness of data
The following applies to completeness of data when populating a field:
Enums:
Enums are represented in the schema as string fields, but with a limited
set of supported values listed in the description (for example,
Party .type supports "One of: [ COMPANY:CONSUMER ]").
By default, you should not use values not listed in the enum, NULL , or
UNKNOWN .
Where the value UNKNOWN is supported, it is be explicitly specified
in the field description as a supported value and should be used when
your systems do not have the required information.
Strings:
By default, you should not use the empty string, NULL , or your own
internal default values.
For fields where a default value is supported, the value is clearly
stated in the field description.
Repeated fields:
By default, repeated fields should contain at least one item.
When a repeated field may contain no items, it is explicitly stated.
The mode (for example, NULLABLE , REQUIRED , or REPEATED ) indicates the
values the field will technically accept; see
Modes for more information. However, see the
field description for more precise guidance.
Understanding how data changes over time
AML AI needs to be able to recreate views of the data at
different points in time for tuning, training, and backtesting. To achieve this,
AML AI differentiates between mutable entities (that is,
entities that can change values over time) and immutable entities. Immutable
entities, such as events, don't substantially change after they are created or
occur.
Mutable entities
Examples of mutable entities include a party moving abroad (updating
Party .residencies ) and a customer becoming the PRIMARY_HOLDER
on an account.
The validity_start_time field
Mutable entities change their state over time due to real world events. Every
time an entity changes, a new row is added to the table with the time of the
change captured in the validity_start_time field.
Mutable entities are records that can be updated over time, for example when a customer reports a change of address or contact information. Every time an entity is updated, the database adds a new row that notes the time the change occurred in the validity_start_time field. The validity start time for an event represents the time that the bank collected new data and verified it as correct.
AML AI uses the validity start time to reconstruct the data stored by the bank at a given point in time. This allows the system to use data that accurately represents the bank's records to train models, based on the time of the events used for model training. These models can then be used on current data to produce high fidelity risk scores.
The following examples show how banks might determine the validity_start_time for specific events.
Example 1 : Customer moves to a different country and informs the bank of their new address and change to their tax residency.
Case 1 : The bank's systems only record the date this information was
received.
Best practice : Use this date for validity_start_time .
Case 2 : The bank's systems only records the date the customer
changed their tax residency, but not the date the information was
received.
Best practice : Use the date of the move, however, not knowing when
the bank received this information introduces some risk of leakage and
overfitting in AML models.
Case 3 : The bank's systems record both the date that the customer
changed their tax residency and the date that the bank received this
information.
Best practice : Use the date the bank received the information, unless there is additional information that changes this date (for example, if the customer later informs the bank that the original date was postponed).
Example 2 : The customer adds another person as a joint account holder at a bank branch on 2023-01-02. The change became effective in the bank's systems on 2023-02-15.
Best practice : Set the AccountPartyLink .validity_start_time
to 2023-02-15 since this is the date that the change was made and is
recorded in the bank's systems.
The is_entity_deleted field
This field is usually set to NULL (or equivalently FALSE ) since mutable entities typically contain valid data.
In some situations, there might no longer be valid data for a mutable entity. To indicate this state,ingest a row with is_entity_deleted set to TRUE . All non-key fields
should be left unset or set to NULL .
Examples of this situation include the following:
A party stops being associated with an account. In this case, the
corresponding AccountPartyLink entry is no longer valid.
An entity is deleted from the corresponding system of record, but you are
able to include values for that entity in your dataset prior to deletion.
Immutable entities (including events)
The RiskCaseEvent .event_time is an example of an immutable
entity. event_time indicates when the event occurred. After this time, you
don't expect the event details will change. New activity in the risk case is
captured as a new event row, not a row update.
For these entities, there are neither validity_start_time nor
is_entity_deleted fields. AML AI does not expect the event to
change over time.
Joinability
To make sure that a whole dataset can be used together, take note of the
following:
Foreign keys used in any table should always match to rows in the
corresponding table where they are (part of) the primary key. For example,
when a party_id is used in an AccountPartyLink entity,
that party_id should appear in a Party entity.
The same should work when taking into account validity_start_time and
is_entity_deleted . Joins should not fail based on valid data at any point
in time. For example, when a party_id is used in an
AccountPartyLink entity with validity_start_time set to
8:00 AM on 2022-05-04, that party_id should appear in a
Party entity with at least one row with the same
or earlier value for validity_start_time .
Sensitive fields
AML AI performs better when the provided data is complete and
accurate. However, fields that contain data that customers consider sensitive
may be semi-anonymised if required. For example, providing the 1st of the birth
month or January 1st of the birth year for the Party.birth_date field,
provides better performance than providing a null value for this field.
Data validation
AML AI performs limited checks to validate that data provided to it
is sufficiently complete and correct for AML AI to function.
These checks are conducted during the creation of a dataset, engine config,
model, prediction results, and backtest results. Failure of the tests results in
a failure of the corresponding API call with errors visible in the logs.
See
Data validation errors
for information on how to fix these errors.
Core banking data tables
Core banking data helps you to understand your customers and their banking activity in order to
detect risky characteristics and behaviors.
Party
The Party table covers your retail or commercial banking customers.
Type : MANDATORY table. AML AI requires that this table is populated.
Purpose for AML : AML AI takes a customer-centric approach to risk
detection. The Party table allows AML AI to understand important details of each
Party, and how they changed over time.
Scope : include a full history of your party data for the required time range
Retail LoB: include all retail banking customers that have held accounts at any point in
the required time range
Commercial LoB: all commercial banking customers (legal and natural entities) that have
held accounts at any point in the required time range
Note : To ensure that the state of parties can be determined at the start of the
time period used for a given AML AI operation, rows should be included with validity_start_time on or before
the start of the time period.
Primary key columns : party_id , validity_start_time
Do not include additional parties beyond those described in the preceding section regarding scope.
In particular, AML AI does not support the inclusion of all retail and commercial
banking customers in the same dataset.
Column Type Mode Description
party_id STRING REQUIRED MANDATORY: Unique ID for your customers. Use a pseudo-ID or an internal customer ID instead of an externally facing customer ID.
validity_start_time TIMESTAMP REQUIRED MANDATORY: Timestamp of when the information in this row reflected the state of the entity and was known to the bank.
is_entity_deleted BOOL NULLABLE RECOMMENDED: If set to TRUE, indicates the party as deleted from your system of reference.
source_system STRING NULLABLE RECOMMENDED: Name of the system that this row was fetched from to help manage data lineage. This field has no impact on AML AI functionality.
type STRING REQUIRED MANDATORY: Type of this party, to differentiate between a natural person or a legal entity. One of: [COMPANY:CONSUMER].
name STRING NULLABLE EXPERIMENTAL: Name of this party.
addresses STRUCT REPEATED EXPERIMENTAL: Addresses of this party, if any.
addresses.address_line STRING NULLABLE RECOMMENDED: First line of address in case not captured by street and building number.
addresses.street STRING NULLABLE RECOMMENDED: Street of the address.
addresses.building_number STRING NULLABLE RECOMMENDED: Building number of the address.
addresses.post_office_box STRING NULLABLE RECOMMENDED: PO Box identifier in case the address is a PO Box.
addresses.post_code STRING NULLABLE RECOMMENDED: Postcode. Include postcode for each Party where this is known to the bank.
addresses.town STRING NULLABLE RECOMMENDED: Town of the address.
addresses.subregion STRING NULLABLE MANDATORY: Region within the country. For AML do not use NULL for this field.
addresses.region_code STRING NULLABLE MANDATORY: Country or region in two-letter Unicode CLDR code format. Do not use NULL for this field.
birth_date DATE NULLABLE RECOMMENDED: Date of birth for the Party for natural persons, for example, where Party.type = CONSUMER. Where Party.type = COMPANY, use NULL. Typically also used for fairness evaluation.
establishment_date DATE NULLABLE RECOMMENDED: Party's date of establishment with Party.type = COMPANY. Where Party.type = CONSUMER, use NULL.
occupation STRING NULLABLE RECOMMENDED: Most recent occupation of the Party, if known. Only relevant with Party.type = CONSUMER. Where Party.type = COMPANY, use NULL. If not known, use the empty string. Note that this field is not intended to capture employment level. For example, for a carpenter who is currently unemployed, this field should read "Carpenter".
gender STRING NULLABLE RECOMMENDED: Gender string for individuals. Typically used for fairness evaluation.
nationalities STRUCT REPEATED RECOMMENDED: One or more nationalities for natural persons, with an empty list in exceptional cases when your do not have information on the tax residency of the party. Empty for companies. Typically also used for fairness evaluation.
nationalities.region_code STRING REQUIRED MANDATORY: Country or region in two-letter Unicode CLDR code format.
residencies STRUCT REPEATED RECOMMENDED: One or more of the Party's tax residencies (for natural persons), with an empty list in exceptional cases. Empty list for companies.
residencies.region_code STRING REQUIRED MANDATORY: Country or region in two-letter Unicode CLDR code format.
exit_date DATE NULLABLE MANDATORY: The date when the party stopped being a customer. Use NULL if the Party has not stopped being a customer.
join_date DATE NULLABLE MANDATORY: Date when the Party first became your customer. Use NULL if the Party has been entered into your systems but has not yet opened an account.
assets_value_range STRUCT NULLABLE RECOMMENDED: Approximate value of assets held by the Party. Where possible, this estimate should include assets held by other financial institutions. Include at least the start or end amount.
assets_value_range.start_amount STRUCT NULLABLE RECOMMENDED: The lower bound of the money range (inclusive) or NULL if there is no bound. If provided, it should be positive.
assets_value_range.start_amount.currency_code STRING REQUIRED MANDATORY: The three-letter currency code defined in ISO 4217.
assets_value_range.start_amount.units INT64 REQUIRED MANDATORY: The whole units of the amount. For example, if currency_code is USD, then 1 unit is one US dollar.
assets_value_range.start_amount.nanos INT64 REQUIRED MANDATORY: Number of nano (10^-9) units of the amount. The value must be between 0 and 999,999,999, inclusive. Nanos must be positive or zero.
assets_value_range.end_amount STRUCT NULLABLE RECOMMENDED: The upper bound of the money range (exclusive) or NULL if there is no bound. If provided, it should be positive. The range represents a single value when start_amount is equal to end_amount.
assets_value_range.end_amount.currency_code STRING REQUIRED MANDATORY: The three-letter currency code defined in ISO 4217.
assets_value_range.end_amount.units INT64 REQUIRED MANDATORY: The whole units of the amount. For example, if currency_code is USD, then 1 unit is one US dollar.
assets_value_range.end_amount.nanos INT64 REQUIRED MANDATORY: Number of nano (10^-9) units of the amount. The value must be between 0 and 999,999,999, inclusive. Nanos must be positive or zero.
civil_status_code STRING NULLABLE RECOMMENDED: Civil status of the Party, based on ISO 20022 Civil Status Codes. If not known, use UNKNOWN. One of: [SINGLE:MARRIED:LEGALLY_DIVORCED:DIVORCED:WIDOW:STABLE_UNION:SEPARATED:UNKNOWN].
phone_numbers STRUCT REPEATED EXPERIMENTAL: Zero or more phone numbers of this Party.
phone_numbers.type STRING NULLABLE RECOMMENDED: Type of this phone number. Supported Values: PERSONAL, CORPORATE One of: [PERSONAL:CORPORATE].
phone_numbers.phone STRING NULLABLE RECOMMENDED: Phone number. Either this field or obfuscated_phone should be filled in.
phone_numbers.obfuscated_phone STRING NULLABLE MANDATORY: Phone number, obfuscated. Do not use NULL for this field.
phone_numbers.region_code STRING NULLABLE EXPERIMENTAL: Region code in two-letter Unicode CLDR code format, if known.
email_addresses STRUCT REPEATED EXPERIMENTAL: Zero or more email addresses of this Party.
email_addresses.type STRING NULLABLE RECOMMENDED: Type of this email address. Supported values: PERSONAL, CORPORATE One of: [PERSONAL:CORPORATE].
email_addresses.email STRING NULLABLE RECOMMENDED: Email address. Either this field or obfuscated_email should be filled in.
email_addresses.obfuscated_email STRING NULLABLE RECOMMENDED: Email address, obfuscated.
email_addresses.region_code STRING NULLABLE EXPERIMENTAL: Region code in two-letter Unicode CLDR code format, if known.
education_level_code STRING NULLABLE RECOMMENDED: Most recent educational level of the Party, defined in International Standard Classification of Education (ISCED-11). If not known, use UNKNOWN. Based on standard ISCED-Attainment (ISCED-A) coding. One of: [LESS_THAN_PRIMARY_EDUCATION:PRIMARY_EDUCATION:LOWER_SECONDARY_EDUCATION:UPPER_SECONDARY_EDUCATION:POST_SECONDARY_NON_TERTIARY_EDUCATION:SHORT_CYCLE_TERTIARY_EDUCATION:BACHELORS_OR_EQUIVALENT:MASTERS_OR_EQUIVALENT:DOCTORAL_OR_EQUIVALENT:NOT_ELSEWHERE_CLASSIFIED:UNKNOWN].
AccountPartyLink
The AccountPartyLink table represents how parties are related to accounts. This includes all
account holders, not just the primary account holders.
Type : MANDATORY table. AML AI requires that this table is populated.
Purpose for AML : shows which parties hold which accounts, and which parties have joint
holdings with other parties
Scope :
All parties in the Party table
All accounts for products and services when a party in the Party table is
(or was) the primary account holder at any point during the required time range for the
Account Party Link table
Primary key columns : account_id , party_id , validity_start_time
Column Type Mode Description
account_id STRING REQUIRED MANDATORY: Unique ID for this Account.
party_id STRING REQUIRED MANDATORY: Unique ID for this Party in the Party table.
validity_start_time TIMESTAMP REQUIRED MANDATORY: Timestamp when the information of this row was in the correct state for the entity.
is_entity_deleted BOOL NULLABLE RECOMMENDED: If set to TRUE, indicates the link is no longer present.
role STRING NULLABLE MANDATORY: Describes how the party is related to the account. In particular, capturing primary and secondary account holders. Each Account should have at least one PRIMARY_HOLDER at any given time. Do not use NULL for this field. Supported values: PRIMARY_HOLDER - a party designated as the main (or joint main) holder of the account. SECONDARY_HOLDER - another party who is not the main account holder but with similar access and similar level of responsibility. SUPPLEMENTARY_HOLDER - any other party with either significantly reduced access or significantly reduced responsibility for the account. One of: [PRIMARY_HOLDER:SECONDARY_HOLDER:SUPPLEMENTARY_HOLDER].
source_system STRING NULLABLE RECOMMENDED: Name of the system that this row was fetched from to help manage data lineage. This field has no impact on AML AI functionality.
Transaction
A transaction represents a movement of funds from or to an account in the
AccountPartyLink table.
Type : MANDATORY table. AML AI requires that this table is populated.
Purpose for AML : helps the models understand the flow of money
Scope :
All transactions into or out of accounts in the AccountPartyLink table
at any point in the required time range for the Transaction table
Transactions between two accounts in the AccountPartyLink table
require a pair of rows in the Transaction table with separate values for the
transaction_id field, one with a direction of
DEBIT and one with a direction of CREDIT .
Includes card payments, cash withdrawals, wire transfers, and check transactions
Includes movements of funds between accounts of the same party
Primary key columns : transaction_id , validity_start_time
Column Type Mode Description
transaction_id STRING REQUIRED MANDATORY: Unique ID of this transaction, from the point of view of the specified Account. Note that a transfer is between two accounts, both in the Account table, and should be represented by two transactions with separate transaction IDs, one with direction = DEBIT and one with direction = CREDIT.
validity_start_time TIMESTAMP REQUIRED MANDATORY: Timestamp when the information of this row was the correct state of the entity.
is_entity_deleted BOOL NULLABLE RECOMMENDED: If set to TRUE, indicates the Transaction is no longer present in your system of record.
source_system STRING NULLABLE RECOMMENDED: Name of the system that this row was fetched from to help manage data lineage. This field has no impact on AML AI functionality.
type STRING REQUIRED MANDATORY: High level type of the transaction. Supported values: CARD, transaction involving a credit or debit card (includes GPay); CASH, transaction where cash is paid into or withdrawn from an account; CHECK, transaction where a cheque is used; WIRE, default for other transactions, including transfers between accounts at the same or different banks. One of: [WIRE:CASH:CHECK:CARD:OTHER:CRYPTO].
direction STRING REQUIRED MANDATORY: Direction of the transaction assets flow from the point of view of the specified account ID. Uses common definition of credit/debit in banking. Supported values: DEBIT, represents a transfer of value from this account; CREDIT, represents a transfer of value to this account One of: [DEBIT:CREDIT].
account_id STRING REQUIRED MANDATORY: Account ID of the Account in the Account Party Link table.
counterparty_account STRUCT NULLABLE MANDATORY: Details of counterparty and their account used in this transaction. Relates specifically to WIRE, CASH and CHECK transactions. For CARD transactions, this may represent the merchant or be NULL in case you do not have these details.
counterparty_account.account_id STRING NULLABLE MANDATORY: Account ID of a transaction's counterparty, if in the AccountPartyLink table. Can be NULL if the counterparty account is not represented in the Account Party Link table, for example, the customer of another financial institution.
counterparty_account.counterparty_name STRING NULLABLE EXPERIMENTAL: Name of the counterparty.
counterparty_account.addresses STRUCT REPEATED EXPERIMENTAL: Counterparty address, if known.
counterparty_account.addresses.address_line STRING NULLABLE RECOMMENDED: First line of address in case not captured by street and building number.
counterparty_account.addresses.street STRING NULLABLE RECOMMENDED: Street of the address.
counterparty_account.addresses.building_number STRING NULLABLE RECOMMENDED: Building number of the address.
counterparty_account.addresses.post_office_box STRING NULLABLE RECOMMENDED: PO Box identifier in case the address is a PO Box.
counterparty_account.addresses.post_code STRING NULLABLE RECOMMENDED: Postcode. Include postcode for each Party where this is known to the bank.
counterparty_account.addresses.town STRING NULLABLE RECOMMENDED: Town of the address.
counterparty_account.addresses.subregion STRING NULLABLE MANDATORY: Region within the country. For AML do not use NULL for this field.
counterparty_account.addresses.region_code STRING NULLABLE MANDATORY: Country or region in two-letter Unicode CLDR code format. Do not use NULL for this field.
counterparty_account.region_code STRING NULLABLE RECOMMENDED: Country or region of the counterparty account in two-letter Unicode CLDR code format. In the case of cash withdrawals or deposits, this should be the country where the cash was withdrawn or deposited.
book_time TIMESTAMP NULLABLE MANDATORY: The time when the transaction was posted to the account (recommended). You may use a different time if preferred by your internal processes and controls.
normalized_booked_amount STRUCT NULLABLE MANDATORY: Non-negative booked amount posted on the party's account, normalized to a standard currency for the whole dataset.
normalized_booked_amount.currency_code STRING REQUIRED MANDATORY: The three-letter currency code defined in ISO 4217.
normalized_booked_amount.units INT64 REQUIRED MANDATORY: The whole units of the amount. For example, if currency_code is USD, then 1 unit is one US dollar.
normalized_booked_amount.nanos INT64 REQUIRED MANDATORY: Number of nano (10^-9) units of the amount. The value must be between 0 and 999,999,999, inclusive. Nanos must be positive or zero.
ip_address STRUCT NULLABLE EXPERIMENTAL: Ip address from which the transaction was booked.
ip_address.type STRING NULLABLE MANDATORY: IP address type. One of: [V4:V6].
ip_address.ip STRING NULLABLE EXPERIMENTAL: IP address.
ip_address.obfuscated_ip STRING NULLABLE EXPERIMENTAL: IP address, obfuscated.
ip_address.region_code STRING NULLABLE EXPERIMENTAL: Region code extracted from the IP address in two-letter Unicode CLDR code format, if known.
ip_address.is_vpn BOOL NULLABLE EXPERIMENTAL: Whether a VPN service was used.
InteractionEvent
A subset of AML-relevant interactions between the party and the bank. For example, a login event
to online banking.
Type : EXPERIMENTAL table.
Purpose for AML : Enhance the model with information about a party's interactions with the bank.
Scope :
All parties in the Party table.
12 months lookback plus periods needed for each AML AI operation.
I.e. you need the same time range for this table as for the Transaction table.
See Understand data scope and duration .
Primary key columns : interaction_event_id
Column Type Mode Description
interaction_event_id STRING REQUIRED EXPERIMENTAL: Unique interaction event ID string.
party_id STRING REQUIRED EXPERIMENTAL: Interacting party ID.
account_id STRING NULLABLE EXPERIMENTAL: The ID of an account directly related to this event, if any.
type STRING REQUIRED EXPERIMENTAL: Type of the interaction event. Must be one of the enum values. Make sure to check the documentation on this field. One of: [LOGIN:PAYMENT_METHOD_ADDED:KYC_CHANGE:PASSWORD_CHANGE:OTHER].
event_time TIMESTAMP REQUIRED EXPERIMENTAL: Time when the event happened.
ip_address STRUCT NULLABLE EXPERIMENTAL: IP address of the device that the Party is using for this interaction.
ip_address.type STRING NULLABLE MANDATORY: IP address type. One of: [V4:V6].
ip_address.ip STRING NULLABLE EXPERIMENTAL: IP address.
ip_address.obfuscated_ip STRING NULLABLE EXPERIMENTAL: IP address, obfuscated.
ip_address.region_code STRING NULLABLE EXPERIMENTAL: Region code extracted from the IP address in two-letter Unicode CLDR code format, if known.
ip_address.is_vpn BOOL NULLABLE EXPERIMENTAL: Whether a VPN service was used.
Risk investigation data tables
A risk case tracks how your business alerts, investigates, and acts on
suspicious or risky activity related to AML. A single risk case may have events
related to multiple parties, indicating related investigations.
RiskCaseEvent
The RiskCaseEvent table tracks the progress of a risk case from the initial alert to the case
outcome. See
Lifecycle of a risk case
for more information.
Type : MANDATORY table. AML AI requires that this table is populated.
Purpose for AML :
Creation of training labels for training, tuning, and backtesting of models
Understanding previously identified money laundering risk
Scope : includes all AML investigation-related events related to a risk case and party
for which the AML_PROCESS_START (start of investigation) occurs within the required
time range
Note : This time period can include events with an event_time after
the dataset dateRange , in order to create more complete labels for model training
and evaluation.
Primary key columns : risk_case_event_id
Column Type Mode Description
risk_case_event_id STRING REQUIRED MANDATORY: Unique ID for this event.
event_time TIMESTAMP REQUIRED MANDATORY: Timestamp when this event occurs.
type STRING REQUIRED MANDATORY: Type of risk case event. Only AML events are supported. The minimum requirement for the AML product to work is to provide a single AML_PROCESS_START, AML_PROCESS_END and where applicable AML_EXIT event per Party and risk_case_id. It is strongly recommended to also include AML_SUSPICIOUS_ACTIVITY_START and AML_SUSPICIOUS_ACTIVITY_END events for best model performance. One of: [AML_SUSPICIOUS_ACTIVITY_START:AML_SUSPICIOUS_ACTIVITY_END:AML_PROCESS_START:AML_PROCESS_END:AML_ALERT_GOOGLE:AML_ALERT_LEGACY:AML_ALERT_ADHOC:AML_ALERT_EXPLORATORY:AML_ALERT_EXTERNAL:AML_SAR:AML_EXIT].
party_id STRING REQUIRED MANDATORY: The ID in the Party table of the Party that is the subject of this investigation process.
risk_typology_measurements STRUCT REPEATED RECOMMENDED: Information about the measured risks for this event. For SARs and exits, these are the risks identified in the investigation process and justifying the SAR or exit. Typologies specified for any risk case event resulting in an exit are used in measuring risk coverage.
risk_typology_measurements.risk_typology_id STRING REQUIRED MANDATORY: Unique ID of the risk type being measured.
risk_case_id STRING REQUIRED MANDATORY: The ID of the overall case to which this event belongs.
Supplementary data tables
You can add supplementary data to the AML models when the data is relevant to predicting risk of
money laundering. This data goes beyond what is covered in the
core banking and
risk investigation sections. For example, you may
identify and add a risk indicator that helps models better predict a risk typology that is not
otherwise covered.
Important : The other tables in the schema should generally suffice for AML performance
and risk typology coverage, so the addition of supplementary data is purely optional.
PartySupplementaryData
The PartySupplementaryData table lets you add supplementary data for parties in the
Party table.
Type : RECOMMENDED table. AML AI does not require that this table is populated.
Purpose for AML : enhances model performance with additional, relevant
Party data
Scope :
This table can be empty. You should start using AML AI without providing
any supplementary data.
For any supplementary data that is provided, you should include a full history for that
data covering the required time range.
At most, 100 different party_supplementary_data_id values may be used (for
example, at most 100 different values per customer at any point in time).
Important :
Ensure that the logic to handle entity and event changes over time is correct in any
calculation of party supplementary data. Customers are responsible for ensuring that there
is no data or label leakage introduced to the model from this table.
Ensure that the same party_supplementary_data_id values with the same logic
are provided for datasets used in all stages of AML modeling (that is, engine config,
model, prediction results, and backtesting). For example, unpredictable outcomes occur if
you use different IDs for the same supplementary data field, or if you drop supplementary
data fields between tuning, training and prediction, or backtesting.
Primary key columns : party_supplementary_data_id , party_id , validity_start_time
Column Type Mode Description
party_supplementary_data_id STRING REQUIRED MANDATORY: Identifier for the supplementary data field. This ID should match between Datasets used for the same modeling process (for example, for tuning, training, predict and backtesting steps). IDs may use letters, numbers, and underscores, matching the regular expression [a-zA-Z0-9_]. The first character should be a letter or number, matching the regular expression [a-zA-Z0-9]. With engine versions released prior to 2024-03-01 these IDs must use values from 1 to 100.
validity_start_time TIMESTAMP REQUIRED MANDATORY: Timestamp when this record became valid.
is_entity_deleted BOOL NULLABLE RECOMMENDED: If set to TRUE, indicates this supplementary data field no longer has a value for this Party.
source_system STRING NULLABLE RECOMMENDED: Name of the system that this row was fetched from to help manage data lineage. This field has no impact on AML AI functionality.
party_id STRING REQUIRED MANDATORY: ID of the Party to which this value of this supplementary data field refers.
supplementary_data_payload STRUCT REQUIRED MANDATORY: Payload of the supplementary data; only supports float64 values.
supplementary_data_payload.value FLOAT64 REQUIRED MANDATORY: The value of this supplementary data field. Type: float64.
Party registration tables
To import registered parties, first prepare a BigQuery table for
the line of business you want to register parties for. For more information, see
Register your customers .
Use one of the following schemas:
Retail parties schema
Column Type Description
party_id STRING Unique identifier of the party in the instance's datasets
party_size STRING NULL; content is ignored for retail party registrations
Commercial parties schema
Column Type Description
party_id STRING Unique identifier of the party in the instance's datasets
party_size STRING
Requested party size. The tier is based on the average number of monthly transactions for
the party over the preceding 365 days:
SMALL for small commercial parties with less than 500 average monthly transactions
LARGE for large commercial parties with greater than or equal to 500 average monthly transactions
All values are case sensitive.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
