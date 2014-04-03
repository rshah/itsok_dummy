var categoryChildrenSub;
Deps.autorun(function() {
    var cats = Session.get('categoryChildren');
    console.log("Cats:" + cats);
    categoryChildrenSub = Meteor.subscribe('categoryChildren', cats);
});

var okCancelEvents = function (selector, callbacks) {
  var ok = callbacks.ok || function () {};
  var cancel = callbacks.cancel || function () {};

  var events = {};
  events['keyup '+selector+', keydown '+selector+', focusout '+selector] =
    function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);

      } else if (evt.type === "keyup" && evt.which === 13) {
        var value = String(evt.target.value || "");
        ok.call(this, value, evt);            
      } else if (evt.type === "focusout") {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };

  return events;
};

Template.navigation.events(
  okCancelEvents( '#searchTerm',
  {
    ok: function (text, evt) {
      Session.set("searchTerm", text);
      evt.target.value = "";
    }
  })
); 

Template.categoriesMenu.helpers({
  categories: function() {
    var name = this._id
    return Categories.find({parent: name},
        {fields: {_id: 1, parent: 1}, sort: { _id: 1}});
  }
});

Template.categoriesMenu.hasChildren = function() {
    var name = this._id
    console.log("CatMenu:" + name);
    return Categories.find({parent: name},
        {fields: {_id: 1, parent: 1}, sort: { _id: 1}}).fetch().length;
}

Template.categoriesMenu.isReady = function() {
    return categoryChildrenSub.ready();
}

Template.categoriesMenu.isOpen = function() {
    var name = this._id
    return isolateValue(function () {
        return _.contains(Session.get('categoryChildren'), name);
    });
}

Template.categoriesMenu.events({
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