$(document).ready(function() {
    $('#hairtypes').material_select();
 });
 
 
 $(document).on('change','#hairtypes', function(){
     get_selected();         
})


function get_selected(){
     var data=[{id:1,name:"ABC"},{id:2,name:"XYZ"},{id:3,name:"PQR"}];
     
     var Options="";
    $.each(data, function(i, val){ 
      Options=Options+"<option value='"+val.id+"'>"+val.name+"</option>";
  });
  $('#hairtypes').empty();
  $('#hairtypes').append(Options);
  $('#hairtypes').material_select()
} 