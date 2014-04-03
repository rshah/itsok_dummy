var categoryChildrenSub;
Deps.autorun(function() {
    var cats = Session.get('categoryChildren');
    console.log("Cats:" + cats);
    categoryChildrenSub = Meteor.subscribe('categoryChildren', cats);
});

Template.sidebarStatuses.helpers({
  statuses: function() {
    return Statuses.find();
  }
}); 

Template.sidebarCategories.helpers({
  categories: function() {
    return Categories.find();
  }
}); 

Template.sidebarStatuses.events({
    "change #status": function(evt) {
        var statusId = $(evt.target).val();
        console.log("Status:" + statusId);
        Session.set("status", statusId);
    }
});

Template.mwCategories.categoriesExist = function() {
    return Categories.find().fetch().length;
}

// Recursive functions, booya! :)
Template.mwCategories_cats.categories = function() {
    var name = this._id
    return Categories.find({parent: name},
        {fields: {_id: 1, parent: 1}, sort: { _id: 1}});
}
 
Template.mwCategories_cats.hasChildren = function() {
    var name = this._id
    console.log("Cat:" + name);
    return Categories.find({parent: name},
        {fields: {_id: 1, parent: 1}, sort: { _id: 1}}).fetch().length;
}

Template.mwCategories_cats.isReady = function() {
    return categoryChildrenSub.ready();
}

Template.mwCategories_cats.isOpen = function() {
    var name = this._id
    return isolateValue(function () {
        return _.contains(Session.get('categoryChildren'), name);
    });
}
Template.mwCategories.events({
    'click span.catOpen': function(event) {
        var name = this._id;
        var open = Session.get('categoryChildren');
        var idx = open.indexOf(name);
        if (idx == -1)
            open.push(name);
        else
            open.splice(idx, 1);
        Session.set('categoryChildren', open);
    }
});