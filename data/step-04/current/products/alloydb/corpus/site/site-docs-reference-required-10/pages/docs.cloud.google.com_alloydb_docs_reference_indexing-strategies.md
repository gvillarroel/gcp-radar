---
title: "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies
  title: "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
AlloyDB database indexing strategies
Stay organized with collections
Save and categorize content based on your preferences.
In PostgreSQL, there are several indexing strategies that are different from
Oracle and SQL Server. For example, in Oracle, the concept of global indexes
exists on partitioned tables. In PostgreSQL that doesn't exist.
Similarly in SQL Server, there's the concept of a clustered index. In
PostgreSQL, this concept doesn't exist, although a clustered table does exist.
The primary difference between clustered indexes and clustered tables is that
clustered indexes are ordered in the index only, while the data in clustered
tables is ordered only in the table object. Additionally, PostgreSQL doesn't
maintain the order of the data if subsequent Data Manipulation
Language (DML) changes are made, whereas SQL Server always maintains the order.
This document describes many common indexing strategies in PostgreSQL. It's
important to understand these different indexing strategies because when
you translate indexes from one database engine (RDBMS) to another, you have the
option to update the definition or indexing strategy to better suit the
destination engine.
Index types
This section contains details about the different index types to use in
AlloyDB for PostgreSQL.
B-tree
B-tree is the default index type and is optimized for equality ( = ) and range
queries ( < , > , BETWEEN ). Because B-tree indexes are general purpose
indexes, they're the most frequently used index type, generally used in primary
keys, foreign keys, and unique constraints. You can create function-based
indexes using the B-tree structure and also partial indexes based on a WHERE
clause in the index definition.
B-tree indexes are the only PostgreSQL 16 index type that you can build in
parallel. However, in PostgreSQL 17 you can build additional index types in
parallel, such as BRIN indexes. Additionally, starting in PostgreSQL 18,
parallel index builds include the GIN index type. For more information, see the
PostgreSQL 17 documentation .
Common operator classes
This section contains common AlloyDB operator classes.
text_pattern_ops, varchar_pattern_ops, bpchar_pattern_ops
Use the text_pattern_ops , varchar_pattern_ops , bpchar_pattern_ops operator
classes when you want to use the index to compare values
strictly character by character—either text , varchar , or
char —rather than according to the locale-specific collation rules.
Generally, you use these operator classes when you need to use LIKE or regular
expression comparisons when the database doesn't use the standard "C" locale.
You can't use these operator classes for comparisons using ordinary < , <= ,
> , or >= operators. To support these comparisons, you must create a separate
index on the same column using the default operator class.
Common index options
This section contains common AlloyDB index options.
ASC and DESC
Use the ASC and DESC index options to specify the sort order of a column
within the index. ASC is the default option. Specifying the sort order of a
column is especially useful in situations where the index contains the columns
that are present in ORDER BY clauses. This can potentially avoid a
separate sort step from occurring.
The following is an example that shows that when you use a standard index, a
sort must occur:
CREATE INDEX on public . t1 ( product_id );
SELECT * FROM public . t1 WHERE product_id = 10 ORDER BY id ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Sort ( cost = 87729 . 23 .. 88006 . 73 rows = 111000 width = 64 ) ( actual time = 108 . 495 .. 112 . 458 rows = 99923 loops = 1 )
Output : id , pkid , value , product_id , effective_date
Sort Key : t1 . id
Sort Method : quicksort Memory : 13292 kB
Buffers : shared hit = 66795
-> Bitmap Heap Scan on public . t1 ( cost = 964 . 08 .. 78427 . 32 rows = 111000 width = 64 ) ( actual time = 25 . 501 .. 97 . 519 rows = 99923 loops = 1 )
Output : id , pkid , value , product_id , effective_date
Recheck Cond : ( t1 . product_id = 10 )
Heap Blocks : exact = 66708
Buffers : shared hit = 66795
Columnar Check : table is not in the columnar store
-> Bitmap Index Scan on t1_product_id_idx ( cost = 0 . 00 .. 936 . 33 rows = 111000 width = 0 ) ( actual time = 13 . 999 .. 14 . 000 rows = 99923 loops = 1 )
Index Cond : ( t1 . product_id = 10 )
Buffers : shared hit = 87
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : 2626581683586613429
Planning Time : 0 . 115 ms
Execution Time : 116 . 820 ms
The following is an example of adding the ID as a sorted column:
CREATE INDEX ON public . t1 ( product_id , id DESC );
SELECT * FROM public . t1 WHERE product_id = 10 ORDER BY id ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Index Scan Backward using t1_product_id_id_idx on public . t1 ( cost = 0 . 43 .. 84394 . 40 rows = 111000 width = 64 ) ( actual time = 0 . 020 .. 57 . 692 rows = 99923 loops = 1 )
Output : id , pkid , value , product_id , effective_date
Index Cond : ( t1 . product_id = 10 )
Buffers : shared hit = 67258
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : 2626581683586613429
Planning Time : 0 . 075 ms
Execution Time : 62 . 213 ms
By adding the sorted column, the query time was reduced by 50% because the
sort steps of the plan were skipped.
NULLS FIRST and NULLS LAST
NULLS FIRST and NULLS LAST specify whether to store NULLS first in the
index or last in the index. NULLS LAST is the default. This option is
especially useful in situations when the index contains columns that might be
specified as IS NOT NULL or IS NULL in the predicate. This option allows
less I/O to occur on the index in situations when this pattern matches the
predicate.
INCLUDE
The INCLUDE option is helpful if you want to include a column in an index, but
don't want to actually index it, such as in the case of covering an index or a
condition where you perform a lookup using one column and a join using another.
The INCLUDE option can help alleviate additional I/O to the heap to get the
additional columns that are needed.
This example shows that without INCLUDE specified, a heap access must
occur:
SELECT mt . id FROM public . t1 mt JOIN public . t2 up ON ( mt . product_id = up . product_id ) WHERE id = 297 ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Nested Loop ( cost = 0 . 58 .. 3 . 93 rows = 1 width = 4 ) ( actual time = 0 . 016 .. 0 . 018 rows = 1 loops = 1 )
Output : mt . id
Inner Unique : true
Buffers : shared hit = 6
-> Index Scan using t1_pkey on public . t1 mt ( cost = 0 . 43 .. 2 . 65 rows = 1 width = 8 ) ( actual time = 0 . 010 .. 0 . 011 rows = 1 loops = 1 )
Output : mt . id , mt . pkid , mt . value , mt . product_id , mt . effective_date
Index Cond : ( mt . id = 297 )
Buffers : shared hit = 4
Columnar Check : table is not in the columnar store
-> Index Only Scan using t2_pkey on public . t2 up ( cost = 0 . 14 .. 1 . 26 rows = 1 width = 4 ) ( actual time = 0 . 003 .. 0 . 003 rows = 1 loops = 1 )
Output : up . product_id
Index Cond : ( up . product_id = mt . product_id )
Heap Fetches : 0
Buffers : shared hit = 2
Columnar Check : table is too small
Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : - 6472913602500700033
Planning :
Buffers : shared hit = 37
Planning Time : 0 . 296 ms
Execution Time : 0 . 152 ms
Using INCLUDE on the joined column produces an Index Only Scan :
CREATE INDEX ON public . t1 ( id ) INCLUDE ( product_id );
SELECT mt . id FROM public . t1 mt JOIN public . t2 up ON ( mt . product_id = up . product_id ) WHERE id = 297 ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Nested Loop ( cost = 0 . 58 .. 3 . 93 rows = 1 width = 4 ) ( actual time = 0 . 016 .. 0 . 019 rows = 1 loops = 1 )
Output : mt . id
Inner Unique : true
Buffers : shared hit = 6
-> Index Only Scan using t1_id_product_id_idx on public . t1 mt ( cost = 0 . 43 .. 2 . 65 rows = 1 width = 8 ) ( actual time = 0 . 010 .. 0 . 012 rows = 1 loops = 1 )
Output : mt . id , mt . product_id
Index Cond : ( mt . id = 297 )
Heap Fetches : 1
Buffers : shared hit = 4
Columnar Check : table is not in the columnar store
-> Index Only Scan using t2_pkey on public . t2 up ( cost = 0 . 14 .. 1 . 26 rows = 1 width = 4 ) ( actual time = 0 . 002 .. 0 . 003 rows = 1 loops = 1 )
Output : up . product_id
Index Cond : ( up . product_id = mt . product_id )
Heap Fetches : 0
Buffers : shared hit = 2
Columnar Check : table is too small
Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : - 6472913602500700033
Planning :
Buffers : shared hit = 20
Planning Time : 0 . 268 ms
Execution Time : 0 . 063 ms
When you add the INCLUDE column, the query time is reduced by 50%.
HASH
The HASH option is best for basic equality comparisons such as = . It only
supports a single column and doesn't support uniqueness checks. Hash indexes are
best optimized for workloads that use SELECT and UPDATE heavily, and use
equality scans on larger tables that are always lossy and require index
matches to recheck the heap for validity.
Lossy means that no visibility map is maintained, and that for every entry in
the index, the heap block must be checked to ensure that the index entry is
valid. However, because the equality doesn't have to descend the tree like in
a B-tree index, matches are usually faster even though a recheck must occur.
GIN and GiST
The GIN (generalized inverted index) and GiST (generalized search tree) index
types are good for full-text search, array, and
jsonb key-value pair columns. Index maintenance is delayed
with this index type so there's a chance that index recheck operations occur
on tables that have ever-changing values for the indexed column. Tuning
parameters such as
gin_pending_list_limit
and
fastupdate
can reduce the recheck operations, but there are tradeoffs with INSERT
contention. GIN indexes can also be quite a bit larger than the data they index,
so be mindful of space requirements when you use them.
As with HASH indexes, GiST indexes are also lossy and can produce false
matches, and the DBMS must check the heap to make sure that the match is valid.
GIN indexes are generally not lossy except for certain circumstances. Overall,
you don't have to check the heap to make sure that the match is valid.
When choosing between GiST or GIN index types, consider these performance
differences:
GIN index lookups are about three times faster than GiST.
GIN indexes take about three times longer to build than GiST.
GIN indexes are moderately slower to update than GiST indexes, but about
10 times slower if fast-update support is disabled.
GIN indexes are two-to-three times larger than GiST indexes.
GiST indexes are better than GIN indexes in situations where the column
being indexed is updated frequently.
btree_gin, pg_trgm, and pg_bigm extensions
When you use GIN and GiST index types, you need additional extensions such as
btree_gin , pg_trgm , and pg_bigm , depending on the use case for the index.
btree_gin : this module provides sample generalized inverted index
(GIN) operator classes that implement B-tree equivalent behavior for
certain data types. This operator is generally useful for GIN testing and
as a base for developing other GIN operator classes because, while it
provides B-tree like functionality, the operator rarely outperforms a
typical B-tree index. For more information, and to verify that all the
datatypes are eligible for use within the btree_gin index, see
GIN operator classes with B-tree behavior .
pg_trgm : this module allows the creation of a trigram (3-gram) index. It
provides functions and operators to determine the similarity of
alphanumeric text that's based on trigram matching, as well
as index operator classes that support fast searching for similar strings.
For more information, see
Support for similarity of text using trigram matching .
pg_bigm : this module allows the creation of a bigram (2-gram) index. It
provides faster full-text search.
The following table summarizes the differences between the pg_trgm and
pg_bigm extensions. For the full context of these differences, see the
Comparison with pg_trgm GitHub documentation.
Functionalities and features
pg_trgm
pg_bigm
Phrase-matching method for full-text search
3-gram
2-gram
Available index
GIN and GiST
GIN only
Available text search operators
LIKE (~~) , ILIKE (~~*) , ~ ,
~*
LIKE only
Full-text search for non-alphabetic language, such as Japanese
Not supported
Supported
Full-text search with 1-2 characters keyword
Slow
Fast
Similarity search
Supported
Supported
Maximum indexed column size
238,609,291 Bytes (~228 MB)
107,374,180 Bytes (~102 MB)
BRIN
The BRIN (block-range) index is particularly useful when the layout order of
the data in the table and column of interest are highly correlated. This index
type is lossy, and you must obtain the actual value in the index from the
heap because the index doesn't store the actual value. BRIN indexes are also
orders of magnitude smaller than the same B-tree index. This is because each
page holds multiple row ranges and is just a pointer to the minimum and maximum
on any given page. The index is more efficient than a B-tree because if the
value being searched for isn't in that range, the entire page can be skipped.
The BRIN index might be a good alternative to B-tree indexes in the following
situations:
Instances where large datasets—larger than a few hundred
thousand rows—are queried and returned to the client.
When there are insert-only tables and correlated series columns such as
monotonically increasing IDs or timestamps.
When the cost to maintain a B-tree index on a very large table needs to
be reduced or avoided. Maintaining BRIN indexes is less expensive due to
their lower memory footprint.
The BRIN index is also less intrusive to build and requires less memory
footprint than the alternative index types. Again, this only holds true if the
layout of the table and the column of interest are highly correlated.
To use the BRIN index, follow these steps.
Create a table for testing:
CREATE TABLE brin_test AS
SELECT
1000000 . 0 * random () AS random ,
a :: float8 AS sequential ,
1 . 0 AS value
FROM
generate_series ( 1 , 1000000 ) a ;
Use a B-tree index to sum up correlated data and inspect the
performance:
SELECT SUM ( value ) FROM brin_test WHERE sequential BETWEEN 0 . 0 AND 500000 . 0 ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Aggregate ( cost = 16075 . 50 .. 16075 . 51 rows = 1 width = 32 ) ( actual time = 133 . 468 .. 133 . 469 rows = 1 loops = 1 )
Output : sum ( value )
Buffers : shared hit = 4554
-> Index Scan using btree_sequential_x on public . brin_test ( cost = 0 . 42 .. 14815 . 33 rows = 504070 width = 5 ) ( actual time = 0 . 024 .. 76 . 205 rows = 500000 loops = 1 )
Output : random , sequential , value
Index Cond : (( brin_test . sequential >= '0' :: double precision ) AND ( brin_test . sequential '500000' :: double precision ))
Buffers : shared hit = 4554
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830040kB' , max_parallel_workers_per_gather = '0' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : 9074149420177182574
Planning :
Buffers : shared hit = 4
Planning Time : 0 . 148 ms
Execution Time : 133 . 538 ms
When the data is highly correlated or ordered, a BRIN index has these
advantages:
Fewer buffers are visited.
Even though there are heap blocks visited, the index access in the
query plan is approximately 20% faster.
Use a BRIN index to sum up the same correlated data:
SELECT SUM ( value ) FROM brin_test WHERE sequential BETWEEN 0 . 0 AND 500000 . 0 ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Aggregate ( cost = 15560 . 33 .. 15560 . 34 rows = 1 width = 32 ) ( actual time = 107 . 530 .. 107 . 531 rows = 1 loops = 1 )
Output : sum ( value )
Buffers : shared hit = 3202
-> Bitmap Heap Scan on public . brin_test ( cost = 130 . 15 .. 14300 . 15 rows = 504070 width = 5 ) ( actual time = 0 . 056 .. 58 . 016 rows = 500000 loops = 1 )
Output : random , sequential , value
Recheck Cond : (( brin_test . sequential >= '0' :: double precision ) AND ( brin_test . sequential '500000' :: double precision ))
Rows Removed by Index Recheck : 2400
Heap Blocks : lossy = 3200
Buffers : shared hit = 3202
Columnar Check : table is not in the columnar store
-> Bitmap Index Scan on brin_sequential_x ( cost = 0 . 00 .. 4 . 13 rows = 520000 width = 0 ) ( actual time = 0 . 046 .. 0 . 046 rows = 32000 loops = 1 )
Index Cond : (( brin_test . sequential >= '0' :: double precision ) AND ( brin_test . sequential '500000' :: double precision ))
Buffers : shared hit = 2
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830040kB' , max_parallel_workers_per_gather = '0' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : 9074149420177182574
Planning :
Buffers : shared hit = 5
Planning Time : 0 . 120 ms
Execution Time : 107 . 597 ms
Bloom
A Bloom index is based on the concept of a Bloom filter, a space-efficient
data structure used to test whether an element is a member of a set or not.
It's useful on
tables with a large number of columns that are also very large in size. The
Bloom filter index is included in the contrib module of PostgreSQL, therefore
it's also included with AlloyDB. For more on the concept of a
Bloom filter, see
Bloom filter .
Use a Bloom index when the predicate is based on several
columns on a given table. When you create the index, specify the following:
The length of the hash array generated for each set of indexed columns
How many bits are set in the array for each column.
In the following example, the length of the array generated in the index for each row is
80 bytes. Each column is passed to a hash function: col1 (4 times),
col2 (2 times) and col3 (4 times). This indicates that a total of 10 bits
are set for each row in the index.
CREATE INDEX bloom_index_test ON public . bloom_test USING BLOOM ( emp_id , dept_id , location_code )
WITH ( length = 80 , col1 = 4 , col2 = 2 , col3 = 4 );
Bucket size
When you build a Bloom index, you must specify the total
length—bucket size—of a row, and the individual bits or signature
for each column. If you don't specify values, the specification is set as the
default bucket size of 80 bits and a column signature of two bits. The more you
increase the bucket size, the more bits you have available to assign to each
column in the index.
When you choose the length for the index, you have a few considerations. The
default of 80 bits is often too small for real-world production tables with more
than 3-4 indexed columns. Maximum efficiency is obtained when the bucket is
approximately 50% full after all bits are assigned to each column. The trade off
is wasted space—the bucket is too large for the bits assigned to
it—or too many false positives because the bucket is too full, in which
case, more heap rechecks must occur.
For best accuracy, use the following calculations to determine bucket size:
Sum your bits: add up the colN values you chose for all the columns
you're indexing.
Example: You index five columns. Three are low cardinality
(2 bits each), two are high (4 bits each).
Sum = (3 * 2) + (2 * 4) = 14 bits.
Apply the multiplier: multiply that sum by 2 to 4.
Multiplier 2 (aggressive/small): 14 * 2 = 28
(round up to 32). This is risky; the index might saturate.
Multiplier 4 (safe/performance): 14 * 4 = 56
(round up to 64). This keeps the signature sparse enough to ensure high
filtering power.
However, if your calculation of bucket sizes doesn't suit the situation,
follow these general rules:
If you're indexing 5–10 columns, start with length=128 .
If you're indexing 10–30 columns, start with length=256 or length=512 .
When you assign bits to columns, follow the recommendations in the following
table:
Column Type / Cardinality
Recommended colN
Reasoning
Low cardinality (booleans, enums, status flags)
1 to 2 bits
With only a few possible values—for example, true
or false — you don't need many bits to distinguish
them. Using a high number of bits wastes space.
Medium cardinality (category IDs, cities, types)
2 to 4 bits
The default (2) is often sufficient, but 3 or 4 bits adds better
filtering if this column is frequently queried alone.
High cardinality (UUIDs, user IDs, timestamps)
4 to 8+ bits
High variance data needs more bits to ensure that two different values
don't accidentally hash to the same signature pattern.
Sometimes setting the bits for the column signature requires some testing, but
don't set the signature higher than necessary. This causes the index to be
larger than necessary and therefore less efficient.
Configuration examples
Consider this scenario for configuring a Bloom index: you have a
transactions table, and you want to query by user_id (high cardinality),
merchant_id (high), status (low), and region (medium).
The following shows the default configuration, which is a sub-optimal configuration for the
provided scenario:
BLOOM ( user_id , merchant_id , status , region ) ( length = 80 , col1 = 2 , col2 = 2 , col3 = 2 , col4 = 2 )
The resulting index is small, but searching for a specific user_id returns many
false positives because two bits isn't enough to distinguish millions of users.
We recommend that you use the following configuration:
user_id : 5 bits (high distinctness is needed)
merchant_id : 5 bits
status : 2 bits
region : 3 bits
Total bits per row: 5 + 5 + 2 + 3 = 15 bits.
Target length: 15 * 4 = 60. Round up to the nearest 16 -> 64 bits.
BLOOM ( user_id , merchant_id , status , region ) ( length = 64 , col1 = 5 , col2 = 5 , col3 = 2 , col4 = 3 )
Comparison to the B-tree index
Unlike the B-tree index, the Bloom index only stores pointers to the
heap, so the index is smaller than a B-tree. Even so, every index scan is
lossy and a read to the heap must occur. In addition, the Bloom index also
creates false positives that are dealt with during the recheck process. However,
when you have a multi-column index that supports many predicate possibilities,
the Bloom index is still a good alternative over a B-tree with the same number
of columns. Just like a hash index, the Bloom index is also only good for
"equality" operators.
The following example demonstrates using a test table and a
regular B-tree index:
CREATE TABLE public . bloom_test (
emp_id int ,
dept_id int ,
id2 int ,
id3 int ,
id4 int ,
id5 int ,
id6 int ,
id7 int ,
details text ,
location_code int
);
INSERT INTO public . bloom_test SELECT ( random () * 1000000 ):: int , ( random () * 1000000 ):: int ,
( random () * 1000000 ):: int ,( random () * 1000000 ):: int ,( random () * 1000000 ):: int ,( random () * 1000000 ):: int ,
( random () * 1000000 ):: int ,( random () * 1000000 ):: int , md5 ( g :: text ), floor ( random () * ( 20000 - 9999 + 1 ) + 9999 )
FROM generate_series ( 1 , 100 * 1 e4 ) g ;
CREATE INDEX idx_btree_bloom_test ON public . bloom_test ( emp_id , dept_id , id2 , id3 , id4 , id5 , id6 , location_code );
SELECT * from public . bloom_test WHERE id5 = 564804 AND id6 = 797758 ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Index Scan using idx_btree_bloom_test on public . bloom_test ( cost = 0 . 57 .. 1664948 . 92 rows = 1 width = 69 ) ( actual time = 28728 . 852 .. 96703 . 656 rows = 1 loops = 1 )
Output : emp_id , dept_id , id2 , id3 , id4 , id5 , id6 , id7 , details , location_code
Index Cond : (( bloom_test . id5 = 564804 ) AND ( bloom_test . id6 = 797758 ))
Buffers : shared hit = 54032 read = 548382 written = 97 , ultra fast cache hit = 548382
I / O Timings : shared read = 94031 . 801 write = 2 . 571
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : - 5439446995179335012
Planning Time : 0 . 155 ms
Execution Time : 96704 . 556 ms
SELECT * FROM public . bloom_test WHERE id4 = 219126 AND location_code = 14424 ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Index Scan using idx_btree_bloom_test on public . bloom_test ( cost = 0 . 57 .. 1664948 . 92 rows = 1 width = 69 ) ( actual time = 82659 . 287 .. 101890 . 136 rows = 1 loops = 1 )
Output : emp_id , dept_id , id2 , id3 , id4 , id5 , id6 , id7 , details , location_code
Index Cond : (( bloom_test . id4 = 219126 ) AND ( bloom_test . location_code = 14424 ))
Buffers : shared hit = 17157 read = 585257 written = 108 , ultra fast cache hit = 585257
I / O Timings : shared read = 99315 . 890 write = 2 . 948
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : 1277149086574410027
Planning Time : 0 . 606 ms
Execution Time : 101895 . 175 ms
The following example shows the same queries with a Bloom index:
CREATE INDEX idx_bloom_test ON public . bloom_test USING bloom ( emp_id , dept_id , id2 , id3 , id4 , id5 , id6 , location_code ) WITH ( length = 128 , col1 = 6 , col2 = 6 , col3 = 6 , col4 = 6 , col5 = 2 , col6 = 4 , col7 = 2 , col8 = 6 );
SELECT * FROM public . bloom_test WHERE id5 = 564804 AND id6 = 797758 ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Bitmap Heap Scan on public . bloom_test ( cost = 1297299 . 20 .. 1297300 . 32 rows = 1 width = 69 ) ( actual time = 968 . 133 .. 996 . 063 rows = 1 loops = 1 )
Output : emp_id , dept_id , id2 , id3 , id4 , id5 , id6 , id7 , details , location_code
Recheck Cond : (( bloom_test . id5 = 564804 ) AND ( bloom_test . id6 = 797758 ))
Rows Removed by Index Recheck : 21505
Heap Blocks : exact = 21315
Buffers : shared hit = 267913 read = 23673 written = 610 , ultra fast cache hit = 23673
I / O Timings : shared read = 125 . 918 write = 5 . 639
Columnar Check : table is not in the columnar store
- > Bitmap Index Scan on idx_bloom_test ( cost = 0 . 00 .. 1297299 . 20 rows = 1 width = 0 ) ( actual time = 695 . 507 .. 695 . 507 rows = 21506 loops = 1 )
Index Cond : (( bloom_test . id5 = 564804 ) AND ( bloom_test . id6 = 797758 ))
Buffers : shared hit = 267809 read = 2462 written = 13 , ultra fast cache hit = 2462
I / O Timings : shared read = 34 . 798 write = 0 . 196
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : - 5439446995179335012
Planning Time : 0 . 105 ms
Execution Time : 996 . 411 ms
SELECT * FROM public . bloom_test WHERE id4 = 219126 AND location_code = 14424 ;
QUERY PLAN
--------------------------------------------------------------------------------------------------------
Bitmap Heap Scan on public . bloom_test ( cost = 1297299 . 20 .. 1297300 . 32 rows = 1 width = 69 ) ( actual time = 620 . 249 .. 626 . 191 rows = 1 loops = 1 )
Output : emp_id , dept_id , id2 , id3 , id4 , id5 , id6 , id7 , details , location_code
Recheck Cond : (( bloom_test . id4 = 219126 ) AND ( bloom_test . location_code = 14424 ))
Rows Removed by Index Recheck : 5474
Heap Blocks : exact = 5456
Buffers : shared hit = 267677 read = 8050 written = 66 , ultra fast cache hit = 8050
I / O Timings : shared read = 146 . 826 write = 0 . 613
Columnar Check : table is not in the columnar store
- > Bitmap Index Scan on idx_bloom_test ( cost = 0 . 00 .. 1297299 . 20 rows = 1 width = 0 ) ( actual time = 551 . 579 .. 551 . 580 rows = 5475 loops = 1 )
Index Cond : (( bloom_test . id4 = 219126 ) AND ( bloom_test . location_code = 14424 ))
Buffers : shared hit = 267673 read = 2598 , ultra fast cache hit = 2598
I / O Timings : shared read = 126 . 299
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : 1277149086574410027
Planning :
Buffers : shared hit = 55
Planning Time : 0 . 210 ms
Execution Time : 628 . 554 ms
The Bloom index also occupies less space than a similarly constructed B-tree
index:
\dt+ public.bloom_test
List of relations
Schema | Name | Type | Owner | Persistence | Access method | Size | Description
--------+------------+-------+----------+-------------+---------------+---------+-------------
public | bloom_test | table | postgres | permanent | heap | 9663 MB | NULL
--------------------------------------------------------------------------------------------------------
\di+ idx_bloom_test
List of relations
Schema | Name | Type | Owner | Table | Persistence | Access method | Size |
--------+----------------------+-------+----------+------------+-------------+---------------+---------+
public | idx_bloom_test | index | postgres | bloom_test | permanent | bloom | 2112 MB |
--------------------------------------------------------------------------------------------------------
\di+ idx_btree_bloom_test
List of relations
Schema | Name | Type | Owner | Table | Persistence | Access method | Size |
public | idx_btree_bloom_test | index | postgres | bloom_test | permanent | btree | 4723 MB |
For multi-column or variable column predicate support that uses equality
predicates, a Bloom index can be a good alternative to creating multiple single-
or dual-column indexes. Not only is performance similar or better, but index
maintenance on the table is reduced because there are fewer indexes to
maintain.
Vector
pgvector is an open source extension used to perform similarity and
approximate nearest neighbor searches based on embedding models. Included with
the extension are the Inverted File with Flat Compression (IVFFlat) and
Hierarchical Navigable Small World (HNSW) index types. Proprietary to
Google Cloud is the Scalable Nearest Neighbors (ScaNN) index type.
Each of these have distinct advantages and disadvantages.
When you choose and build these indexes, it's important to understand what type
of neighbor comparisons you want to use and build the index accordingly. There
are three search options:
L2 distance: <->
vector_l2_ops : operator used for IVFFlat and HNSW indexes.
l2 : operator used for ScaNN indexes.
Inner product: <#>
vector_ip_ops : operator used for IVFFlat and HNSW indexes.
dot_product : operator used for ScaNN indexes.
Cosine distance: <=>
vector_cosine_ops : operator used for IVFFlat and HNSW indexes.
cosine : operator used for ScaNN indexes.
Most often, the cosine distance is used, but it's important to specify this
when you build the index. Otherwise, the results might be inconsistent.
IVFFlat
The IVFFlat index takes the vector values and divides them into multiple lists.
As the index is created and maintained, the IVFFlat algorithm calculates
centroids and finds the clusters around those centroids. There's a list for each
centroid and the elements of these lists are what makes up the vectors for the
corresponding cluster. Basically, the index is able to take the search vector
and compare it to a subset of the generated index lists and return the values
that are closest to the search vector.
The accuracy of the index and the values it returns depends on the number of
lists generated when the index is built and the number of lists that are used in
the comparison of the search vector. The more lists there are, the larger the
index and the longer it takes to build, but the recall is much better.
For more information on how to tune the IVFFlat index, see
Tune vector query performance in AlloyDB for PostgreSQL .
The following is an example of how to create and use the IVFFlat index:
CREATE INDEX posts_ivfflat ON posts USING IVFFLAT ( body_embeddings vector_cosine_ops )
WITH ( lists = 75 );
CREATE INDEX
Time : 5346 . 875 ms ( 00 : 05 . 347 )
SELECT
p . id , creationdate , score , title , viewcount , SUBSTRING ( p . body , 0 , 50 ) as body
FROM
posts p
WHERE
1 = 1
AND title is not null
ORDER BY
body_embeddings < = > embedding ( 'textembedding-gecko@003' , 'What are left turning tendencies' ):: vector
LIMIT 5 ;
- [ RECORD 1 ] + -----------------------------------------------------------------------------------------
id | 55164
creationdate | 2018 - 09 - 18 03 : 34 : 15 . 493
score | 1
title | What are the two turning tendencies that occur during a steep turn ?
viewcount | 1211
body | < p>A question has come up in preparation for a Bl
- [ RECORD 2 ] + -----------------------------------------------------------------------------------------
id | 59319
creationdate | 2019 - 01 - 23 02 : 11 : 11 . 437
score | 7
title | If a twin - engine airplane ' s propellers both rotate in the same direction , do they still produce a left - turning tendency ?
viewcount | 3844
body | < p>If an airplane with two propellers has both pr
- [ RECORD 3 ] + -----------------------------------------------------------------------------------------
id | 74548
creationdate | 2020 - 02 - 15 21 : 23 : 28 . 55
score | 7
title | Why is a right pattern the standard for a hold ?
viewcount | 2074
body | < p>Why are right turns the standard hold turning
- [ RECORD 4 ] + -----------------------------------------------------------------------------------------
id | 69660
creationdate | 2019 - 09 - 13 04 : 52 : 27 . 437
score | 2
title | Is any convention to tell the propeller rotation direction of an airplane ?
viewcount | 1318
body | < p><a href = "https://i.stack.imgur.com/VmM8M.jpg"
- [ RECORD 5 ] + -----------------------------------------------------------------------------------------
id | 70541
creationdate | 2019 - 10 - 09 22 : 37 : 05 . 57
score | 0
title | How many tendencies are affected by Gyroscopic precession for single propeller airplane ?
viewcount | 557
body | < p><a href = "https://i.stack.imgur.com/xt8Si.jpg"
The index size is 294 MB.
The following is the execution plan that uses the IVFFlat index:
Limit ( cost = 12132 . 64 .. 12136 . 97 rows = 5 width = 126 ) ( actual time = 37 . 322 .. 37 . 571 rows = 5 loops = 1 )
Output : id , creationdate , score , title , viewcount , ( "substring" ( body , 0 , 50 )), (( body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ))
Buffers : shared hit = 26995
- > Gather Merge ( cost = 12132 . 64 .. 34291 . 76 rows = 25607 width = 126 ) ( actual time = 37 . 320 .. 37 . 568 rows = 5 loops = 1 )
Output : id , creationdate , score , title , viewcount , ( "substring" ( body , 0 , 50 )), (( body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ))
Workers Planned : 2
Workers Launched : 2
Buffers : shared hit = 26995
- > Parallel Index Scan using posts_ivfflat on public . posts p ( cost = 11132 . 62 .. 30336 . 05 rows = 10670 width = 126 ) ( actual time = 33 . 313 .. 33 . 356 max time = 36 . 211 rows = 4 loops = 3 )
Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )
Order By : ( p . body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )
Filter : ( p . title IS NOT NULL )
Rows Removed by Filter : 2
Buffers : shared hit = 26994
Worker 0 : actual time = 30 . 663 .. 30 . 715 rows = 5 loops = 1
Buffers : shared hit = 6258
Worker 1 : actual time = 33 . 106 .. 33 . 143 rows = 5 loops = 1
Buffers : shared hit = 6631
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830032kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : - 6886845657091642615
Planning :
Buffers : shared hit = 2
Planning Time : 112 . 635 ms
Execution Time : 37 . 631 ms
HNSW
The HNSW index differs from the IVFFlat index in that rather than creating
centroids and clusters based on lists, the algorithm creates a graph with
multiple layers. The nodes in the graphs represent the vectors and the links
between them represent distance. Each layer is a different zoom level of the
entire graph. As each layer is searched and no further candidate nodes are
found, the search continues at the next layer—zoom level—where more
links are present.
The performance of the HNSW index is better than the IVFFlat index because the
concept of graphs and layers reduce the number of vector distance comparisons
that need to be executed. This also increases performance because more queries
can be run concurrently.
For more information on how to tune the HNSW index, see
Tune vector query performance in AlloyDB for PostgreSQL .
The following is an example of how to create an HNSW index:
CREATE INDEX posts_hnsw ON posts USING hnsw ( body_embeddings vector_cosine_ops )
WITH ( m = 16 , ef_construction = '64' );
CREATE INDEX
Time : 53568 . 774 ms ( 00 : 53 . 569 )
SELECT
p . id , creationdate , score , title , viewcount , SUBSTRING ( p . body , 0 , 50 ) as body
FROM
posts p
WHERE
1 = 1
AND title is not null
ORDER BY
body_embeddings < = > embedding ( 'textembedding-gecko@003' , 'What are left turning tendencies' ):: vector
LIMIT 5 ;
- [ RECORD 1 ] + -----------------------------------------------------------------------------------------
id | 55164
creationdate | 2018 - 09 - 18 03 : 34 : 15 . 493
score | 1
title | What are the two turning tendencies that occur during a steep turn ?
viewcount | 1211
body | < p>A question has come up in preparation for a Bl
- [ RECORD 2 ] + -----------------------------------------------------------------------------------------
id | 59319
creationdate | 2019 - 01 - 23 02 : 11 : 11 . 437
score | 7
title | If a twin - engine airplane ' s propellers both rotate in the same direction , do they still produce a left - turning tendency ?
viewcount | 3844
body | < p>If an airplane with two propellers has both pr
- [ RECORD 3 ] + -----------------------------------------------------------------------------------------
id | 74548
creationdate | 2020 - 02 - 15 21 : 23 : 28 . 55
score | 7
title | Why is a right pattern the standard for a hold ?
viewcount | 2074
body | < p>Why are right turns the standard hold turning
- [ RECORD 4 ] + -----------------------------------------------------------------------------------------
id | 69660
creationdate | 2019 - 09 - 13 04 : 52 : 27 . 437
score | 2
title | Is any convention to tell the propeller rotation direction of an airplane ?
viewcount | 1318
body | < p><a href = "https://i.stack.imgur.com/VmM8M.jpg"
- [ RECORD 5 ] + -----------------------------------------------------------------------------------------
id | 70541
creationdate | 2019 - 10 - 09 22 : 37 : 05 . 57
score | 0
title | How many tendencies are affected by Gyroscopic precession for single propeller airplane ?
viewcount | 557
body | < p><a href = "https://i.stack.imgur.com/xt8Si.jpg"
The index size is 293 MB.
The following is the execution plan that uses the HNSW index:
Limit ( cost = 371 . 86 .. 382 . 85 rows = 5 width = 126 ) ( actual time = 1 . 045 .. 1 . 091 rows = 5 loops = 1 )
Output : id , creationdate , score , title , viewcount , ( "substring" ( body , 0 , 50 )), (( body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ))
Buffers : shared hit = 889
- > Index Scan using posts_hnsw on public . posts p ( cost = 371 . 86 .. 56037 . 34 rows = 25329 width = 126 ) ( actual time = 1 . 043 .. 1 . 088 rows = 5 loops = 1 )
Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )
Order By : ( p . body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )
Filter : ( p . title IS NOT NULL )
Rows Removed by Filter : 2
Buffers : shared hit = 889
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830032kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : - 6886845657091642615
Planning :
Buffers : shared hit = 1
Planning Time : 93 . 429 ms
Execution Time : 1 . 127 ms
Here are some more things to consider about the differences between the
included IVFFlat and HNSW index types:
Build time: IVFFlat indexes build significantly faster than HNSW
indexes.
Memory usage: IVFFlat indexes generally require less build and
runtime memory compared to HNSW indexes.
Query performance: HNSW indexes typically deliver significantly
faster query responses than IVFFlat indexes due to the number of vectors
that need to be compared to get the same result.
ScaNN
The ScaNN index is perfect for very large datasets. It provides faster query
time, lower memory footprint, and higher write throughput than a similar
HNSW-based index.
For more information on how to tune the ScaNN index, see the following
resources:
Tune vector query performance in AlloyDB for PostgreSQL
AlloyDB ScaNN Index reference
Understanding the ScaNN index in AlloyDB
The following is an example of how to tune the ScaNN index:
CREATE INDEX posts_scann on posts using scann ( body_embeddings cosine )
with ( num_leaves = 275 , quantizer = 'sq8' );
CREATE INDEX
Time : 3963 . 056 ms ( 00 : 03 . 963 )
SELECT
p . id , creationdate , score , title , viewcount , SUBSTRING ( p . body , 0 , 50 ) as body
FROM
posts p
WHERE
1 = 1
AND title is not null
ORDER BY
body_embeddings < = > embedding ( 'textembedding-gecko@003' , 'What are left turning tendencies' ):: vector
LIMIT 5 ;
- [ RECORD 1 ] + -----------------------------------------------------------------------------------------
id | 55164
creationdate | 2018 - 09 - 18 03 : 34 : 15 . 493
score | 1
title | What are the two turning tendencies that occur during a steep turn ?
viewcount | 1211
body | < p>A question has come up in preparation for a Bl
- [ RECORD 2 ] + -----------------------------------------------------------------------------------------
id | 59319
creationdate | 2019 - 01 - 23 02 : 11 : 11 . 437
score | 7
title | If a twin - engine airplane ' s propellers both rotate in the same direction , do they still produce a left - turning tendency ?
viewcount | 3844
body | < p>If an airplane with two propellers has both pr
- [ RECORD 3 ] + -----------------------------------------------------------------------------------------
id | 74548
creationdate | 2020 - 02 - 15 21 : 23 : 28 . 55
score | 7
title | Why is a right pattern the standard for a hold ?
viewcount | 2074
body | < p>Why are right turns the standard hold turning
- [ RECORD 4 ] + -----------------------------------------------------------------------------------------
id | 69660
creationdate | 2019 - 09 - 13 04 : 52 : 27 . 437
score | 2
title | Is any convention to tell the propeller rotation direction of an airplane ?
viewcount | 1318
body | < p><a href = "https://i.stack.imgur.com/VmM8M.jpg"
- [ RECORD 5 ] + -----------------------------------------------------------------------------------------
id | 70541
creationdate | 2019 - 10 - 09 22 : 37 : 05 . 57
score | 0
title | How many tendencies are affected by Gyroscopic precession for single propeller airplane ?
viewcount | 557
body | < p><a href = "https://i.stack.imgur.com/xt8Si.jpg"
The index size is 13 MB.
The following is the execution plan that uses the ScaNN index:
Limit ( cost = 17 . 78 .. 17 . 92 rows = 5 width = 126 ) ( actual time = 3 . 666 .. 3 . 695 rows = 5 loops = 1 )
Output : id , creationdate , score , title , viewcount , ( "substring" ( body , 0 , 50 )), (( body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ))
Buffers : shared hit = 2565
- > Index Scan using posts_scann on public . posts p ( cost = 17 . 78 .. 743 . 35 rows = 25432 width = 126 ) ( actual time = 3 . 664 .. 3 . 692 rows = 5 loops = 1 )
Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )
Order By : ( p . body_embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )
Filter : ( p . title IS NOT NULL )
Rows Removed by Filter : 4
Buffers : shared hit = 2565
Columnar Check : table is not in the columnar store
Settings : effective_cache_size = '9830032kB' , random_page_cost = '1.1' , work_mem = '256MB'
Query Identifier : - 6886845657091642615
Planning :
Buffers : shared hit = 2
Planning Time : 53 . 265 ms
Execution Time : 3 . 746 ms
Index build options
This section contains details about different index build options to use in
AlloyDB.
Parallel index builds
Only B-tree indexes support parallel index builds. Generally, the optimizer
cost model coupled with the available maintenance_work_mem automatically
determines whether to use parallelism to build an index. However, you can still
force parallel index builds if you temporarily change the number of workers at a
table level. Use the ALTER TABLE syntax provided in the following example:
ALTER TABLE public . user_test SET ( parallel_workers = 4 );
Remember that altering a table's parallel_workers setting also influences any
other table scanning operations, such as sequential scans. Therefore, reset the
setting after the index build is complete, as follows:
ALTER TABLE public . user_test RESET ( parallel_workers );
Alternatively, you can also influence the cost model for parallel index builds
by increasing maintenance_work_mem , but this configuration doesn't guarantee
additional parallelism use.
To check parallelism during an index build, issue the following query:
SELECT query , leader_pid ,
array_agg ( pid ) filter ( WHERE leader_pid != pid ) AS members
FROM pg_stat_activity
WHERE leader_pid IS NOT NULL
GROUP BY query , leader_pid ;
To determine the complete status of an index build, issue the following
query:
SELECT
*
FROM
pg_stat_progress_create_index ;
Build partitioned indexes in parallel
All the same principles of building indexes in parallel also work against
partitions. However, there's one additional option when you build indexes on
multiple partitions at once—consider first creating the top-level index
definition using the ONLY keyword:
CREATE INDEX dob_idx ON ONLY test_schema . employees ( dob );
Then, you can create the individual partition indexes either one at a time or
in parallel using concurrent sessions. The index becomes "valid" after the index
is created against all the partitions. Use the following example:
CREATE INDEX employees_p2024_dob_idx
ON employees_p2024 ( dob );
ALTER INDEX dob_idx
ATTACH PARTITION employees_p2024_dob_idx ;
. . . More partitions . . .
CREATE INDEX employees_p2025_dob_idx
ON employees_p2025 ( dob );
ALTER INDEX dob_idx
ATTACH PARTITION employees_p2025_dob_idx ;
Reindex partitioned indexes concurrently
As of PostgreSQL 15, you can also reindex partitioned indexes from the top-level
table. Use the following:
REINDEX ( verbose ) index concurrently employee_part_birth_date_idx ;
INFO : index "employees.employee_part_p1985_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 01 s , system : 0 . 00 s , elapsed : 0 . 02 s .
INFO : index "employees.employee_part_p1986_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 01 s , system : 0 . 00 s , elapsed : 0 . 02 s .
INFO : index "employees.employee_part_p1987_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 01 s , system : 0 . 00 s , elapsed : 0 . 02 s .
INFO : index "employees.employee_part_p1988_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 01 s , system : 0 . 00 s , elapsed : 0 . 01 s .
INFO : index "employees.employee_part_p1989_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 01 s , system : 0 . 00 s , elapsed : 0 . 01 s .
INFO : index "employees.employee_part_p1990_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 01 s , system : 0 . 00 s , elapsed : 0 . 01 s .
INFO : index "employees.employee_part_p1991_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 02 s .
INFO : index "employees.employee_part_p1992_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 01 s .
INFO : index "employees.employee_part_p1993_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 01 s .
INFO : index "employees.employee_part_p1994_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 01 s .
INFO : index "employees.employee_part_p1995_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 01 s .
INFO : index "employees.employee_part_p1996_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 01 s .
INFO : index "employees.employee_part_p1997_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 00 s .
INFO : index "employees.employee_part_p1998_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 00 s .
INFO : index "employees.employee_part_p1999_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 00 s .
INFO : index "employees.employee_part_p2000_birth_date_idx" was reindexed
DETAIL : CPU : user : 0 . 00 s , system : 0 . 00 s , elapsed : 0 . 00 s .
REINDEX
Time : 243 . 586 ms
AlloyDB index advisor
The AlloyDB index advisor can be a helpful quick-tuning
tool to use. Only a superuser can run it—either the
postgres user or another user who's been granted alloydbsuperuser . The
advisor runs automatically only on schemas specified by the search_path
parameter. The default is $user, public . If you need it to run against other
schemas automatically, then you must alter the search path at the instance
level to include those schemas. You can also run the advisor manually at any
time by altering the search_path in the session and following these steps:
Given the following table with 10m rows in it and no indexes:
Table "idx_advisor.user_test"
+ ------------------+--------------------------------+-----------+----------+---------+---------+--------
| Column | Type | Collation | Nullable | Default | Storage |
+ ------------------+--------------------------------+-----------+----------+---------+---------+--------
| id | integer | | not null | | plain |
| value | numeric | | | | main |
| user_id | integer | | | | plain |
| product_id | integer | | | | plain |
| product_meas_val | integer | | | | plain |
| effective_date | timestamp ( 3 ) without time zone | | | | plain |
+ ------------------+--------------------------------+-----------+----------+---------+---------+--------
Access method : heap
Run a query that could possibly benefit from an index:
SELECT * from idx_advisor . user_test where id = 500533 ;
+ -------------------------------------------------------------------------------------------------------
| QUERY PLAN
+ -------------------------------------------------------------------------------------------------------
| Gather ( cost = 1000 . 00 .. 1355167 . 85 rows = 1 width = 35 ) ( actual time = 35 . 726 .. 11776 . 593 rows = 1 loops = 1 )
| Output : id , value , user_id , product_id , product_meas_val , effective_date
| Workers Planned : 2
| Workers Launched : 2
| Buffers : shared hit = 68040 read = 765294 |
| I / O Timings : shared read = 11982 . 887 |
| - > Parallel Seq Scan on idx_advisor . user_test ( cost = 0 . 00 .. 1354167 . 75 rows = 1 width = 35 ) ( actual time = 7855 . 145 .. 11767 . 910 max time = 11773 . 628 rows = 0 loops = 3 )
| Output : id , value , user_id , product_id , product_meas_val , effective_date
| Filter : ( user_test . id = 500533 )
| Rows Removed by Filter : 33333333
| Buffers : shared hit = 68040 read = 765294
| I / O Timings : shared read = 11982 . 887
| Worker 0 : actual time = 11763 . 900 .. 11763 . 901 rows = 0 loops = 1
| Buffers : shared hit = 17926 read = 171102
| I / O Timings : shared read = 4201 . 131
| Worker 1 : actual time = 11766 . 199 .. 11766 . 202 rows = 0 loops = 1
| Buffers : shared hit = 13679 read = 173909
| I / O Timings : shared read = 4224 . 223
| Columnar Check : table is not in the columnar store
| Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , search_path = 'idx_advisor, public' , work_mem = '256MB'
| Query Identifier : 5000756889852866574
| Planning Time : 0 . 074 ms
| Execution Time : 11776 . 677 ms
| AlloyDB query id : 5950581718693815771
| AlloyDB plan id : 5724968831628856290
+ -------------------------------------------------------------------------------------------------------
You must include public because that's where the actual advisor
functionality is stored:
SET search_path to idx_advisor , public ;
SET
Time : 1 . 106 ms
Manually execute the advisor:
SELECT * FROM google_db_advisor_recommend_indexes ();
+ -------------------------------------------------+------------------------------+
| index | estimated_storage_size_in_mb |
+ -------------------------------------------------+------------------------------+
| CREATE INDEX ON "idx_advisor" . "user_test" ( "id" ) | 2492 |
+ -------------------------------------------------+------------------------------+
( 1 row )
Time : 219 . 517 ms
If you didn't set the search path, or no indexes were found, the result
looks like this:
SELECT * FROM google_db_advisor_recommend_indexes ();
+ -------+------------------------------+
| index | estimated_storage_size_in_mb |
+ -------+------------------------------+
+ -------+------------------------------+
( 0 rows )
Time : 31 . 643 ms
Create the index—note that the advisor doesn't specify any options
such as CONCURRENTLY :
CREATE INDEX ON "idx_advisor" . "user_test" ( "id" );
CREATE INDEX
Time : 76919 . 297 ms ( 01 : 16 . 919 )
Test the index:
EXPLAIN ( analyze , verbose , columnar_engine , costs , settings , buffers , wal , timing , summary , format text )
SELECT * from idx_advisor . user_test where id = 500533 ;
+ -------------------------------------------------------------------------------------------------------
| QUERY PLAN + -------------------------------------------------------------------------------------------------------
| Index Scan using user_test_id_idx on idx_advisor . user_test ( cost = 0 . 57 .. 2 . 79 rows = 1 width = 35 ) ( actual time = 0 . 733 .. 0 . 735 rows = 1 loops = 1 )
| Output : id , value , user_id , product_id , product_meas_val , effective_date
| Index Cond : ( user_test . id = 500533 )
| Buffers : shared hit = 2 read = 3
| I / O Timings : shared read = 0 . 699
| Columnar Check : table is not in the columnar store
| Settings : effective_cache_size = '9830040kB' , random_page_cost = '1.1' , search_path = 'idx_advisor, public' , work_mem = '256MB'
| Query Identifier : 5000756889852866574
| Planning :
| Buffers : shared hit = 18
| Planning Time : 0 . 886 ms
| Execution Time : 5 . 791 ms
| AlloyDB query id : 5950581718693815771
| AlloyDB plan id : 10740112764295423875
+ -------------------------------------------------------------------------------------------------------
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
