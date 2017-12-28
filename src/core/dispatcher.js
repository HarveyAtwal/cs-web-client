import _ from 'lodash'
import Events from 'core/events'

const dispatcher = {}
_.extend(dispatcher, Events)

dispatcher.subscribe = function(action, cb) {
  this.listenTo(this, action, cb)
}

dispatcher.unsubscribe = function(action, cb) {
  this.stopListening(Events, action, cb)
}

dispatcher.bindActions = function(actions) {
  Object.keys(actions).forEach((action) => {
    const cb = actions[action]
    this.subscribe(action, cb)
  });
}

dispatcher.publish = function(action, payload) {
  this.trigger(action, payload)
}

dispatcher.destroy = function() {
  this.stopListening()
}

dispatcher.on("all", function(action, payload) {
  if (process.env.NODE_ENV === 'development') { 
    console.log("Action Dispatched: ", action, payload);
  }
});

export default dispatcher