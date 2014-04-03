Template.itemsList.helpers({
  items: function() {
    if (Session.get("searchTerm") != null) {
      
      var searchTerm = Session.get("searchTerm");
      searchTerm = searchTerm.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      
      var searchArray = [];
      searchArray.push({name_1: {$regex: searchTerm, $options:"i" }});
      searchArray.push({company: {$regex: searchTerm, $options:"i" }});
      
      console.log("searchTerm:" + searchTerm)
      
      return Items.find({ $or: searchArray});
    } else {
      return Items.find({});
    }    
  }
});

Template.dummyPaddings.times = function () {
  var numCols = 3;
  var padding = 0;
  var reminder = this.valueOf() % numCols;
  
  if (reminder > 0) { 
     padding = numCols - reminder;        
  }
  
  return _.range(padding);
};