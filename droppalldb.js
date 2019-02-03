db.adminCommand("listDatabases").databases.forEach(function(d) {
  if (
    d.name != "local" &&
    d.name != "admin" &&
    d.name != "eto" &&
    d.name != "config"
  )
    db.getSiblingDB(d.name).dropDatabase();
});
