describe('Popover: ', function() {
  beforeEach(function() {
    loadFixtures('popover_fixture.html');
    locastyle.popover.init();
  });

  afterEach(function() {
      locastyle.popover.destroyPopover();
  });

  describe('Popover creation', function() {

    it('Should create one popover for each trigger', function() {
      var elems     = document.querySelectorAll('[data-ls-module="popover"]').length;
      var popovers = document.querySelectorAll('.ls-popover').length;
      expect(elems).toEqual(popovers);
    });

  });

  describe('Popover behavior', function() {

    it('Should show a popover on click event', function() {
      pending();
      $('.ls-popover').hide();
      $('#popoverclick').trigger("click");
      expect($('#ls-popover-2').css("display")).toEqual("block");
    });

    it('Should s.ls-popoverhow and close a popover on repeated click events', function() {
      pending();
      $('.ls-popover').hide();
      $('#popoverclick').trigger('click');
      $('#popoverclick').trigger('click');
      expect($("#ls-popover-4").css('display')).toEqual('none');
    });

    it('Should show a popover on hover event', function() {
      pending();
      $('.ls-popover').hide();
      $('#popoverhover').trigger('mouseenter');
      expect($('#ls-popover-7').css("display")).toEqual("block");
    });

    it('Should show and close a popover on repeated hover events', function() {
      pending();
      var $popoverTrigger = $('#popoverhover');
      var $popover = $('.ls-popover');
      $popover.hide();
      $popoverTrigger.trigger('mouseenter');
      $popoverTrigger.trigger('mouseleave');
      expect( $popover.eq(2).css('display')  ).toEqual('none');
    });

  });

  describe('[unbind] When init is called multiple times', function () {

    it('should bind events on popover elements only one time', function () {
      locastyle.init();
      locastyle.init();
      locastyle.init();
      var $popoverTrigger = $('#popoverclick');
      var $popover = $('#ls-popover-' + $popoverTrigger.data('uniqueId'));
      $popover.hide();
      $popoverTrigger.trigger('click');
      $popoverTrigger.trigger('click');
      expect( $popover ).not.toBeVisible();
    });
  });

  describe('change component on small screens', function () {
    it('should not create a popover in small screens', function () {
      locastyle.breakpointClass = 'ls-screen-sm';
      locastyle.popover.destroyPopover();
      locastyle.popover.init();
      var $popoverTrigger = $('#popoverclick');
      var $popover = $('#ls-popover-' + $popoverTrigger.data('uniqueId'));
      expect( $popover[0] ).toBeUndefined();
    });

    it('should open popover as modal in small screens', function () {
      locastyle.breakpointClass = 'ls-screen-sm';
      locastyle.popover.init();
      var $popoverTrigger = $('#popoverclick');
      expect( $('.ls-modal')[0] ).not.toBeUndefined();
    });

  });

});
