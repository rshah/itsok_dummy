if (Items.find().count() === 0) {
    
var noodles = Categories.insert( { _id: "Noodles", ancestors: [ "Foods" ], parent: "Foods" } )
var chocolate = Categories.insert( { _id: "Chocolates", ancestors: [ "Foods", "Snack" ], parent: "Snack" } )
Categories.insert( { _id: "Snack", ancestors: [ "Foods" ], parent: "Foods" } )
Categories.insert( { _id: "Foods", ancestors: [ ], parent: null } )


  var chocolatemaker = Companies.insert({
    name_1: "Chocolate Maker",
    name_2: 'Chocolate Maker',
    name_3: 'Chocolate Maker'
  });
  
  var noodlemaker = Companies.insert({
    name_1: "Noodle Maker",
    name_2: 'Noodle Maker',
    name_3: "Noodle Maker"
  });
    
  Items.insert({
    name_1: 'Chocolate1',
    company: chocolatemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/1',
    category: chocolate
  });
  
  Items.insert({
    name_1: 'Chocolate2',
    company: chocolatemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/2',
    category: chocolate
  });
  
  Items.insert({
    name_1: 'Chocolate3',
    company: chocolatemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/3',
    category: chocolate
  });
  
  Items.insert({
    name_1: 'Chocolate4',
    company: chocolatemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/4',
    category: chocolate
  });
  
  Items.insert({
    name_1: 'Chocolate5',
    company: chocolatemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/5',
    category: chocolate
  });
  
  Items.insert({
    name_1: 'Chocolate6',
    company: chocolatemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/6',
    category: chocolate
  });
  
  Items.insert({
    name_1: 'Good Noodle1',
    company: noodlemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/7',
    category: noodles
  });

  Items.insert({
    name_1: 'Good Noodle2',
    company: noodlemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/8',
    category: noodles
  });
  
  Items.insert({
    name_1: 'Good Noodle3',
    company: noodlemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/9',
    category: noodles
  });

  Items.insert({
    name_1: 'Good Noodle4',
    company: noodlemaker,
    thumbnail: 'http://lorempixel.com/500/500/food/10',
    category: noodles
  });
}
