#### What's the best way of structuring data on firebase?
#### https://stackoverflow.com/questions/16421179/whats-the-best-way-of-structuring-data-on-firebase?rq=1

UPDATE: There is now a doc on structuring data. Also, see this excellent post on NoSQL data structures.

The main issue with hierarchical data, as opposed to RDBMS, is that it's tempting to nest data because we can. Generally, you want to normalize data to some extent (just as you would do with SQL) despite the lack of join statements and queries.

You also want to denormalize in places where read efficiency is a concern. This is a technique used by all the large scale apps (e.g. Twitter and Facebook) and although it goes against our DRY principles, it's generally a necessary feature of scalable apps.

The gist here is that you want to work hard on writes to make reads easy. Keep logical components that are read separately separate (e.g. for chat rooms, don't put the messages, meta info about the rooms, and lists of members all in the same place, if you want to be able to iterate the groups later).

The primary difference between Firebase's real-time data and a SQL environment is querying data. There's no simple way to say "SELECT USERS WHERE X = Y", because of the real-time nature of the data (it's constantly changing, sharding, reconciling, etc, which requires a simpler internal model to keep the synchronized clients in check)

A simple example will probably set you in the right state of mind, so here goes:
