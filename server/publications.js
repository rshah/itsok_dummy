//TODO: Refine this publication to publish only certain subset of data to client
Meteor.publish('items', function() {
  return Items.find();
}); 

Meteor.publish('companies', function() {
  return Companies.find();
}); 

Meteor.publish('categories', function() {
  return Categories.find();
});

Meteor.publish('categoryChildren', function(categories) {
    return Categories.find({parent: {$in: categories}},
        {fields: {_id: 1, parent: 1}});
});