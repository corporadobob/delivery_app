App.module('StaffModule.List', function(List, App, Backbone, Marionette, $, _){

  List.Controller = {
    listStaff: function(){
      var staffCollection = App.request('staff:allStaff');
      this.layoutView = this.getLayoutView();

      // instantiating all the subregions only when the layoutView is shown
      this.layoutView.on('show', function(){
        this.titleRegion();
        this.actionsRegion();
        this.newStaffRegion();
        this.staffIndexRegion(staffCollection);
      }, this);

      App.mainRegion.show(this.layoutView);
    },

    // Layout View
    getLayoutView: function(){
      return new List.LayoutView();
    },
    titleRegion: function(){
      var titleView = this.getTitleView();
      this.layoutView.titleRegion.show(titleView);
    },

    // Title View
    getTitleView: function(){
      return new List.TitleView();
    },
    actionsRegion: function(){
      var actionsView = this.getActionsView();
      this.layoutView.actionsRegion.show(actionsView);
    },

    // Actions View
    getActionsView: function(){
      return new List.ActionsView();
    },

    // New Staff View
    newStaffRegion: function(){
      var newStaffView = this.getNewStaffView();
      this.layoutView.newStaffRegion.show(newStaffView);
    },
    getNewStaffView: function(){
      return new List.NewStaffView();
    },

    // Index View
    staffIndexRegion: function(collection){
      var newIndexView = this.getStaffIndexView(collection);
      this.layoutView.staffIndexRegion.show(newIndexView);
    },
    getStaffIndexView: function(collection){
      return new List.StaffIndexView({
        collection: collection
      });
    }
  };

});
