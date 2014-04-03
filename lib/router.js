Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { 
        return [Meteor.subscribe('items'), Meteor.subscribe('companies'), Meteor.subscribe('categories')
        ]; 
    }
});

Router.map(function() {
    this.route('itemsList', {
      path: '/'
    });
    
    this.route('itemSubmit', {
      path: '/submit'
    });
    
    this.route('itemInCategory', {
      path: '/categories/:_id',
      data: function() {
              //Find child category
              var categories = Categories.find({$or:[{_id:this.params._id}, {ancestors:this.params._id}]},
                  {fields: {ancestors:0, parent:0}}).fetch();
              var catArray = [];
              categories.forEach(function(cat) {
                    catArray.push(cat._id);
              });
              
              templateData = { items: Items.find( { category: { $in:catArray} } ) };
              return templateData;
            }
    });
});
 
