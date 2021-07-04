$.getJSON('https://api.unsplash.com/users/keertikanagavel/data/?client_id=cs4zOC33bMNciS6RaRRp5Ge2V5oz2wdU4Rvu9w0wL5M',function(data){
  console.log(data);
 
  $.each(data,function(index,value){
    console.log(value);
   
    var name=value.user.name
   
    var bio=value.user.bio;
    $('name').text(name);
    $('bio').text(bio);
   
  });
});