// main
const setupNavResponsiveSearch = () => {
  try {
    $("#searchBtnMb").click(() => {
      $(".k-search-bar-mb").toggleClass("k-show");
      $(".k-navbar").hide();
    });

    $("#closeSearchBar").click(() => {
      $(".k-search-bar-mb").toggleClass("k-show");
      $(".k-navbar").show();
    });
  } catch (e) {
    console.error(e);
  }
};

const setupSidebarToggle = () => {
  try {
    $("#toggle-sidebar").click(() => {
      $(".k-sidebar").toggleClass("k-hidden");
      $(".k-content").toggleClass("k-hidden-sidebar");
      $("#toggle-sidebar i").toggleClass("fa-bars");
      $("#toggle-sidebar i").toggleClass("fa-ellipsis-v");

      refreshTotalWeightSparkline();
      refreshTotalDeliverySparkline();
    });
  } catch (e) {
    console.error(e);
  }
};

const setupSidebarItemsCollapse = () => {
  try {
    $("#orders-sidebar-item").click(() => {
      $("#orders-sidebar-section").toggle();
      $("#orders-sidebar-item span i").toggleClass("fa-caret-up");
      $("#orders-sidebar-item span i").toggleClass("fa-caret-down");
    });
    $("#products-sidebar-item").click(() => {
      $("#products-sidebar-section").toggle();
      $("#products-sidebar-item span i").toggleClass("fa-caret-up");
      $("#products-sidebar-item span i").toggleClass("fa-caret-down");
    });
    $("#drivers-sidebar-item").click(() => {
      $("#drivers-sidebar-section").toggle();
      $("#drivers-sidebar-item span i").toggleClass("fa-caret-up");
      $("#drivers-sidebar-item span i").toggleClass("fa-caret-down");
    });
  } catch (e) {
    console.error(e);
  }
};

$(document).ready(() => {
  //===============================================
  // SETUP LAYOUT. TO BE INCLUDED IN ALL PAGES
  //===============================================

  // setup sidebar toggle
  setupSidebarToggle();

  // setup sidebar collapsible items
  setupSidebarItemsCollapse();

  // setup navbar responsive search
  setupNavResponsiveSearch();
});
