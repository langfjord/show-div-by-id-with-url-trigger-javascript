<script>
  (function() {
    var query = window.location.search.slice(1);
    if (!query) return;

    var matches = query.match(/show\d+/g) || [];
    matches.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) {
        el.style.display = "block";
      }
    });
  })();
</script>
