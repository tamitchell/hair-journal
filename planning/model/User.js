//Understanding Growthsphere Models

//The model represents the data, and does nothing else. 
//The model does NOT depend on the controller or the view. __Tom Dalling_

const User = new Schema({
    local: {  
      profilename: String,
      hairLength: String,
      hairType: String,
      StrandThickness: String,
      Density: String,
      Porosity: String
    },
    regimen: [
      {
        type: Schema.Types.ObjectId,
        ref: "Regimen"
      }
    ]
  });
  
  module.exports = mongoose.model("User", User);
  