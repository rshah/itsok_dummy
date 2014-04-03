Template.itemSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var item = {
      name_1: $("#productName").val(),
      company: $("#company").val(),
      thumbnail: $("#thumbnail").val(),
      status:$(e.target).find('[id=status]').val()
    }

    item._id = Items.insert(item);    
    Router.go('itemsList');
  }
});
 
Template.itemSubmit.helpers({  
  companies: function() {
    return Companies.find();
  }
});