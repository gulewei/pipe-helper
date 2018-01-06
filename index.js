function pipe () {
  var pipeline = Array.prototype.slice.call(arguments)

  return function () {
    var init = pipeline[0].apply(undefined, arguments)

    return pipeline
      .slice(1)
      .reduce(
        function (prev, val) {
          return val(prev)
        },
        init
      )
  }
}

module.exports = pipe
