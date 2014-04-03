Template.item.helpers({
  company_name: function(company) {
     var company = Companies.findOne(company);
     if (company != null) {
         return company.name_1;
     }
  }
});