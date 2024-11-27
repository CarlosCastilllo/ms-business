
  import Route from '@ioc:Adonis/Core/Route';
  
  Route.group(() => {
    Route.get("/directions", "DirectionsController.find");
    Route.get("/directions/:id", "DirectionsController.find");
    Route.post("/directions", "DirectionsController.create");
    Route.put("/directions/:id", "DirectionsController.update");
    Route.delete("/directions/:id", "DirectionsController.delete");
  });
  