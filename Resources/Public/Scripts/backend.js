// Generated by CoffeeScript 1.7.1
(function() {
  (function($, window) {
    return $(function() {
      var $textArea, editor;
      $textArea = $('#template-editor');
      if ($textArea.length) {
        return editor = CodeMirror.fromTextArea($textArea.get(0), {
          lineNumbers: true,
          mode: 'xml'
        });
      }
    });
  })(jQuery, window);

}).call(this);