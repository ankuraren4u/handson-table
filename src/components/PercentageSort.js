var PercentageSort = function(sortOrder, columnMeta) {
    return function (a, b) {
      var parsedA = a[1] ? a[1].percentage : null;
      var parsedB = b[1] ? b[1].percentage : null;
      
      // Watch out when changing this part of code!
      // Check below returns 0 (as expected) when comparing empty string, null, undefined
      if (parsedA === parsedB || isNaN(parsedA) && isNaN(parsedB)) {
        return 0;
      }

      if (columnMeta.columnSorting.sortEmptyCells) {
        if ((0, _mixed.isEmpty)(a[1])) {
          return sortOrder ? -1 : 1;
        }

        if ((0, _mixed.isEmpty)(b[1])) {
          return sortOrder ? 1 : -1;
        }
      }

      if (isNaN(parsedA)) {
        return 1;
      }

      if (isNaN(parsedB)) {
        return -1;
      }

      if (parsedA < parsedB) {
        return sortOrder ? -1 : 1;
      } else if (parsedA > parsedB) {
        return sortOrder ? 1 : -1;
      }

      return 0;
    };
  }

  export default PercentageSort